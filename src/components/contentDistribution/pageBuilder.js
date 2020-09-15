const { buildHref } = require('./linkBuilder');

const pageBuilder = (arrayOfLinksAndTitles) => {
    const header = '';

    const body = arrayOfLinksAndTitles.reduce((acc, { url: link, title }) => {
        return `${acc}${buildHref(link, title)}`;
    }, '');
    const html = `<!DOCTYPE html><html><head>${header}</head>${preloadScript()}<body>${body}</body></html>`;
    return html;
};
// +
const preloadScript = () =>
    '<script src="//instant.page/5.1.0" type="module" integrity="sha384-by67kQnR+pyfy8yWP4kPO12fHKRLHZPfEsiSXR8u2IKcTdxD805MGUXBzVPnkLHw"></script>';
module.exports = { pageBuilder };
