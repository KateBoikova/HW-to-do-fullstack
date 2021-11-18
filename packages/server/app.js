const express = require('express');
const router = require('./router');
const { errorHandlers } = require('./middleware');

const app = express();

app.use(express.json());

app.use('./api', router);

app.use(
  errorHandlers.validationErrorHandler,
  errorHandlers.sequelizeErrorHandler
);

module.exports = app;
