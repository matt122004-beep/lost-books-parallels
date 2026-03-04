# CRAFT-HANDOFF.md

## Timestamp
2026-03-04 09:00 PST

## Current Task Status
- **v13.0 completed and pushed**.
- Added visual and mapping tools + reading progress tracker.

## What Was Completed in v13
1. **Interactive timeline**
   - Added horizontal-scroll timeline panel (`#timelineTrack`).
   - Populates chronologically from current filtered results using ref-era score sorting.

2. **Geographical map (symbolic SVG)**
   - Added map panel (`#originMap`).
   - Renders clustered origin dots based on inferred text origins (Judea/Egypt/Alexandria/Levant).

3. **Relationship graph (SVG)**
   - Added graph panel (`#relationshipGraph`).
   - Draws theme ↔ book nodes and links from active filtered parallels.

4. **Reading progress tracker**
   - Added progress bar (`#progressFill`, `#progressLabel`).
   - Uses IntersectionObserver to mark viewed cards.
   - Persists viewed ids in localStorage (`viewedParallels`).

## Previous Milestones
- v11.0: login mock, favorites, notes, expanded corpus, related links
- v12.0: full-text search/highlight, advanced filters, history, autocomplete

## Files Touched (this unit)
- `/Users/matt/clawd/projects/lost-books/index.html`
- `/Users/matt/clawd/projects/lost-books/CRAFT-HANDOFF.md`

## Git
- Commit: `7ca9adb`
- Message: `v13.0: timeline, origin map, relationship graph, and reading progress tracker`
- Branch: `main`
- Push: successful

## Next Suggested Work
1. v13.1 polish: add legend/tooltips + zoom/pan controls for map/graph.
2. Improve timeline semantics with explicit metadata years instead of ref-number heuristics.
3. Add reset for reading progress and per-user namespacing.
4. Add keyboard accessibility for viz interactions.
