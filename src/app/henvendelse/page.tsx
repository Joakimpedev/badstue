import { HenvendelseFlow } from "@/components/henvendelse/HenvendelseFlow";

export default function HenvendelsePage({
  searchParams,
}: {
  searchParams: Promise<{ produkt?: string; produktnavn?: string }>;
}) {
  return <HenvendelseInner searchParamsPromise={searchParams} />;
}

async function HenvendelseInner({
  searchParamsPromise,
}: {
  searchParamsPromise: Promise<{ produkt?: string; produktnavn?: string }>;
}) {
  const { produkt, produktnavn } = await searchParamsPromise;

  return (
    <div
      style={{
        minHeight: "80vh",
        backgroundColor: "var(--color-bg)",
        padding: "var(--space-16) var(--space-6)",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "var(--font-label)",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--color-text-muted)",
            marginBottom: "var(--space-3)",
          }}
        >
          Finn din badstue
        </p>
        <h1
          style={{
            fontSize: "var(--font-h1)",
            fontWeight: 700,
            color: "var(--color-text-primary)",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            marginBottom: "var(--space-3)",
          }}
        >
          Hva ser du etter?
        </h1>
        <p
          style={{
            fontSize: "var(--font-body)",
            color: "var(--color-text-secondary)",
            lineHeight: 1.6,
            marginBottom: produktnavn ? "var(--space-6)" : "var(--space-10)",
          }}
        >
          Svar på noen enkle spørsmål — så tar vi kontakt med en anbefaling.
          Det tar under 2 minutter.
        </p>

        {/* Viser hvilken produktside de kom fra */}
        {produktnavn && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-3)",
              padding: "var(--space-3) var(--space-4)",
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "6px",
              marginBottom: "var(--space-10)",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "var(--color-accent)",
                flexShrink: 0,
              }}
            />
            <p style={{ fontSize: "var(--font-small)", color: "var(--color-text-secondary)" }}>
              Du så på: <strong style={{ color: "var(--color-text-primary)" }}>{produktnavn}</strong>
            </p>
          </div>
        )}

        <HenvendelseFlow fraProdukt={produkt} fraProduktNavn={produktnavn} />
      </div>
    </div>
  );
}
