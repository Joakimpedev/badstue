import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Truck, Shield, Wrench } from "lucide-react";
import { getProdukt, getProdukter } from "@/lib/produkter";

export function generateStaticParams() {
  return getProdukter().map((p) => ({ slug: p.slug }));
}

export default async function ProduktPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const produkt = getProdukt(slug);
  if (!produkt) notFound();

  const bildeIndekser = Array.from({ length: produkt.antallBilder }, (_, i) => i);

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "var(--space-10) var(--space-6) var(--space-20)",
      }}
    >
      {/* Tilbake-lenke */}
      <Link
        href="/produkter"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "var(--space-2)",
          fontSize: "var(--font-small)",
          color: "var(--color-text-muted)",
          textDecoration: "none",
          marginBottom: "var(--space-8)",
        }}
      >
        <ArrowLeft size={14} /> Tilbake til produkter
      </Link>

      {/* To-kolonne layout */}
      <div
        className="produkt-detail-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--space-16)",
          alignItems: "start",
        }}
      >
        {/* Venstre — Bildegalleri */}
        <div>
          {/* Hovedbilde — plassholder */}
          <div style={{ position: "relative", aspectRatio: "4 / 3", borderRadius: "6px", overflow: "hidden", marginBottom: "var(--space-3)" }}>
            <Image
              src={`https://picsum.photos/seed/${produkt.slug}-main/800/600`}
              alt={produkt.navn}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          {/* Miniatyrbilder — plassholdere */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-2)" }}>
            {bildeIndekser.map((i) => (
              <div key={i} style={{ position: "relative", aspectRatio: "1", borderRadius: "4px", overflow: "hidden" }}>
                <Image
                  src={`https://picsum.photos/seed/${produkt.slug}-${i}/200/200`}
                  alt={`${produkt.navn} bilde ${i + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Høyre — Produktinfo */}
        <div style={{ position: "sticky", top: "calc(64px + var(--space-8))" }}>
          <p
            style={{
              fontSize: "var(--font-label)",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--color-text-muted)",
              marginBottom: "var(--space-2)",
            }}
          >
            {produkt.kategori === "utebadstue"
              ? "Utebadstue"
              : produkt.kategori === "innebadstue"
                ? "Innebadstue"
                : "Tilbehør"}
          </p>
          <h1
            style={{
              fontSize: "var(--font-h1)",
              fontWeight: 700,
              color: "var(--color-text-primary)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "var(--space-4)",
            }}
          >
            {produkt.navn}
          </h1>
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "var(--color-text-primary)",
              letterSpacing: "-0.02em",
              marginBottom: "var(--space-4)",
            }}
          >
            Fra {produkt.prisKr.toLocaleString("nb-NO")} kr
          </p>
          <p
            style={{
              fontSize: "var(--font-body)",
              color: "var(--color-text-secondary)",
              lineHeight: 1.7,
              marginBottom: "var(--space-8)",
            }}
          >
            {produkt.beskrivelse}
          </p>

          {/* Primær CTA */}
          <Link
            href="/henvendelse"
            style={{
              display: "block",
              textAlign: "center",
              backgroundColor: "var(--color-accent)",
              color: "#FFFFFF",
              padding: "var(--space-4)",
              borderRadius: "4px",
              fontSize: "var(--font-body)",
              fontWeight: 600,
              textDecoration: "none",
              marginBottom: "var(--space-3)",
            }}
          >
            Send forespørsel
          </Link>

          {/* Sekundær CTA */}
          <Link
            href="/kontakt"
            style={{
              display: "block",
              textAlign: "center",
              backgroundColor: "transparent",
              color: "var(--color-text-primary)",
              padding: "var(--space-4)",
              borderRadius: "4px",
              fontSize: "var(--font-body)",
              fontWeight: 500,
              textDecoration: "none",
              border: "1px solid var(--color-border)",
              marginBottom: "var(--space-6)",
            }}
          >
            Kontakt oss med spørsmål
          </Link>

          {/* Tillitssignaler */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-3)",
              padding: "var(--space-5)",
              backgroundColor: "var(--color-surface)",
              borderRadius: "6px",
              border: "1px solid var(--color-border)",
            }}
          >
            {[
              { icon: Truck, tekst: "Levering 2–4 uker til hele Norge" },
              { icon: Shield, tekst: "2 års garanti på alle produkter" },
              { icon: Wrench, tekst: "Montering tilgjengelig på forespørsel" },
            ].map(({ icon: Icon, tekst }) => (
              <div
                key={tekst}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-3)",
                }}
              >
                <Icon size={16} color="var(--color-text-muted)" strokeWidth={1.5} />
                <p
                  style={{
                    fontSize: "var(--font-small)",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {tekst}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inkludert + spesifikasjoner */}
      <div
        className="produkt-spec-grid"
        style={{
          marginTop: "var(--space-16)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--space-12)",
        }}
      >
        {/* Inkludert */}
        <div>
          <h2
            style={{
              fontSize: "var(--font-h2)",
              fontWeight: 700,
              color: "var(--color-text-primary)",
              letterSpacing: "-0.02em",
              marginBottom: "var(--space-6)",
            }}
          >
            Dette er inkludert
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {produkt.inkludert.map((punkt) => (
              <div
                key={punkt}
                style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-3)" }}
              >
                <Check
                  size={16}
                  color="var(--color-text-primary)"
                  strokeWidth={2.5}
                  style={{ flexShrink: 0, marginTop: "2px" }}
                />
                <p
                  style={{
                    fontSize: "var(--font-body)",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.5,
                  }}
                >
                  {punkt}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Spesifikasjoner */}
        <div>
          <h2
            style={{
              fontSize: "var(--font-h2)",
              fontWeight: 700,
              color: "var(--color-text-primary)",
              letterSpacing: "-0.02em",
              marginBottom: "var(--space-6)",
            }}
          >
            Spesifikasjoner
          </h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              {produkt.spesifikasjoner.map((spec, i) => (
                <tr
                  key={spec.label}
                  style={{
                    borderTop: i === 0 ? "1px solid var(--color-border)" : undefined,
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  <td
                    style={{
                      padding: "var(--space-3) 0",
                      fontSize: "var(--font-small)",
                      color: "var(--color-text-muted)",
                      width: "45%",
                    }}
                  >
                    {spec.label}
                  </td>
                  <td
                    style={{
                      padding: "var(--space-3) 0",
                      fontSize: "var(--font-small)",
                      fontWeight: 500,
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {spec.verdi}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
