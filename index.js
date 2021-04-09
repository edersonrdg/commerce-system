const createServer = require('./src/infra/webserver/server');
require('dotenv').config();

const start = () => {
  try {
    createServer();
    console.log('server started');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
