'use strict';

const { createDocumentClient } = require('./database');
const lambdaWrapper = require('./lambda-wrapper');

const createPostDog = ({ body }) => {
    const documentClient = createDocumentClient();

    return documentClient
        .put({
            TableName: 'dogs',
            Item: body,
        })
        .then(() => ({
            statusCode: 200,
            body: { createdType: 'dog' },
        }))
};

module.exports = {
    createPostDog,
    handler: lambdaWrapper(/* handler for deployment */),
};
