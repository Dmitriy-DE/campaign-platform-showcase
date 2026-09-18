/**
 * Sanitised illustrative webhook boundary.
 */

import type { Request, Response } from "express";
import crypto from "node:crypto";

function safeEqual(a: string, b: string): boolean {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && crypto.timingSafeEqual(left, right);
}

export async function providerWebhook(req: Request, res: Response) {
  const supplied = req.header("x-provider-secret") ?? "";
  const expected = process.env.PROVIDER_WEBHOOK_SECRET ?? "";

  if (!expected || !safeEqual(supplied, expected)) {
    return res.status(401).json({ error: "unauthorised" });
  }

  await req.app.locals.services.events.handleProviderEvent(req.body);
  return res.status(202).json({ accepted: true });
}
