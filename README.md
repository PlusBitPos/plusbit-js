# React-Native implentation of bitcoinjs-lib

## Features

- Standardized: Node community coding style, Browserify, Node's stdlib and Buffers.
- Experiment-friendly: Bitcoin Mainnet and Testnet support.
- Altcoin-ready: Capable of working with bitcoin-derived cryptocurrencies (such as Dogecoin).
- Zcash sapling support


## Installation

`npm install https://github.com/libtechnologies-io/plusbit-js`


## Setup

Create the react native project.

`react-native init exampleApp`

Install rn-nodeify to be able to use Node.js libs.

`npm i rn-nodeify -g`

Add this postinstall script to install & hack the Node.js libs for the usage in React Native.

`"rn-nodeify --install stream,buffer,events,assert,process,crypto,vm --hack"`

Install & link required dependencies.

`npm i react-native-randombytes --save && react-native link react-native-randombytes`

Run the postinstall, it will create a shim.js file which you need to include in your index file (see Usage).

`npm run postinstall`

Run the app

`react-native run-android` or `react-native run-ios`

## Usage

Edit your project file (Example: KeyPair.js)

```javascript
// node.js libs
import './shim' // make sure to use es6 import and not require()
import PlusBit from 'plusbit-js'

export default function(){
    const keypair = PlusBit.ECPair.makeRandom()  //Bitcoin 
    return {
        address: keypair.getAddress(),
        private_key: keypair.toWIF()
    }
}
```

Refer to https://github.com/bitcoin-js/bitcoin-js-lib for further documentation
