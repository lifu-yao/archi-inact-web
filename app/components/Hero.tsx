export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2400&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-35 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif mb-6">
          Elevating Spaces
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-12 font-light tracking-wide">
          Timeless Design for Modern Living
        </p>
        <a
          href="#work"
          className="inline-block px-8 py-3 border-2 border-white bg-transparent text-white font-medium tracking-wider hover:bg-white hover:text-black transition-all duration-300"
        >
          View Portfolio
        </a>
      </div>
    </section>
  );
}
