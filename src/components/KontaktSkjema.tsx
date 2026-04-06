"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function KontaktSkjema() {
  const [sendt, setSendt] = useState(false);
  const [sender, setSender] = useState(false);
  const [feil, setFeil] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSender(true);
    setFeil("");

    const form = e.currentTarget;
    const data = {
      navn: (form.elements.namedItem("navn") as HTMLInputElement).value,
      epost: (form.elements.namedItem("epost") as HTMLInputElement).value,
      telefon: (form.elements.namedItem("telefon") as HTMLInputElement).value,
      melding: (form.elements.namedItem("melding") as HTMLTextAreaElement).value,
      type: "kontaktskjema",
    };

    try {
      const res = await fetch("/api/henvendelse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
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
          padding: "var(--space-12)",
          backgroundColor: "var(--color-surface)",
          borderRadius: "8px",
          border: "1px solid var(--color-border)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            backgroundColor: "var(--color-accent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto var(--space-4)",
          }}
        >
          <Check size={20} color="#FFFFFF" strokeWidth={2.5} />
        </div>
        <p
          style={{
            fontSize: "var(--font-h3)",
            fontWeight: 600,
            color: "var(--color-text-primary)",
            marginBottom: "var(--space-2)",
          }}
        >
          Meldingen er sendt
        </p>
        <p style={{ fontSize: "var(--font-small)", color: "var(--color-text-secondary)" }}>
          Vi svarer innen én virkedag.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "var(--color-surface)",
        borderRadius: "8px",
        border: "1px solid var(--color-border)",
        padding: "var(--space-8)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        {[
          { name: "navn", label: "Navn", type: "text", required: true },
          { name: "epost", label: "E-post", type: "email", required: true },
          { name: "telefon", label: "Telefon (valgfritt)", type: "tel", required: false },
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
              {felt.label}
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

        <div>
          <label
            htmlFor="melding"
            style={{
              display: "block",
              fontSize: "var(--font-small)",
              fontWeight: 500,
              color: "var(--color-text-secondary)",
              marginBottom: "var(--space-2)",
            }}
          >
            Melding
          </label>
          <textarea
            id="melding"
            name="melding"
            rows={4}
            required
            style={{
              width: "100%",
              padding: "var(--space-3) var(--space-4)",
              fontSize: "var(--font-body)",
              color: "var(--color-text-primary)",
              backgroundColor: "var(--color-white)",
              border: "1px solid var(--color-border)",
              borderRadius: "4px",
              outline: "none",
              resize: "vertical",
            }}
          />
        </div>
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

      <button
        type="submit"
        disabled={sender}
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
          backgroundColor: sender ? "var(--color-text-muted)" : "var(--color-accent)",
          border: "none",
          borderRadius: "4px",
          cursor: sender ? "not-allowed" : "pointer",
        }}
      >
        {sender ? "Sender..." : "Send melding"}
        {!sender && <ArrowRight size={16} />}
      </button>
    </form>
  );
}
