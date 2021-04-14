const createSale = require('../../../src/application/useCases/Sale/newSale');
const fakelocator = require('../../fakes/fakelocator');
const { BadRequestError } = require('../../../src/interfaces/http/http-errors')
const { ValidateError } = require('../../../src/domain/errors')

function request(productId, sellerId, clientName) {
  return {
    productId,
    sellerId,
    clientName
  };
};

describe('Sale | Create', () => {
  it('Should to create a new sale', async () => {
    const product = await createSale.execute(request(1, 1, 'Joao'), fakelocator);

    expect(product).toEqual(request(1, 1, 'Joao'));
  });

  it('Should to create a new sale without clientName', async () => {
    const product = await createSale.execute(request(1, 1), fakelocator);

    expect(product).toEqual(request(1, 1, 'Anônimo'));
  });

  it('Should to return custom error if productId is invalid', async () => {
    await expect(createSale.execute(request(9999, 1), fakelocator)).rejects.toEqual(new BadRequestError('Invalid product id'));
  });

  it('Should to return custom error if SellerId is invalid', async () => {
    await expect(createSale.execute(request(1, 999), fakelocator)).rejects.toEqual(new BadRequestError('Invalid seller id'));
  });

  it('Should to return custom error if product id is undefined', async () => {
    await expect(createSale.execute(request(null, 1), fakelocator)).rejects.toEqual(new ValidateError('Product id is required'));
  });
  it('Should to return custom error if Seller id is undefined', async () => {
    await expect(createSale.execute(request(1, null), fakelocator)).rejects.toEqual(new ValidateError('Seller id is required'));
  });
});
