import { Phone, MapPin, Mail, Facebook, Instagram, MessageCircle, Building2 } from 'lucide-react';

interface FooterProps {
  onPrivacyClick?: () => void;
}

export default function Footer({ onPrivacyClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* O nás */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">
              Štefan Hupčík
            </h3>
            <p className="text-gray-300 mb-4 font-semibold">
              Servis elektroniky
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Profesionálne opravy mobilov, televízorov a elektroniky v Dolnej Súči.
              Kvalita, spoľahlivosť a osobný prístup.
            </p>
            
            {/* Sociálne siete */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.facebook.com/fixanto"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/opravamobilov"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 p-2 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/421949344600"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 p-2 rounded-lg transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:0949344600" className="hover:text-blue-400 transition-colors">
                  0949 344 600
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:phoneservissk@gmail.com" className="hover:text-blue-400 transition-colors">
                  phoneservissk@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
                <span>Dolná Súča 877<br />913 32 Dolná Súča</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Building2 className="w-4 h-4 text-blue-400" />
                <span className="text-sm">IČO: 57 310 990</span>
              </li>
            </ul>
          </div>

          {/* Služby */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Služby</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Opravy mobilných telefónov
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Opravy televízorov
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Opravy elektroniky
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Opravy notebookov
              </li>
            </ul>
          </div>
        </div>

        {/* Spodná časť */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Fixanto - Servis elektroniky. Všetky práva vyhradené.
            </p>
            
            {/* Právne dokumenty */}
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              {onPrivacyClick && (
                <button
                  onClick={onPrivacyClick}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Ochrana osobných údajov
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
