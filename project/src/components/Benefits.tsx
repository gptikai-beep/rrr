import { useState } from 'react';
import { Check, Gift, Zap, MapPin, X } from 'lucide-react';
import zalohovanieImg from '../assets/images/rozobraty.jpg';
import recoveryImg from '../assets/images/recovery.jpg';

const benefits = [
  {
    icon: Check,
    title: 'Bezplatná diagnostika',
    description: 'Pri oprave zariadenia je diagnostika úplne zdarma. Bez opravy len 15€.',
    highlight: true,
  },
  {
    icon: Gift,
    title: 'Náhradné zariadenie',
    description: 'Počas opravy mobilu vám môžeme poskytnúť bezplatne náhradné zariadenie, aby ste zostali v kontakte so svetom.',
    highlight: true,
  },
  {
    icon: Zap,
    title: 'Profesionálny servis',
    description: 'Rýchle a kvalitné opravy s dôrazom na detaily. Vaše zariadenie je v dobrých rukách.',
    highlight: false,
  },
  {
    icon: MapPin,
    title: 'Lokálny servis',
    description: 'Pohodlný servis priamo v Dolnej Súči. Žiadne dlhé cesty do mesta.',
    highlight: false,
  },
];

const benefitImages = [
  {
    src: zalohovanieImg,
    alt: 'Výmena rámu',
    caption: 'Výmena rámu na iphone 13 pro.',
  },
  {
    src: recoveryImg,
    alt: 'Obnova telefónu',
    caption: 'Profesionálna obnova softvéru a dát vášho telefónu.',
  },
];

export default function Benefits() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="vyhody" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Prečo si vybrať náš servis
          </h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`relative p-6 rounded-xl transition-all duration-300 ${
                  benefit.highlight
                    ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-500 shadow-lg hover:shadow-xl'
                    : 'bg-gray-50 border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg'
                }`}
              >
                {benefit.highlight && (
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl font-bold">✓</span>
                  </div>
                )}

                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                    benefit.highlight
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-blue-600 border-2 border-blue-600'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Fotky k benefitom */}
        <div className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {benefitImages.map((img, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div
                  className="w-full aspect-video overflow-hidden rounded-lg shadow-lg mb-3 cursor-pointer group relative"
                  onClick={() => setSelectedImg(img.src)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    style={{ objectPosition: img.alt === 'Obnova telefónu' ? 'center 40%' : 'center center' }}
                  />
                  <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100">
                    Klikni pre zväčšenie
                  </div>
                </div>
                <div className="text-center text-gray-700 text-sm">{img.caption}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg max-w-3xl mx-auto">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 text-2xl">⚠️</div>
            <div>
              <h4 className="font-semibold text-amber-900 mb-1">Dôležitá informácia</h4>
              <p className="text-amber-800">
                Niektoré diely objednávame podľa potreby a nemusia byť skladom. Dodacia lehota je obvykle 1-2 pracovné dni.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal na zväčšenie fotky */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
            aria-label="Zavrieť"
          >
            <X className="w-8 h-8" />
          </button>
          <img src={selectedImg} alt="Zväčšená fotka" className="max-w-full max-h-full object-contain rounded-lg" />
        </div>
      )}
    </section>
  );
}
