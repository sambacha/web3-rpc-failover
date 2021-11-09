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
const providerEndpoint = (url, networkId) => {
    if (url.startsWith('http')) {
        return new providers.JsonRpcProvider(url, networkId);
    }
    else if (url.startsWith('ws')) {
        return new providers.WebSocketProvider(url, networkId);
    }
    else {
        throw new Error('Could not resolve url to provider');
    }
};
//module.exports = providerEndpoint;
export default providerEndpoint;
/** @exports providerEndpoint */
//# sourceMappingURL=providerEndpoint.js.map