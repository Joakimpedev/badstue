import { Phone, Mail } from "lucide-react";
import { KontaktSkjema } from "@/components/KontaktSkjema";

export default function KontaktPage() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "var(--space-16) var(--space-6) var(--space-24)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--space-16)",
          alignItems: "start",
        }}
      >
        {/* Venstre — info */}
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
            Kontakt oss
          </p>
          <h1
            style={{
              fontSize: "var(--font-h1)",
              fontWeight: 700,
              color: "var(--color-text-primary)",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              marginBottom: "var(--space-6)",
            }}
          >
            Vi er her for å hjelpe
          </h1>
          <p
            style={{
              fontSize: "var(--font-body)",
              color: "var(--color-text-secondary)",
              lineHeight: 1.7,
              marginBottom: "var(--space-10)",
              maxWidth: "400px",
            }}
          >
            Har du spørsmål om produkter, levering eller montering? Ta kontakt
            — vi svarer som regel innen én virkedag.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            <a
              href="tel:+4700000000"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-4)",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Phone size={18} color="var(--color-text-primary)" strokeWidth={1.5} />
              </div>
              <div>
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
                  Telefon
                </p>
                <p
                  style={{
                    fontSize: "var(--font-body)",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                  }}
                >
                  +47 000 00 000
                </p>
              </div>
            </a>

            <a
              href="mailto:post@badstuemannen.no"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-4)",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Mail size={18} color="var(--color-text-primary)" strokeWidth={1.5} />
              </div>
              <div>
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
                  E-post
                </p>
                <p
                  style={{
                    fontSize: "var(--font-body)",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                  }}
                >
                  post@badstuemannen.no
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Høyre — skjema */}
        <KontaktSkjema />
      </div>
    </div>
  );
}
