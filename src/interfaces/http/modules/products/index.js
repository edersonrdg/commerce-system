const { Router } = require('express');
const productController = require('./productController');

const productRouter = Router();

productRouter.post('/', productController.create);
productRouter.get('/', productController.index);

module.exports = productRouter;
