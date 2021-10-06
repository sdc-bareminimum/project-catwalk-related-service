const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan'); // DELETE THIS
const routes = require('./routes');

const PORT = process.env.PORT || 3000;

const app = express();

// Parse request body
app.use(bodyParser.json());

// app.use(logger('dev')); // DELETE THIS
// Delete this - Loader io verification
app.use('/loaderio-2759664a2c5b3623b35c0f6d503c5073', (req, res) => {
  const loaderVerif = 'loaderio-2759664a2c5b3623b35c0f6d503c5073';
  return res.status(200).json(loaderVerif);
});

app.use('/', routes);

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports.app = app;
