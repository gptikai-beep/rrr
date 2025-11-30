import { Phone, MapPin, Clock, Package } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [mapLoaded, setMapLoaded] = useState(true);

  return (
    <section id="kontakt" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Kontaktujte nás
          </h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Najrýchlejšie nás zastihnete správou na Facebooku, WhatsAppe alebo Instagrame.<br />
            Odpovedám zvyčajne do 2 hodín. Telefonát využite iba pri naliehavých prípadoch – dohodneme si presný čas podľa vašich potrieb.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6 flex justify-center items-center">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200 w-full max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Kontaktné údaje</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telefón</h4>
                    <a href="tel:0949344600" className="text-blue-600 hover:text-blue-700 font-medium text-lg">
                      0949 344 600
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Adresa</h4>
                    <p className="text-gray-700">Dolná Súča 877</p>
                    <p className="text-gray-700">913 32 Dolná Súča</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Otváracie hodiny</h4>
                    <p className="text-gray-700">
                      Online správu pošlite kedykoľvek.<br />
                      Telefonát využite len ak je problém urgentný.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center">
                    <Package className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Vyzdvihnutie a doručenie</h4>
                    <p className="text-gray-700">
                      Vrátane odpojenia a zapojenia (v prípade TV)
                    </p>
                    <p className="font-semibold text-green-600">+15€</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t-2 border-blue-200">
                <a
                  href="tel:0949344600"
                  className="block w-full bg-blue-600 text-white text-center px-6 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-blue-700 transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Zavolať teraz
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 bg-gray-100 flex flex-col justify-center items-center max-w-full">
            {mapLoaded && (
              <>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d817.8302081289104!2d18.028797863632906!3d48.95756801028921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47149f079178ccc1%3A0x898ff09f73dd8664!2zRG9sbsOhIFPDusSNYSA4NzcsIDkxMyAzMiBEb2xuw6EgU8O6xI1h!5e1!3m2!1ssk!2ssk!4v1762602569560!5m2!1ssk!2ssk"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <a
                  href="https://maps.app.goo.gl/X9DVURezjL89ueG7A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Otvoriť v Google Maps
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
