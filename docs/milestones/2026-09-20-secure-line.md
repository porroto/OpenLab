# OpenLab HANGAR Milestone — SECURE LINE

**Date:** 2026-09-20  
**Systems:** NOVA / 007 + Pathfinder / M + MIRA Gateway  
**Status:** `BOND PASS` / `Gateway Transport PASS` / `Local MIRA next`

---

## Mission Log

Today we moved from a DMA-starved BOND prototype to a stable two-device link.

The milestone:

```text
M -> IS THIS LINE SECURE?
007 -> LINE SECURE.
```

NOVA / 007 and Pathfinder / M maintained:

- ESP-NOW BOND
- AMOLED display
- touch
- QMI8658 IMU
- ES7210 audio awareness
- ES8311 procedural sound
- mission UI
- local badge UI
- MIRA serial request protocol

without returning to the repeated `ESP_ERR_NO_MEM` failure seen in the earlier HULK build.

---

## Known-Good Anchors

### NOVA / Board A

**NOVA v0.7.5 — 007 RETURNS — GOLD**

Key characteristics:

- 8-row LVGL display transport
- Lean Wi-Fi / ESP-NOW
- touch + gaze
- IMU physical awareness
- local audio awareness
- procedural sound
- BOND operational
- stable stress run

### Pathfinder / Board B

**Pathfinder v0.8.1.2 — SECURE LINE ADMIT — BOND PASS**

Key characteristics:

- 4-row LVGL display transport
- 8 KB BOND preflight reserve
- post-init DMA reality check
- Lean Wi-Fi
- staggered peer-found UI
- deferred `BOND LINK` badge
- mission deck
- aggressive procedural animations
- MIRA serial gateway protocol

---

## What Broke Before

The original BOND integration created severe internal DMA pressure.

Symptoms included:

```text
Failed to allocate priv TX buffer
Draw bitmap failed: ESP_ERR_NO_MEM
```

and, in the worst run, I2S DMA allocation failure.

The visible failure became known as:

> **HULK mode** 💚

The important engineering lesson was that **total heap was not the limiting resource**.

The critical metric was:

> **largest contiguous DMA-capable block**

---

## Recovery Sequence

| Version | Milestone |
|---|---|
| `v0.7.1` | DMA / internal-memory instrumentation |
| `v0.7.2` | Lean Wi-Fi |
| `v0.7.3` | guarded / deferred BOND |
| `v0.7.4` | display transport fix |
| `v0.7.5` | 007 RETURNS — stable BOND + embodiment |
| `v0.8.0` | Pathfinder / M full-stack alpha |
| `v0.8.1` | 4-row transport + staggered peer UI |
| `v0.8.1.1` | SECURE LINE identity cleanup |
| `v0.8.1.2` | 8 KB reserve + successful 007 admission |

---

## v0.8.1.2 Admission

Preflight:

```text
DMA free              = 50683 B
largest DMA block     = 31744 B
projected after BOND  = 9723 B
reserve               = 8192 B
decision              = ALLOW
```

After Wi-Fi / ESP-NOW:

```text
after wifi init       dma≈15923 B  largest≈15872 B
after wifi start      dma≈14215 B  largest≈13824 B
after esp_now         dma≈14063 B  largest≈13824 B
```

Post-init check:

```text
dma=14031 B
largest=13824 B
reserve=8192 B
stripe=3728 B

RE-ENTRY PASS
```

Display stripe:

```text
466 × 4 × 2 = 3728 B
```

---

## Secure-Line Stress Check

Observed:

```text
BOND // M READY | callsign=MIRA-M
BOND -> PEER FOUND // link established
BOND RX <- HEARTBEAT callsign=NOVA-007+5
```

Peer UI checkpoints:

```text
pre peer UI         dma≈15047 B  largest≈11776 B
post peer UI        dma≈14967 B  largest≈11776 B
pre deferred badge  dma≈13531 B  largest≈11776 B
post deferred badge dma≈13483 B  largest≈11776 B
```

Then:

```text
M -> IS THIS LINE SECURE? | peer=NOVA-007+5
LOCAL BADGE -> BOND LINK | UI cache only; NOT S.A.T.
007 -> LINE SECURE.
```

---

## First Physical MIRA Request

A Pathfinder long-press generated:

```text
MIRA_REQ|reason=mission_reflection|peer=1|mission=M01|badges=1|state=EXCITED
```

The local PC gateway:

1. opened the serial connection,
2. parsed the request,
3. kept the API key off the ESP32,
4. sent the request to the cloud API.

The provider returned:

```text
HTTP 429
insufficient_quota
credit_balance_exhausted
```

That means the **device → serial gateway → cloud API transport path worked**.

The failure was quota/billing, not firmware, BOND, serial, or request formatting.

---

## Architecture Confirmed

```text
World / Learner
      |
    NOVA
      |
   ESP-NOW
      |
Pathfinder / M
      |
  USB Serial
      |
 MIRA Gateway
      |
 local or cloud model
```

### Governance boundaries

- MIRA may reflect, prompt, explain, or recommend.
- Pathfinder may display missions and local UI badges.
- Local badges are **not** S.A.T.
- MIRA cannot approve evidence.
- MIRA cannot mint trust.
- S.A.T. remains an authoritative OpenLab Core / validator concern.

---

## Learning Loop

```text
Opportunity
→ Agency
→ Action
→ Evidence
→ Reflection
→ Validation
→ Trust
→ New Opportunity
```

The intended relationship remains:

```text
Evidence
→ authorized validator
→ validation.completed
→ Core issues S.A.T.
→ deterministic evolution unlock
```

---

# Next Branch — LOCAL MIRA

The next milestone removes per-request cloud cost for ordinary interactions.

Target:

```text
Pathfinder / M
      |
  USB Serial
      |
Local MIRA Gateway
      |
   Ollama
      |
small local model
```

Candidate starter models:

- `qwen3:0.6b`
- `gemma3:1b`
- `qwen3:1.7b`

The goal is not to recreate a frontier model locally.

The goal is to preserve the **MIRA behavior contract**:

> notice → reflect → ask one useful question → send the learner back into the world

Example:

```text
What did you notice that you did not expect?
```

---

## Local MIRA Pass Condition

```text
Pathfinder long press
→ MIRA_REQ
→ local model inference
→ MIRA_RESP
→ Pathfinder reflection card
```

No cloud request.  
No API key.  
No per-call fee.

---

## Engineering Rules Earned Today

1. **Embodiment first, networking second.**
2. **Measure DMA-capable memory, not only total heap.**
3. **Largest contiguous DMA block is a first-class resource.**
4. **Display transport must fit the real memory runway.**
5. **Network admission should be measured and reversible.**
6. **Post-init reality beats pre-init prediction.**
7. **Radio callbacks should not directly mutate LVGL.**
8. **Aggressive graphics should remain procedural and transient.**
9. **API credentials stay off the ESP32.**
10. **Local badges, evidence validation, S.A.T., and evolution must remain distinct.**

---

## Canon

> **NOVA doesn't evolve because you used NOVA. NOVA evolves because you evolved.**

> **The world is your laboratory.**

---

### Current State

```text
NOVA / 007        = GOLD
Pathfinder / M    = SECURE LINE BOND PASS
MIRA serial path  = PASS
Cloud request     = reached provider
Local MIRA        = NEXT
```

🟢 **Line secure.**
