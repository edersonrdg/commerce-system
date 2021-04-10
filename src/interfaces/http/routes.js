const express = require('express');
const product = require('./modules/products/index');

const routes = express.Router();

routes.use(express.json());
routes.use('/products', product);

module.exports = routes;
