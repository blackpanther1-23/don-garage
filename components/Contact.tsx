import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            CONTACT & <span className="text-don-red">LOCAȚIE</span>
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Suntem aici pentru a oferi mașinii tale tratamentul pe care îl merită. 
            Contactează-ne pentru programări sau vizitează-ne la garaj.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-don-gray rounded-lg flex items-center justify-center text-don-red shrink-0 border border-white/10">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Adresa</h3>
                <p className="text-gray-400">Strada Performanței nr. 1<br />Sector 1, București</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-don-gray rounded-lg flex items-center justify-center text-don-red shrink-0 border border-white/10">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Telefon</h3>
                <p className="text-gray-400">0722 000 000</p>
                <p className="text-sm text-gray-500 mt-1">Disponibil și pe WhatsApp</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-don-gray rounded-lg flex items-center justify-center text-don-red shrink-0 border border-white/10">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Email</h3>
                <p className="text-gray-400">contact@dongarage.ro</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-don-gray rounded-lg flex items-center justify-center text-don-red shrink-0 border border-white/10">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Program</h3>
                <p className="text-gray-400">Luni - Vineri: 09:00 - 18:00</p>
                <p className="text-gray-400">Sâmbătă: 10:00 - 14:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder / Form */}
        <div className="bg-don-gray rounded-lg border border-white/10 p-1 overflow-hidden h-[500px] relative">
            <div className="w-full h-full bg-[#2a2a2a] flex items-center justify-center flex-col gap-4">
                <MapPin size={48} className="text-don-red animate-bounce" />
                <p className="text-gray-400 text-center px-6">
                    Harta Google Maps ar fi integrată aici.<br />
                    <span className="text-sm text-gray-500">(Placeholder Demo)</span>
                </p>
                <button className="mt-4 bg-white text-don-dark px-6 py-2 font-bold rounded hover:bg-gray-200 transition-colors">
                    Deschide în Waze
                </button>
            </div>
            {/* Artistic overlay */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-don-red to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;