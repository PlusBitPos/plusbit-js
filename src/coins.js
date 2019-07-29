// Coins supported by bitgo-bitcoinjs-lib
const typeforce = require('typeforce')

const coins = {
  BCH: 'bch',
  BSV: 'bsv',
  BTC: 'btc',
  BTG: 'btg',
  LTC: 'ltc',
  ZEC: 'zec',
  DASH: 'dash',
  RVN: 'rvn',
  DYN: 'dyn',
  XBA: 'xba',
  HASH: 'hash',
  XUEZ: 'xuez',
  QBC: 'qbc',
  NYC3: 'nyc3',
  SIN: 'sin'
}

coins.isBitcoin = function (network) {
  return typeforce.value(coins.BTC)(network.coin)
}

coins.isBitcoinCash = function (network) {
  return typeforce.value(coins.BCH)(network.coin)
}

coins.isBitcoinSV = function (network) {
  return typeforce.value(coins.BSV)(network.coin)
}

coins.isBitcoinGold = function (network) {
  return typeforce.value(coins.BTG)(network.coin)
}

coins.isLitecoin = function (network) {
  return typeforce.value(coins.LTC)(network.coin)
}

coins.isZcash = function (network) {
  return typeforce.value(coins.ZEC)(network.coin)
}
coins.isRavencoin = function (network) {
  return typeforce.value(coins.RVN)(network.coin)
}
coins.isDynamic = function (network) {
  return typeforce.value(coins.DYN)(network.coin)
}
coins.isBitcoinAir = function (network) {
  return typeforce.value(coins.XBA)(network.coin)
}
coins.isHash = function (network) {
  return typeforce.value(coins.HASH)(network.coin)
}
coins.isXuez = function (network) {
  return typeforce.value(coins.XUEZ)(network.coin)
}
coins.isQbc = function (network) {
  return typeforce.value(coins.QBC)(network.coin)
}
coins.isNyc3 = function (network) {
  return typeforce.value(coins.NYC3)(network.coin)
}
coins.isSin = function (network) {
  return typeforce.value(coins.SIN)(network.coin)
}

coins.isValidCoin = typeforce.oneOf(
  coins.isBitcoin,
  coins.isBitcoinCash,
  coins.isBitcoinSV,
  coins.isBitcoinGold,
  coins.isLitecoin,
  coins.isZcash,
  coins.isRavencoin,
  coins.isDynamic,
  coins.isBitcoinAir,
  coins.isHash,
  coins.isXuez,
  coins.isQbc,
  coins.isNyc3,
  coins.isSin
)

module.exports = coins
