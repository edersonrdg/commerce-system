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

  async get(id) {
    const [purchase] = await Purchase.find().where({ _id: id });
    return purchase;
  }

  async getAll() {
    const purchases = await Purchase.find();
    return purchases;
  }

  async remove(id) {
    await Purchase.findByIdAndDelete(id);
  }
};
