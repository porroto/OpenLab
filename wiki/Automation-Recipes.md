# ⚙️ Automation Recipes

Automation Recipes help scale your classroom S.A.T. system using scripts or GitHub Actions.

## Example: Auto-Mint on Submission
```yaml
name: Auto-Mint Badge
on:
  push:
    paths:
      - "submissions/**"
jobs:
  mint:
    runs-on: ubuntu-latest
    steps:
      - name: Run Token Mint Script
        run: |
          python scripts/mint_badge.py --input submissions/new.csv
```

## Example: Generate Weekly Reports
```bash
python scripts/generate_report.py --week 41
```

Use these automations to:
- Award badges automatically
- Log student engagement
- Export performance analytics
