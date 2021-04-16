const express = require('express');
require('express-async-errors');
const uploadConfig = require('../config/upload');
const errorTreatment = require('../../interfaces/http/middlewares/error-handling');
const routes = require('../../interfaces/http/routes');

const createServer = () => {
  const server = express();

  server.use('/files', express.static(uploadConfig.directory));
  server.use(routes);
  server.use(errorTreatment);
  server.listen(process.env.PORT || 3000);
};

module.exports = createServer;
