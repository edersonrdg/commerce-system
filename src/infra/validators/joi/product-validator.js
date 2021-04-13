const Joi = require('joi');
const { ValidateProductError } = require('../../../domain/errors');

const productValidationJoiSchema = Joi.object({
  title: Joi.string()
    .required()
    .max(20)
    .messages({
      'string.empty': 'EMPTY_FIRST_NAME',
      'string.max': 'MAX_SIZE_FIRST_NAME',
    }),
  description: Joi.string()
    .required()
    .max(255)
    .messages({
      'string.empty': 'EMPTY_DESCRIPTION',
      'string.max': 'MAX_SIZE_DESCRIPTION',
    }),
  price: Joi.number()
    .required()
    .messages({
      'string.empty': 'EMPTY_PRICE',
    }),
  stock: Joi.number(),
});

module.exports = {
  validate(product) {
    const { error } = productValidationJoiSchema.validate(product);
    if (error) {
      throw new ValidateProductError(error.details[0].message);
    }
    return true;
  },
};
