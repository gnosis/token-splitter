const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TokenSplitter", function () {
  it("Should split tokens between addresses provided", async function () {
    const ERC20Token = await ethers.getContractFactory("ERC20Token");
    const erc20Token = await ERC20Token.deploy();
    const TokenSplitter = await ethers.getContractFactory("TokenSplitter");
    const tokenSplitter = await TokenSplitter.deploy();
    await erc20Token.deployed();
    await tokenSplitter.deployed();

    const accounts = await hre.ethers.getSigners();
    const amountForEach = 10;
    const mainAccount = accounts[0];
    const totalTokens = await erc20Token.balanceOf(mainAccount.address);
    expect(totalTokens).to.equal("1000000000000000");
    const recipients = accounts.slice(1).map(account => account.address)
    const totalAmountToSplit = recipients.length * amountForEach
    await erc20Token.approve(tokenSplitter.address, totalTokens)
    await tokenSplitter.splitTokens(recipients, erc20Token.address, amountForEach)
    expect(await erc20Token.balanceOf(mainAccount.address)).to.equal(totalTokens - totalAmountToSplit)

    recipients.forEach(async (r, i) => {
      expect(await erc20Token.balanceOf(r)).to.equal(amountForEach)
    })
  });
});