const ProductRepository = require('../../src/domain/Product/productRepository');

const products = [];

module.exports = class extends ProductRepository {
  constructor() {
    super();
  }

  async create(title, description, price) {
    const data = { title, description, price };
    products.push(data);

    return data;
  }

  findByTitle(title) {
    const product = products.find(product => product.title === title)
    return product
  }

  getproducts() {
    return products
  }

  getProduct(id) {
    const product = products.find(product => product.title === id)
    return product
  }
};
