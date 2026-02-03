import Image from 'next/image';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-serif mb-12 text-center">
            Our Services
          </h1>

          {/* Portrait Image */}
          <div className="relative w-full max-w-md h-[600px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
              alt="Architectural plans and materials"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Download Button */}
          <a
            href="/service-guide.pdf"
            target="_blank"
            download="service-guide.pdf"
            className="mt-8 px-12 py-4 bg-black text-white tracking-wider hover:bg-gray-800 transition-colors duration-300"
          >
            Download Service Guide (PDF)
          </a>

          {/* Optional: Service Description */}
          <div className="mt-16 max-w-2xl text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              We offer comprehensive architectural and interior design services,
              from initial consultation to final execution. Our team specializes
              in residential, commercial, and public spaces, bringing your vision
              to life with precision and creativity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
