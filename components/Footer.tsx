import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-display font-bold italic tracking-wider text-white mb-6">
              DON <span className="text-don-red">GARAGE</span>
            </h2>
            <p className="text-gray-400 max-w-sm mb-6">
              Lideri în servicii auto premium, tuning și detailing. Pasiunea pentru mașini ne definește munca în fiecare zi.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-don-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-don-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-don-red transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Link-uri Rapide</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-don-red transition-colors">Acasă</a></li>
              <li><a href="#" className="text-gray-400 hover:text-don-red transition-colors">Servicii</a></li>
              <li><a href="#" className="text-gray-400 hover:text-don-red transition-colors">Portofoliu</a></li>
              <li><a href="#" className="text-gray-400 hover:text-don-red transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-don-red transition-colors">Termeni și Condiții</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Abonează-te pentru oferte exclusive și noutăți din lumea tuning-ului.</p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Adresa ta de email" 
                className="bg-white/5 border border-white/10 px-4 py-2 rounded text-white focus:outline-none focus:border-don-red transition-colors"
              />
              <button className="bg-don-red text-white py-2 rounded font-bold hover:bg-red-700 transition-colors uppercase text-sm tracking-wider">
                Mă Abonez
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Don Garage. Toate drepturile rezervate. Design îmbunătățit cu AI.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;