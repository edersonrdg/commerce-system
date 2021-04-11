const createProduct = require('../../../../application/useCases/products/createProduct');
const listProducts = require('../../../../application/useCases/products/listProducts');

const locator = require('../../../../infra/config/locator');

module.exports = {
  async create(request, response) {
    const product = await createProduct.execute(request.body, locator);

    return response.status(201).json(product);
  },

  async index(request, response) {
    const products = await listProducts.execute(locator);

    return response.status(200).json(products);
  },
};
