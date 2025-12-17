import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          SERVICIILE <span className="text-don-red">NOASTRE</span>
        </h2>
        <div className="w-24 h-1 bg-don-red mx-auto rounded-full mb-6"></div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Oferim o gamă completă de servicii auto, de la întreținere curentă până la modificări complexe de performanță și estetică.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <div 
            key={service.id}
            className="group relative bg-don-gray border border-white/5 p-8 rounded-lg hover:border-don-red/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
          >
            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-don-red/0 to-don-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-don-dark rounded-lg flex items-center justify-center mb-6 text-don-red group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-don-red/30">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 font-display">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-6 text-sm leading-relaxed min-h-[60px]">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-don-red font-mono font-bold text-sm">
                  {service.priceStart}
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wider group-hover:text-white transition-colors">
                  Detalii &rarr;
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;