const createServer = require('./src/infra/webserver/server');
require('dotenv').config();
const database = require('./src/infra/config/database');

const start = () => {
  try {
    createServer();
    database.connect();
    console.log('server started');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
