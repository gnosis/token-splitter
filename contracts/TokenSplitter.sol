pragma solidity ^0.4.24;

import "@gnosis.pm/util-contracts/contracts/Token.sol";


contract TokenSplitter {
    function splitTokens(address[] _recipients, address _tokenAddress, uint _amountForEach) public {
        Token erc20Token = Token(_tokenAddress);
        for (uint i = 0; i < _recipients.length; i++) {
            erc20Token.transferFrom(msg.sender, _recipients[i], _amountForEach);
        }
    }
}
