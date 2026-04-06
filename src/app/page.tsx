export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--color-bg)",
      }}
    >
      <div style={{ textAlign: "center", padding: "var(--space-12)" }}>
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
          Kommer snart
        </p>
        <h1
          style={{
            fontSize: "var(--font-h1)",
            fontWeight: 700,
            color: "var(--color-text-primary)",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
          }}
        >
          Badstue Mannen
        </h1>
        <p
          style={{
            marginTop: "var(--space-4)",
            fontSize: "var(--font-body)",
            color: "var(--color-text-secondary)",
          }}
        >
          Norske badstuer av høy kvalitet. Nettsiden er under bygging.
        </p>
      </div>
    </div>
  );
}
