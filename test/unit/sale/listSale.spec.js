const { create, list } = require('../../../src/application/useCases/Sale');
const { BadRequestError } = require('../../../src/interfaces/http/http-errors');
const fakelocator = require('../../fakes/fakelocator')

function request(productId, sellerId, clientName) {
  return {
    productId,
    sellerId,
    clientName
  };
};

describe('Sale | List', () => {
  beforeAll(async () => {

  const requestData = request(1, 1, 'joao')

  await create.execute(requestData, fakelocator);
  await create.execute(requestData, fakelocator);
  await create.execute(requestData, fakelocator);
  await create.execute(requestData, fakelocator);
  })
  it('Should to list all sales', async () => {

    const sales = await list.execute(null, fakelocator)

    expect(sales).toEqual([request(1, 1, 'joao'), request(1, 1, 'joao'), request(1, 1, 'joao'), request(1, 1, 'joao')]);

    expect(sales.length).toEqual(4);
  });
  it('Should to list especific sale', async () => {
    const sale = await list.execute(1, fakelocator)

    expect(sale).toEqual(request(1, 1, 'joao'));
  });
  it('Should to return custom error if sale id is invalid', async () => {
    await expect(list.execute(10, fakelocator)).rejects.toEqual(new BadRequestError('Invalid sale id'));
  });
})
