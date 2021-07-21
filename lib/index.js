const ethers = require("ethers");

const getConfig = require("./utils/configParser.js");
const urlToProvider = require("./utils/urlToProvider.js");

/**
 * Fallback Provider which is capable of connecting to multiple backends
 */
class FallbackProvider {
  /**
   * Generates the fallback provider from given config
   * @param {path} pathToConfig
   */
  constructor(pathToConfig) {
    this.config = getConfig(pathToConfig);
    const providerConfig = this.config.providers.map((provider) => {
      const config = {};
      config.provider = urlToProvider(provider.url);
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
