class DomainError extends Error {
  constructor(message) {
    super(message);
    this.status = 422;
  }
}

class ValidateProductError extends DomainError {
  constructor(message) {
    super(message);
  }
}

module.exports = { DomainError, ValidateProductError };
