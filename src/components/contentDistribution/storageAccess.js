const { storageConnector } = require('../../services/storageConnector');
const { getConfig } = require('../../../config');
const {
    storage: { name }
} = getConfig();
const putObject = (item, key) => {
    const params = { Bucket: name, Key: key, ServerSideEncryption: 'AES256', Body: JSON.stringify(item) };
    return storageConnector.putObject(params).promise();
};
module.exports = { putObject };
