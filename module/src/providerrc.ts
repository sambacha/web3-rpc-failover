
import { cosmiconfig } from 'cosmiconfig';
import camelcase from 'camelcase';
import ConfigurationParsingException from './exceptions/configuration-parsing-exception';

export const version = 1_000;

function convertObjectToCamelCase(obj) {
  return Object.entries(obj).reduce((newObj, [key, value]) => {
    newObj[camelcase(key)] = value; // eslint-disable-line no-param-reassign
    return newObj;
  }, {});
}

/* istanbul ignore next */
function returnNull() {
  return null;
}

export async function getRCFileConfiguration(moduleName, filename, dir) {
  try {
    const configFileExplorer = cosmiconfig(moduleName, {
      // this prevents cosmiconfig from picking up .js configuration files. "null" means no file was found.
      // Gotta extract `() => null` into a function to be able to ignore the line from the code coverage count.
      loaders: { '.js': returnNull },
    });
    const findings = await (filename !== undefined
      ? configFileExplorer.load(filename)
      : configFileExplorer.search(dir));
    return !findings || findings.isEmpty
      ? {}
      : convertObjectToCamelCase(findings.config);
  } catch (error) {
    // It's not documented in cosmiconfig's documentation,
    // but error in this case should be a YAMLException
    throw new ConfigurationParsingException(filename, error);
  }
}

export async function getConfiguration(args, moduleName, version) {
  const dir = args[0] || '.';
  const rcConfig = await getRCFileConfiguration(
    moduleName,
    version,
    dir,
  );
  return { ...rcConfig};
}