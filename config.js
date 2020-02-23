const getConfig = () => ({
    services: {
        reddit: { userAgent: 'FILL', clientId: 'FILL', clientSecret: 'FILL', username: 'FILL', password: 'FILL' },
        storage: { name: process.env.BUCKET_NAME }
    },
    hackernews: { base: 'https://hacker-news.firebaseio.com/' },
    subreddits: ['science', 'programming']
});

module.exports = { getConfig };
