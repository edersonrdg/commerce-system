const FakeProductRepository = require('./fakeProductRepository');
const FakeSellerRepository = require('./FakeSellerRepository')
const FakeSaleRepository = require('./FakeSaleRepository')
const FakePurchaseRepository = require('./FakePurchaseRepository')

function builderDean() {
  const beans = {
    productRepository: new FakeProductRepository(),
    sellerRepository: new FakeSellerRepository(),
    saleRepository: new FakeSaleRepository(),
    purchaseRepository: new FakePurchaseRepository()
  };
  return beans;
}

module.exports = builderDean();
