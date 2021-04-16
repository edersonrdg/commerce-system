class BaseHttpError extends Error {
  constructor(message) {
    super(message);
    this.title = 'Default Bad Request';
    this.status = 400;
  }
}

class BadRequestError extends BaseHttpError {
  constructor(message) {
    super(message);
    this.title = 'Bad Request';
    this.status = 400;
  }
}

module.exports = {
  BadRequestError,
  BaseHttpError,
};
