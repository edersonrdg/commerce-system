const SaleRepository = require('../../domain/sale/saleRepository');
const Sale = require('../orm/mongoose/schemas/Sale');

module.exports = class extends SaleRepository {
  constructor() {
    super();
  }

  async create(productId, sellerId, clientName) {
    const sale = new Sale({
      productId,
      sellerId,
      clientName,
    });

    await sale.save();

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
