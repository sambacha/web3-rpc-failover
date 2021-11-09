# web3-rpc-failover

> FailoverProvider via yaml configuration file for cascading connection fallbacks

## Motivation

Providing assurances for Service Provider outages in a robust and simple way. 

Do not confuse our usage of `failover` with how *ethers-js* uses _fallback_. [see the ethers documentation, fallback provider](https://docs.ethers.io/v5/single-page/#/v5/api/providers/other/-%23-FallbackProvider)



## Install

 `npm i web3-rpc-failover`  


### Usage: as an external module


- install web3-rpc-failover
- configure your RPC Service Providers in order of preference for failover

  ```yaml
  providers:
    - url: 'https://mainnet.infura**'
      config:
        priority: 2
        stallTimeout: 200
        weight: 2
    - url: 'infura.io/zzz'
      config:
        priority: 1
        stallTimeout: 100
        weight: 1
  ```

  `priority`:  priority used for the provider
  `stallTimeout`:  timeout (in ms)

### Usage: as a library

  ```js
  const {FallbackProvider} = require('web3-rpc-failover')
  const provider = new FallbackProvider(<pathToYAMLConfig>)
  ```


## License

MIT
