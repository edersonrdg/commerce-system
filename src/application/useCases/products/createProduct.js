const { BadRequestError } = require('../../../interfaces/http/http-errors');

module.exports = {
  async execute({ title, description, price }, { productRepository }) {
    const productExist = productRepository.findByTitle(title);

    if (productExist) throw new BadRequestError('Product already exists');

    const newproduct = productRepository.create(title, description, price);
    return newproduct;
  },
};
