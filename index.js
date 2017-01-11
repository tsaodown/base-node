// @flow
'use strict'

const Express = require('express')
const Morgan = require('morgan')
const bodyParser = require('body-parser')

const conf = require('config')

const app = Express()

app.use(Morgan(conf.get('logging.format')))
app.use(bodyParser.json())

app.listen(conf.get('server.port'), () => {
  console.log(`Server listening on port ${conf.get('server.port')}`)
})

app.get('/', (req, res) => {
  res.json('bleh')
})

module.exports = app
