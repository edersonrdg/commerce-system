const express = require('express');

const createServer = () => {
  const server = express();

  server.listen(process.env.PORT || 3000);
};

module.exports = createServer;
