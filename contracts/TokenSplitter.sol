// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TokenSplitter {
    function splitTokens(address[] memory _recipients, address _tokenAddress, uint _amountForEach) public {
        IERC20 erc20Token = IERC20(_tokenAddress);
        for (uint i = 0; i < _recipients.length; i++) {
            erc20Token.transferFrom(msg.sender, _recipients[i], _amountForEach);
        }
    }
}
