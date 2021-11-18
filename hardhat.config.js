require("@nomiclabs/hardhat-waffle");
require('hardhat-deploy');
require("@nomiclabs/hardhat-ethers")

const { DEPLOYMENT_KEY } = process.env;

const PRIVATE_KEY = DEPLOYMENT_KEY || "0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d";  // Ganache-cli first account

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("./src/tasks/deploy_contracts")

module.exports = {
  solidity: "0.8.4",
  namedAccounts: {
    deployer: 0,
  },
  networks: {
    mainnet: {
      url: 'https://main-light.eth.linkpool.io/',
      accounts: [PRIVATE_KEY]
    },
    rinkeby: {
      url: 'https://rinkeby-light.eth.linkpool.io/',
      accounts: [PRIVATE_KEY]
    },
    goerli: {
      url: 'https://rpc.goerli.mudit.blog/',
      accounts: [PRIVATE_KEY]
    },
  }
};
