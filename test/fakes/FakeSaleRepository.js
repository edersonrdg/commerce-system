const SaleRepository = require('../../src/domain/sale/saleRepository');

const products = [{ id: 0, name: 'Maçã'}, { id: 1, name: 'Banana' }]
const sellers = [{ id: 0, name: 'Joao'}, { id: 1, name: 'Maria' }]
const sales = []

module.exports = class extends SaleRepository {
  constructor() {
    super();
  }

  async create(productId, sellerId, clientName) {
    sales.push({ productId, sellerId, clientName })
    return { productId, sellerId, clientName };
  };

  getProductById(id) {
    const product = products.find(p => p.id === id)
    return product
  }

  getSellerById(id) {
    const seller = sellers.find(s => s.id === id)
    return seller
  }

  get(id) {
    const sale = sales.find(sale => sale.id === id)
    return sale
  }

  async getAll() {
    return sales
  }
};
