const {
  create, list, remove, edit,
} = require('../../../../application/useCases/seller');
const locator = require('../../../../infra/config/locator');

module.exports = {
  async create(request, response) {
    const sellers = await create.execute(request.body, locator);

    return response.status(201).json(sellers);
  },
  async index(request, response) {
    const sellers = await list.execute(locator);
    return response.status(201).json(sellers);
  },
  async update(request, response) {
    await edit.execute(request.params.id, request.body, locator);
    return response.status(200).send();
  },
  async delete(request, response) {
    await remove.execute(request.params.id, locator);
    return response.status(200).send();
  },
};
