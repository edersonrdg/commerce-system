class DomainError extends Error {
  constructor(message) {
    super(message);
    this.status = 422;
  }
}

class ValidateError extends DomainError {
  constructor(message) {
    super(message);
  }
}

module.exports = { DomainError, ValidateError };
