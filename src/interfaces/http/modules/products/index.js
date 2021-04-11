const { Router } = require('express');
const especifProductController = require('./especifProductController');
const productController = require('./productController');

const productRouter = Router();

productRouter.post('/', productController.create);
productRouter.get('/', productController.index);
productRouter.get('/:id', especifProductController.show);

module.exports = productRouter;
