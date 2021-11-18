Token splitter
-------------
This contract implements a function that receives a `list of addresses`, a `ERC20 token contract address` and the `amount to send per account`
and sends to every contract the amount of tokens.

Remember to `Approve` the `ERC20` token using the address of the contract before calling `splitTokens` function.

Addresses
-------------
- [Mainnet](https://etherscan.io/address/0x31Df8A24548c037C7A08d49512ecaF07da2cb75B): `0x31Df8A24548c037C7A08d49512ecaF07da2cb75B` 
- [Rinkeby](https://rinkeby.etherscan.io/address/0xDA5bFd47155CB3002Db5799d4f4FC24856Fb3293): `0xDA5bFd47155CB3002Db5799d4f4FC24856Fb3293`
- [Goerli](https://goerli.etherscan.io/address/0xDA5bFd47155CB3002Db5799d4f4FC24856Fb3293): `0xDA5bFd47155CB3002Db5799d4f4FC24856Fb3293`

Deployment
----------
npm install
export DEPLOYMENT_KEY=<your_deployment_private_key>
export ETHERSCAN_API_KEY=<your_etherscan_api_key>
npx hardhat deploy-contracts --network rinkeby  # mainnet, goerli or add your network to `hardhat.config.js`
