// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12 <0.9.0;
import "hardhat/console.sol";
contract Token {
    string public name = "HardHat Token";
    string public symbol = "HHT";
    uint256 public totalSupply = 10000;

    address public owner;

    mapping(address => uint256) balances;

    constructor() {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transfer(address to, uint256 amount) external {
        console.log("**Sender balance is %s tokens**", balances[msg.sender]);
        console.log(
            "**Sender is sending %s tokens to %s address**",
            amount,
            to
        );

        require(balances[msg.sender] >= amount, "Not enough tokens");
        balances[msg.sender] -= amount; //balances[msg.sender]=balances[msg.sender]-amount;
        balances[to] += amount;
    }

    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }
}
//jahan bhi tranfer function call hoga vahan ye js code will execute which help in debugging