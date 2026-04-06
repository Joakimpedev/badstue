import Link from "next/link";
import { NavLinks } from "./NavLinks";
import { NavCTA } from "./NavCTA";

export function Nav() {
  return (
    <header
      style={{
        backgroundColor: "var(--color-white)",
        borderBottom: "1px solid var(--color-border)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 var(--space-6)",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <Link
          href="/"
          style={{
            fontWeight: 700,
            fontSize: "var(--font-h3)",
            color: "var(--color-text-primary)",
            textDecoration: "none",
            letterSpacing: "-0.02em",
            flexShrink: 0,
          }}
        >
          Badstue Mannen
        </Link>

        <NavLinks />

        <span className="nav-cta-desktop">
          <NavCTA />
        </span>
      </div>
    </header>
  );
}
