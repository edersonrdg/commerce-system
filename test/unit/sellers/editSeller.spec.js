const { edit, create, list } = require('../../../src/application/useCases/seller');
const fakelocator = require('../../fakes/fakelocator')
const { BadRequestError } = require('../../../src/interfaces/http/http-errors')

function request(name, image, code) {
  return {
    name,
    image,
    code
  }
}

describe('Product | Edit', () => {
  beforeAll(async () => {

  const requestData = request('joao', 'imgJoao', 'AAA')

  await create.execute(requestData, fakelocator);
  })
  it('Should to edit product', async () => {
    const data = request('maria', 'imgMaria', 'AAA')

    await edit.execute('AAA', data, fakelocator)

    const product = await list.execute(null, fakelocator)

    expect(product).toEqual([request('maria', 'imgMaria', 'AAA')])
  });
  it('Should to edit only params passed product', async () => {
    const data = request(null, null, 'IAO')

    await edit.execute('AAA', data, fakelocator)

    const product = await list.execute(null, fakelocator)

    expect(product).toEqual([request('maria', 'imgMaria', 'IAO')])
  });

  it('Should to return a custom error if seller id is invalid', async () => {
    await expect(edit.execute(null, null, fakelocator)).rejects.toEqual(new BadRequestError('Invalid seller id'));
  });
})
