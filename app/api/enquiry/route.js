import { EMAIL } from "@/lib/schema/constants";

export const runtime = "nodejs";

function str(value, max = 2000) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, max);
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request) {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return Response.json({ ok: false, error: "Email is not configured yet." }, { status: 503 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (str(body.company, 80)) {
    return Response.json({ ok: true });
  }

  const type = body.type === "booking" ? "booking" : "contact";
  const name = str(body.name, 120);
  const email = str(body.email, 160).toLowerCase();
  const message = str(body.message, 2000);
  const phone = str(body.phone, 40);
  const address = str(body.address, 240);
  const service = str(body.service, 120);

  if (!name || !isEmail(email)) {
    return Response.json({ ok: false, error: "Please enter your name and a valid email." }, { status: 400 });
  }
  if (type === "booking" && !phone) {
    return Response.json({ ok: false, error: "Please enter your phone number." }, { status: 400 });
  }

  const to = process.env.ENQUIRY_TO || EMAIL;
  const from = process.env.ENQUIRY_FROM || "Yara Luxe Interiors <beth.t@example.com>";
  const subject = type === "booking"
    ? `Booking enquiry${service ? ` — ${service}` : ""} from ${name}`
    : `Website enquiry from ${name}`;

  const lines = [
    `Type: ${type === "booking" ? "Booking Online" : "Contact form"}`,
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : "",
    address ? `Address: ${address}` : "",
    service ? `Service: ${service}` : "",
    "",
    message || "(No message)"
  ].filter(Boolean);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject,
      text: lines.join("\n")
    })
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("Resend error", res.status, detail);
    return Response.json({ ok: false, error: "Could not send the enquiry. Please try again or call us." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
