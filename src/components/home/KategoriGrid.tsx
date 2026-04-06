import Link from "next/link";
import { ArrowRight } from "lucide-react";

const kategorier = [
  {
    slug: "utebadstue",
    label: "Utebadstue",
    beskrivelse: "Klassisk norsk badstue for hage og tomt",
    /* TODO: bytt ut bakgrunnsfarge med ekte bilde:
       backgroundImage: "url('/images/kategori-ute.jpg')" */
    bg: "#3D3530",
  },
  {
    slug: "innebadstue",
    label: "Innebadstue",
    beskrivelse: "Kompakte løsninger for bad eller kjeller",
    /* TODO: backgroundImage: "url('/images/kategori-inne.jpg')" */
    bg: "#2E2A26",
  },
  {
    slug: "tilbehor",
    label: "Tilbehør",
    beskrivelse: "Ovner, kubber, duft og alt du trenger",
    /* TODO: backgroundImage: "url('/images/kategori-tilbehor.jpg')" */
    bg: "#4A3F38",
  },
];

export function KategoriGrid() {
  return (
    <section
      style={{
        backgroundColor: "var(--color-surface)",
        padding: "var(--space-16) var(--space-6)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Tittel */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: "var(--space-8)",
          }}
        >
          <h2
            style={{
              fontSize: "var(--font-h2)",
              fontWeight: 700,
              color: "var(--color-text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            Finn din badstue
          </h2>
          <Link
            href="/produkter"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-1)",
              fontSize: "var(--font-small)",
              color: "var(--color-text-secondary)",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Se alle produkter
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "var(--space-3)",
          }}
        >
          {kategorier.map((kat) => (
            <Link
              key={kat.slug}
              href={`/produkter?kategori=${kat.slug}`}
              style={{
                position: "relative",
                display: "block",
                borderRadius: "6px",
                overflow: "hidden",
                textDecoration: "none",
                aspectRatio: "3 / 4",
                backgroundColor: kat.bg,
                /* TODO: legg til backgroundImage, backgroundSize: "cover", backgroundPosition: "center" */
              }}
            >
              {/* Bildeholder-tekst */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "rgba(255,255,255,0.2)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  textAlign: "center",
                  pointerEvents: "none",
                  width: "100%",
                  padding: "0 var(--space-4)",
                }}
              >
                Legg til bilde
                <br />({kat.label})
              </div>

              {/* Gradient og tekst */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(15,10,8,0.75) 0%, transparent 55%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "var(--space-6)",
                }}
              >
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-2)",
                    fontSize: "var(--font-body)",
                    fontWeight: 600,
                    color: "#FFFFFF",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {kat.label}
                  <ArrowRight size={16} />
                </p>
                <p
                  style={{
                    fontSize: "var(--font-small)",
                    color: "rgba(255,255,255,0.6)",
                    marginTop: "var(--space-1)",
                  }}
                >
                  {kat.beskrivelse}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
