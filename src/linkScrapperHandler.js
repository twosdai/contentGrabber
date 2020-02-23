const { aggregator } = require('./components/dataManipulation/aggregateLinks');
const { log } = require('./utils/logger');
const AWS = require('aws-sdk');
const lambda = new AWS.Lambda({ region: 'us-east-1' });
// Cron job invoke
const handler = async () => {
    try {
        // get an array of links from web
        const arrayOfLinksAndTitles = await aggregator();
        // invoke page helper with array of links
        await lambda
            .invokeAsync({
                FunctionName: 'page-builder',
                InvokeArgs: Buffer.from(
                    JSON.stringify({
                        arrayOfLinksAndTitles
                    })
                )
            })
            .promise();
        // Handle failures gracefully
    } catch (error) {
        log(error, error.stack, 'There was an error during execution');
    }
};

module.exports = { handler };
