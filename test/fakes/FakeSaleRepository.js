const SaleRepository = require('../../src/domain/sale/saleRepository');

let sales = []

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

  remove(id) {
    sales = sales.splice(sales.indexOf(sales[id]), 1)
  }
};
