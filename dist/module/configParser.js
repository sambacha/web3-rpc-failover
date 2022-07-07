/**
 * @file configParser
 */
import * as fs from 'fs';
import * as yaml from 'yaml';
/**
 * @const getConfig
 * @summary Get and Parse the Config from the root directory
 */
const getConfig = (configPath) => {
    const configFile = fs.readFileSync(configPath, 'utf8');
    return yaml.parse(configFile);
};
export default getConfig;
/** @exports getConfig */
