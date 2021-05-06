const { ValidateError } = require('../errors');

module.exports = class {
  constructor(data) {
    if (!data.cost) throw new ValidateError('Cost is required');

    this.productId = data.productId;
    this.qnt = data.qnt || 1;
    this.cost = data.cost;
  }
};
