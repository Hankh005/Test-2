<!-- Synced from Confluence page 6454345827: AI Use Case ROI Register -->

# AI Use Case ROI Register

Single source of truth for proposed AI/automation use cases and their projected ROI. Every entry is PROJECTED until its measurement plan is validated post-deployment, at which point Status moves to REALIZED. Numbers are conservative-to-expected ranges, net of run cost. Sorted by Priority (build order).

Methodology: hard cash only when a head leaves or a named output is produced; diffuse time savings are reported as capacity, not cash. Do not sum two rows that share a Shared Capacity Pool and both have gate = redeploy/headcount — see the attached calculator's Register sheet, which flags this automatically.

| Priority | Use Case | Owner | Type | Gate | Shared Capacity Pool | Net Annual (Cons.–Exp.) | Payback | Effort | Confidence | Status | Brief |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |  |  |  |

## How to add a case

1. Fill in the **Case Inputs** sheet of **AI\_Use\_Case\_ROI\_Calculator.xlsx** (attached on the Calculator page).
2. Read the headline off the ROI Calculation sheet, and the Register row off that workbook's own Register sheet (row 2 auto-links).
3. Copy that row's values into the table above, sorted by Priority (descending).
4. If Conflict? shows TRUE in the workbook, resolve the shared-capacity double-count before publishing — do not sum those cases' hard cash.
