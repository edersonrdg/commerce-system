const locator = require('../../../../infra/config/locator');
const createPurchase = require('../../../../application/useCases/purchase/newPurchase');

module.exports = {
  async create(request, response) {
    const data = Object.assign(request.body, { productId: request.params.id });
    const newPurchase = await createPurchase.execute(data, locator);
    return response.status(200).json(newPurchase);
  },
};
