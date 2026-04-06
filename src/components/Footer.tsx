import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-accent)",
        color: "var(--color-white)",
        padding: "var(--space-16) var(--space-6) var(--space-8)",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "var(--space-12)",
          paddingBottom: "var(--space-12)",
          borderBottom: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        {/* Brand */}
        <div>
          <p
            style={{
              fontWeight: 700,
              fontSize: "var(--font-h3)",
              marginBottom: "var(--space-4)",
              letterSpacing: "-0.02em",
            }}
          >
            Badstue Mannen
          </p>
          <p
            style={{
              fontSize: "var(--font-small)",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.6,
              maxWidth: "280px",
            }}
          >
            Norske badstuer av høy kvalitet — bygget for å tåle norsk natur og
            klima.
          </p>
        </div>

        {/* Navigasjon */}
        <div>
          <p
            style={{
              fontSize: "var(--font-label)",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "var(--space-4)",
            }}
          >
            Navigasjon
          </p>
          <nav
            style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}
          >
            {[
              { href: "/", label: "Hjem" },
              { href: "/produkter", label: "Produkter" },
              { href: "/henvendelse", label: "Finn din badstue" },
              { href: "/kontakt", label: "Kontakt" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "var(--font-small)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Kontakt */}
        <div>
          <p
            style={{
              fontSize: "var(--font-label)",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "var(--space-4)",
            }}
          >
            Kontakt
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            <a
              href="tel:+4700000000"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-2)",
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                fontSize: "var(--font-small)",
              }}
            >
              <Phone size={14} />
              +47 000 00 000
            </a>
            <a
              href="mailto:post@badstuemannen.no"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-2)",
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                fontSize: "var(--font-small)",
              }}
            >
              <Mail size={14} />
              post@badstuemannen.no
            </a>
          </div>
        </div>
      </div>

      {/* Bunntekst */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingTop: "var(--space-6)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: "var(--font-small)",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          © {new Date().getFullYear()} Badstue Mannen. Alle rettigheter
          forbeholdt.
        </p>
      </div>
    </footer>
  );
}
