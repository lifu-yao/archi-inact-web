'use client';

import { useState, FormEvent } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Message Sent!');
    // Reset form
    setFormData({
      name: '',
      email: '',
      service: '',
      budget: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-serif mb-6">
                Start Your Project
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We are currently accepting new projects for Q3 2026. Please fill
                out the form to inquire.
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                Email Us
              </p>
              <a
                href="mailto:hello@archiinact.com"
                className="text-2xl md:text-3xl font-medium hover:text-gray-600 transition-colors"
              >
                hello@archiinact.com
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none py-3 text-lg transition-colors"
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none py-3 text-lg transition-colors"
                />
              </div>

              {/* Service Dropdown */}
              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none py-3 text-lg transition-colors cursor-pointer"
                >
                  <option value="" disabled>
                    Service Interested
                  </option>
                  <option value="Interior Design">Interior Design</option>
                  <option value="Architecture">Architecture</option>
                  <option value="Consultation">Consultation</option>
                </select>
              </div>

              {/* Budget Dropdown */}
              <div>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none py-3 text-lg transition-colors cursor-pointer"
                >
                  <option value="" disabled>
                    Estimated Budget
                  </option>
                  <option value="$50k-$100k">$50k-$100k</option>
                  <option value="$100k-$500k">$100k-$500k</option>
                  <option value="$500k+">$500k+</option>
                </select>
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project"
                  rows={5}
                  required
                  className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none py-3 text-lg transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-12 py-4 bg-black text-white tracking-wider hover:bg-gray-800 transition-colors duration-300"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
