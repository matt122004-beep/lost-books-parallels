# CRAFT-HANDOFF.md

## Timestamp
2026-03-04 09:46 PST

## Current Task Status
- **v15.0 completed and pushed**.
- Scholar-grade features added in-app.

## What Was Completed in v15
1. **Source citation validation**
   - Added per-parallel citation validation badge.
   - Uses local whitelist map of known academic/accepted reference pairs.
   - Flags non-whitelisted references as **Questionable citation**.

2. **Add new parallels (crowd-sourced + moderation queue)**
   - Added Submit button (`#submitParallelBtn`) and submission modal.
   - Added submission form for lost/bible refs+text, theme, notes.
   - Stores pending items in localStorage (`submissionQueue`).
   - Expert/admin users can approve queue items into active parallels.

3. **Expert reviewer badges**
   - Added `verifiedScholars` list and badge renderer.
   - Displays **Expert** badge next to verified users in comments/replies and queue display.

4. **Version history (who/what/when)**
   - Added local changelog store (`parallelHistory`).
   - Tracks note edits, votes, comments, replies, deletions, approvals.
   - Added per-parallel History button + modal view.

## Files Touched (this unit)
- `/Users/matt/clawd/projects/lost-books/index.html`
- `/Users/matt/clawd/projects/lost-books/CRAFT-HANDOFF.md`

## Git
- Feature commit: `e077939`
- Message: `v15.0: citation validation, submission queue, expert badges, and version history`
- Branch: `main`
- Push: successful

## Next Suggested Work (v15.1)
1. Replace whitelist heuristic with curated external citation dataset + confidence score.
2. Add moderation dashboard filters (pending/reported/approved).
3. Add immutable history snapshots for all field edits.
4. Add role management UI for reviewer badge assignment.
