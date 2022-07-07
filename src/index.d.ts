/**
 * @packageName Web3 RPC Failover
 * @license MIT
 * @version 1.3.0
 * @exports FailsafeProvider
 */

/**
 * @class FailsafeProvider
 * @summary Fallback Provider which is capable of connecting to multiple back ends
 */
declare class FailsafeProvider {
    config: any;
    provider: any;

    /**
     * Generates the fallback provider from given config
     * @param {path} pathToConfig
     */
    
    constructor(pathToConfig: any);

    /**
     * Returns the fallback provider
     * @return {provider}
     */

    get(): any;
}

export default FailsafeProvider;
