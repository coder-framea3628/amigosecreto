// ============================================================================
// FRAME HOTELS — HUB DE HOTELARIA v1.0
// PROIBIDA COPIA OU REPRODUCAO SEM AUTORIZACAO
// ============================================================================

// ===== META VIEWPORT =====
(function(){const m=document.createElement('meta');m.name='viewport';m.content='width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no';document.head.appendChild(m);})();

// ===== FONTES =====
(function(){
  const fonts = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
    'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap'
  ];
  fonts.forEach(href=>{const l=document.createElement('link');l.rel='stylesheet';l.href=href;document.head.appendChild(l);});
})();

// ===== SVG ICONS =====
const FH_ICONS = {
  search: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  mapPin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  calendar: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',
  users: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  star: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  heart: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  heartFill: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  menu: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
  close: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  chevronRight: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
  chevronLeft: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',
  chevronDown: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  filter: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="1" y2="7"/><line x1="8" x2="8" y1="9" y2="15"/><line x1="16" x2="16" y1="17" y2="23"/></svg>',
  wifi: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" x2="12.01" y1="20" y2="20"/></svg>',
  pool: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20c.8.5 1.9.7 3 .7s2.2-.2 3-.7c.8-.5 1.9-.7 3-.7s2.2.2 3 .7c.8.5 1.9.7 3 .7s2.2-.2 3-.7"/><path d="M2 16c.8.5 1.9.7 3 .7s2.2-.2 3-.7c.8-.5 1.9-.7 3-.7s2.2.2 3 .7c.8.5 1.9.7 3 .7s2.2-.2 3-.7"/><path d="M9 6v10"/><path d="M15 4v12"/><path d="M9 6a3 3 0 1 1 6 0"/></svg>',
  spa: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7-1.667 7-5 0 3.333 2.8 5 7 5 0 3.333-2.8 5-7 5Z"/><path d="M12 22V12"/><path d="M7.7 7.7A5 5 0 1 1 12 12"/></svg>',
  parking: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>',
  share: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>',
  user: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  globe: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
  shield: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>',
  bed: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>',
  coffee: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg>',
  arrowRight: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  verified: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 L15.09 3.26 L18.18 2 L19.09 5.18 L22 6.09 L20.74 9.18 L22 12.27 L19.09 13.18 L18.18 16.36 L15.09 15.09 L12 16.36 L8.91 15.09 L5.82 16.36 L4.91 13.18 L2 12.27 L3.26 9.18 L2 6.09 L4.91 5.18 L5.82 2 L8.91 3.26Z"/><path d="m9 12 2 2 4-4"/></svg>',
  crown: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7Zm3 16h14"/></svg>',
  bell: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>',
  compass: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
  home: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  cookie: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/></svg>',
  minus: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" x2="19" y1="12" y2="12"/></svg>',
  plus: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>',
  phone: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  instagram: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>',
  building: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>',
  map: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg>',
};

// ===== HOTEL DATA =====
const FH_HOTELS = [
  {
    id: 1, name: 'Tivoli Mofarrej', city: 'Sao Paulo', neighborhood: 'Jardins',
    rating: 4.8, reviews: 2341, priceFrom: 890,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80'
    ],
    tags: ['Piscina', 'Spa', 'Restaurante'], verified: true, hotelsPlus: true,
    desc: 'Elegancia atemporal no coracao dos Jardins. Suites com vista panoramica da cidade.'
  },
  {
    id: 2, name: 'Hotel Fasano', city: 'Sao Paulo', neighborhood: 'Jardins',
    rating: 4.9, reviews: 1876, priceFrom: 1450,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d7dc69bba?w=800&q=80'
    ],
    tags: ['Rooftop', 'Gastronomia', 'Spa'], verified: true, hotelsPlus: true,
    desc: 'O icone da hotelaria paulistana. Design italiano, gastronomia premiada.'
  },
  {
    id: 3, name: 'Hotel Emiliano', city: 'Rio de Janeiro', neighborhood: 'Copacabana',
    rating: 4.7, reviews: 1523, priceFrom: 1200,
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80'
    ],
    tags: ['Beira-mar', 'Piscina', 'Spa'], verified: true, hotelsPlus: false,
    desc: 'Luxo pe na areia em Copacabana. Vista infinita para o Atlantico.'
  },
  {
    id: 4, name: 'Belmond Copacabana Palace', city: 'Rio de Janeiro', neighborhood: 'Copacabana',
    rating: 4.9, reviews: 3102, priceFrom: 2100,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80',
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80'
    ],
    tags: ['Iconico', 'Piscina', 'Restaurante'], verified: true, hotelsPlus: true,
    desc: 'O palacio mais famoso do Brasil. Historico, luxuoso, inesquecivel.'
  },
  {
    id: 5, name: 'Nomaa Hotel', city: 'Curitiba', neighborhood: 'Batel',
    rating: 4.8, reviews: 987, priceFrom: 750,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d7dc69bba?w=800&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80'
    ],
    tags: ['Design', 'Gastronomia', 'Spa'], verified: true, hotelsPlus: true,
    desc: 'Design contemporaneo e gastronomia de autor no bairro mais charmoso de Curitiba.'
  },
  {
    id: 6, name: 'Radisson Blu', city: 'Curitiba', neighborhood: 'Centro Civico',
    rating: 4.5, reviews: 1245, priceFrom: 420,
    image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80'
    ],
    tags: ['Business', 'Piscina', 'Fitness'], verified: true, hotelsPlus: false,
    desc: 'Sofisticacao e praticidade para viajantes exigentes no coracao de Curitiba.'
  },
  {
    id: 7, name: 'Hilton Porto Alegre', city: 'Porto Alegre', neighborhood: 'Moinhos de Vento',
    rating: 4.6, reviews: 1678, priceFrom: 550,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80'
    ],
    tags: ['Piscina Coberta', 'Fitness', 'Restaurante'], verified: true, hotelsPlus: false,
    desc: 'Vista privilegiada do Guaiba. Conforto internacional no sul do Brasil.'
  },
  {
    id: 8, name: 'Laghetto Viverone', city: 'Porto Alegre', neighborhood: 'Moinhos de Vento',
    rating: 4.7, reviews: 892, priceFrom: 480,
    image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80'
    ],
    tags: ['Charme', 'Gastronomia', 'Spa'], verified: true, hotelsPlus: true,
    desc: 'Boutique hotel gaucho com alma italiana. Experiencia unica no Moinhos.'
  }
];

const FH_CITIES = [
  { name: 'Sao Paulo', state: 'SP', count: 2, image: 'https://images.unsplash.com/photo-1543059080-f9b1272213d5?w=600&q=80' },
  { name: 'Rio de Janeiro', state: 'RJ', count: 2, image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&q=80' },
  { name: 'Curitiba', state: 'PR', count: 2, image: 'https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?w=600&q=80' },
  { name: 'Porto Alegre', state: 'RS', count: 2, image: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=600&q=80' }
];

// ===== STATE =====
let fhState = {
  userCity: null,
  selectedCity: null,
  favorites: JSON.parse(localStorage.getItem('fh_favs') || '[]'),
  menuOpen: false,
  filterOpen: false,
  cookieAccepted: localStorage.getItem('fh_cookie') === '1',
  guestsAdults: 2,
  guestsChildren: 0,
  guestsRooms: 1,
  checkIn: null,
  checkOut: null,
  searchQuery: '',
  currentView: 'home',
  currentHotel: null,
  currentImageIndex: 0
};

// ===== CSS =====
const fhStyle = document.createElement('style');
fhStyle.id = 'fh-style';
fhStyle.textContent = `
:root {
  --fh-white: #FFFFFF;
  --fh-bg: #FAFAFA;
  --fh-text: #171717;
  --fh-text-secondary: #6B6B6B;
  --fh-text-muted: #9CA3AF;
  --fh-accent: #A77BC6;
  --fh-accent-dark: #915FB5;
  --fh-accent-gradient: linear-gradient(135deg, #A77BC6 0%, #915FB5 100%);
  --fh-accent-light: #F3EAF8;
  --fh-border: #E5E5E5;
  --fh-border-light: #F0F0F0;
  --fh-shadow-sm: 0 1px 3px rgba(0,0,0,0.06);
  --fh-shadow-md: 0 4px 20px rgba(0,0,0,0.08);
  --fh-shadow-lg: 0 8px 40px rgba(0,0,0,0.12);
  --fh-shadow-xl: 0 16px 60px rgba(0,0,0,0.16);
  --fh-radius: 16px;
  --fh-radius-sm: 12px;
  --fh-radius-pill: 50px;
  --fh-transition: 0.3s cubic-bezier(0.4,0,0.2,1);
  --fh-font: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --fh-font-display: 'DM Sans', 'Inter', sans-serif;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }

html, body {
  height: 100%; min-height: 100%;
  background: var(--fh-bg);
  font-family: var(--fh-font);
  color: var(--fh-text);
  scroll-behavior: smooth;
  overscroll-behavior: none;
  -webkit-user-select: none; user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
}

input, textarea, select { font-size: 16px !important; font-family: var(--fh-font); }

.fh-app { min-height: 100vh; background: var(--fh-bg); padding-bottom: 80px; }

/* === HEADER === */
.fh-header {
  position: sticky; top: 0; z-index: 100;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--fh-border-light);
  padding: 0 20px;
  transition: var(--fh-transition);
}
.fh-header-inner {
  max-width: 1200px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  height: 64px;
}
.fh-logo {
  display: flex; align-items: center; gap: 8px;
  font-family: var(--fh-font-display); font-weight: 700; font-size: 20px;
  color: var(--fh-text); text-decoration: none; cursor: pointer;
}
.fh-logo-icon {
  width: 32px; height: 32px; border-radius: 10px;
  background: var(--fh-accent-gradient);
  display: flex; align-items: center; justify-content: center;
  color: white; font-size: 14px; font-weight: 800;
}
.fh-header-actions { display: flex; align-items: center; gap: 8px; }
.fh-header-btn {
  width: 40px; height: 40px; border-radius: 50%;
  background: transparent; border: 1px solid var(--fh-border);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; color: var(--fh-text); transition: var(--fh-transition);
}
.fh-header-btn:active { transform: scale(0.92); }
.fh-header-btn.accent { background: var(--fh-accent-gradient); border: none; color: white; }

/* === SEARCH BAR === */
.fh-search-bar {
  max-width: 720px; margin: 0 auto; padding: 12px 20px 16px;
}
.fh-search-card {
  background: var(--fh-white); border-radius: var(--fh-radius);
  box-shadow: var(--fh-shadow-md); border: 1px solid var(--fh-border-light);
  padding: 14px 18px; cursor: pointer; transition: var(--fh-transition);
  display: flex; align-items: center; gap: 14px;
}
.fh-search-card:active { transform: scale(0.985); box-shadow: var(--fh-shadow-lg); }
.fh-search-icon {
  width: 44px; height: 44px; border-radius: 50%;
  background: var(--fh-accent-gradient);
  display: flex; align-items: center; justify-content: center;
  color: white; flex-shrink: 0;
}
.fh-search-text { flex: 1; }
.fh-search-text h3 { font-size: 15px; font-weight: 600; color: var(--fh-text); margin-bottom: 2px; }
.fh-search-text p { font-size: 13px; color: var(--fh-text-secondary); }
.fh-search-filter {
  width: 40px; height: 40px; border-radius: 50%;
  border: 1px solid var(--fh-border); background: white;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; color: var(--fh-text); flex-shrink: 0;
  transition: var(--fh-transition);
}
.fh-search-filter:active { transform: scale(0.92); }

/* === PARTNER TICKER === */
.fh-ticker-wrap {
  overflow: hidden; padding: 16px 0; border-bottom: 1px solid var(--fh-border-light);
  background: var(--fh-white);
}
.fh-ticker {
  display: flex; gap: 48px; animation: fhTickerScroll 30s linear infinite;
  width: max-content; align-items: center;
}
@keyframes fhTickerScroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.fh-ticker-item {
  font-family: var(--fh-font-display); font-size: 14px; font-weight: 600;
  color: var(--fh-text-muted); white-space: nowrap;
  display: flex; align-items: center; gap: 8px;
  letter-spacing: 0.02em; text-transform: uppercase;
}
.fh-ticker-item svg { opacity: 0.5; }
.fh-ticker-dot {
  width: 4px; height: 4px; border-radius: 50%;
  background: var(--fh-text-muted); opacity: 0.4;
}

/* === SECTION HEADERS === */
.fh-section { padding: 28px 20px 0; max-width: 1200px; margin: 0 auto; }
.fh-section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; }
.fh-section-title { font-family: var(--fh-font-display); font-size: 22px; font-weight: 700; color: var(--fh-text); }
.fh-section-link {
  font-size: 14px; font-weight: 600; color: var(--fh-accent-dark);
  text-decoration: none; cursor: pointer; display: flex; align-items: center; gap: 4px;
}

/* === CITY CARDS === */
.fh-cities-scroll {
  display: flex; gap: 14px; overflow-x: auto; padding-bottom: 8px;
  scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;
  scrollbar-width: none; -ms-overflow-style: none;
}
.fh-cities-scroll::-webkit-scrollbar { display: none; }
.fh-city-card {
  min-width: 160px; flex-shrink: 0; scroll-snap-align: start;
  border-radius: var(--fh-radius-sm); overflow: hidden;
  position: relative; cursor: pointer; transition: var(--fh-transition);
}
.fh-city-card:active { transform: scale(0.96); }
.fh-city-card img {
  width: 100%; height: 200px; object-fit: cover; display: block;
  transition: transform 0.5s ease;
}
.fh-city-card:active img { transform: scale(1.05); }
.fh-city-card-overlay {
  position: absolute; bottom: 0; left: 0; right: 0;
  padding: 16px; background: linear-gradient(transparent, rgba(0,0,0,0.7));
  color: white;
}
.fh-city-card-overlay h4 { font-size: 16px; font-weight: 700; margin-bottom: 2px; }
.fh-city-card-overlay span { font-size: 12px; opacity: 0.85; }

/* === HOTEL CARDS === */
.fh-hotels-grid {
  display: grid; grid-template-columns: 1fr; gap: 24px;
}
@media(min-width:640px) { .fh-hotels-grid { grid-template-columns: 1fr 1fr; } }
@media(min-width:960px) { .fh-hotels-grid { grid-template-columns: 1fr 1fr 1fr; } }

.fh-hotel-card {
  border-radius: var(--fh-radius); overflow: hidden;
  background: var(--fh-white); cursor: pointer;
  transition: var(--fh-transition);
}
.fh-hotel-card:active { transform: scale(0.98); }
.fh-hotel-img-wrap {
  position: relative; width: 100%; aspect-ratio: 4/3; overflow: hidden;
}
.fh-hotel-img-wrap img {
  width: 100%; height: 100%; object-fit: cover; display: block;
  transition: transform 0.5s ease;
}
.fh-hotel-card:hover .fh-hotel-img-wrap img { transform: scale(1.04); }
.fh-hotel-fav {
  position: absolute; top: 12px; right: 12px;
  width: 36px; height: 36px; border-radius: 50%;
  background: rgba(255,255,255,0.85); backdrop-filter: blur(8px);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; color: var(--fh-text); z-index: 2;
  transition: var(--fh-transition);
}
.fh-hotel-fav:active { transform: scale(0.85); }
.fh-hotel-fav.active { color: #E11D48; }
.fh-hotel-badge {
  position: absolute; top: 12px; left: 12px;
  background: var(--fh-accent-gradient); color: white;
  font-size: 11px; font-weight: 600; padding: 5px 12px;
  border-radius: var(--fh-radius-pill); display: flex; align-items: center; gap: 4px;
  z-index: 2; letter-spacing: 0.02em;
}
.fh-hotel-verified {
  position: absolute; bottom: 12px; left: 12px;
  background: rgba(255,255,255,0.9); backdrop-filter: blur(8px);
  padding: 4px 10px; border-radius: var(--fh-radius-pill);
  font-size: 11px; font-weight: 600; color: var(--fh-accent-dark);
  display: flex; align-items: center; gap: 4px; z-index: 2;
}
.fh-hotel-dots {
  position: absolute; bottom: 12px; left: 50%; transform: translateX(-50%);
  display: flex; gap: 5px; z-index: 2;
}
.fh-hotel-dot {
  width: 6px; height: 6px; border-radius: 50%; background: rgba(255,255,255,0.5);
  transition: var(--fh-transition);
}
.fh-hotel-dot.active { background: white; width: 18px; border-radius: 3px; }
.fh-hotel-info { padding: 14px 16px 18px; }
.fh-hotel-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4px; }
.fh-hotel-name { font-family: var(--fh-font-display); font-size: 16px; font-weight: 600; color: var(--fh-text); }
.fh-hotel-rating { display: flex; align-items: center; gap: 4px; font-size: 14px; font-weight: 600; color: var(--fh-text); }
.fh-hotel-rating svg { color: var(--fh-accent); }
.fh-hotel-location { font-size: 13px; color: var(--fh-text-secondary); margin-bottom: 6px; display: flex; align-items: center; gap: 4px; }
.fh-hotel-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 10px; }
.fh-hotel-tag {
  font-size: 11px; padding: 4px 10px; border-radius: var(--fh-radius-pill);
  background: var(--fh-bg); color: var(--fh-text-secondary); font-weight: 500;
}
.fh-hotel-price { display: flex; align-items: baseline; gap: 4px; }
.fh-hotel-price-label { font-size: 12px; color: var(--fh-text-secondary); }
.fh-hotel-price-value { font-size: 18px; font-weight: 700; color: var(--fh-text); }
.fh-hotel-price-unit { font-size: 13px; color: var(--fh-text-secondary); }

/* === HOTELS+ BANNER === */
.fh-plus-banner {
  margin: 28px 20px; max-width: 1160px;
  background: var(--fh-accent-gradient); border-radius: var(--fh-radius);
  padding: 28px 24px; color: white; position: relative; overflow: hidden;
  cursor: pointer; transition: var(--fh-transition);
}
.fh-plus-banner:active { transform: scale(0.985); }
.fh-plus-banner::after {
  content: ''; position: absolute; top: -40%; right: -20%;
  width: 300px; height: 300px; border-radius: 50%;
  background: rgba(255,255,255,0.08);
}
.fh-plus-badge {
  display: inline-flex; align-items: center; gap: 6px;
  background: rgba(255,255,255,0.2); backdrop-filter: blur(8px);
  padding: 6px 14px; border-radius: var(--fh-radius-pill);
  font-size: 12px; font-weight: 700; letter-spacing: 0.06em;
  margin-bottom: 14px; text-transform: uppercase;
}
.fh-plus-title {
  font-family: var(--fh-font-display); font-size: 22px; font-weight: 700;
  margin-bottom: 8px; position: relative; z-index: 1;
}
.fh-plus-desc {
  font-size: 14px; opacity: 0.9; line-height: 1.5;
  max-width: 320px; position: relative; z-index: 1; margin-bottom: 18px;
}
.fh-plus-btn {
  display: inline-flex; align-items: center; gap: 8px;
  background: white; color: var(--fh-accent-dark);
  padding: 12px 24px; border-radius: var(--fh-radius-pill);
  font-size: 14px; font-weight: 600; border: none; cursor: pointer;
  position: relative; z-index: 1; transition: var(--fh-transition);
}
.fh-plus-btn:active { transform: scale(0.95); }

/* === EXPERIENCES === */
.fh-exp-scroll {
  display: flex; gap: 14px; overflow-x: auto; padding-bottom: 8px;
  scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.fh-exp-scroll::-webkit-scrollbar { display: none; }
.fh-exp-card {
  min-width: 260px; flex-shrink: 0; scroll-snap-align: start;
  border-radius: var(--fh-radius-sm); overflow: hidden;
  background: var(--fh-white); cursor: pointer; transition: var(--fh-transition);
}
.fh-exp-card:active { transform: scale(0.97); }
.fh-exp-card img { width: 100%; height: 180px; object-fit: cover; display: block; }
.fh-exp-info { padding: 14px 16px; }
.fh-exp-info h4 { font-size: 15px; font-weight: 600; margin-bottom: 4px; }
.fh-exp-info p { font-size: 13px; color: var(--fh-text-secondary); }

/* === BOTTOM TAB === */
.fh-tab-bar {
  position: fixed; bottom: 0; left: 0; right: 0; z-index: 200;
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid var(--fh-border-light);
  display: flex; justify-content: space-around; align-items: center;
  height: 72px; padding-bottom: env(safe-area-inset-bottom, 8px);
}
.fh-tab {
  display: flex; flex-direction: column; align-items: center; gap: 4px;
  cursor: pointer; color: var(--fh-text-muted); transition: var(--fh-transition);
  padding: 8px 16px; border: none; background: none; font-family: var(--fh-font);
}
.fh-tab.active { color: var(--fh-accent-dark); }
.fh-tab span { font-size: 10px; font-weight: 600; letter-spacing: 0.02em; }
.fh-tab:active { transform: scale(0.9); }

/* === BOTTOM SHEET === */
.fh-sheet-overlay {
  position: fixed; inset: 0; z-index: 500;
  background: rgba(0,0,0,0.4); backdrop-filter: blur(4px);
  opacity: 0; visibility: hidden; transition: var(--fh-transition);
}
.fh-sheet-overlay.show { opacity: 1; visibility: visible; }
.fh-sheet {
  position: fixed; bottom: 0; left: 0; right: 0; z-index: 501;
  background: var(--fh-white); border-radius: 24px 24px 0 0;
  max-height: 90vh; overflow-y: auto;
  transform: translateY(100%); transition: transform 0.4s cubic-bezier(0.32,0.72,0,1);
  padding-bottom: env(safe-area-inset-bottom, 20px);
}
.fh-sheet-overlay.show + .fh-sheet,
.fh-sheet.show { transform: translateY(0); }
.fh-sheet-handle {
  width: 36px; height: 4px; border-radius: 2px;
  background: var(--fh-border); margin: 10px auto 0;
}
.fh-sheet-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 24px 14px;
}
.fh-sheet-title { font-family: var(--fh-font-display); font-size: 20px; font-weight: 700; }
.fh-sheet-close {
  width: 36px; height: 36px; border-radius: 50%;
  background: var(--fh-bg); border: none; display: flex;
  align-items: center; justify-content: center; cursor: pointer;
  color: var(--fh-text); transition: var(--fh-transition);
}
.fh-sheet-close:active { transform: scale(0.9); }
.fh-sheet-body { padding: 0 24px 24px; }

/* === SEARCH SHEET === */
.fh-search-input-wrap {
  background: var(--fh-bg); border-radius: var(--fh-radius-sm);
  padding: 14px 16px; display: flex; align-items: center; gap: 12px;
  margin-bottom: 20px; border: 2px solid transparent;
  transition: var(--fh-transition);
}
.fh-search-input-wrap:focus-within { border-color: var(--fh-accent); background: white; }
.fh-search-input-wrap input {
  flex: 1; border: none; background: none; outline: none;
  font-size: 16px !important; color: var(--fh-text); font-weight: 500;
}
.fh-search-input-wrap input::placeholder { color: var(--fh-text-muted); }
.fh-search-suggestions { margin-top: 8px; }
.fh-search-suggestion {
  display: flex; align-items: center; gap: 14px;
  padding: 14px 4px; border-bottom: 1px solid var(--fh-border-light);
  cursor: pointer; transition: var(--fh-transition);
}
.fh-search-suggestion:active { background: var(--fh-bg); border-radius: var(--fh-radius-sm); }
.fh-search-suggestion-icon {
  width: 44px; height: 44px; border-radius: var(--fh-radius-sm);
  background: var(--fh-accent-light); display: flex;
  align-items: center; justify-content: center; color: var(--fh-accent-dark);
  flex-shrink: 0;
}
.fh-search-suggestion-text h4 { font-size: 15px; font-weight: 600; margin-bottom: 2px; }
.fh-search-suggestion-text p { font-size: 13px; color: var(--fh-text-secondary); }

/* === GUESTS PICKER === */
.fh-guests-row {
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 0; border-bottom: 1px solid var(--fh-border-light);
}
.fh-guests-label h4 { font-size: 15px; font-weight: 600; margin-bottom: 2px; }
.fh-guests-label p { font-size: 13px; color: var(--fh-text-secondary); }
.fh-guests-controls { display: flex; align-items: center; gap: 16px; }
.fh-guests-btn {
  width: 36px; height: 36px; border-radius: 50%;
  border: 1px solid var(--fh-border); background: white;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; color: var(--fh-text); transition: var(--fh-transition);
}
.fh-guests-btn:active { transform: scale(0.9); }
.fh-guests-btn:disabled { opacity: 0.3; pointer-events: none; }
.fh-guests-count { font-size: 18px; font-weight: 600; min-width: 20px; text-align: center; }

/* === SIDE MENU === */
.fh-menu-overlay {
  position: fixed; inset: 0; z-index: 600;
  background: rgba(0,0,0,0.5); backdrop-filter: blur(4px);
  opacity: 0; visibility: hidden; transition: var(--fh-transition);
}
.fh-menu-overlay.show { opacity: 1; visibility: visible; }
.fh-menu {
  position: fixed; top: 0; right: 0; bottom: 0; z-index: 601;
  width: 320px; max-width: 85vw; background: var(--fh-white);
  transform: translateX(100%); transition: transform 0.4s cubic-bezier(0.32,0.72,0,1);
  display: flex; flex-direction: column;
  padding-bottom: env(safe-area-inset-bottom, 0px);
}
.fh-menu-overlay.show ~ .fh-menu,
.fh-menu.show { transform: translateX(0); }
.fh-menu-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px 24px; border-bottom: 1px solid var(--fh-border-light);
}
.fh-menu-profile {
  display: flex; align-items: center; gap: 12px;
}
.fh-menu-avatar {
  width: 44px; height: 44px; border-radius: 50%;
  background: var(--fh-accent-gradient);
  display: flex; align-items: center; justify-content: center;
  color: white; font-weight: 700; font-size: 16px;
}
.fh-menu-name { font-weight: 600; font-size: 16px; }
.fh-menu-email { font-size: 12px; color: var(--fh-text-secondary); }
.fh-menu-items { flex: 1; overflow-y: auto; padding: 12px 0; }
.fh-menu-item {
  display: flex; align-items: center; gap: 16px;
  padding: 14px 24px; cursor: pointer; transition: var(--fh-transition);
  color: var(--fh-text); font-size: 15px; font-weight: 500;
}
.fh-menu-item:active { background: var(--fh-bg); }
.fh-menu-item svg { color: var(--fh-text-secondary); flex-shrink: 0; }
.fh-menu-divider { height: 1px; background: var(--fh-border-light); margin: 8px 24px; }
.fh-menu-footer {
  padding: 16px 24px; border-top: 1px solid var(--fh-border-light);
  font-size: 12px; color: var(--fh-text-muted); text-align: center;
}

/* === COOKIE BANNER === */
.fh-cookie {
  position: fixed; bottom: 80px; left: 16px; right: 16px; z-index: 400;
  background: var(--fh-white); border-radius: var(--fh-radius);
  box-shadow: var(--fh-shadow-xl); padding: 20px;
  transform: translateY(200%); transition: transform 0.5s cubic-bezier(0.32,0.72,0,1);
  max-width: 440px; margin: 0 auto;
}
.fh-cookie.show { transform: translateY(0); }
.fh-cookie-header { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
.fh-cookie-header svg { color: var(--fh-accent); }
.fh-cookie-header h4 { font-size: 15px; font-weight: 700; }
.fh-cookie p { font-size: 13px; color: var(--fh-text-secondary); line-height: 1.5; margin-bottom: 16px; }
.fh-cookie-actions { display: flex; gap: 10px; }
.fh-cookie-btn {
  flex: 1; padding: 12px; border-radius: var(--fh-radius-pill);
  font-size: 14px; font-weight: 600; cursor: pointer;
  border: none; transition: var(--fh-transition); font-family: var(--fh-font);
}
.fh-cookie-btn:active { transform: scale(0.95); }
.fh-cookie-btn.primary { background: var(--fh-accent-gradient); color: white; }
.fh-cookie-btn.secondary { background: var(--fh-bg); color: var(--fh-text); }

/* === HOTEL DETAIL VIEW === */
.fh-detail { display: none; }
.fh-detail.show { display: block; }
.fh-detail-hero { position: relative; width: 100%; aspect-ratio: 4/3; overflow: hidden; }
.fh-detail-hero img { width: 100%; height: 100%; object-fit: cover; }
.fh-detail-hero-nav {
  position: absolute; top: 16px; left: 16px; right: 16px;
  display: flex; justify-content: space-between; z-index: 10;
}
.fh-detail-nav-btn {
  width: 40px; height: 40px; border-radius: 50%;
  background: rgba(255,255,255,0.85); backdrop-filter: blur(8px);
  border: none; display: flex; align-items: center; justify-content: center;
  cursor: pointer; color: var(--fh-text); transition: var(--fh-transition);
}
.fh-detail-nav-btn:active { transform: scale(0.9); }
.fh-detail-counter {
  position: absolute; bottom: 16px; right: 16px;
  background: rgba(0,0,0,0.6); color: white;
  padding: 4px 12px; border-radius: var(--fh-radius-pill);
  font-size: 12px; font-weight: 600;
}
.fh-detail-body { padding: 20px; }
.fh-detail-title { font-family: var(--fh-font-display); font-size: 24px; font-weight: 700; margin-bottom: 4px; }
.fh-detail-subtitle { font-size: 14px; color: var(--fh-text-secondary); margin-bottom: 16px; display: flex; align-items: center; gap: 6px; }
.fh-detail-rating {
  display: flex; align-items: center; gap: 12px; padding: 16px 0;
  border-top: 1px solid var(--fh-border-light); border-bottom: 1px solid var(--fh-border-light);
  margin-bottom: 20px;
}
.fh-detail-rating-score { font-size: 28px; font-weight: 800; }
.fh-detail-rating-info span { font-size: 13px; color: var(--fh-text-secondary); display: block; }
.fh-detail-rating-stars { display: flex; gap: 2px; color: var(--fh-accent); }
.fh-detail-desc { font-size: 15px; color: var(--fh-text-secondary); line-height: 1.6; margin-bottom: 20px; }
.fh-detail-amenities { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 24px; }
.fh-detail-amenity {
  display: flex; align-items: center; gap: 8px;
  padding: 10px 16px; border-radius: var(--fh-radius-pill);
  background: var(--fh-bg); font-size: 13px; font-weight: 500;
  color: var(--fh-text-secondary);
}
.fh-detail-amenity svg { color: var(--fh-accent-dark); }
.fh-detail-cta {
  position: fixed; bottom: 72px; left: 0; right: 0; z-index: 150;
  background: rgba(255,255,255,0.95); backdrop-filter: blur(20px);
  padding: 16px 20px; border-top: 1px solid var(--fh-border-light);
  display: none; align-items: center; justify-content: space-between;
}
.fh-detail-cta.show { display: flex; }
.fh-detail-cta-price { }
.fh-detail-cta-price .price { font-size: 20px; font-weight: 700; }
.fh-detail-cta-price .unit { font-size: 13px; color: var(--fh-text-secondary); }
.fh-detail-cta-btn {
  background: var(--fh-accent-gradient); color: white;
  padding: 14px 32px; border-radius: var(--fh-radius-pill);
  font-size: 15px; font-weight: 600; border: none; cursor: pointer;
  font-family: var(--fh-font); transition: var(--fh-transition);
}
.fh-detail-cta-btn:active { transform: scale(0.95); }

/* === LOCATION BANNER === */
.fh-location-banner {
  margin: 0 20px 0; max-width: 1160px;
  background: var(--fh-accent-light); border-radius: var(--fh-radius-sm);
  padding: 14px 18px; display: flex; align-items: center; gap: 12px;
  font-size: 13px; color: var(--fh-accent-dark); font-weight: 500;
}
.fh-location-banner svg { flex-shrink: 0; color: var(--fh-accent-dark); }

/* === TOAST === */
.fh-toast {
  position: fixed; top: 80px; left: 50%; transform: translateX(-50%) translateY(-120%);
  z-index: 700; background: var(--fh-text);
  color: white; padding: 12px 24px; border-radius: var(--fh-radius-pill);
  font-size: 14px; font-weight: 500; box-shadow: var(--fh-shadow-lg);
  transition: transform 0.4s cubic-bezier(0.32,0.72,0,1);
  white-space: nowrap; max-width: 90vw;
}
.fh-toast.show { transform: translateX(-50%) translateY(0); }

/* === FOOTER === */
.fh-footer {
  margin-top: 40px; padding: 32px 20px 100px;
  background: var(--fh-white); border-top: 1px solid var(--fh-border-light);
}
.fh-footer-inner { max-width: 1200px; margin: 0 auto; }
.fh-footer-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px; }
.fh-footer-col h5 { font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 12px; color: var(--fh-text); }
.fh-footer-col a { display: block; font-size: 13px; color: var(--fh-text-secondary); margin-bottom: 8px; text-decoration: none; cursor: pointer; }
.fh-footer-bottom {
  padding-top: 20px; border-top: 1px solid var(--fh-border-light);
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 12px;
}
.fh-footer-copy { font-size: 12px; color: var(--fh-text-muted); }
.fh-footer-social { display: flex; gap: 16px; }
.fh-footer-social a { color: var(--fh-text-secondary); cursor: pointer; transition: var(--fh-transition); }
.fh-footer-social a:hover { color: var(--fh-accent); }

/* === ANIMATIONS === */
@keyframes fhFadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
.fh-animate { animation: fhFadeUp 0.5s cubic-bezier(0.22,1,0.36,1) both; }
.fh-animate-d1 { animation-delay: 0.05s; }
.fh-animate-d2 { animation-delay: 0.1s; }
.fh-animate-d3 { animation-delay: 0.15s; }
.fh-animate-d4 { animation-delay: 0.2s; }

/* === RESPONSIVE === */
@media(min-width:768px) {
  .fh-tab-bar { display: none; }
  .fh-app { padding-bottom: 0; }
  .fh-header-inner { height: 72px; }
  .fh-section { padding: 36px 40px 0; }
  .fh-search-bar { padding: 16px 40px 20px; }
  .fh-plus-banner { margin: 36px 40px; }
  .fh-footer { padding: 48px 40px 40px; }
  .fh-footer-grid { grid-template-columns: repeat(4,1fr); }
}

/* === SKELETON === */
.fh-skeleton {
  background: linear-gradient(90deg, var(--fh-border-light) 25%, var(--fh-bg) 50%, var(--fh-border-light) 75%);
  background-size: 200% 100%; animation: fhShimmer 1.5s infinite; border-radius: var(--fh-radius-sm);
}
@keyframes fhShimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

/* === FILTER TAGS === */
.fh-filter-tags {
  display: flex; gap: 8px; overflow-x: auto; padding: 0 20px 12px;
  scrollbar-width: none; max-width: 1200px; margin: 0 auto;
}
.fh-filter-tags::-webkit-scrollbar { display: none; }
.fh-filter-tag {
  flex-shrink: 0; padding: 8px 18px; border-radius: var(--fh-radius-pill);
  background: var(--fh-white); border: 1px solid var(--fh-border);
  font-size: 13px; font-weight: 500; color: var(--fh-text-secondary);
  cursor: pointer; transition: var(--fh-transition); white-space: nowrap;
}
.fh-filter-tag:active { transform: scale(0.95); }
.fh-filter-tag.active {
  background: var(--fh-text); color: white; border-color: var(--fh-text);
}
`;
document.head.appendChild(fhStyle);

// ===== RENDER =====
function fhRender() {
  const app = document.createElement('div');
  app.className = 'fh-app';
  app.id = 'fhApp';
  app.innerHTML = fhBuildHTML();
  document.body.appendChild(app);

  // Cookie banner
  if (!fhState.cookieAccepted) {
    setTimeout(() => {
      const c = document.getElementById('fhCookie');
      if (c) c.classList.add('show');
    }, 1500);
  }

  // Geolocation
  fhGetLocation();

  // Bind events
  fhBindEvents();
}

function fhBuildHTML() {
  return `
    ${fhBuildHeader()}
    <div id="fhHomeView">
      ${fhBuildSearchBar()}
      ${fhBuildTicker()}
      <div id="fhLocationBanner" class="fh-location-banner" style="display:none; margin-top:16px;">
        ${FH_ICONS.mapPin}
        <span id="fhLocationText">Detectando sua localizacao...</span>
      </div>
      ${fhBuildFilterTags()}
      ${fhBuildCitiesSection()}
      ${fhBuildHotelsPlusSection()}
      ${fhBuildHotelsSection()}
      ${fhBuildExperiencesSection()}
      ${fhBuildFooter()}
    </div>
    <div id="fhDetailView" class="fh-detail"></div>
    ${fhBuildTabBar()}
    ${fhBuildSearchSheet()}
    ${fhBuildGuestsSheet()}
    ${fhBuildMenuOverlay()}
    ${fhBuildCookieBanner()}
    <div id="fhToast" class="fh-toast"></div>
  `;
}

function fhBuildHeader() {
  return `
  <header class="fh-header">
    <div class="fh-header-inner">
      <div class="fh-logo" onclick="fhGoHome()">
        <div class="fh-logo-icon">FH</div>
        <span>Frame<span style="font-weight:400;opacity:0.6">Hotels</span></span>
      </div>
      <div class="fh-header-actions">
        <button class="fh-header-btn" onclick="fhShowToast('Em breve: notificacoes')" aria-label="Notificacoes">${FH_ICONS.bell}</button>
        <button class="fh-header-btn accent" onclick="fhOpenMenu()" aria-label="Menu">${FH_ICONS.menu}</button>
      </div>
    </div>
  </header>`;
}

function fhBuildSearchBar() {
  return `
  <div class="fh-search-bar">
    <div class="fh-search-card fh-animate" onclick="fhOpenSearch()">
      <div class="fh-search-icon">${FH_ICONS.search}</div>
      <div class="fh-search-text">
        <h3>Para onde voce vai?</h3>
        <p>Qualquer lugar · Qualquer semana · Hospedes</p>
      </div>
      <div class="fh-search-filter" onclick="event.stopPropagation(); fhOpenGuests()">
        ${FH_ICONS.filter}
      </div>
    </div>
  </div>`;
}

function fhBuildTicker() {
  const partners = [
    { name: 'Airbnb', svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.7 17.6c-.3.6-.9 1-1.5 1-.3 0-.5-.1-.7-.2-2.2-1.2-3.3-2.5-3.5-2.8-.2.3-1.3 1.6-3.5 2.8-.2.1-.5.2-.7.2-.6 0-1.2-.4-1.5-1-.4-.8-.1-1.7.5-2.7l3.2-5.3c.2-.4.5-.7.8-.9.3-.2.7-.3 1-.3h.4c.4 0 .7.1 1 .3.3.2.6.5.8.9l3.2 5.3c.7 1 .9 1.9.5 2.7z"/></svg>' },
    { name: 'Booking.com', svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect width="24" height="24" rx="4" fill="currentColor"/><text x="12" y="17" text-anchor="middle" fill="white" font-size="14" font-weight="800" font-family="sans-serif">B</text></svg>' },
    { name: 'Hilton', svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect width="24" height="24" rx="4" fill="currentColor"/><text x="12" y="17" text-anchor="middle" fill="white" font-size="14" font-weight="800" font-family="sans-serif">H</text></svg>' },
    { name: 'Hotels.com', svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect width="24" height="24" rx="12" fill="currentColor"/><text x="12" y="17" text-anchor="middle" fill="white" font-size="12" font-weight="800" font-family="sans-serif">H</text></svg>' },
    { name: 'Marriott', svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect width="24" height="24" rx="4" fill="currentColor"/><text x="12" y="17" text-anchor="middle" fill="white" font-size="14" font-weight="800" font-family="sans-serif">M</text></svg>' },
    { name: 'IHG', svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect width="24" height="24" rx="4" fill="currentColor"/><text x="12" y="16" text-anchor="middle" fill="white" font-size="10" font-weight="800" font-family="sans-serif">IHG</text></svg>' },
    { name: 'Accor', svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect width="24" height="24" rx="4" fill="currentColor"/><text x="12" y="17" text-anchor="middle" fill="white" font-size="14" font-weight="800" font-family="sans-serif">A</text></svg>' },
  ];
  const items = partners.map(p => `<div class="fh-ticker-item">${p.svg}<span>${p.name}</span></div>`).join('<div class="fh-ticker-dot"></div>');
  return `
  <div class="fh-ticker-wrap">
    <div class="fh-ticker">${items}${items}</div>
  </div>`;
}

function fhBuildFilterTags() {
  const tags = ['Todos', 'Hotels+', 'Piscina', 'Spa', 'Gastronomia', 'Beira-mar', 'Design', 'Business', 'Rooftop'];
  return `
  <div class="fh-filter-tags" style="margin-top:16px;">
    ${tags.map((t,i) => `<div class="fh-filter-tag${i===0?' active':''}" onclick="fhFilterTag(this,'${t}')">${t}</div>`).join('')}
  </div>`;
}

function fhBuildCitiesSection() {
  return `
  <div class="fh-section fh-animate fh-animate-d1">
    <div class="fh-section-header">
      <h2 class="fh-section-title">Destinos populares</h2>
      <span class="fh-section-link" onclick="fhShowToast('Em breve: mais destinos')">Ver todos ${FH_ICONS.chevronRight}</span>
    </div>
    <div class="fh-cities-scroll">
      ${FH_CITIES.map(c => `
        <div class="fh-city-card" onclick="fhSelectCity('${c.name}')">
          <img src="${c.image}" alt="${c.name}" loading="lazy" />
          <div class="fh-city-card-overlay">
            <h4>${c.name}</h4>
            <span>${c.count} hoteis verificados</span>
          </div>
        </div>
      `).join('')}
    </div>
  </div>`;
}

function fhBuildHotelsPlusSection() {
  return `
  <div class="fh-plus-banner fh-animate fh-animate-d2" onclick="fhFilterTag(document.querySelector('.fh-filter-tag:nth-child(2)'),'Hotels+')">
    <div class="fh-plus-badge">${FH_ICONS.crown} Hotels+</div>
    <h3 class="fh-plus-title">Uma experiencia que vai alem da hospedagem</h3>
    <p class="fh-plus-desc">Acesso exclusivo a hoteis selecionados com beneficios premium: late checkout, upgrades e experiencias personalizadas.</p>
    <button class="fh-plus-btn">Conhecer Hotels+ ${FH_ICONS.arrowRight}</button>
  </div>`;
}

function fhBuildHotelsSection() {
  return `
  <div class="fh-section fh-animate fh-animate-d3">
    <div class="fh-section-header">
      <h2 class="fh-section-title" id="fhHotelsTitle">Hoteis em destaque</h2>
    </div>
    <div class="fh-hotels-grid" id="fhHotelsGrid">
      ${fhRenderHotelCards(FH_HOTELS)}
    </div>
  </div>`;
}

function fhRenderHotelCards(hotels) {
  return hotels.map(h => `
    <div class="fh-hotel-card" onclick="fhOpenHotel(${h.id})">
      <div class="fh-hotel-img-wrap">
        <img src="${h.image}" alt="${h.name}" loading="lazy" />
        <div class="fh-hotel-fav${fhState.favorites.includes(h.id)?' active':''}" onclick="event.stopPropagation(); fhToggleFav(${h.id}, this)">
          ${fhState.favorites.includes(h.id) ? FH_ICONS.heartFill : FH_ICONS.heart}
        </div>
        ${h.hotelsPlus ? `<div class="fh-hotel-badge">${FH_ICONS.crown} Hotels+</div>` : ''}
        ${h.verified ? `<div class="fh-hotel-verified">${FH_ICONS.verified} Verificado</div>` : ''}
        <div class="fh-hotel-dots">
          ${h.images.map((_,i) => `<div class="fh-hotel-dot${i===0?' active':''}"></div>`).join('')}
        </div>
      </div>
      <div class="fh-hotel-info">
        <div class="fh-hotel-top">
          <span class="fh-hotel-name">${h.name}</span>
          <span class="fh-hotel-rating">${FH_ICONS.star} ${h.rating}</span>
        </div>
        <div class="fh-hotel-location">${FH_ICONS.mapPin} ${h.neighborhood}, ${h.city}</div>
        <div class="fh-hotel-tags">${h.tags.map(t => `<span class="fh-hotel-tag">${t}</span>`).join('')}</div>
        <div class="fh-hotel-price">
          <span class="fh-hotel-price-label">A partir de</span>
          <span class="fh-hotel-price-value">R$${h.priceFrom}</span>
          <span class="fh-hotel-price-unit">/noite</span>
        </div>
      </div>
    </div>
  `).join('');
}

function fhBuildExperiencesSection() {
  const exps = [
    { title: 'Spa & Bem-estar', desc: 'Relaxe com os melhores spas do Brasil', img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80' },
    { title: 'Gastronomia', desc: 'Restaurantes premiados e chefs renomados', img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80' },
    { title: 'Vista panoramica', desc: 'Suites com as melhores vistas do pais', img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80' },
  ];
  return `
  <div class="fh-section fh-animate fh-animate-d4">
    <div class="fh-section-header">
      <h2 class="fh-section-title">Experiencias</h2>
      <span class="fh-section-link" onclick="fhShowToast('Em breve: mais experiencias')">Ver todas ${FH_ICONS.chevronRight}</span>
    </div>
    <div class="fh-exp-scroll">
      ${exps.map(e => `
        <div class="fh-exp-card" onclick="fhShowToast('Em breve: ${e.title}')">
          <img src="${e.img}" alt="${e.title}" loading="lazy" />
          <div class="fh-exp-info">
            <h4>${e.title}</h4>
            <p>${e.desc}</p>
          </div>
        </div>
      `).join('')}
    </div>
  </div>`;
}

function fhBuildTabBar() {
  return `
  <nav class="fh-tab-bar">
    <button class="fh-tab active" onclick="fhSwitchTab(this,'home')">
      ${FH_ICONS.compass}
      <span>Explorar</span>
    </button>
    <button class="fh-tab" onclick="fhSwitchTab(this,'favs')">
      ${FH_ICONS.heart}
      <span>Favoritos</span>
    </button>
    <button class="fh-tab" onclick="fhSwitchTab(this,'trips')">
      ${FH_ICONS.map}
      <span>Viagens</span>
    </button>
    <button class="fh-tab" onclick="fhSwitchTab(this,'profile')">
      ${FH_ICONS.user}
      <span>Perfil</span>
    </button>
  </nav>`;
}

function fhBuildSearchSheet() {
  return `
  <div id="fhSearchOverlay" class="fh-sheet-overlay" onclick="fhCloseSearch()"></div>
  <div id="fhSearchSheet" class="fh-sheet">
    <div class="fh-sheet-handle"></div>
    <div class="fh-sheet-header">
      <h3 class="fh-sheet-title">Buscar destino</h3>
      <button class="fh-sheet-close" onclick="fhCloseSearch()">${FH_ICONS.close}</button>
    </div>
    <div class="fh-sheet-body">
      <div class="fh-search-input-wrap">
        ${FH_ICONS.search}
        <input type="text" id="fhSearchInput" placeholder="Cidade, hotel ou regiao..." oninput="fhSearchFilter(this.value)" />
      </div>
      <div id="fhSearchResults" class="fh-search-suggestions">
        ${FH_CITIES.map(c => `
          <div class="fh-search-suggestion" onclick="fhSelectCity('${c.name}'); fhCloseSearch();">
            <div class="fh-search-suggestion-icon">${FH_ICONS.mapPin}</div>
            <div class="fh-search-suggestion-text">
              <h4>${c.name}, ${c.state}</h4>
              <p>${c.count} hoteis verificados</p>
            </div>
          </div>
        `).join('')}
        ${FH_HOTELS.filter(h => h.hotelsPlus).map(h => `
          <div class="fh-search-suggestion" onclick="fhOpenHotel(${h.id}); fhCloseSearch();">
            <div class="fh-search-suggestion-icon" style="background:var(--fh-accent-gradient);color:white;">${FH_ICONS.building}</div>
            <div class="fh-search-suggestion-text">
              <h4>${h.name}</h4>
              <p>${h.neighborhood}, ${h.city}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </div>`;
}

function fhBuildGuestsSheet() {
  return `
  <div id="fhGuestsOverlay" class="fh-sheet-overlay" onclick="fhCloseGuests()"></div>
  <div id="fhGuestsSheet" class="fh-sheet">
    <div class="fh-sheet-handle"></div>
    <div class="fh-sheet-header">
      <h3 class="fh-sheet-title">Hospedes</h3>
      <button class="fh-sheet-close" onclick="fhCloseGuests()">${FH_ICONS.close}</button>
    </div>
    <div class="fh-sheet-body">
      <div class="fh-guests-row">
        <div class="fh-guests-label"><h4>Adultos</h4><p>A partir de 18 anos</p></div>
        <div class="fh-guests-controls">
          <button class="fh-guests-btn" onclick="fhGuestChange('adults',-1)">${FH_ICONS.minus}</button>
          <span class="fh-guests-count" id="fhAdultsCount">2</span>
          <button class="fh-guests-btn" onclick="fhGuestChange('adults',1)">${FH_ICONS.plus}</button>
        </div>
      </div>
      <div class="fh-guests-row">
        <div class="fh-guests-label"><h4>Criancas</h4><p>0 a 17 anos</p></div>
        <div class="fh-guests-controls">
          <button class="fh-guests-btn" onclick="fhGuestChange('children',-1)">${FH_ICONS.minus}</button>
          <span class="fh-guests-count" id="fhChildrenCount">0</span>
          <button class="fh-guests-btn" onclick="fhGuestChange('children',1)">${FH_ICONS.plus}</button>
        </div>
      </div>
      <div class="fh-guests-row" style="border:none;">
        <div class="fh-guests-label"><h4>Quartos</h4><p>Acomodacoes</p></div>
        <div class="fh-guests-controls">
          <button class="fh-guests-btn" onclick="fhGuestChange('rooms',-1)">${FH_ICONS.minus}</button>
          <span class="fh-guests-count" id="fhRoomsCount">1</span>
          <button class="fh-guests-btn" onclick="fhGuestChange('rooms',1)">${FH_ICONS.plus}</button>
        </div>
      </div>
      <button style="width:100%;margin-top:20px;padding:14px;border-radius:var(--fh-radius-pill);background:var(--fh-accent-gradient);color:white;border:none;font-size:15px;font-weight:600;cursor:pointer;font-family:var(--fh-font);" onclick="fhCloseGuests();fhShowToast('Hospedes atualizados')">Aplicar</button>
    </div>
  </div>`;
}

function fhBuildMenuOverlay() {
  return `
  <div id="fhMenuOverlay" class="fh-menu-overlay" onclick="fhCloseMenu()"></div>
  <div id="fhMenu" class="fh-menu">
    <div class="fh-menu-header">
      <div class="fh-menu-profile">
        <div class="fh-menu-avatar">F</div>
        <div>
          <div class="fh-menu-name">Meu perfil</div>
          <div class="fh-menu-email">Faca login para continuar</div>
        </div>
      </div>
      <button class="fh-sheet-close" onclick="fhCloseMenu()">${FH_ICONS.close}</button>
    </div>
    <div class="fh-menu-items">
      <div class="fh-menu-item" onclick="fhCloseMenu();fhShowToast('Em breve: conta')">${FH_ICONS.user} Minha conta</div>
      <div class="fh-menu-item" onclick="fhCloseMenu();fhSwitchTab(document.querySelector('.fh-tab:nth-child(2)'),'favs')">${FH_ICONS.heart} Favoritos</div>
      <div class="fh-menu-item" onclick="fhCloseMenu();fhShowToast('Em breve: reservas')">${FH_ICONS.calendar} Minhas reservas</div>
      <div class="fh-menu-item" onclick="fhCloseMenu();fhShowToast('Em breve: Hotels+')">${FH_ICONS.crown} Hotels+</div>
      <div class="fh-menu-divider"></div>
      <div class="fh-menu-item" onclick="fhCloseMenu();fhShowToast('Em breve: suporte')">${FH_ICONS.phone} Central de ajuda</div>
      <div class="fh-menu-item" onclick="fhCloseMenu();fhShowToast('Em breve: seguranca')">${FH_ICONS.shield} Seguranca</div>
      <div class="fh-menu-item" onclick="fhCloseMenu();fhShowToast('Em breve: idioma')">${FH_ICONS.globe} Idioma e moeda</div>
      <div class="fh-menu-divider"></div>
      <div class="fh-menu-item" onclick="fhCloseMenu();fhShowToast('Em breve: parceiro')">${FH_ICONS.building} Seja um parceiro</div>
      <div class="fh-menu-item" onclick="window.open('https://weframe.com.br','_blank')">${FH_ICONS.globe} weframe.com.br</div>
    </div>
    <div class="fh-menu-footer">
      Frame Hotels by weframe.com.br<br/>Todos os direitos reservados.
    </div>
  </div>`;
}

function fhBuildCookieBanner() {
  return `
  <div id="fhCookie" class="fh-cookie">
    <div class="fh-cookie-header">
      ${FH_ICONS.cookie}
      <h4>Sua privacidade importa</h4>
    </div>
    <p>Na Frame Hotels, usamos cookies para personalizar sua experiencia e melhorar nossa navegacao. Veja nossa Politica de Privacidade.</p>
    <div class="fh-cookie-actions">
      <button class="fh-cookie-btn secondary" onclick="fhShowToast('Preferencias salvas');fhAcceptCookie()">Preferencias</button>
      <button class="fh-cookie-btn primary" onclick="fhAcceptCookie()">Aceitar</button>
    </div>
  </div>`;
}

function fhBuildFooter() {
  return `
  <footer class="fh-footer">
    <div class="fh-footer-inner">
      <div class="fh-footer-grid">
        <div class="fh-footer-col">
          <h5>Sobre</h5>
          <a>Como funciona</a>
          <a>Hoteis parceiros</a>
          <a>Hotels+</a>
          <a>Carreiras</a>
        </div>
        <div class="fh-footer-col">
          <h5>Suporte</h5>
          <a>Central de ajuda</a>
          <a>Seguranca</a>
          <a>Cancelamento</a>
          <a>Contato</a>
        </div>
        <div class="fh-footer-col">
          <h5>Parceiros</h5>
          <a>Cadastre seu hotel</a>
          <a>Portal do parceiro</a>
          <a>Termos de parceria</a>
        </div>
        <div class="fh-footer-col">
          <h5>Legal</h5>
          <a>Termos de uso</a>
          <a>Privacidade</a>
          <a>Cookies</a>
        </div>
      </div>
      <div class="fh-footer-bottom">
        <span class="fh-footer-copy">2025 Frame Hotels by weframe.com.br. Todos os direitos reservados.</span>
        <div class="fh-footer-social">
          <a>${FH_ICONS.instagram}</a>
          <a>${FH_ICONS.mail}</a>
          <a>${FH_ICONS.phone}</a>
        </div>
      </div>
    </div>
  </footer>`;
}

// ===== ACTIONS =====
function fhOpenSearch() {
  document.getElementById('fhSearchOverlay').classList.add('show');
  document.getElementById('fhSearchSheet').classList.add('show');
  setTimeout(() => document.getElementById('fhSearchInput').focus(), 400);
}

function fhCloseSearch() {
  document.getElementById('fhSearchOverlay').classList.remove('show');
  document.getElementById('fhSearchSheet').classList.remove('show');
}

function fhOpenGuests() {
  document.getElementById('fhGuestsOverlay').classList.add('show');
  document.getElementById('fhGuestsSheet').classList.add('show');
}

function fhCloseGuests() {
  document.getElementById('fhGuestsOverlay').classList.remove('show');
  document.getElementById('fhGuestsSheet').classList.remove('show');
}

function fhOpenMenu() {
  document.getElementById('fhMenuOverlay').classList.add('show');
  document.getElementById('fhMenu').classList.add('show');
}

function fhCloseMenu() {
  document.getElementById('fhMenuOverlay').classList.remove('show');
  document.getElementById('fhMenu').classList.remove('show');
}

function fhAcceptCookie() {
  fhState.cookieAccepted = true;
  localStorage.setItem('fh_cookie', '1');
  document.getElementById('fhCookie').classList.remove('show');
}

function fhGuestChange(type, delta) {
  if (type === 'adults') {
    fhState.guestsAdults = Math.max(1, Math.min(10, fhState.guestsAdults + delta));
    document.getElementById('fhAdultsCount').textContent = fhState.guestsAdults;
  } else if (type === 'children') {
    fhState.guestsChildren = Math.max(0, Math.min(6, fhState.guestsChildren + delta));
    document.getElementById('fhChildrenCount').textContent = fhState.guestsChildren;
  } else if (type === 'rooms') {
    fhState.guestsRooms = Math.max(1, Math.min(5, fhState.guestsRooms + delta));
    document.getElementById('fhRoomsCount').textContent = fhState.guestsRooms;
  }
}

function fhToggleFav(id, el) {
  const idx = fhState.favorites.indexOf(id);
  if (idx >= 0) {
    fhState.favorites.splice(idx, 1);
    el.classList.remove('active');
    el.innerHTML = FH_ICONS.heart;
    fhShowToast('Removido dos favoritos');
  } else {
    fhState.favorites.push(id);
    el.classList.add('active');
    el.innerHTML = FH_ICONS.heartFill;
    fhShowToast('Adicionado aos favoritos');
  }
  localStorage.setItem('fh_favs', JSON.stringify(fhState.favorites));
}

function fhSelectCity(city) {
  fhState.selectedCity = city;
  const filtered = FH_HOTELS.filter(h => h.city === city);
  document.getElementById('fhHotelsTitle').textContent = `Hoteis em ${city}`;
  document.getElementById('fhHotelsGrid').innerHTML = fhRenderHotelCards(filtered);
  document.getElementById('fhHotelsTitle').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function fhFilterTag(el, tag) {
  document.querySelectorAll('.fh-filter-tag').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  let filtered;
  if (tag === 'Todos') {
    filtered = FH_HOTELS;
    document.getElementById('fhHotelsTitle').textContent = 'Hoteis em destaque';
  } else if (tag === 'Hotels+') {
    filtered = FH_HOTELS.filter(h => h.hotelsPlus);
    document.getElementById('fhHotelsTitle').textContent = 'Hotels+ Exclusivos';
  } else {
    filtered = FH_HOTELS.filter(h => h.tags.some(t => t.toLowerCase().includes(tag.toLowerCase())));
    document.getElementById('fhHotelsTitle').textContent = `Hoteis com ${tag}`;
  }
  document.getElementById('fhHotelsGrid').innerHTML = filtered.length ? fhRenderHotelCards(filtered) : '<p style="color:var(--fh-text-muted);text-align:center;padding:40px;">Nenhum hotel encontrado para esse filtro.</p>';
}

function fhSearchFilter(query) {
  const q = query.toLowerCase().trim();
  const results = document.getElementById('fhSearchResults');
  if (!q) {
    results.innerHTML = FH_CITIES.map(c => `
      <div class="fh-search-suggestion" onclick="fhSelectCity('${c.name}');fhCloseSearch();">
        <div class="fh-search-suggestion-icon">${FH_ICONS.mapPin}</div>
        <div class="fh-search-suggestion-text"><h4>${c.name}, ${c.state}</h4><p>${c.count} hoteis</p></div>
      </div>`).join('');
    return;
  }
  const matchCities = FH_CITIES.filter(c => c.name.toLowerCase().includes(q));
  const matchHotels = FH_HOTELS.filter(h => h.name.toLowerCase().includes(q) || h.city.toLowerCase().includes(q) || h.neighborhood.toLowerCase().includes(q));
  let html = matchCities.map(c => `
    <div class="fh-search-suggestion" onclick="fhSelectCity('${c.name}');fhCloseSearch();">
      <div class="fh-search-suggestion-icon">${FH_ICONS.mapPin}</div>
      <div class="fh-search-suggestion-text"><h4>${c.name}, ${c.state}</h4><p>${c.count} hoteis</p></div>
    </div>`).join('');
  html += matchHotels.map(h => `
    <div class="fh-search-suggestion" onclick="fhOpenHotel(${h.id});fhCloseSearch();">
      <div class="fh-search-suggestion-icon" style="background:var(--fh-accent-light);color:var(--fh-accent-dark);">${FH_ICONS.building}</div>
      <div class="fh-search-suggestion-text"><h4>${h.name}</h4><p>${h.neighborhood}, ${h.city}</p></div>
    </div>`).join('');
  if (!html) html = '<p style="padding:20px;text-align:center;color:var(--fh-text-muted);">Nenhum resultado encontrado</p>';
  results.innerHTML = html;
}

function fhOpenHotel(id) {
  const hotel = FH_HOTELS.find(h => h.id === id);
  if (!hotel) return;
  fhState.currentHotel = hotel;
  fhState.currentImageIndex = 0;
  fhState.currentView = 'detail';
  document.getElementById('fhHomeView').style.display = 'none';
  const detail = document.getElementById('fhDetailView');
  detail.className = 'fh-detail show';
  detail.innerHTML = `
    <div class="fh-detail-hero" id="fhDetailHero">
      <img src="${hotel.images[0]}" alt="${hotel.name}" id="fhDetailImg" />
      <div class="fh-detail-hero-nav">
        <button class="fh-detail-nav-btn" onclick="fhGoHome()">${FH_ICONS.chevronLeft}</button>
        <div style="display:flex;gap:8px;">
          <button class="fh-detail-nav-btn" onclick="fhShareHotel()">${FH_ICONS.share}</button>
          <button class="fh-detail-nav-btn" id="fhDetailFav" onclick="fhToggleDetailFav()">${fhState.favorites.includes(hotel.id) ? FH_ICONS.heartFill : FH_ICONS.heart}</button>
        </div>
      </div>
      <div class="fh-detail-counter" id="fhDetailCounter">1 / ${hotel.images.length}</div>
    </div>
    <div class="fh-detail-body">
      <h1 class="fh-detail-title">${hotel.name}</h1>
      <div class="fh-detail-subtitle">
        ${FH_ICONS.mapPin} ${hotel.neighborhood}, ${hotel.city}
        ${hotel.hotelsPlus ? `<span style="background:var(--fh-accent-gradient);color:white;padding:2px 10px;border-radius:20px;font-size:11px;font-weight:600;display:inline-flex;align-items:center;gap:4px;">${FH_ICONS.crown} Hotels+</span>` : ''}
      </div>
      <div class="fh-detail-rating">
        <span class="fh-detail-rating-score">${hotel.rating}</span>
        <div class="fh-detail-rating-info">
          <div class="fh-detail-rating-stars">${FH_ICONS.star}${FH_ICONS.star}${FH_ICONS.star}${FH_ICONS.star}${FH_ICONS.star}</div>
          <span>${hotel.reviews.toLocaleString('pt-BR')} avaliacoes</span>
        </div>
      </div>
      <p class="fh-detail-desc">${hotel.desc}</p>
      <h3 style="font-family:var(--fh-font-display);font-size:18px;font-weight:700;margin-bottom:14px;">Comodidades</h3>
      <div class="fh-detail-amenities">
        <div class="fh-detail-amenity">${FH_ICONS.wifi} Wi-Fi</div>
        <div class="fh-detail-amenity">${FH_ICONS.pool} Piscina</div>
        <div class="fh-detail-amenity">${FH_ICONS.spa} Spa</div>
        <div class="fh-detail-amenity">${FH_ICONS.parking} Estacionamento</div>
        <div class="fh-detail-amenity">${FH_ICONS.coffee} Cafe da manha</div>
        <div class="fh-detail-amenity">${FH_ICONS.bed} Room service</div>
      </div>
    </div>
  `;
  // CTA bar
  const cta = document.querySelector('.fh-detail-cta');
  if (!cta) {
    const ctaEl = document.createElement('div');
    ctaEl.className = 'fh-detail-cta show';
    ctaEl.id = 'fhDetailCta';
    ctaEl.innerHTML = `
      <div class="fh-detail-cta-price">
        <span class="price">R$${hotel.priceFrom}</span>
        <span class="unit"> /noite</span>
      </div>
      <button class="fh-detail-cta-btn" onclick="fhShowToast('Em breve: reserva completa')">Reservar</button>
    `;
    document.getElementById('fhApp').appendChild(ctaEl);
  } else {
    cta.classList.add('show');
    cta.querySelector('.price').textContent = `R$${hotel.priceFrom}`;
  }

  // Swipe images
  let startX = 0;
  const hero = document.getElementById('fhDetailHero');
  hero.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  hero.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && fhState.currentImageIndex < hotel.images.length - 1) fhState.currentImageIndex++;
      else if (diff < 0 && fhState.currentImageIndex > 0) fhState.currentImageIndex--;
      document.getElementById('fhDetailImg').src = hotel.images[fhState.currentImageIndex];
      document.getElementById('fhDetailCounter').textContent = `${fhState.currentImageIndex + 1} / ${hotel.images.length}`;
    }
  }, { passive: true });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function fhGoHome() {
  fhState.currentView = 'home';
  fhState.currentHotel = null;
  document.getElementById('fhHomeView').style.display = '';
  document.getElementById('fhDetailView').className = 'fh-detail';
  const cta = document.getElementById('fhDetailCta');
  if (cta) cta.classList.remove('show');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function fhToggleDetailFav() {
  if (!fhState.currentHotel) return;
  const id = fhState.currentHotel.id;
  const idx = fhState.favorites.indexOf(id);
  const btn = document.getElementById('fhDetailFav');
  if (idx >= 0) {
    fhState.favorites.splice(idx, 1);
    btn.innerHTML = FH_ICONS.heart;
    fhShowToast('Removido dos favoritos');
  } else {
    fhState.favorites.push(id);
    btn.innerHTML = FH_ICONS.heartFill;
    fhShowToast('Adicionado aos favoritos');
  }
  localStorage.setItem('fh_favs', JSON.stringify(fhState.favorites));
}

function fhShareHotel() {
  if (navigator.share && fhState.currentHotel) {
    navigator.share({ title: fhState.currentHotel.name, text: `Confira ${fhState.currentHotel.name} no Frame Hotels`, url: window.location.href });
  } else {
    fhShowToast('Link copiado!');
  }
}

function fhSwitchTab(el, tab) {
  document.querySelectorAll('.fh-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  if (tab === 'home') { fhGoHome(); return; }
  if (tab === 'favs') {
    fhGoHome();
    const favHotels = FH_HOTELS.filter(h => fhState.favorites.includes(h.id));
    document.getElementById('fhHotelsTitle').textContent = 'Seus favoritos';
    document.getElementById('fhHotelsGrid').innerHTML = favHotels.length ? fhRenderHotelCards(favHotels) : '<p style="color:var(--fh-text-muted);text-align:center;padding:40px;">Nenhum favorito ainda. Explore e salve hoteis que voce gosta.</p>';
    document.getElementById('fhHotelsTitle').scrollIntoView({ behavior: 'smooth' });
    return;
  }
  fhShowToast(`Em breve: ${tab}`);
}

let fhToastTimer;
function fhShowToast(msg) {
  const toast = document.getElementById('fhToast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(fhToastTimer);
  fhToastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

function fhGetLocation() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      pos => {
        const banner = document.getElementById('fhLocationBanner');
        banner.style.display = 'flex';
        // Reverse geocode approximation
        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&format=json`)
          .then(r => r.json())
          .then(data => {
            const city = data.address?.city || data.address?.town || data.address?.municipality || '';
            const state = data.address?.state || '';
            fhState.userCity = city;
            document.getElementById('fhLocationText').textContent = city ? `Voce esta em ${city}, ${state}` : 'Localizacao detectada';
          })
          .catch(() => {
            document.getElementById('fhLocationText').textContent = 'Localizacao detectada';
          });
      },
      () => { /* denied or error, just skip */ }
    );
  }
}

function fhBindEvents() {
  // Prevent zoom, text selection, long press
  document.addEventListener('contextmenu', e => e.preventDefault());
  document.addEventListener('dblclick', e => e.preventDefault());
  document.addEventListener('dragstart', e => e.preventDefault());

  // Escape closes overlays
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { fhCloseSearch(); fhCloseGuests(); fhCloseMenu(); }
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', fhRender);
