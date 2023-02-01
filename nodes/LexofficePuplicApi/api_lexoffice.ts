// This is based on the Lexoffice Public API collection in Postman format as provided by Lexoffice
// You can find it at https://developers.lexoffice.io/docs/#samples

import { LexofficeApiCategoryItem } from './helpers';

export const lexOfficeApiCollection: LexofficeApiCategoryItem[] = [
	{
		name: 'Contacts',
		item: [
			{
				name: 'API Contact GET',
				properties: [
					{
						displayName: 'Contact ID',
						name: 'id',
						type: 'string',
						required: true,
						default: '',
					},
				],
				request: {
					method: 'GET',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
					],
					url: {
						raw: '{{resourceurl}}/v1/contacts/df315523-1e92-473a-9d00-052212da84f8',
						host: ['{{resourceurl}}'],
						path: ['v1', 'contacts', '{{id}}'],
					},
				},
				response: [],
			},
			{
				name: 'API Contact POST',
				properties: [
					{
						displayName: 'JSON',
						name: 'jsonBody',
						type: 'json',
						default: '',
					},
				],
				request: {
					method: 'POST',
					header: [
						{
							key: 'Content-Type',
							value: 'application/json',
						},
						{
							key: 'Accept',
							value: 'application/json',
						},
					],
					body: {
						mode: 'raw',
						raw: '{\n  "roles": {\n    "customer": {\n    },\n    "vendor": {\n    }\n  },\n  "company": {\n    "name": "Testfirma",\n    "taxNumber": "12345/12345",\n    "vatRegistrationId": "DE123456789",\n    "allowTaxFreeInvoices": true,\n    "contactPersons": [\n      {\n        "salutation": "Herr",\n        "firstName": "Max",\n        "lastName": "Mustermann",\n        "emailAddress": "contactpersonmail@lexoffice.de",\n        "phoneNumber": "08000/11111"\n      }\n    ]\n  },\n  "addresses": {\n    "billing": [\n      {\n        "supplement": "Rechnungsadressenzusatz",\n        "street": "Hauptstr. 5",\n        "zip": "12345",\n        "city": "Musterort",\n        "countryCode": "DE"\n      }\n    ],\n    "shipping": [\n      {\n        "supplement": "Lieferadressenzusatz",\n        "street": "Schulstr. 13",\n        "zip": "76543",\n        "city": "MUsterstadt",\n        "countryCode": "DE"\n      }\n    ]\n  },\n  "emailAddresses": {\n    "business": [\n      "business@lexoffice.de"\n    ],\n    "office": [\n      "office@lexoffice.de"\n    ],\n    "private": [\n      "private@lexoffice.de"\n    ],\n    "other": [\n      "other@lexoffice.de"\n    ]\n  },\n  "phoneNumbers": {\n    "business": [\n      "08000/1231"\n    ],\n    "office": [\n      "08000/1232"\n    ],\n    "mobile": [\n      "08000/1233"\n    ],\n    "private": [\n      "08000/1234"\n    ],\n    "fax": [\n      "08000/1235"\n    ],\n    "other": [\n      "08000/1236"\n    ]\n  },\n  "note": "Notizen"\n}',
					},
					url: {
						raw: '{{resourceurl}}/v1/contacts',
						host: ['{{resourceurl}}'],
						path: ['v1', 'contacts'],
					},
				},
				response: [],
			},
			{
				name: 'API Contact PUT',
				properties: [
					{
						displayName: 'Contact ID',
						name: 'id',
						type: 'string',
						required: true,
						default: '',
					},
					{
						displayName: 'JSON',
						name: 'jsonBody',
						type: 'json',
						default: '',
					},
				],
				request: {
					method: 'PUT',
					header: [
						{
							key: 'Content-Type',
							value: 'application/json',
						},
						{
							key: 'Accept',
							value: 'application/json',
						},
					],
					body: {
						mode: 'raw',
						raw: '{\n    "id": "df315523-1e92-473a-9d00-052212da84f8",\n    "version": 1,\n    "roles": {\n        "customer": {\n            "number": 10348\n        },\n        "vendor": {\n            "number": 70346\n        }\n    },\n    "company": {\n        "name": "Testfirma",\n        "taxNumber": "12345/12345",\n        "vatRegistrationId": "DE123456789",\n        "allowTaxFreeInvoices": true,\n        "contactPersons": [\n            {\n                "salutation": "Frau",\n                "firstName": "Miriam",\n                "lastName": "Musterfrau",\n                "primary": false,\n                "emailAddress": "contactpersonmail@lexoffice.de",\n                "phoneNumber": "08000/11111"\n            }\n        ]\n    },\n    "addresses": {\n        "billing": [\n            {\n                "supplement": "Rechnungsadressenzusatz",\n                "street": "Hauptstr. 5",\n                "zip": "12345",\n                "city": "Musterort",\n                "countryCode": "DE"\n            }\n        ],\n        "shipping": [\n            {\n                "supplement": "Lieferadressenzusatz",\n                "street": "Schulstr. 13",\n                "zip": "76543",\n                "city": "MUsterstadt",\n                "countryCode": "DE"\n            }\n        ]\n    },\n    "emailAddresses": {\n        "business": [\n            "business@lexoffice.de"\n        ],\n        "office": [\n            "office@lexoffice.de"\n        ],\n        "private": [\n            "private@lexoffice.de"\n        ],\n        "other": [\n            "other@lexoffice.de"\n        ]\n    },\n    "phoneNumbers": {\n        "business": [\n            "08000/1231"\n        ],\n        "office": [\n            "08000/1232"\n        ],\n        "mobile": [\n            "08000/1233"\n        ],\n        "private": [\n            "08000/1234"\n        ],\n        "fax": [\n            "08000/1235"\n        ],\n        "other": [\n            "08000/1236"\n        ]\n    },\n    "note": "Notizen",\n    "archived": false\n}',
					},
					url: {
						raw: '{{resourceurl}}/v1/contacts/df315523-1e92-473a-9d00-052212da84f8',
						host: ['{{resourceurl}}'],
						path: ['v1', 'contacts', '{{id}}'],
					},
				},
				response: [],
			},
			{
				name: 'API Contact GET Collection',
				properties: [
					{
						displayName: 'Page',
						name: 'page',
						type: 'number',
						default: '',
					},
				],
				request: {
					method: 'GET',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
					],
					url: {
						raw: '{{resourceurl}}/v1/contacts/?page=0',
						host: ['{{resourceurl}}'],
						path: ['v1', 'contacts'],
						query: [
							{
								key: 'page',
								value: '0',
							},
						],
					},
				},
				response: [],
			},
			{
				name: 'API Contact GET filter',
				properties: [
					{
						displayName: 'Vendor',
						name: 'vendor',
						type: 'boolean',
						default: true,
					},
					{
						displayName: 'Customer',
						name: 'customer',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'Page',
						name: 'page',
						type: 'number',
						default: '',
					},
				],
				request: {
					method: 'GET',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
					],
					url: {
						raw: '{{resourceurl}}/v1/contacts/?vendor=true&customer=false&page=0',
						host: ['{{resourceurl}}'],
						path: ['v1', 'contacts'],
						query: [
							{
								key: 'vendor',
								value: 'true',
							},
							{
								key: 'customer',
								value: 'false',
							},
							{
								key: 'page',
								value: '0',
							},
						],
					},
				},
				response: [],
			},
		],
	},
	{
		name: 'Countries',
		item: [
			{
				name: 'API Countries GET',
				request: {
					method: 'GET',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
					],
					url: {
						raw: '{{resourceurl}}/v1/countries',
						host: ['{{resourceurl}}'],
						path: ['v1', 'countries'],
					},
				},
				response: [],
			},
		],
	},
	// {
	// 	name: 'Event Subscriptions',
	// 	item: [
	// 		{
	// 			name: 'API Event Subscriptions GET',
	// 			request: {
	// 				method: 'GET',
	// 				header: [
	// 					{
	// 						key: 'Accept',
	// 						value: 'application/json',
	// 					},
	// 				],
	// 				url: {
	// 					raw: '{{resourceurl}}/v1/event-subscriptions/3f571aeb-2664-474b-90c8-2b9d8958871e',
	// 					host: ['{{resourceurl}}'],
	// 					path: ['v1', 'event-subscriptions', '3f571aeb-2664-474b-90c8-2b9d8958871e'],
	// 				},
	// 			},
	// 			response: [],
	// 		},
	// 		{
	// 			name: 'API Event Subscriptions Collection GET',
	// 			request: {
	// 				method: 'GET',
	// 				header: [
	// 					{
	// 						key: 'Accept',
	// 						value: 'application/json',
	// 					},
	// 				],
	// 				url: {
	// 					raw: '{{resourceurl}}/v1/event-subscriptions',
	// 					host: ['{{resourceurl}}'],
	// 					path: ['v1', 'event-subscriptions'],
	// 				},
	// 			},
	// 			response: [],
	// 		},
	// 		{
	// 			name: 'API Event Subscriptions POST',
	// 			request: {
	// 				method: 'POST',
	// 				header: [
	// 					{
	// 						key: 'Accept',
	// 						value: 'application/json',
	// 					},
	// 					{
	// 						key: 'Content-Type',
	// 						value: 'application/json',
	// 					},
	// 				],
	// 				body: {
	// 					mode: 'raw',
	// 					raw: '{\n\t"eventType": "contact.changed",\n\t"callbackUrl": "https://k0v182y5r7.execute-api.eu-central-1.amazonaws.com/webhookConsumerMock/webhook"\n}',
	// 				},
	// 				url: {
	// 					raw: '{{resourceurl}}/v1/event-subscriptions',
	// 					host: ['{{resourceurl}}'],
	// 					path: ['v1', 'event-subscriptions'],
	// 				},
	// 			},
	// 			response: [],
	// 		},
	// 		{
	// 			name: 'API Event Subscriptions DELETE',
	// 			request: {
	// 				method: 'DELETE',
	// 				header: [
	// 					{
	// 						key: 'Accept',
	// 						value: 'application/json',
	// 					},
	// 				],
	// 				body: {
	// 					mode: 'raw',
	// 					raw: '',
	// 				},
	// 				url: {
	// 					raw: '{{resourceurl}}/v1/event-subscriptions/3f571aeb-2664-474b-90c8-2b9d8958871e',
	// 					host: ['{{resourceurl}}'],
	// 					path: ['v1', 'event-subscriptions', '3f571aeb-2664-474b-90c8-2b9d8958871e'],
	// 				},
	// 			},
	// 			response: [],
	// 		},
	// 	],
	// },
	{
		name: 'Files',
		item: [
			{
				name: 'API File Upload',
				properties: [
					{
						displayName: 'Binary Property',
						name: 'binaryPropertyName',
						type: 'string',
						required: true,
						default: 'data',
						description: 'Name of the binary property from which to read the file data',
					},
				],
				request: {
					method: 'POST',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
						{
							key: 'Content-Type',
							value: 'multipart/form-data',
						},
					],
					url: {
						raw: '{{resourceurl}}/v1/files',
						host: ['{{resourceurl}}'],
						path: ['v1', 'files'],
					},
				},
				response: [],
			},
			{
				name: 'API File Download',
				properties: [
					{
						displayName: 'File ID',
						name: 'id',
						type: 'string',
						required: true,
						default: '',
					},
					{
						displayName: 'File Path',
						name: 'path',
						type: 'string',
						default: '/downloads',
						required: true,
						placeholder: '/invoices/2019/invoice_1.pdf',
						description: 'The file path of the file to download. Has to contain the full path.',
					},
					{
						displayName: 'Binary Property',
						name: 'binaryPropertyName',
						type: 'string',
						required: true,
						default: 'data',
						description: 'Name of the binary property to which to write the data of the read file',
					},
				],
				request: {
					method: 'GET',
					header: [],
					url: {
						raw: '{{resourceurl}}/v1/files/fa8ca265-e188-45aa-8818-eb89205ec3c9',
						host: ['{{resourceurl}}'],
						path: ['v1', 'files', '{{id}}'],
					},
					returnsBinary: true,
				},
				response: [],
			},
			{
				name: 'API File Download factoring pdf',
				properties: [
					{
						displayName: 'File ID',
						name: 'id',
						type: 'string',
						required: true,
						default: '',
					},
					{
						displayName: 'Render Type',
						name: 'renderType',
						type: 'string',
						required: true,
						default: 'factoring',
					},
					{
						displayName: 'File Path',
						name: 'path',
						type: 'string',
						default: '/downloads',
						required: true,
						placeholder: '/invoices/2019/invoice_1.pdf',
						description: 'The file path of the file to download. Has to contain the full path.',
					},
					{
						displayName: 'Binary Property',
						name: 'binaryPropertyName',
						type: 'string',
						required: true,
						default: 'data',
						description: 'Name of the binary property to which to write the data of the read file',
					},
				],
				request: {
					method: 'GET',
					header: [],
					returnsBinary: true,
					url: {
						raw: '{{resourceurl}}/v1/files/fa8ca265-e188-45aa-8818-eb89205ec3c9?renderType=factoring',
						host: ['{{resourceurl}}'],
						path: ['v1', 'files', '{{id}}'],
						query: [
							{
								key: 'renderType',
								value: 'factoring',
							},
						],
					},
				},
				response: [],
			},
		],
	},
	{
		name: 'Invoices',
		item: [
			{
				name: 'API Invoice GET',
				properties: [
					{
						displayName: 'Invoice ID',
						name: 'id',
						type: 'string',
						required: true,
						default: '',
					},
				],
				request: {
					method: 'GET',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
					],
					url: {
						raw: '{{resourceurl}}/v1/invoices/a7bcbf92-9111-4092-9f03-ebaf46d8ae93',
						host: ['{{resourceurl}}'],
						path: ['v1', 'invoices', '{{id}}'],
					},
				},
				response: [],
			},
			{
				name: 'API Invoice POST',
				properties: [
					{
						displayName: 'JSON',
						name: 'jsonBody',
						type: 'json',
						default: '',
					},
				],
				request: {
					method: 'POST',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
						{
							key: 'Content-Type',
							value: 'application/json',
						},
					],
					body: {
						mode: 'raw',
						raw: '{\n  "id": null,\n  "organizationId": null,\n  "createdDate": null,\n  "updatedDate": null,\n  "version": null,\n  "archived": false,\n  "voucherStatus": null,\n  "voucherNumber": null,\n  "voucherDate": "2017-02-22T00:00:00.000+01:00",\n  "dueDate": null,\n  "address": {\n    "contactId": null,\n    "name": "Bike & Ride GmbH & Co. KG",\n    "supplement": "Gebäude 10",\n    "street": "Musterstraße 42",\n    "city": "Freiburg",\n    "zip": "79112",\n    "countryCode": "DE"\n  },\n  "lineItems": [\n    {\n      "id": null,\n      "type": "custom",\n      "name": "Abus Kabelschloss Primo 590 ",\n      "description": "· 9,5 mm starkes, smoke-mattes Spiralkabel mit integrierter Halterlösung zur Befestigung am Sattelklemmbolzen · bewährter Qualitäts-Schließzylinder mit praktischem Wendeschlüssel · KabelØ: 9,5 mm, Länge: 150 cm",\n      "quantity": 2,\n      "unitName": "Stück",\n      "unitPrice": {\n        "currency": "EUR",\n        "netAmount": 13.4,\n        "grossAmount": 15.95,\n        "taxRatePercentage": 19\n      },\n      "discountPercentage": 50,\n      "lineItemAmount": 13.4\n    },\n    {\n      "id": null,\n      "type": "custom",\n      "name": "Aufwändige Montage",\n      "description": "Aufwand für arbeitsintensive Montagetätigkeit",\n      "quantity": 1,\n      "unitName": "Stunde",\n      "unitPrice": {\n        "currency": "EUR",\n        "netAmount": 8.32,\n        "grossAmount": 8.90,\n        "taxRatePercentage": 7\n      },\n      "discountPercentage": 0,\n      "lineItemAmount": 8.32\n    },\n    {\n      "id": null,\n      "type": "custom",\n      "name": "Energieriegel Testpaket",\n      "description": null,\n      "quantity": 1,\n      "unitName": "Stück",\n      "unitPrice": {\n        "currency": "EUR",\n        "netAmount": 5,\n        "grossAmount": 5,\n        "taxRatePercentage": 0\n      },\n      "discountPercentage": 0,\n      "lineItemAmount": 5\n    },\n    {\n      "type": "text",\n      "name": "Strukturieren Sie Ihre Belege durch Text-Elemente.",\n      "description": "Das hilft beim Verständnis"\n    }\n  ],\n  "totalPrice": {\n    "currency": "EUR",\n    "totalNetAmount": 26.72,\n    "totalGrossAmount": 29.85,\n    "taxRatePercentage": null,\n    "totalTaxAmount": 3.13,\n    "totalDiscountAbsolute": null,\n    "totalDiscountPercentage": null\n  },\n  "taxAmounts": [\n    {\n      "taxRatePercentage": 0,\n      "taxAmount": 0,\n      "amount": 5\n    },\n    {\n      "taxRatePercentage": 7,\n      "taxAmount": 0.58,\n      "amount": 8.9\n    },\n    {\n      "taxRatePercentage": 19,\n      "taxAmount": 2.55,\n      "amount": 15.95\n    }\n  ],\n  "taxConditions": {\n  \t"taxType": "net",\n  \t"taxTypeNote": null\n  },\n  "paymentConditions": {\n    "paymentTermLabel": "10 Tage - 3 %, 30 Tage netto",\n    "paymentTermDuration": 30,\n    "paymentDiscountConditions": {\n\t  "discountPercentage": 3,\n      "discountRange": 10\t\n    }\n  },\n  "shippingConditions": {\n    "shippingDate": "2017-04-22T00:00:00.000+02:00",\n    "shippingEndDate": null,\n    "shippingType": "delivery"\n  },\n  "title": "Rechnung",\n  "introduction": "Ihre bestellten Positionen stellen wir Ihnen hiermit in Rechnung",\n  "remark": "Vielen Dank für Ihren Einkauf"\n}',
					},
					url: {
						raw: '{{resourceurl}}/v1/invoices',
						host: ['{{resourceurl}}'],
						path: ['v1', 'invoices'],
						query: [
							{
								key: 'finalize',
								value: 'true',
								disabled: true,
							},
							{
								key: 'precedingSalesVoucherId',
								value: '{id}',
								disabled: true,
							},
						],
					},
				},
				response: [],
			},
			{
				name: 'API Invoice POST finalize',
				properties: [
					{
						displayName: 'JSON',
						name: 'jsonBody',
						type: 'json',
						default: '',
					},
				],
				request: {
					method: 'POST',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
						{
							key: 'Content-Type',
							value: 'application/json',
						},
					],
					body: {
						mode: 'raw',
						raw: '{\n  "id": null,\n  "organizationId": null,\n  "createdDate": null,\n  "updatedDate": null,\n  "version": null,\n  "archived": false,\n  "voucherStatus": null,\n  "voucherNumber": null,\n  "voucherDate": "2017-02-22T00:00:00.000+01:00",\n  "dueDate": null,\n  "address": {\n    "contactId": null,\n    "name": "Bike & Ride GmbH & Co. KG",\n    "supplement": "Gebäude 10",\n    "street": "Musterstraße 42",\n    "city": "Freiburg",\n    "zip": "79112",\n    "countryCode": "DE"\n  },\n  "lineItems": [\n    {\n      "id": null,\n      "type": "custom",\n      "name": "Abus Kabelschloss Primo 590 ",\n      "description": "· 9,5 mm starkes, smoke-mattes Spiralkabel mit integrierter Halterlösung zur Befestigung am Sattelklemmbolzen · bewährter Qualitäts-Schließzylinder mit praktischem Wendeschlüssel · KabelØ: 9,5 mm, Länge: 150 cm",\n      "quantity": 2,\n      "unitName": "Stück",\n      "unitPrice": {\n        "currency": "EUR",\n        "netAmount": 13.4,\n        "grossAmount": 15.95,\n        "taxRatePercentage": 19\n      },\n      "discountPercentage": 50,\n      "lineItemAmount": 13.4\n    },\n    {\n      "id": null,\n      "type": "custom",\n      "name": "Aufwändige Montage",\n      "description": "Aufwand für arbeitsintensive Montagetätigkeit",\n      "quantity": 1,\n      "unitName": "Stunde",\n      "unitPrice": {\n        "currency": "EUR",\n        "netAmount": 8.32,\n        "grossAmount": 8.90,\n        "taxRatePercentage": 7\n      },\n      "discountPercentage": 0,\n      "lineItemAmount": 8.32\n    },\n    {\n      "id": null,\n      "type": "custom",\n      "name": "Energieriegel Testpaket",\n      "description": null,\n      "quantity": 1,\n      "unitName": "Stück",\n      "unitPrice": {\n        "currency": "EUR",\n        "netAmount": 5,\n        "grossAmount": 5,\n        "taxRatePercentage": 0\n      },\n      "discountPercentage": 0,\n      "lineItemAmount": 5\n    },\n    {\n      "type": "text",\n      "name": "Strukturieren Sie Ihre Belege durch Text-Elemente.",\n      "description": "Das hilft beim Verständnis"\n    }\n  ],\n  "totalPrice": {\n    "currency": "EUR",\n    "totalNetAmount": 26.72,\n    "totalGrossAmount": 29.85,\n    "taxRatePercentage": null,\n    "totalTaxAmount": 3.13,\n    "totalDiscountAbsolute": null,\n    "totalDiscountPercentage": null\n  },\n  "taxAmounts": [\n    {\n      "taxRatePercentage": 0,\n      "taxAmount": 0,\n      "amount": 5\n    },\n    {\n      "taxRatePercentage": 7,\n      "taxAmount": 0.58,\n      "amount": 8.9\n    },\n    {\n      "taxRatePercentage": 19,\n      "taxAmount": 2.55,\n      "amount": 15.95\n    }\n  ],\n  "taxConditions": {\n  \t"taxType": "net",\n  \t"taxTypeNote": null\n  },\n  "paymentConditions": {\n    "paymentTermLabel": "10 Tage - 3 %, 30 Tage netto",\n    "paymentTermDuration": 30,\n    "paymentDiscountConditions": {\n\t  "discountPercentage": 3,\n      "discountRange": 10\t\n    }\n  },\n  "shippingConditions": {\n    "shippingDate": "2017-04-22T00:00:00.000+02:00",\n    "shippingEndDate": null,\n    "shippingType": "delivery"\n  },\n  "title": "Rechnung",\n  "introduction": "Ihre bestellten Positionen stellen wir Ihnen hiermit in Rechnung",\n  "remark": "Vielen Dank für Ihren Einkauf"\n}',
					},
					url: {
						raw: '{{resourceurl}}/v1/invoices?finalize=true',
						host: ['{{resourceurl}}'],
						path: ['v1', 'invoices'],
						query: [
							{
								key: 'finalize',
								value: 'true',
							},
						],
					},
				},
				response: [],
			},
			{
				name: 'API Invoice POST pursue',
				properties: [
					{
						displayName: 'JSON',
						name: 'jsonBody',
						type: 'json',
						default: '',
					},
				],
				event: [
					{
						listen: 'test',
						script: {
							exec: [''],
							type: 'text/javascript',
						},
					},
				],
				request: {
					method: 'POST',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
						{
							key: 'Content-Type',
							value: 'application/json',
						},
					],
					body: {
						mode: 'raw',
						raw: '{\n   "id":null,\n   "organizationId":null,\n   "createdDate":null,\n   "updatedDate":null,\n   "version":null,\n   "language":"de",\n   "archived":false,\n   "voucherStatus":null,\n   "voucherNumber":null,\n   "voucherDate":"2021-04-19T13:37:00.000+01:00",\n   "expirationDate":"2021-05-19T13:37:00.000+01:00",\n   "address":{\n      "contactId":null,\n      "name":"Berliner Kindl GmbH",\n      "street":"Jubiläumsweg 25",\n      "city":"Berlin",\n      "zip":"14089",\n      "countryCode":"DE"\n   },\n   "lineItems":[\n      {\n         "id":null,\n         "type":"custom",\n         "name":"Axa Rahmenschloss Defender RL",\n         "description":"Vollständig symmetrisches Design in metallicfarbener Ausführung. Der ergonomische Bedienkopf garantiert die große Benutzerfreundlichkeit dieses Schlosses. Sehr niedrige Kopfhöhe von 46 mm, also mehr Rahmenfreiheit... ",\n         "quantity":1,\n         "unitName":"Stück",\n         "unitPrice":{\n            "currency":"EUR",\n            "netAmount":20.08,\n            "grossAmount":23.9,\n            "taxRatePercentage":19\n         },\n         "discountPercentage":0,\n         "lineItemAmount":23.90,\n         "optional":false,\n         "alternative":false\n      },\n      {\n         "id":null,\n         "type":"custom",\n         "name":"Continental Rennradreifen Grand Prix 4000 S",\n         "description":"Der Star im Peloton · Tread Wear Indicators (TWI-Verschleißanzeigen) · geringer Rollwiderstand durch verbessertes ASC® (Activated Silica Compound) · erhöhter Pannenschutz durch Vectran®-Flüssigkristallfasern ·... ",\n         "quantity":1,\n         "unitName":"Stück",\n         "unitPrice":{\n            "currency":"EUR",\n            "netAmount":23.49,\n            "grossAmount":27.95,\n            "taxRatePercentage":19\n         },\n         "discountPercentage":0,\n         "lineItemAmount":27.95,\n         "optional":false,\n         "alternative":false\n      }\n   ],\n   "totalPrice":{\n      "currency":"EUR",\n      "totalNetAmount":43.57,\n      "totalGrossAmount":51.85,\n      "totalTaxAmount":8.28\n   },\n   "taxAmounts":[\n      {\n         "taxRatePercentage":19,\n         "taxAmount":8.28,\n         "netAmount":43.57\n      }\n   ],\n   "taxConditions":{\n      "taxType":"gross"\n   },\n   "shippingConditions":{\n      "shippingDate":"2021-05-19T00:00:00.000+02:00",\n      "shippingType":"delivery"\n   },\n   "title":"Rechnung",\n   "introduction":"Ihre bestellten Positionen stellen wir Ihnen hiermit in Rechnung",\n   "remark":"Vielen Dank für Ihren Einkauf"\n}',
					},
					url: {
						raw: '{{resourceurl}}/v1/invoices?precedingSalesVoucherId={id}',
						host: ['{{resourceurl}}'],
						path: ['v1', 'invoices'],
						query: [
							{
								key: 'precedingSalesVoucherId',
								value: '{id}',
							},
						],
					},
					description: 'Create invoice with precedingSalesVoucherId as reference.',
				},
				response: [],
			},
			{
				name: 'API Invoice GET document file',
				properties: [
					{
						displayName: 'Invoice ID',
						name: 'id',
						type: 'string',
						required: true,
						default: '',
					},
				],
				request: {
					method: 'GET',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
					],
					url: {
						raw: '{{resourceurl}}/v1/invoices/a7bcbf92-9111-4092-9f03-ebaf46d8ae93/document',
						host: ['{{resourceurl}}'],
						path: ['v1', 'invoices', '{{id}}', 'document'],
					},
				},
				response: [],
			},
		],
	},
	{
		name: 'Down Payment Invoices',
		item: [
			{
				name: 'API Down Payment Invoice GET',
				properties: [
					{
						displayName: 'Invoice ID',
						name: 'id',
						type: 'string',
						required: true,
						default: '',
					},
				],
				request: {
					method: 'GET',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
					],
					url: {
						raw: '{{resourceurl}}/v1/down-payment-invoices/d52370ee-5bf5-11eb-ac18-17b8d0fb237f',
						host: ['{{resourceurl}}'],
						path: ['v1', 'down-payment-invoices', '{{id}}'],
					},
				},
				response: [],
			},
		],
	},
	{
		name: 'Recurring Templates',
		item: [
			{
				name: 'API Recurring Template GET',
				properties: [
					{
						displayName: 'Template ID',
						name: 'id',
						type: 'string',
						required: true,
						default: '',
					},
				],
				request: {
					method: 'GET',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
					],
					url: {
						raw: '{{resourceurl}}/v1/recurring-templates/7b6ce389-8ebb-4492-9a2a-6aa1320b5fca',
						host: ['{{resourceurl}}'],
						path: ['v1', 'recurring-templates', '{{id}}'],
					},
				},
				response: [],
			},
			{
				name: 'API Recurring Template GET Collection',
				properties: [
					{
						displayName: 'Page',
						name: 'page',
						type: 'number',
						default: '',
					},
				],
				request: {
					method: 'GET',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
					],
					url: {
						raw: '{{resourceurl}}/v1/recurring-templates?page=0&sort=nextExecutionDate,DESC',
						host: ['{{resourceurl}}'],
						path: ['v1', 'recurring-templates'],
						query: [
							{
								key: 'page',
								value: '0',
							},
							{
								key: 'sort',
								value: 'nextExecutionDate,DESC',
							},
						],
					},
				},
				response: [],
			},
		],
	},
	{
		name: 'Credit Notes',
		item: [
			{
				name: 'API Credit Note GET',
				properties: [
					{
						displayName: 'Credit Note ID',
						name: 'id',
						type: 'string',
						required: true,
						default: '',
					},
				],
				request: {
					method: 'GET',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
					],
					url: {
						raw: '{{resourceurl}}/v1/credit-notes/854af5e4-323f-4fd1-b51e-0f83cdd98bcf',
						host: ['{{resourceurl}}'],
						path: ['v1', 'credit-notes', '{{id}}'],
					},
				},
				response: [],
			},
			{
				name: 'API Credit Note POST',
				properties: [
					{
						displayName: 'Finalize',
						name: 'finalize',
						type: 'boolean',
						default: true,
					},
					{
						displayName: 'Preceding Sales Voucher ID',
						name: 'precedingSalesVoucherId',
						type: 'string',
						default: '',
					},
					{
						displayName: 'JSON',
						name: 'jsonBody',
						type: 'json',
						default: '',
					},
				],
				request: {
					method: 'POST',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
						{
							key: 'Content-Type',
							value: 'application/json',
						},
					],
					body: {
						mode: 'raw',
						raw: '{\r\n  "id": null,\r\n  "organizationId": null,\r\n  "createdDate": null,\r\n  "updatedDate": null,\r\n  "version": null,\r\n  "archived": false,\r\n  "voucherStatus": null,\r\n  "voucherNumber": null,\r\n  "voucherDate": "2017-02-22T00:00:00.000+01:00",\r\n  "address": {\r\n    "contactId": null,\r\n    "name": "Bike & Ride GmbH & Co. KG",\r\n    "supplement": "Gebäude 10",\r\n    "street": "Musterstraße 42",\r\n    "city": "Freiburg",\r\n    "zip": "79112",\r\n    "countryCode": "DE"\r\n  },\r\n  "lineItems": [\r\n    {\r\n      "id": null,\r\n      "type": "custom",\r\n      "name": "Abus Kabelschloss Primo 590 ",\r\n      "description": "· 9,5 mm starkes, smoke-mattes Spiralkabel mit integrierter Halterlösung zur Befestigung am Sattelklemmbolzen · bewährter Qualitäts-Schließzylinder mit praktischem Wendeschlüssel · KabelØ: 9,5 mm, Länge: 150 cm",\r\n      "quantity": 2,\r\n      "unitName": "Stück",\r\n      "unitPrice": {\r\n        "currency": "EUR",\r\n        "netAmount": 13.4,\r\n        "grossAmount": 15.95,\r\n        "taxRatePercentage": 19\r\n      },\r\n      "lineItemAmount": 26.8\r\n    },\r\n    {\r\n      "id": null,\r\n      "type": "custom",\r\n      "name": "Energieriegel Testpaket",\r\n      "description": null,\r\n      "quantity": 1,\r\n      "unitName": "Stück",\r\n      "unitPrice": {\r\n        "currency": "EUR",\r\n        "netAmount": 5,\r\n        "grossAmount": 5,\r\n        "taxRatePercentage": 0\r\n      },\r\n      "lineItemAmount": 5\r\n    },\r\n    {\r\n      "type": "text",\r\n      "name": "Strukturieren Sie Ihre Belege durch Text-Elemente.",\r\n      "description": "Das hilft beim Verständnis"\r\n    }\r\n  ],\r\n  "totalPrice": {\r\n    "currency": "EUR",\r\n    "totalNetAmount": 31.8,\r\n    "totalGrossAmount": 36.89,\r\n    "taxRatePercentage": null,\r\n    "totalTaxAmount": 5.09,\r\n    "totalDiscountAbsolute": null,\r\n    "totalDiscountPercentage": null\r\n  },\r\n  "taxAmounts": [\r\n    {\r\n      "taxRatePercentage": 0,\r\n      "taxAmount": 0,\r\n      "amount": 5\r\n    },\r\n    {\r\n      "taxRatePercentage": 19,\r\n      "taxAmount": 5.09,\r\n      "amount": 26.8\r\n    }\r\n  ],\r\n  "taxConditions": {\r\n  \t"taxType": "net",\r\n  \t"taxTypeNote": null\r\n  },\r\n  "title": "Rechnungskorrektur",\r\n  "introduction": "Rechnungskorrektur zur Rechnung RE-XXXXX",\r\n  "remark": "Folgende Lieferungen/Leistungen schreiben wir Ihnen gut."\r\n}',
					},
					url: {
						raw: '{{resourceurl}}/v1/credit-notes',
						host: ['{{resourceurl}}'],
						path: ['v1', 'credit-notes'],
						query: [
							{
								key: 'finalize',
								value: 'true',
								disabled: true,
							},
							{
								key: 'precedingSalesVoucherId',
								value: '{id}',
								disabled: true,
							},
						],
					},
				},
				response: [],
			},
			{
				name: 'API Credit Note POST finalize',
				properties: [
					{
						displayName: 'Finalize',
						name: 'finalize',
						type: 'boolean',
						default: true,
					},
					{
						displayName: 'JSON',
						name: 'jsonBody',
						type: 'json',
						default: '',
					},
				],
				request: {
					method: 'POST',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
						{
							key: 'Content-Type',
							value: 'application/json',
						},
					],
					body: {
						mode: 'raw',
						raw: '{\r\n  "id": null,\r\n  "organizationId": null,\r\n  "createdDate": null,\r\n  "updatedDate": null,\r\n  "version": null,\r\n  "archived": false,\r\n  "voucherStatus": null,\r\n  "voucherNumber": null,\r\n  "voucherDate": "2017-02-22T00:00:00.000+01:00",\r\n  "address": {\r\n    "contactId": null,\r\n    "name": "Bike & Ride GmbH & Co. KG",\r\n    "supplement": "Gebäude 10",\r\n    "street": "Musterstraße 42",\r\n    "city": "Freiburg",\r\n    "zip": "79112",\r\n    "countryCode": "DE"\r\n  },\r\n  "lineItems": [\r\n    {\r\n      "id": null,\r\n      "type": "custom",\r\n      "name": "Abus Kabelschloss Primo 590 ",\r\n      "description": "· 9,5 mm starkes, smoke-mattes Spiralkabel mit integrierter Halterlösung zur Befestigung am Sattelklemmbolzen · bewährter Qualitäts-Schließzylinder mit praktischem Wendeschlüssel · KabelØ: 9,5 mm, Länge: 150 cm",\r\n      "quantity": 2,\r\n      "unitName": "Stück",\r\n      "unitPrice": {\r\n        "currency": "EUR",\r\n        "netAmount": 13.4,\r\n        "grossAmount": 15.95,\r\n        "taxRatePercentage": 19\r\n      },\r\n      "lineItemAmount": 26.8\r\n    },\r\n    {\r\n      "id": null,\r\n      "type": "custom",\r\n      "name": "Energieriegel Testpaket",\r\n      "description": null,\r\n      "quantity": 1,\r\n      "unitName": "Stück",\r\n      "unitPrice": {\r\n        "currency": "EUR",\r\n        "netAmount": 5,\r\n        "grossAmount": 5,\r\n        "taxRatePercentage": 0\r\n      },\r\n      "lineItemAmount": 5\r\n    },\r\n    {\r\n      "type": "text",\r\n      "name": "Strukturieren Sie Ihre Belege durch Text-Elemente.",\r\n      "description": "Das hilft beim Verständnis"\r\n    }\r\n  ],\r\n  "totalPrice": {\r\n    "currency": "EUR",\r\n    "totalNetAmount": 31.8,\r\n    "totalGrossAmount": 36.89,\r\n    "taxRatePercentage": null,\r\n    "totalTaxAmount": 5.09,\r\n    "totalDiscountAbsolute": null,\r\n    "totalDiscountPercentage": null\r\n  },\r\n  "taxAmounts": [\r\n    {\r\n      "taxRatePercentage": 0,\r\n      "taxAmount": 0,\r\n      "amount": 5\r\n    },\r\n    {\r\n      "taxRatePercentage": 19,\r\n      "taxAmount": 5.09,\r\n      "amount": 26.8\r\n    }\r\n  ],\r\n  "taxConditions": {\r\n  \t"taxType": "net",\r\n  \t"taxTypeNote": null\r\n  },\r\n  "title": "Rechnungskorrektur",\r\n  "introduction": "Rechnungskorrektur zur Rechnung RE-XXXXX",\r\n  "remark": "Folgende Lieferungen/Leistungen schreiben wir Ihnen gut."\r\n}',
					},
					url: {
						raw: '{{resourceurl}}/v1/credit-notes?finalize=true',
						host: ['{{resourceurl}}'],
						path: ['v1', 'credit-notes'],
						query: [
							{
								key: 'finalize',
								value: 'true',
							},
						],
					},
				},
				response: [],
			},
			{
				name: 'API Credit Note POST precedingSalesVoucherId',
				properties: [
					{
						displayName: 'Preceding Sales Voucher ID',
						name: 'precedingSalesVoucherId',
						type: 'string',
						default: '',
					},
					{
						displayName: 'JSON',
						name: 'jsonBody',
						type: 'json',
						default: '',
					},
				],
				event: [
					{
						listen: 'test',
						script: {
							exec: [''],
							type: 'text/javascript',
						},
					},
				],
				request: {
					method: 'POST',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
						{
							key: 'Content-Type',
							value: 'application/json',
						},
					],
					body: {
						mode: 'raw',
						raw: '{\r\n   "id":null,\r\n   "organizationId":null,\r\n   "createdDate":null,\r\n   "updatedDate":null,\r\n   "version":null,\r\n   "language":"de",\r\n   "archived":false,\r\n   "voucherStatus":null,\r\n   "voucherNumber":null,\r\n   "voucherDate":"2021-04-19T13:37:00.000+01:00",\r\n   "expirationDate":"2021-05-19T13:37:00.000+01:00",\r\n   "address":{\r\n      "contactId":null,\r\n      "name":"Berliner Kindl GmbH",\r\n      "street":"Jubiläumsweg 25",\r\n      "city":"Berlin",\r\n      "zip":"14089",\r\n      "countryCode":"DE"\r\n   },\r\n   "lineItems":[\r\n      {\r\n         "id":null,\r\n         "type":"custom",\r\n         "name":"Continental Rennradreifen Grand Prix 4000 S",\r\n         "description":"Der Star im Peloton · Tread Wear Indicators (TWI-Verschleißanzeigen) · geringer Rollwiderstand durch verbessertes ASC® (Activated Silica Compound) · erhöhter Pannenschutz durch Vectran®-Flüssigkristallfasern ·... ",\r\n         "quantity":1,\r\n         "unitName":"Stück",\r\n         "unitPrice":{\r\n            "currency":"EUR",\r\n            "netAmount":23.49,\r\n            "grossAmount":27.95,\r\n            "taxRatePercentage":19\r\n         },\r\n         "discountPercentage":0,\r\n         "lineItemAmount":27.95,\r\n         "optional":false,\r\n         "alternative":false\r\n      }\r\n   ],\r\n   "totalPrice":{\r\n      "currency":"EUR",\r\n      "totalNetAmount":23.49,\r\n      "totalGrossAmount":27.95,\r\n      "totalTaxAmount":4.46\r\n   },\r\n   "taxAmounts":[\r\n      {\r\n         "taxRatePercentage":19,\r\n         "taxAmount":4.46,\r\n         "netAmount":23.49\r\n      }\r\n   ],\r\n   "taxConditions":{\r\n      "taxType":"gross"\r\n   },\r\n  "title": "Rechnungskorrektur",\r\n  "introduction": "Rechnungskorrektur zur Rechnung {{invoiceVoucherNumber}}",\r\n  "remark": "Folgende Lieferungen/Leistungen schreiben wir Ihnen gut."\r\n}',
					},
					url: {
						raw: '{{resourceurl}}/v1/credit-notes?precedingSalesVoucherId={id}',
						host: ['{{resourceurl}}'],
						path: ['v1', 'credit-notes'],
						query: [
							{
								key: 'precedingSalesVoucherId',
								value: '{id}',
							},
						],
					},
				},
				response: [],
			},
			{
				name: 'API Credit Note GET document file',
				properties: [
					{
						displayName: 'Credit Note ID',
						name: 'id',
						type: 'string',
						required: true,
						default: '',
					},
				],
				request: {
					method: 'GET',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
					],
					url: {
						raw: '{{resourceurl}}/v1/credit-notes/854af5e4-323f-4fd1-b51e-0f83cdd98bcf/document',
						host: ['{{resourceurl}}'],
						path: ['v1', 'credit-notes', '{{id}}', 'document'],
					},
				},
				response: [],
			},
		],
	},
	{
		name: 'Order Confirmations',
		item: [
			{
				name: 'API Order Confirmations GET',
				properties: [
					{
						displayName: 'Order Confirmation ID',
						name: 'id',
						type: 'string',
						required: true,
						default: '',
					},
				],
				request: {
					method: 'GET',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
					],
					url: {
						raw: '{{resourceurl}}/v1/order-confirmations/{id}',
						host: ['{{resourceurl}}'],
						path: ['v1', 'order-confirmations', '{{id}}}'],
					},
					description: 'Sample to retrieve invoices from lexoffice by its resource id.',
				},
				response: [],
			},
			{
				name: 'API Order Confirmations POST',
				properties: [
					{
						displayName: 'Preceding Sales Voucher ID',
						name: 'precedingSalesVoucherId',
						type: 'string',
						default: '',
					},
					{
						displayName: 'JSON',
						name: 'jsonBody',
						type: 'json',
						default: '',
					},
				],
				request: {
					method: 'POST',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
						{
							key: 'Content-Type',
							value: 'application/json',
						},
					],
					body: {
						mode: 'raw',
						raw: '{\n  "voucherDate": "2017-05-03T00:00:00.000+02:00",\n  "address": {\n    "name": "Max Mustermann",\n    "street": "Musterstraße 1",\n    "city": "Freiburg",\n    "zip": "79111",\n    "countryCode": "DE"\n  },\n  "lineItems": [\n    {\n      "type": "custom",\n      "name": "Produkt",\n      "description": "Hier steht eine Beschreibung zur Position.",\n      "quantity": 1,\n      "unitName": "Stück",\n      "unitPrice": {\n        "currency": "EUR",\n        "netAmount": 100,\n        "grossAmount": 119,\n        "taxRatePercentage": 19\n      },\n      "discountPercentage": 0,\n      "lineItemAmount": 100\n    },\n    {\n      "type": "custom",\n      "name": "Dienstleistung",\n      "description": "Hier steht eine Beschreibung zur Position.",\n      "quantity": 1,\n      "unitName": "Stunde",\n      "unitPrice": {\n        "currency": "EUR",\n        "netAmount": 100,\n        "grossAmount": 107,\n        "taxRatePercentage": 7\n      },\n      "discountPercentage": 0,\n      "lineItemAmount": 100\n    },\n    {\n      "type": "custom",\n      "name": "Sonstiges",\n      "description": "Hier steht eine Beschreibung zur Position.",\n      "quantity": 1,\n      "unitName": "Pauschal",\n      "unitPrice": {\n        "currency": "EUR",\n        "netAmount": 100,\n        "grossAmount": 100,\n        "taxRatePercentage": 0\n      },\n      "discountPercentage": 0,\n      "lineItemAmount": 100\n    },\n    {\n      "type": "text",\n      "name": "Strukturieren Sie Ihre Belege durch Text-Elemente.",\n      "description": "Das hilft beim Verständnis"\n    }\n  ],\n  "totalPrice": {\n    "currency": "EUR",\n    "totalNetAmount": 300,\n    "totalGrossAmount": 326,\n    "totalTaxAmount": 26\n  },\n  "taxConditions": {\n    "taxType": "net"\n  },\n  "shippingConditions": {\n    "shippingDate": "2017-05-06T00:00:00.000+02:00",\n    "shippingType": "delivery"\n  },\n  "paymentConditions": {\n      "paymentTermLabel": "10 Tage - 3 %, 30 Tage netto",\n      "paymentTermDuration": 30,\n      "paymentDiscountConditions": {\n          "discountPercentage": 3,\n          "discountRange": 10\n      }\n  },\n  "title": "Auftragsbestätigung",\n  "introduction": "Gerne bestätigen wir Ihren Auftrag.",\n  "remark": "Wir freuen uns auf eine gute Zusammenarbeit.",\n  "deliveryTerms": "Lieferung an die angegebene Lieferadresse."\n}',
					},
					url: {
						raw: '{{resourceurl}}/v1/order-confirmations',
						host: ['{{resourceurl}}'],
						path: ['v1', 'order-confirmations'],
						query: [
							{
								key: 'precedingSalesVoucherId',
								value: '{id}',
								disabled: true,
							},
						],
					},
				},
				response: [],
			},
			{
				name: 'API Order Confirmations POST pursue',
				event: [
					{
						listen: 'test',
						script: {
							exec: [''],
							type: 'text/javascript',
						},
					},
				],
				properties: [
					{
						displayName: 'Preceding Sales Voucher ID',
						name: 'precedingSalesVoucherId',
						type: 'string',
						default: '',
					},
					{
						displayName: 'JSON',
						name: 'jsonBody',
						type: 'json',
						default: '',
					},
				],
				request: {
					method: 'POST',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
						{
							key: 'Content-Type',
							value: 'application/json',
						},
					],
					body: {
						mode: 'raw',
						raw: '{\n    "id": null,\n    "organizationId": null,\n    "createdDate": null,\n    "updatedDate": null,\n    "version": null,\n    "language": "de",\n    "archived": false,\n    "voucherStatus": null,\n    "voucherNumber": null,\n    "voucherDate": "2021-04-19T13:37:00.000+01:00",\n    "expirationDate": "2021-05-19T13:37:00.000+01:00",\n    "address": {\n        "contactId": null,\n        "name": "Berliner Kindl GmbH",\n        "street": "Jubiläumsweg 25",\n        "city": "Berlin",\n        "zip": "14089",\n        "countryCode": "DE"\n    },\n    "lineItems": [\n        {\n            "id": null,\n            "type": "custom",\n            "name": "Axa Rahmenschloss Defender RL",\n            "description": "Vollständig symmetrisches Design in metallicfarbener Ausführung. Der ergonomische Bedienkopf garantiert die große Benutzerfreundlichkeit dieses Schlosses. Sehr niedrige Kopfhöhe von 46 mm, also mehr Rahmenfreiheit... ",\n            "quantity": 1,\n            "unitName": "Stück",\n            "unitPrice": {\n                "currency": "EUR",\n                "netAmount": 20.08,\n                "grossAmount": 23.9,\n                "taxRatePercentage": 19\n            },\n            "discountPercentage": 0,\n            "lineItemAmount": 23.90,\n            "optional": false,\n            "alternative": false\n        },\n        {\n            "id": null,\n            "type": "custom",\n            "name": "Continental Rennradreifen Grand Prix 4000 S",\n            "description": "Der Star im Peloton · Tread Wear Indicators (TWI-Verschleißanzeigen) · geringer Rollwiderstand durch verbessertes ASC® (Activated Silica Compound) · erhöhter Pannenschutz durch Vectran®-Flüssigkristallfasern ·... ",\n            "quantity": 1,\n            "unitName": "Stück",\n            "unitPrice": {\n                "currency": "EUR",\n                "netAmount": 23.49,\n                "grossAmount": 27.95,\n                "taxRatePercentage": 19\n            },\n            "discountPercentage": 0,\n            "lineItemAmount": 27.95,\n            "optional": false,\n            "alternative": false\n        }\n    ],\n    "totalPrice": {\n        "currency": "EUR",\n        "totalNetAmount": 43.57,\n        "totalGrossAmount": 51.85,\n        "totalTaxAmount": 8.28\n    },\n    "taxAmounts": [\n        {\n            "taxRatePercentage": 19,\n            "taxAmount": 8.28,\n            "netAmount": 43.57\n        }\n    ],\n    "taxConditions": {\n        "taxType": "gross"\n    },\n    "shippingConditions":{\n      "shippingDate":"2021-05-19T00:00:00.000+02:00",\n      "shippingType":"delivery"\n   },\n   "title":"Auftragsbestätigung",\n   "introduction":"Gerne bestätigen wir Ihren Auftrag.",\n   "remark":"Wir freuen uns auf eine gute Zusammenarbeit.",\n   "deliveryTerms":"Lieferung an die angegebene Lieferadresse."\n}',
					},
					url: {
						raw: '{{resourceurl}}/v1/order-confirmations?precedingSalesVoucherId={id}',
						host: ['{{resourceurl}}'],
						path: ['v1', 'order-confirmations'],
						query: [
							{
								key: 'precedingSalesVoucherId',
								value: '{id}',
							},
						],
					},
				},
				response: [],
			},
			{
				name: 'API Order Confirmation GET document file',
				properties: [
					{
						displayName: 'Order Confirmation ID',
						name: 'id',
						type: 'string',
						required: true,
						default: '',
					},
				],
				request: {
					method: 'GET',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
					],
					url: {
						raw: '{{resourceurl}}/v1/order-confirmations/{id}/document',
						host: ['{{resourceurl}}'],
						path: ['v1', 'order-confirmations', '{{id}}', 'document'],
					},
				},
				response: [],
			},
		],
	},
	{
		name: 'Delivery Notes',
		item: [
			{
				name: 'API Delivery Notes GET',
				properties: [
					{
						displayName: 'Delivery Note ID',
						name: 'id',
						type: 'string',
						required: true,
						default: '',
					},
				],
				request: {
					method: 'GET',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
					],
					url: {
						raw: '{{resourceurl}}/v1/delivery-notes/69b92f7d-8649-4a28-b749-f924d8fcccd2',
						host: ['{{resourceurl}}'],
						path: ['v1', 'delivery-notes', '{{id}}'],
					},
				},
				response: [],
			},
			{
				name: 'API Delivery Notes POST',
				properties: [
					{
						displayName: 'Preceding Sales Voucher ID',
						name: 'precedingSalesVoucherId',
						type: 'string',
						default: '',
					},
					{
						displayName: 'JSON',
						name: 'jsonBody',
						type: 'json',
						default: '',
					},
				],
				request: {
					method: 'POST',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
						{
							key: 'Content-Type',
							value: 'application/json',
						},
					],
					body: {
						mode: 'raw',
						raw: '{\n  "voucherDate": "2017-05-03T00:00:00.000+02:00",\n  "address": {\n    "name": "Max Mustermann",\n    "street": "Musterstraße 1",\n    "city": "Freiburg",\n    "zip": "79111",\n    "countryCode": "DE"\n  },\n  "lineItems": [\n    {\n      "type": "custom",\n      "name": "Produkt",\n      "description": "Hier steht eine Beschreibung zur Position.",\n      "quantity": 1,\n      "unitName": "Stück",\n      "unitPrice": null\n    },\n    {\n      "type": "custom",\n      "name": "Dienstleistung",\n      "description": "Hier steht eine Beschreibung zur Position.",\n      "quantity": 1,\n      "unitName": "Stunde",\n      "unitPrice": null\n    },\n    {\n      "type": "custom",\n      "name": "Sonstiges",\n      "description": "Hier steht eine Beschreibung zur Position.",\n      "quantity": 1,\n      "unitName": "Pauschal",\n      "unitPrice": null\n    },\n    {\n      "type": "text",\n      "name": "Strukturieren Sie Ihre Belege durch Text-Elemente.",\n      "description": "Das hilft beim Verständnis"\n    }\n  ],\n  "taxConditions": {\n    "taxType": "net"\n  },\n  "shippingConditions": {\n    "shippingDate": "2017-05-22T00:00:00.000+02:00",\n    "shippingEndDate": null,\n    "shippingType": "delivery"\n  },\n  "title": "Lieferschein",\n  "introduction": "Wie vereinbart liefern wir Ihnen:",\n  "deliveryTerms": "Lieferung frei Haus.",\n  "remark": "Vielen Dank für Ihren Einkauf"\n}',
					},
					url: {
						raw: '{{resourceurl}}/v1/delivery-notes',
						host: ['{{resourceurl}}'],
						path: ['v1', 'delivery-notes'],
						query: [
							{
								key: 'precedingSalesVoucherId',
								value: '6cd54264-948d-44d4-9ac0-c85272e16361',
								disabled: true,
							},
						],
					},
				},
				response: [],
			},
			{
				name: 'API Delivery Notes POST pursue',
				properties: [
					{
						displayName: 'Preceding Sales Voucher ID',
						name: 'precedingSalesVoucherId',
						type: 'string',
						default: '',
					},
					{
						displayName: 'JSON',
						name: 'jsonBody',
						type: 'json',
						default: '',
					},
				],

				request: {
					method: 'POST',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
						{
							key: 'Content-Type',
							value: 'application/json',
						},
					],
					body: {
						mode: 'raw',
						raw: '{\n  "voucherDate": "2017-05-03T00:00:00.000+02:00",\n  "address": {\n    "name": "Max Mustermann",\n    "street": "Musterstraße 1",\n    "city": "Freiburg",\n    "zip": "79111",\n    "countryCode": "DE"\n  },\n  "lineItems": [\n    {\n      "type": "custom",\n      "name": "Produkt",\n      "description": "Hier steht eine Beschreibung zur Position.",\n      "quantity": 1,\n      "unitName": "Stück",\n      "unitPrice": null\n    },\n    {\n      "type": "custom",\n      "name": "Dienstleistung",\n      "description": "Hier steht eine Beschreibung zur Position.",\n      "quantity": 1,\n      "unitName": "Stunde",\n      "unitPrice": null\n    },\n    {\n      "type": "custom",\n      "name": "Sonstiges",\n      "description": "Hier steht eine Beschreibung zur Position.",\n      "quantity": 1,\n      "unitName": "Pauschal",\n      "unitPrice": null\n    },\n    {\n      "type": "text",\n      "name": "Strukturieren Sie Ihre Belege durch Text-Elemente.",\n      "description": "Das hilft beim Verständnis"\n    }\n  ],\n  "taxConditions": {\n    "taxType": "net"\n  },\n  "shippingConditions": {\n    "shippingDate": "2017-05-22T00:00:00.000+02:00",\n    "shippingEndDate": null,\n    "shippingType": "delivery"\n  },\n  "title": "Lieferschein",\n  "introduction": "Wie vereinbart liefern wir Ihnen:",\n  "deliveryTerms": "Lieferung frei Haus.",\n  "remark": "Vielen Dank für Ihren Einkauf"\n}',
					},
					url: {
						raw: '{{resourceurl}}/v1/delivery-notes',
						host: ['{{resourceurl}}'],
						path: ['v1', 'delivery-notes'],
						query: [
							{
								key: 'precedingSalesVoucherId',
								value: '6cd54264-948d-44d4-9ac0-c85272e16361',
								disabled: true,
							},
						],
					},
				},
				response: [],
			},
			{
				name: 'API Delivery Notes GET document file',
				properties: [
					{
						displayName: 'Delivery Note ID',
						name: 'id',
						type: 'string',
						required: true,
						default: '',
					},
				],
				request: {
					method: 'GET',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
					],
					url: {
						raw: '{{resourceurl}}/v1/delivery-notes/69b92f7d-8649-4a28-b749-f924d8fcccd2/document',
						host: ['{{resourceurl}}'],
						path: ['v1', 'delivery-notes', '{{id}}', 'document'],
					},
				},
				response: [],
			},
			{
				name: 'API Delivery Notes POST sendmail',
				properties: [
					{
						displayName: 'Delivery Note ID',
						name: 'id',
						type: 'string',
						required: true,
						default: '',
					},
					{
						displayName: 'JSON',
						name: 'jsonBody',
						type: 'json',
						default: '',
					},
				],
				request: {
					method: 'POST',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
							type: 'text',
						},
						{
							key: 'Content-Type',
							name: 'Content-Type',
							value: 'application/json',
							type: 'text',
						},
					],
					body: {
						mode: 'raw',
						raw: '{\n\t"recipients": ["lxo-team3@mailinator.com"],\n\t"message": "Message is optional",\n\t"signature": "Signature is optional",\n\t"attachments": []\n}',
						options: {
							raw: {
								language: 'json',
							},
						},
					},
					url: {
						raw: '{{resourceurl}}/v1/delivery-notes/69b92f7d-8649-4a28-b749-f924d8fcccd2/sendmail',
						host: ['{{resourceurl}}'],
						path: ['v1', 'delivery-notes', '{{id}}', 'sendmail'],
					},
				},
				response: [],
			},
		],
	},
	{
		name: 'Payment Conditions',
		item: [
			{
				name: '{{resourceurl}}/v1/payment-conditions',
				request: {
					method: 'GET',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
					],
					url: {
						raw: '{{resourceurl}}/v1/payment-conditions',
						host: ['{{resourceurl}}'],
						path: ['v1', 'payment-conditions'],
					},
				},
				response: [],
			},
		],
	},
	{
		name: 'Payments',
		item: [
			{
				name: 'API Payments GET',
				properties: [
					{
						displayName: 'Payment ID',
						name: 'id',
						type: 'string',
						required: true,
						default: '',
					},
				],
				request: {
					method: 'GET',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
					],
					url: {
						raw: '{{resourceurl}}/v1/payments/b15792a2-fd69-11ea-820b-679179d107ca',
						host: ['{{resourceurl}}'],
						path: ['v1', 'payments', '{{id}}'],
					},
				},
				response: [],
			},
		],
	},
	{
		name: 'Posting Categories',
		item: [
			{
				name: 'API Posting Categories GET',
				request: {
					method: 'GET',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
					],
					url: {
						raw: '{{resourceurl}}/v1/posting-categories',
						host: ['{{resourceurl}}'],
						path: ['v1', 'posting-categories'],
					},
				},
				response: [],
			},
		],
	},
	{
		name: 'Profile',
		item: [
			{
				name: 'API Profile GET',
				request: {
					method: 'GET',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
					],
					url: {
						raw: '{{resourceurl}}/v1/profile',
						host: ['{{resourceurl}}'],
						path: ['v1', 'profile'],
					},
				},
				response: [],
			},
		],
	},
	{
		name: 'Quotations',
		item: [
			{
				name: 'API Quotation GET',
				properties: [
					{
						displayName: 'Quotation ID',
						name: 'id',
						type: 'string',
						required: true,
						default: '',
					},
				],
				request: {
					method: 'GET',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
					],
					url: {
						raw: '{{resourceurl}}/v1/quotations/629c831d-c5e7-4ca5-8b94-ea3e3ba02fbd',
						host: ['{{resourceurl}}'],
						path: ['v1', 'quotations', '{{id}}'],
					},
				},
				response: [],
			},
			{
				name: 'API Quotation POST',
				properties: [
					{
						displayName: 'Finalize',
						name: 'finalize',
						type: 'boolean',
						default: true,
					},
					{
						displayName: 'JSON',
						name: 'jsonBody',
						type: 'json',
						default: '',
					},
				],
				event: [
					{
						listen: 'test',
						script: {
							exec: [
								'pm.test("Status code is 201", function () {',
								'    var jsonData = pm.response.json();',
								'    pm.response.to.have.status(201);',
								'    pm.environment.set("invoiceId", jsonData.id); // id from action result',
								'    console.log("created invoice has id " + pm.environment.get("invoiceId"));',
								'});',
								'',
							],
							type: 'text/javascript',
						},
					},
				],
				request: {
					method: 'POST',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
						{
							key: 'Content-Type',
							value: 'application/json',
						},
					],
					body: {
						mode: 'raw',
						raw: '{\n    "id": null,\n    "organizationId": null,\n    "createdDate": null,\n    "updatedDate": null,\n    "version": null,\n    "language": "de",\n    "archived": false,\n    "voucherStatus": null,\n    "voucherNumber": null,\n    "voucherDate": "2019-12-20T13:37:00.000+01:00",\n    "expirationDate": "2020-01-20T13:37:00.000+01:00",\n    "address": {\n        "contactId": null,\n        "name": "Berliner Kindl GmbH",\n        "street": "Jubiläumsweg 25",\n        "city": "Berlin",\n        "zip": "14089",\n        "countryCode": "DE"\n    },\n    "lineItems": [\n        {\n            "id": null,\n            "type": "custom",\n            "name": "Axa Rahmenschloss Defender RL",\n            "description": "Vollständig symmetrisches Design in metallicfarbener Ausführung. Der ergonomische Bedienkopf garantiert die große Benutzerfreundlichkeit dieses Schlosses. Sehr niedrige Kopfhöhe von 46 mm, also mehr Rahmenfreiheit... ",\n            "quantity": 1,\n            "unitName": "Stück",\n            "unitPrice": {\n                "currency": "EUR",\n                "netAmount": 20.08,\n                "grossAmount": 23.9,\n                "taxRatePercentage": 19\n            },\n            "discountPercentage": 0,\n            "lineItemAmount": 23.90,\n            "subItems": [\n                {\n                    "id": null,\n                    "type": "custom",\n                    "name": "Abus Kabelschloss Primo 590 ",\n                    "description": "· 9,5 mm starkes, smoke-mattes Spiralkabel mit integrierter Halterlösung zur Befestigung am Sattelklemmbolzen · bewährter Qualitäts-Schließzylinder mit praktischem Wendeschlüssel · KabelØ: 9,5 mm, Länge: 150 cm",\n                    "quantity": 1,\n                    "unitName": "Stück",\n                    "unitPrice": {\n                        "currency": "EUR",\n                        "netAmount": 13.4,\n                        "grossAmount": 15.95,\n                        "taxRatePercentage": 19\n                    },\n                    "discountPercentage": 0,\n                    "lineItemAmount": 15.95,\n                    "optional": false,\n                    "alternative": true\n                }\n            ],\n            "optional": false,\n            "alternative": false\n        },\n        {\n            "id": null,\n            "type": "custom",\n            "name": "Einfache Montage",\n            "description": "Aufwand für einfache Montagetätigkeit",\n            "quantity": 1,\n            "unitName": "Stunde",\n            "unitPrice": {\n                "currency": "EUR",\n                "netAmount": 4.12,\n                "grossAmount": 4.9,\n                "taxRatePercentage": 19\n            },\n            "discountPercentage": 0,\n            "lineItemAmount": 4.90,\n            "optional": true,\n            "alternative": false\n        },\n        {\n            "id": null,\n            "type": "custom",\n            "name": "Continental Rennradreifen Grand Prix 4000 S",\n            "description": "Der Star im Peloton · Tread Wear Indicators (TWI-Verschleißanzeigen) · geringer Rollwiderstand durch verbessertes ASC® (Activated Silica Compound) · erhöhter Pannenschutz durch Vectran®-Flüssigkristallfasern ·... ",\n            "quantity": 1,\n            "unitName": "Stück",\n            "unitPrice": {\n                "currency": "EUR",\n                "netAmount": 23.49,\n                "grossAmount": 27.95,\n                "taxRatePercentage": 19\n            },\n            "discountPercentage": 0,\n            "lineItemAmount": 27.95,\n            "optional": false,\n            "alternative": false\n        }\n    ],\n    "totalPrice": {\n        "currency": "EUR",\n        "totalNetAmount": 43.57,\n        "totalGrossAmount": 51.85,\n        "totalTaxAmount": 8.28\n    },\n    "taxAmounts": [\n        {\n            "taxRatePercentage": 19,\n            "taxAmount": 8.28,\n            "netAmount": 43.57\n        }\n    ],\n    "taxConditions": {\n        "taxType": "gross"\n    },\n    "paymentConditions": {\n        "paymentTermLabel": "10 Tage - 3 %, 30 Tage netto",\n        "paymentTermDuration": 30,\n        "paymentDiscountConditions": {\n            "discountPercentage": 3,\n            "discountRange": 10\n        }\n    },\n    "introduction": "Gerne bieten wir Ihnen an:",\n    "remark": "Wir freuen uns auf Ihre Auftragserteilung und sichern eine einwandfreie Ausführung zu.",\n    "title": "Angebot"\n}',
					},
					url: {
						raw: '{{resourceurl}}/v1/quotations',
						host: ['{{resourceurl}}'],
						path: ['v1', 'quotations'],
						query: [
							{
								key: 'finalize',
								value: 'true',
								disabled: true,
							},
						],
					},
				},
				response: [],
			},
		],
	},
	// {
	// 	name: 'Voucherlist',
	// 	item: [
	// 		{
	// 			name: 'API Voucherlist GET invoicing',
	// 			request: {
	// 				method: 'GET',
	// 				header: [
	// 					{
	// 						key: 'Accept',
	// 						value: 'application/json',
	// 					},
	// 				],
	// 				url: {
	// 					raw: '{{resourceurl}}/v1/voucherlist?voucherType=invoice,creditnote&voucherStatus=open,draft,paid,paidoff,voided',
	// 					host: ['{{resourceurl}}'],
	// 					path: ['v1', 'voucherlist'],
	// 					query: [
	// 						{
	// 							key: 'voucherType',
	// 							value: 'invoice,creditnote',
	// 						},
	// 						{
	// 							key: 'voucherStatus',
	// 							value: 'open,draft,paid,paidoff,voided',
	// 						},
	// 						{
	// 							key: 'archived',
	// 							value: '0',
	// 							disabled: true,
	// 						},
	// 						{
	// 							key: 'contactId',
	// 							value: '97c5794f-8ab2-43ad-b459-c5980b055e4d',
	// 							disabled: true,
	// 						},
	// 						{
	// 							key: 'voucherDateFrom',
	// 							value: '2021-08-01',
	// 							disabled: true,
	// 						},
	// 						{
	// 							key: 'voucherDateTo',
	// 							value: '2021-08-30',
	// 							disabled: true,
	// 						},
	// 						{
	// 							key: 'createdDateFrom',
	// 							value: '2021-08-01',
	// 							disabled: true,
	// 						},
	// 						{
	// 							key: 'createdDateTo',
	// 							value: '2021-08-30',
	// 							disabled: true,
	// 						},
	// 						{
	// 							key: 'updatedDateFrom',
	// 							value: '2021-08-01',
	// 							disabled: true,
	// 						},
	// 						{
	// 							key: 'updatedDateTo',
	// 							value: '2021-08-30',
	// 							disabled: true,
	// 						},
	// 						{
	// 							key: 'page',
	// 							value: '0',
	// 							disabled: true,
	// 						},
	// 						{
	// 							key: 'size',
	// 							value: '25',
	// 							disabled: true,
	// 						},
	// 						{
	// 							key: 'sort',
	// 							value: 'updatedDate,DESC',
	// 							disabled: true,
	// 						},
	// 					],
	// 				},
	// 			},
	// 			response: [],
	// 		},
	// 	],
	// },
	{
		name: 'Dunnings',
		item: [
			{
				name: 'API Dunning GET',
				properties: [
					{
						displayName: 'Dunning ID',
						name: 'id',
						type: 'string',
						required: true,
						default: '',
					},
				],
				request: {
					method: 'GET',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
					],
					url: {
						raw: '{{resourceurl}}/v1/dunnings/5d217758-ea2a-11eb-a8d0-47ec974ddbcf',
						host: ['{{resourceurl}}'],
						path: ['v1', 'dunnings', '{{id}}'],
					},
				},
				response: [],
			},
			{
				name: 'API Dunning POST',
				properties: [
					{
						displayName: 'Finalize',
						name: 'finalize',
						type: 'boolean',
						default: true,
					},
					{
						displayName: 'Preceding Sales Voucher ID',
						name: 'precedingSalesVoucherId',
						type: 'string',
						default: '',
					},
					{
						displayName: 'JSON',
						name: 'jsonBody',
						type: 'json',
						default: '',
					},
				],
				request: {
					method: 'POST',
					header: [
						{
							key: 'Accept',
							value: 'application/json',
						},
						{
							key: 'Content-Type',
							value: 'application/json',
						},
					],
					body: {
						mode: 'raw',
						raw: '{\n  "id": null,\n  "organizationId": null,\n  "createdDate": null,\n  "updatedDate": null,\n  "version": null,\n  "archived": false,\n  "voucherStatus": null,\n  "voucherDate": "2021-07-22T00:00:00.000+01:00",\n  "address": {\n    "contactId": null,\n    "name": "Bike & Ride GmbH & Co. KG",\n    "supplement": "Gebäude 10",\n    "street": "Musterstraße 42",\n    "city": "Freiburg",\n    "zip": "79112",\n    "countryCode": "DE"\n  },\n  "lineItems": [\n    {\n      "id": null,\n      "type": "custom",\n      "name": "Abus Kabelschloss Primo 590 ",\n      "description": "· 9,5 mm starkes, smoke-mattes Spiralkabel mit integrierter Halterlösung zur Befestigung am Sattelklemmbolzen · bewährter Qualitäts-Schließzylinder mit praktischem Wendeschlüssel · KabelØ: 9,5 mm, Länge: 150 cm",\n      "quantity": 2,\n      "unitName": "Stück",\n      "unitPrice": {\n        "currency": "EUR",\n        "netAmount": 13.4,\n        "grossAmount": 15.95,\n        "taxRatePercentage": 19\n      },\n      "discountPercentage": 50,\n      "lineItemAmount": 13.4\n    },\n    {\n      "id": null,\n      "type": "custom",\n      "name": "Aufwändige Montage",\n      "description": "Aufwand für arbeitsintensive Montagetätigkeit",\n      "quantity": 1,\n      "unitName": "Stunde",\n      "unitPrice": {\n        "currency": "EUR",\n        "netAmount": 8.32,\n        "grossAmount": 8.90,\n        "taxRatePercentage": 7\n      },\n      "discountPercentage": 0,\n      "lineItemAmount": 8.32\n    },\n    {\n      "id": null,\n      "type": "custom",\n      "name": "Energieriegel Testpaket",\n      "description": null,\n      "quantity": 1,\n      "unitName": "Stück",\n      "unitPrice": {\n        "currency": "EUR",\n        "netAmount": 5,\n        "grossAmount": 5,\n        "taxRatePercentage": 0\n      },\n      "discountPercentage": 0,\n      "lineItemAmount": 5\n    },\n    {\n      "type": "text",\n      "name": "Strukturieren Sie Ihre Belege durch Text-Elemente.",\n      "description": "Das hilft beim Verständnis"\n    }\n  ],\n  "totalPrice": {\n    "currency": "EUR",\n    "totalNetAmount": 26.72,\n    "totalGrossAmount": 29.85,\n    "taxRatePercentage": null,\n    "totalTaxAmount": 3.13,\n    "totalDiscountAbsolute": null,\n    "totalDiscountPercentage": null\n  },\n  "taxAmounts": [\n    {\n      "taxRatePercentage": 0,\n      "taxAmount": 0,\n      "amount": 5\n    },\n    {\n      "taxRatePercentage": 7,\n      "taxAmount": 0.58,\n      "amount": 8.9\n    },\n    {\n      "taxRatePercentage": 19,\n      "taxAmount": 2.55,\n      "amount": 15.95\n    }\n  ],\n  "taxConditions": {\n  \t"taxType": "net",\n  \t"taxTypeNote": null\n  },\n  "shippingConditions": {\n    "shippingDate": "2021-05-22T00:00:00.000+02:00",\n    "shippingEndDate": null,\n    "shippingType": "delivery"\n  },\n  "title": "Mahnung",\n  "introduction": "Wir bitten Sie, die nachfolgend aufgelisteten Lieferungen/Leistungen unverzüglich zu begleichen.",\n  "remark": "Sollten Sie den offenen Betrag bereits beglichen haben, betrachten Sie dieses Schreiben als gegenstandslos."\n}',
					},
					url: {
						raw: '{{resourceurl}}/v1/dunnings?precedingSalesVoucherId=f1caaa28-ea2a-11eb-81dd-b3d355880c85',
						host: ['{{resourceurl}}'],
						path: ['v1', 'dunnings'],
						query: [
							{
								key: 'finalize',
								value: 'true',
								disabled: true,
							},
							{
								key: 'precedingSalesVoucherId',
								value: '',
								disabled: true,
							},
						],
					},
				},
				response: [],
			},
		],
	},
];
