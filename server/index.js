const path = require('path');
const express = require('express');
const fallback = require('express-history-api-fallback');

const app = express();

if (process.env.NODE_ENV === 'production') {
    const enforce = require('express-sslify');
    const compression = require('compression');
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
    app.use(compression());
}

const root = path.join(__dirname, '..', 'dist');

app.get('/.well-known/acme-challenge/:acmeToken', function(req, res, next) {
  var acmeToken = req.params.acmeToken;
  var acmeKey;

  if (process.env.ACME_KEY && process.env.ACME_TOKEN) {
    if (acmeToken === process.env.ACME_TOKEN) {
      acmeKey = process.env.ACME_KEY;
    }
  }

  for (var key in process.env) {
    if (key.startsWith('ACME_TOKEN_')) {
      var num = key.split('ACME_TOKEN_')[1];
      if (acmeToken === process.env['ACME_TOKEN_' + num]) {
        acmeKey = process.env['ACME_KEY_' + num];
      }
    }
  }

  if (acmeKey) res.send(acmeKey);
  else res.status(404).send();
});

app.use(express.static(root));
app.use(fallback('index.html', { root }));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    /* eslint-disable no-console */
    console.log('App listening on port', app.get('port'));
    /* eslint-enable no-console */
});
