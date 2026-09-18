<p align="center"><img src="./assets/hero.svg" width="100%" alt="Campaign Platform"/></p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express_5-000000?style=flat-square&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=jest&logoColor=white"/>
  <img src="https://img.shields.io/badge/Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white"/>
</p>

# Campaign Platform

A backend-heavy operations platform I built around **users, campaigns, imports, validation, webhooks, administrative workflows and production tooling**.

The commercial domain is intentionally abstracted. The interesting part here is the backend system.

<p align="center">
  <img src="./assets/overview.svg" width="100%" alt="System overview"/>
</p>

## <code>01 / backend_surface</code>

<table>
<tr>
<td width="33%" valign="top">

### API

Auth, users, admin operations, imports, validation, public actions and webhooks.

</td>
<td width="33%" valign="top">

### Data

PostgreSQL paths, migrations, indexes, backup tooling and storage migration support.

</td>
<td width="33%" valign="top">

### Runtime

Docker-first deployment, health/readiness, structured logs, maintenance scripts and quality gates.

</td>
</tr>
</table>

<p align="center">
  <img src="./assets/architecture-visual.svg" width="100%" alt="Architecture visual"/>
</p>

## <code>02 / request_path</code>

~~~mermaid
sequenceDiagram
    participant C as Client / provider
    participant A as Express boundary
    participant M as Auth + validation
    participant S as Domain service
    participant D as PostgreSQL

    C->>A: request / webhook
    A->>M: verify boundary
    M->>S: validated command
    S->>D: transaction
    D-->>S: durable result
    S-->>A: response
    A-->>C: structured outcome
~~~

<p align="center">
  <img src="./assets/flow-visual.svg" width="100%" alt="Workflow visual"/>
</p>

## <code>03 / built_for_failure</code>

| Failure mode | Guard |
|---|---|
| forged provider callback | provider secret verification |
| accidental admin exposure | auth + role middleware |
| sensitive data in logs | structured redaction |
| broken deploy with healthy process | separate liveness / readiness |
| secret leakage | CI secret scan + env leak checks |
| schema drift | explicit migrations + verification tools |
| UI regression | Playwright E2E |
| silent type breakage | TypeScript + no-emit typecheck |

## <code>04 / quality_layers</code>

~~~mermaid
flowchart LR
    STATIC[lint / types / secrets] --> UNIT[Jest / Vitest]
    UNIT --> API[API integration]
    API --> E2E[Playwright]
    E2E --> RUN[production-style Docker runtime]
~~~

## <code>05 / what_i_like_about_it</code>

This project is mostly **boring backend engineering** in the good sense:

- explicit boundaries;
- boring persistence;
- boring health checks;
- boring migrations;
- boring tests;
- boring secrets handling.

That is exactly what I want around business-critical operations.

## <code>06 / technical_proof</code>

- [Architecture](docs/ARCHITECTURE.md)
- [Security model](docs/SECURITY.md)
- [Sanitised webhook boundary](examples/provider-webhook.ts)

<details>
<summary><b>Why it is anonymised</b></summary>

The real implementation includes domain-specific operations and production configuration that do not need to be public to demonstrate the engineering.

</details>
