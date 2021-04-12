const { BadRequestError } = require('../../../interfaces/http/http-errors');

module.exports = {
  async execute(id, { productRepository }) {
    const product = await productRepository.getProduct(id);
    if (!product) throw new BadRequestError('Invalid product id');

    await productRepository.remove(id);
  },
};
