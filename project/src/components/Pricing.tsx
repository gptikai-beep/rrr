import { CircleDollarSign, CheckCircle, XCircle } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="cennik" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Cenník a diagnostika
          </h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Zákaznícke pohodlie a férovosť sú pre nás prvoradé. Diagnostika je <span className="text-green-600 font-semibold">úplne zdarma</span> ak si vyberiete opravu u nás.  
            Vždy vopred viete, koľko za opravu zaplatíte – žiadne prekvapenia, žiadne skryté poplatky!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Zadarmo pri oprave */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-500 relative flex flex-col items-center">
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                ZVÝHODNENÉ
              </div>
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-2 text-gray-900">
                Diagnostika pri oprave
              </h3>
              <div className="text-center mb-6">
                <span className="text-5xl font-bold text-green-600 block mb-1">0€</span>
                <span className="text-gray-700 text-lg">Ak zariadenie opravuješ u nás, nič za diagnostiku neplatíš.</span>
              </div>
              <ul className="space-y-3 text-center mb-2">
                <li>
                  <CheckCircle className="inline text-green-600 mr-1 mb-1 w-5 h-5" />
                  <span>Kompletná diagnostika a konzultácia</span>
                </li>
                <li>
                  <CheckCircle className="inline text-green-600 mr-1 mb-1 w-5 h-5" />
                  <span>Vyhodnotenie príčiny aj skrytých problémov</span>
                </li>
                <li>
                  <CheckCircle className="inline text-green-600 mr-1 mb-1 w-5 h-5" />
                  <span>Jasný návrh riešenia a cena vopred</span>
                </li>
                <li>
                  <CheckCircle className="inline text-green-600 mr-1 mb-1 w-5 h-5" />
                  <span>Odborné a ľudské poradenstvo</span>
                </li>
              </ul>
              <p className="text-sm text-gray-700 mt-3 text-center">Platíte <b>len za opravu</b>, nikdy nie za zistenie príčiny.</p>
            </div>
            {/* Diagnostika bez opravy */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-300 flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <CircleDollarSign className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-2 text-gray-900">
                Len diagnostika
              </h3>
              <div className="text-center mb-6">
                <span className="text-5xl font-bold text-blue-600 block mb-1">15€</span>
                <span className="text-gray-700 text-lg">Ak sa pre opravu nerozhodnete, platíte len rozumný poplatok za podrobnú diagnostiku.</span>
              </div>
              <ul className="space-y-3 text-center mb-2">
                <li>
                  <CheckCircle className="inline text-blue-600 mr-1 mb-1 w-5 h-5" />
                  <span>Profesionálna diagnostika a konzultácia</span>
                </li>
                <li>
                  <CheckCircle className="inline text-blue-600 mr-1 mb-1 w-5 h-5" />
                  <span>Zhrnutie všetkých problémov</span>
                </li>
                <li>
                  <CheckCircle className="inline text-blue-600 mr-1 mb-1 w-5 h-5" />
                  <span>Približná cenová kalkulácia pre ďalšie rozhodnutie</span>
                </li>
                <li>
                  <XCircle className="inline text-gray-400 mr-1 mb-1 w-5 h-5" />
                  <span>Opravu môžete vybaviť kdekoľvek inde</span>
                </li>
              </ul>
              <p className="text-sm text-gray-700 mt-3 text-center">Platíte len za prácu s vaším zariadením, nič viac.</p>
            </div>
          </div>
          {/* Extra info box */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center">
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">💡</div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">
                Každá oprava je individuálna
              </h4>
              <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                Cena opravy závisí od typu zariadenia, rozsahu poškodenia a potrebných dielov.
                Po diagnostike dostanete jasný návrh riešenia a cenu vopred – a keď poviete áno, až vtedy začneme pracovať.
                <br />
                Naším cieľom je nulové riziko skrytých poplatkov. Platíte len za to, čo reálne potrebujete.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
