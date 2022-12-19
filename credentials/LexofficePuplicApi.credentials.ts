import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class LexofficePuplicApi implements ICredentialType {
	name = 'lexofficePuplicApi';
	displayName = 'Lexoffice Public API';
	documentationUrl = 'https://developers.lexoffice.io/docs';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'token',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			required: true,
			default: 'https://api.lexoffice.io',
		},
	];

	// This allows the credential to be used by other parts of n8n
	// stating how this credential is injected as part of the request
	// An example is the Http Request node that can make generic calls
	// reusing this credential
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '={{"Bearer " + $credentials.token}}',
			},
		},
	};

	// The block below tells how this credential can be tested
	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials?.domain}}',
			url: '/v1/countries',
		},
	};
}
