const { Router } = require('express');
const productController = require('./productController');

const productRouter = Router();

productRouter.post('/', productController.create);

module.exports = productRouter;
