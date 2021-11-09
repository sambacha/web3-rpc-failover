/**
 * @file RPC Failover
 * @license MIT
 * @version 0.2.0
 */

import * as providers from '@ethersproject/providers';
import getConfig from './utils/configParser';
import providerEndpoint from './utils/providerEndpoint';

/**
 * @class FailsafeProvider
 * @summary Fallback Provider which is capable of connecting to multiple back ends
 */
class FailsafeProvider {
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
      (config as any).provider = providerEndpoint(provider.url, networkId);
      Object.assign(config, provider.config);
      return config;
    });
    this.provider = new providers.FallbackProvider(providerConfig);
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
  FailsafeProvider,
};

function networkId(_url: any, _networkId: any): any {
  throw new Error('Function not implemented.');
}
/** @exports FailsafeProvider */
export FailsafeProvider;
