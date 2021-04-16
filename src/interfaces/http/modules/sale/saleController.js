const { create, list, remove } = require('../../../../application/useCases/Sale');
const locator = require('../../../../infra/config/locator');

module.exports = {
  async create(request, response) {
    const newSale = await create.execute(request.body, locator);

    return response.status(201).json(newSale);
  },
  async index(request, response) {
    const sales = await list.execute(request.params.id, locator);
    return response.status(200).json(sales);
  },
  async delete(request, response) {
    await remove.execute(request.params.id, locator);
    return response.status(200).send();
  },
};
