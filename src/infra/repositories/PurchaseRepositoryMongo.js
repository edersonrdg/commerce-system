const PurchaseRepository = require('../../domain/purchase/purchaseRepository');
const Purchase = require('../orm/mongoose/schemas/Purchase');

module.exports = class extends PurchaseRepository {
  constructor() {
    super();
  }

  async create(productId, qnt) {
    const newPurchase = new Purchase({
      productId,
      qnt,
    });
    await newPurchase.save();

    return newPurchase;
  }

  get() {}

  getAll() {}
};
