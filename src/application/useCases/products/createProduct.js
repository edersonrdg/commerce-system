const { BadRequestError } = require('../../../interfaces/http/http-errors');
const Product = require('../../../domain/Product/Product');

module.exports = {
  async execute(data, { productRepository }) {
    const {
      title, description, price, stock,
    } = new Product(data);

    const productExist = await productRepository.findByTitle(title);

    if (productExist) throw new BadRequestError('Product already exists');

    const newproduct = await productRepository.create(title, description, price, stock);
    return newproduct;
  },
};
