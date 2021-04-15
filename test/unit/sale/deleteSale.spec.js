const { create, list, remove } = require('../../../src/application/useCases/Sale');
const { BadRequestError } = require('../../../src/interfaces/http/http-errors');
const fakelocator = require('../../fakes/fakelocator')
const createProd = require('../../../src/application/useCases/products/createProduct');
const createSeller = require('../../../src/application/useCases/seller/newSeller');

function request(productId, sellerId, clientName) {
  return {
    productId,
    sellerId,
    clientName
  };
};

describe('Sale | Delete', () => {
  beforeAll(async () => {

  const requestData = request('CARRO', 'AAA', 'joao')

  await createProd.execute({ title: 'Carro', description: 'nova', price: 20 }, fakelocator);
  await createProd.execute({ title: 'Carro2', description: 'nova', price: 20 }, fakelocator);
  await createSeller.execute({ name: 'joao', image: 'joao.jpg', code: 'AAA' }, fakelocator)
  await createSeller.execute({ name: 'Maria', image: 'maria.jpg', code: 'BBB' }, fakelocator)

  await create.execute(requestData, fakelocator);
  await create.execute(requestData, fakelocator);
  })
  it('Should to remove a sale', async () => {
    await remove.execute(1, fakelocator)

    const purchases = await list.execute(null, fakelocator);

    expect(purchases).toEqual([request('CARRO', 'AAA', 'joao')]);
    expect(purchases.length).toEqual(1);
  });
  it('Should to return custom error if sale id is invalid', async () => {

    await expect(remove.execute(200, fakelocator)).rejects.toEqual(new BadRequestError('Invalid sale id'));
  });
})
