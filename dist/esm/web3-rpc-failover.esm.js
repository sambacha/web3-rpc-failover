import { JsonRpcProvider, WebSocketProvider, FallbackProvider } from '@ethersproject/providers';
import { readFileSync } from 'fs';
import { parse } from 'yaml';

/**
 * @file configParser
 */
/**
 * @const getConfig
 * @summary Get and Parse the Config from the root directory
 */

var getConfig = function getConfig(configPath) {
  var configFile = readFileSync(configPath, 'utf8');
  return parse(configFile);
};
/** @exports getConfig */

/**
 * @file providerEndpoint
 * @summary url to provider
 */

/**
 *  @const providerEndpoint
 *  @summary Coerces a URL into its respective provider
 *  @param {string} url RPC/WS Endpoint
 *  @param {string} networkId of chain
 *  @note this is defined in a `.yaml` configuration file
 */

var providerEndpoint = function providerEndpoint(url, networkId) {
  if (url.startsWith('http')) {
    return new JsonRpcProvider(url, networkId);
  } else if (url.startsWith('ws')) {
    return new WebSocketProvider(url, networkId);
  } else {
    throw new Error('Could not resolve url to provider');
  }
}; //module.exports = providerEndpoint;
/** @exports providerEndpoint */

/**
 * @packageName Web3 RPC FailOverProvider
 * @license MIT
 * @version 1.3.0
 */
/**
 * @class FailOverProvider
 * @summary Fallback Provider which is capable of connecting to multiple back ends
 */

var FailOverProvider = /*#__PURE__*/function () {
  /**
   * Generates the fallback provider from given config
   * @param {path} pathToConfig
   */
  function FailOverProvider(pathToConfig) {
    this.config = getConfig(pathToConfig);
    var providerConfig = this.config.providers.map(function (provider) {
      var f = {};
      var config = f; // getNetwork.bind(null, provider.network));

      config.provider = providerEndpoint(provider.url, provider.networkId);
      Object.assign(config, provider.config);
      return config;
    });
    this.provider = new FallbackProvider(providerConfig);
  }
  /**
   * Returns the fallback provider
   * @return {provider}
   */


  var _proto = FailOverProvider.prototype;

  _proto.get = function get() {
    return this.provider;
  };

  return FailOverProvider;
}();

var rpc_endpoints = {
	"0": {
	rpcs: [
		"https://rpc.kardiachain.io/"
	]
},
	"1": {
	rpcs: [
		"https://api.securerpc.com/v1",
		"https://api.mycryptoapi.com/eth",
		"https://rpc.flashbots.net/",
		"https://cloudflare-eth.com/",
		"https://mainnet-nethermind.blockscout.com/",
		"https://nodes.mewapi.io/rpc/eth",
		"https://main-rpc.linkpool.io/",
		"https://mainnet.eth.cloud.ava.do/",
		"https://ethereumnodelight.app.runonflux.io",
		"https://rpc.ankr.com/eth",
		"https://eth-rpc.gateway.pokt.network",
		"https://main-light.eth.linkpool.io"
	]
},
	"2": {
	rpcs: [
		"https://node.expanse.tech"
	]
},
	"7": {
	rpcs: [
		"https://rpc.dome.cloud"
	]
},
	"8": {
	rpcs: [
		"https://rpc.octano.dev"
	]
},
	"10": {
	rpcs: [
		"https://mainnet.optimism.io/"
	]
},
	"11": {
	rpcs: [
		"https://api.metadium.com/dev"
	]
},
	"14": {
	rpcs: [
	],
	rpcWorking: false
},
	"15": {
	rpcs: [
		"https://prenet.diode.io:8443/"
	]
},
	"17": {
	rpcs: [
		"https://rpc.thaifi.com"
	]
},
	"19": {
	rpcs: [
		"https://songbird.towolabs.com/rpc"
	]
},
	"20": {
	rpcs: [
		"https://api.elastos.io/eth",
		"https://api.trinity-tech.cn/eth"
	]
},
	"22": {
	rpcs: [
		"https://eid.elastos.io/api/eth-rpc",
		"https://api.trinity-tech.io/eid",
		"https://api.elastos.io/eid"
	]
},
	"24": {
	rpcs: [
		"https://node-mainnet.dithereum.io  "
	]
},
	"25": {
	rpcs: [
		"https://evm-cronos.crypto.org",
		"https://cronosrpc-1.xstaking.sg/",
		"https://cronos-rpc.elk.finance/"
	]
},
	"27": {
	rpcs: [
		"https://rpc.shibachain.net"
	],
	websiteUrl: "https://shibachain.net/"
},
	"29": {
	rpcs: [
		"https://rpc.genesisl1.org"
	]
},
	"30": {
	rpcs: [
		"https://public-node.rsk.co"
	]
},
	"33": {
	rpcs: [
	],
	rpcWorking: false
},
	"35": {
	rpcs: [
		"https://rpc.tbwg.io"
	]
},
	"38": {
	rpcs: [
	],
	websiteDead: true,
	rpcWorking: false
},
	"40": {
	rpcs: [
		"https://mainnet.telos.net/evm",
		"https://rpc1.eu.telos.net/evm",
		"https://rpc1.us.telos.net/evm",
		"https://rpc2.us.telos.net/evm",
		"https://api.kainosbp.com/evm",
		"https://rpc2.eu.telos.net/evm",
		"https://evm.teloskorea.com/evm",
		"https://rpc2.teloskorea.com/evm",
		"https://rpc01.us.telosunlimited.io/evm",
		"https://rpc02.us.telosunlimited.io/evm",
		"https://rpc.telosarabia.net/evm"
	]
},
	"44": {
	rpcs: [
	],
	rpcWorking: false
},
	"50": {
	rpcs: [
		"https://rpc.xinfin.network"
	]
},
	"52": {
	rpcs: [
		"https://rpc.coinex.net/",
		"https://rpc1.coinex.net/",
		"https://rpc2.coinex.net/",
		"https://rpc3.coinex.net/",
		"https://rpc4.coinex.net/"
	]
},
	"55": {
	rpcs: [
		"https://rpc-1.zyx.network/",
		"https://rpc-2.zyx.network/",
		"https://rpc-3.zyx.network/",
		"https://rpc-5.zyx.network/"
	]
},
	"56": {
	rpcs: [
		"https://bsc-dataseed.binance.org/",
		"https://bsc-dataseed1.defibit.io/",
		"https://bsc-dataseed1.ninicoin.io/",
		"https://bsc-dataseed2.defibit.io/",
		"https://bsc-dataseed3.defibit.io/",
		"https://bsc-dataseed4.defibit.io/",
		"https://bsc-dataseed2.ninicoin.io/",
		"https://bsc-dataseed3.ninicoin.io/",
		"https://bsc-dataseed4.ninicoin.io/",
		"https://bsc-dataseed1.binance.org/",
		"https://bsc-dataseed2.binance.org/",
		"https://bsc-dataseed3.binance.org/",
		"https://bsc-dataseed4.binance.org/",
		"https://rpc.ankr.com/bsc",
		"https://bscrpc.com",
		"https://bsc.mytokenpocket.vip",
		"https://binance.nodereal.io"
	]
},
	"57": {
	rpcs: [
		"https://rpc.syscoin.org"
	]
},
	"58": {
	rpcs: [
		"https://dappnode1.ont.io:10339",
		"https://dappnode2.ont.io:10339",
		"https://dappnode3.ont.io:10339",
		"https://dappnode4.ont.io:10339"
	]
},
	"59": {
	rpcs: [
		"https://api.eosargentina.io"
	]
},
	"60": {
	rpcs: [
		"https://rpc.gochain.io"
	]
},
	"61": {
	rpcs: [
		"https://blockscout.com/etc/mainnet/api/eth-rpc",
		"https://www.ethercluster.com/etc"
	]
},
	"64": {
	rpcs: [
	],
	websiteDead: true,
	rpcWorking: false
},
	"66": {
	rpcs: [
		"https://exchainrpc.okex.org"
	]
},
	"68": {
	rpcs: [
	],
	rpcWorking: false
},
	"70": {
	rpcs: [
		"https://http-mainnet.hoosmartchain.com"
	]
},
	"74": {
	rpcs: [
		"https://idchain.one/rpc/"
	]
},
	"76": {
	rpcs: [
	],
	rpcWorking: false,
	possibleRebrand: "It is now a Polkadot chain project renamed: Acuity being built on substrate"
},
	"77": {
	rpcs: [
		"https://sokol.poa.network"
	]
},
	"78": {
	rpcs: [
		"https://ethnode.primusmoney.com/mainnet"
	]
},
	"80": {
	rpcs: [
		"website:https://genechain.io/en/index.html"
	],
	rpcWorking: false
},
	"82": {
	rpcs: [
		"https://rpc.meter.io"
	]
},
	"86": {
	rpcs: [
		"https://evm.gatenode.cc"
	]
},
	"87": {
	rpcs: [
		"https://rpc.novanetwork.io:9070"
	]
},
	"88": {
	rpcs: [
		"https://rpc.tomochain.com"
	]
},
	"90": {
	rpcs: [
		"https://s0.garizon.net/rpc"
	]
},
	"91": {
	rpcs: [
		"https://s1.garizon.net/rpc"
	]
},
	"92": {
	rpcs: [
		"https://s2.garizon.net/rpc"
	]
},
	"93": {
	rpcs: [
		"https://s3.garizon.net/rpc"
	]
},
	"96": {
	rpcs: [
		"https://rpc.nextsmartchain.com"
	]
},
	"99": {
	rpcs: [
		"https://core.poanetwork.dev"
	]
},
	"100": {
	rpcs: [
		"https://rpc.gnosischain.com",
		"https://rpc.xdaichain.com",
		"https://xdai.poanetwork.dev",
		"https://xdai-rpc.gateway.pokt.network",
		"https://dai.poa.network",
		"https://xdai-archive.blockscout.com",
		"https://rpc-df.xdaichain.com/"
	]
},
	"101": {
	rpcs: [
	],
	websiteDead: true,
	rpcWorking: false
},
	"106": {
	rpcs: [
		"https://evmexplorer.velas.com/rpc"
	]
},
	"108": {
	rpcs: [
		"https://mainnet-rpc.thundercore.com"
	]
},
	"111": {
	rpcs: [
		"https://rpc.etherlite.org"
	]
},
	"122": {
	rpcs: [
		"https://fuse-rpc.gateway.pokt.network/",
		"https://rpc.fuse.io"
	]
},
	"123": {
	rpcs: [
		"https://rpc.fusespark.io"
	]
},
	"124": {
	rpcs: [
	],
	rpcWorking: false
},
	"126": {
	rpcs: [
		"https://rpc.mainnet.oychain.io"
	],
	rpcWorking: false
},
	"127": {
	rpcs: [
	],
	rpcWorking: false
},
	"128": {
	rpcs: [
		"https://http-mainnet-node.huobichain.com",
		"https://http-mainnet.hecochain.com",
		"https://pub001.hg.network/rpc"
	]
},
	"137": {
	rpcs: [
		"https://polygon-rpc.com",
		"https://rpc-mainnet.matic.network",
		"https://rpc-mainnet.maticvigil.com",
		"https://rpc-mainnet.matic.quiknode.pro",
		"https://matic-mainnet.chainstacklabs.com",
		"https://matic-mainnet-full-rpc.bwarelabs.com",
		"https://matic-mainnet-archive-rpc.bwarelabs.com",
		"https://poly-rpc.gateway.pokt.network/",
		"https://rpc.ankr.com/polygon",
		"https://rpc-mainnet.maticvigil.com/"
	]
},
	"142": {
	rpcs: [
		"https://rpc.prodax.io"
	]
},
	"163": {
	rpcs: [
		"https://node.mainnet.lightstreams.io"
	]
},
	"186": {
	rpcs: [
		"https://rpc.seelen.pro/"
	]
},
	"188": {
	rpcs: [
		"https://mainnet.bmcchain.com/"
	]
},
	"199": {
	rpcs: [
		"https://rpc.bittorrentchain.io/"
	]
},
	"200": {
	rpcs: [
		"https://arbitrum.xdaichain.com"
	]
},
	"211": {
	rpcs: [
	],
	websiteDead: true,
	rpcWorking: false
},
	"222": {
	rpcs: [
		"https://blockchain-api-mainnet.permission.io/rpc"
	]
},
	"246": {
	rpcs: [
		"https://rpc.energyweb.org"
	]
},
	"250": {
	rpcs: [
		"https://rpc.ftm.tools/",
		"https://rpc.ankr.com/fantom",
		"https://rpc.fantom.network",
		"https://rpc2.fantom.network",
		"https://rpc3.fantom.network",
		"https://rpcapi.fantom.network"
	]
},
	"258": {
	rpcs: [
	],
	rpcWorking: false
},
	"262": {
	rpcs: [
		"https://sur.nilin.org"
	]
},
	"269": {
	rpcs: [
		"https://hpbnode.com"
	]
},
	"288": {
	rpcs: [
		"https://mainnet.boba.network/"
	]
},
	"321": {
	rpcs: [
		"https://rpc-mainnet.kcc.network/"
	]
},
	"333": {
	rpcs: [
	],
	rpcWorking: false
},
	"336": {
	rpcs: [
		"https://rpc.shiden.astar.network:8545/"
	]
},
	"361": {
	rpcs: [
		"https://eth-rpc-api.thetatoken.org/rpc"
	]
},
	"369": {
	rpcs: [
	],
	rpcWorking: false
},
	"385": {
	rpcs: [
	],
	websiteDead: true,
	rpcWorking: false
},
	"499": {
	rpcs: [
	],
	rpcWorking: false,
	website: "https://rupayacoin.org/"
},
	"512": {
	rpcs: [
		"https://rpc.acuteangle.com"
	]
},
	"555": {
	rpcs: [
		"https://rpc.velaverse.io"
	]
},
	"558": {
	rpcs: [
		"https://rpc.tao.network"
	]
},
	"592": {
	rpcs: [
		"https://rpc.astar.network:8545"
	]
},
	"686": {
	rpcs: [
	],
	rpcWorking: false
},
	"707": {
	rpcs: [
	],
	rpcWorking: false
},
	"777": {
	rpcs: [
		"https://node.cheapeth.org/rpc"
	]
},
	"787": {
	rpcs: [
	],
	rpcWorking: false
},
	"803": {
	rpcs: [
	],
	websiteDead: true,
	rpcWorking: false
},
	"820": {
	rpcs: [
		"https://clo-geth.0xinfra.com/"
	]
},
	"880": {
	rpcs: [
		"https://mainnet.ambroschain.com"
	]
},
	"888": {
	rpcs: [
		"https://gwan-ssl.wandevs.org:56891"
	]
},
	"977": {
	rpcs: [
	],
	websiteDead: true,
	rpcWorking: false
},
	"998": {
	rpcs: [
		"https://rpc.luckynetwork.org"
	]
},
	"1010": {
	rpcs: [
		"https://meta.evrice.com"
	]
},
	"1012": {
	rpcs: [
		"https://global.rpc.mainnet.newtonproject.org"
	]
},
	"1022": {
	rpcs: [
	],
	websiteDead: "Possible rebrand to Clover CLV",
	rpcWorking: false
},
	"1024": {
	rpcs: [
		"https://rpc-ivy.clover.finance",
		"https://rpc-ivy-2.clover.finance",
		"https://rpc-ivy-3.clover.finance"
	]
},
	"1030": {
	rpcs: [
		"https://evm.confluxrpc.com"
	]
},
	"1088": {
	rpcs: [
		"https://andromeda.metis.io/?owner=1088"
	]
},
	"1139": {
	rpcs: [
		"https://mathchain.maiziqianbao.net/rpc"
	]
},
	"1197": {
	rpcs: [
	],
	rpcWorking: false
},
	"1202": {
	rpcs: [
		"https://rpc.cadaut.com"
	]
},
	"1213": {
	rpcs: [
		"https://dataseed.popcateum.org"
	]
},
	"1214": {
	rpcs: [
	],
	rpcWorking: false
},
	"1280": {
	rpcs: [
		"https://nodes.halo.land"
	]
},
	"1284": {
	rpcs: [
		"https://rpc.api.moonbeam.network"
	]
},
	"1285": {
	rpcs: [
		"https://moonriver.api.onfinality.io/rpc?apikey=673e1fae-c9c9-4c7f-a3d5-2121e8274366",
		"https://moonriver.api.onfinality.io/public"
	]
},
	"1287": {
	rpcs: [
		"https://rpc.testnet.moonbeam.network"
	]
},
	"1288": {
	rpcs: [
	],
	rpcWorking: false
},
	"1618": {
	rpcs: [
		"https://send.catechain.com"
	]
},
	"1620": {
	rpcs: [
	],
	websiteDead: true,
	rpcWorking: false
},
	"1657": {
	rpcs: [
		"https://dataseed1.btachain.com/"
	]
},
	"1856": {
	rpcs: [
		"rpcWorking:false"
	],
	rpcWorking: false
},
	"1987": {
	rpcs: [
		"https://jsonrpc.egem.io/custom"
	]
},
	"2020": {
	rpcs: [
		"https://api.roninchain.com/rpc"
	]
},
	"2021": {
	rpcs: [
		"https://mainnet2.edgewa.re/evm",
		"https://mainnet3.edgewa.re/evm"
	]
},
	"2025": {
	rpcs: [
		"https://mainnet.rangersprotocol.com/api/jsonrpc"
	]
},
	"2100": {
	rpcs: [
		"https://api.ecoball.org/ecoball/"
	]
},
	"2213": {
	rpcs: [
		"https://seed4.evanesco.org:8546"
	]
},
	"2559": {
	rpcs: [
	],
	rpcWorking: false
},
	"3690": {
	rpcs: [
		"https://rpc1.bittexscan.info"
	]
},
	"4689": {
	rpcs: [
		"https://iotex-mainnet.gateway.pokt.network/v1/lb/6176f902e19001003499f492",
		"https://rpc.ankr.com/iotex",
		"https://babel-api.mainnet.iotex.io",
		"https://babel-api.mainnet.iotex.one",
		"https://pokt-api.iotex.io"
	]
},
	"5050": {
	rpcs: [
		"https://rpc.liquidchain.net/",
		"https://rpc.xlcscan.com/"
	]
},
	"5197": {
	rpcs: [
		"https://mainnet.eraswap.network"
	]
},
	"5315": {
	rpcs: [
	],
	rpcWorking: false
},
	"5551": {
	rpcs: [
		"https://l2.nahmii.io/"
	]
},
	"5869": {
	rpcs: [
		"https://proxy.wegochain.io"
	]
},
	"6626": {
	rpcs: [
		"https://http-mainnet.chain.pixie.xyz"
	]
},
	"7341": {
	rpcs: [
		"https://rpc.shyft.network/"
	]
},
	"8000": {
	rpcs: [
		"https://dataseed.testnet.teleport.network"
	]
},
	"8217": {
	rpcs: [
		"http://175.209.78.135:8551",
		"https://public-node-api.klaytnapi.com/v1/cypress"
	]
},
	"8723": {
	rpcs: [
		"https://mainnet-web3.wolot.io"
	]
},
	"8995": {
	rpcs: [
		"https://core.bloxberg.org"
	]
},
	"9001": {
	rpcs: [
		"https://eth.bd.evmos.org:8545/"
	]
},
	"9100": {
	rpcs: [
		"rpcWorking:false"
	]
},
	"10000": {
	rpcs: [
		"https://smartbch.fountainhead.cash/mainnet",
		"https://smartbch.greyh.at",
		"https://global.uat.cash",
		"https://rpc.uatvo.com"
	]
},
	"10101": {
	rpcs: [
		"https://eu.mainnet.xixoio.com"
	]
},
	"11111": {
	rpcs: [
		"https://api.trywagmi.xyz/rpc"
	]
},
	"12052": {
	rpcs: [
		"https://zerorpc.singularity.gold"
	]
},
	"13381": {
	rpcs: [
		"https://rpc.phoenixplorer.com/"
	]
},
	"16000": {
	rpcs: [
	],
	websiteDead: true,
	rpcWorking: false
},
	"19845": {
	rpcs: [
		"https://seed.btcix.org/rpc"
	]
},
	"21816": {
	rpcs: [
		"https://seed.omlira.com"
	]
},
	"24484": {
	rpcs: [
	],
	rpcWorking: false
},
	"24734": {
	rpcs: [
		"https://node1.mintme.com"
	]
},
	"31102": {
	rpcs: [
		"rpcWorking:false"
	]
},
	"32659": {
	rpcs: [
		"https://mainnet.anyswap.exchange",
		"https://mainway.freemoon.xyz/gate",
		"https://fsn.dev/api"
	]
},
	"39797": {
	rpcs: [
		"https://nodeapi.energi.network",
		"https://explorer.energi.network/api/eth-rpc"
	]
},
	"42069": {
	rpcs: [
		"rpcWorking:false"
	]
},
	"42161": {
	rpcs: [
		"https://arb1.arbitrum.io/rpc",
		"https://rpc.ankr.com/arbitrum"
	]
},
	"42220": {
	rpcs: [
		"https://forno.celo.org",
		"https://rpc.ankr.com/celo"
	]
},
	"42262": {
	rpcs: [
		"https://emerald.oasis.dev/"
	]
},
	"43110": {
	rpcs: [
		"rpcWorking:false"
	]
},
	"43114": {
	rpcs: [
		"https://api.avax.network/ext/bc/C/rpc",
		"https://rpc.ankr.com/avalanche"
	]
},
	"45000": {
	rpcs: [
		"https://rpc.autobahn.network"
	]
},
	"47805": {
	rpcs: [
		"https://rpc.rei.network"
	]
},
	"53935": {
	rpcs: [
		"https://avax-dfk.gateway.pokt.network/v1/lb/6244818c00b9f0003ad1b619/ext/bc/q2aTwKuyzgs8pynF7UXBZCU7DejbZbZ6EUyHr3JQzYgwNPUPi/rpc"
	]
},
	"55555": {
	rpcs: [
		"https://rei-rpc.moonrhythm.io"
	]
},
	"63000": {
	rpcs: [
		"https://rpc.ecredits.com"
	]
},
	"70000": {
	rpcs: [
	],
	rpcWorking: false
},
	"70001": {
	rpcs: [
		"https://proxy1.thinkiumrpc.net/"
	]
},
	"70002": {
	rpcs: [
		"https://proxy2.thinkiumrpc.net/"
	]
},
	"70103": {
	rpcs: [
		"https://proxy103.thinkiumrpc.net/"
	]
},
	"71394": {
	rpcs: [
		"https://mainnet.godwoken.io/rpc/eth-wallet"
	]
},
	"99999": {
	rpcs: [
		"https://rpc.uschain.network"
	]
},
	"100000": {
	rpcs: [
	],
	rpcWorking: false
},
	"100001": {
	rpcs: [
		"http://eth-jrpc.mainnet.quarkchain.io:39000"
	]
},
	"100002": {
	rpcs: [
		"http://eth-jrpc.mainnet.quarkchain.io:39001"
	]
},
	"100003": {
	rpcs: [
		"http://eth-jrpc.mainnet.quarkchain.io:39002"
	]
},
	"100004": {
	rpcs: [
		"http://eth-jrpc.mainnet.quarkchain.io:39003"
	]
},
	"100005": {
	rpcs: [
		"http://eth-jrpc.mainnet.quarkchain.io:39004"
	]
},
	"100006": {
	rpcs: [
		"http://eth-jrpc.mainnet.quarkchain.io:39005"
	]
},
	"100007": {
	rpcs: [
		"http://eth-jrpc.mainnet.quarkchain.io:39006"
	]
},
	"100008": {
	rpcs: [
		"http://eth-jrpc.mainnet.quarkchain.io:39007"
	]
},
	"108801": {
	rpcs: [
		"rpcWorking:false"
	]
},
	"110000": {
	rpcs: [
		"rpcWorking:false"
	]
},
	"110001": {
	rpcs: [
		"http://eth-jrpc.devnet.quarkchain.io:39900"
	]
},
	"110002": {
	rpcs: [
		"http://eth-jrpc.devnet.quarkchain.io:39901"
	]
},
	"110003": {
	rpcs: [
		"http://eth-jrpc.devnet.quarkchain.io:39902"
	]
},
	"110004": {
	rpcs: [
		"http://eth-jrpc.devnet.quarkchain.io:39903"
	]
},
	"110005": {
	rpcs: [
		"http://eth-jrpc.devnet.quarkchain.io:39904"
	]
},
	"110006": {
	rpcs: [
		"http://eth-jrpc.devnet.quarkchain.io:39905"
	]
},
	"110007": {
	rpcs: [
		"http://eth-jrpc.devnet.quarkchain.io:39906"
	]
},
	"110008": {
	rpcs: [
		"http://eth-jrpc.devnet.quarkchain.io:39907"
	]
},
	"200625": {
	rpcs: [
	],
	rpcWorking: false
},
	"201018": {
	rpcs: [
		"https://openapi.alaya.network/rpc"
	]
},
	"210425": {
	rpcs: [
	],
	rpcWorking: false
},
	"246529": {
	rpcs: [
		"https://rpc.sigma1.artis.network"
	]
},
	"281121": {
	rpcs: [
		"rpcWorking:false"
	]
},
	"333999": {
	rpcs: [
		"https://rpc.polis.tech"
	]
},
	"888888": {
	rpcs: [
		"https://infragrid.v.network/ethereum/compatible"
	]
},
	"955305": {
	rpcs: [
		"https://host-76-74-28-226.contentfabric.io/eth/"
	]
},
	"1313114": {
	rpcs: [
		"https://rpc.ethoprotocol.com"
	]
},
	"1313500": {
	rpcs: [
		"https://rpc.xerom.org"
	]
},
	"7762959": {
	rpcs: [
	],
	websiteDead: true,
	rpcWorking: false
},
	"13371337": {
	rpcs: [
	],
	websiteDead: true,
	rpcWorking: false
},
	"18289463": {
	rpcs: [
	],
	websiteDead: true,
	rpcWorking: false
},
	"20181205": {
	rpcs: [
		"https://hz.rpc.qkiscan.cn"
	]
},
	"28945486": {
	rpcs: [
	],
	rpcWorking: false
},
	"35855456": {
	rpcs: [
		"https://node.joys.digital"
	]
},
	"61717561": {
	rpcs: [
		"https://c.onical.org"
	]
},
	"192837465": {
	rpcs: [
		"https://mainnet.gather.network"
	]
},
	"245022926": {
	rpcs: [
		"https://proxy.devnet.neonlabs.org/solana"
	]
},
	"245022934": {
	rpcs: [
		"rpcWorking:false"
	]
},
	"311752642": {
	rpcs: [
		"https://mainnet-rpc.oneledger.network"
	]
},
	"356256156": {
	rpcs: [
		"https://testnet.gather.network"
	]
},
	"486217935": {
	rpcs: [
		"https://devnet.gather.network"
	]
},
	"1122334455": {
	rpcs: [
	],
	rpcWorking: false
},
	"1313161554": {
	rpcs: [
		"https://mainnet.aurora.dev"
	]
},
	"1313161556": {
	rpcs: [
		"http://localhost:8545"
	]
},
	"1666600000": {
	rpcs: [
		"https://harmony-0-rpc.gateway.pokt.network",
		"https://api.harmony.one",
		"https://a.api.s0.t.hmny.io",
		"https://api.s0.t.hmny.io",
		"https://rpc.heavenswail.one/",
		"https://api.fuzz.fi/",
		"https://rpc.hermesdefi.io/"
	]
},
	"1666600001": {
	rpcs: [
		"https://s1.api.harmony.one"
	]
},
	"1666600002": {
	rpcs: [
		"https://s2.api.harmony.one"
	]
},
	"1666600003": {
	rpcs: [
	],
	rpcWorking: false
},
	"2021121117": {
	rpcs: [
	],
	rpcWorking: false,
	websiteDead: true
},
	"3125659152": {
	rpcs: [
	],
	rpcWorking: false
},
	"11297108109": {
	rpcs: [
		"https://palm-mainnet.infura.io/v3/3a961d6501e54add9a41aa53f15de99b"
	]
},
	"836542336838601": {
	rpcs: [
		"https://mainnet-api.skalenodes.com/v1/fit-betelgeuse"
	]
},
	"197710212030": {
	rpcs: [
		"https://rpc.ntity.io"
	]
},
	"6022140761023": {
	rpcs: [
		"https://molereum.jdubedition.com"
	],
	websiteDead: true
}
};

export { rpc_endpoints as rpcEndpoints };
export {  getConfig, providerEndpoint as  ProviderFailover }
export default FailOverProvider
//# sourceMappingURL=web3-rpc-failover.esm.js.map