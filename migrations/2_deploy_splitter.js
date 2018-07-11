const TokenSplitter = artifacts.require("TokenSplitter");

module.exports = function(deployer) {
  deployer.deploy(TokenSplitter)
}
