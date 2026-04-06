import Link from "next/link";

export function KjopeguideSection() {
  return (
    <section
      style={{
        backgroundColor: "#DDD8D0",
        padding: "var(--space-16) var(--space-6)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--space-12)",
          alignItems: "center",
        }}
      >
        {/* Tekst venstre */}
        <div>
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
            Kjøpers guide
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
            Er du i utforskingsfasen?
          </h2>
          <p
            style={{
              fontSize: "var(--font-body)",
              color: "var(--color-text-secondary)",
              lineHeight: 1.7,
              marginBottom: "var(--space-8)",
              maxWidth: "420px",
            }}
          >
            Mange spørsmål dukker opp når man skal kjøpe badstue for første
            gang — størrelse, plassering, ovn, tilbehør. Vi er her for å hjelpe
            deg finne riktig løsning, uansett hvor du er i prosessen.
          </p>
          <Link
            href="/henvendelse"
            style={{
              display: "inline-block",
              backgroundColor: "var(--color-accent)",
              color: "#FFFFFF",
              padding: "var(--space-4) var(--space-8)",
              borderRadius: "4px",
              fontSize: "var(--font-body)",
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            Finn din badstue
          </Link>
        </div>

        {/* Bilde høyre */}
        <div
          style={{
            borderRadius: "6px",
            overflow: "hidden",
            aspectRatio: "4 / 3",
            backgroundColor: "#B8AFA6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            /* TODO: bytt ut med ekte bilde:
               backgroundImage: "url('/images/kjopeguide.jpg')",
               backgroundSize: "cover",
               backgroundPosition: "center",
            */
          }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textAlign: "center",
              padding: "var(--space-4)",
            }}
          >
            Legg til bilde her
            <br />
            (badstue ved fjord/vann, 800×600px)
          </p>
        </div>
      </div>
    </section>
  );
}
