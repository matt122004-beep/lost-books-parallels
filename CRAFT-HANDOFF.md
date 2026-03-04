# CRAFT-HANDOFF.md

## Timestamp
2026-03-04 09:58 PST

## Current Task Status
- **v16.0 completed and pushed**.
- AI integration features implemented using local, client-side heuristic intelligence.

## What Was Completed in v16
1. **AI-generated related passages**
   - Replaced related-passages logic in modal with similarity-based matching (`aiRelatedParallels`).
   - Uses token overlap/Jaccard-style scoring across passage text + theme.
   - Modal section now labeled **AI-generated Related Passages**.

2. **Simplify complex themes**
   - Added per-parallel **Simplify** action button.
   - Generates plain-language explanation for selected parallel (`aiExplain`).

3. **Study questions**
   - Added per-parallel **Study Qs** button.
   - Generates 3 guided reflection questions (`aiStudyQuestions`).

4. **Personalized recommendations**
   - Added recommendations card in visual section (`#aiRecommendations`).
   - Uses reading history (`viewedParallels`) + dominant theme to suggest next parallels.

## Files Touched (this unit)
- `/Users/matt/clawd/projects/lost-books/index.html`
- `/Users/matt/clawd/projects/lost-books/CRAFT-HANDOFF.md`

## Git
- Feature commit: `f4f306c`
- Message: `v16.0: AI related passages, simplification, study questions, and recommendations`
- Branch: `main`
- Push: successful

## Next Suggested Work (v16.1)
1. Replace heuristic similarity with real embedding API (OpenAI or local model).
2. Add confidence scores + rationale for each AI suggestion.
3. Add per-user recommendation tuning (book/theme weighting controls).
4. Cache AI outputs per parallel to reduce regeneration.
