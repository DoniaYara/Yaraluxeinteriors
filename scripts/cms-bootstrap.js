import { loadEnvFile } from "./load-env.js";
import { getPrisma } from "../lib/cms/db.js";
import { hashPassword } from "../lib/cms/password.js";

loadEnvFile();

export async function bootstrapCms() {
  const db = getPrisma();
  if (!db) throw new Error("DATABASE_URL is required");
  const email = (process.env.AUTHOR_BOOTSTRAP_EMAIL || "donia@yaraluxeinteriors.com.au").toLowerCase();
  const existing = await db.author.findUnique({ where: { email } }) || await db.author.findFirst({ where: { role: "admin" } });
  if (existing) {
    console.log("Admin author already exists:", existing.email);
    return existing;
  }
  const password = process.env.AUTHOR_BOOTSTRAP_PASSWORD;
  if (!password || password.length < 10) {
    throw new Error("Set AUTHOR_BOOTSTRAP_PASSWORD (min 10 characters) to create the first admin. It is not needed after the account exists.");
  }
  const author = await db.author.create({
    data: {
      name: "Donia Yara",
      email,
      passwordHash: await hashPassword(password),
      bio: "Principal interior designer at Yara Luxe Interiors.",
      role: "admin",
      status: "active"
    }
  });
  console.log("Created admin author:", email);
  return author;
}

const isDirect = process.argv[1] && /cms-bootstrap\.js/.test(process.argv[1]);
if (isDirect) {
  bootstrapCms().catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
}
