const SaleRepository = require('../../domain/sale/saleRepository');
const mongoose = require('../orm/mongoose');
const Sale = require('../orm/mongoose/schemas/Sale');
const Product = require('../orm/mongoose/schemas/Product');
// const Seller = require('../orm/mongoose/schemas/Seller');

module.exports = class extends SaleRepository {
  constructor() {
    super();
  }

  async create(productId, sellerId, clientName) {
    const sessions = await mongoose.startSession();

    const sale = new Sale({
      productId,
      sellerId,
      clientName,
    });

    await sessions.withTransaction(async () => {
      const product = await Product.findById(productId).session(sessions);
      product.stock -= 1;

      await product.save();
      await sale.save();
    });

    sessions.endSession();
    return sale;
  }

  async get(id) {
    const [sale] = await Sale.find().where({ _id: id });
    return sale;
  }

  async getAll() {
    const sales = await Sale.find();
    return sales;
  }

  async remove(id) {
    await Sale.findByIdAndDelete(id);
  }
};
