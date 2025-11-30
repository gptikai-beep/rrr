import { Shield, FileText, AlertCircle } from 'lucide-react';

interface LegalInfoProps {
  onPrivacyClick?: () => void;
  onVopClick?: () => void;
  onReklamaciClick?: () => void;
}

export default function LegalInfo({ onPrivacyClick, onVopClick, onReklamaciClick }: LegalInfoProps) {
  return (
    <section id="pravne-informacie" className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Právne informácie
          </h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dôležité dokumenty a pravidlá pre našu spoluprácu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <button
            onClick={onPrivacyClick}
            className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 text-left hover:scale-105 transform"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
              Ochrana osobných údajov
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Informácie o spracúvaní vašich údajov a vašich právach v súlade s GDPR.
            </p>
            <div className="mt-4 flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
              Čítať viac →
            </div>
          </button>

          <button
            onClick={onVopClick}
            className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 text-left hover:scale-105 transform"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
              <FileText className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
              Všeobecné podmienky
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Pravidlá pre objednávku, platby, záruku a zodpovednosť pri opravách.
            </p>
            <div className="mt-4 flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
              Čítať viac →
            </div>
          </button>

          <button
            onClick={onReklamaciClick}
            className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 text-left hover:scale-105 transform"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
              Reklamačný poriadok
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Postup pri reklamácii opravy a riešenie problémov s garantovanou kvalitou.
            </p>
            <div className="mt-4 flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
              Čítať viac →
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
