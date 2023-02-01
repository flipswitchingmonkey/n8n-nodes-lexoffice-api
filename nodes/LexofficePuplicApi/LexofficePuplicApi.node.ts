import type {
	IBinaryKeyData,
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeApiError } from 'n8n-workflow';
import {
	getApiItemByCategoryAndName,
	lexOfficeApiCollectionCategoryOptions,
	lexOfficeApiCollectionItemProperties,
} from './helpers';
import { OptionsWithUri } from 'request-promise-native';

export class LexofficePuplicApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Lexoffice Public API',
		name: 'lexofficePuplicApi',
		icon: 'file:LexofficePuplicApi.svg',
		group: ['output'],
		subtitle: '={{$parameter["category"] + ": " + $parameter["operation"]}}',
		description: 'Contacts the Lexoffice Public API',
		version: 1,
		defaults: {
			name: 'Lexoffice',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'lexofficePuplicApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Category',
				name: 'category',
				type: 'options',
				noDataExpression: true,
				options: [...lexOfficeApiCollectionCategoryOptions],
				default: '',
			},
			...lexOfficeApiCollectionItemProperties(),
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		let _item: INodeExecutionData;

		const category = this.getNodeParameter('category', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;
		const apiItem = getApiItemByCategoryAndName(category, operation);
		if (!apiItem) throw new NodeApiError(this.getNode(), { message: 'No API Item found' });

		const credentials = await this.getCredentials('lexofficePuplicApi');

		const baseUrl = `${credentials.domain}`;

		// For Post
		let body: IDataObject;
		// For Query string
		let qs: IDataObject;

		for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
			try {
				_item = items[itemIndex];

				const requestMethod = apiItem.request.method;
				let endpoint = apiItem.request.url.path.join('/');
				const headers = { Authorization: `Bearer ${credentials.token}` };
				body = {};
				qs = {};
				let formDataAsObject:
					| {
							file: { value: string; options: { filename: string; contentType: string } };
							type: string;
					  }
					| undefined;

				apiItem.request.header?.forEach((header) => {
					Object.assign(headers, { [header.key]: header.value });
				});

				apiItem.request.url.query?.forEach((query) => {
					const queryValue = this.getNodeParameter(query.key, itemIndex) ?? query.value;
					if (query.disabled && !this.getNodeParameter(query.key, itemIndex)) return;
					Object.assign(qs, { [query.key]: queryValue });
				});

				if (apiItem.properties) {
					await Promise.all(
						apiItem.properties.map(async (property) => {
							const value = this.getNodeParameter(property.name, itemIndex) as string;
							endpoint = endpoint.replace(`{{${property.name}}}`, value);
							if (property.name === 'jsonBody') {
								try {
									body = JSON.parse(value);
								} catch (error) {
									body = { msg: 'Error parsing JSON' };
								}
							}

							if (property.name === 'binaryPropertyName' && _item.binary?.hasOwnProperty(value)) {
								const binaryDataBuffer = await this.helpers.getBinaryDataBuffer(itemIndex, value);
								const binaryData = (_item.binary as IBinaryKeyData)[value];
								formDataAsObject = {
									file: {
										value: binaryDataBuffer,
										options: {
											filename: binaryData.fileName ?? 'unknown',
											contentType: binaryData.mimeType,
										},
									},
									type: 'voucher',
								};
							}
						}),
					);
				}
				const options: OptionsWithUri = {
					method: requestMethod,
					body,
					qs,
					uri: `${baseUrl}/${endpoint}`,
					headers,
					json: formDataAsObject ? false : true,
					formData: formDataAsObject ?? undefined,
				};

				try {
					let responseData;
					responseData = await this.helpers.request(options);

					if (apiItem.request.returnsBinary) {
						const newItem: INodeExecutionData = {
							json: items[itemIndex].json,
							binary: {},
							pairedItem: { item: itemIndex },
						};

						if (items[itemIndex].binary !== undefined) {
							// Create a shallow copy of the binary data so that the old
							// data references which do not get changed still stay behind
							// but the incoming data does not get changed.
							Object.assign(newItem.binary!, items[itemIndex].binary);
						}

						try {
							const dataPropertyName = this.getNodeParameter(
								'binaryPropertyName',
								itemIndex,
							) as string;
							const filePathDownload = this.getNodeParameter('path', itemIndex) as string;
							newItem.binary![dataPropertyName] = await this.helpers.prepareBinaryData(
								Buffer.from(responseData as string, 'base64'),
								filePathDownload,
							);
						} catch (error) {
							throw new NodeApiError(this.getNode(), error);
						}

						returnData.push(newItem);
					} else {
						returnData.push({ json: responseData });
					}
				} catch (error) {
					throw new NodeApiError(this.getNode(), error);
				}
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({ error: error.message, json: {}, itemIndex });
					continue;
				}
				throw error;
			}
		}
		return this.prepareOutputData(returnData);
	}
}
