const { pageBuilder } = require('./components/contentDistribution/pageBuilder');
const { putObject } = require('./components/contentDistribution/storageAccess');
const handler = async (event) => {
    // Get list of links from event
    const { arrayOfLinksAndTitles } = event;
    // Build the new page
    const page = pageBuilder(arrayOfLinksAndTitles);
    // Place the new page into s3
    await putObject(page, 'index.html');
    return true;
};

module.exports = { handler };
