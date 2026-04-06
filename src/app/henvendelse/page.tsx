import { HenvendelseFlow } from "@/components/henvendelse/HenvendelseFlow";

export default function HenvendelsePage() {
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
            marginBottom: "var(--space-10)",
          }}
        >
          Svar på noen enkle spørsmål — så tar vi kontakt med en anbefaling.
          Det tar under 2 minutter.
        </p>
        <HenvendelseFlow />
      </div>
    </div>
  );
}
