import { JsonRpcProvider, WebSocketProvider, FallbackProvider } from '@ethersproject/providers';
import { readFileSync } from 'fs';
import { parse } from 'yaml';

/**
 * @file configParser
 */
/**
 * @const getConfig
 * @summary Get and Parse the Config from the root directory
 */

var getConfig = function getConfig(configPath) {
  var configFile = readFileSync(configPath, 'utf8');
  return parse(configFile);
};
/** @exports getConfig */

/**
 * @file providerEndpoint
 * @summary url to provider
 */

/**
 *  @const providerEndpoint
 *  @summary Coerces a URL into its respective provider
 *  @param {string} url RPC/WS Endpoint
 *  @param {string} networkId of chain
 *  @note this is defined in a `.yaml` configuration file
 */

var providerEndpoint = function providerEndpoint(url, networkId) {
  if (url.startsWith('http')) {
    return new JsonRpcProvider(url, networkId);
  } else if (url.startsWith('ws')) {
    return new WebSocketProvider(url, networkId);
  } else {
    throw new Error('Could not resolve url to provider');
  }
}; //module.exports = providerEndpoint;
/** @exports providerEndpoint */

/**
 * @file RPC Failover
 * @license MIT
 * @version 0.2.0
 */
/**
 * @class FailsafeProvider
 * @summary Fallback Provider which is capable of connecting to multiple back ends
 */

var FailsafeProvider = /*#__PURE__*/function () {
  /**
   * Generates the fallback provider from given config
   * @param {path} pathToConfig
   */
  function FailsafeProvider(pathToConfig) {
    this.config = getConfig(pathToConfig);
    var providerConfig = this.config.providers.map(function (provider) {
      var config = {};
      config.provider = providerEndpoint(provider.url, networkId);
      Object.assign(config, provider.config);
      return config;
    });
    this.provider = new FallbackProvider(providerConfig);
  }
  /**
   * Returns the fallback provider
   * @return {provider}
   */


  var _proto = FailsafeProvider.prototype;

  _proto.get = function get() {
    return this.provider;
  };

  return FailsafeProvider;
}();

module.exports = {
  FailsafeProvider: FailsafeProvider
};

function networkId(_url, _networkId) {
  throw new Error('Function not implemented.');
}

export default FailsafeProvider;
//# sourceMappingURL=web3-rpc-failover.esm.js.map
