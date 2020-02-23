const { storageConnector } = require('../../services/storageConnector');
const { getConfig } = require('../../../config');
const {
    services: {
        storage: { name }
    }
} = getConfig();
const connection = storageConnector();
const putObject = (item, key) => {
    const params = {
        Bucket: name,
        Key: key,
        ServerSideEncryption: 'AES256',
        Body: JSON.stringify(item),
        ContentType: 'text/html'
    };
    return connection.putObject(params).promise();
};
module.exports = { putObject };
