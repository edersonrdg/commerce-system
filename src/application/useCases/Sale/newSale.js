const Sale = require('../../../domain/sale/Sale');
const { BadRequestError } = require('../../../interfaces/http/http-errors');

module.exports = {
  async execute(data, { saleRepository }) {
    const { productId, sellerId, clientName } = new Sale(data);

    const existProd = await saleRepository.getProductById(productId);
    if (!existProd) throw new BadRequestError('Invalid product id');

    const existSeller = await saleRepository.getSellerById(sellerId);
    if (!existSeller) throw new BadRequestError('Invalid seller id');

    const newSale = await saleRepository.create(productId, sellerId, clientName);
    return newSale;
  },
};
