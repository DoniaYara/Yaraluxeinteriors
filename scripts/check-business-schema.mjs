import fs from "node:fs";

const html = fs.readFileSync(".next/server/app/index.html", "utf8");
const blocks = [...html.matchAll(/<script type="application\/ld\+json">([^<]+)<\/script>/g)].map((m) => m[1]);
for (const raw of blocks) {
  const data = JSON.parse(raw.replace(/&quot;/g, '"').replace(/&#x27;/g, "'"));
  const nodes = data["@graph"] || [data];
  for (const node of nodes) {
    if (node["@type"] === "LocalBusiness") {
      console.log({ logo: node.logo, image: node.image, type: node["@type"], id: node["@id"] });
    }
  }
}
