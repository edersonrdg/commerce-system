const { create } = require('../../../../application/useCases/seller');
const locator = require('../../../../infra/config/locator');

module.exports = {
  async create(request, response) {
    const product = await create.execute(request.body, locator);

    return response.status(201).json(product);
  },

};
