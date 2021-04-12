const { create, remove, list } = require('../../../../application/useCases/products');

const locator = require('../../../../infra/config/locator');

module.exports = {
  async create(request, response) {
    const product = await create.execute(request.body, locator);

    return response.status(201).json(product);
  },

  async index(request, response) {
    const products = await list.execute(request.params.id, locator);

    return response.status(200).json(products);
  },
  async delete(request, response) {
    await remove.execute(request.params.id, locator);

    return response.status(200).send();
  },
};
