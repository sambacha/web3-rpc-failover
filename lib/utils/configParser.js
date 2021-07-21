const fs = require('fs');
const yaml = require('yaml');
/**
 * Get and Parse the Config from the root directory
 * @param {configPath} configPath
 * @return {object} config
 */
const getConfig = (configPath) => {
  const configFile = fs.readFileSync(configPath, 'utf8');
  return yaml.parse(configFile);
};

module.exports = getConfig;
