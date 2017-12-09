const fs = require('fs');
const path = require('path');

const index = fs.readFileSync(path.join(__dirname, '..', 'dist', 'index-template.html'))

console.log(index.toString());

module.exports = body => `
    <!DOCTYPE html>
    <html lang="no">
    <head>
        <meta charset="UTF-8">
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=yes"
        >
        <title>Treningsprogram</title>
    </head>
    <body>
        <div id="root" aria-live="polite">
            ${body}
        </div>
    </body>
    </html>
`;
