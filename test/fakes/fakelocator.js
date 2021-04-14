const FakeProductRepository = require('./fakeProductRepository');
const FakeSellerRepository = require('./FakeSellerRepository')
const FakeSaleRepository = require('./FakeSaleRepository')


function builderDean() {
  const beans = {
    productRepository: new FakeProductRepository(),
    sellerRepository: new FakeSellerRepository(),
    saleRepository: new FakeSaleRepository()
  };
  return beans;
}

module.exports = builderDean();
