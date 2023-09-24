import { expect } from 'chai';

import getConfig from '../dist/module/configParser.js';
import urlToProvider,{ bind } from '../dist/module/urlToProvider.js';

describe('Config Parser', () => {
  it('Should parse YAML', () => {
    const cfg = getConfig(__dirname + '/testFiles/testConfig.yaml');
    expect(cfg).to.eql({ hello: 'world', isTrue: true });
  });
});

describe('URL Parser', () => {
  it('Should return HTTP Provider', () => {
    const httpProvider = urlToProvider(
      'https://mainnet.infura.io/v3/84842078b09946638c03157f83405213',
    );
    expect(httpProvider._isProvider).to.eql(true);
  });

  it('Should return WS Provider', () => {
    const wsProvider = urlToProvider(
      'wss://mainnet.infura.io/ws/v3/84842078b09946638c03157f83405213',
    );
    expect(wsProvider._isProvider).to.eql(true);
    wsProvider.destroy();
  });

  it('Should throw on invalid protocol', () => {
    expect(bind(urlToProvider, 'random://test.com')).to.throw(
      'Could not resolve url to provider',
    );
  });
});
