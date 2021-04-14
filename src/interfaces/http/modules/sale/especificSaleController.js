const { list } = require('../../../../application/useCases/Sale');
const locator = require('../../../../infra/config/locator');

module.exports = {
  async show(request, response) {
    const sale = await list.execute(request.params.id, locator);

    return response.status(200).json(sale);
  },
};
