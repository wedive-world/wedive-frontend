'use strict'

const dotenv = require('dotenv');
const env = dotenv.config().parsed;

console.log(`:::::::::::::::prod.env:::::::::::::`)
console.log(JSON.stringify(env))
console.log(`:::::::::::::::prod.env:::::::::::::`)

module.exports = {
  NODE_ENV: '"production"',
  VUE_APP_API_PATH: JSON.stringify(env.VUE_APP_API_PATH)
}
