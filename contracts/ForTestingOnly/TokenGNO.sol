pragma solidity >=0.5.0 <0.7.0;

import "@gnosis.pm/util-contracts/contracts/GnosisStandardToken.sol";


contract TokenGNO is GnosisStandardToken {
    string public constant symbol = "GNO";
    string public constant name = "GNO Test Token";
    uint8 public constant decimals = 18;

    constructor(uint amount) public {
        balances[msg.sender] = amount;
    }
}
