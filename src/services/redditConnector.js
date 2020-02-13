const snoowrap = require('snoowrap');
const { getConfig } = require('../../config');
const {
    services: { reddit }
} = getConfig();
const connector = new snoowrap(reddit);
const redditConnector = () => connector;

module.exports = { redditConnector };
