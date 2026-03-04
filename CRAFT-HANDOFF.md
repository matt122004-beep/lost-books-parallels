# CRAFT-HANDOFF.md

## Timestamp
2026-03-04 09:29 PST

## Current Task Status
- **v14.0 completed and pushed**.
- Community features are now live in the Lost Books app.

## What Was Completed in v14
1. **Public profiles**
   - Added Profile button (`#profileBtn`) and modal (`#profileModal`).
   - Shows current user handle + their favorited parallels.
   - Generates shareable profile URL hash (`#profile=<username>`).

2. **Comment threads**
   - Added per-parallel comments UI and post input.
   - Added one-level nested replies with timestamps.
   - Persisted via localStorage (`parallelComments`).

3. **Vote/rank parallels**
   - Added upvote button per parallel (`data-vote`).
   - Stored vote totals in localStorage (`parallelVotes`).
   - Added sort control (`#sortBy`) with popularity sort.

4. **Share collections**
   - Added Collections button (`#collectionBtn`) and modal.
   - Supports named collections saved to localStorage (`collections`).
   - Generates shareable URL with encoded favorites payload (`#collection=...`).
   - Auto-imports favorites from shared collection URL on load.

## Files Touched (this unit)
- `/Users/matt/clawd/projects/lost-books/index.html`
- `/Users/matt/clawd/projects/lost-books/CRAFT-HANDOFF.md`

## Git
- Feature commit: `3f08250`
- Message: `v14.0: public profiles, threaded comments, voting rank, and shareable collections`
- Branch: `main`
- Push: successful

## Next Suggested Work (v14.1)
1. Add moderation controls for comments (delete/report).
2. Add public profile routing/render on `#profile=` deep links.
3. Add vote anti-spam guard (per-user/per-day).
4. Add collection landing page view and copy/share UX polish.
