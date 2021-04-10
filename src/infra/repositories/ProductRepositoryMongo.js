const ProductRepository = require('../../domain/Product/productRepository');
const Product = require('../orm/mongoose/schemas/Product');

module.exports = class extends ProductRepository {
  constructor() {
    super();
  }

  async create(title, description, price) {
    const newProduct = new Product({
      title,
      description,
      price,
    });

    await newProduct.save();

    return newProduct;
  }

  async findByTitle(title) {
    const [findProduct] = await Product.find().where({ title });

    return findProduct;
  }
};