import Image from 'next/image';
import Link from 'next/link';
import { projects, Project } from '../data/projects';

// Varying heights for masonry effect
const imageHeights = [600, 900, 700, 800, 650, 750];

export default function PortfolioGrid() {
  return (
    <section id="work" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="break-inside-avoid mb-4 group cursor-pointer"
            >
              {/* Clickable Image Container with Hover Effect */}
              <Link href={`/projects/${project.id}`}>
                <div className="relative w-full overflow-hidden mb-4">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    width={800}
                    height={imageHeights[index % imageHeights.length]}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </Link>

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
