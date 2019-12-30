pragma solidity ^0.4.24;

import "@gnosis.pm/util-contracts/contracts/StandardToken.sol";


contract TokenGNO is StandardToken {
    string public constant symbol = "GNO";
    string public constant name = "GNO Test Token";
    uint8 public constant decimals = 18;

    constructor(uint amount) public {
        balances[msg.sender] = amount;
    }
}
