// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";

contract ERC20Delegator {
    constructor() {}

    function callTransfer(address _recipient, uint256 _value, address _tokenAddress) public returns (bool) {
        return IERC20(_tokenAddress).transfer(_recipient, _value);
    }

    function callBalance(address _who, address _tokenAddress) public view returns (uint256) {
        return IERC20(_tokenAddress).balanceOf(_who);
    }
}
