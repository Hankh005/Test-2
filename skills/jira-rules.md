# Jira query rules, field facts & write safety

Shared reference for the work-day Jira skills. Read before any query or write.

## Query-size discipline

`searchJiraIssuesUsingJql` returns the full `description` body of every issue
**even when you don't request it** — the `fields` param is not a reliable
exclude. Descriptions dominate size, so **row count is the only real lever**.

- Keep `maxResults` SMALL — about **8 per call** (measured: ~7 fit; 12 overflow;
  32 ≈ 177K chars → dumped to a file → thrash).
- **Paginate** with the page token instead of raising `maxResults`.
- **Never request the `parent` field** in a bulk search (it returns the parent's
  whole nested object). Fetch a parent/epic with a single `getJiraIssue`.
- Pass a lean `fields` list anyway; issue several narrow queries, not one broad.

## Custom field IDs

Field ids vary by site — **discover, don't assume**: `getJiraIssue` with
`expand: "names"` and `fields: ["*navigable"]` returns the id→name map.

Verified for **quickbase.atlassian.net** (cloud id
`20d966ed-3d3f-4c0c-b14b-c1dbb9bb6aa7`):
- **Story Points → `customfield_10022`** (NOT the usual `customfield_10016`).
- `customfield_10016` is **"Rank"** — never write story points to it.
- Sprint → `customfield_10017`; Epic Link → `customfield_10018`.

## Writing to Jira (safety)

- **Confirm before every write.** Resolve everything read-only first, show the
  exact change, execute only on a clear yes.
- **Transitions**: call `getTransitionsForJiraIssue` and use a real transition
  id; if the requested status isn't reachable from the current one, report the
  reachable ones instead of forcing it.
- **Story Points**: write `customfield_10022` directly with `editJiraIssue` even
  though it's absent from the edit-screen metadata — the write still persists
  (verified on ETE-7850). Don't conclude it's un-writable from editmeta.
- **Descriptions**: `editJiraIssue` with `contentFormat: "markdown"`. Preserve
  existing content; write only the approved text, verbatim.
- **Moving an issue into a sprint**: set the Sprint field `customfield_10017` to
  a sprint **id** (integer) via `editJiraIssue`. The connector has no Agile/board
  API, so get sprint ids from issues already in the target sprint — use
  `sprint in openSprints()` (active), `sprint in futureSprints()` (next), or
  `sprint = "<name>"`, then read the id off a returned issue's Sprint field. An
  empty sprint's id can't be discovered this way — ask the user for it. Some
  boards lock the Sprint field from the issue-edit path; if the write is
  rejected, fall back to moving the issue in Jira (no Agile endpoint to use).
- The Microsoft 365 connector is **read-only** (no send-mail) — never assume you
  can email from these skills.

## Status categories

For "done" work, filter on `statusCategory = Done` (covers custom done-statuses
like "Completed"/"Canceled"), not a single status name. To-do = `new`,
in-flight = `indeterminate`.
