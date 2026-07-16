<!-- Synced from Confluence page 6454673513: AI Use Case ROI — Methodology (Confluence rebuild) -->

# AI Use Case ROI — Methodology

*Confluence-native rebuild of the* `ai-use-case-roi` *Claude skill's method, for use without Claude in the loop. See the sibling page* *ai-use-case-roi — Enterprise* *for the original skill documentation, and the attached* ***AI\_Use\_Case\_ROI\_Calculator.xlsx*** *on the* *Calculator page* *for the live version of this math.*

Trust in this method comes from four things, in order: inputs grounded in real data, a method nobody can quietly bend, a human who owns the assumptions, and a published track record of projected-vs-realized. This page covers the method and the house numbers; the workbook does the arithmetic.

## Value types

| Type | What it means | Hard ROI? |
| --- | --- | --- |
| Labor | Frees employee time on an existing task | Only if redeployed or headcount removed |
| Revenue | Moves a business metric (churn, win rate, conversion) | Yes, via the revenue chain |
| Risk | Reduces a cost of failure (compliance, security, quality) | Case-by-case |
| Capability | Enables something not measured in cash today | No — $0 hard ROI by definition, justified on option value |

## Delivery model

Augmentation (human still does the task, AI assists) uses **adoption\_steadystate** as the usage lever. Autonomous (AI does the task end-to-end) uses **coverage** instead. Each has its own year-1 ramp factor.

## House assumptions (owner: RevOps/Finance — assign a named owner)

These are the single authority for every estimate. Do not override ad hoc per-case — change here, bump the version, and every future estimate inherits it. Any per-case deviation is recorded as an explicit **override** with a reason.

### Role costs — fully-loaded annual ($)

| Role | Cost |
| --- | --- |
| SDR | $95,000 |
| AE | $143,000 |
| CSM | $150,000 |
| RevOps\_analyst | $120,000 |
| support\_rep | $85,000 |
| renewals\_specialist | $100,000 |
| PMM\_PM | $165,000 |
| engineer | $190,000 |
| manager | $210,000 |

Hours/year: 2,080 · Working days/year: 260 · Builder role (for build-cost calc): engineer

### Scenario levers (delivery levers only — business-chain values are point estimates, not scenario-dependent)

| Lever | Conservative | Expected | Optimistic |
| --- | --- | --- | --- |
| automation\_share | 50% | 65% | 80% |
| adoption\_steadystate | 40% | 60% | 75% |
| coverage | 70% | 85% | 95% |
| attribution | 50% | 50% | 80% |

Year-1 ramps: adoption 70% · coverage 80%

### Revenue chain defaults

| Field | House default |
| --- | --- |
| conversion\_to\_productive | 50% |
| hours\_per\_downstream\_unit | 3 |
| at\_risk\_rate | 10% |
| churn\_reduction | 15% |

### Run cost per instance

| Tier | Cost |
| --- | --- |
| Light | $0.06 |
| Medium | $0.30 |
| Heavy | $1.00 |

Platform annual default: $1,000

### Build t-shirt sizes

S = 2 weeks · M = 6 weeks · L = 12 weeks

### Confidence multiplier & near-zero floor

High = 1.0 · Medium = 0.7 · Low = 0.4 · Near-zero hard-ROI floor: $15,000

## How confidence is derived (not asserted)

| Condition | Confidence |
| --- | --- |
| Holdout/control exists AND ≥1 input system-grounded | High |
| 0 inputs grounded AND ≥1 override | Low |
| 0 inputs grounded | Low |
| ≥2 overrides from house assumptions | Low |
| Otherwise | Medium |

## Validation gate before anything goes on the Register

If confidence is **Low**, OR any load-bearing input is user-supplied (not grounded), OR there are 2+ overrides → publish only as **DRAFT / pending validation** and name who should validate it. **High/Medium** with grounded inputs → publishable as **PROJECTED**. Never mark a number validated that isn't.

## Portfolio integrity

Every case records a **shared\_capacity\_pool** (e.g. "CSM-hours"). Before summing the Register into a portfolio total, check whether multiple redeploy/headcount cases claim value from the *same* freed hours — they cannot all be true at once. The Register page's Conflict? column flags this automatically.

## Honest scope

This method imposes disciplined, transparent, reproducible argument on AI-investment decisions — it is not an objective oracle. Inputs are still elicited and the revenue path still depends on judgment. For small decisions, don't over-model: a coarse cash/capacity/capability × S/M/L triage is often the right-sized answer; reserve the full method for cases big enough to justify it.
