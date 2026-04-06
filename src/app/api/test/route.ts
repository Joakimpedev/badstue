export async function GET() {
  const url = process.env.GOOGLE_SHEETS_URL;

  if (!url) {
    return Response.json({ status: "MANGLER", melding: "GOOGLE_SHEETS_URL er ikke satt i Vercel" });
  }

  // Test at Google-URLen svarer
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({ dato: "TEST", navn: "Test", epost: "test@test.no", telefon: "", type: "test", storrelse: "", budsjett: "", prioriteringer: "" }),
      redirect: "follow",
    });
    return Response.json({
      status: "URL_FUNNET",
      google_svarte_med: res.status,
      url_start: url.substring(0, 60) + "...",
    });
  } catch (err) {
    return Response.json({ status: "FETCH_FEIL", feil: String(err) });
  }
}
