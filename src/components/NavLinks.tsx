"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Hjem" },
  { href: "/produkter", label: "Produkter" },
  { href: "/henvendelse", label: "Finn din badstue" },
  { href: "/kontakt", label: "Kontakt" },
];

export function NavLinks() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop */}
      <nav className="nav-links-desktop" style={{ gap: "var(--space-8)", alignItems: "center" }}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontSize: "var(--font-small)",
              fontWeight: pathname === link.href ? 600 : 400,
              color: pathname === link.href ? "var(--color-text-primary)" : "var(--color-text-secondary)",
              textDecoration: "none",
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Hamburger */}
      <button
        className="nav-hamburger"
        onClick={() => setOpen((v) => !v)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "var(--space-2)",
          color: "var(--color-text-primary)",
          alignItems: "center",
        }}
        aria-label="Meny"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobil-meny */}
      <div
        className={`nav-mobile-menu${open ? " open" : ""}`}
        style={{ position: "absolute", top: "100%", left: 0, right: 0, zIndex: 100 }}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            style={{
              padding: "var(--space-3) 0",
              fontSize: "var(--font-body)",
              fontWeight: pathname === link.href ? 600 : 400,
              color: "var(--color-text-primary)",
              textDecoration: "none",
              borderBottom: "1px solid var(--color-border)",
            }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/henvendelse"
          onClick={() => setOpen(false)}
          style={{
            display: "block",
            textAlign: "center",
            marginTop: "var(--space-3)",
            backgroundColor: "var(--color-accent)",
            color: "#FFFFFF",
            padding: "var(--space-3)",
            borderRadius: "4px",
            fontSize: "var(--font-body)",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Send forespørsel
        </Link>
      </div>
    </>
  );
}
