// deploy/00
module.exports = async ({getNamedAccounts, deployments}) => {
  const {deploy} = deployments;
  const {deployer} = await getNamedAccounts();
  await deploy('TokenSplitter', {
    from: deployer,
    // args: [],
    log: true,
    deterministicDeployment: true,
  });
};
module.exports.tags = ['TokenSplitter'];
