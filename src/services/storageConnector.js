const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const storageConnector = () => s3;

module.exports = { storageConnector };
