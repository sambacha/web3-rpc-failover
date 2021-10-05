# web3-rpc-failover

> Exposes `ethers.js` FailoverProvider via yaml configuration file for cascading connection fallbacks

## Usage

 `npm i ethereum-provider-failover`  

### create configuration file

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

### Import into application 

  ```js
  const {FallbackProvider} = require('ethereum-provider-failover')
  const provider = new FallbackProvider(<pathToConfig>)
  ```


## License

MIT
