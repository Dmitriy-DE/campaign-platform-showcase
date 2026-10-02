<p align="center"><img src="./assets/hero.svg" width="100%" alt="Campaign Platform"/></p>

<table>
<tr>
<td width="20%" align="center"><b>Express 5</b><br/><sub>API boundary</sub></td>
<td width="20%" align="center"><b>PostgreSQL</b><br/><sub>v2 persistence</sub></td>
<td width="20%" align="center"><b>Provider webhooks</b><br/><sub>secret-verified</sub></td>
<td width="20%" align="center"><b>Signed unsubscribe</b><br/><sub>public flow</sub></td>
<td width="20%" align="center"><b>live ≠ ready</b><br/><sub>explicit health model</sub></td>
</tr>
</table>

<p align="center"><img src="./assets/actual-surfaces.svg" width="100%" alt="Product surfaces"/></p>

<table>
<tr>
<td width="50%" valign="top"><img src="./assets/features.svg" width="100%" alt="Backend surface"/></td>
<td width="50%" valign="top"><img src="./assets/core-model.svg" width="100%" alt="Core model"/></td>
</tr>
</table>

<table>
<tr>
<td width="48%" valign="top"><img src="./assets/overview.svg" width="100%" alt="Failure model"/></td>
<td width="52%" valign="top"><img src="./assets/architecture-visual.svg" width="100%" alt="Architecture"/></td>
</tr>
</table>

<p align="center"><img src="./assets/flow-visual.svg" width="100%" alt="Request lifecycle"/></p>
<p align="center"><img src="./assets/engineering-signature.svg" width="100%" alt="Engineering signature"/></p>

<details>
<summary><b>Engineering notes</b></summary>

- Public ≠ authenticated ≠ provider ≠ admin
- Provider callbacks prove their source before business logic
- Admin routes require explicit role checks
- Sensitive values are redacted from logs
- Liveness and dependency readiness are separate
- CI includes security and secret checks

</details>