import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const kategorier = [
  {
    slug: "utebadstue",
    label: "Utebadstue",
    beskrivelse: "Klassisk norsk badstue for hage og tomt",
    bildeSeed: "outdoor-sauna-norway",
  },
  {
    slug: "innebadstue",
    label: "Innebadstue",
    beskrivelse: "Kompakte løsninger for bad eller kjeller",
    bildeSeed: "indoor-sauna-wood",
  },
  {
    slug: "tilbehor",
    label: "Tilbehør",
    beskrivelse: "Ovner, kubber, duft og alt du trenger",
    bildeSeed: "sauna-accessories",
  },
];

export function KategoriGrid() {
  return (
    <section style={{ backgroundColor: "var(--color-surface)", padding: "var(--space-16) var(--space-6)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "var(--space-8)" }}>
          <h2 style={{ fontSize: "var(--font-h2)", fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "-0.02em" }}>
            Finn din badstue
          </h2>
          <Link
            href="/produkter"
            style={{ display: "flex", alignItems: "center", gap: "var(--space-1)", fontSize: "var(--font-small)", color: "var(--color-text-secondary)", textDecoration: "none", fontWeight: 500 }}
          >
            Se alle <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid-3">
          {kategorier.map((kat) => (
            <Link
              key={kat.slug}
              href={`/produkter?kategori=${kat.slug}`}
              style={{ position: "relative", display: "block", borderRadius: "6px", overflow: "hidden", textDecoration: "none", aspectRatio: "3 / 4" }}
            >
              {/* Plassholderbilde */}
              <Image
                src={`https://picsum.photos/seed/${kat.bildeSeed}/600/800`}
                alt={kat.label}
                fill
                style={{ objectFit: "cover" }}
              />

              {/* Gradient */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(15,10,8,0.78) 0%, transparent 55%)",
                }}
              />

              {/* Tekst */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "var(--space-6)" }}>
                <p style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", fontSize: "var(--font-body)", fontWeight: 600, color: "#FFFFFF", letterSpacing: "-0.01em" }}>
                  {kat.label} <ArrowRight size={16} />
                </p>
                <p style={{ fontSize: "var(--font-small)", color: "rgba(255,255,255,0.6)", marginTop: "var(--space-1)" }}>
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
