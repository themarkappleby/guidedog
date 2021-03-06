#!/usr/bin/env node

var path = require('path')
var connect = require('connect')
var serveStatic = require('serve-static')

var port = process.env.PORT || 3000
var server = connect()

server.use('/dist', serveStatic(path.join(__dirname, '/dist')))
server.use(serveStatic(__dirname+'/example/build'))
server.listen(port)

var nodeEnv = process.env.NODE_ENV || 'development'
if (nodeEnv == 'development') {
  require('node-pow')('guidedog', port)
}

console.log('Listening on port', port)
