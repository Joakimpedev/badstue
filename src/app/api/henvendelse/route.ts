import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const scriptUrl = process.env.GOOGLE_SHEETS_URL;
  if (!scriptUrl) {
    return Response.json({ error: "GOOGLE_SHEETS_URL ikke satt" }, { status: 500 });
  }

  const rad = {
    dato: new Date().toLocaleString("nb-NO", { timeZone: "Europe/Oslo" }),
    navn: data.navn ?? "",
    epost: data.epost ?? "",
    telefon: data.telefon ?? "",
    fraProduktNavn: data.fraProduktNavn ?? "",
    type: data.type ?? "",
    storrelse: data.storrelse ?? "",
    budsjett: data.budsjett ?? "",
    prioriteringer: Array.isArray(data.prioriteringer)
      ? data.prioriteringer.join(", ")
      : "",
  };

  // Google Apps Script returnerer av og til redirect — følg den og ignorer statuskode
  await fetch(scriptUrl, {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify(rad),
    redirect: "follow",
  });

  return Response.json({ ok: true });
}
