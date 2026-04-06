import { Hammer, MessageCircle, Truck } from "lucide-react";

const cards = [
  {
    icon: Hammer,
    title: "Norsk håndverk",
    text: "Alle badstuer er produsert med norske materialer og bygget for å tåle norsk klima i alle årstider.",
  },
  {
    icon: MessageCircle,
    title: "Ekspertveiledning",
    text: "Usikker på hva du trenger? Vi hjelper deg finne riktig modell, størrelse og tilbehør.",
  },
  {
    icon: Truck,
    title: "Rask levering",
    text: "Levering til hele Norge innen 2–4 uker. Gratis frakt på ordrer over 5 000 kr.",
  },
];

export function TrustCards() {
  return (
    <section style={{ backgroundColor: "var(--color-bg)", padding: "var(--space-16) var(--space-6)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="grid-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                style={{
                  backgroundColor: "var(--color-accent)",
                  borderRadius: "6px",
                  padding: "var(--space-8)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-4)",
                }}
              >
                <Icon size={22} color="rgba(255,255,255,0.7)" strokeWidth={1.5} />
                <div>
                  <p style={{ fontSize: "var(--font-h3)", fontWeight: 600, color: "#FFFFFF", marginBottom: "var(--space-2)", letterSpacing: "-0.01em" }}>
                    {card.title}
                  </p>
                  <p style={{ fontSize: "var(--font-small)", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                    {card.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
