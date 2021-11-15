Token splitter
-------------
This contract implements a function that receives a `list of addresses`, a `ERC20 token contract address` and the `amount to send per account`
and sends to every contract the amount of tokens.

Remember to `Approve` the `ERC20` token using the address of the contract before calling `splitTokens` function.

Addresses
-------------
- [Mainnet](https://etherscan.io/address/0x31Df8A24548c037C7A08d49512ecaF07da2cb75B): `0x31Df8A24548c037C7A08d49512ecaF07da2cb75B` 
- [Rinkeby](https://rinkeby.etherscan.io/address/0xdAc3c6B0306b02Cc5e8A233211f3E94E80eDA01a): `0xdAc3c6B0306b02Cc5e8A233211f3E94E80eDA01a`
- [Goerli](https://goerli.etherscan.io/address/0x0604db5D4f75f5Df62a53dAD32459145ddB1817C): `0x0604db5D4f75f5Df62a53dAD32459145ddB1817C`

Deployment
----------
npm install
export DEPLOYMENT_KEY=<your_deployment_private_key>
npx hardhat deploy-contracts --network rinkeby  # mainnet, goerli or add your network to `hardhat.config.js`
