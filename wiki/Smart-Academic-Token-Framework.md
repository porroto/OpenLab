# 🧩 Smart Academic Token Framework

The S.A.T. Framework defines how OpenLab tokenizes learning achievements.

## Overview
Each token represents a **verifiable credential**.  
Tokens can be minted for:
- Project completion
- Peer collaboration
- Innovation or problem-solving

## Token Structure (JSON Example)
```json
{
  "name": "Digital Wallet Setup",
  "description": "Awarded for setting up a student digital wallet in OpenLab.",
  "image": "ipfs://QmExampleImageHash",
  "attributes": [
    { "trait_type": "Level", "value": "Beginner" },
    { "trait_type": "Category", "value": "Onboarding" }
  ]
}
```

## Token Levels
| Level | Description |
|--------|--------------|
| Beginner | First engagement or onboarding |
| Intermediate | Skill-building and teamwork |
| Advanced | Leadership or innovation |

## Validation Flow
1. Teacher issues a token.
2. Peer confirms completion.
3. Token is logged and displayed in the student wallet.
