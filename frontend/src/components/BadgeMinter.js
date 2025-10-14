import React, { useState } from 'react';
import { ethers } from 'ethers';

const CONTRACT_ADDRESS = 'REPLACE_WITH_CONTRACT';

const ABI = [
  'function mintBadge(address to, string memory metadataURI) public'
];

export default function BadgeMinter() {
  const [wallet, setWallet] = useState('');
  const [recipient, setRecipient] = useState('');
  const [tokenURI, setTokenURI] = useState('');
  const [status, setStatus] = useState('');

  async function connectWallet() {
    if (!window.ethereum) {
      setStatus('MetaMask not found');
      return;
    }
    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    setWallet(address);
    setStatus('Wallet connected');
  }

  async function mint() {
    if (!wallet) { setStatus('Connect wallet first'); return; }
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
      const tx = await contract.mintBadge(recipient, tokenURI);
      setStatus('Transaction sent: ' + tx.hash);
      await tx.wait();
      setStatus('Minted ✅');
    } catch (e) {
      setStatus('Error: ' + e.message);
    }
  }

  return (
    <div>
      <button onClick={connectWallet}>{wallet ? wallet.slice(0,6)+'...' : 'Connect Wallet'}</button>
      <div style={{ marginTop: 8 }}>
        <input placeholder="Recipient address" value={recipient} onChange={e=>setRecipient(e.target.value)} />
      </div>
      <div style={{ marginTop: 8 }}>
        <input placeholder="Token URI (ipfs://...)" value={tokenURI} onChange={e=>setTokenURI(e.target.value)} />
      </div>
      <button onClick={mint} style={{ marginTop: 8 }}>Mint Badge</button>
      <p>{status}</p>
    </div>
  );
}
