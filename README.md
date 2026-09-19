<p align="center"><img src="./assets/hero.svg" width="100%" alt="Campaign Platform"/></p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express_5-000000?style=flat-square&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white"/>
</p>

# Campaign Platform

A backend-heavy operations platform I built around **users, campaigns, imports, validation, webhooks and production tooling**.

The commercial domain is abstracted; the backend engineering is the point.

<p align="center"><img src="./assets/product-mockup.svg" width="100%" alt="Campaign Platform operations mockup"/></p>

<p align="center"><sub>Illustrative records; screen hierarchy, labels and visual system are reconstructed from the private source.</sub></p>

## <code>01 / actual_surfaces</code>

<p align="center"><img src="./assets/actual-surfaces.svg" width="100%" alt="Actual product surfaces"/></p>

## <code>02 / backend_surface</code>

<p align="center"><img src="./assets/features.svg" width="100%" alt="Campaign Platform features"/></p>

## <code>03 / core_model</code>

<p align="center"><img src="./assets/core-model.svg" width="100%" alt="Core request flow"/></p>

## <code>04 / layers</code>

<p align="center"><img src="./assets/architecture-visual.svg" width="100%" alt="Campaign Platform architecture"/></p>

<p align="center"><img src="./assets/overview.svg" width="100%" alt="Campaign Platform system overview"/></p>

## <code>05 / request_lifecycle</code>

<p align="center"><img src="./assets/flow-visual.svg" width="100%" alt="Campaign Platform request lifecycle"/></p>

## <code>06 / built_for_failure</code>

| Failure | Guard |
|---|---|
| forged callback | provider-secret verification |
| admin exposure | auth + role middleware |
| sensitive logs | structured redaction |
| alive process / broken dependency | separate liveness and readiness |
| secret leak | CI secret scan |
| schema drift | explicit migrations + verification |
| UI regression | Playwright E2E |

The theme is intentionally boring: **explicit boundary, explicit state, explicit failure**.

## <code>07 / engineering_signature</code>

<p align="center">
  <img src="./assets/engineering-signature.svg" width="100%" alt="Engineering signature"/>
</p>

## <code>08 / inspect</code>

- [Architecture](docs/ARCHITECTURE.md)
- [Security model](docs/SECURITY.md)
- [Sanitised webhook boundary](examples/provider-webhook.ts)

<details><summary><b>Why it is anonymised</b></summary>

The private implementation contains domain-specific operations and production configuration that do not need to be public to demonstrate the engineering.

</details>
