const { buildHref } = require('./linkBuilder');

const pageBuilder = (arrayOfLinksAndTitles) => {
    const header = '';

    const body = arrayOfLinksAndTitles.reduce((acc, { url: link, title }) => {
        return `${acc}${buildHref(link, title)}`;
    }, '');
    const html = `<!DOCTYPE html><html><head>${header}</head><body>${body}</body></html>`;
    return html;
};

module.exports = { pageBuilder };
