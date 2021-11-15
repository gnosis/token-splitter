require("@nomiclabs/hardhat-waffle");

module.exports = task("deploy-contracts", "Deploys and verifies contracts")
    .setAction(async (_, hre) => {
        await hre.run("deploy")
        // await hre.run("local-verify")
        await hre.run("sourcify")
        await hre.run("etherscan-verify", { forceLicense: true, license: 'LGPL-3.0'})
    });
