<p align="center">
  <img width="100%" src="https://capsule-render.vercel.app/api?type=waving&height=190&color=0:0D1117,50:DA3633,100:8250DF&text=Campaign%20Platform&fontSize=42&fontColor=FFFFFF&fontAlignY=38&desc=API%20%E2%80%A2%20Data%20%E2%80%A2%20Security%20%E2%80%A2%20Operations&descSize=16&descAlignY=60" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Express_5-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
  <img src="https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white" />
</p>

# Self-hosted Campaign & User Operations Platform

A backend-heavy platform for campaign operations, user data, imports, validation, webhooks and administrative workflows.

The private source originated in a commercial domain. This public version intentionally presents it as a generic engineering case study.

## Runtime shape

```mermaid
flowchart LR
    UI[Operator UI] --> API[Express API]
    EXT[External providers] --> WH[Webhook boundary]
    API --> AUTH[Auth / roles]
    API --> SERVICES[Domain services]
    WH --> SERVICES
    SERVICES --> PG[(PostgreSQL)]
    JOBS[Operational jobs] --> PG
    OBS[Health / logs / monitoring] --- API
```

## Engineering highlights

- TypeScript + Express 5 application.
- PostgreSQL-backed primary data paths.
- Authenticated admin and user operations.
- Imports, validation and webhook endpoints.
- Signed public unsubscribe flow.
- Docker-first production runtime.
- Liveness and readiness endpoints.
- Secret scanning and environment leak checks.
- Jest / Vitest / Playwright quality layers.
- Database migration, backup, index verification and load-test tooling.

## Security defaults

- Administrative routes sit behind authentication + role checks.
- Webhooks require provider secrets.
- Sensitive request fields are redacted from structured logs.
- GraphQL is disabled in production unless explicitly enabled.
- Secrets are validated separately from application startup.

## Test pyramid

```mermaid
flowchart TB
    E2E[Playwright E2E]
    INT[API / integration tests]
    UNIT[Jest + Vitest unit tests]
    STATIC[Typecheck + lint + secret scan]
    STATIC --> UNIT --> INT --> E2E
```

## Repository map

- [Architecture](docs/ARCHITECTURE.md)
- [Security model](docs/SECURITY.md)
- [Sanitised webhook example](examples/provider-webhook.ts)

## Source availability

Full implementation, operational configuration and domain-specific details remain private.
