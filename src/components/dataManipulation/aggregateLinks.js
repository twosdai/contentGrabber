const { readTopPostsHackerNews, readTopPostsReddit } = require('./read');
const flattenDeep = require('lodash.flattendeep');
const aggregator = async () => flattenDeep(await Promise.all([readTopPostsHackerNews(), readTopPostsReddit()]));
module.exports = { aggregator };
