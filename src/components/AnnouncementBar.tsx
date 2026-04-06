import { Truck, Award, Phone, Clock } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div
      style={{
        backgroundColor: "var(--color-accent)",
        color: "var(--color-white)",
        padding: "var(--space-2) var(--space-4)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          gap: "var(--space-8)",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-2)",
            fontSize: "var(--font-small)",
          }}
        >
          <Truck size={14} />
          Gratis frakt over 5 000 kr
        </span>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-2)",
            fontSize: "var(--font-small)",
          }}
        >
          <Award size={14} />
          Norsk kvalitet
        </span>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-2)",
            fontSize: "var(--font-small)",
          }}
        >
          <Clock size={14} />
          Levering 2–4 uker
        </span>
        <a
          href="tel:+4700000000"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-2)",
            fontSize: "var(--font-small)",
            color: "var(--color-white)",
            textDecoration: "none",
          }}
        >
          <Phone size={14} />
          +47 000 00 000
        </a>
      </div>
    </div>
  );
}
