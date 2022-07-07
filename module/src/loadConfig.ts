
export async function loadConfig(binName, filenameRegex, filename, rootDir) {
  const basename = path.basename(filename);

  if (filenameRegex.test(basename)) {
    const requireConfig = tryRequire(filename);
    if (requireConfig) {
      return requireConfig;
    }

    const content = await getContent(filename);
    const config = parse(content);
    return config;
  }

  const custom = await getCustomConfig(binName, filename, rootDir);

  if (custom) {
    return custom;
  }

  return null;
}