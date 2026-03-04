# CRAFT-HANDOFF.md

## Timestamp
2026-03-04 10:21 PST

## Current Task Status
- **v17.0 completed and pushed**.
- Mobile app foundation features are now live.

## What Was Completed in v17
1. **PWA support**
   - Added `manifest.json` and linked it in `<head>`.
   - Added `sw.js` service worker with offline cache strategy.
   - Registered service worker from app script.

2. **Install prompt (Add to Home Screen)**
   - Added `beforeinstallprompt` handling.
   - Added install trigger in mobile bottom nav (`Install`).

3. **Push notifications (daily reminder)**
   - Added Notification permission flow.
   - Added daily reminder notification gate (`lastReminderTs`, 24h cadence).

4. **Mobile-optimized UI**
   - Added fixed bottom navigation for mobile (`Home`, `Search`, `Favorites`, `Install`).
   - Added touch gesture on cards (right swipe favorites a parallel).
   - Added mobile bottom padding and native-feel interaction polish.

## Files Touched (this unit)
- `/Users/matt/clawd/projects/lost-books/index.html`
- `/Users/matt/clawd/projects/lost-books/manifest.json`
- `/Users/matt/clawd/projects/lost-books/sw.js`
- `/Users/matt/clawd/projects/lost-books/CRAFT-HANDOFF.md`

## Git
- Feature commit: `7221d94`
- Message: `v17.0: PWA offline support, install prompt, notifications, and mobile UX nav`
- Branch: `main`
- Push: successful

## Next Suggested Work (v18)
1. Move notification scheduling to real Push API + backend subscription endpoint.
2. Add native icon assets locally (replace placeholder icon URLs in manifest).
3. Add bottom-nav active states and route-aware behavior.
4. Add offline indicator + sync status UI.
