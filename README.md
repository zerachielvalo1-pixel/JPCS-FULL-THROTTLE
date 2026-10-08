# Full Throttle — JPCS-TSU

Entry for the **Full Throttle: Frontend: Interface Design Challenge**.
A single-page F1-broadcast-themed site for the Junior Philippine Computer
Society, Tarlac State University chapter.

**Live:** _[URL]_

## Concept
JPCS is the team. The page is the race coverage.

## Stack
Vanilla HTML, CSS, JavaScript. No build step, no frameworks.

## Running locally
ES modules need a server. Use VS Code Live Server, or:
    python3 -m http.server 5500
The deployed site is the real test.

## Structure
    assets/     fonts, images, svg
    css/        variables.css (tokens), styles.css (all rules)
    js/         main.js
    index.html

## Process log
| Date  | Milestone | Notes |
|-------|-----------|-------|
| Oct 8 | M0        | Repo scaffolded; design system locked |

## Asset credits
| Asset | Source | License |
|-------|--------|---------|
| Hero car SVG | Original | Own work |
| Racing Sans One | Google Fonts | OFL |
| Orbitron | Google Fonts | OFL |
| Inter | Google Fonts | OFL |

## References / what I learned
- Hero layering (display type behind hero object): technique studied from
  F1.com and redbull.com landing pages, reimplemented with CSS Grid
  `grid-template-areas: "stack"`. No copied code.

## Rules compliance
- Headstart approved by organizers
- No frameworks, no libraries
- All code original