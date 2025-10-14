// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./OpenLabBadge.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BadgeFactory is Ownable {
    OpenLabBadge public badgeContract;

    constructor(address _badgeContract) {
        badgeContract = OpenLabBadge(_badgeContract);
    }

    function mintFromFactory(address to, string memory metadataURI) public onlyOwner {
        badgeContract.mintBadge(to, metadataURI);
    }
}
