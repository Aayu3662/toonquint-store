export interface Ebook {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  pages: number;
  format: string;
  badge: string;
  coverImage: string;
  highlights: string[];
  chapters: string[];
  sampleExcerpt: string;
}

export const ebooks: Ebook[] = [
  {
    id: 'eb1',
    slug: 'anime-collectors-field-guide',
    title: "The Anime Collector's Field Guide",
    subtitle: "A Complete Manual on Sourcing, Authenticating, and Preserving Rare Figures",
    description: "The definitive collector handbook covering figure scale evaluations, bootleg detection, box hologram verification, acrylic cabinet climate care, and long-term appraisal value.",
    price: "₹199",
    pages: 68,
    format: "Instant PDF Download",
    badge: "Bestselling Guide",
    coverImage: "/airo-assets/images/products/ebook-collector.jpg",
    highlights: [
      "Step-by-step hologram verification guide for Good Smile, Bandai & Kotobukiya",
      "Scale breakdown: 1/4, 1/7, 1/8 and prize figure market dynamics",
      "Chemical preservation: Preventing plasticizer seepage and UV color fading",
      "Customs, tax import, and safe parcel packaging checklist"
    ],
    chapters: [
      "Chapter 1: The Manufacturing Pipeline — From Clay Sculpt to Mold Injection",
      "Chapter 2: Scales vs. Prize Figures — Understanding the Quality Tiers",
      "Chapter 3: The Counterfeit Playbook — Detecting Bootlegs with 10 Precise Checks",
      "Chapter 4: Display & Preservation Science — Temperature, Dust & Acrylic Cases",
      "Chapter 5: Secondary Market Trading & Resale Grading Standards"
    ],
    sampleExcerpt: "When inspecting a figure in the secondary market, the first giveaway of a counterfeit is almost always the plasticizer odor. Genuine Japanese PVC uses calibrated non-toxic curing compounds, whereas bootleg recastings emit a sharp, pungent petroleum solvent smell..."
  },
  {
    id: 'eb2',
    slug: 'mastering-manga-character-archetypes',
    title: "Mastering Manga Character Archetypes",
    subtitle: "Narrative Mechanics, Foil Dynamics, and Visual Silhouette Design",
    description: "An editorial breakdown of the psychological and visual principles behind legendary anime heroes, charismatic anti-heroes, and iconic rival dynamics.",
    price: "₹249",
    pages: 84,
    format: "Instant PDF Download",
    badge: "Original Study",
    coverImage: "/airo-assets/images/products/ebook-archetypes.jpg",
    highlights: [
      "The Hero-Rival Dichotomy: Why Shonen stories depend on precise character foils",
      "The 'Dere' Spectrum: Psychology and narrative deployment of Tsundere, Kuudere & Yandere",
      "Visual Silhouette Theory: How iconic character designs communicate personality in 0.2 seconds",
      "Villain Masterminds: How to construct intellectual antagonists like Kira and Zero"
    ],
    chapters: [
      "Chapter 1: The Evolution of the Shonen Hero from Son Goku to Yuji Itadori",
      "Chapter 2: The Deuteragonist Rulebook — Designing the Perfect Foil",
      "Chapter 3: The Dere Classifications & Modern Subversions",
      "Chapter 4: Visual Anatomy of Silhouette & Color Coding in Character Design",
      "Chapter 5: The Sympathetic Monster — Writing Tragedy in Modern Antagonists"
    ],
    sampleExcerpt: "A great rival is never merely an obstacle; they are a living ideological critique of the protagonist. Sasuke exists to question Naruto's unexamined idealism, and Vegeta exists to demonstrate the limits of Saiyan aristocratic pride against Goku's egalitarian joy..."
  },
  {
    id: 'eb3',
    slug: 'anime-streetwear-styling-guide',
    title: "Anime Streetwear & Aesthetic Styling",
    subtitle: "From Graphic Hoodies to Neo-Tokyo Aesthetics: Elevating Fandom Fashion",
    description: "Learn how to wear anime apparel with sophisticated streetwear proportions, understand garment GSM weights, choose print methods, and preserve graphics wash after wash.",
    price: "₹149",
    pages: 52,
    format: "Instant PDF Download",
    badge: "Fashion Guide",
    coverImage: "/airo-assets/images/products/ebook-streetwear.jpg",
    highlights: [
      "Fabric science: GSM weight charts for summer tees vs winter hoodies",
      "Screen printing vs Direct-to-Film (DTF) longevity comparisons",
      "The Oversized Rule: Matching boxy cuts with silhouettes and footwear",
      "Wash care masterclass: Avoiding graphic cracking, peeling, and collar sag"
    ],
    chapters: [
      "Chapter 1: The Intersection of Japanese Streetwear Culture and Manga",
      "Chapter 2: Fabrics Demystified — GSM, Combed Cotton, and Terry Fleece",
      "Chapter 3: Proportional Styling — Balancing Oversized Drops with Footwear",
      "Chapter 4: Accessories as Accents — Enamel Pins, Bags, and Functional Caps",
      "Chapter 5: Longevity Care — Cold Wash Protocols and Storage Methods"
    ],
    sampleExcerpt: "The key to wearing anime graphics with maturity is contrast balance. If your hoodie features a bold, high-contrast back print, pair it with muted, utilitarian trousers in charcoal, olive, or raw black denim to let the graphic breathe..."
  }
];
