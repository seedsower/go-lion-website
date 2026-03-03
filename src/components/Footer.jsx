import React from 'react';
import { Instagram, Facebook, Youtube, Music2, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Music: [
      { label: 'Album', href: '#album' },
      { label: 'Listen', href: '#music-player' },
      { label: 'Videos', href: '#videos' },
      { label: 'Lyrics', href: '#lyrics' },
    ],
    Tour: [
      { label: 'Tour Dates', href: '#tour' },
      { label: 'Request Show', href: '#tour' },
      { label: 'Past Shows', href: '#tour' },
    ],
    Shop: [
      { label: 'Merch', href: '#merch' },
      { label: 'Vinyl Records', href: '#merch' },
      { label: 'Apparel', href: '#merch' },
    ],
    About: [
      { label: 'The Band', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'Press Kit', href: '#contact' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'Facebook', icon: Facebook, url: '#' },
    { name: 'YouTube', icon: Youtube, url: '#' },
    { name: 'TikTok', icon: Music2, url: '#' },
  ];

  return (
    <footer className="relative bg-pan-black border-t border-pan-gold/20">
      {/* Main Footer Content */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="lg:col-span-2">
            <a href="#hero" className="inline-block mb-4">
              <h3 className="text-4xl font-display font-bold text-gradient">
                GO LION
              </h3>
            </a>
            <p className="text-gray-400 mb-6 italic">
              "We come to burn the throne. Not with hate, but love alone."
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-pan-black/50 border border-pan-gold/30 rounded-lg flex items-center justify-center hover:bg-pan-gold hover:border-pan-gold transition-all group"
                  aria-label={social.name}
                >
                  <social.icon
                    size={20}
                    className="text-pan-gold group-hover:text-pan-black transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-pan-gold font-display font-bold text-lg mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pan-gold/30 to-transparent"></div>
          <div className="w-8 h-8 bg-gradient-to-br from-pan-red to-pan-gold rounded-full flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-5 h-5 text-pan-black" fill="currentColor">
              <path d="M50 30 L40 40 L35 35 L30 40 L40 50 L30 60 L35 65 L40 60 L50 70 L60 60 L65 65 L70 60 L60 50 L70 40 L65 35 L60 40 L50 30 Z" />
            </svg>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pan-gold/30 to-transparent"></div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <p>© {currentYear} Go Lion / Burning Throne Records</p>
            <a href="#" className="hover:text-pan-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-pan-gold transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-pan-gold transition-colors">
              Accessibility
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <Heart size={16} className="text-pan-red fill-pan-red animate-pulse" />
            <span>and revolution</span>
          </div>
        </div>

        {/* Final Quote */}
        <div className="mt-12 text-center">
          <p className="text-pan-gold italic text-lg font-semibold">
            "We come to burn the throne. Not with hate, but love alone."
          </p>
        </div>
      </div>

      {/* Gradient Overlay at Bottom */}
      <div className="h-1 bg-gradient-to-r from-pan-red via-pan-gold to-pan-green"></div>
    </footer>
  );
};

export default Footer;
