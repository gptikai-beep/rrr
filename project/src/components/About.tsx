import { Heart, Users, Wrench } from 'lucide-react';

export default function About() {
  return (
    <section id="o-mne" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Kvalitný servis priamo vo vašej dedine
          </h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Rozširujem svoje služby v Dolnej Súči, aby som priniesol kvalitné a dostupné opravy elektroniky pre našich miestnych obyvateľov. Verím, že každý si zaslúži spoľahlivý servis s osobným prístupom, bez nutnosti cestovať do veľkých miest.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Moja misia je pomôcť ľuďom v komunite predĺžiť životnosť ich zariadení, ušetriť peniaze a zároveň prispieť k ochrane životného prostredia opravou namiesto výmeny.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Osobný prístup</h3>
            <p className="text-gray-600">
              Každý zákazník je pre mňa dôležitý. Starám sa o vaše zariadenia ako o vlastné.
            </p>
          </div>

          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <Wrench className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Profesionalita</h3>
            <p className="text-gray-600">
              Precízne riešim opravy s dôrazom na kvalitu a moderné technológie.
            </p>
          </div>

          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Lokálna komunita</h3>
            <p className="text-gray-600">
              Som súčasťou Dolnej Súče a chcem, aby naši ľudia mali kvalitný servis po ruke.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
