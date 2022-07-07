/**
 * @packageName Web3 RPC FailOverProvider
 * @license MIT
 * @version 1.3.0
 */

import * as providers from '@ethersproject/providers';

import getConfig from './configParser';
import providerEndpoint from './providerEndpoint';

// or {[k: string]: never}
type EmptyObject = Record<string, never>;

/**
 * @class FailOverProvider
 * @summary Fallback Provider which is capable of connecting to multiple back ends
 */
export class FailOverProvider {
  config: any;
  provider: any;

  /**
   * Generates the fallback provider from given config
   * @param {path} pathToConfig
   */
  constructor(pathToConfig: any) {
    this.config = getConfig(pathToConfig);
    const providerConfig = this.config.providers.map((provider: any) => {
      const f: EmptyObject = {};
      const config = f;
      // getNetwork.bind(null, provider.network));
      (config as any).provider = providerEndpoint(provider.url, provider.networkId);
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
