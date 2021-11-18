const {
  Sequelize: { BaseError },
} = require('./../models');

const { ValidationError } = require('yup');

module.exports.validationErrorHandler = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res
      .status(422)
      .send({ errors: [{ titile: 'Validation Error', detales: err.erros }] });
  }
  next(err);
};

module.exports.sequelizeErrorHandler = (err, req, res, next) => {
  if (err instanceof BaseError) {
    //
  }
  next(err);
};

module.exports.errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return;
  }
  res
    .status(err?.status ?? 500)
    .send({ errors: [{ title: err?.mrssage ?? 'Internal server error' }] });
};
