export type Produkt = {
  slug: string;
  navn: string;
  kategori: "utebadstue" | "innebadstue" | "tilbehor";
  prisKr: number;
  kortBeskrivelse: string;
  beskrivelse: string;
  spesifikasjoner: { label: string; verdi: string }[];
  inkludert: string[];
  antallBilder: number; // plassholder — byttes ut med ekte bilder
};

export const produkter: Produkt[] = [
  {
    slug: "fjord-s",
    navn: "Fjord S",
    kategori: "utebadstue",
    prisKr: 69900,
    kortBeskrivelse: "Kompakt utebadstue for 2–4 personer",
    beskrivelse:
      "Fjord S er vår mest populære modell for deg som ønsker en klassisk norsk utebadstue uten å ta for mye plass. Bygget med termotre og isolert for bruk hele året.",
    spesifikasjoner: [
      { label: "Innvendig størrelse", verdi: "180 × 150 cm" },
      { label: "Høyde innvendig", verdi: "200 cm" },
      { label: "Kapasitet", verdi: "2–4 personer" },
      { label: "Materiale", verdi: "Termotre (ask)" },
      { label: "Isolasjon", verdi: "150 mm mineralull" },
      { label: "Oppvarmingstid", verdi: "45–60 min" },
      { label: "Ovn inkludert", verdi: "Nei (se tilbehør)" },
      { label: "Levering", verdi: "2–4 uker" },
    ],
    inkludert: [
      "Komplett kabinhus med tak og gulv",
      "2 benker (1 øvre, 1 nedre)",
      "Vindu med herdet glass",
      "Dør med glassfelt",
      "Installasjonsveiledning",
    ],
    antallBilder: 5,
  },
  {
    slug: "fjord-l",
    navn: "Fjord L",
    kategori: "utebadstue",
    prisKr: 99900,
    kortBeskrivelse: "Romslig utebadstue for 4–6 personer",
    beskrivelse:
      "Fjord L gir deg god plass til hele familien eller vennegjeng. Større benkeareal og ekstra takhøyde gjør badstueopplevelsen mer komfortabel.",
    spesifikasjoner: [
      { label: "Innvendig størrelse", verdi: "240 × 180 cm" },
      { label: "Høyde innvendig", verdi: "210 cm" },
      { label: "Kapasitet", verdi: "4–6 personer" },
      { label: "Materiale", verdi: "Termotre (ask)" },
      { label: "Isolasjon", verdi: "150 mm mineralull" },
      { label: "Oppvarmingstid", verdi: "60–75 min" },
      { label: "Ovn inkludert", verdi: "Nei (se tilbehør)" },
      { label: "Levering", verdi: "2–4 uker" },
    ],
    inkludert: [
      "Komplett kabinhus med tak og gulv",
      "3 benker (2 øvre, 1 nedre)",
      "To vinduer med herdet glass",
      "Dør med glassfelt",
      "Installasjonsveiledning",
    ],
    antallBilder: 5,
  },
  {
    slug: "fjord-xl",
    navn: "Fjord XL",
    kategori: "utebadstue",
    prisKr: 139900,
    kortBeskrivelse: "Premium utebadstue for 6–8 personer",
    beskrivelse:
      "Fjord XL er vår flaggskip-modell. Panoramavindu, panoramadør og premium finish gjør dette til en badstue du vil vise frem.",
    spesifikasjoner: [
      { label: "Innvendig størrelse", verdi: "300 × 210 cm" },
      { label: "Høyde innvendig", verdi: "220 cm" },
      { label: "Kapasitet", verdi: "6–8 personer" },
      { label: "Materiale", verdi: "Termotre (ask) + svart kledning utvendig" },
      { label: "Isolasjon", verdi: "200 mm mineralull" },
      { label: "Oppvarmingstid", verdi: "75–90 min" },
      { label: "Ovn inkludert", verdi: "Nei (se tilbehør)" },
      { label: "Levering", verdi: "3–5 uker" },
    ],
    inkludert: [
      "Komplett kabinhus med tak og gulv",
      "L-formet benkearrangement",
      "Panoramavindu 120×80 cm",
      "Panoramadør med fullt glassfelt",
      "Hengsel og beslag i rustfritt stål",
      "Installasjonsveiledning",
    ],
    antallBilder: 6,
  },
  {
    slug: "nord-kompakt",
    navn: "Nord Kompakt",
    kategori: "innebadstue",
    prisKr: 39900,
    kortBeskrivelse: "Innebadstue for bad eller kjeller, 2 personer",
    beskrivelse:
      "Nord Kompakt er perfekt for deg som vil ha badstue innendørs. Passer i de fleste bad og kjellere, og krever kun 220V uttak.",
    spesifikasjoner: [
      { label: "Innvendig størrelse", verdi: "120 × 90 cm" },
      { label: "Høyde innvendig", verdi: "195 cm" },
      { label: "Kapasitet", verdi: "1–2 personer" },
      { label: "Materiale", verdi: "Kanadisk hemlock" },
      { label: "Strøm", verdi: "220V, 3.5 kW" },
      { label: "Oppvarmingstid", verdi: "20–30 min" },
      { label: "Ovn inkludert", verdi: "Ja — elektrisk 3.5 kW" },
      { label: "Levering", verdi: "2–3 uker" },
    ],
    inkludert: [
      "Komplett kabin, monteres selv",
      "Elektrisk ovn 3.5 kW med styrepanel",
      "2 benker",
      "Interiørbelysning",
      "Monteringsveiledning",
    ],
    antallBilder: 4,
  },
  {
    slug: "harvia-ovn",
    navn: "Harvia M3 Vedovn",
    kategori: "tilbehor",
    prisKr: 8900,
    kortBeskrivelse: "Klassisk vedovn for utebadstue, opptil 13 m³",
    beskrivelse:
      "Harvia M3 er en av markedets mest populære vedovner for utebadstue. Enkel å installere og gir en ekte, naturlig badstueopplevelse.",
    spesifikasjoner: [
      { label: "Passende romvolum", verdi: "Opptil 13 m³" },
      { label: "Vekt", verdi: "52 kg" },
      { label: "Steinkapasitet", verdi: "20 kg" },
      { label: "Materiale", verdi: "Rustfritt stål" },
      { label: "Røykrørdiameter", verdi: "115 mm" },
      { label: "Merke", verdi: "Harvia (Finland)" },
    ],
    inkludert: [
      "Vedovn",
      "20 kg badstuestein",
      "Monteringsveiledning",
    ],
    antallBilder: 3,
  },
  {
    slug: "tilbehorspakke-basis",
    navn: "Tilbehørspakke Basis",
    kategori: "tilbehor",
    prisKr: 1490,
    kortBeskrivelse: "Alt du trenger for første badstueopplevelse",
    beskrivelse:
      "Tilbehørspakke Basis inneholder det viktigste for å komme i gang: øse, bøtte, termometer og badstueduft.",
    spesifikasjoner: [
      { label: "Innhold", verdi: "4 produkter" },
      { label: "Materiale øse/bøtte", verdi: "Olje ask" },
      { label: "Termometer", verdi: "Analog, 0–120°C" },
    ],
    inkludert: [
      "Øse i ask",
      "Bøtte i ask (5L)",
      "Badstue-termometer",
      "Badstueduft 250ml (valgfri duft)",
    ],
    antallBilder: 3,
  },
];

export function getProdukter(kategori?: string) {
  if (!kategori) return produkter;
  return produkter.filter((p) => p.kategori === kategori);
}

export function getProdukt(slug: string) {
  return produkter.find((p) => p.slug === slug) ?? null;
}
