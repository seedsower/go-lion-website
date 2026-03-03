import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

const TourDates = () => {
  const [showPastShows, setShowPastShows] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const upcomingShows = [
    {
      date: '2026-04-15',
      displayDate: 'APR 15',
      venue: 'The Rebel Room',
      city: 'Brooklyn, NY',
      status: 'on-sale',
    },
    {
      date: '2026-04-22',
      displayDate: 'APR 22',
      venue: 'Revolution Hall',
      city: 'Portland, OR',
      status: 'on-sale',
    },
    {
      date: '2026-05-01',
      displayDate: 'MAY 01',
      venue: 'The Underground',
      city: 'Atlanta, GA',
      status: 'on-sale',
    },
    {
      date: '2026-05-10',
      displayDate: 'MAY 10',
      venue: 'Conscious Festival',
      city: 'Los Angeles, CA',
      status: 'selling-fast',
    },
    {
      date: '2026-05-18',
      displayDate: 'MAY 18',
      venue: 'Roots & Culture Arena',
      city: 'Miami, FL',
      status: 'on-sale',
    },
    {
      date: '2026-06-03',
      displayDate: 'JUN 03',
      venue: 'Freedom Theater',
      city: 'Chicago, IL',
      status: 'on-sale',
    },
    {
      date: '2026-06-15',
      displayDate: 'JUN 15',
      venue: 'Liberation Music Fest',
      city: 'Oakland, CA',
      status: 'on-sale',
    },
  ];

  const pastShows = [
    {
      date: '2026-03-01',
      displayDate: 'MAR 01',
      venue: 'The Firehouse',
      city: 'Seattle, WA',
      status: 'past',
    },
    {
      date: '2026-02-20',
      displayDate: 'FEB 20',
      venue: 'Jah Live Club',
      city: 'San Francisco, CA',
      status: 'past',
    },
  ];

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
      id="tour"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-pan-black via-pan-green/10 to-pan-black"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-in' : 'opacity-0'}`}>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-gradient mb-6">
            Tour Dates
          </h2>
          <p className="text-xl md:text-2xl text-gray-300">Join the Movement Live</p>
          <div className="w-24 h-1 bg-gradient-to-r from-pan-red via-pan-gold to-pan-green mx-auto mt-6"></div>
        </div>

        {/* Upcoming Shows */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {upcomingShows.map((show, index) => (
              <div
                key={show.date}
                className={`group bg-pan-black/50 border-l-4 border-pan-gold rounded-lg overflow-hidden hover:bg-pan-gold/10 hover:border-pan-red transition-all duration-300 ${
                  isVisible ? 'animate-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.2 + index * 0.05}s` }}
              >
                <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  {/* Date */}
                  <div className="flex items-center gap-6">
                    <div className="text-center bg-pan-gold/10 border border-pan-gold/30 rounded-lg p-4 min-w-[100px]">
                      <Calendar className="text-pan-gold mx-auto mb-2" size={24} />
                      <div className="font-display font-bold text-2xl text-white">
                        {show.displayDate.split(' ')[1]}
                      </div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider">
                        {show.displayDate.split(' ')[0]}
                      </div>
                    </div>

                    {/* Venue Info */}
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-1 group-hover:text-pan-gold transition-colors">
                        {show.venue}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-300">
                        <MapPin size={16} className="text-pan-gold" />
                        <span>{show.city}</span>
                      </div>
                      {show.status === 'selling-fast' && (
                        <span className="inline-block mt-2 px-3 py-1 bg-pan-red/20 border border-pan-red rounded-full text-xs text-pan-red font-semibold uppercase tracking-wider">
                          Selling Fast
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Tickets Button */}
                  <button className="btn-secondary whitespace-nowrap inline-flex items-center justify-center gap-2">
                    Get Tickets
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Request Show Form */}
          <div className={`mt-12 bg-gradient-to-br from-pan-gold/10 to-pan-green/10 border border-pan-gold/30 rounded-lg p-8 ${isVisible ? 'animate-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 text-center">
              No Shows Near You?
            </h3>
            <p className="text-gray-300 text-center mb-6">
              Request Go Lion to perform in your city
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Your City"
                className="flex-1 px-4 py-3 bg-pan-black/50 border border-pan-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pan-gold transition-colors"
              />
              <button type="submit" className="btn-primary">
                Request Show
              </button>
            </form>
          </div>

          {/* Past Shows Toggle */}
          <div className={`mt-12 text-center ${isVisible ? 'animate-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <button
              onClick={() => setShowPastShows(!showPastShows)}
              className="text-gray-400 hover:text-pan-gold transition-colors font-semibold uppercase tracking-wider text-sm"
            >
              {showPastShows ? 'Hide' : 'View'} Past Shows
            </button>
          </div>

          {/* Past Shows */}
          {showPastShows && (
            <div className="mt-8 space-y-4">
              {pastShows.map((show, index) => (
                <div
                  key={show.date}
                  className="bg-pan-black/30 border-l-4 border-gray-700 rounded-lg overflow-hidden opacity-60"
                >
                  <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-center gap-6 flex-1">
                      <div className="text-center bg-gray-800/30 border border-gray-700 rounded-lg p-4 min-w-[100px]">
                        <div className="font-display font-bold text-xl text-gray-400">
                          {show.displayDate.split(' ')[1]}
                        </div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider">
                          {show.displayDate.split(' ')[0]}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-display font-bold text-gray-400 mb-1">
                          {show.venue}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-500">
                          <MapPin size={16} />
                          <span>{show.city}</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-gray-500 uppercase tracking-wider text-sm font-semibold">
                      Past Show
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Map Visualization Placeholder */}
        <div className={`mt-16 max-w-6xl mx-auto ${isVisible ? 'animate-in' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          <div className="aspect-[16/9] bg-pan-black/50 border border-pan-gold/30 rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-pan-gold mx-auto mb-4" size={48} />
                <p className="text-gray-400 text-lg">Interactive Tour Map Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourDates;
