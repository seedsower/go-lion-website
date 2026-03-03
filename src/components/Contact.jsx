import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Download, Instagram, Facebook, Youtube, Music2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: '#', handle: '@golionband' },
    { name: 'Facebook', icon: Facebook, url: '#', handle: '/golionmusic' },
    { name: 'YouTube', icon: Youtube, url: '#', handle: '/golionofficial' },
    { name: 'TikTok', icon: Music2, url: '#', handle: '@golion' },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-pan-black via-pan-green/10 to-pan-black"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-in' : 'opacity-0'}`}>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-gradient mb-6">
            Connect
          </h2>
          <p className="text-xl md:text-2xl text-gray-300">Get in Touch with Go Lion</p>
          <div className="w-24 h-1 bg-gradient-to-r from-pan-red via-pan-gold to-pan-green mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`${isVisible ? 'animate-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            {/* Booking */}
            <div className="mb-8 bg-pan-black/50 border border-pan-gold/20 rounded-lg p-8 hover:border-pan-gold transition-all duration-300">
              <h3 className="text-2xl font-display font-bold text-pan-gold mb-4">
                Booking & Management
              </h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-pan-gold" />
                  <a href="mailto:booking@golion.com" className="hover:text-pan-gold transition-colors">
                    booking@golion.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-pan-gold" />
                  <a href="tel:+15551234567" className="hover:text-pan-gold transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>

            {/* Press Kit */}
            <div className="mb-8 bg-pan-black/50 border border-pan-gold/20 rounded-lg p-8 hover:border-pan-gold transition-all duration-300">
              <h3 className="text-2xl font-display font-bold text-pan-gold mb-4">
                Press & Media
              </h3>
              <p className="text-gray-300 mb-6">
                Download our electronic press kit for high-resolution photos, biographies, and promotional materials.
              </p>
              <button className="btn-secondary inline-flex items-center gap-2">
                <Download size={20} />
                Download Press Kit
              </button>
            </div>

            {/* Label & Distribution */}
            <div className="mb-8 bg-pan-black/50 border border-pan-gold/20 rounded-lg p-8 hover:border-pan-gold transition-all duration-300">
              <h3 className="text-2xl font-display font-bold text-pan-gold mb-4">
                Label
              </h3>
              <p className="text-gray-300 mb-2">
                <span className="font-semibold">Burning Throne Records</span>
              </p>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={20} className="text-pan-gold" />
                <a href="mailto:info@burningthrone.com" className="hover:text-pan-gold transition-colors">
                  info@burningthrone.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-pan-black/50 border border-pan-gold/20 rounded-lg p-8">
              <h3 className="text-2xl font-display font-bold text-pan-gold mb-6">
                Follow the Movement
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-pan-black/50 border border-pan-gold/30 rounded-lg hover:bg-pan-gold/10 hover:border-pan-gold transition-all group"
                  >
                    <social.icon size={24} className="text-pan-gold group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-white group-hover:text-pan-gold transition-colors">
                        {social.name}
                      </div>
                      <div className="text-xs text-gray-400">{social.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="bg-pan-black/50 border border-pan-gold/20 rounded-lg p-8 md:p-10">
              <h3 className="text-3xl font-display font-bold text-white mb-6">
                Send Us a Message
              </h3>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-pan-black/50 border border-pan-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pan-gold transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-pan-black/50 border border-pan-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pan-gold transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-300 font-semibold mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-pan-black/50 border border-pan-gold/30 rounded-lg text-white focus:outline-none focus:border-pan-gold transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="press">Press & Media</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="general">General Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 bg-pan-black/50 border border-pan-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pan-gold transition-colors resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="animate-in text-center py-12">
                  <div className="w-20 h-20 bg-pan-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail size={40} className="text-white" />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-white mb-3">
                    Message Sent!
                  </h4>
                  <p className="text-gray-300">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
