export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  location: string;
  year: number;
  images: string[]; // First image is the cover
}

export const projects: Project[] = [
  {
    id: "modern-villa-residence",
    title: "Modern Villa Residence",
    category: "Residential",
    description: "A contemporary villa design featuring clean lines, expansive glass walls, and seamless indoor-outdoor living spaces. The architecture emphasizes natural light and sustainable materials.",
    location: "Los Angeles, CA",
    year: 2023,
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    ],
  },
  {
    id: "urban-office-complex",
    title: "Urban Office Complex",
    category: "Commercial",
    description: "A sustainable office building in the heart of the city, incorporating green terraces, energy-efficient systems, and flexible workspace design for modern collaborative environments.",
    location: "New York, NY",
    year: 2024,
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    ],
  },
  {
    id: "lakeside-retreat",
    title: "Lakeside Retreat",
    category: "Residential",
    description: "A minimalist lakeside home that blends harmoniously with its natural surroundings. Features include panoramic windows, natural wood finishes, and a floating deck design.",
    location: "Lake Tahoe, NV",
    year: 2022,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    ],
  },
  {
    id: "cultural-center",
    title: "Metropolitan Cultural Center",
    category: "Public",
    description: "A landmark cultural institution featuring innovative curved architecture, multiple performance spaces, and public galleries. The design creates a welcoming community hub.",
    location: "Chicago, IL",
    year: 2023,
    images: [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80",
      "https://images.unsplash.com/photo-1528318269466-69d920af5dad?w=1200&q=80",
    ],
  },
  {
    id: "sustainable-housing",
    title: "Sustainable Housing Development",
    category: "Residential",
    description: "An eco-friendly housing community designed with passive solar principles, rainwater harvesting, and community gardens. Combines modern aesthetics with environmental responsibility.",
    location: "Portland, OR",
    year: 2024,
    images: [
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?w=1200&q=80",
    ],
  },
  {
    id: "boutique-hotel",
    title: "Coastal Boutique Hotel",
    category: "Hospitality",
    description: "A luxury boutique hotel overlooking the ocean, featuring modern Mediterranean architecture with private terraces, infinity pool, and locally-sourced materials throughout.",
    location: "Miami, FL",
    year: 2023,
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80",
    ],
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
