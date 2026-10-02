<p align="center"><img src="./assets/hero.svg" width="100%" alt="Campaign Platform"/></p>

> **A backend-heavy campaign/user operations service with explicit trust boundaries.**  
> The interesting part is not a marketing dashboard — it is how public flows, authenticated operators, providers and admins are separated before business logic runs.

<table>
<tr>
<td align="center"><b>Express 5</b><br/><sub>API boundary</sub></td>
<td align="center"><b>Node.js</b><br/><sub>runtime</sub></td>
<td align="center"><b>PostgreSQL</b><br/><sub>v2 data paths</sub></td>
<td align="center"><b>Docker</b><br/><sub>production runtime</sub></td>
<td align="center"><b>Playwright</b><br/><sub>E2E coverage</sub></td>
<td align="center"><b>Secret scanning</b><br/><sub>CI gate</sub></td>
</tr>
</table>

## What the service actually does

<p align="center"><img src="./assets/actual-surfaces.svg" width="100%" alt="Campaign Platform surfaces"/></p>

<table>
<tr>
<td width="33%" valign="top"><b>Users</b><br/><sub>User operations, imports, validation and suppression/classification workflows.</sub></td>
<td width="33%" valign="top"><b>Campaigns</b><br/><sub>Create/configure campaigns and drive the operational send lifecycle through explicit API routes.</sub></td>
<td width="33%" valign="top"><b>External events</b><br/><sub>Provider webhooks/callbacks are accepted only after provider-secret verification and payload validation.</sub></td>
</tr>
<tr>
<td valign="top"><b>Unsubscribe</b><br/><sub>A separate public flow verifies a signed token rather than reusing privileged application routes.</sub></td>
<td valign="top"><b>Admin</b><br/><sub>Privileged routes sit behind authentication plus admin-role middleware.</sub></td>
<td valign="top"><b>Operations</b><br/><sub>Health, readiness, logging, migrations, backups and Docker runtime are treated as part of the system contract.</sub></td>
</tr>
</table>

## Trust model

<p align="center"><img src="./assets/readme-boundaries.svg" width="100%" alt="Campaign Platform trust boundaries"/></p>

> This is the core design choice: **public, authenticated, provider and admin requests do not get the same trust by default.**

## Health model

<p align="center"><img src="./assets/readme-health.svg" width="100%" alt="Liveness and readiness"/></p>

<table>
<tr>
<td width="50%" valign="top"><b>Liveness is intentionally shallow.</b><br/><sub>If the process is alive, an orchestrator does not need to restart it just because PostgreSQL is temporarily unavailable.</sub></td>
<td width="50%" valign="top"><b>Readiness is dependency-aware.</b><br/><sub>An instance should not receive real traffic if a required dependency cannot satisfy the application contract.</sub></td>
</tr>
</table>

## Security defaults

<table>
<tr>
<td width="33%" valign="top"><b>Provider callbacks</b><br/><sub>Require provider secret headers before processing.</sub></td>
<td width="33%" valign="top"><b>Admin routes</b><br/><sub>Require auth + admin role middleware.</sub></td>
<td width="33%" valign="top"><b>Logging</b><br/><sub>Redacts sensitive structured fields and sensitive query parameters.</sub></td>
</tr>
<tr>
<td valign="top"><b>GraphQL</b><br/><sub>Disabled in production unless explicitly enabled.</sub></td>
<td valign="top"><b>Secrets</b><br/><sub>CI includes secret scanning and environment-file leak checks.</sub></td>
<td valign="top"><b>Input validation</b><br/><sub>Schema/domain validation happens before a request mutates state.</sub></td>
</tr>
</table>

## Architecture

<p align="center"><img src="./assets/architecture-visual.svg" width="100%" alt="Campaign Platform architecture"/></p>

## Request lifecycle

<p align="center"><img src="./assets/flow-visual.svg" width="100%" alt="Campaign Platform request lifecycle"/></p>

<details>
<summary><b>Runtime notes</b></summary>

- Production bind is explicit: HOST=0.0.0.0.
- Docker uses dumb-init and runs the compiled server.
- PostgreSQL is required for the current v2 paths.
- Health endpoints separate live, ready and the general health view.
- The public showcase omits credentials, customer data and production-specific configuration.

</details>