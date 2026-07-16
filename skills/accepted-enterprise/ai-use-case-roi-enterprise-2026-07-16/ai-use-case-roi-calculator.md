<!-- Synced from Confluence page 6454313028: AI Use Case ROI — Calculator -->

# AI Use Case ROI — Calculator

**Action needed:** attach `AI_Use_Case_ROI_Calculator.xlsx` to this page (drag-and-drop, or Attachments in the page menu). There's no automated upload path from this tool into Confluence, so this one step is manual.

This workbook replicates `references/roi_engine.py` and `references/assumptions.json` from the `ai-use-case-roi` Claude skill as live Excel formulas — no code execution or Claude required to run a case.

## Sheets

| Sheet | Purpose |
| --- | --- |
| **Assumptions** | House numbers — role costs, scenario levers, revenue-chain defaults, run cost, build sizes, confidence multipliers. Owner: RevOps/Finance. Edit here only, and bump a version note when you do. |
| **Case Inputs** | Yellow cells — fill in one use case's facts here. Everything downstream recalculates automatically. |
| **ROI Calculation** | Conservative/Expected/Optimistic scenario build-up, headline (net annual, payback, 3-yr ROI), derived confidence + reason, priority score, and verdict. |
| **Sensitivity Grid** | Freed hours crossed across every automation\_share × adoption/coverage combination, computed from this case's actual raw hours. |
| **Register** | Row 2 auto-links to this workbook's own case; paste additional cases in rows below. Conflict? column flags when 2+ redeploy/headcount rows share a capacity pool. |

## What this can't do that the Claude skill can

* **No live system-grounding.** The skill checks Snowflake/Salesforce/Gainsight and reconciles user-stated numbers against them automatically. This workbook has manual "# inputs grounded" and "# overrides" cells on Case Inputs — you fill those in yourself after checking the systems, and confidence derives from what you enter.
* **No natural-language interview.** The skill asks ≤7 questions and infers what it can from a one-liner. Here, someone fills in the Case Inputs sheet directly.
* **No Confluence auto-publish.** The skill writes the detail page and Register row itself behind a validation gate. Here, you copy the Register sheet's row into the Register page by hand.

What's identical: every formula, house number, and the validation-gate logic — same inputs produce the same numbers here as they would from the skill.

## Related pages

* Methodology — house assumptions and how confidence is derived
* Sensitivity Grid Reference
* Register
* ai-use-case-roi — Enterprise (original skill documentation)
