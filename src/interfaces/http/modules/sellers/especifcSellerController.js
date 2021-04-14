const { list } = require('../../../../application/useCases/seller');

const locator = require('../../../../infra/config/locator');

module.exports = {
  async show(request, response) {
    const seller = await list.execute(request.params.id, locator);

    return response.status(200).json(seller);
  },
};
