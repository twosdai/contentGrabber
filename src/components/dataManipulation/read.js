const { hackerNewsConnector } = require('../../services/hackerNewsConnector');
const { redditConnector } = require('../../services/redditConnector');
const { log } = require('../../utils/logger');
const { getConfig } = require('../../../config');
const {
    subreddits,
    services: {
        hackernews: { base }
    }
} = getConfig();

const readTopPostsReddit = async () => {
    try {
        const r = redditConnector();
        const listOfIds = await Promise.all(
            subreddits.map(async (sub) => {
                const results = await r.getSubreddit(sub).getTop({ time: 'day' });
                return results.map(({ title, url }) => ({ url, title }));
            })
        );
        return listOfIds;
    } catch (error) {
        log('There was an error when attempting to get reddit links', error, error.stack);
        return [];
    }
};
const readTopPostsHackerNews = async () => {
    try {
        const response = await hackerNewsConnector(`${base}/topstories.json`);
        const listOfIds = await response.json();
        const listOfLinks = await Promise.all(
            listOfIds.map(async (id) => {
                const singleLink = await hackerNewsConnector(`${base}/item/${id.toString()}.json`);
                const { url, title } = await singleLink.json();
                return { url, title };
            })
        );
        return listOfLinks;
    } catch (error) {
        log('There was an error when attempting to get hackernews links', error, error.stack);
        return [];
    }
};
readTopPostsHackerNews();
module.exports = { readTopPostsReddit, readTopPostsHackerNews };
