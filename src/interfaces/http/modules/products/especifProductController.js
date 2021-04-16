const listProducts = require('../../../../application/useCases/products/listProducts');

const locator = require('../../../../infra/config/locator');

module.exports = {
  async show(request, response) {
    const products = await listProducts.execute(request.params.id, locator);

    return response.status(200).json(products);
  },
};
