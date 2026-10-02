<p align="center"><img src="./assets/hero.svg" width="100%" alt="Campaign Platform"/></p>

<table>
<tr>
<td width="50%" valign="top">

### What it is

A backend-heavy campaign operations platform built around explicit trust boundaries.

Main areas:

- users
- campaigns
- imports
- validation
- webhooks
- unsubscribe
- admin operations
- health / readiness
- production tooling

</td>
<td width="50%" valign="top">

### Engineering focus

- public ≠ authenticated ≠ provider ≠ admin
- provider-secret verification
- signed unsubscribe flow
- structured redaction
- separate liveness/readiness
- PostgreSQL persistence
- Docker-first production runtime
- CI security gates

</td>
</tr>
</table>

<img src="./assets/actual-surfaces.svg" width="100%" alt="Campaign Platform surfaces"/>

<br/>

<table>
<tr>
<td width="52%" valign="top">
<img src="./assets/features.svg" width="100%" alt="Backend surface"/>
</td>
<td width="48%" valign="top">

### Boundary-first design

The platform does not let different request types enter through one generic trust path.

Admin actions, provider callbacks and public flows prove different things before the business layer sees them.

</td>
</tr>
</table>

<img src="./assets/core-model.svg" width="100%" alt="Core request model"/>

<br/>

<table>
<tr>
<td width="48%" valign="top">

### Failure semantics

A live process is not automatically a ready system.

Dependency failure, invalid provider input, admin exposure and sensitive logging all have explicit guards.

</td>
<td width="52%" valign="top">
<img src="./assets/overview.svg" width="100%" alt="Failure guards"/>
</td>
</tr>
</table>

<img src="./assets/architecture-visual.svg" width="100%" alt="Architecture"/>

<br/>

<img src="./assets/flow-visual.svg" width="100%" alt="Request lifecycle"/>

<br/>

<img src="./assets/engineering-signature.svg" width="100%" alt="Engineering signature"/>

<p align="center"><sub>Private source · public engineering showcase</sub></p>