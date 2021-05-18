const newPurchase = require('../../../src/application/useCases/purchase/newPurchase');
const listPurchase = require('../../../src/application/useCases/purchase/listPurchase');

const createProd = require('../../../src/application/useCases/products/createProduct');

const fakelocator = require('../../fakes/fakelocator');
const { BadRequestError } = require('../../../src/interfaces/http/http-errors')

function request(productId, qnt, cost) {
  return {
    productId,
    qnt,
    cost
  };
};

describe('Purchase | List', () => {
  beforeAll(async () => {

    await createProd.execute({ title: 'Carro', description: 'nova', price: 20 }, fakelocator);
    await newPurchase.execute(request('CARRO', 20, 2), fakelocator);
    await newPurchase.execute(request('CARRO', 20, 2), fakelocator);
    })

  it('Should to list all purchases', async () => {
    const purchases = await listPurchase.execute(null, fakelocator);

    expect(purchases).toEqual([request('CARRO', 20), request('CARRO', 20)]);
    expect(purchases.length).toEqual(2);
  });
  it('Should to return especific purchase', async () => {
    const purchases = await listPurchase.execute(1, fakelocator);

    expect(purchases).toEqual(request('CARRO', 20));
  });
  it('Should to return custom error if purchase id is invalid', async () => {

    await expect(listPurchase.execute(200, fakelocator)).rejects.toEqual(new BadRequestError('Invalid purchase id'));
  });
});
