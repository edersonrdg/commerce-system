const { validate } = require('../../infra/validators/joi/seller-validator');

module.exports = class {
  constructor(data) {
    validate(data);

    this.name = data.name;
    this.image = data.image;
    this.code = data.code;
  }
};
