const { expect } = require("chai");
const { FallbackProvider } = require("../lib/index");

describe("Fallback Provider", () => {
  let fallbackProvider;

  beforeEach(() => {
    fallbackProvider = new FallbackProvider(
      __dirname + "/testFiles/testProviderCfg.yaml"
    );
  });

  it("Should Initialize", () => {
    expect(fallbackProvider).to.not.eql(undefined);
  });

  it("Should get the provider", () => {
    const provider = fallbackProvider.get();
		expect(provider._isProvider).to.eql(true);
		delete provider;
  });
});
