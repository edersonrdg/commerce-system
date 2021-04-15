const { ValidateError } = require('../errors');

module.exports = class {
  constructor(data) {
    const { productId } = data;
    if (!productId) throw new ValidateError('Product id is required');

    this.productId = data.productId;
    this.qnt = data.qnt || 1;
  }
};
