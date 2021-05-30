require('dotenv').config();

module.exports = {
  url: process.env.DATABASE_URL || 'mongodb://localhost:27017',
};
