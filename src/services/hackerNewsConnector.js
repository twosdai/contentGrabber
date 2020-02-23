const fetch = require('node-fetch');
const hackerNewsConnector = (url) => fetch(url);
module.exports = { hackerNewsConnector };
