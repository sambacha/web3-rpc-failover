/**
 * @packageName Web3 RPC FailOverProvider
 * @license MIT
 * @version 1.3.0
 */
/**
 * @class FailOverProvider
 * @summary Fallback Provider which is capable of connecting to multiple back ends
 */
export declare class FailOverProvider {
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
