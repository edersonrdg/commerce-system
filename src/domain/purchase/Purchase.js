module.exports = class {
  constructor(data) {
    this.productId = data.productId;
    this.qnt = data.qnt || 1;
  }
};
