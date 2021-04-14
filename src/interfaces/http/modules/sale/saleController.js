const { create, list } = require('../../../../application/useCases/Sale');
const locator = require('../../../../infra/config/locator');

module.exports = {
  async create(request, response) {
    const newSale = await create.execute(request.body, locator);

    return response.status(201).json(newSale);
  },
  async index(request, response) {
    const sales = await list.execute(locator);
    return response.status(200).json(sales);
  },
};
