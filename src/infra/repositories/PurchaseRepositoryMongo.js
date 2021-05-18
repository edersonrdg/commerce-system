const mongoose = require('../orm/mongoose');
const PurchaseRepository = require('../../domain/purchase/purchaseRepository');
const Purchase = require('../orm/mongoose/schemas/Purchase');
const Product = require('../orm/mongoose/schemas/Product');

module.exports = class extends PurchaseRepository {
  constructor() {
    super();
  }

  async create(productId, qnt, cost) {
    const sessions = await mongoose.startSession();
    const newPurchase = new Purchase({
      productId,
      qnt,
      cost,
    });
    await sessions.withTransaction(async () => {
      const product = await Product.findById(productId).session(sessions);
      product.stock += qnt;
      product.totalcost += cost * qnt;

      await product.save();
      await newPurchase.save();
    });
    sessions.endSession();
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
