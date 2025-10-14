# 👩‍🏫 Teacher Agent Guide

The Teacher Agent is your facilitator inside OpenLab. It manages student progress, validates tokens, and logs activity.

## Features
- Automates recognition (badge minting)
- Tracks student performance
- Integrates with Google Sheets for analytics

## Workflow
1. Students complete a task or project.
2. The Teacher Agent verifies work and awards the corresponding S.A.T token.
3. The wallet updates in real-time, showing new achievements.

## Example Command
```bash
teacher-agent mint --student "Maria Lopez" --token "Digital Wallet Setup"
```

## Classroom Use
Encourage peer validation — allow one student to “verify” another’s badge claim before final approval.
