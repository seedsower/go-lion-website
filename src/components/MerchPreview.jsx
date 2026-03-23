import React, { useEffect, useRef, useState } from 'react';
import { ShoppingCart, ExternalLink } from 'lucide-react';

const MerchPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const merchItems = [
    {
      id: 1,
      name: 'Burn the Throne Vinyl - Limited Edition',
      price: '$34.99',
      image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=500&h=500&fit=crop',
      category: 'Music',
      badge: 'Limited',
    },
    {
      id: 2,
      name: 'Go Lion Logo T-Shirt',
      price: '$29.99',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
      category: 'Apparel',
    },
    {
      id: 3,
      name: 'Burn the Throne Hoodie',
      price: '$54.99',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
      category: 'Apparel',
    },
    {
      id: 4,
      name: 'Album Art Poster Print',
      price: '$19.99',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&h=500&fit=crop',
      category: 'Art',
    },
    {
      id: 5,
      name: 'Lion Pride Snapback',
      price: '$24.99',
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=500&fit=crop',
      category: 'Accessories',
    },
    {
      id: 6,
      name: 'Revolution Pin Set',
      price: '$12.99',
      image: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=500&h=500&fit=crop',
      category: 'Accessories',
    },
    {
      id: 7,
      name: 'Go Lion "Liberation Frequency" T-Shirt',
      price: '$29.99',
      image: '/GO LION/liberationtee.png',
      category: 'Apparel',
      badge: 'New',
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
      id="merch"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-pan-black via-pan-red/10 to-pan-black"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-in' : 'opacity-0'}`}>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-gradient mb-6">
            Merch
          </h2>
          <p className="text-xl md:text-2xl text-gray-300">Wear the Movement</p>
          <div className="w-24 h-1 bg-gradient-to-r from-pan-red via-pan-gold to-pan-green mx-auto mt-6"></div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {merchItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative bg-pan-black/50 border border-pan-gold/20 rounded-lg overflow-hidden hover:border-pan-gold hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] transition-all duration-300 ${
                isVisible ? 'animate-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Badge */}
              {item.badge && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-pan-red rounded-full text-xs font-bold text-white uppercase tracking-wider shadow-lg">
                  {item.badge}
                </div>
              )}

              {/* Image */}
              <div className="aspect-square relative overflow-hidden bg-gray-900">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pan-black via-transparent to-transparent opacity-60"></div>

                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-pan-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="btn-primary inline-flex items-center gap-2">
                    <ShoppingCart size={20} />
                    Quick View
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="text-xs text-pan-gold uppercase tracking-wider mb-2 font-semibold">
                  {item.category}
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-pan-gold transition-colors">
                  {item.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-display font-bold text-pan-gold">
                    {item.price}
                  </span>
                  <button className="p-2 bg-pan-gold/10 border border-pan-gold/30 rounded-lg hover:bg-pan-gold hover:border-pan-gold transition-all group/btn">
                    <ShoppingCart size={20} className="text-pan-gold group-hover/btn:text-pan-black transition-colors" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shop Full Collection CTA */}
        <div className={`text-center ${isVisible ? 'animate-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <button className="btn-primary inline-flex items-center gap-2">
            <ShoppingCart size={20} />
            Shop Full Collection
            <ExternalLink size={20} />
          </button>
          <p className="text-gray-400 mt-4">
            Free shipping on orders over $75 • 100% organic cotton apparel
          </p>
        </div>
      </div>
    </section>
  );
};

export default MerchPreview;
