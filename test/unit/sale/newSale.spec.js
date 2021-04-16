const createSale = require('../../../src/application/useCases/Sale/newSale');
const createProd = require('../../../src/application/useCases/products/createProduct');
const createSeller = require('../../../src/application/useCases/seller/newSeller');

const fakelocator = require('../../fakes/fakelocator');
const { BadRequestError } = require('../../../src/interfaces/http/http-errors')
const { ValidateError } = require('../../../src/domain/errors')

function request(productId, sellerId, clientName, qnt) {
  return {
    productId,
    sellerId,
    clientName,
    qnt
  };
};

describe('Sale | Create', () => {
  beforeAll(async () => {

    await createProd.execute({ title: 'Carro', description: 'nova', price: 20, stock: 2 }, fakelocator);
    await createProd.execute({ title: 'Carro2', description: 'nova', price: 20 }, fakelocator);
    await createSeller.execute({ name: 'joao', image: 'joao.jpg', code: 'AAA' }, fakelocator)
    await createSeller.execute({ name: 'Maria', image: 'maria.jpg', code: 'BBB' }, fakelocator)
    })
  it('Should to create a new sale', async () => {
    const product = await createSale.execute(request('CARRO', 'AAA', 'Joao'), fakelocator);

    expect(product).toEqual(request('CARRO', 'AAA', 'Joao'));
  });

  it('Should to create a new sale without clientName', async () => {
    const product = await createSale.execute(request('CARRO', 'AAA'), fakelocator);

    expect(product).toEqual(request('CARRO', 'AAA', 'Anônimo'));
  });

  it('Should to return custom error if productId is invalid', async () => {
    await expect(createSale.execute(request('CARRO3', 'AAA'), fakelocator)).rejects.toEqual(new BadRequestError('Invalid product id'));
  });
  it('Should to return custom error if sale qnt is greater than product qnt', async () => {
    await expect(createSale.execute(request('CARRO', 'AAA', null, 5), fakelocator)).rejects.toEqual(new BadRequestError('This product has no stock'));
  });

  it('Should to return custom error if SellerId is invalid', async () => {
    await expect(createSale.execute(request('CARRO', 'CCC'), fakelocator)).rejects.toEqual(new BadRequestError('Invalid seller id'));
  });

  it('Should to return custom error if product id is undefined', async () => {
    await expect(createSale.execute(request(null, 1), fakelocator)).rejects.toEqual(new ValidateError('Product id is required'));
  });
  it('Should to return custom error if Seller id is undefined', async () => {
    await expect(createSale.execute(request(1, null), fakelocator)).rejects.toEqual(new ValidateError('Seller id is required'));
  });
});
