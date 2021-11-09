# web3-rpc-failover

> FailoverProvider via yaml configuration file for cascading connection fallbacks

## Motivation

Providing assurances for Service Provider outages in a robust and simple way. 

Do not confuse our usage of `failover` with how *ethers-js* uses _fallback_. [see the ethers documentation, fallback provider](https://docs.ethers.io/v5/single-page/#/v5/api/providers/other/-%23-FallbackProvider)



## Usage

 `npm i ethereum-provider-failover`  

### External Module

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

### Library

  ```js
  const {FallbackProvider} = require('ethereum-provider-failover')
  const provider = new FallbackProvider(<pathToConfig>)
  ```


## License

MIT
