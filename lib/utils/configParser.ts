const fs = require('fs');
const yaml = require('yaml');
/**
 * Get and Parse the Config from the root directory
 * @param {configPath} configPath
 * @return {object} config
 */
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'getConfig'... Remove this comment to see the full error message
const getConfig = (configPath: any) => {
  const configFile = fs.readFileSync(configPath, 'utf8');
  return yaml.parse(configFile);
};

module.exports = getConfig;
