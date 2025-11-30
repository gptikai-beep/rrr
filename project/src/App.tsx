import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import LegalInfo from './components/LegalInfo';
import Privacy from './components/Privacy';
import Vop from './components/Vop';
import Reklamacie from './components/Reklamacie';
import Footer from './components/Footer';

type PageView = 'home' | 'privacy' | 'vop' | 'reklamacie';

function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  // Automatický scroll navrchu pri zmene stránky
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handlePageChange = (page: PageView) => {
    setCurrentPage(page);
  };

  const renderBackButton = () => (
    <button
      onClick={() => handlePageChange('home')}
      className="fixed top-4 left-4 z-50 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all shadow-lg flex items-center gap-2 font-semibold"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      Späť
    </button>
  );

  return (
    <div className="min-h-screen bg-white">
      {currentPage === 'home' ? (
        <>
          <Hero />
          <About />
          <Services />
          <HowItWorks />
          <Benefits />
          <Pricing />
          <Contact />
          <LegalInfo
            onPrivacyClick={() => handlePageChange('privacy')}
            onVopClick={() => handlePageChange('vop')}
            onReklamaciClick={() => handlePageChange('reklamacie')}
          />
          <Footer onPrivacyClick={() => handlePageChange('privacy')} />
        </>
      ) : currentPage === 'privacy' ? (
        <>
          {renderBackButton()}
          <Privacy />
          <Footer onPrivacyClick={() => handlePageChange('privacy')} />
        </>
      ) : currentPage === 'vop' ? (
        <>
          {renderBackButton()}
          <Vop />
          <Footer onPrivacyClick={() => handlePageChange('privacy')} />
        </>
      ) : (
        <>
          {renderBackButton()}
          <Reklamacie />
          <Footer onPrivacyClick={() => handlePageChange('privacy')} />
        </>
      )}
    </div>
  );
}

export default App;
