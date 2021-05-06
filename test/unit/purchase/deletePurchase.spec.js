const newPurchase = require('../../../src/application/useCases/purchase/newPurchase');
const listPurchase = require('../../../src/application/useCases/purchase/listPurchase');
const deletePurchase = require('../../../src/application/useCases/purchase/deletePurchase');

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

describe('Purchase | Remove', () => {
  beforeAll(async () => {

    await createProd.execute({ title: 'Carro', description: 'nova', price: 20 }, fakelocator);
    await newPurchase.execute(request('CARRO', 20, 2), fakelocator);
    await newPurchase.execute(request('CARRO', 20, 2), fakelocator);
    })

  it('Should to remove a purchase', async () => {
    await deletePurchase.execute(1, fakelocator)

    const purchases = await listPurchase.execute(null, fakelocator);

    expect(purchases).toEqual([request('CARRO', 20)]);
    expect(purchases.length).toEqual(1);
  });

  it('Should to return custom error if purchase id is invalid', async () => {

    await expect(deletePurchase.execute(200, fakelocator)).rejects.toEqual(new BadRequestError('Invalid purchase id'));
  });
});
