# NEXORA Architecture

## Product Goal
NEXORA is a premium digital asset, trading, and investment intelligence platform designed for clarity, disciplined market visibility, and institutional-grade trust.

## Target Stack
- Frontend: Next.js, React, TypeScript, Tailwind CSS
- UI patterns: shadcn-like primitives, Recharts, Framer Motion, Lucide Icons
- Backend: Next.js server actions and route handlers
- Database: PostgreSQL with Prisma or Drizzle
- Auth: secure credential-based auth with session handling and MFA-ready design
- Validation: Zod
- Testing: Vitest, React Testing Library, Playwright
- Deployment: Vercel + production PostgreSQL + object storage

## Domain Structure
- app/
- components/
- features/
- lib/
- server/
- services/
- db/
- types/
- hooks/
- utils/
- config/
- public/
- emails/
- tests/
- e2e/
- docs/

## Core Domains
- auth
- users
- profiles
- dashboard
- wallet
- deposits
- withdrawals
- profits
- signals
- referrals
- market-data
- notifications
- admin
- settings
- support
- content
- audit
- security

## Design Principles
- Premium, restrained editorial design
- Strong information hierarchy and whitespace
- Minimal decorative noise, no generic template aesthetic
- Data and trust prioritized over hype
- Clear user flows and financial transparency
- Server-authoritative financial data and mandatory validation

## Security Model
- Never trust client-side values for balances, permissions, or payment status
- Use server-side validation and authorization checks for all sensitive actions
- Require an auditable ledger for every monetary movement
- Admin actions must be permission-scoped and logged

## Delivery Phases
1. Foundation and infrastructure
2. Brand system and design tokens
3. Public marketing experience
4. Authentication and onboarding
5. Dashboard and portfolio experience
6. Market-data architecture
7. Financial ledger and transaction flows
8. Referrals and signal systems
9. Admin operations
10. Security, QA, and production readiness
