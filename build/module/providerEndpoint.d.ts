import * as providers from '@ethersproject/providers';
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
declare const providerEndpoint: (url: any, networkId: any) => providers.JsonRpcProvider;
export default providerEndpoint;
/** @exports providerEndpoint */
