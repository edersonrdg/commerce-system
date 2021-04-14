const ProductRepository = require('../../src/domain/Product/productRepository');

let sellers = [];

module.exports = class extends ProductRepository {
  constructor() {
    super();
  }

  async create(name, image, code) {
    const data = { name, image, code };
    sellers.push(data);

    return data;
  }
};
