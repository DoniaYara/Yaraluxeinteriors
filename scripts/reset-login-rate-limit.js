import { readFileSync, existsSync } from "fs";
import { resolve } from "path";
import { resetLoginAttempts } from "../lib/cms/rate-limit.js";

function loadEnv() {
  const file = resolve(process.cwd(), ".env");
  if (!existsSync(file)) return;
  for (const line of readFileSync(file, "utf8").split(/\r?\n/)) {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (!match) continue;
    const key = match[1].trim();
    const value = match[2].trim().replace(/^["']|["']$/g, "");
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnv();
if (process.env.NODE_ENV === "production") {
  console.error("Refusing to reset login rate limits in production.");
  process.exit(1);
}
const email = process.argv[2] || "";
const count = await resetLoginAttempts(email);
console.log(`Removed ${count} login attempt records.`);
