const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')

const app = express()
  .use(bodyParser.json())
  .use('/notes', router)

module.exports = app;
