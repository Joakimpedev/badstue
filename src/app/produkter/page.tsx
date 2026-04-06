import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getProdukter } from "@/lib/produkter";

const kategorier = [
  { slug: "", label: "Alle" },
  { slug: "utebadstue", label: "Utebadstue" },
  { slug: "innebadstue", label: "Innebadstue" },
  { slug: "tilbehor", label: "Tilbehør" },
];

export default function ProdukterPage({
  searchParams,
}: {
  searchParams: Promise<{ kategori?: string }>;
}) {
  return <ProdukterInner searchParamsPromise={searchParams} />;
}

async function ProdukterInner({
  searchParamsPromise,
}: {
  searchParamsPromise: Promise<{ kategori?: string }>;
}) {
  const { kategori } = await searchParamsPromise;
  const liste = getProdukter(kategori);

  return (
    <>
      {/* Sideheader */}
      <div
        style={{
          backgroundColor: "var(--color-surface)",
          borderBottom: "1px solid var(--color-border)",
          padding: "var(--space-12) var(--space-6) var(--space-8)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "var(--font-h1)",
              fontWeight: 700,
              color: "var(--color-text-primary)",
              letterSpacing: "-0.03em",
              marginBottom: "var(--space-6)",
            }}
          >
            Produkter
          </h1>

          {/* Kategorifilter */}
          <div style={{ display: "flex", gap: "var(--space-2)" }}>
            {kategorier.map((kat) => {
              const aktiv = (kategori ?? "") === kat.slug;
              return (
                <Link
                  key={kat.slug}
                  href={kat.slug ? `/produkter?kategori=${kat.slug}` : "/produkter"}
                  style={{
                    padding: "var(--space-2) var(--space-4)",
                    borderRadius: "4px",
                    fontSize: "var(--font-small)",
                    fontWeight: aktiv ? 600 : 400,
                    textDecoration: "none",
                    backgroundColor: aktiv
                      ? "var(--color-accent)"
                      : "var(--color-white)",
                    color: aktiv
                      ? "var(--color-white)"
                      : "var(--color-text-secondary)",
                    border: `1px solid ${aktiv ? "var(--color-accent)" : "var(--color-border)"}`,
                  }}
                >
                  {kat.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Produktgrid */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "var(--space-12) var(--space-6)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "var(--space-6)",
          }}
        >
          {liste.map((produkt) => (
            <Link
              key={produkt.slug}
              href={`/produkter/${produkt.slug}`}
              style={{ textDecoration: "none", display: "block" }}
            >
              {/* Bildeholder */}
              <div
                style={{
                  aspectRatio: "4 / 3",
                  backgroundColor: "var(--color-surface)",
                  borderRadius: "6px",
                  marginBottom: "var(--space-4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid var(--color-border)",
                  overflow: "hidden",
                  /* TODO: bytt med ekte bilde per produkt */
                }}
              >
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--color-text-muted)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    textAlign: "center",
                    padding: "var(--space-4)",
                  }}
                >
                  Bilde kommer
                  <br />({produkt.navn})
                </p>
              </div>

              {/* Info */}
              <p
                style={{
                  fontSize: "var(--font-label)",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--color-text-muted)",
                  marginBottom: "var(--space-1)",
                }}
              >
                {produkt.kategori === "utebadstue"
                  ? "Utebadstue"
                  : produkt.kategori === "innebadstue"
                    ? "Innebadstue"
                    : "Tilbehør"}
              </p>
              <p
                style={{
                  fontSize: "var(--font-h3)",
                  fontWeight: 700,
                  color: "var(--color-text-primary)",
                  letterSpacing: "-0.01em",
                  marginBottom: "var(--space-1)",
                }}
              >
                {produkt.navn}
              </p>
              <p
                style={{
                  fontSize: "var(--font-small)",
                  color: "var(--color-text-secondary)",
                  marginBottom: "var(--space-3)",
                }}
              >
                {produkt.kortBeskrivelse}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "var(--font-body)",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                  }}
                >
                  Fra {produkt.prisKr.toLocaleString("nb-NO")} kr
                </p>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-1)",
                    fontSize: "var(--font-small)",
                    color: "var(--color-text-secondary)",
                    fontWeight: 500,
                  }}
                >
                  Se mer <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {liste.length === 0 && (
          <p style={{ color: "var(--color-text-muted)", padding: "var(--space-12) 0" }}>
            Ingen produkter i denne kategorien ennå.
          </p>
        )}
      </div>

      {/* CTA-banner */}
      <div
        style={{
          backgroundColor: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
          padding: "var(--space-12) var(--space-6)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "var(--font-body)",
            color: "var(--color-text-secondary)",
            marginBottom: "var(--space-4)",
          }}
        >
          Usikker på hvilken modell som passer?
        </p>
        <Link
          href="/henvendelse"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--space-2)",
            backgroundColor: "var(--color-accent)",
            color: "#FFFFFF",
            padding: "var(--space-3) var(--space-8)",
            borderRadius: "4px",
            fontSize: "var(--font-body)",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Ta vår guide <ArrowRight size={16} />
        </Link>
      </div>
    </>
  );
}
