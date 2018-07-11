const TokenSplitter = artifacts.require("TokenSplitter");
const TokenGNO = artifacts.require("ForTestingOnly/TokenGNO");

contract('TokenSplitter', (accounts) => {
  it('splits tokens', async () => {
    const TokenSplitterInstance = await TokenSplitter.deployed()
    const totalTokens = 200
    const TokenGNOInstance = await TokenGNO.new(totalTokens)
    const mainAccount = accounts[0]
    initialBalance = (await TokenGNOInstance.balanceOf.call(mainAccount)).valueOf()
    assert.equal(initialBalance, totalTokens)
    const recipients = accounts.slice(1)
    const amountForEach = 10
    const totalAmount = recipients.length * amountForEach
    const allHoldingsBefore = await Promise.all(recipients.map((r) => TokenGNOInstance.balanceOf.call(r)))
    await TokenGNOInstance.approve(TokenSplitter.address, totalTokens)
    await TokenSplitterInstance.splitTokens(recipients, TokenGNOInstance.address, amountForEach)
    holdingsAccount = (await TokenGNOInstance.balanceOf.call(mainAccount)).valueOf()
    assert.equal(holdingsAccount, initialBalance - totalAmount)
    await recipients.forEach(async (r, i) => {
      const holdingsBefore = allHoldingsBefore[i]
      holdingsNow = (await TokenGNOInstance.balanceOf.call(r)).valueOf()
      assert.equal(allHoldingsBefore[i].add(amountForEach).valueOf(), holdingsNow)
    })
  })
})
