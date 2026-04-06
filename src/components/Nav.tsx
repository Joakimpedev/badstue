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
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 700,
            fontSize: "var(--font-h3)",
            color: "var(--color-text-primary)",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          Badstue Mannen
        </Link>

        <NavLinks />

        <NavCTA />
      </div>
    </header>
  );
}
