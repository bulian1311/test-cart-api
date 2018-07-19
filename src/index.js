const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PORT } = require('./config/keys');

const app = express();

app.use('*', cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
require('./routes/index')(app);

// Error handling
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

app.listen(PORT, () => {
  console.log(`Run on port:${PORT}`);
});
