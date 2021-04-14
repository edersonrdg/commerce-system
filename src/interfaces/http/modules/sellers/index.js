const { Router } = require('express');
const sellerController = require('./sellerController');

const sellerRouter = Router();

sellerRouter.post('/', sellerController.create);

module.exports = sellerRouter;
