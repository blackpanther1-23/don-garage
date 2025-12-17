import { Wrench, Gauge, SprayCan, Cpu, Car, Battery } from 'lucide-react';
import { ServiceItem, GalleryItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Chip Tuning & Remapare',
    description: 'Optimizare software pentru putere sporită și consum redus. Stage 1, 2 și 3 disponibile pentru majoritatea modelelor.',
    icon: Gauge,
    priceStart: 'de la 250€'
  },
  {
    id: '2',
    title: 'Detailing Premium',
    description: 'Curățare profesională interior/exterior, protecție ceramică și polish faruri pentru un aspect impecabil.',
    icon: SprayCan,
    priceStart: 'de la 100€'
  },
  {
    id: '3',
    title: 'Diagnoză Computerizată',
    description: 'Identificare precisă a problemelor folosind echipamente de ultimă generație dedicate fiecărei mărci.',
    icon: Cpu,
    priceStart: 'de la 30€'
  },
  {
    id: '4',
    title: 'Mecanică Generală',
    description: 'Revizii periodice, distribuții, sisteme de frânare și reparații complexe la motor sau cutie.',
    icon: Wrench,
    priceStart: 'Cere ofertă'
  },
  {
    id: '5',
    title: 'Service Roți & Geometrie',
    description: 'Schimb anvelope, echilibrare dinamică și reglaj geometrie 3D pentru siguranță maximă.',
    icon: Car,
    priceStart: 'de la 40€'
  },
  {
    id: '6',
    title: 'Sisteme Electrice',
    description: 'Reparații alternatoare, electromotoare, baterii și instalare sisteme audio/video aftermarket.',
    icon: Battery,
    priceStart: 'Cere ofertă'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    title: 'BMW M4 Competition - Stage 2',
    category: 'Tuning'
  },
  {
    id: '2',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    title: 'Porsche 911 - Full Detailing',
    category: 'Detailing'
  },
  {
    id: '3',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    title: 'Audi RS6 - Sistem Evacuare',
    category: 'Modificări'
  },
  {
    id: '4',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    title: 'Mercedes AMG - Protecție Ceramică',
    category: 'Detailing'
  },
  {
    id: '5',
    imageUrl: 'https://picsum.photos/800/600?random=5',
    title: 'VW Golf GTI - Suspensie Aer',
    category: 'Tuning'
  },
  {
    id: '6',
    imageUrl: 'https://picsum.photos/800/600?random=6',
    title: 'Restaurare Motor V8',
    category: 'Mecanică'
  }
];