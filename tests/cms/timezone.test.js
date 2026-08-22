import assert from "node:assert/strict";
import test from "node:test";
import { melbourneInputToUtc, utcToMelbourneInput } from "../../lib/cms/timezone.js";

test("Melbourne AEDT (UTC+11) converts to UTC", () => {
  const utc = melbourneInputToUtc("2026-01-15T09:00");
  assert.equal(utc, "2026-01-14T22:00:00.000Z");
  assert.equal(utcToMelbourneInput(utc), "2026-01-15T09:00");
});

test("Melbourne AEST (UTC+10) converts to UTC", () => {
  const utc = melbourneInputToUtc("2026-07-15T09:00");
  assert.equal(utc, "2026-07-14T23:00:00.000Z");
  assert.equal(utcToMelbourneInput(utc), "2026-07-15T09:00");
});
