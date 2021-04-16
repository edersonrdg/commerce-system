const Purchase = require('../../../domain/purchase/Purchase');
const { BadRequestError } = require('../../../interfaces/http/http-errors');

module.exports = {
  async execute(data, { productRepository, purchaseRepository }) {
    const { qnt, productId } = new Purchase(data);

    const existProd = await productRepository.getProduct(productId);
    if (!existProd) throw new BadRequestError('Invalid product id');

    const newPurchase = await purchaseRepository.create(productId, qnt);
    return newPurchase;
  },
};
