const SaleRepository = require('../../src/domain/sale/saleRepository');

const sales = []

module.exports = class extends SaleRepository {
  constructor() {
    super();
  }

  async create(productId, sellerId, clientName) {
    sales.push({ productId, sellerId, clientName })
    return { productId, sellerId, clientName };
  };

  get(id) {
    return sales[id]
  }

  async getAll() {
    return sales
  }
};
