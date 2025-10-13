# 🧠 OpenLab – Smart Academic Token (S.A.T.)

**Empowering Learning through Decentralized Recognition**

OpenLab is an open-source project that integrates blockchain technology, IPFS, and educational credentials to create a **Smart Academic Token (S.A.T.)** — a digital token representing student achievements, peer validation, and project-based learning milestones.

---

## 🚀 Features
- **Smart Academic Token (S.A.T.)** system for decentralized learning rewards.
- **IPFS Integration** for storing learning artifacts and badge proofs.
- **Smart Contracts (Solidity + Remix)** for minting and managing credentials.
- **STEM-ready design** for classrooms to simulate blockchain economy concepts.
- **Open Source + Education Focused**: teachers, students, and developers welcome.

---

## 🧩 Tech Stack
- Solidity (Ethereum-compatible)
- Remix IDE
- IPFS / Pinata / Filecoin
- Web3.js / Ethers.js
- Google Workspace (Slides + Classroom Integration)
- GitHub Actions (CI/CD for smart contract deployment)

---

## 🧠 Architecture Overview
1. **Students** earn achievements → stored as data on IPFS.
2. **Smart Contract** mints S.A.T. tokens linked to that IPFS hash.
3. **Teachers/Peers** validate tokens through on-chain credentials.
4. **Digital Wallet** (Google Slides or real blockchain) displays tokens.

---

## 📁 Folder Structure
```
OpenLab/
│
├── contracts/
│   ├── SATToken.sol
│   └── OpenLabRegistry.sol
│
├── scripts/
│   ├── deploy.js
│   └── mintToken.js
│
├── frontend/
│   ├── index.html
│   ├── app.js
│   └── styles.css
│
├── assets/
│   ├── logo.png
│   └── banner.png
│
└── README.md
```

---

## 🧰 Getting Started
1. Clone the repo:
   ```bash
   git clone https://github.com/porroto/OpenLab.git
   cd OpenLab
   ```
2. Open Remix → import `contracts/` folder.
3. Deploy `SATToken.sol` and `OpenLabRegistry.sol`.
4. Simulate IPFS connections with mock metadata.
5. Explore your **Digital Wallet Prototype** in `/frontend/`.

---

## 💡 Vision
> *“Education deserves a trustless, transparent, and empowering recognition system.”*
Our mission is to bridge the world of **blockchain** and **education**, preparing students for a decentralized future while recognizing learning with authenticity and joy.

---

## 🧑‍💻 Contributors
- Roger Vargas (@porroto) – Concept & STEM Implementation
- Open Source Educators Community

---

## 🪙 License
MIT License © 2025 OpenLab
