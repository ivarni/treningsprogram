const path = require('path');
const express = require('express');
const fallback = require('express-history-api-fallback');

const app = express();

/*
if (process.env.NODE_ENV === 'production') {
    const enforce = require('express-sslify');
    const compression = require('compression');
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
    app.use(compression());
}
*/

const root = path.join(__dirname, '..', 'dist');
console.log(root)
app.use(express.static(root));
app.use(fallback('index.html', { root }));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    /* eslint-disable no-console */
    console.log('App listening on port', app.get('port'));
    /* eslint-enable no-console */
});
