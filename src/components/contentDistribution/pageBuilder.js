const { buildHref } = require('./linkBuilder');

const pageBuilder = (arrayOfLinks) => {
    const header = '';
    const body = buildHref(arrayOfLinks);
    const html = `<!DOCTYPE html>
<html><head> ${header} </head><body>  ${body} </body></html>`;
    return html;
};

module.exports = { pageBuilder };
