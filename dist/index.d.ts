/**
 * @file RPC Failover
 * @license MIT
 * @version 0.2.0
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
/** @exports FailsafeProvider */
export default FailsafeProvider;
