const ProductRepository = require('../../domain/Product/productRepository');
const Product = require('../orm/mongoose/schemas/Product');

module.exports = class extends ProductRepository {
  constructor() {
    super();
  }

  async create(title, description, price, stock) {
    const newProduct = new Product({
      title,
      description,
      price,
      stock,
    });

    await newProduct.save();

    return newProduct;
  }

  async getproducts() {
    const products = await Product.find();

    return products;
  }

  async findByTitle(title) {
    const [findProduct] = await Product.find().where({ title });

    return findProduct;
  }
};
