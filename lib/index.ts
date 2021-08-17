/**
* @file RPC Failover
* @license MIT
* @version 0.2.0
*/

// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'ethers'.
const ethers = require('ethers');
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'getConfig'... Remove this comment to see the full error message
const getConfig = require('./utils/configParser.js');
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'urlToProvi... Remove this comment to see the full error message
const urlToProvider = require('./utils/urlToProvider.js');

/**
* Fallback Provider which is capable of connecting to multiple backends
*/

/** @class FallbackProvider */
class FallbackProvider {
  config: any;
  provider: any;

  /**
  * Generates the fallback provider from given config
  * @param {path} pathToConfig
  */

  constructor(pathToConfig: any) {
     this.config = getConfig(pathToConfig);
     const providerConfig = this.config.providers.map((provider: any) => {
       const config = {};
       (config as any).provider = urlToProvider(provider.url);
       Object.assign(config, provider.config);
       return config;
 });  
     this.provider = new ethers.providers.FallbackProvider(providerConfig);
 }

  /**
  * Returns the fallback provider
  * @return {provider}
  */

  get() {
    return this.provider;
  }
}

module.exports = {
  FallbackProvider,
};
/** @exports FallbackProvider */
