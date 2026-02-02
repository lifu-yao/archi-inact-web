export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Grid Layout: 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-bold tracking-wider mb-3">Archi Inact Studio</h3>
            <p className="text-gray-400 text-sm font-light">
              Designing for life.
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-medium tracking-wider mb-3 text-sm uppercase">
              Contact
            </h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                <a
                  href="mailto:hello@archiinact.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  hello@archiinact.com
                </a>
              </p>
              <p className="text-gray-400">
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors duration-300"
                >
                  +1 (234) 567-890
                </a>
              </p>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-medium tracking-wider mb-3 text-sm uppercase">
              Services
            </h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Interior Design</p>
              <p>Architecture</p>
              <p>Consultation</p>
            </div>
          </div>

          {/* Social Links Column */}
          <div>
            <h4 className="font-medium tracking-wider mb-3 text-sm uppercase">
              Follow Us
            </h4>
            <div className="space-y-2 text-sm">
              <p>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Instagram
                </a>
              </p>
              <p>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Pinterest
                </a>
              </p>
              <p>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} Archi Inact Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
