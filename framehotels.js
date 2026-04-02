(function () {
  'use strict';

  // ─── CONFIG ──────────────────────────────────────────────────────────────────
  const CONFIG = {
    brand: {
      name: 'FrameHotels',
      tagline: 'Experiências que ficam na memória',
      accent1: '#A77BC6',
      accent2: '#915FB5',
      dark: '#171717',
      light: '#FAFAFA',
      surface: '#F4F0F8',
      text: '#171717',
      muted: '#7A7A8C',
      border: '#E8E2F0',
      white: '#FFFFFF',
    },
    partners: [
      { name: 'Airbnb', svg: `<svg viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8 4C13.2 4 10.4 7.2 10.4 11.2c0 5.6 6.4 13.6 6.4 13.6s6.4-8 6.4-13.6C23.2 7.2 20.4 4 16.8 4zm0 9.6c-1.6 0-2.8-1.2-2.8-2.8s1.2-2.8 2.8-2.8 2.8 1.2 2.8 2.8-1.2 2.8-2.8 2.8z" fill="currentColor"/><text x="30" y="22" font-family="'Helvetica Neue',sans-serif" font-weight="700" font-size="14" fill="currentColor">airbnb</text></svg>` },
      { name: 'Booking', svg: `<svg viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="0" y="23" font-family="'Helvetica Neue',sans-serif" font-weight="700" font-size="16" fill="currentColor">Booking.com</text></svg>` },
      { name: 'Hilton', svg: `<svg viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="0" y="23" font-family="'Georgia',serif" font-weight="700" font-size="18" letter-spacing="2" fill="currentColor">HILTON</text></svg>` },
      { name: 'Hotels.com', svg: `<svg viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="0" y="23" font-family="'Helvetica Neue',sans-serif" font-weight="700" font-size="14" fill="currentColor">Hotels.com</text></svg>` },
      { name: 'SLH', svg: `<svg viewBox="0 0 60 32" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="0" y="23" font-family="'Georgia',serif" font-weight="400" font-size="16" letter-spacing="4" fill="currentColor">SLH</text></svg>` },
      { name: 'Marriott', svg: `<svg viewBox="0 0 90 32" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="0" y="23" font-family="'Georgia',serif" font-weight="700" font-size="15" letter-spacing="1" fill="currentColor">MARRIOTT</text></svg>` },
    ],
    cities: [
      { name: 'São Paulo', state: 'SP', emoji: '🌆', tag: 'Cosmopolita' },
      { name: 'Rio de Janeiro', state: 'RJ', emoji: '🏖️', tag: 'Icônica' },
      { name: 'Curitiba', state: 'PR', emoji: '🌿', tag: 'Sustentável' },
      { name: 'Porto Alegre', state: 'RS', emoji: '🍷', tag: 'Gaúcha' },
      { name: 'Florianópolis', state: 'SC', emoji: '🏄', tag: 'Ilha Mágica' },
      { name: 'Salvador', state: 'BA', emoji: '🎭', tag: 'Cultural' },
      { name: 'Fortaleza', state: 'CE', emoji: '☀️', tag: 'Praia' },
      { name: 'Brasília', state: 'DF', emoji: '🏛️', tag: 'Capital' },
    ],
    hotels: [
      {
        id: 1,
        name: 'Unique Hotel São Paulo',
        city: 'São Paulo', state: 'SP',
        category: 'Ultra Luxo',
        stars: 5,
        rating: 4.9,
        reviews: 847,
        tag: 'Preferido dos hóspedes',
        highlight: 'Rooftop com piscina de borda infinita',
        img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
        amenities: ['Spa', 'Rooftop Pool', 'Restaurante Fine Dining', 'Concierge 24h'],
        hotel_plus: true,
        featured: true,
      },
      {
        id: 2,
        name: 'Fasano Rio de Janeiro',
        city: 'Rio de Janeiro', state: 'RJ',
        category: 'Ultra Luxo',
        stars: 5,
        rating: 4.95,
        reviews: 1203,
        tag: 'Ícone do Luxo',
        highlight: 'Vista para o Arpoador e piscina exclusiva',
        img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
        amenities: ['Beach Club', 'Restaurante Fasano', 'Spa', 'Concierge'],
        hotel_plus: true,
        featured: true,
      },
      {
        id: 3,
        name: 'Emiliano São Paulo',
        city: 'São Paulo', state: 'SP',
        category: 'Luxo Contemporâneo',
        stars: 5,
        rating: 4.85,
        reviews: 562,
        tag: 'Design Exclusivo',
        highlight: 'Arte contemporânea em cada suite',
        img: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80',
        amenities: ['Arte Contemporânea', 'Bar', 'Spa', 'Pool'],
        hotel_plus: false,
        featured: true,
      },
      {
        id: 4,
        name: 'Bourbon Curitiba Business',
        city: 'Curitiba', state: 'PR',
        category: 'Business Premium',
        stars: 5,
        rating: 4.7,
        reviews: 389,
        tag: 'Negócios & Lazer',
        highlight: 'Centro da cidade, vista panorâmica',
        img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
        amenities: ['Centro de Convenções', 'Piscina', 'Restaurante', 'Academia'],
        hotel_plus: false,
        featured: false,
      },
      {
        id: 5,
        name: 'Sheraton Porto Alegre',
        city: 'Porto Alegre', state: 'RS',
        category: 'Luxo',
        stars: 5,
        rating: 4.75,
        reviews: 471,
        tag: 'Elegância Gaúcha',
        highlight: 'Às margens do Guaíba, pôr do sol único',
        img: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80',
        amenities: ['Vista Guaíba', 'Restaurante', 'Spa', 'Pool'],
        hotel_plus: true,
        featured: true,
      },
      {
        id: 6,
        name: 'Costão do Santinho Resort',
        city: 'Florianópolis', state: 'SC',
        category: 'Resort Exclusivo',
        stars: 5,
        rating: 4.88,
        reviews: 1890,
        tag: 'All-Inclusive Premium',
        highlight: 'Resort na praia selvagem do norte da ilha',
        img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
        amenities: ['All-Inclusive', 'Praia Privativa', 'Parque Aquático', 'Spa'],
        hotel_plus: true,
        featured: true,
      },
    ],
    ticker: [
      'Airbnb', 'Booking.com', 'Hotels.com', 'Hilton', 'Marriott', 'SLH', 'Expedia', 'IHG',
    ],
  };

  // ─── STATE ────────────────────────────────────────────────────────────────────
  const STATE = {
    searchQuery: '',
    checkIn: null,
    checkOut: null,
    guests: 2,
    filteredCity: null,
    selectedHotel: null,
    cookieAccepted: false,
    locationGranted: false,
    userCity: null,
    activeView: 'home', // home | search | hotel | checkout | hotelsplus
    calendarTarget: null, // 'checkin' | 'checkout'
    calendarDate: new Date(),
    checkInDate: null,
    checkOutDate: null,
    upsell: false,
    menuOpen: false,
    searchExpanded: false,
    suggestionsVisible: false,
  };

  // ─── HELPERS ─────────────────────────────────────────────────────────────────
  const el = (sel, ctx = document) => ctx.querySelector(sel);
  const els = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const isMobile = () => window.innerWidth < 768;

  function fmt(date) {
    if (!date) return '';
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
  }

  function fmtLong(date) {
    if (!date) return '';
    return date.toLocaleDateString('pt-BR', { weekday: 'short', day: 'numeric', month: 'short' });
  }

  function nights() {
    if (!STATE.checkInDate || !STATE.checkOutDate) return 0;
    return Math.round((STATE.checkOutDate - STATE.checkInDate) / 86400000);
  }

  function getFilteredHotels() {
    return CONFIG.hotels.filter(h => {
      if (STATE.filteredCity && h.city !== STATE.filteredCity) return false;
      if (STATE.searchQuery) {
        const q = STATE.searchQuery.toLowerCase();
        return h.city.toLowerCase().includes(q) || h.name.toLowerCase().includes(q) || h.state.toLowerCase().includes(q);
      }
      return true;
    });
  }

  // ─── INJECT STYLES ───────────────────────────────────────────────────────────
  function injectStyles() {
    const css = `
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700&display=swap');

      :root {
        --accent1: #A77BC6;
        --accent2: #915FB5;
        --accent-grad: linear-gradient(135deg, #A77BC6 0%, #915FB5 100%);
        --dark: #171717;
        --light: #FAFAFA;
        --surface: #F6F2FB;
        --surface2: #EDE6F5;
        --text: #171717;
        --muted: #7A7A8C;
        --border: #E4DCF0;
        --white: #FFFFFF;
        --shadow-sm: 0 2px 8px rgba(145,95,181,0.08);
        --shadow-md: 0 8px 32px rgba(145,95,181,0.12);
        --shadow-lg: 0 20px 60px rgba(145,95,181,0.16);
        --r-sm: 12px;
        --r-md: 20px;
        --r-lg: 28px;
        --r-xl: 40px;
        --r-full: 9999px;
      }

      #fh-root * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        user-select: none;
        -webkit-user-select: none;
      }

      #fh-root input, #fh-root textarea {
        user-select: text;
        -webkit-user-select: text;
        font-size: 16px !important;
      }

      #fh-root {
        font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        background: var(--light);
        color: var(--text);
        min-height: 100vh;
        position: relative;
        overflow-x: hidden;
        touch-action: pan-y;
      }

      /* ─── TICKER ─── */
      .fh-ticker-wrap {
        background: var(--dark);
        overflow: hidden;
        height: 38px;
        display: flex;
        align-items: center;
      }
      .fh-ticker-inner {
        display: flex;
        gap: 64px;
        align-items: center;
        animation: fh-ticker 28s linear infinite;
        white-space: nowrap;
      }
      .fh-ticker-item {
        display: flex;
        align-items: center;
        gap: 10px;
        color: rgba(255,255,255,0.55);
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0.5px;
        text-transform: uppercase;
      }
      .fh-ticker-dot {
        width: 4px; height: 4px;
        background: var(--accent1);
        border-radius: 50%;
        flex-shrink: 0;
      }
      @keyframes fh-ticker {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }

      /* ─── NAVBAR ─── */
      .fh-nav {
        position: sticky;
        top: 0;
        z-index: 100;
        background: rgba(250,250,250,0.92);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-bottom: 1px solid var(--border);
        padding: 0 20px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }
      .fh-logo {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        flex-shrink: 0;
      }
      .fh-logo-icon {
        width: 32px; height: 32px;
        background: var(--accent-grad);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .fh-logo-icon svg { width: 18px; height: 18px; color: white; }
      .fh-logo-text {
        font-size: 17px;
        font-weight: 800;
        color: var(--dark);
        letter-spacing: -0.5px;
      }
      .fh-logo-text span {
        background: var(--accent-grad);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .fh-nav-search {
        flex: 1;
        max-width: 320px;
        background: var(--surface);
        border: 1.5px solid var(--border);
        border-radius: var(--r-full);
        height: 40px;
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 0 14px;
        cursor: pointer;
        transition: border-color 0.2s, box-shadow 0.2s;
      }
      .fh-nav-search:focus-within {
        border-color: var(--accent1);
        box-shadow: 0 0 0 3px rgba(167,123,198,0.15);
      }
      .fh-nav-search input {
        border: none;
        background: none;
        font-family: inherit;
        font-size: 14px;
        color: var(--text);
        flex: 1;
        outline: none;
        cursor: pointer;
      }
      .fh-nav-search input::placeholder { color: var(--muted); }
      .fh-nav-actions {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .fh-btn-menu {
        width: 38px; height: 38px;
        border-radius: var(--r-full);
        border: 1.5px solid var(--border);
        background: var(--white);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.18s;
      }
      .fh-btn-menu:active { background: var(--surface); }
      .fh-btn-menu svg { width: 18px; height: 18px; color: var(--dark); }
      .fh-btn-sign {
        background: var(--accent-grad);
        color: white;
        border: none;
        border-radius: var(--r-full);
        padding: 0 16px;
        height: 36px;
        font-family: inherit;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        white-space: nowrap;
        transition: opacity 0.18s;
      }
      .fh-btn-sign:active { opacity: 0.85; }

      /* ─── HERO ─── */
      .fh-hero {
        position: relative;
        min-height: 480px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 48px 20px 0;
        overflow: hidden;
        text-align: center;
      }
      .fh-hero-bg {
        position: absolute;
        inset: 0;
        background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(167,123,198,0.18) 0%, transparent 70%),
                    radial-gradient(ellipse 60% 40% at 80% 100%, rgba(145,95,181,0.1) 0%, transparent 60%);
        pointer-events: none;
      }
      .fh-hero-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: var(--surface2);
        border: 1px solid rgba(167,123,198,0.3);
        border-radius: var(--r-full);
        padding: 6px 14px;
        font-size: 12px;
        font-weight: 600;
        color: var(--accent2);
        margin-bottom: 20px;
        letter-spacing: 0.2px;
      }
      .fh-hero-badge svg { width: 13px; height: 13px; }
      .fh-hero h1 {
        font-family: 'Playfair Display', serif;
        font-size: clamp(30px, 8vw, 48px);
        font-weight: 600;
        line-height: 1.15;
        color: var(--dark);
        letter-spacing: -0.5px;
        margin-bottom: 12px;
        position: relative;
      }
      .fh-hero h1 em {
        font-style: italic;
        background: var(--accent-grad);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .fh-hero p {
        font-size: 15px;
        color: var(--muted);
        max-width: 340px;
        line-height: 1.55;
        margin-bottom: 32px;
      }

      /* ─── SEARCH CARD ─── */
      .fh-search-card {
        background: var(--white);
        border-radius: var(--r-xl);
        box-shadow: var(--shadow-lg);
        padding: 20px;
        width: 100%;
        max-width: 440px;
        position: relative;
        border: 1px solid var(--border);
        z-index: 2;
      }
      .fh-search-row {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .fh-search-field {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 14px 16px;
        background: var(--surface);
        border-radius: var(--r-md);
        border: 1.5px solid transparent;
        cursor: pointer;
        transition: border-color 0.2s;
        position: relative;
      }
      .fh-search-field.active { border-color: var(--accent1); }
      .fh-search-field-icon {
        width: 36px; height: 36px;
        background: var(--white);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        box-shadow: var(--shadow-sm);
      }
      .fh-search-field-icon svg { width: 16px; height: 16px; color: var(--accent2); }
      .fh-search-field-info { flex: 1; text-align: left; }
      .fh-search-field-label {
        font-size: 10px;
        font-weight: 700;
        color: var(--muted);
        text-transform: uppercase;
        letter-spacing: 0.8px;
        display: block;
        margin-bottom: 2px;
      }
      .fh-search-field-val {
        font-size: 14px;
        font-weight: 600;
        color: var(--dark);
      }
      .fh-search-field-val.placeholder { color: var(--muted); font-weight: 400; }
      .fh-date-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
      }
      .fh-guests-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .fh-guests-ctrl {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-left: auto;
      }
      .fh-guests-btn {
        width: 30px; height: 30px;
        border-radius: 50%;
        border: 1.5px solid var(--border);
        background: var(--white);
        cursor: pointer;
        font-size: 18px;
        line-height: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--dark);
        font-weight: 300;
        transition: border-color 0.18s;
      }
      .fh-guests-btn:active { border-color: var(--accent1); }
      .fh-guests-num {
        font-size: 16px;
        font-weight: 700;
        color: var(--dark);
        min-width: 20px;
        text-align: center;
      }
      .fh-search-btn {
        margin-top: 12px;
        width: 100%;
        height: 52px;
        background: var(--accent-grad);
        color: white;
        border: none;
        border-radius: var(--r-lg);
        font-family: inherit;
        font-size: 15px;
        font-weight: 700;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        transition: opacity 0.18s, transform 0.18s;
        letter-spacing: 0.2px;
      }
      .fh-search-btn:active { opacity: 0.9; transform: scale(0.99); }
      .fh-search-btn svg { width: 18px; height: 18px; }

      /* ─── SUGGESTIONS DROPDOWN ─── */
      .fh-suggestions {
        position: absolute;
        top: calc(100% + 8px);
        left: 0; right: 0;
        background: var(--white);
        border-radius: var(--r-md);
        border: 1px solid var(--border);
        box-shadow: var(--shadow-lg);
        overflow: hidden;
        z-index: 200;
        max-height: 320px;
        overflow-y: auto;
      }
      .fh-suggestion-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 14px 16px;
        cursor: pointer;
        transition: background 0.15s;
      }
      .fh-suggestion-item:active { background: var(--surface); }
      .fh-suggestion-icon {
        width: 40px; height: 40px;
        background: var(--surface);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .fh-suggestion-icon svg { width: 18px; height: 18px; color: var(--muted); }
      .fh-suggestion-name {
        font-size: 14px;
        font-weight: 600;
        color: var(--dark);
      }
      .fh-suggestion-sub {
        font-size: 12px;
        color: var(--muted);
        margin-top: 1px;
      }

      /* ─── CALENDAR ─── */
      .fh-bottom-sheet {
        position: fixed;
        inset: 0;
        z-index: 500;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.28s;
      }
      .fh-bottom-sheet.open {
        pointer-events: auto;
        opacity: 1;
      }
      .fh-bs-backdrop {
        position: absolute;
        inset: 0;
        background: rgba(23,23,23,0.5);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
      }
      .fh-bs-content {
        position: relative;
        background: var(--white);
        border-radius: var(--r-xl) var(--r-xl) 0 0;
        max-height: 90vh;
        overflow-y: auto;
        transform: translateY(100%);
        transition: transform 0.38s cubic-bezier(0.16,1,0.3,1);
        padding: 8px 0 env(safe-area-inset-bottom, 20px);
      }
      .fh-bottom-sheet.open .fh-bs-content {
        transform: translateY(0);
      }
      .fh-bs-handle {
        width: 36px; height: 4px;
        background: var(--border);
        border-radius: var(--r-full);
        margin: 10px auto 16px;
      }
      .fh-bs-title {
        font-size: 17px;
        font-weight: 700;
        color: var(--dark);
        text-align: center;
        padding: 0 20px 16px;
        border-bottom: 1px solid var(--border);
      }
      .fh-cal {
        padding: 20px;
      }
      .fh-cal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
      }
      .fh-cal-month {
        font-size: 16px;
        font-weight: 700;
        color: var(--dark);
      }
      .fh-cal-nav {
        width: 36px; height: 36px;
        border-radius: 50%;
        border: 1.5px solid var(--border);
        background: var(--white);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: border-color 0.18s;
      }
      .fh-cal-nav:active { border-color: var(--accent1); }
      .fh-cal-nav svg { width: 16px; height: 16px; color: var(--dark); }
      .fh-cal-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 4px;
      }
      .fh-cal-dow {
        text-align: center;
        font-size: 11px;
        font-weight: 600;
        color: var(--muted);
        padding: 4px 0 8px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .fh-cal-day {
        aspect-ratio: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 500;
        color: var(--dark);
        border-radius: 50%;
        cursor: pointer;
        transition: background 0.15s, color 0.15s;
        position: relative;
      }
      .fh-cal-day.empty { pointer-events: none; }
      .fh-cal-day.past { color: var(--border); pointer-events: none; }
      .fh-cal-day:not(.past):not(.empty):active { background: var(--surface2); }
      .fh-cal-day.selected {
        background: var(--accent-grad);
        color: white;
        font-weight: 700;
      }
      .fh-cal-day.in-range {
        background: rgba(167,123,198,0.12);
        border-radius: 0;
        color: var(--dark);
      }
      .fh-cal-day.range-start {
        border-radius: 50% 0 0 50%;
      }
      .fh-cal-day.range-end {
        border-radius: 0 50% 50% 0;
      }
      .fh-cal-day.range-start.selected, .fh-cal-day.range-end.selected {
        background: var(--accent-grad);
        color: white;
        border-radius: 50%;
      }
      .fh-bs-actions {
        display: flex;
        gap: 10px;
        padding: 16px 20px;
        border-top: 1px solid var(--border);
      }
      .fh-bs-clear {
        flex: 1;
        height: 48px;
        border: 1.5px solid var(--border);
        border-radius: var(--r-lg);
        background: var(--white);
        font-family: inherit;
        font-size: 14px;
        font-weight: 600;
        color: var(--muted);
        cursor: pointer;
      }
      .fh-bs-save {
        flex: 2;
        height: 48px;
        border: none;
        border-radius: var(--r-lg);
        background: var(--accent-grad);
        font-family: inherit;
        font-size: 14px;
        font-weight: 700;
        color: white;
        cursor: pointer;
      }

      /* ─── STATS STRIP ─── */
      .fh-stats {
        display: flex;
        gap: 0;
        overflow-x: auto;
        padding: 24px 20px;
        scrollbar-width: none;
        -ms-overflow-style: none;
        border-bottom: 1px solid var(--border);
      }
      .fh-stats::-webkit-scrollbar { display: none; }
      .fh-stat {
        flex: 0 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 28px;
        border-right: 1px solid var(--border);
        text-align: center;
      }
      .fh-stat:last-child { border-right: none; }
      .fh-stat-num {
        font-family: 'Playfair Display', serif;
        font-size: 28px;
        font-weight: 700;
        color: var(--dark);
        line-height: 1;
        margin-bottom: 4px;
      }
      .fh-stat-num span {
        background: var(--accent-grad);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .fh-stat-label {
        font-size: 11px;
        color: var(--muted);
        font-weight: 500;
        white-space: nowrap;
      }

      /* ─── SECTION TITLES ─── */
      .fh-section { padding: 32px 20px; }
      .fh-section-head {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        margin-bottom: 20px;
      }
      .fh-section-title {
        font-family: 'Playfair Display', serif;
        font-size: 22px;
        font-weight: 600;
        color: var(--dark);
        line-height: 1.2;
      }
      .fh-section-subtitle {
        font-size: 13px;
        color: var(--muted);
        margin-top: 4px;
      }
      .fh-see-all {
        font-size: 13px;
        font-weight: 600;
        color: var(--accent2);
        cursor: pointer;
        white-space: nowrap;
        text-decoration: underline;
        text-decoration-color: transparent;
        transition: text-decoration-color 0.15s;
      }
      .fh-see-all:active { text-decoration-color: var(--accent2); }

      /* ─── CITY PILLS ─── */
      .fh-cities {
        display: flex;
        gap: 10px;
        overflow-x: auto;
        padding-bottom: 4px;
        scrollbar-width: none;
      }
      .fh-cities::-webkit-scrollbar { display: none; }
      .fh-city-pill {
        flex: 0 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
        padding: 14px 18px;
        background: var(--white);
        border: 1.5px solid var(--border);
        border-radius: var(--r-lg);
        cursor: pointer;
        transition: border-color 0.2s, background 0.2s;
      }
      .fh-city-pill.active {
        border-color: var(--accent1);
        background: var(--surface);
      }
      .fh-city-pill:active { background: var(--surface2); }
      .fh-city-pill-emoji { font-size: 22px; line-height: 1; }
      .fh-city-pill-name {
        font-size: 12px;
        font-weight: 700;
        color: var(--dark);
        white-space: nowrap;
      }
      .fh-city-pill-tag {
        font-size: 10px;
        color: var(--muted);
        white-space: nowrap;
      }

      /* ─── HOTEL CARDS ─── */
      .fh-hotels-grid {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .fh-hotel-card {
        background: var(--white);
        border-radius: var(--r-lg);
        overflow: hidden;
        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        transition: box-shadow 0.22s, transform 0.22s;
        display: flex;
        flex-direction: column;
      }
      .fh-hotel-card:active {
        transform: scale(0.99);
        box-shadow: var(--shadow-md);
      }
      .fh-hotel-img-wrap {
        position: relative;
        overflow: hidden;
        height: 200px;
      }
      .fh-hotel-img {
        width: 100%; height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.4s;
      }
      .fh-hotel-card:active .fh-hotel-img { transform: scale(1.03); }
      .fh-hotel-tag {
        position: absolute;
        top: 12px; left: 12px;
        background: var(--white);
        border-radius: var(--r-full);
        padding: 5px 10px;
        font-size: 11px;
        font-weight: 700;
        color: var(--dark);
        display: flex;
        align-items: center;
        gap: 5px;
        box-shadow: var(--shadow-sm);
      }
      .fh-hotel-tag svg { width: 10px; height: 10px; color: var(--accent2); }
      .fh-hotel-plus-badge {
        position: absolute;
        top: 12px; right: 12px;
        background: var(--accent-grad);
        color: white;
        border-radius: var(--r-full);
        padding: 5px 10px;
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.3px;
      }
      .fh-hotel-fav {
        position: absolute;
        bottom: 12px; right: 12px;
        width: 34px; height: 34px;
        background: rgba(255,255,255,0.9);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
      }
      .fh-hotel-fav svg { width: 16px; height: 16px; color: var(--dark); }
      .fh-hotel-body { padding: 16px; }
      .fh-hotel-location {
        font-size: 11px;
        color: var(--muted);
        font-weight: 500;
        margin-bottom: 4px;
        display: flex;
        align-items: center;
        gap: 4px;
      }
      .fh-hotel-location svg { width: 11px; height: 11px; }
      .fh-hotel-name {
        font-size: 16px;
        font-weight: 700;
        color: var(--dark);
        margin-bottom: 6px;
        line-height: 1.25;
      }
      .fh-hotel-highlight {
        font-size: 13px;
        color: var(--muted);
        margin-bottom: 12px;
        line-height: 1.45;
      }
      .fh-hotel-meta {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .fh-hotel-rating {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 13px;
        font-weight: 700;
        color: var(--dark);
      }
      .fh-hotel-rating svg { width: 14px; height: 14px; color: #FFB800; }
      .fh-hotel-reviews {
        font-size: 12px;
        color: var(--muted);
        font-weight: 400;
        margin-left: 2px;
      }
      .fh-hotel-cat {
        font-size: 11px;
        font-weight: 600;
        color: var(--accent2);
        background: var(--surface);
        padding: 4px 10px;
        border-radius: var(--r-full);
      }

      /* ─── HOTELS+ BANNER ─── */
      .fh-plus-banner {
        margin: 0 20px 32px;
        background: linear-gradient(135deg, #1a0a2e 0%, #2d1052 50%, #170720 100%);
        border-radius: var(--r-xl);
        padding: 28px 24px;
        position: relative;
        overflow: hidden;
        cursor: pointer;
      }
      .fh-plus-banner-glow {
        position: absolute;
        top: -40px; right: -40px;
        width: 180px; height: 180px;
        background: radial-gradient(circle, rgba(167,123,198,0.4) 0%, transparent 70%);
        pointer-events: none;
      }
      .fh-plus-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: rgba(255,255,255,0.1);
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: var(--r-full);
        padding: 5px 12px;
        font-size: 11px;
        font-weight: 700;
        color: rgba(255,255,255,0.9);
        margin-bottom: 14px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
      }
      .fh-plus-badge svg { width: 12px; height: 12px; color: var(--accent1); }
      .fh-plus-banner h3 {
        font-family: 'Playfair Display', serif;
        font-size: 24px;
        font-weight: 600;
        color: white;
        line-height: 1.2;
        margin-bottom: 8px;
      }
      .fh-plus-banner p {
        font-size: 13px;
        color: rgba(255,255,255,0.65);
        line-height: 1.5;
        margin-bottom: 20px;
      }
      .fh-plus-perks {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 20px;
      }
      .fh-plus-perk {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 13px;
        color: rgba(255,255,255,0.8);
      }
      .fh-plus-perk-dot {
        width: 6px; height: 6px;
        background: var(--accent1);
        border-radius: 50%;
        flex-shrink: 0;
      }
      .fh-plus-cta {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: var(--accent-grad);
        color: white;
        border-radius: var(--r-full);
        padding: 12px 22px;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        font-family: inherit;
        transition: opacity 0.18s;
      }
      .fh-plus-cta:active { opacity: 0.85; }
      .fh-plus-cta svg { width: 16px; height: 16px; }

      /* ─── PARTNERS TICKER ─── */
      .fh-partners {
        padding: 24px 0;
        border-top: 1px solid var(--border);
        border-bottom: 1px solid var(--border);
        overflow: hidden;
        background: var(--white);
      }
      .fh-partners-label {
        text-align: center;
        font-size: 11px;
        font-weight: 600;
        color: var(--muted);
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 16px;
      }
      .fh-partners-track {
        display: flex;
        gap: 48px;
        animation: fh-ticker 20s linear infinite;
        width: max-content;
        align-items: center;
      }
      .fh-partner-item {
        display: flex;
        align-items: center;
        opacity: 0.4;
        transition: opacity 0.2s;
        height: 28px;
        color: var(--dark);
      }
      .fh-partner-item svg { height: 20px; width: auto; }

      /* ─── HOTEL DETAIL ─── */
      .fh-detail-view {
        min-height: 100vh;
        background: var(--light);
        display: none;
      }
      .fh-detail-view.active { display: block; }
      .fh-detail-hero {
        position: relative;
        height: 280px;
        overflow: hidden;
      }
      .fh-detail-hero img {
        width: 100%; height: 100%;
        object-fit: cover;
        display: block;
      }
      .fh-detail-back {
        position: absolute;
        top: 16px; left: 16px;
        width: 38px; height: 38px;
        background: rgba(255,255,255,0.9);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
      }
      .fh-detail-back svg { width: 18px; height: 18px; color: var(--dark); }
      .fh-detail-share {
        position: absolute;
        top: 16px; right: 60px;
        width: 38px; height: 38px;
        background: rgba(255,255,255,0.9);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
      }
      .fh-detail-like {
        position: absolute;
        top: 16px; right: 16px;
        width: 38px; height: 38px;
        background: rgba(255,255,255,0.9);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
      }
      .fh-detail-like svg, .fh-detail-share svg { width: 18px; height: 18px; color: var(--dark); }
      .fh-detail-body { padding: 20px; }
      .fh-detail-cat {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: var(--surface);
        border-radius: var(--r-full);
        padding: 5px 12px;
        font-size: 11px;
        font-weight: 700;
        color: var(--accent2);
        margin-bottom: 10px;
      }
      .fh-detail-name {
        font-family: 'Playfair Display', serif;
        font-size: 26px;
        font-weight: 600;
        color: var(--dark);
        line-height: 1.2;
        margin-bottom: 8px;
      }
      .fh-detail-loc {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 13px;
        color: var(--muted);
        margin-bottom: 14px;
      }
      .fh-detail-loc svg { width: 14px; height: 14px; color: var(--accent2); }
      .fh-detail-ratings {
        display: flex;
        gap: 16px;
        padding: 16px;
        background: var(--surface);
        border-radius: var(--r-md);
        margin-bottom: 20px;
      }
      .fh-detail-rating-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
        flex: 1;
      }
      .fh-detail-rating-num {
        font-size: 20px;
        font-weight: 800;
        color: var(--dark);
      }
      .fh-detail-rating-label {
        font-size: 10px;
        color: var(--muted);
        font-weight: 500;
        text-align: center;
      }
      .fh-detail-divider {
        width: 1px;
        background: var(--border);
        align-self: stretch;
      }
      .fh-amenities-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-bottom: 24px;
      }
      .fh-amenity {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px;
        background: var(--white);
        border-radius: var(--r-sm);
        border: 1px solid var(--border);
        font-size: 13px;
        font-weight: 500;
        color: var(--dark);
      }
      .fh-amenity svg { width: 16px; height: 16px; color: var(--accent2); flex-shrink: 0; }
      .fh-detail-sticky {
        position: sticky;
        bottom: 0;
        background: rgba(250,250,250,0.95);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-top: 1px solid var(--border);
        padding: 14px 20px calc(14px + env(safe-area-inset-bottom, 0px));
        display: flex;
        gap: 12px;
        align-items: center;
      }
      .fh-detail-price-info { flex: 1; }
      .fh-detail-incl {
        font-size: 11px;
        font-weight: 700;
        color: var(--accent2);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 2px;
      }
      .fh-detail-nights {
        font-size: 13px;
        color: var(--muted);
      }
      .fh-reserve-btn {
        flex: 1.5;
        height: 50px;
        background: var(--accent-grad);
        color: white;
        border: none;
        border-radius: var(--r-lg);
        font-family: inherit;
        font-size: 15px;
        font-weight: 700;
        cursor: pointer;
        transition: opacity 0.18s;
      }
      .fh-reserve-btn:active { opacity: 0.88; }

      /* ─── CHECKOUT ─── */
      .fh-checkout-view {
        min-height: 100vh;
        background: var(--light);
        display: none;
      }
      .fh-checkout-view.active { display: block; }
      .fh-checkout-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 16px 20px;
        border-bottom: 1px solid var(--border);
        background: var(--white);
      }
      .fh-checkout-back {
        width: 38px; height: 38px;
        border-radius: 50%;
        border: 1.5px solid var(--border);
        background: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        flex-shrink: 0;
      }
      .fh-checkout-back svg { width: 18px; height: 18px; color: var(--dark); }
      .fh-checkout-title {
        font-size: 17px;
        font-weight: 700;
        color: var(--dark);
      }
      .fh-checkout-body { padding: 20px; }
      .fh-checkout-hotel-card {
        display: flex;
        gap: 14px;
        background: var(--white);
        border-radius: var(--r-md);
        overflow: hidden;
        border: 1px solid var(--border);
        margin-bottom: 20px;
      }
      .fh-checkout-hotel-img {
        width: 90px;
        flex-shrink: 0;
        object-fit: cover;
        display: block;
      }
      .fh-checkout-hotel-info {
        padding: 12px 12px 12px 0;
        flex: 1;
      }
      .fh-checkout-hotel-name {
        font-size: 14px;
        font-weight: 700;
        color: var(--dark);
        margin-bottom: 4px;
        line-height: 1.3;
      }
      .fh-checkout-hotel-cat {
        font-size: 11px;
        color: var(--muted);
        margin-bottom: 6px;
      }
      .fh-checkout-hotel-stars {
        display: flex;
        gap: 2px;
      }
      .fh-checkout-hotel-stars svg { width: 12px; height: 12px; color: #FFB800; }
      .fh-checkout-section {
        background: var(--white);
        border-radius: var(--r-md);
        border: 1px solid var(--border);
        overflow: hidden;
        margin-bottom: 14px;
      }
      .fh-checkout-section-title {
        font-size: 15px;
        font-weight: 700;
        color: var(--dark);
        padding: 16px;
        border-bottom: 1px solid var(--border);
      }
      .fh-checkout-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 16px;
        border-bottom: 1px solid var(--border);
      }
      .fh-checkout-row:last-child { border-bottom: none; }
      .fh-checkout-row-label {
        font-size: 14px;
        font-weight: 600;
        color: var(--dark);
      }
      .fh-checkout-row-val {
        font-size: 14px;
        color: var(--muted);
      }
      .fh-checkout-row-edit {
        font-size: 13px;
        font-weight: 600;
        color: var(--accent2);
        text-decoration: underline;
        cursor: pointer;
      }
      .fh-checkout-incl-title {
        font-size: 16px;
        font-weight: 700;
        color: var(--dark);
        padding: 16px 16px 8px;
        border-bottom: 1px solid var(--border);
      }
      .fh-incl-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        background: linear-gradient(135deg, rgba(167,123,198,0.15), rgba(145,95,181,0.15));
        border: 1px solid rgba(167,123,198,0.3);
        border-radius: var(--r-full);
        padding: 4px 10px;
        font-size: 11px;
        font-weight: 700;
        color: var(--accent2);
        margin: 0 16px 16px;
        width: fit-content;
      }
      .fh-upsell-row {
        padding: 14px 16px;
        display: flex;
        align-items: flex-start;
        gap: 12px;
        cursor: pointer;
      }
      .fh-upsell-check {
        width: 22px; height: 22px;
        border: 2px solid var(--border);
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-top: 1px;
        transition: border-color 0.18s, background 0.18s;
      }
      .fh-upsell-check.checked {
        background: var(--accent-grad);
        border-color: var(--accent2);
      }
      .fh-upsell-check svg { width: 13px; height: 13px; color: white; display: none; }
      .fh-upsell-check.checked svg { display: block; }
      .fh-upsell-info { flex: 1; }
      .fh-upsell-label {
        font-size: 14px;
        font-weight: 700;
        color: var(--dark);
        margin-bottom: 4px;
      }
      .fh-upsell-desc {
        font-size: 12px;
        color: var(--muted);
        line-height: 1.45;
      }
      .fh-checkout-cta-wrap {
        padding: 20px;
        padding-bottom: calc(20px + env(safe-area-inset-bottom, 0px));
      }
      .fh-checkout-cta {
        width: 100%;
        height: 54px;
        background: var(--accent-grad);
        color: white;
        border: none;
        border-radius: var(--r-lg);
        font-family: inherit;
        font-size: 16px;
        font-weight: 700;
        cursor: pointer;
        transition: opacity 0.18s, transform 0.18s;
        letter-spacing: 0.2px;
      }
      .fh-checkout-cta:active { opacity: 0.88; transform: scale(0.99); }

      /* ─── MENU DRAWER ─── */
      .fh-drawer {
        position: fixed;
        inset: 0;
        z-index: 600;
        pointer-events: none;
      }
      .fh-drawer.open { pointer-events: auto; }
      .fh-drawer-backdrop {
        position: absolute;
        inset: 0;
        background: rgba(23,23,23,0.5);
        opacity: 0;
        transition: opacity 0.28s;
        backdrop-filter: blur(3px);
        -webkit-backdrop-filter: blur(3px);
      }
      .fh-drawer.open .fh-drawer-backdrop { opacity: 1; }
      .fh-drawer-panel {
        position: absolute;
        top: 0; right: 0;
        width: min(340px, 85vw);
        height: 100%;
        background: var(--white);
        transform: translateX(100%);
        transition: transform 0.38s cubic-bezier(0.16,1,0.3,1);
        overflow-y: auto;
        padding: env(safe-area-inset-top, 0px) 0 env(safe-area-inset-bottom, 0px);
      }
      .fh-drawer.open .fh-drawer-panel { transform: translateX(0); }
      .fh-drawer-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 20px 16px;
        border-bottom: 1px solid var(--border);
      }
      .fh-drawer-close {
        width: 34px; height: 34px;
        border-radius: 50%;
        border: 1.5px solid var(--border);
        background: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      .fh-drawer-close svg { width: 14px; height: 14px; color: var(--dark); }
      .fh-drawer-logo {
        font-family: 'Playfair Display', serif;
        font-size: 18px;
        font-weight: 600;
        color: var(--dark);
      }
      .fh-drawer-section {
        padding: 16px 20px 8px;
      }
      .fh-drawer-section-label {
        font-size: 10px;
        font-weight: 700;
        color: var(--muted);
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 8px;
      }
      .fh-drawer-item {
        display: flex;
        align-items: center;
        gap: 14px;
        padding: 14px 0;
        border-bottom: 1px solid var(--border);
        cursor: pointer;
        transition: color 0.15s;
      }
      .fh-drawer-item:last-child { border-bottom: none; }
      .fh-drawer-item-icon {
        width: 38px; height: 38px;
        background: var(--surface);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .fh-drawer-item-icon svg { width: 18px; height: 18px; color: var(--accent2); }
      .fh-drawer-item-label {
        font-size: 15px;
        font-weight: 600;
        color: var(--dark);
        flex: 1;
      }
      .fh-drawer-item-arrow svg { width: 14px; height: 14px; color: var(--muted); }
      .fh-drawer-plus-card {
        margin: 16px 20px;
        background: linear-gradient(135deg, #1a0a2e 0%, #2d1052 100%);
        border-radius: var(--r-lg);
        padding: 18px;
      }
      .fh-drawer-plus-label {
        font-size: 10px;
        font-weight: 700;
        color: rgba(255,255,255,0.6);
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 8px;
      }
      .fh-drawer-plus-title {
        font-family: 'Playfair Display', serif;
        font-size: 18px;
        font-weight: 600;
        color: white;
        margin-bottom: 8px;
      }
      .fh-drawer-plus-sub {
        font-size: 12px;
        color: rgba(255,255,255,0.55);
        margin-bottom: 14px;
      }
      .fh-drawer-plus-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: var(--accent-grad);
        color: white;
        border-radius: var(--r-full);
        padding: 10px 16px;
        font-size: 12px;
        font-weight: 700;
        border: none;
        font-family: inherit;
        cursor: pointer;
      }

      /* ─── COOKIES ─── */
      .fh-cookie {
        position: fixed;
        bottom: 20px;
        left: 16px; right: 16px;
        background: var(--dark);
        border-radius: var(--r-lg);
        padding: 18px;
        z-index: 1000;
        box-shadow: var(--shadow-lg);
        transform: translateY(100px);
        opacity: 0;
        transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.4s;
        display: flex;
        flex-direction: column;
        gap: 14px;
      }
      .fh-cookie.show {
        transform: translateY(0);
        opacity: 1;
      }
      .fh-cookie-text {
        font-size: 13px;
        color: rgba(255,255,255,0.75);
        line-height: 1.5;
      }
      .fh-cookie-text a {
        color: var(--accent1);
        text-decoration: underline;
      }
      .fh-cookie-actions {
        display: flex;
        gap: 8px;
      }
      .fh-cookie-btn-reject {
        flex: 1;
        height: 40px;
        border: 1.5px solid rgba(255,255,255,0.2);
        border-radius: var(--r-full);
        background: transparent;
        color: rgba(255,255,255,0.7);
        font-family: inherit;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
      }
      .fh-cookie-btn-accept {
        flex: 2;
        height: 40px;
        border: none;
        border-radius: var(--r-full);
        background: var(--accent-grad);
        color: white;
        font-family: inherit;
        font-size: 13px;
        font-weight: 700;
        cursor: pointer;
      }

      /* ─── TOAST ─── */
      .fh-toast {
        position: fixed;
        bottom: 90px;
        left: 50%;
        transform: translateX(-50%) translateY(20px);
        background: var(--dark);
        color: white;
        padding: 12px 20px;
        border-radius: var(--r-full);
        font-size: 13px;
        font-weight: 600;
        white-space: nowrap;
        z-index: 900;
        opacity: 0;
        transition: opacity 0.25s, transform 0.25s;
        pointer-events: none;
      }
      .fh-toast.show {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }

      /* ─── EMPTY STATE ─── */
      .fh-empty {
        text-align: center;
        padding: 60px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
      }
      .fh-empty-icon {
        width: 64px; height: 64px;
        background: var(--surface);
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 4px;
      }
      .fh-empty-icon svg { width: 28px; height: 28px; color: var(--accent2); }
      .fh-empty-title {
        font-size: 18px;
        font-weight: 700;
        color: var(--dark);
      }
      .fh-empty-sub {
        font-size: 14px;
        color: var(--muted);
        max-width: 260px;
        line-height: 1.5;
      }

      /* ─── HOTELS+ VIEW ─── */
      .fh-plus-view {
        min-height: 100vh;
        background: #0d0418;
        display: none;
      }
      .fh-plus-view.active { display: block; }
      .fh-plus-view-hero {
        padding: 60px 24px 40px;
        position: relative;
        overflow: hidden;
      }
      .fh-plus-view-glow1 {
        position: absolute;
        top: -80px; left: -80px;
        width: 300px; height: 300px;
        background: radial-gradient(circle, rgba(167,123,198,0.25) 0%, transparent 70%);
        pointer-events: none;
      }
      .fh-plus-view-glow2 {
        position: absolute;
        bottom: -60px; right: -60px;
        width: 240px; height: 240px;
        background: radial-gradient(circle, rgba(145,95,181,0.2) 0%, transparent 70%);
        pointer-events: none;
      }
      .fh-plus-view-back {
        width: 38px; height: 38px;
        background: rgba(255,255,255,0.1);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-bottom: 32px;
        border: 1px solid rgba(255,255,255,0.15);
      }
      .fh-plus-view-back svg { width: 18px; height: 18px; color: white; }
      .fh-plus-view-label {
        font-size: 11px;
        font-weight: 700;
        color: var(--accent1);
        text-transform: uppercase;
        letter-spacing: 1.5px;
        margin-bottom: 12px;
      }
      .fh-plus-view h1 {
        font-family: 'Playfair Display', serif;
        font-size: 34px;
        font-weight: 600;
        color: white;
        line-height: 1.2;
        margin-bottom: 14px;
      }
      .fh-plus-view h1 em {
        font-style: italic;
        color: var(--accent1);
      }
      .fh-plus-view p {
        font-size: 15px;
        color: rgba(255,255,255,0.6);
        line-height: 1.6;
        margin-bottom: 28px;
      }
      .fh-plus-benefits {
        padding: 0 24px 32px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .fh-plus-benefit {
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: var(--r-md);
        padding: 16px;
        display: flex;
        align-items: flex-start;
        gap: 14px;
      }
      .fh-plus-benefit-icon {
        width: 42px; height: 42px;
        background: rgba(167,123,198,0.2);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .fh-plus-benefit-icon svg { width: 20px; height: 20px; color: var(--accent1); }
      .fh-plus-benefit-title {
        font-size: 15px;
        font-weight: 700;
        color: white;
        margin-bottom: 4px;
      }
      .fh-plus-benefit-desc {
        font-size: 13px;
        color: rgba(255,255,255,0.55);
        line-height: 1.45;
      }
      .fh-plus-cta-full {
        padding: 0 24px 40px;
      }
      .fh-plus-cta-btn {
        width: 100%;
        height: 54px;
        background: var(--accent-grad);
        color: white;
        border: none;
        border-radius: var(--r-lg);
        font-family: inherit;
        font-size: 16px;
        font-weight: 700;
        cursor: pointer;
        transition: opacity 0.18s;
      }
      .fh-plus-cta-btn:active { opacity: 0.88; }
      .fh-plus-hotel-cards {
        padding: 0 24px 40px;
        display: flex;
        flex-direction: column;
        gap: 14px;
      }
      .fh-plus-hotel-card {
        background: rgba(255,255,255,0.07);
        border: 1px solid rgba(255,255,255,0.12);
        border-radius: var(--r-md);
        overflow: hidden;
        display: flex;
        gap: 0;
      }
      .fh-plus-hotel-card img {
        width: 100px;
        object-fit: cover;
        display: block;
      }
      .fh-plus-hotel-card-info {
        padding: 14px;
        flex: 1;
      }
      .fh-plus-hotel-card-name {
        font-size: 14px;
        font-weight: 700;
        color: white;
        margin-bottom: 4px;
        line-height: 1.25;
      }
      .fh-plus-hotel-card-city {
        font-size: 12px;
        color: rgba(255,255,255,0.5);
        margin-bottom: 10px;
      }
      .fh-plus-hotel-card-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        background: rgba(167,123,198,0.25);
        border-radius: var(--r-full);
        padding: 3px 10px;
        font-size: 10px;
        font-weight: 700;
        color: var(--accent1);
      }

      /* ─── ANIMATIONS ─── */
      @keyframes fh-fade-up {
        from { opacity: 0; transform: translateY(16px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .fh-animate { animation: fh-fade-up 0.4s ease both; }
      .fh-animate-d1 { animation-delay: 0.05s; }
      .fh-animate-d2 { animation-delay: 0.1s; }
      .fh-animate-d3 { animation-delay: 0.15s; }

      /* ─── SCROLLBAR ─── */
      .fh-bs-content::-webkit-scrollbar { display: none; }
    `;
    const style = document.createElement('style');
    style.id = 'fh-styles';
    style.textContent = css;
    document.head.appendChild(style);
  }

  // ─── ICONS ───────────────────────────────────────────────────────────────────
  const ICONS = {
    search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
    location: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>`,
    users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    star: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
    heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    chevron_left: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`,
    chevron_right: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
    menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>`,
    close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>`,
    share: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    diamond: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/></svg>`,
    hotel: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"/><path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16"/><path d="M8 7h.01"/><path d="M16 7h.01"/><path d="M12 7h.01"/><path d="M12 11h.01"/><path d="M16 11h.01"/><path d="M8 11h.01"/></svg>`,
    spa: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c-4.97 0-9-2.686-9-6 0-2.21 1.79-4 4-4 1.105 0 2 .895 2 2 0 1.105.895 2 2 2s2-.895 2-2c0-1.105.895-2 2-2 2.21 0 4 1.79 4 4 0 3.314-4.03 6-9 6Z"/><path d="M12 2s0 6-4 8"/><path d="M12 2s0 6 4 8"/></svg>`,
    pool: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20"/><path d="M2 17c.75.75 1.5 1.5 3 1.5s2.25-.75 3-1.5 1.5-1.5 3-1.5 2.25.75 3 1.5 1.5 1.5 3 1.5"/><path d="M2 7c.75.75 1.5 1.5 3 1.5S7.25 7.75 8 7s1.5-1.5 3-1.5S13.25 6.25 14 7s1.5 1.5 3 1.5S19.25 7.75 20 7"/></svg>`,
    restaurant: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>`,
    wifi: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" x2="12.01" y1="20" y2="20"/></svg>`,
    globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    map: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg>`,
    award: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
    shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    crown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>`,
    arrow_right: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
    sparkle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
    concierge: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 22h18"/><path d="M6 18v-7a6 6 0 0 1 12 0v7"/><path d="M12 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></svg>`,
  };

  function amenityIcon(name) {
    const map = {
      'Spa': ICONS.spa,
      'Rooftop Pool': ICONS.pool,
      'Restaurante Fine Dining': ICONS.restaurant,
      'Concierge 24h': ICONS.concierge,
      'Beach Club': ICONS.pool,
      'Restaurante Fasano': ICONS.restaurant,
      'Restaurante': ICONS.restaurant,
      'Bar': ICONS.restaurant,
      'Pool': ICONS.pool,
      'Arte Contemporânea': ICONS.diamond,
      'Centro de Convenções': ICONS.hotel,
      'Piscina': ICONS.pool,
      'Academia': ICONS.award,
      'Vista Guaíba': ICONS.globe,
      'All-Inclusive': ICONS.crown,
      'Praia Privativa': ICONS.pool,
      'Parque Aquático': ICONS.pool,
      'Concierge': ICONS.concierge,
    };
    return map[name] || ICONS.hotel;
  }

  // ─── RENDER FUNCTIONS ─────────────────────────────────────────────────────────
  function renderTicker() {
    const items = [...CONFIG.ticker, ...CONFIG.ticker];
    return `
      <div class="fh-ticker-wrap">
        <div class="fh-ticker-inner">
          ${items.map(p => `<div class="fh-ticker-item"><span class="fh-ticker-dot"></span>${p}</div>`).join('')}
        </div>
      </div>
    `;
  }

  function renderNav() {
    return `
      <nav class="fh-nav">
        <div class="fh-logo" id="fh-logo-home">
          <div class="fh-logo-icon">${ICONS.hotel}</div>
          <div class="fh-logo-text">Frame<span>Hotels</span></div>
        </div>
        <div class="fh-nav-search" id="fh-nav-search">
          <div style="width:16px;height:16px;color:var(--muted)">${ICONS.search}</div>
          <input type="text" placeholder="Buscar cidade…" id="fh-nav-input" readonly>
        </div>
        <div class="fh-nav-actions">
          <button class="fh-btn-menu" id="fh-menu-btn" aria-label="Menu">${ICONS.menu}</button>
          <button class="fh-btn-sign">Entrar</button>
        </div>
      </nav>
    `;
  }

  function renderHero() {
    const checkinVal = STATE.checkInDate ? fmt(STATE.checkInDate) : '';
    const checkoutVal = STATE.checkOutDate ? fmt(STATE.checkOutDate) : '';

    return `
      <section class="fh-hero">
        <div class="fh-hero-bg"></div>
        <div class="fh-hero-badge fh-animate">${ICONS.sparkle} Parceiros Verificados • ${CONFIG.hotels.length}+ hotéis</div>
        <h1 class="fh-animate fh-animate-d1">Hotéis premium,<br><em>sem complicação</em></h1>
        <p class="fh-animate fh-animate-d2">Infraestrutura de busca inteligente para os melhores hotéis do Brasil. Curadoria Frame.</p>

        <div class="fh-search-card fh-animate fh-animate-d3">
          <div class="fh-search-row">

            <div class="fh-search-field" id="fh-field-where" style="position:relative;">
              <div class="fh-search-field-icon">${ICONS.location}</div>
              <div class="fh-search-field-info">
                <span class="fh-search-field-label">Destino</span>
                <span class="fh-search-field-val ${STATE.filteredCity ? '' : 'placeholder'}" id="fh-where-val">${STATE.filteredCity || 'Buscar cidade…'}</span>
              </div>
              <div class="fh-suggestions" id="fh-suggestions" style="display:none;"></div>
            </div>

            <div class="fh-date-row">
              <div class="fh-search-field" id="fh-field-checkin">
                <div class="fh-search-field-icon">${ICONS.calendar}</div>
                <div class="fh-search-field-info">
                  <span class="fh-search-field-label">Check-in</span>
                  <span class="fh-search-field-val ${checkinVal ? '' : 'placeholder'}" id="fh-checkin-val">${checkinVal || 'Adicionar'}</span>
                </div>
              </div>
              <div class="fh-search-field" id="fh-field-checkout">
                <div class="fh-search-field-icon">${ICONS.calendar}</div>
                <div class="fh-search-field-info">
                  <span class="fh-search-field-label">Check-out</span>
                  <span class="fh-search-field-val ${checkoutVal ? '' : 'placeholder'}" id="fh-checkout-val">${checkoutVal || 'Adicionar'}</span>
                </div>
              </div>
            </div>

            <div class="fh-search-field">
              <div class="fh-search-field-icon">${ICONS.users}</div>
              <div class="fh-search-field-info">
                <span class="fh-search-field-label">Hóspedes</span>
                <span class="fh-search-field-val">${STATE.guests} hóspede${STATE.guests !== 1 ? 's' : ''}</span>
              </div>
              <div class="fh-guests-ctrl">
                <button class="fh-guests-btn" id="fh-guests-minus">−</button>
                <span class="fh-guests-num" id="fh-guests-num">${STATE.guests}</span>
                <button class="fh-guests-btn" id="fh-guests-plus">+</button>
              </div>
            </div>
          </div>

          <button class="fh-search-btn" id="fh-search-btn">
            ${ICONS.search}
            Buscar hotéis
          </button>
        </div>
      </section>
    `;
  }

  function renderStats() {
    return `
      <div class="fh-stats">
        <div class="fh-stat"><div class="fh-stat-num"><span>6+</span></div><div class="fh-stat-label">Hotéis Curados</div></div>
        <div class="fh-stat"><div class="fh-stat-num"><span>100%</span></div><div class="fh-stat-label">Verificados</div></div>
        <div class="fh-stat"><div class="fh-stat-num"><span>5★</span></div><div class="fh-stat-label">Apenas Premium</div></div>
        <div class="fh-stat"><div class="fh-stat-num"><span>4</span></div><div class="fh-stat-label">Cidades</div></div>
      </div>
    `;
  }

  function renderCities() {
    return `
      <section class="fh-section" style="padding-bottom:0">
        <div class="fh-section-head">
          <div>
            <div class="fh-section-title">Explorar cidades</div>
            <div class="fh-section-subtitle">Encontre o destino ideal</div>
          </div>
        </div>
        <div class="fh-cities" id="fh-cities">
          <div class="fh-city-pill ${!STATE.filteredCity ? 'active' : ''}" data-city="">
            <span class="fh-city-pill-emoji">🗺️</span>
            <span class="fh-city-pill-name">Todas</span>
            <span class="fh-city-pill-tag">Brasil</span>
          </div>
          ${CONFIG.cities.map(c => `
            <div class="fh-city-pill ${STATE.filteredCity === c.name ? 'active' : ''}" data-city="${c.name}">
              <span class="fh-city-pill-emoji">${c.emoji}</span>
              <span class="fh-city-pill-name">${c.name}</span>
              <span class="fh-city-pill-tag">${c.tag}</span>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  function renderHotelCard(h) {
    return `
      <div class="fh-hotel-card" data-hotel-id="${h.id}">
        <div class="fh-hotel-img-wrap">
          <img class="fh-hotel-img" src="${h.img}" alt="${h.name}" loading="lazy">
          <div class="fh-hotel-tag">${ICONS.star} ${h.tag}</div>
          ${h.hotel_plus ? `<div class="fh-hotel-plus-badge">Hotels+</div>` : ''}
          <div class="fh-hotel-fav">${ICONS.heart}</div>
        </div>
        <div class="fh-hotel-body">
          <div class="fh-hotel-location">${ICONS.location} ${h.city}, ${h.state}</div>
          <div class="fh-hotel-name">${h.name}</div>
          <div class="fh-hotel-highlight">${h.highlight}</div>
          <div class="fh-hotel-meta">
            <div class="fh-hotel-rating">
              ${ICONS.star} ${h.rating}
              <span class="fh-hotel-reviews">(${h.reviews.toLocaleString('pt-BR')})</span>
            </div>
            <div class="fh-hotel-cat">${h.category}</div>
          </div>
        </div>
      </div>
    `;
  }

  function renderHotelsList() {
    const hotels = getFilteredHotels();
    if (hotels.length === 0) {
      return `
        <div class="fh-empty">
          <div class="fh-empty-icon">${ICONS.hotel}</div>
          <div class="fh-empty-title">Nenhum hotel encontrado</div>
          <div class="fh-empty-sub">Tente buscar por outra cidade ou remova os filtros aplicados.</div>
        </div>
      `;
    }
    return `<div class="fh-hotels-grid">${hotels.map(renderHotelCard).join('')}</div>`;
  }

  function renderHotelsSection() {
    const city = STATE.filteredCity;
    return `
      <section class="fh-section">
        <div class="fh-section-head">
          <div>
            <div class="fh-section-title">${city ? `Hotéis em ${city}` : 'Hotéis em Destaque'}</div>
            <div class="fh-section-subtitle">Todos verificados pela Frame</div>
          </div>
        </div>
        <div id="fh-hotels-list">${renderHotelsList()}</div>
      </section>
    `;
  }

  function renderPlusBanner() {
    return `
      <div class="fh-plus-banner" id="fh-plus-banner">
        <div class="fh-plus-banner-glow"></div>
        <div class="fh-plus-badge">${ICONS.crown} Hotels+</div>
        <h3>A experiência<br>além do quarto</h3>
        <p>Acesso a mordomias exclusivas, upgrades garantidos e experiências personalizadas nos melhores hotéis do Brasil.</p>
        <div class="fh-plus-perks">
          <div class="fh-plus-perk"><span class="fh-plus-perk-dot"></span>Check-in prioritário e late checkout</div>
          <div class="fh-plus-perk"><span class="fh-plus-perk-dot"></span>Amenities de boas-vindas curados</div>
          <div class="fh-plus-perk"><span class="fh-plus-perk-dot"></span>Concierge Frame dedicado 24h</div>
        </div>
        <button class="fh-plus-cta">${ICONS.sparkle} Conhecer Hotels+</button>
      </div>
    `;
  }

  function renderPartners() {
    const doubled = [...CONFIG.partners, ...CONFIG.partners];
    return `
      <div class="fh-partners">
        <div class="fh-partners-label">Parceiros Verificados</div>
        <div style="overflow:hidden;padding:0 20px;">
          <div class="fh-partners-track">
            ${doubled.map(p => `<div class="fh-partner-item">${p.svg}</div>`).join('')}
          </div>
        </div>
      </div>
    `;
  }

  function renderCalendar(target) {
    const d = STATE.calendarDate;
    const year = d.getFullYear();
    const month = d.getMonth();
    const today = new Date(); today.setHours(0,0,0,0);
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const monthName = d.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
    const dows = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    let days = '';
    for (let i = 0; i < firstDay; i++) days += `<div class="fh-cal-day empty"></div>`;
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const isPast = date < today;
      const isCI = STATE.checkInDate && date.getTime() === STATE.checkInDate.getTime();
      const isCO = STATE.checkOutDate && date.getTime() === STATE.checkOutDate.getTime();
      const inRange = STATE.checkInDate && STATE.checkOutDate && date > STATE.checkInDate && date < STATE.checkOutDate;
      let cls = 'fh-cal-day';
      if (isPast) cls += ' past';
      if (isCI) cls += ' selected range-start';
      if (isCO) cls += ' selected range-end';
      if (inRange) cls += ' in-range';
      days += `<div class="${cls}" data-date="${date.toISOString()}">${i}</div>`;
    }

    return `
      <div class="fh-bs-handle"></div>
      <div class="fh-bs-title">${target === 'checkin' ? 'Check-in' : 'Check-out'}</div>
      <div class="fh-cal">
        <div class="fh-cal-header">
          <button class="fh-cal-nav" id="fh-cal-prev">${ICONS.chevron_left}</button>
          <div class="fh-cal-month">${monthName.charAt(0).toUpperCase() + monthName.slice(1)}</div>
          <button class="fh-cal-nav" id="fh-cal-next">${ICONS.chevron_right}</button>
        </div>
        <div class="fh-cal-grid">
          ${dows.map(d => `<div class="fh-cal-dow">${d}</div>`).join('')}
          ${days}
        </div>
      </div>
      <div class="fh-bs-actions">
        <button class="fh-bs-clear" id="fh-cal-clear">Limpar</button>
        <button class="fh-bs-save" id="fh-cal-save">Salvar</button>
      </div>
    `;
  }

  function renderSuggestions(query) {
    const filtered = CONFIG.cities.filter(c =>
      !query || c.name.toLowerCase().includes(query.toLowerCase()) || c.state.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 6);
    if (!filtered.length) return '<div style="padding:16px;text-align:center;font-size:13px;color:var(--muted)">Nenhuma cidade encontrada</div>';
    return filtered.map(c => `
      <div class="fh-suggestion-item" data-city-name="${c.name}">
        <div class="fh-suggestion-icon">${ICONS.location}</div>
        <div>
          <div class="fh-suggestion-name">${c.name}, <strong>${c.state}</strong></div>
          <div class="fh-suggestion-sub">${c.tag}</div>
        </div>
      </div>
    `).join('');
  }

  function renderHotelDetail(h) {
    const starsSvg = Array(h.stars).fill(ICONS.star).join('');
    return `
      <div class="fh-detail-view active" id="fh-detail-view">
        <div class="fh-detail-hero">
          <img src="${h.img}" alt="${h.name}">
          <div class="fh-detail-back" id="fh-detail-back">${ICONS.chevron_left}</div>
          <div class="fh-detail-share">${ICONS.share}</div>
          <div class="fh-detail-like">${ICONS.heart}</div>
        </div>
        <div class="fh-detail-body">
          <div class="fh-detail-cat">${ICONS.diamond} ${h.category}</div>
          <div class="fh-detail-name">${h.name}</div>
          <div class="fh-detail-loc">${ICONS.location} ${h.city}, ${h.state}</div>

          <div class="fh-detail-ratings">
            <div class="fh-detail-rating-item">
              <div class="fh-detail-rating-num" style="color:var(--accent2)">${h.rating}</div>
              <div class="fh-detail-rating-label">Avaliação</div>
            </div>
            <div class="fh-detail-divider"></div>
            <div class="fh-detail-rating-item">
              <div class="fh-detail-rating-num">${h.reviews.toLocaleString('pt-BR')}</div>
              <div class="fh-detail-rating-label">Avaliações</div>
            </div>
            <div class="fh-detail-divider"></div>
            <div class="fh-detail-rating-item">
              <div class="fh-detail-rating-num">${h.stars}</div>
              <div class="fh-detail-rating-label">Estrelas</div>
            </div>
          </div>

          <div style="font-size:15px;font-weight:700;color:var(--dark);margin-bottom:12px;">O que inclui</div>
          <div class="fh-amenities-grid">
            ${h.amenities.map(a => `<div class="fh-amenity">${amenityIcon(a)} ${a}</div>`).join('')}
          </div>

          ${h.hotel_plus ? `
            <div style="background:linear-gradient(135deg,#1a0a2e,#2d1052);border-radius:var(--r-md);padding:16px;margin-bottom:20px;">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
                <div style="width:28px;height:28px;background:var(--accent-grad);border-radius:8px;display:flex;align-items:center;justify-content:center;">${ICONS.crown}</div>
                <span style="font-size:13px;font-weight:700;color:white;">Hotels+ disponível</span>
              </div>
              <div style="font-size:12px;color:rgba(255,255,255,0.6);line-height:1.5">Este hotel oferece experiências Hotels+ com upgrades, amenities exclusivos e concierge dedicado.</div>
            </div>
          ` : ''}

          <div style="font-size:13px;color:var(--muted);line-height:1.6;margin-bottom:80px;">${h.highlight}. Um dos mais completos hotéis disponíveis em ${h.city}. Curado e verificado pela equipe Frame com padrões rigorosos de qualidade e experiência do hóspede.</div>
        </div>
        <div class="fh-detail-sticky">
          <div class="fh-detail-price-info">
            <div class="fh-detail-incl">✦ Incluso</div>
            <div class="fh-detail-nights">${nights() > 0 ? `${nights()} noite${nights() > 1 ? 's' : ''} · ${STATE.guests} hóspede${STATE.guests > 1 ? 's' : ''}` : 'Selecione as datas'}</div>
          </div>
          <button class="fh-reserve-btn" id="fh-reserve-btn">Reservar</button>
        </div>
      </div>
    `;
  }

  function renderCheckout(h) {
    const ci = STATE.checkInDate ? fmtLong(STATE.checkInDate) : 'Não informado';
    const co = STATE.checkOutDate ? fmtLong(STATE.checkOutDate) : 'Não informado';
    const nt = nights();
    return `
      <div class="fh-checkout-view active" id="fh-checkout-view">
        <div class="fh-checkout-header">
          <div class="fh-checkout-back" id="fh-checkout-back">${ICONS.chevron_left}</div>
          <div class="fh-checkout-title">Sua Experiência</div>
        </div>
        <div class="fh-checkout-body">
          <div class="fh-checkout-hotel-card">
            <img class="fh-checkout-hotel-img" src="${h.img}" alt="${h.name}">
            <div class="fh-checkout-hotel-info">
              <div class="fh-checkout-hotel-name">${h.name}</div>
              <div class="fh-checkout-hotel-cat">${h.category} · ${h.city}</div>
              <div class="fh-checkout-hotel-stars">${Array(h.stars).fill(`<div style="width:12px;height:12px;color:#FFB800">${ICONS.star}</div>`).join('')}</div>
            </div>
          </div>

          <div class="fh-checkout-section">
            <div class="fh-checkout-section-title">Detalhes</div>
            <div class="fh-checkout-row">
              <div>
                <div class="fh-checkout-row-label">Datas</div>
                <div class="fh-checkout-row-val">${ci} → ${co}</div>
              </div>
              <div class="fh-checkout-row-edit">Editar</div>
            </div>
            <div class="fh-checkout-row">
              <div>
                <div class="fh-checkout-row-label">Hóspedes</div>
                <div class="fh-checkout-row-val">${STATE.guests} hóspede${STATE.guests > 1 ? 's' : ''}</div>
              </div>
              <div class="fh-checkout-row-edit">Editar</div>
            </div>
            <div class="fh-checkout-row">
              <div>
                <div class="fh-checkout-row-label">Duração</div>
                <div class="fh-checkout-row-val">${nt > 0 ? `${nt} noite${nt > 1 ? 's' : ''}` : '—'}</div>
              </div>
            </div>
          </div>

          <div class="fh-checkout-section">
            <div class="fh-checkout-incl-title">Inclua e aproveite</div>
            <div style="padding:8px 16px 4px;">
              <span class="fh-incl-badge">${ICONS.check} Tudo incluso na sua estadia</span>
            </div>
            <div class="fh-upsell-row" id="fh-upsell-row">
              <div class="fh-upsell-check ${STATE.upsell ? 'checked' : ''}" id="fh-upsell-check">
                ${ICONS.check}
              </div>
              <div class="fh-upsell-info">
                <div class="fh-upsell-label">Hotels+ — Estadia Completa</div>
                <div class="fh-upsell-desc">Inclua upgrades de quarto, amenities de boas-vindas e concierge Frame dedicado durante toda a sua estadia.</div>
              </div>
            </div>
          </div>
        </div>
        <div class="fh-checkout-cta-wrap">
          <button class="fh-checkout-cta" id="fh-checkout-cta">${STATE.upsell ? '✦ Pagar agora' : 'Continuar agora'}</button>
        </div>
      </div>
    `;
  }

  function renderHotelsPlus() {
    const plusHotels = CONFIG.hotels.filter(h => h.hotel_plus);
    return `
      <div class="fh-plus-view active" id="fh-plus-view">
        <div class="fh-plus-view-hero">
          <div class="fh-plus-view-glow1"></div>
          <div class="fh-plus-view-glow2"></div>
          <div class="fh-plus-view-back" id="fh-plus-back">${ICONS.chevron_left}</div>
          <div class="fh-plus-view-label">${ICONS.crown} Programa Exclusivo</div>
          <h1>Hotels+ <em>Beyond</em></h1>
          <p>Uma curadoria de experiências que vai muito além do quarto. Acesso privilegiado aos hotéis mais icônicos do Brasil, com mordomias que elevam cada estadia a outro nível.</p>
          <button class="fh-plus-cta fh-plus-cta-join">${ICONS.sparkle} Ativar Hotels+ agora</button>
        </div>

        <div class="fh-plus-benefits">
          <div style="font-size:13px;font-weight:600;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">Benefícios</div>
          <div class="fh-plus-benefit">
            <div class="fh-plus-benefit-icon">${ICONS.crown}</div>
            <div>
              <div class="fh-plus-benefit-title">Upgrade Garantido</div>
              <div class="fh-plus-benefit-desc">Acomodações superiores garantidas sujeito à disponibilidade no check-in.</div>
            </div>
          </div>
          <div class="fh-plus-benefit">
            <div class="fh-plus-benefit-icon">${ICONS.concierge}</div>
            <div>
              <div class="fh-plus-benefit-title">Concierge Frame 24h</div>
              <div class="fh-plus-benefit-desc">Um especialista Frame dedicado para toda sua estadia, da chegada à saída.</div>
            </div>
          </div>
          <div class="fh-plus-benefit">
            <div class="fh-plus-benefit-icon">${ICONS.sparkle}</div>
            <div>
              <div class="fh-plus-benefit-title">Amenities Exclusivos</div>
              <div class="fh-plus-benefit-desc">Boas-vindas com produtos de luxo, champagne e experiências personalizadas.</div>
            </div>
          </div>
          <div class="fh-plus-benefit">
            <div class="fh-plus-benefit-icon">${ICONS.shield}</div>
            <div>
              <div class="fh-plus-benefit-title">Cancelamento Flexível</div>
              <div class="fh-plus-benefit-desc">Cancelamento gratuito até 48h antes do check-in em todos os hotéis +.</div>
            </div>
          </div>
        </div>

        <div style="padding:0 24px;margin-bottom:20px;">
          <div style="font-size:13px;font-weight:600;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:1px;margin-bottom:16px;">Hotéis Hotels+</div>
          <div class="fh-plus-hotel-cards">
            ${plusHotels.map(h => `
              <div class="fh-plus-hotel-card">
                <img src="${h.img}" alt="${h.name}">
                <div class="fh-plus-hotel-card-info">
                  <div class="fh-plus-hotel-card-name">${h.name}</div>
                  <div class="fh-plus-hotel-card-city">${h.city}, ${h.state} · ${h.stars}★</div>
                  <div class="fh-plus-hotel-card-badge">${ICONS.star} ${h.rating} · Hotels+</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="fh-plus-cta-full">
          <button class="fh-plus-cta-btn">Ativar Hotels+ — Comece agora</button>
        </div>
      </div>
    `;
  }

  function renderMenuDrawer() {
    return `
      <div class="fh-drawer ${STATE.menuOpen ? 'open' : ''}" id="fh-drawer">
        <div class="fh-drawer-backdrop" id="fh-drawer-backdrop"></div>
        <div class="fh-drawer-panel">
          <div class="fh-drawer-head">
            <div class="fh-drawer-logo">FrameHotels</div>
            <div class="fh-drawer-close" id="fh-drawer-close">${ICONS.close}</div>
          </div>

          <div class="fh-drawer-plus-card">
            <div class="fh-drawer-plus-label">Programa Premium</div>
            <div class="fh-drawer-plus-title">Hotels+</div>
            <div class="fh-drawer-plus-sub">Eleve sua experiência de hospedagem com benefícios exclusivos.</div>
            <button class="fh-drawer-plus-btn" id="fh-drawer-plus-btn">${ICONS.crown} Conhecer</button>
          </div>

          <div class="fh-drawer-section">
            <div class="fh-drawer-section-label">Navegação</div>
            <div class="fh-drawer-item" id="fh-menu-home">
              <div class="fh-drawer-item-icon">${ICONS.hotel}</div>
              <div class="fh-drawer-item-label">Início</div>
              <div class="fh-drawer-item-arrow">${ICONS.chevron_right}</div>
            </div>
            <div class="fh-drawer-item">
              <div class="fh-drawer-item-icon">${ICONS.map}</div>
              <div class="fh-drawer-item-label">Explorar Mapa</div>
              <div class="fh-drawer-item-arrow">${ICONS.chevron_right}</div>
            </div>
            <div class="fh-drawer-item">
              <div class="fh-drawer-item-icon">${ICONS.heart}</div>
              <div class="fh-drawer-item-label">Favoritos</div>
              <div class="fh-drawer-item-arrow">${ICONS.chevron_right}</div>
            </div>
          </div>

          <div class="fh-drawer-section">
            <div class="fh-drawer-section-label">Conta</div>
            <div class="fh-drawer-item">
              <div class="fh-drawer-item-icon">${ICONS.users}</div>
              <div class="fh-drawer-item-label">Entrar / Criar conta</div>
              <div class="fh-drawer-item-arrow">${ICONS.chevron_right}</div>
            </div>
            <div class="fh-drawer-item">
              <div class="fh-drawer-item-icon">${ICONS.globe}</div>
              <div class="fh-drawer-item-label">Parceiros Frame</div>
              <div class="fh-drawer-item-arrow">${ICONS.chevron_right}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderCookieBanner() {
    return `
      <div class="fh-cookie" id="fh-cookie">
        <div class="fh-cookie-text">
          Usamos cookies para personalizar sua experiência e melhorar nossas recomendações de hotéis. <a href="#">Política de privacidade</a>
        </div>
        <div class="fh-cookie-actions">
          <button class="fh-cookie-btn-reject" id="fh-cookie-reject">Só essenciais</button>
          <button class="fh-cookie-btn-accept" id="fh-cookie-accept">Aceitar tudo</button>
        </div>
      </div>
    `;
  }

  function renderToast() {
    return `<div class="fh-toast" id="fh-toast"></div>`;
  }

  function renderCalendarSheet() {
    return `
      <div class="fh-bottom-sheet" id="fh-cal-sheet">
        <div class="fh-bs-backdrop" id="fh-cal-backdrop"></div>
        <div class="fh-bs-content" id="fh-cal-content"></div>
      </div>
    `;
  }

  // ─── HOME VIEW ────────────────────────────────────────────────────────────────
  function renderHome() {
    return `
      ${renderHero()}
      ${renderStats()}
      ${renderCities()}
      ${renderHotelsSection()}
      ${renderPlusBanner()}
      ${renderPartners()}
      <div style="height:40px"></div>
    `;
  }

  // ─── MAIN RENDER ─────────────────────────────────────────────────────────────
  function renderApp() {
    const root = document.getElementById('fh-root');
    root.innerHTML = `
      ${renderTicker()}
      ${renderNav()}
      <div id="fh-main-view"></div>
      ${renderMenuDrawer()}
      ${renderCalendarSheet()}
      ${renderCookieBanner()}
      ${renderToast()}
    `;
    showView('home');
    bindNavEvents();
    bindMenuEvents();
    bindCookieEvents();
    scheduleCookie();
    requestLocation();
    preventContextMenu();
  }

  function showView(view, data) {
    STATE.activeView = view;
    const main = document.getElementById('fh-main-view');

    if (view === 'home') {
      main.innerHTML = renderHome();
      bindHomeEvents();
    } else if (view === 'hotel' && data) {
      STATE.selectedHotel = data;
      main.innerHTML = renderHotelDetail(data);
      bindDetailEvents(data);
      window.scrollTo(0, 0);
    } else if (view === 'checkout' && data) {
      main.innerHTML = renderCheckout(data);
      bindCheckoutEvents(data);
      window.scrollTo(0, 0);
    } else if (view === 'hotelsplus') {
      main.innerHTML = renderHotelsPlus();
      bindPlusEvents();
      window.scrollTo(0, 0);
    }

    // Keep drawer fresh
    const drawer = document.getElementById('fh-drawer');
    if (drawer) bindMenuEvents();
  }

  // ─── BIND HOME ────────────────────────────────────────────────────────────────
  function bindHomeEvents() {
    // Logo
    document.getElementById('fh-logo-home')?.addEventListener('click', () => showView('home'));

    // Where field
    const whereField = document.getElementById('fh-field-where');
    const suggestions = document.getElementById('fh-suggestions');
    const whereVal = document.getElementById('fh-where-val');

    // Create input inside where field
    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'text';
    hiddenInput.style.cssText = 'position:absolute;opacity:0;width:1px;height:1px;';
    hiddenInput.setAttribute('readonly', 'true');
    whereField.appendChild(hiddenInput);

    whereField.addEventListener('click', () => {
      openWhereSearch();
    });

    function openWhereSearch() {
      suggestions.style.display = 'block';
      suggestions.innerHTML = renderSuggestions('');
      bindSuggestionEvents();
    }

    function bindSuggestionEvents() {
      suggestions.querySelectorAll('.fh-suggestion-item').forEach(item => {
        item.addEventListener('click', () => {
          const cityName = item.dataset.cityName;
          STATE.filteredCity = cityName;
          whereVal.textContent = cityName;
          whereVal.classList.remove('placeholder');
          suggestions.style.display = 'none';
          updateCityPills();
          updateHotelsList();
        });
      });
    }

    document.addEventListener('click', (e) => {
      if (!whereField.contains(e.target)) {
        suggestions.style.display = 'none';
      }
    }, { once: false, passive: true });

    // City pills
    document.getElementById('fh-cities')?.addEventListener('click', (e) => {
      const pill = e.target.closest('.fh-city-pill');
      if (!pill) return;
      STATE.filteredCity = pill.dataset.city || null;
      updateCityPills();
      updateHotelsList();
      const whereValEl = document.getElementById('fh-where-val');
      if (whereValEl) {
        whereValEl.textContent = STATE.filteredCity || 'Buscar cidade…';
        whereValEl.classList.toggle('placeholder', !STATE.filteredCity);
      }
    });

    // Date fields
    document.getElementById('fh-field-checkin')?.addEventListener('click', () => openCalendar('checkin'));
    document.getElementById('fh-field-checkout')?.addEventListener('click', () => openCalendar('checkout'));

    // Guests
    document.getElementById('fh-guests-minus')?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (STATE.guests > 1) {
        STATE.guests--;
        updateGuestsUI();
      }
    });
    document.getElementById('fh-guests-plus')?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (STATE.guests < 10) {
        STATE.guests++;
        updateGuestsUI();
      }
    });

    // Search btn
    document.getElementById('fh-search-btn')?.addEventListener('click', () => {
      if (!STATE.filteredCity && !STATE.checkInDate) {
        showToast('Selecione um destino ou datas 🏨');
        return;
      }
      updateHotelsList();
      const hotelsSection = document.querySelector('.fh-hotels-grid, .fh-empty');
      hotelsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // Hotel cards
    document.getElementById('fh-hotels-list')?.addEventListener('click', (e) => {
      const card = e.target.closest('[data-hotel-id]');
      if (!card) return;
      const hotelId = parseInt(card.dataset.hotelId);
      const hotel = CONFIG.hotels.find(h => h.id === hotelId);
      if (hotel) showView('hotel', hotel);
    });

    // Hotels+ banner
    document.getElementById('fh-plus-banner')?.addEventListener('click', () => showView('hotelsplus'));
  }

  function updateCityPills() {
    document.querySelectorAll('.fh-city-pill').forEach(p => {
      p.classList.toggle('active', (p.dataset.city || null) === STATE.filteredCity);
    });
  }

  function updateHotelsList() {
    const container = document.getElementById('fh-hotels-list');
    if (container) container.innerHTML = renderHotelsList();
    document.getElementById('fh-hotels-list')?.addEventListener('click', (e) => {
      const card = e.target.closest('[data-hotel-id]');
      if (!card) return;
      const hotelId = parseInt(card.dataset.hotelId);
      const hotel = CONFIG.hotels.find(h => h.id === hotelId);
      if (hotel) showView('hotel', hotel);
    });
    const sectionTitle = document.querySelector('.fh-section-title');
    if (sectionTitle) {
      sectionTitle.textContent = STATE.filteredCity ? `Hotéis em ${STATE.filteredCity}` : 'Hotéis em Destaque';
    }
  }

  function updateGuestsUI() {
    const num = document.getElementById('fh-guests-num');
    if (num) num.textContent = STATE.guests;
    const gField = document.querySelector('.fh-search-field:has(.fh-guests-ctrl) .fh-search-field-val');
    if (gField) gField.textContent = `${STATE.guests} hóspede${STATE.guests !== 1 ? 's' : ''}`;
  }

  // ─── CALENDAR ─────────────────────────────────────────────────────────────────
  function openCalendar(target) {
    STATE.calendarTarget = target;
    const sheet = document.getElementById('fh-cal-sheet');
    const content = document.getElementById('fh-cal-content');
    content.innerHTML = renderCalendar(target);
    sheet.classList.add('open');
    bindCalendarEvents(target, sheet, content);
  }

  function closeCalendar() {
    const sheet = document.getElementById('fh-cal-sheet');
    sheet.classList.remove('open');
  }

  function bindCalendarEvents(target, sheet, content) {
    document.getElementById('fh-cal-backdrop')?.addEventListener('click', closeCalendar);

    document.getElementById('fh-cal-prev')?.addEventListener('click', () => {
      STATE.calendarDate = new Date(STATE.calendarDate.getFullYear(), STATE.calendarDate.getMonth() - 1, 1);
      content.innerHTML = renderCalendar(target);
      bindCalendarEvents(target, sheet, content);
    });

    document.getElementById('fh-cal-next')?.addEventListener('click', () => {
      STATE.calendarDate = new Date(STATE.calendarDate.getFullYear(), STATE.calendarDate.getMonth() + 1, 1);
      content.innerHTML = renderCalendar(target);
      bindCalendarEvents(target, sheet, content);
    });

    content.querySelectorAll('.fh-cal-day:not(.past):not(.empty)').forEach(dayEl => {
      dayEl.addEventListener('click', () => {
        const date = new Date(dayEl.dataset.date);
        if (target === 'checkin') {
          STATE.checkInDate = date;
          if (STATE.checkOutDate && STATE.checkOutDate <= date) STATE.checkOutDate = null;
        } else {
          if (STATE.checkInDate && date <= STATE.checkInDate) {
            showToast('Check-out deve ser após o check-in');
            return;
          }
          STATE.checkOutDate = date;
        }
        content.innerHTML = renderCalendar(target);
        bindCalendarEvents(target, sheet, content);
        updateDateFields();
      });
    });

    document.getElementById('fh-cal-clear')?.addEventListener('click', () => {
      if (target === 'checkin') STATE.checkInDate = null;
      else STATE.checkOutDate = null;
      content.innerHTML = renderCalendar(target);
      bindCalendarEvents(target, sheet, content);
      updateDateFields();
    });

    document.getElementById('fh-cal-save')?.addEventListener('click', () => {
      closeCalendar();
      updateDateFields();
      if (target === 'checkin' && STATE.checkInDate && !STATE.checkOutDate) {
        setTimeout(() => openCalendar('checkout'), 400);
      }
    });
  }

  function updateDateFields() {
    const ci = document.getElementById('fh-checkin-val');
    const co = document.getElementById('fh-checkout-val');
    if (ci) {
      ci.textContent = STATE.checkInDate ? fmt(STATE.checkInDate) : 'Adicionar';
      ci.classList.toggle('placeholder', !STATE.checkInDate);
    }
    if (co) {
      co.textContent = STATE.checkOutDate ? fmt(STATE.checkOutDate) : 'Adicionar';
      co.classList.toggle('placeholder', !STATE.checkOutDate);
    }
  }

  // ─── DETAIL EVENTS ────────────────────────────────────────────────────────────
  function bindDetailEvents(hotel) {
    document.getElementById('fh-detail-back')?.addEventListener('click', () => {
      showView('home');
      window.scrollTo(0, 0);
    });

    document.getElementById('fh-reserve-btn')?.addEventListener('click', () => {
      if (!STATE.checkInDate || !STATE.checkOutDate) {
        openCalendar('checkin');
        return;
      }
      showView('checkout', hotel);
    });

    document.querySelector('.fh-detail-like')?.addEventListener('click', function () {
      showToast('Adicionado aos favoritos ♥');
    });
  }

  // ─── CHECKOUT EVENTS ─────────────────────────────────────────────────────────
  function bindCheckoutEvents(hotel) {
    document.getElementById('fh-checkout-back')?.addEventListener('click', () => showView('hotel', hotel));

    document.getElementById('fh-upsell-row')?.addEventListener('click', () => {
      STATE.upsell = !STATE.upsell;
      const check = document.getElementById('fh-upsell-check');
      const cta = document.getElementById('fh-checkout-cta');
      if (check) check.classList.toggle('checked', STATE.upsell);
      if (cta) cta.textContent = STATE.upsell ? '✦ Pagar agora' : 'Continuar agora';
    });

    document.getElementById('fh-checkout-cta')?.addEventListener('click', () => {
      showToast(STATE.upsell ? 'Redirecionando para pagamento… ✦' : 'Reserva iniciada! Verificando disponibilidade…');
    });
  }

  // ─── HOTELS+ EVENTS ──────────────────────────────────────────────────────────
  function bindPlusEvents() {
    document.getElementById('fh-plus-back')?.addEventListener('click', () => showView('home'));
    document.querySelectorAll('.fh-plus-cta-join, .fh-plus-cta-btn').forEach(btn => {
      btn.addEventListener('click', () => showToast('Hotels+ em breve! Cadastre-se para acesso antecipado ✦'));
    });
  }

  // ─── NAV EVENTS ──────────────────────────────────────────────────────────────
  function bindNavEvents() {
    document.getElementById('fh-logo-home')?.addEventListener('click', () => showView('home'));
    document.getElementById('fh-nav-search')?.addEventListener('click', () => {
      if (STATE.activeView !== 'home') showView('home');
      setTimeout(() => {
        document.getElementById('fh-field-where')?.click();
      }, 100);
    });
    document.getElementById('fh-menu-btn')?.addEventListener('click', openMenu);
  }

  // ─── MENU EVENTS ─────────────────────────────────────────────────────────────
  function openMenu() {
    STATE.menuOpen = true;
    document.getElementById('fh-drawer')?.classList.add('open');
    bindMenuInnerEvents();
  }

  function closeMenu() {
    STATE.menuOpen = false;
    document.getElementById('fh-drawer')?.classList.remove('open');
  }

  function bindMenuEvents() {
    document.getElementById('fh-menu-btn')?.addEventListener('click', openMenu);
  }

  function bindMenuInnerEvents() {
    document.getElementById('fh-drawer-backdrop')?.addEventListener('click', closeMenu, { once: true });
    document.getElementById('fh-drawer-close')?.addEventListener('click', closeMenu, { once: true });
    document.getElementById('fh-drawer-plus-btn')?.addEventListener('click', () => { closeMenu(); showView('hotelsplus'); });
    document.getElementById('fh-menu-home')?.addEventListener('click', () => { closeMenu(); showView('home'); });
  }

  // ─── COOKIE ──────────────────────────────────────────────────────────────────
  function bindCookieEvents() {
    document.getElementById('fh-cookie-accept')?.addEventListener('click', () => dismissCookie());
    document.getElementById('fh-cookie-reject')?.addEventListener('click', () => dismissCookie());
  }

  function scheduleCookie() {
    setTimeout(() => {
      const cookie = document.getElementById('fh-cookie');
      if (cookie) cookie.classList.add('show');
    }, 2500);
  }

  function dismissCookie() {
    const cookie = document.getElementById('fh-cookie');
    if (cookie) {
      cookie.classList.remove('show');
      setTimeout(() => cookie.remove(), 400);
    }
  }

  // ─── TOAST ────────────────────────────────────────────────────────────────────
  function showToast(msg) {
    const toast = document.getElementById('fh-toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }

  // ─── LOCATION ────────────────────────────────────────────────────────────────
  function requestLocation() {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        STATE.locationGranted = true;
        // Just use lat/lng to hint city (simplified)
        const lat = pos.coords.latitude;
        if (lat > -15 && lat < -5) STATE.userCity = 'Salvador';
        else if (lat > -24 && lat < -22) STATE.userCity = 'São Paulo';
        else if (lat > -24 && lat < -20) STATE.userCity = 'Rio de Janeiro';
        if (STATE.userCity) {
          setTimeout(() => showToast(`📍 Localização detectada: ${STATE.userCity}`), 1000);
        }
      },
      () => {},
      { timeout: 5000 }
    );
  }

  // ─── PREVENT ZOOM / CONTEXT MENU / SELECTION ─────────────────────────────────
  function preventContextMenu() {
    document.addEventListener('contextmenu', (e) => {
      if (document.getElementById('fh-root')?.contains(e.target)) e.preventDefault();
    });
    // Prevent double-tap zoom
    let lastTap = 0;
    document.addEventListener('touchend', (e) => {
      if (!document.getElementById('fh-root')?.contains(e.target)) return;
      const now = Date.now();
      if (now - lastTap < 300) e.preventDefault();
      lastTap = now;
    }, { passive: false });
  }

  // ─── VIEWPORT META ────────────────────────────────────────────────────────────
  function ensureViewportMeta() {
    let meta = document.querySelector('meta[name="viewport"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'viewport';
      document.head.appendChild(meta);
    }
    meta.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no';
  }

  // ─── MOUNT ────────────────────────────────────────────────────────────────────
  function mount() {
    ensureViewportMeta();

    // Create root
    let root = document.getElementById('fh-root');
    if (!root) {
      root = document.createElement('div');
      root.id = 'fh-root';
      document.body.appendChild(root);
    }

    injectStyles();
    renderApp();
  }

  // ─── INIT ─────────────────────────────────────────────────────────────────────
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    mount();
  } else {
    window.addEventListener('DOMContentLoaded', mount);
  }

})();
