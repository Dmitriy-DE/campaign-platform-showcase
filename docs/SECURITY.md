# Security model

Publicly documented controls:

- authenticated administrative routes;
- role-based authorisation;
- provider-secret verification for webhooks;
- signed public action tokens;
- rate limiting;
- request validation;
- security headers;
- sensitive-field log redaction;
- explicit production feature flags;
- secret scanning in CI;
- database backup and migration checks.

This document intentionally excludes secret names, provider configuration, production topology and domain-specific anti-abuse rules.
