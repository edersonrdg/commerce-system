const createProduct = require('../../../../application/useCases/products/createProduct');
const locator = require('../../../../infra/config/locator');

module.exports = {
  async create(request, response) {
    const product = await createProduct.execute(request.body, locator);

    return response.status(201).json(product);
  },
};
