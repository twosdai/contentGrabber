const fetch = require('node-fetch')
const hackerNewsConnector = async (url) => fetch(url)
module.exports = { hackerNewsConnector };

