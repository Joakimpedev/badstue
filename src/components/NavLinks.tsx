"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Hjem" },
  { href: "/produkter", label: "Produkter" },
  { href: "/henvendelse", label: "Finn din badstue" },
  { href: "/kontakt", label: "Kontakt" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        display: "flex",
        gap: "var(--space-8)",
        alignItems: "center",
      }}
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          style={{
            fontSize: "var(--font-small)",
            fontWeight: pathname === link.href ? 600 : 400,
            color:
              pathname === link.href
                ? "var(--color-text-primary)"
                : "var(--color-text-secondary)",
            textDecoration: "none",
            transition: "color 0.15s ease",
          }}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
