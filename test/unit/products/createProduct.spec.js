const createProduct = require('../../../src/application/useCases/products/createProduct');
const fakelocator = require('../../fakes/fakelocator');
const { BadRequestError } = require('../../../src/interfaces/http/http-errors')
const { ValidateProductError } = require('../../../src/domain/errors')

function request(title, description, price) {
  return {
    title,
    description,
    price
  }
}

describe('Create Product', () => {
  it('Should to create a new product', async () => {
    const requestData = request('carro', 'usado', 2000)
    const responseData = request('carro', 'usado', 2000)

    const product = await createProduct.execute(requestData, fakelocator);

    expect(product).toEqual(responseData);
  });
  it('Should to return custom error if product is already exists', async () => {
    const requestData = request('carro', 'usado', 2000)

    await expect(createProduct.execute(requestData, fakelocator)).rejects.toEqual(new BadRequestError('Product already exists'));
  })
  it('Should to return custom error if product data is invalid', async () => {
    const requestTitleNull = request(undefined, 'usado', 2000)
    const requestTitleNumber = request(0, 'usado', 2000)
    const requestDescriptionNull = request('carro', undefined, 2000)
    const requestDescriptionNumber = request('carro', 0, 2000)
    const requestPriceNull = request('carro', 'usado', undefined)

    await expect(createProduct.execute(requestTitleNull, fakelocator)).rejects.toEqual(new ValidateProductError('"title" is required'));
    await expect(createProduct.execute(requestTitleNumber, fakelocator)).rejects.toEqual(new ValidateProductError('"title" must be a string'));
    await expect(createProduct.execute(requestDescriptionNull, fakelocator)).rejects.toEqual(new ValidateProductError('"description" is required'));
    await expect(createProduct.execute(requestDescriptionNumber, fakelocator)).rejects.toEqual(new ValidateProductError('"description" must be a string'));
    await expect(createProduct.execute(requestPriceNull, fakelocator)).rejects.toEqual(new ValidateProductError('"price" is required'));
  })
});
