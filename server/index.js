const path = require('path');
const express = require('express');
const fallback = require('express-history-api-fallback');

const template = require(path.join(__dirname, '..', 'src', 'index-template.js'));

const app = express();

if (process.env.NODE_ENV === 'production') {
    const enforce = require('express-sslify');
    const compression = require('compression');
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
    app.use(compression());
}

const root = path.join(__dirname, '..', 'dist');

app.use(express.static(root));

/*
export default (...args) => (req, res, next) => {
  if ((req.method === 'GET' || req.method === 'HEAD') && req.accepts('html')) {
    (res.sendFile || res.sendfile).call(res, ...args, err => err && next())
  } else next()
}
*/

//app.use(fallback('index.html', { root }));
app.use((req, res, next) => {
    if ((req.method === 'GET' || req.method === 'HEAD') && req.accepts('html')) {
        res.send(template('<p>ohai</p>'));
    } else {
        next();
    }
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    /* eslint-disable no-console */
    console.log('App listening on port', app.get('port'));
    /* eslint-enable no-console */
});
