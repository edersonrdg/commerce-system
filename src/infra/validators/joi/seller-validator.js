const Joi = require('joi');
const { ValidateError } = require('../../../domain/errors');

const sellerValidation = Joi.object({
  name: Joi.string()
    .required()
    .max(20)
    .messages({
      'string.empty': 'EMPTY_FIRST_NAME',
      'string.max': 'MAX_SIZE_FIRST_NAME',
    }),
  image: Joi.string()
    .required()
    .max(255)
    .messages({
      'string.empty': 'EMPTY_DESCRIPTION',
      'string.max': 'MAX_SIZE_DESCRIPTION',
    }),
  code: Joi.string()
    .required()
    .max(255)
    .messages({
      'string.empty': 'EMPTY_FIRST_NAME',
      'string.max': 'MAX_SIZE_FIRST_NAME',
    }),
});

module.exports = {
  validate(seller) {
    const { error } = sellerValidation.validate(seller);
    if (error) {
      throw new ValidateError(error.details[0].message);
    }
    return true;
  },
};
