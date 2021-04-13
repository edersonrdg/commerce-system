const HttpErrors = require('../http-errors');
const { DomainError } = require('../../../domain/errors');

function errorTreatment(error, request, response, _) {
  if (error instanceof HttpErrors.BaseHttpError) {
    const { status, message } = error;
    return response.status(status).json({ error: message });
  }
  if (error instanceof DomainError) {
    const { message, status } = error;
    return response.status(status).json({ error: message });
  }
  // eslint-disable-next-line no-console
  console.error(error);
  return response.status(500).json({ error: 'Internal server error' });
}

module.exports = errorTreatment;
