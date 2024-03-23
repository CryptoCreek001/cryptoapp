require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');//const HDWalletProvider = require('truffle-hdwallet-provider-privkey'); 

const privateKeys = process.env.PRIVATE_KEYS || ""


module.exports = {
 

  networks: {
   development: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*"  // match any network id
       },
       mumbai: {
        provider: () => new HDWalletProvider(
          process.env.PRIVATE_KEYS.split(','),
          `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_API_KEY}`
        ),
        network_id: 80001,
        gas: 5000000,
        gasPrice: 25000000000,
      }
  },
  contracts_directory: './src/contracts',
  contracts_build_directory: './src/abis/',

  compilers: {
    // Solidity is a compiled language -- All the smart contracts have to be compiled down to byte code to be exucuted on the EVM 
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

};
