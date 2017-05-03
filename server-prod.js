const express = require('express');
const path = require('path');
const compression = require('compression')

const app = express();

const server = app.listen(process.env.PORT || 3000, function() {
  console.log('Express server listening on port ' + server.address().port);
});

app.use(compression());

app.use('/', express.static('dist'));

app.use('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
