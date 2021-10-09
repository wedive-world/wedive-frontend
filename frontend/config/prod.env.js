'use strict'
const path = require("path"); 
const dotenv = require('dotenv');
console.log(path.join(__dirname, '../frontend-config.env'));
const env = dotenv.config({path: path.join(__dirname, '../frontend-config.env')});

console.log(`:::::::::::::::prod.env:::::::::::::`)
console.log(JSON.stringify(env))
console.log(`:::::::::::::::prod.env:::::::::::::`)

module.exports = {
  NODE_ENV: '"production"',
  VUE_APP_API_PATH: JSON.stringify(env.VUE_APP_API_PATH)
}
