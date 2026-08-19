# NEXORA

NEXORA is a premium digital asset and market intelligence platform focused on disciplined decision-making, transparency, and trusted portfolio visibility.

## Stack
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Recharts
- Lucide Icons
- Vitest

## Local Development

```bash
npm install
npm run dev
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
npm run test
```

## Environment Variables
Create a `.env.local` file with values such as:

```bash
NEXT_PUBLIC_DEMO_MODE=true
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_MARKET_DATA_PROVIDER=demo
DATABASE_URL=postgresql://user:pass@localhost:5432/nexora
AUTH_SECRET=your-auth-secret
```

## Deployment
The project is prepared for deployment on a Vercel-compatible runtime, with PostgreSQL and object storage recommended for production data services.

## Notes
This repository currently contains the foundational brand, landing page, authentication entry pages, and dashboard UI structure for the NEXORA product concept.
