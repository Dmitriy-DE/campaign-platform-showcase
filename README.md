<p align="center"><img src="./assets/hero.svg" width="100%" alt="Campaign Platform"/></p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express-5-000000?style=flat-square&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white"/>
</p>

# Campaign Platform

A backend-heavy operations platform around **users, campaigns, imports, validation, webhooks, unsubscribe flows and production tooling**.

The commercial domain is deliberately abstracted. The showcase focuses on the engineering: boundaries, persistence, security defaults, failure semantics and operational behaviour.

> **Explicit boundary. Explicit state. Explicit failure.**

## <code>01 / actual_surfaces</code>

<p align="center"><img src="./assets/actual-surfaces.svg" width="100%" alt="Campaign Platform surfaces"/></p>

The API exposes authenticated user/campaign/admin operations, import and validation paths, provider webhook boundaries and a separate public unsubscribe flow with signed token verification.

## <code>02 / backend_surface</code>

<p align="center"><img src="./assets/features.svg" width="100%" alt="Campaign Platform backend surface"/></p>

## <code>03 / core_model</code>

<p align="center"><img src="./assets/core-model.svg" width="100%" alt="Campaign Platform core request model"/></p>

Public, authenticated, provider and administrative traffic do not enter the application through the same trust boundary.

## <code>04 / layers</code>

<p align="center"><img src="./assets/architecture-visual.svg" width="100%" alt="Campaign Platform architecture"/></p>

The production runtime is Docker-first, binds explicitly for container deployment, exposes separate liveness/readiness endpoints and keeps PostgreSQL migration/backup operations explicit.

## <code>05 / security_and_failure</code>

<p align="center"><img src="./assets/overview.svg" width="100%" alt="Campaign Platform failure guards"/></p>

GraphQL is disabled in production unless explicitly enabled. Admin routes require auth + admin role middleware. Provider callbacks require provider secrets. Request logging redacts sensitive fields and query parameters. CI includes secret scanning.

## <code>06 / request_lifecycle</code>

<p align="center"><img src="./assets/flow-visual.svg" width="100%" alt="Campaign Platform request lifecycle"/></p>

## <code>07 / engineering_signature</code>

<p align="center"><img src="./assets/engineering-signature.svg" width="100%" alt="Campaign Platform engineering signature"/></p>

## <code>08 / inspect</code>

- [Architecture](docs/ARCHITECTURE.md)
- [Security model](docs/SECURITY.md)
- [Sanitised webhook boundary](examples/provider-webhook.ts)

<details>
<summary><b>Public / private boundary</b></summary>

The implementation contains domain-specific operations and production configuration. This public repository keeps the architecture and engineering patterns while excluding credentials, customer data and production mechanics.

</details>