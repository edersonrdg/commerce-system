const { Router } = require('express');
const especifcSellerController = require('./especifcSellerController');
const sellerController = require('./sellerController');

const sellerRouter = Router();

sellerRouter.get('/', sellerController.index);
sellerRouter.post('/', sellerController.create);
sellerRouter.delete('/:id', sellerController.delete);
sellerRouter.put('/:id', sellerController.update);

sellerRouter.get('/:id', especifcSellerController.show);
module.exports = sellerRouter;
