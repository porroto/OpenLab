// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract OpenLabBadge is ERC1155, Ownable {
    uint256 public currentBadgeId = 0;
    mapping(uint256 => string) private _uris;

    constructor() ERC1155("") {}

    function mintBadge(address to, string memory metadataURI) public onlyOwner {
        currentBadgeId++;
        _mint(to, currentBadgeId, 1, "");
        _uris[currentBadgeId] = metadataURI;
    }

    function uri(uint256 tokenId) public view override returns (string memory) {
        return _uris[tokenId];
    }
}
