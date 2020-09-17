'use strict';

const { promisify } = require('util');
const aws = require('aws-sdk');
const dynalite = require('dynalite');

const createDocumentClient = config => {
	const documentClient = new aws.DynamoDB.DocumentClient(config);

	documentClient.get = promisify(documentClient.get);
	documentClient.put = promisify(documentClient.put);
	documentClient.update = promisify(documentClient.update);
	documentClient.delete = promisify(documentClient.delete);
	documentClient.scan = promisify(documentClient.scan);
	documentClient.query = promisify(documentClient.query);

	return documentClient;
};

const createTable = client => {
	client.createTable = promisify(client.createTable);

	return client.createTable({
		TableName: 'dogs',
		KeySchema: [{ AttributeName: 'id', KeyType: 'HASH' }],
		AttributeDefinitions: [
			{ AttributeName: 'id', AttributeType: 'S' },
		],
		ProvisionedThroughput: {
			ReadCapacityUnits: 10,
			WriteCapacityUnits: 10,
		},
	});
};
const createTestConfig = instance => ({
	region: 'us-west-1',
	endpoint: `http://localhost:${instance.address().port}`,
	credentials: {
		accessKeyId: 'none',
		secretAccessKey: 'none',
	},
});

const createDatabaseInstance = () =>
	dynalite({
		createTableMs: 0,
		updateTableMs: 0,
		deleteTableMs: 0,
	}).listen(0);

const createDatabaseClient = instance =>
	new aws.DynamoDB(createTestConfig(instance));

module.exports = {
    createDocumentClient,
    createTable,
	createTestConfig,
	createDatabaseInstance,
	createDatabaseClient,
};
