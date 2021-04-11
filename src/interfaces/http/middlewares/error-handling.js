const HttpErrors = require('../http-errors');

function errorTreatment(error, request, response, _) {
  if (error instanceof HttpErrors.BaseHttpError) {
    const { status, message } = error;
    return response.status(status).json({ error: message });
  }
  console.error(error);
  return response.status(500).json({ error: 'Internal server error' });
}

module.exports = errorTreatment;
