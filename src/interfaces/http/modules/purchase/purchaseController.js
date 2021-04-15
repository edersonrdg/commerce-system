const locator = require('../../../../infra/config/locator');
const createPurchase = require('../../../../application/useCases/purchase/newPurchase');
const listPurchase = require('../../../../application/useCases/purchase/listPurchase');

module.exports = {
  async create(request, response) {
    const data = Object.assign(request.body, { productId: request.params.id });
    const newPurchase = await createPurchase.execute(data, locator);
    return response.status(200).json(newPurchase);
  },
  async index(request, response) {
    const purchases = await listPurchase.execute(request.params.id, locator);
    return response.status(200).json(purchases);
  },
};
