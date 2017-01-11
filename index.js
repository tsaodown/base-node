// @flow
'use strict'

const Express = require('express')
const Morgan = require('morgan')
const bodyParser = require('body-parser')

const conf = require('config')

const app = Express()

app.use(Morgan(conf.get('logging.format')))
app.use(bodyParser)

app.listen(conf.get('server.port'), () => {
  console.log(`Server listening on port ${conf.get('server.port')}`)
})

module.exports = app
