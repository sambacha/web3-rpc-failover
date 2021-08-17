/**
* @file urlToProvider
* @summary url to provider
*/

'use strict';
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'ethers'.
const ethers = require('ethers');

/**
 *  Coerces a URL into its respective provider
 *  @param {string} url RPC/WS Endpoint
 *  @param {string} networkId of chain
 *  @note this is defined in a `.yaml` configuration file
 */

// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'urlToProvi... Remove this comment to see the full error message
const urlToProvider = (url: any, networkId: any) => {
  if (url.startsWith('http')) {
    return new ethers.providers.JsonRpcProvider(url, networkId);
  } else if (url.startsWith('ws')) {
    return new ethers.providers.WebSocketProvider(url, networkId);
  } else {
    throw new Error('Could not resolve url to provider');
  }
};

module.exports = urlToProvider;
/** @exports urlToProvider */
