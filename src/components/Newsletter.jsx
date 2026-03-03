import React, { useState, useEffect, useRef } from 'react';
import { Mail, Check } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 5000);
    }
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

  return (
    <section
      id="newsletter"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-pan-black via-pan-red/10 to-pan-black"
    >
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Main Newsletter Card */}
          <div className={`bg-gradient-to-br from-pan-red via-pan-gold to-pan-green p-1 rounded-2xl ${isVisible ? 'animate-in' : 'opacity-0'}`}>
            <div className="bg-pan-black rounded-2xl p-8 md:p-12 text-center noise-overlay">
              {/* Lion Icon */}
              <div className="mb-8 flex justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-pan-gold to-pan-red rounded-full flex items-center justify-center animate-pulse-slow">
                  <svg viewBox="0 0 100 100" className="w-16 h-16 text-pan-black" fill="currentColor">
                    <path d="M50 20 L35 35 L30 25 L25 35 L20 30 L25 45 L20 50 L30 55 L25 65 L35 60 L40 70 L45 60 L50 65 L55 60 L60 70 L65 60 L70 65 L75 55 L80 50 L75 45 L80 30 L75 35 L70 25 L65 35 L50 20 Z M50 40 C55 40 60 45 60 50 C60 55 55 60 50 60 C45 60 40 55 40 50 C40 45 45 40 50 40 Z" />
                  </svg>
                </div>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                Join the Pride
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Enter the Lion's Den
              </p>

              {/* Benefits List */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
                {[
                  { icon: '🎵', text: 'Exclusive unreleased tracks' },
                  { icon: '🎟️', text: 'Early access to tour tickets' },
                  { icon: '📰', text: 'Behind-the-scenes content' },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-pan-black/30 border border-pan-gold/20 rounded-lg p-4"
                  >
                    <span className="text-3xl">{benefit.icon}</span>
                    <span className="text-gray-300 font-semibold">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* Email Form */}
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-pan-black/50 border border-pan-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pan-gold transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-primary whitespace-nowrap"
                    >
                      Join Now
                    </button>
                  </div>
                  <p className="text-sm text-gray-400 mt-4">
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </form>
              ) : (
                <div className="max-w-xl mx-auto animate-in">
                  <div className="flex items-center justify-center gap-3 bg-pan-green/20 border border-pan-green rounded-lg p-6">
                    <div className="w-12 h-12 bg-pan-green rounded-full flex items-center justify-center">
                      <Check size={28} className="text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-xl font-bold text-white mb-1">
                        Welcome to the Pride!
                      </p>
                      <p className="text-gray-300">
                        Check your inbox for a confirmation email.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Additional Info */}
              <div className="mt-12 pt-8 border-t border-pan-gold/20">
                <p className="text-gray-400 text-lg italic">
                  "The revolution doesn't need followers. It needs participants."
                </p>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className={`mt-8 text-center ${isVisible ? 'animate-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <p className="text-gray-400">
              Join <span className="text-pan-gold font-bold">12,847</span> revolutionaries already in the movement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
