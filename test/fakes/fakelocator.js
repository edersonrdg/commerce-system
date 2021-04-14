const FakeProductRepository = require('./fakeProductRepository');
const FakeSellerRepository = require('./FakeSellerRepository')

function builderDean() {
  const beans = {
    productRepository: new FakeProductRepository(),
    sellerRepository: new FakeSellerRepository()
  };
  return beans;
}

module.exports = builderDean();
