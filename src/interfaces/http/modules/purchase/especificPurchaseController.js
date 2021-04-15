const listPurchase = require('../../../../application/useCases/purchase/listPurchase');
const locator = require('../../../../infra/config/locator');

module.exports = {
  async show(request, response) {
    const purchase = await listPurchase.execute(request.params.id, locator);

    return response.status(200).json(purchase);
  },
};
