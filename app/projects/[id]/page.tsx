import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProject } from '@/app/data/projects';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProject(id);

  // Handle 404 if project not found
  if (!project) {
    notFound();
  }

  // Separate cover image from gallery images
  const [coverImage, ...galleryImages] = project.images;

  return (
    <div className="min-h-screen">
      {/* Hero Banner with First Image */}
      <div className="relative w-full h-[60vh]">
        <Image
          src={coverImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Project Info Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Left Column: Title and Description */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-serif mb-6">
                {project.title}
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Right Column: Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                  Category
                </h3>
                <p className="text-lg font-medium">{project.category}</p>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                  Location
                </h3>
                <p className="text-lg font-medium">{project.location}</p>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                  Year
                </h3>
                <p className="text-lg font-medium">{project.year}</p>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          {galleryImages.length > 0 && (
            <div>
              <h2 className="text-2xl font-serif mb-8">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative w-full h-96 overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${index + 2}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Back to Portfolio Link */}
          <div className="mt-16 text-center">
            <Link
              href="/#work"
              className="inline-block px-8 py-3 border-2 border-black bg-transparent hover:bg-black hover:text-white transition-all duration-300 tracking-wider"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
