# Credigy Employee App (AIAm-App-Dev)

An internal, mobile-first app for Credigy employees — a streamlined app version of our company website — built with help from ChatGPT to speed up coding, docs, and iteration. This repo powers the Coding/Programming group’s contribution to the director-led initiative showcasing practical uses of ChatGPT at work.

## Goals
- Deliver a usable employee app that mirrors key functions of the Credigy website (directory, news, resources) with faster access on mobile.
- Demonstrate effective ways to use ChatGPT for code generation, documentation, data extraction/classification, and recurring analysis.
- Keep scope realistic for the November presentation while leaving room to grow.

## Proposed MVP Features
- Employee directory (search, profile basics)
- News & announcements (fetch latest posts)
- Quick links to internal tools/resources
- Single sign-on placeholder (stubbed for demo; swap in real SSO later)

Stretch ideas: notifications, dark mode, offline cache.

## Suggested Tech Stacks
Option A: React Native + TypeScript (React Navigation, Redux Toolkit or Zustand, axios, Jest).
Option B: Flutter (Material 3, Riverpod or Provider, dio, flutter_test).

## Project Structure (draft)
aiam-app-dev/
  app/                 src code (screens, components, services)
  docs/                design notes, API contracts, prompts
  scripts/             helper scripts (build, lint, analysis)
  tests/               unit/integration tests
  README.md

## Getting Started
1. Clone the repo.
2. Bootstrap a starter template (React Native or Flutter).
3. Create a .env.example for future secrets.
4. Build and run the app; confirm Directory, News, and Quick Links screens.

## How We’ll Use ChatGPT
- Scaffold code (components, services, tests, models).
- Write docs (usage guides, comments, READMEs).
- Classify/extract content (e.g., announcements to structured items).
- Recurring analysis (dependency report script).

Prompts live under docs/prompts for transparency and reuse.

## November Presentation Plan
- Show the running MVP.
- Call out where ChatGPT accelerated delivery (before/after snippets).
- Map to initiative examples: generate code, first-draft docs, classification/extraction, recurring analysis.

## Definition of Done (MVP)
- App builds and runs on simulator/emulator.
- Three MVP features implemented and demoable.
- Basic tests pass in CI.
- README and CONTRIBUTING docs complete.

## Contributing
1. Create a feature branch: feat/short-name
2. Commit small, well-scoped changes with clear messages.
3. Open a PR; include screenshots or gifs for UI changes.
4. Request at least one review before merge.

## Notes
- Internal-facing app: do not commit secrets or internal-only data.
- Use a secure store for secrets; keep .env keys in .gitignore.

Questions or ideas? Open an issue in this repo.