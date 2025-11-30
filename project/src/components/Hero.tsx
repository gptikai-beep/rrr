import { useState, useEffect } from 'react';
import { MessageCircle, Facebook, Instagram, Wrench, Euro, HelpCircle, MapPin, X, Menu, Info } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'sluzby', label: 'Služby', icon: <Wrench className="w-5 h-5" /> },
    { id: 'cennik', label: 'Cenník', icon: <Euro className="w-5 h-5" /> },
    { id: 'ako-funguje', label: 'Ako to funguje', icon: <HelpCircle className="w-5 h-5" /> },
    { id: 'kontakt', label: 'Kontakt', icon: <MapPin className="w-5 h-5" /> },
    { id: 'pravne-informacie', label: 'Právne informácie', icon: <Info className="w-5 h-5" /> },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 shadow-md backdrop-blur-sm bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-white font-bold text-xl cursor-pointer" onClick={() => scrollToSection('hero')}>
            Fixanto
          </div>

          {/* Desktop */}
          <div className="hidden md:flex space-x-4">
            {navItems.map(({ id, label, icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="flex items-center gap-2 px-5 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105"
                aria-label={`Scroll to ${label}`}
              >
                {icon}
                {label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-900 border-t border-blue-700">
          <div className="flex flex-col space-y-2 px-4 py-3">
            {navItems.map(({ id, label, icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="flex items-center gap-3 w-full px-3 py-2 bg-blue-800 hover:bg-blue-700 text-white rounded-lg font-semibold"
                aria-label={`Scroll to ${label}`}
              >
                {icon}
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300">
          Táto webová stránka nepoužíva cookies na sledovanie návštevníkov. Používame len základné technické cookies nevyhnutné pre fungovanie stránky.
        </p>
        <button
          onClick={handleAccept}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold whitespace-nowrap transition"
        >
          Rozumiem
        </button>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <>
      <Navbar />
      <section id="hero" className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 animate-fade-in">
              Fixanto
              <span className="block text-blue-300 mt-3 text-4xl sm:text-5xl lg:text-6xl font-semibold">
                Servis elektroniky a mobilov<br className="hidden sm:block" />
                Trenčín a okolie
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Profesionálne a rýchle opravy mobilov, televízorov a inej elektroniky v Trenčíne a okolí vrátane Dolnej Súče. Spoľahlivý servis priamo tam, kde ho potrebujete.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="https://www.facebook.com/fixanto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow hover:bg-blue-700 transition"
              >
                <Facebook className="w-5 h-5" />
                Facebook
              </a>

              <a
                href="https://wa.me/421949344600"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow hover:bg-green-600 transition"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>

              <a
                href="https://www.instagram.com/opravamobilov"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow hover:opacity-90 transition"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>
      
      <CookieBanner />
    </>
  );
}
