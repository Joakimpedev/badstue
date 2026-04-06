"use client";

import Link from "next/link";

export function NavCTA() {
  return (
    <Link
      href="/henvendelse"
      className="nav-cta"
      style={{
        backgroundColor: "var(--color-accent)",
        color: "var(--color-white)",
        padding: "var(--space-2) var(--space-6)",
        borderRadius: "4px",
        fontSize: "var(--font-small)",
        fontWeight: 500,
        textDecoration: "none",
        whiteSpace: "nowrap",
        transition: "background-color 0.15s ease",
        display: "inline-block",
      }}
    >
      Send forespørsel
    </Link>
  );
}
