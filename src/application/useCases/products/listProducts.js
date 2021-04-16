const { BadRequestError } = require('../../../interfaces/http/http-errors');

module.exports = {
  async execute(id, query, { productRepository }) {
    if (id) {
      const product = await productRepository.getProduct(id);
      if (!product) throw new BadRequestError('Invalid product id');
      return product;
    }

    const products = await productRepository.getproducts(query);
    return products;
  },
};
