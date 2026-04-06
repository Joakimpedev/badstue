"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";

type Svar = {
  type?: string;
  storrelse?: string;
  prioriteringer?: string[];
  budsjett?: string;
  navn?: string;
  epost?: string;
  telefon?: string;
  fraProdukt?: string;
  fraProduktNavn?: string;
};

const steg = [
  {
    id: "type",
    sporsmal: "Hva leter du etter?",
    valg: [
      { verdi: "utebadstue", label: "Utebadstue", beskrivelse: "Klassisk norsk badstue for hage eller tomt" },
      { verdi: "innebadstue", label: "Innebadstue", beskrivelse: "Kompakt løsning for bad eller kjeller" },
      { verdi: "tilbehor", label: "Tilbehør", beskrivelse: "Ovn, øse, bøtte og mer" },
      { verdi: "vet-ikke", label: "Vet ikke ennå", beskrivelse: "Jeg er i utforskingsfasen" },
    ],
    flervalg: false,
  },
  {
    id: "storrelse",
    sporsmal: "Hvilken størrelse passer deg?",
    valg: [
      { verdi: "liten", label: "Liten", beskrivelse: "2–4 personer" },
      { verdi: "medium", label: "Medium", beskrivelse: "4–6 personer" },
      { verdi: "stor", label: "Stor", beskrivelse: "6+ personer" },
      { verdi: "vet-ikke", label: "Vet ikke", beskrivelse: "Hjelp meg velge" },
    ],
    flervalg: false,
  },
  {
    id: "prioriteringer",
    sporsmal: "Hva er viktigst for deg?",
    beskrivelse: "Velg gjerne flere",
    valg: [
      { verdi: "norsk-kvalitet", label: "Norsk kvalitet" },
      { verdi: "rask-levering", label: "Rask levering" },
      { verdi: "pris", label: "Pris" },
      { verdi: "estetikk", label: "Estetikk" },
      { verdi: "montering", label: "Montering inkludert" },
    ],
    flervalg: true,
  },
  {
    id: "budsjett",
    sporsmal: "Omtrentlig budsjett?",
    valg: [
      { verdi: "under-50k", label: "Under 50 000 kr" },
      { verdi: "50-100k", label: "50 000–100 000 kr" },
      { verdi: "100-200k", label: "100 000–200 000 kr" },
      { verdi: "ingen-grense", label: "Ingen grense" },
    ],
    flervalg: false,
  },
];

function FremdriftsBar({ aktivt, totalt }: { aktivt: number; totalt: number }) {
  return (
    <div style={{ marginBottom: "var(--space-8)" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "var(--space-2)",
        }}
      >
        <p style={{ fontSize: "var(--font-small)", color: "var(--color-text-muted)" }}>
          Steg {aktivt + 1} av {totalt}
        </p>
      </div>
      <div
        style={{
          height: "3px",
          backgroundColor: "var(--color-border)",
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            backgroundColor: "var(--color-accent)",
            borderRadius: "2px",
            width: `${((aktivt + 1) / totalt) * 100}%`,
            transition: "width 0.3s ease",
          }}
        />
      </div>
    </div>
  );
}

export function HenvendelseFlow({
  fraProdukt: fraProduktProp,
  fraProduktNavn: fraProduktNavnProp,
}: {
  fraProdukt?: string;
  fraProduktNavn?: string;
}) {
  const searchParams = useSearchParams();
  const fraProdukt = searchParams.get("produkt") ?? fraProduktProp ?? "";
  const fraProduktNavn = searchParams.get("produktnavn") ?? fraProduktNavnProp ?? "";

  const [aktivtSteg, setAktivtSteg] = useState(0);
  const [svar, setSvar] = useState<Svar>({ fraProdukt, fraProduktNavn });
  const [sender, setSender] = useState(false);
  const [sendt, setSendt] = useState(false);
  const [feil, setFeil] = useState("");

  const totaltSteg = steg.length + 1; // +1 for kontaktskjema

  function velgSvar(stegId: string, verdi: string, flervalg: boolean) {
    if (flervalg) {
      const eksisterende = (svar.prioriteringer ?? []);
      const oppdatert = eksisterende.includes(verdi)
        ? eksisterende.filter((v) => v !== verdi)
        : [...eksisterende, verdi];
      setSvar((s) => ({ ...s, prioriteringer: oppdatert }));
    } else {
      setSvar((s) => ({ ...s, [stegId]: verdi }));
      setTimeout(() => setAktivtSteg((n) => n + 1), 200);
    }
  }

  function erValgt(stegId: string, verdi: string, flervalg: boolean) {
    if (flervalg) return (svar.prioriteringer ?? []).includes(verdi);
    return svar[stegId as keyof Svar] === verdi;
  }

  async function sendSkjema(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSender(true);
    setFeil("");

    const form = e.currentTarget;
    const data = {
      ...svar,
      navn: (form.elements.namedItem("navn") as HTMLInputElement).value,
      epost: (form.elements.namedItem("epost") as HTMLInputElement).value,
      telefon: (form.elements.namedItem("telefon") as HTMLInputElement).value,
      fraProdukt: fraProdukt ?? "",
      fraProduktNavn: fraProduktNavn ?? "",
    };

    try {
      const res = await fetch("/api/henvendelse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Noe gikk galt");
      const json = await res.json();
      console.log("API svar:", json);
      setSendt(true);
    } catch {
      setFeil("Noe gikk galt. Prøv igjen eller ring oss direkte.");
    } finally {
      setSender(false);
    }
  }

  if (sendt) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "var(--space-12) 0",
        }}
      >
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            backgroundColor: "var(--color-accent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto var(--space-6)",
          }}
        >
          <Check size={24} color="#FFFFFF" strokeWidth={2.5} />
        </div>
        <h2
          style={{
            fontSize: "var(--font-h2)",
            fontWeight: 700,
            color: "var(--color-text-primary)",
            letterSpacing: "-0.02em",
            marginBottom: "var(--space-4)",
          }}
        >
          Takk for henvendelsen!
        </h2>
        <p
          style={{
            fontSize: "var(--font-body)",
            color: "var(--color-text-secondary)",
            lineHeight: 1.7,
          }}
        >
          Vi har mottatt forespørselen din og tar kontakt innen 1–2 virkedager.
        </p>
      </div>
    );
  }

  const ProduktBanner = fraProduktNavn ? (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "var(--space-3) var(--space-4)", backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "6px", marginBottom: "var(--space-6)" }}>
      <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--color-accent)", flexShrink: 0 }} />
      <p style={{ fontSize: "var(--font-small)", color: "var(--color-text-secondary)" }}>
        Du så på: <strong style={{ color: "var(--color-text-primary)" }}>{fraProduktNavn}</strong>
      </p>
    </div>
  ) : null;

  // Kontaktskjema (siste steg)
  if (aktivtSteg === steg.length) {
    return (
      <>
        {ProduktBanner}
        <FremdriftsBar aktivt={aktivtSteg} totalt={totaltSteg} />
        <h2
          style={{
            fontSize: "var(--font-h2)",
            fontWeight: 700,
            color: "var(--color-text-primary)",
            letterSpacing: "-0.02em",
            marginBottom: "var(--space-8)",
          }}
        >
          Hvem skal vi kontakte?
        </h2>
        <form onSubmit={sendSkjema}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            {[
              { name: "navn", label: "Navn", type: "text", required: true },
              { name: "epost", label: "E-post", type: "email", required: true },
              { name: "telefon", label: "Telefon", type: "tel", required: false },
            ].map((felt) => (
              <div key={felt.name}>
                <label
                  htmlFor={felt.name}
                  style={{
                    display: "block",
                    fontSize: "var(--font-small)",
                    fontWeight: 500,
                    color: "var(--color-text-secondary)",
                    marginBottom: "var(--space-2)",
                  }}
                >
                  {felt.label} {felt.required && <span style={{ color: "var(--color-text-muted)" }}>*</span>}
                </label>
                <input
                  id={felt.name}
                  name={felt.name}
                  type={felt.type}
                  required={felt.required}
                  style={{
                    width: "100%",
                    padding: "var(--space-3) var(--space-4)",
                    fontSize: "var(--font-body)",
                    color: "var(--color-text-primary)",
                    backgroundColor: "var(--color-white)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "4px",
                    outline: "none",
                  }}
                />
              </div>
            ))}
          </div>

          {feil && (
            <p
              style={{
                marginTop: "var(--space-4)",
                fontSize: "var(--font-small)",
                color: "#B91C1C",
              }}
            >
              {feil}
            </p>
          )}

          <div
            style={{
              marginTop: "var(--space-8)",
              display: "flex",
              gap: "var(--space-4)",
              alignItems: "center",
            }}
          >
            <button
              type="button"
              onClick={() => setAktivtSteg((n) => n - 1)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-2)",
                padding: "var(--space-3) var(--space-4)",
                fontSize: "var(--font-small)",
                color: "var(--color-text-muted)",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <ArrowLeft size={14} /> Tilbake
            </button>
            <button
              type="submit"
              disabled={sender}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "var(--space-2)",
                padding: "var(--space-4)",
                fontSize: "var(--font-body)",
                fontWeight: 600,
                color: "#FFFFFF",
                backgroundColor: sender ? "var(--color-text-muted)" : "var(--color-accent)",
                border: "none",
                borderRadius: "4px",
                cursor: sender ? "not-allowed" : "pointer",
                transition: "background-color 0.15s ease",
              }}
            >
              {sender ? "Sender..." : "Send forespørsel"}
              {!sender && <ArrowRight size={16} />}
            </button>
          </div>
        </form>
      </>
    );
  }

  const gjeldende = steg[aktivtSteg];

  return (
    <>
      {ProduktBanner}
      <FremdriftsBar aktivt={aktivtSteg} totalt={totaltSteg} />
      <h2
        style={{
          fontSize: "var(--font-h2)",
          fontWeight: 700,
          color: "var(--color-text-primary)",
          letterSpacing: "-0.02em",
          marginBottom: gjeldende.beskrivelse ? "var(--space-2)" : "var(--space-6)",
        }}
      >
        {gjeldende.sporsmal}
      </h2>
      {gjeldende.beskrivelse && (
        <p
          style={{
            fontSize: "var(--font-small)",
            color: "var(--color-text-muted)",
            marginBottom: "var(--space-6)",
          }}
        >
          {gjeldende.beskrivelse}
        </p>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
        {gjeldende.valg.map((valg) => {
          const valgt = erValgt(gjeldende.id, valg.verdi, gjeldende.flervalg);
          return (
            <button
              key={valg.verdi}
              onClick={() => velgSvar(gjeldende.id, valg.verdi, gjeldende.flervalg)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "var(--space-4) var(--space-5)",
                backgroundColor: valgt ? "var(--color-accent)" : "var(--color-white)",
                border: `1px solid ${valgt ? "var(--color-accent)" : "var(--color-border)"}`,
                borderRadius: "6px",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.15s ease",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "var(--font-body)",
                    fontWeight: 600,
                    color: valgt ? "#FFFFFF" : "var(--color-text-primary)",
                    marginBottom: "beskrivelse" in valg && valg.beskrivelse ? "var(--space-1)" : 0,
                  }}
                >
                  {valg.label}
                </p>
                {"beskrivelse" in valg && valg.beskrivelse && (
                  <p
                    style={{
                      fontSize: "var(--font-small)",
                      color: valgt ? "rgba(255,255,255,0.7)" : "var(--color-text-secondary)",
                    }}
                  >
                    {valg.beskrivelse}
                  </p>
                )}
              </div>
              {valgt && <Check size={18} color="#FFFFFF" strokeWidth={2.5} />}
            </button>
          );
        })}
      </div>

      {gjeldende.flervalg && (
        <button
          onClick={() => setAktivtSteg((n) => n + 1)}
          disabled={!(svar.prioriteringer ?? []).length}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "var(--space-2)",
            width: "100%",
            marginTop: "var(--space-6)",
            padding: "var(--space-4)",
            fontSize: "var(--font-body)",
            fontWeight: 600,
            color: "#FFFFFF",
            backgroundColor:
              (svar.prioriteringer ?? []).length
                ? "var(--color-accent)"
                : "var(--color-text-muted)",
            border: "none",
            borderRadius: "4px",
            cursor: (svar.prioriteringer ?? []).length ? "pointer" : "not-allowed",
          }}
        >
          Neste <ArrowRight size={16} />
        </button>
      )}

      {aktivtSteg > 0 && (
        <button
          onClick={() => setAktivtSteg((n) => n - 1)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-2)",
            marginTop: "var(--space-4)",
            padding: "var(--space-2) 0",
            fontSize: "var(--font-small)",
            color: "var(--color-text-muted)",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          <ArrowLeft size={14} /> Tilbake
        </button>
      )}
    </>
  );
}
