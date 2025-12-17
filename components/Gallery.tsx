import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Toate');
  
  const filters = ['Toate', ...Array.from(new Set(GALLERY_ITEMS.map(item => item.category)))];
  
  const filteredItems = activeFilter === 'Toate' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <div className="bg-don-gray py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
              PROIECTE <span className="text-don-red">RECENTE</span>
            </h2>
            <p className="text-gray-400">Calitatea muncii noastre vorbește de la sine.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                  activeFilter === filter 
                    ? 'bg-don-red text-white' 
                    : 'bg-don-dark text-gray-400 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative h-64 overflow-hidden rounded-lg cursor-pointer"
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-don-red text-xs font-bold uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="text-white font-bold text-lg font-display">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;