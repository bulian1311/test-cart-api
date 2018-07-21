const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const { PORT, MONGO } = require('./config/keys');

const app = express();

//DB connect
(async () => {
  try {
    await mongoose.connect(
      MONGO,
      { useNewUrlParser: true }
    );
    console.log('Mongo connected');
  } catch (err) {
    console.error(err.message);
  }
})();

app.use('*', cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 300000 }
  })
);

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
  console.log(`App run on port:${PORT}`);
});
