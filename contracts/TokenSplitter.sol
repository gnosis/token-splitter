pragma solidity >=0.5.0 <0.7.0;

import "@gnosis.pm/util-contracts/contracts/Token.sol";


contract TokenSplitter {

    uint overflowed = 2**32;

    function splitTokens(address[] memory _recipients, address _tokenAddress, uint _amountForEach) public {
        require(_recipients.length < 21, "TokenSplitter: only 20 addresses allowed");
        require(_amountForEach > 0, "TokenSplitter: amount is zero");
        require(_amountForEach < overflowed, "TokenSplitter: amount overflow");
        Token erc20Token = Token(_tokenAddress);
        for (uint i = 0; i < _recipients.length; i++) {
            erc20Token.transferFrom(msg.sender, _recipients[i], _amountForEach);
        }
    }
}
