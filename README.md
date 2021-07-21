# Fallback Provider

---

## Usage

- Create a config file for the backends to be used. Example -

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

  `Priority`: The priority used for the provider. Higher priorities are favoured over lower priorities. If multiple providers share the same priority, they are chosen at random.

  `stallTimeout`: The timeout (in ms) after which another Provider will be attempted. This does not affect the current Provider; if it returns a result it is counted as part of the quorum.Lower values will result in more network traffic, but may reduce the response time of requests.

  `weight`: The weight a response from this provider provides. This can be used if a given Provider is more trusted, for example.

- Add the package to the project  
  `npm i fallback-provider`  
  OR  
  `yarn add fallback-provider`

- Import the provider as usual, i.e

  ```js
  const {FallbackProvider} = require('fallback-provider')
  const provider = new FallbackProvider(<pathToConfig>)
  ```
