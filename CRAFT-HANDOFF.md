# CRAFT-HANDOFF.md

## Timestamp
2026-03-04 11:10 PST

## SESSION STATUS (CRITICAL)
- Context exceeded in current session (degraded).
- **v20 has NOT been started** in this session per instruction.
- Project is checkpointed and safe for fresh-session continuation.

## Current Task Status
- v17–v19 are complete and pushed.
- Pre-v20 loose-end groundwork is committed/pushed.
- No pending tracked-file changes in git working tree.

## Completed Milestones
### v17.0
- PWA support (manifest + service worker)
- Install prompt (A2HS flow)
- Daily reminder notifications (permission + daily gate)
- Mobile UX updates (bottom nav + touch gestures)

### v18.0
- Local/native app icons
- Route-aware bottom-nav active states
- Offline indicator + sync status UI
- Improved push sync simulation

### v19.0
- Splash screen integration (`splash.png`)
- Dark-mode icon variants in manifest
- Backend subscription path (`/api/subscribe`) wiring
- Conflict resolution helper (last-write-wins) for sync

## Pre-v20 Checkpoint (latest)
- Commit: `e2ac753`
- Message: `chore: pre-v20 checkpoint for offline cache and preference sync groundwork`
- Includes:
  - `index.html`: larger-screen progressive layout enhancements + backend preference sync hook for theme
  - `sw.js`: expanded offline asset cache/version groundwork

## Latest Handoff Commit
- Commit: `e83329c`
- Message: `docs: refresh handoff before v20 kickoff`

## Git State
- Branch: `main`
- Remote: `origin` pushed successfully
- Working tree: no tracked-file modifications
- Note: local untracked helper/backup files remain intentionally uncommitted:
  - `.gitignore`, `PROMPT.md`, `build-prompt.txt`, `index.html.bak`, `index.html.bk`, `index.html.v11.backup`, `index.v9.before.quick-fixes`, `run-aider.sh`

## Files Relevant to Restart
- `/Users/matt/clawd/projects/lost-books/index.html`
- `/Users/matt/clawd/projects/lost-books/sw.js`
- `/Users/matt/clawd/projects/lost-books/manifest.json`
- `/Users/matt/clawd/projects/lost-books/icons/icon-192.png`
- `/Users/matt/clawd/projects/lost-books/icons/icon-512.png`
- `/Users/matt/clawd/projects/lost-books/icons/icon-192-dark.png`
- `/Users/matt/clawd/projects/lost-books/icons/icon-512-dark.png`
- `/Users/matt/clawd/projects/lost-books/splash.png`
- `/Users/matt/clawd/projects/lost-books/CRAFT-HANDOFF.md`

## Next Session Start Instructions (v20)
1. Read this `CRAFT-HANDOFF.md` first.
2. Confirm clean git status.
3. Start **v20 Platform features** only:
   - Plugin marketplace
   - Third-party extensions
   - Custom themes
   - White-label licensing
4. Ship in small commits + update handoff after each work unit.

## Context Health Note
- Current session should not continue feature development.
- Fresh session recommended immediately (as requested by Arch).
