import Link from "next/link";

export function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        height: "90vh",
        minHeight: "560px",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
        /* TODO: bytt ut bakgrunnsfarge med ekte bilde:
           backgroundImage: "url('/images/hero.jpg')",
           backgroundSize: "cover",
           backgroundPosition: "center",
        */
        backgroundColor: "#2A2420",
      }}
    >
      {/* Mørk gradient over bildet nedenfra */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(20,16,12,0.85) 0%, rgba(20,16,12,0.3) 50%, rgba(20,16,12,0.1) 100%)",
          zIndex: 1,
        }}
      />

      {/* Bildeholder-tekst — fjernes når ekte bilde er på plass */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "rgba(255,255,255,0.15)",
          fontSize: "0.875rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          zIndex: 1,
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        Legg til hero-bilde her
        <br />
        (1920×1080px anbefalt — badstue i norsk natur)
      </div>

      {/* Innhold */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          padding: "0 var(--space-6) var(--space-20)",
        }}
      >
        <p
          style={{
            fontSize: "var(--font-label)",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.6)",
            marginBottom: "var(--space-3)",
          }}
        >
          Norske badstuer
        </p>
        <h1
          style={{
            fontSize: "clamp(2.25rem, 5vw, 4rem)",
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            maxWidth: "640px",
            marginBottom: "var(--space-8)",
          }}
        >
          Bygget for norsk natur. Skapt for hvile.
        </h1>
        <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
          <Link
            href="/henvendelse"
            style={{
              display: "inline-block",
              backgroundColor: "#FFFFFF",
              color: "var(--color-accent)",
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
          <Link
            href="/produkter"
            style={{
              display: "inline-block",
              backgroundColor: "transparent",
              color: "#FFFFFF",
              padding: "var(--space-4) var(--space-8)",
              borderRadius: "4px",
              fontSize: "var(--font-body)",
              fontWeight: 500,
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.35)",
            }}
          >
            Se produkter
          </Link>
        </div>
      </div>
    </section>
  );
}
