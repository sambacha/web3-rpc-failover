
export default class ConfigurationParsingException extends Error {
  [x: string]: any;
  constructor(filePath, error) {
    super(`Error reading configuration file ${filePath}: ${error}`);
    this.filePath = filePath;
    Error.captureStackTrace(this, ConfigurationParsingException);
  }
}