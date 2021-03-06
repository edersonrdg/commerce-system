const newPurchase = require('../../../src/application/useCases/purchase/newPurchase');
const createProd = require('../../../src/application/useCases/products/createProduct');

const fakelocator = require('../../fakes/fakelocator');
const { BadRequestError } = require('../../../src/interfaces/http/http-errors')
const { ValidateError } = require('./../../../src/domain/errors')

function request(productId, qnt, cost) {
  return {
    productId,
    qnt,
    cost
  };
};

describe('Purchase | Create', () => {
  beforeAll(async () => {

    await createProd.execute({ title: 'Carro', description: 'nova', price: 20 }, fakelocator);
    })

  it('Should to create a new purchase', async () => {
    const purchase = await newPurchase.execute(request('CARRO', 20, 2), fakelocator);

    expect(purchase).toEqual(request('CARRO', 20));
  });
  it('Should to create a new purchase without qnt', async () => {
    const purchase = await newPurchase.execute(request('CARRO', null, 2), fakelocator);

    expect(purchase).toEqual(request('CARRO', 1));
  });

  it('Should to return custom error if product Id is invalid', async () => {

    await expect(newPurchase.execute(request('BICICLETA', 20, 2), fakelocator)).rejects.toEqual(new BadRequestError('Invalid product id'));
  });
  it('Should to return custom error if cost is invalid', async () => {

    await expect(newPurchase.execute(request('BICICLETA', 20), fakelocator)).rejects.toEqual(new ValidateError('Cost is required'));
  });

});
