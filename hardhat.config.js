require("@nomiclabs/hardhat-waffle");
require('hardhat-deploy');
require("@nomiclabs/hardhat-ethers")

const { DEPLOYMENT_KEY } = process.env;

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
    rinkeby: {
      url: 'https://rinkeby-light.eth.linkpool.io/',
      accounts: [DEPLOYMENT_KEY]
    }
  }
};
