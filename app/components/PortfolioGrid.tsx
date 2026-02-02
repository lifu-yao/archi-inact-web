import Image from 'next/image';

// TypeScript interface for Project
interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  width: number;
  height: number;
}

// Mock data array with 6 projects (varying heights for masonry effect)
const projects: Project[] = [
  {
    id: 1,
    title: 'Modern Minimalist Living',
    category: 'Residential',
    imageUrl: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1200&auto=format&fit=crop',
    width: 800,
    height: 600,
  },
  {
    id: 2,
    title: 'Scandinavian Kitchen',
    category: 'Interior Design',
    imageUrl: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?q=80&w=1200&auto=format&fit=crop',
    width: 800,
    height: 900,
  },
  {
    id: 3,
    title: 'Contemporary Office Space',
    category: 'Commercial',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    width: 800,
    height: 700,
  },
  {
    id: 4,
    title: 'Luxury Bedroom Suite',
    category: 'Residential',
    imageUrl: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1200&auto=format&fit=crop',
    width: 800,
    height: 800,
  },
  {
    id: 5,
    title: 'Industrial Loft',
    category: 'Renovation',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
    width: 800,
    height: 650,
  },
  {
    id: 6,
    title: 'Elegant Dining Room',
    category: 'Interior Design',
    imageUrl: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1200&auto=format&fit=crop',
    width: 800,
    height: 750,
  },
];

export default function PortfolioGrid() {
  return (
    <section id="work" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="break-inside-avoid mb-4 group cursor-pointer"
            >
              {/* Image Container with Hover Effect */}
              <div className="relative w-full overflow-hidden mb-4">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={project.width}
                  height={project.height}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Title and Category */}
              <div className="space-y-1">
                <h3 className="text-xl font-medium tracking-wide">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm tracking-wider uppercase">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
