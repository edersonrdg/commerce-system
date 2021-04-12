const { Router } = require('express');
const especifProductController = require('./especifProductController');
const productController = require('./productController');

const productRouter = Router();

productRouter.get('/', productController.index);
productRouter.post('/', productController.create);
productRouter.delete('/:id', productController.delete);

productRouter.get('/:id', especifProductController.show);

module.exports = productRouter;
