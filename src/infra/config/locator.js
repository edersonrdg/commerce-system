const ProductRepositoryMongo = require('../repositories/ProductRepositoryMongo');
const SellerRepository = require('../repositories/SellerRepositoryMongo');
const SaleRepositoryMongo = require('../repositories/SaleRepositoryMongo');
const PurchaseRepository = require('../repositories/PurchaseRepositoryMongo');

function builderDean() {
  const beans = {
    productRepository: new ProductRepositoryMongo(),
    sellerRepository: new SellerRepository(),
    saleRepository: new SaleRepositoryMongo(),
    purchaseRepository: new PurchaseRepository(),
  };
  return beans;
}

module.exports = builderDean();
