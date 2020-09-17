'use strict';

const test = require('ava');

const {
	createDatabaseInstance,
	createDatabaseClient,
    createTestConfig,
    createTable,
    createDocumentClient,
} = require('./database');
const { createPostDog } = require('./post-dog');

const testInput = {
    id: 'DOGGO1',
    name: 'Alfred',
};

test.beforeEach('start database', t => {
	t.context.databaseInstance = createDatabaseInstance();
	t.context.databaseClient = createDatabaseClient(t.context.databaseInstance);
	t.context.documentClient = createDocumentClient(
		createTestConfig(t.context.databaseInstance)
	);
});

test.afterEach.always('stop database', t => {
	t.context.databaseInstance.close();
});

test('POST dog should save data', t => {
	const postDog = createPostDog(t.context.documentClient);

	return createTable(t.context.databaseClient)
		.then(() => postDog({ body: testInput }))
		.then(() =>
			t.context.documentClient.get({
				TableName: 'dogs',
				Key: { id: testInput.id },
			})
		)
		.then(result => {
			t.deepEqual(result, { Item: testInput });
		});
});
