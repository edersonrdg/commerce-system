const createProduct = require('../../../src/application/useCases/products/createProduct');
const fakelocator = require('../../fakes/fakelocator');
const { BadRequestError } = require('../../../src/interfaces/http/http-errors')
const { ValidateError } = require('../../../src/domain/errors')

function request(title, description, price, stock) {
  return {
    title,
    description,
    price,
    stock
  };
};

describe('Product | Create', () => {
  it('Should to create a new product', async () => {
    const product = await createProduct.execute(request('CARRO', 'USADO', 2000, 20), fakelocator);

    expect(product).toEqual(request('CARRO', 'USADO', 2000, 20));
  });
  it('Should to create a new product without stock', async () => {
    const product = await createProduct.execute(request('CARRO2', 'USADO', 2000), fakelocator);

    expect(product).toEqual(request('CARRO2', 'USADO', 2000, 0));
  });
  it('Should to return custom error if product is already exists', async () => {
    await expect(createProduct.execute(request('carro', 'usado', 2000), fakelocator))
      .rejects.toEqual(new BadRequestError('Product already exists'));
  });
  it('Should to return custom error if product data is invalid', async () => {
    await expect(createProduct.execute(request(undefined, 'usado', 2000), fakelocator))
      .rejects.toEqual(new ValidateError('"title" is required'));
    await expect(createProduct.execute(request(0, 'usado', 2000), fakelocator))
      .rejects.toEqual(new ValidateError('"title" must be a string'));
    await expect(createProduct.execute(request('carro', undefined, 2000), fakelocator))
      .rejects.toEqual(new ValidateError('"description" is required'));
    await expect(createProduct.execute(request('carro', 0, 2000), fakelocator))
      .rejects.toEqual(new ValidateError('"description" must be a string'));
    await expect(createProduct.execute(request('carro', 'usado', undefined), fakelocator))
      .rejects.toEqual(new ValidateError('"price" is required'));
  });
});
