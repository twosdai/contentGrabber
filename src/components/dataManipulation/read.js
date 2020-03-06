const { hackerNewsConnector } = require('../../services/hackerNewsConnector');
const { redditConnector } = require('../../services/redditConnector');
const { log } = require('../../utils/logger');
const { getConfig } = require('../../../config');
const {
    subreddits,
    hackernews: { base }
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
        log('There was an error in attempting to get reddit links', error, error.stack);
        return [];
    }
};
const readTopPostsHackerNews = async () => {
    try {
        const response = await hackerNewsConnector(`${base}v0/topstories.json`);
        const listOfIds = await response.json();
        const listOfLinks = await Promise.all(
            listOfIds.map(async (id) => {
                const responseForItem = await hackerNewsConnector(`${base}v0/item/${id.toString()}.json`);
                const { url, title } = await responseForItem.json();
                return url && { url, title };
            })
        );
        return listOfLinks.filter((x) => x);
    } catch (error) {
        log('There was an error when attempting to get hackernews links', error, error.stack);
        return [];
    }
};

module.exports = { readTopPostsReddit, readTopPostsHackerNews };
