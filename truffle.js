const HDWalletProvider = require("@truffle/hdwallet-provider");

require('dotenv').config()

const token = process.env.INFURA_TOKEN
const mnemonic = process.env.MNEMONIC

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${token}`)
      },
      network_id: "4",
      gasPrice: 25000000000, // 25 Gwei
    }
  },
  solc: {
    optimizer: {
      enabled: false
    }
  },
};