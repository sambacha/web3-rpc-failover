# web3-rpc-failover
 
 `npm i web3-rpc-failover`  


## Usage

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
  const {FallbackProvider} = require('web3-rpc-failover')
  const provider = new FallbackProvider(<pathToConfig>)
  ```


## License

MIT
