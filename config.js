const getConfig = () => ({
    services: {
        reddit: {
            userAgent: 'Fill',
            clientId: 'Fill',
            clientSecret: 'Fill',
            username: 'Fill',
            password: 'Fill'
        },
        hackernews: { base: 'https://hacker-news.firebaseio.com/v0' },
        storage: { name: process.env.BUCKET_NAME }
    },
    subreddits: ['science', 'programming']
});

module.exports = { getConfig };
