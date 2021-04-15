const newPurchase = require('../../../src/application/useCases/purchase/newPurchase');
const listPurchase = require('../../../src/application/useCases/purchase/listPurchase');

const createProd = require('../../../src/application/useCases/products/createProduct');

const fakelocator = require('../../fakes/fakelocator');
const { BadRequestError } = require('../../../src/interfaces/http/http-errors')

function request(productId, qnt) {
  return {
    productId,
    qnt
  };
};

describe('Purchase | List', () => {
  beforeAll(async () => {

    await createProd.execute({ title: 'Carro', description: 'nova', price: 20 }, fakelocator);
    await newPurchase.execute(request('CARRO', 20), fakelocator);
    await newPurchase.execute(request('CARRO', 20), fakelocator);
    })

  it('Should to list all purchases', async () => {
    const purchases = await listPurchase.execute(fakelocator);

    expect(purchases).toEqual([request('CARRO', 20), request('CARRO', 20)]);
    expect(purchases.length).toEqual(2);
  });

});
