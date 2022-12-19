import { INodeProperties } from 'n8n-workflow';
import { lexOfficeApiCollection } from './api_lexoffice';

export const lexOfficeApiCollectionCategoryOptions: { name: string; value: string }[] =
	lexOfficeApiCollection.map((category) => {
		return {
			name: category.name,
			value: category.name,
		};
	});

export const lexOfficeApiCollectionItemProperties = (): INodeProperties[] => {
	const properties: INodeProperties[] = [];
	lexOfficeApiCollection.forEach((category) => {
		const categoryItems = category.item.map((item) => {
			return {
				name: item.name,
				value: item.name,
			};
		});
		properties.push({
			displayName: 'Operation',
			name: 'operation',
			type: 'options',
			displayOptions: {
				show: {
					category: [category.name],
				},
			},
			noDataExpression: true,
			options: [...categoryItems],
			default: '',
		});
		category.item.forEach((item) => {
			if (item.properties) {
				item.properties.forEach((prop) => {
					prop.displayOptions = {
						show: {
							category: [category.name],
							operation: [item.name],
						},
					};
					if (prop.type === 'json' && item.request.body?.mode === 'raw' && item.request.body?.raw) {
						prop.default = item.request.body.raw;
					}
					prop.description = prop.description ?? item.request.description;
					properties.push(prop);
				});
			}
		});
	});
	return properties;
};

// this is not a particularly sophisticated search - it assumes that all api calls are in a category folder
// and within, all calles are a flat list. this is the case for the lexoffice api, but may not be for others.
export const getApiItemByCategoryAndName = (
	category: string,
	name: string,
): LexofficeApiItem | undefined => {
	const categoryObj = lexOfficeApiCollection.find(
		(x) => x.name === category && x.hasOwnProperty('item'),
	);
	if (categoryObj) {
		const apiObj = categoryObj.item.find((x) => x.name === name);
		if (apiObj) {
			return apiObj;
		}
	}
	return undefined;
};

export interface LexofficeApiCategoryItem {
	name: string;
	item: LexofficeApiItem[];
}

export interface LexofficeApiItem {
	name: string;
	request: Request;
	response: Response[];
	event?: any[]; // we don't care about these...
	properties?: INodeProperties[]; // ui elements
}

interface keyValuePair {
	key: string;
	value: string;
	type?: string;
	disabled?: boolean;
	name?: string;
}

interface Request {
	// auth
	header?: keyValuePair[];
	method: 'GET' | 'PUT' | 'POST' | 'PATCH' | 'DELETE';
	body?: {
		mode: 'raw' | 'urlencoded' | 'formdata' | 'file';
		raw?: string;
		formdata?: keyValuePair[];
		options?: {
			raw?: any;
		};
	};
	url: {
		raw: string;
		host: string[];
		path: string[];
		query?: keyValuePair[];
	};
	description?: string;
	returnsBinary?: boolean;
}

interface Response {
	name: string;
	status: string;
	code: number;
	body: string;
}
