
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./web3-rpc-failover.cjs.production.min.js')
} else {
  module.exports = require('./web3-rpc-failover.cjs.development.js')
}
