'use strict'

const dotenv = require('dotenv');
const env = dotenv.config().parsed;

module.exports = {
  NODE_ENV: '"production"',
  VUE_APP_API_PATH: JSON.stringify(env.VUE_APP_API_PATH)
}
