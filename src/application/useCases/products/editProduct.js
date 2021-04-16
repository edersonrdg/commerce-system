const { BadRequestError } = require('../../../interfaces/http/http-errors');

module.exports = {
  async execute(id, data, { productRepository }) {
    const product = await productRepository.getProduct(id);
    if (!product) throw new BadRequestError('Invalid product id');

    const editProduct = await productRepository.edit(id, data);
    return editProduct;
  },
};
