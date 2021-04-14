const { create, list } = require('../../../src/application/useCases/Sale')
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
  it('Should to list all sellers', async () => {

    const sales = await list.execute(fakelocator)

    expect(sales).toEqual([request(1, 1, 'joao'), request(1, 1, 'joao'), request(1, 1, 'joao'), request(1, 1, 'joao')]);

    expect(sales.length).toEqual(4);
  });
})
