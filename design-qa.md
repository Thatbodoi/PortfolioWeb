# Design QA

Reference: https://khoait.vercel.app/

Target direction:
- Cinematic dark portfolio first screen.
- Oversized OS-style hero typography.
- Central visual core with HUD panels, console panel, availability pill, and dock navigation.
- Preserve Nguyen Ngoc Thien content, Vietnamese-first language system, and Dark/Light controls.

Checks completed:
- Desktop 1280x720: hero renders, HUD panels visible, dock visible, no horizontal overflow.
- Mobile 390x844: hero stacks vertically, no horizontal overflow, controls remain reachable.
- Build: `npm run build` passed.
- Browser console: no warnings or errors observed during visual checks.

Final result: passed
