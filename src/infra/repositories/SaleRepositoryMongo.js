const SaleRepository = require('../../domain/sale/saleRepository');
const mongoose = require('../orm/mongoose');
const Sale = require('../orm/mongoose/schemas/Sale');
const Product = require('../orm/mongoose/schemas/Product');
const Seller = require('../orm/mongoose/schemas/Seller');

module.exports = class extends SaleRepository {
  constructor() {
    super();
  }

  async create(productId, sellerId, clientName, qnt) {
    const sessions = await mongoose.startSession();

    const sale = new Sale({
      productId,
      sellerId,
      clientName,
      qnt,
    });

    await sessions.withTransaction(async () => {
      const product = await Product.findById(productId).session(sessions);
      product.stock -= qnt;
      product.sales += qnt;

      const seller = await Seller.findById(sellerId).session(sessions);
      seller.sales += qnt;
      seller.revenue += product.price * qnt;

      await sale.save();
      await product.save();
      await seller.save();
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
