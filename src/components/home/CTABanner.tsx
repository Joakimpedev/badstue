import Link from "next/link";

export function CTABanner() {
  return (
    <section
      style={{
        backgroundColor: "var(--color-bg)",
        padding: "var(--space-20) var(--space-6)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "var(--font-label)",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--color-text-muted)",
            marginBottom: "var(--space-4)",
          }}
        >
          Ikke sikker på hva du trenger?
        </p>
        <h2
          style={{
            fontSize: "var(--font-h1)",
            fontWeight: 700,
            color: "var(--color-text-primary)",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            marginBottom: "var(--space-6)",
          }}
        >
          Vi hjelper deg finne riktig badstue
        </h2>
        <p
          style={{
            fontSize: "var(--font-body)",
            color: "var(--color-text-secondary)",
            lineHeight: 1.7,
            marginBottom: "var(--space-8)",
          }}
        >
          Svar på noen enkle spørsmål om hva du ser etter, så finner vi
          riktig modell og størrelse for deg. Det tar under to minutter.
        </p>
        <Link
          href="/henvendelse"
          style={{
            display: "inline-block",
            backgroundColor: "var(--color-accent)",
            color: "#FFFFFF",
            padding: "var(--space-4) var(--space-10)",
            borderRadius: "4px",
            fontSize: "var(--font-body)",
            fontWeight: 600,
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
        >
          Start her — ta under 2 minutter
        </Link>
      </div>
    </section>
  );
}
