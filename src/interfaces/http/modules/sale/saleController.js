const { create } = require('../../../../application/useCases/Sale');
const locator = require('../../../../infra/config/locator');

module.exports = {
  async create(request, response) {
    const newSale = await create.execute(request.body, locator);

    return response.status(201).json(newSale);
  },

};
