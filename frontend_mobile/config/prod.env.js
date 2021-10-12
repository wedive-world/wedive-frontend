'use strict'

require('dotenv').config({ path: process.env.PWD + '/wedive-secret/frontend-config.env' })

module.exports = {
  NODE_ENV: '"production"',
  VUE_APP_API_PATH: JSON.stringify(process.env.VUE_APP_API_PATH)
}
