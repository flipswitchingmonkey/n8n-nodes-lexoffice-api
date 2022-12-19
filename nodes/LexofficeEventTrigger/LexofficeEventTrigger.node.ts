import {
	INodeType,
	INodeTypeDescription,
	IWebhookFunctions,
	IWebhookResponseData,
} from 'n8n-workflow';

export class LexofficeEventTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Lexoffice Event Trigger',
		name: 'lexofficeEventTrigger',
		icon: 'file:LexofficePuplicApi.svg',
		group: ['trigger'],
		subtitle: '={{"Events: " + $parameter["events"]}}',
		description: 'Webhook expecting Lexoffice Event Payloads',
		version: 1,
		defaults: {
			name: 'Lexoffice Event Trigger',
		},
		inputs: [],
		outputs: ['main'],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: 'webhook',
			},
		],
		properties: [
			{
				displayName: 'Events',
				name: 'events',
				type: 'multiOptions',
				required: true,
				default: ['*'],
				options: [
					{
						name: '*',
						value: '*',
						description: 'Any time any event is triggered (Wildcard Event)',
					},
					{
						name: 'contact.changed',
						value: 'contact.changed',
						description:
							'A lexoffice contact has changed. You should get the updated contact details.',
					},
					{
						name: 'contact.created',
						value: 'contact.created',
						description: 'A new contact was created in lexoffice',
					},
					{
						name: 'contact.deleted',
						value: 'contact.deleted',
						description:
							'A lexoffice contact was deleted. Depending on your application, you should unlink the lexoffice contact on your site or delete it as well.',
					},
					{
						name: 'credit-note.changed',
						value: 'credit-note.changed',
						description:
							'A credit note has changed. Get the updated credit note by calling the credit notes endpoint. Please note that the status may also have changed.',
					},
					{
						name: 'credit-note.created',
						value: 'credit-note.created',
						description:
							'A new credit note was created in lexoffice. Get the new credit note by calling the credit notes endpoint.',
					},
					{
						name: 'credit-note.deleted',
						value: 'credit-note.deleted',
						description: 'A credit note was deleted in lexoffice',
					},
					{
						name: 'credit-note.status.changed',
						value: 'credit-note.status.changed',
						description:
							'The status of a credit note has changed. Update the credit note by calling the credit notes endpoint to retrieve the new status.',
					},
					{
						name: 'delivery-note.changed',
						value: 'delivery-note.changed',
						description:
							'A delivery note has changed. Get the updated delivery note by calling the delivery note endpoint.',
					},
					{
						name: 'delivery-note.created',
						value: 'delivery-note.created',
						description:
							'A new delivery note was created in lexoffice. Get the new delivery note by calling the delivery note endpoint.',
					},
					{
						name: 'delivery-note.deleted',
						value: 'delivery-note.deleted',
						description: 'A delivery note was deleted in lexoffice',
					},
					{
						name: 'down-payment-invoice.changed',
						value: 'down-payment-invoice.changed',
						description:
							'A down payment invoice has changed. Get the updated down payment invoice by calling the down payment invoices endpoint. Please note that the status may also have changed.',
					},
					{
						name: 'down-payment-invoice.created',
						value: 'down-payment-invoice.created',
						description:
							'A new down payment invoice was created in lexoffice. Get the new down payment invoice by calling the down payment invoices endpoint.',
					},
					{
						name: 'down-payment-invoice.deleted',
						value: 'down-payment-invoice.deleted',
						description: 'A down payment invoice was deleted in lexoffice',
					},
					{
						name: 'down-payment-invoice.status.changed',
						value: 'down-payment-invoice.status.changed',
						description:
							'The status of a down payment invoice has changed. Update the down payment invoice by calling the down payment invoices endpoint to retrieve the new status.',
					},
					{
						name: 'dunning.changed',
						value: 'dunning.changed',
						description:
							'A dunning has changed. Get the updated dunning by calling the dunning endpoint.',
					},
					{
						name: 'dunning.created',
						value: 'dunning.created',
						description:
							'A new dunning was created in lexoffice. Get the new dunning by calling the dunning endpoint.',
					},
					{
						name: 'dunning.deleted',
						value: 'dunning.deleted',
						description: 'A dunning was deleted in lexoffice',
					},
					{
						name: 'invoice.changed',
						value: 'invoice.changed',
						description:
							'An invoice has changed. Get the updated invoice by calling the invoices endpoint. Please note that the status may also have changed.',
					},
					{
						name: 'invoice.created',
						value: 'invoice.created',
						description:
							'A new invoice was created in lexoffice. Get the new invoice by calling the invoices endpoint.',
					},
					{
						name: 'invoice.deleted',
						value: 'invoice.deleted',
						description: 'An invoice was deleted in lexoffice',
					},
					{
						name: 'invoice.status.changed',
						value: 'invoice.status.changed',
						description:
							'The status of an invoice has changed. Update the invoice by calling the invoices endpoint to retrieve the new status.',
					},
					{
						name: 'order-confirmation.changed',
						value: 'order-confirmation.changed',
						description:
							'An order confirmation has changed. Get the updated order confirmation by calling the order confirmations endpoint. Please note that the status may also have changed.',
					},
					{
						name: 'order-confirmation.created',
						value: 'order-confirmation.created',
						description:
							'A new order confirmation was created in lexoffice. Get the new order confirmation by calling the order confirmations endpoint.',
					},
					{
						name: 'order-confirmation.deleted',
						value: 'order-confirmation.deleted',
						description: 'An order confirmation was deleted in lexoffice',
					},
					{
						name: 'order-confirmation.status.changed',
						value: 'order-confirmation.status.changed',
						description:
							'The status of an order confirmation has changed. Update the order confirmation by calling the order confirmations endpoint to retrieve the new status. Please note that at this time there are no status transitions triggering the status changed event for order confirmations. This event solely exists to provide symmetric events for all voucher types.',
					},
					{
						name: 'payment.changed',
						value: 'payment.changed',
						description:
							'The payment of a bookkeeping or sales voucher has changed due to a manual payment or a transaction assignment. Please use the payments endpoint or the respective resource endpoints to retrieve further information about the payment status of the resource. Please note that this event will also be triggered when changing the status of invoices and credit notes from open to draft. Requesting payments of draft vouchers using the payments endpoint will result in 406 HTTP status codes. This is not an error condition.',
					},
					{
						name: 'quotation.changed',
						value: 'quotation.changed',
						description:
							'A quotation has changed. Get the updated quotation by calling the quotations endpoint. Please note that the status may also have changed.',
					},
					{
						name: 'quotation.created',
						value: 'quotation.created',
						description:
							'A new quotation was created in lexoffice. Get the new quotation by calling the quotations endpoint.',
					},
					{
						name: 'quotation.deleted',
						value: 'quotation.deleted',
						description: 'A quotation was deleted in lexoffice',
					},
					{
						name: 'quotation.status.changed',
						value: 'quotation.status.changed',
						description:
							'The status of a quotation has changed. Update the quotation by calling the quotations endpoint to retrieve the new status.',
					},
					{
						name: 'recurring-template.changed',
						value: 'recurring-template.changed',
						description:
							'A template for recurring invoices has changed. Get the updated recurring template by calling the recurring templates endpoint.',
					},
					{
						name: 'recurring-template.created',
						value: 'recurring-template.created',
						description:
							'A new template for recurring invoices was created in lexoffice. Get the new recurring template by calling the recurring templates endpoint.',
					},
					{
						name: 'recurring-template.deleted',
						value: 'recurring-template.deleted',
						description: 'A template for recurring invoices was deleted in lexoffice',
					},
					{
						name: 'token.revoked',
						value: 'token.revoked',
						description:
							'The refresh token was revoked, hence is invalid. The resourceId in the webhook callback refers to the connectionId you retrieve using the profile endpoint. Please store the refresh token to the connectionId prior to the registration on this event.',
					},
					{
						name: 'voucher.changed',
						value: 'voucher.changed',
						description:
							'A voucher has changed. Get the updated voucher by calling the vouchers endpoint.',
					},
					{
						name: 'voucher.created',
						value: 'voucher.created',
						description:
							'A new (bookkeeping) voucher was created in lexoffice. Get the new voucher by calling the vouchers endpoint.',
					},
					{
						name: 'voucher.deleted',
						value: 'voucher.deleted',
						description: 'A voucher was deleted in lexoffice',
					},
					{
						name: 'voucher.status.changed',
						value: 'voucher.status.changed',
						description:
							'The status of a voucher has changed. Get the updated voucher by calling the vouchers endpoint.',
					},
				],
			},
		],
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const bodyData = this.getBodyData();
		const req = this.getRequestObject();

		const events = this.getNodeParameter('events', []) as string[];

		const eventType = bodyData.eventType as string | undefined;

		if (eventType === undefined || (!events.includes('*') && !events.includes(eventType))) {
			// If not eventType is defined or when one is defined but we are not
			// listening to it do not start the workflow.
			return {};
		}

		return {
			workflowData: [this.helpers.returnJsonArray(req.body)],
		};
	}
}
