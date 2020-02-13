const { readTopPostsHackerNews, readTopPostsReddit } = require('./read');
const flattenDeep = require('lodash.flattendeep');
const aggregator = () => flattenDeep([readTopPostsHackerNews(), readTopPostsReddit()]);
module.exports = { aggregator };
