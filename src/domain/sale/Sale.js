const { ValidateError } = require('../errors');

module.exports = class {
  constructor(data) {
    const { productId, sellerId } = data;
    if (!productId) throw new ValidateError('Product id is required');
    if (!sellerId) throw new ValidateError('Seller id is required');

    this.productId = data.productId;
    this.sellerId = data.sellerId;
    this.clientName = data.clientName || 'Anônimo';
  }
};
