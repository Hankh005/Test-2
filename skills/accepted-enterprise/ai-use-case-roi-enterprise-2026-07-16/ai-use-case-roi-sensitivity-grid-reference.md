<!-- Synced from Confluence page 6454116459: AI Use Case ROI — Sensitivity Grid Reference -->

# AI Use Case ROI — Sensitivity Grid Reference

Full crossed grid of freed hours: **automation\_share** × (**adoption\_steadystate** or **coverage**, depending on delivery model), at a case's real raw hours, with year-1 ramp applied.

`freed_hours = raw_hours × automation_share × usage_lever × year1_ramp`

note

The diagonal cells (conservative×conservative, expected×expected, optimistic×optimistic) match the three scenario numbers the calculator already reports. The off-diagonal cells exist purely for sensitivity reading — to see how much the number moves if adoption and automation share don't land together as assumed. They are not separate official scenarios.

The diagonal cells (conservative×conservative, expected×expected, optimistic×optimistic) match the three scenario numbers the calculator already reports. The off-diagonal cells exist purely for sensitivity reading — to see how much the number moves if adoption and automation share don't land together as assumed. They are not separate official scenarios.

## Worked example — 2,000 raw hours/yr, augmentation delivery model

(raw\_hours = volume × hours\_per\_instance; ramp = adoption\_year1\_ramp = 70%)

| automation\_share ↓ / adoption\_steadystate → | 40% (cons.) | 60% (exp.) | 75% (opt.) |
| --- | --- | --- | --- |
| **50% (cons.)** | 280 | 420 | 525 |
| **65% (exp.)** | 364 | 546 | 682.5 |
| **80% (opt.)** | 448 | 672 | 840 |

This grid is **augmentation-only** (adoption\_steadystate × adoption\_year1\_ramp). Autonomous cases use coverage × coverage\_year1\_ramp instead and need their own grid — don't reuse this one for autonomous delivery model cases.

## Live version

The attached **AI\_Use\_Case\_ROI\_Calculator.xlsx** (on the Calculator page) computes this grid automatically from whatever case is entered on its Case Inputs sheet — it recalculates for the actual raw hours of that case rather than a fixed example, and switches between adoption\_steadystate and coverage automatically based on the delivery model field.
