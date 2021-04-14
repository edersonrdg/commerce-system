const { Router } = require('express');
const sellerController = require('./sellerController');

const sellerRouter = Router();

sellerRouter.get('/', sellerController.index);
sellerRouter.post('/', sellerController.create);
sellerRouter.delete('/:id', sellerController.delete);

module.exports = sellerRouter;
