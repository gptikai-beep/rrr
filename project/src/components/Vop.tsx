import { FileText } from 'lucide-react';

export default function Vop() {
  return (
    <section id="vop" className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Všeobecné obchodné podmienky
            </h1>
          </div>
          <div className="h-1 w-24 bg-blue-600 rounded-full mb-8"></div>
          <p className="text-gray-600 leading-relaxed mb-6">
            Pravidlá pre poskytovanie servisných služieb elektroniky
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
            <p className="text-gray-700"><strong>Platné od:</strong> 1. januára 2025 | Verzia 1.0</p>
            <p className="text-gray-700 mt-2">
              <strong>Kontakt:</strong> <a href="tel:0949344600" className="text-blue-600 hover:text-blue-800">0949 344 600</a> | <a href="mailto:phoneservissk@gmail.com" className="text-blue-600 hover:text-blue-800">phoneservissk@gmail.com</a>
            </p>
          </div>
        </div>

        {/* Základné údaje */}
        <div className="mb-10 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">I. ZÁKLADNÉ ÚDAJE POSKYTOVATEĽA</h2>
          <div className="space-y-2 text-gray-700">
            <p><strong>Obchodné meno:</strong> Štefan Hupčík - Fixanto</p>
            <p><strong>Sídlo:</strong> Dolná Súča 877, 913 32 Dolná Súča</p>
            <p><strong>IČO:</strong> 57 310 990</p>
            <p><strong>Email:</strong> phoneservissk@gmail.com</p>
            <p><strong>Telefón:</strong> 0949 344 600</p>
            <p><strong>Web:</strong> www.fixanto.sk</p>
            <p className="text-sm text-gray-600 mt-4 italic">Poskytovateľ nie je platcom DPH.</p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Článok 1 */}
          <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">II. ÚVODNÉ USTANOVENIA</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                <strong>2.1</strong> Tieto všeobecné obchodné podmienky (ďalej len "VOP") upravujú vzťahy medzi poskytovateľom služieb Štefan Hupčík - Fixanto (ďalej len "poskytovateľ") a zákazníkom (ďalej len "zákazník") pri poskytovaní servisných služieb elektroniky, mobilných telefónov, televízorov, notebookov a príslušenstva.
              </p>
              <p>
                <strong>2.2</strong> VOP sú neoddeliteľnou súčasťou zmluvy medzi poskytovateľom a zákazníkom. Objednávkou služby zákazník potvrdzuje, že sa oboznámil s týmito VOP a že s nimi súhlasí.
              </p>
              <p>
                <strong>2.3</strong> Vzťahy neupravené týmito VOP sa riadia platnými právnymi predpismi Slovenskej republiky, najmä Zákonom č. 40/1964 Zb. Občiansky zákonník v platnom znení a Zákonom č. 108/2024 Z.z. o ochrane spotrebiteľa v platnom znení.
              </p>
            </div>
          </div>

          {/* Článok 2 */}
          <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">III. OBJEDNÁVKA A UZAVRETIE ZMLUVY</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                <strong>3.1</strong> Objednávka služby sa uskutočňuje kontaktovaním poskytovateľa prostredníctvom telefónu (0949 344 600), WhatsApp, Facebook Messenger, Instagram správ alebo emailu (phoneservissk@gmail.com).
              </p>
              <p>
                <strong>3.2</strong> Zákazník je povinný poskytnúť poskytovateľovi správne a úplné informácie o type zariadenia, modelu a popise problému.
              </p>
              <p>
                <strong>3.3</strong> Zmluva vzniká okamihom potvrdenia objednávky poskytovateľom a dohodnutím termínu diagnostiky alebo opravy. Potvrdenie objednávky sa uskutočňuje telefonicky, prostredníctvom WhatsApp, Facebooku, Instagramu alebo emailu.
              </p>
              <p>
                <strong>3.4</strong> Poskytovateľ si vyhradzuje právo odmietnuť objednávku v prípade technickej nemožnosti vykonania opravy, nedostupnosti náhradných dielov alebo iných objektívnych dôvodov.
              </p>
            </div>
          </div>

          {/* Článok 3 - Diagnostika */}
          <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">IV. DIAGNOSTIKA</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                <strong>4.1</strong> Diagnostika je prvotné overenie stavu zariadenia a určenie príčiny poruchy.
              </p>
              <p>
                <strong>4.2</strong> Diagnostika je bezplatná v prípade, že zákazník pristúpi k oprave zariadenia u poskytovateľa.
              </p>
              <p>
                <strong>4.3</strong> V prípade, že zákazník po diagnostike nepristúpi k oprave, je povinný uhradiť poplatok za diagnostiku vo výške 15 EUR.
              </p>
              <p>
                <strong>4.4</strong> Po diagnostike poskytovateľ informuje zákazníka o rozsahu opravy, cene a predpokladanej dobe opravy. Oprava sa začne až po schválení cenovej ponuky zákazníkom.
              </p>
            </div>
          </div>

          {/* Článok 4 - Cena */}
          <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">V. CENA A PLATOBNÉ PODMIENKY</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                <strong>5.1</strong> Cena za služby je uvedená v cenovej ponuke poskytovateľa po vykonaní diagnostiky. Poskytovateľ nie je platcom DPH, preto sa DPH v cenách neuplatňuje.
              </p>
              <p>
                <strong>5.2</strong> Platba je možná v hotovosti pri prevzatí opraveného zariadenia, platobnou kartou alebo bankovým prevodom.
              </p>
              <p>
                <strong>5.3</strong> Opravené zariadenie bude vydané zákazníkovi až po úhrade celkovej ceny.
              </p>
              <p>
                <strong>5.4</strong> V prípade potreby objednania náhradných dielov môže poskytovateľ požadovať preddavok vo výške 50% z celkovej ceny.
              </p>
              <p>
                <strong>5.5</strong> Poskytovateľ vystaví zákazníkovi doklad o zaplatení, ktorý slúži zároveň ako záručný list.
              </p>
            </div>
          </div>

          {/* Článok 5 - Dodacia lehota */}
          <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">VI. DODACIA LEHOTA</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                <strong>6.1</strong> Predpokladaná doba opravy je <strong>1-5 pracovných dní</strong> v závislosti od typu opravy a dostupnosti náhradných dielov.
              </p>
              <p>
                <strong>6.2</strong> V prípade potreby objednania náhradných dielov sa doba opravy predlžuje o dodaciu lehotu dielov (zvyčajne 1-2 pracovné dni).
              </p>
              <p>
                <strong>6.3</strong> Poskytovateľ informuje zákazníka o dokončení opravy telefonicky, WhatsApp správou alebo iným dohodnutým spôsobom.
              </p>
              <p>
                <strong>6.4</strong> Zariadenie, ktoré si zákazník neprevezme do <strong>90 dní</strong> od dokončenia opravy, môže byť poskytovateľom zlikvidované alebo predané.
              </p>
            </div>
          </div>

          {/* Článok 6 - ZÁRUKA - NAJDÔLEŽITEJŠIE */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-900 mb-3">VII. ZÁRUKA A REKLAMÁCIA</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                <strong>7.1</strong> Poskytovateľ poskytuje záruku na vykonané opravy podľa § 620 a nasl. Občianskeho zákonníka v trvaní:
              </p>
              <ul className="list-disc ml-6 space-y-2 font-semibold text-gray-900">
                <li><strong>12 mesiacov</strong> na výmenu displeja a náhradné mobilné zariadenia</li>
                <li><strong>6 mesiacov</strong> na ostatné opravy</li>
                <li><strong>3 mesiace</strong> na batérie (naturálne opotrebenie)</li>
              </ul>
              <p className="mt-4">
                <strong>7.2</strong> Záruka sa nevzťahuje na:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Mechanické poškodenie zariadenia (pád, náraz, lámanie)</li>
                <li>Poškodenie tekutinami (voda, káva, atď.)</li>
                <li>Neodborný zásah do zariadenia treťou osobou</li>
                <li>Normálne opotrebenie batérie</li>
                <li>Softvérové problémy nespôsobené opravou</li>
              </ul>
              <p className="mt-4">
                <strong>7.3</strong> Reklamáciu je potrebné uplatniť <strong>bez zbytočného odkladu</strong> po zistení vady, najneskôr do konca záručnej doby.
              </p>
              <p>
                <strong>7.4</strong> Poskytovateľ vybavuje reklamáciu do <strong>30 dní</strong> od jej uplatnenia podľa § 18 zákona č. 108/2024 Z.z. o ochrane spotrebiteľa.
              </p>
            </div>
          </div>

          {/* Článok 7 - Odstúpenie */}
          <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">VIII. ODSTÚPENIE OD ZMLUVY</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                <strong>8.1</strong> Zákazník má právo odstúpiť od zmluvy do <strong>14 dní</strong> od prevzatia opraveného zariadenia bez udania dôvodu podľa § 7 zákona č. 108/2024 Z.z. o ochrane spotrebiteľa.
              </p>
              <p>
                <strong>8.2</strong> Právo na odstúpenie od zmluvy nevzniká v prípade služby, ktorá bola už úplne vykonaná so súhlasom zákazníka.
              </p>
              <p>
                <strong>8.3</strong> Pri odstúpení od zmluvy je zákazník povinný vrátiť zariadenie v pôvodnom stave vrátane všetkých vymenených dielov.
              </p>
            </div>
          </div>

          {/* Článok 8 - Zodpovednosť */}
          <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">IX. ZODPOVEDNOSŤ ZA ŠKODU</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                <strong>9.1</strong> Poskytovateľ <strong>nenesie zodpovednosť za stratu dát</strong> uložených v zariadení. Zákazník je zodpovedný za vytvorenie zálohy dát pred odovzdaním zariadenia na opravu.
              </p>
              <p>
                <strong>9.2</strong> Poskytovateľ nie je zodpovedný za škody spôsobené:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Vyššou mocou (požiar, povodeň, atď.)</li>
                <li>Nesprávnym používaním zariadenia zákazníkom</li>
                <li>Skrytými vadami zariadenia</li>
                <li>Softvérovými problémami existujúcimi pred opravou</li>
              </ul>
              <p>
                <strong>9.3</strong> Maximálna výška náhrady škody je limitovaná na hodnotu opraveného zariadenia.
              </p>
            </div>
          </div>

          {/* Článok 9 - Náhradné zariadenie */}
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">X. NÁHRADNÉ ZARIADENIE</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                <strong>10.1</strong> Poskytovateľ môže na žiadosť zákazníka poskytnúť <strong>náhradné zariadenie bezplatne</strong> na dobu opravy mobilného telefónu.
              </p>
              <p>
                <strong>10.2</strong> Zákazník je zodpovedný za starostlivosť o náhradné zariadenie a jeho vrátenie v pôvodnom stave.
              </p>
              <p>
                <strong>10.3</strong> V prípade poškodenia alebo straty náhradného zariadenia je zákazník povinný uhradiť náhradu škody vo výške trhovej hodnoty zariadenia.
              </p>
            </div>
          </div>

          {/* Článok 10 - GDPR */}
          <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">XI. OCHRANA OSOBNÝCH ÚDAJOV</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                <strong>11.1</strong> Poskytovateľ spracúva osobné údaje zákazníkov v súlade s nariadením GDPR (EU) 2016/679.
              </p>
              <p>
                <strong>11.2</strong> Poskytovateľ spracúva nasledujúce osobné údaje: meno a priezvisko, telefónne číslo, emailová adresa, informácie o zariadení.
              </p>
              <p>
                <strong>11.3</strong> Osobné údaje sú spracúvané na účel realizácie objednávky, komunikácie so zákazníkom a vedenia účtovníctva.
              </p>
              <p>
                <strong>11.4</strong> Poskytovateľ nezverejňuje osobné údaje tretím stranám bez súhlasu zákazníka okrem prípadov vyžadovaných zákonom.
              </p>
            </div>
          </div>

          {/* Článok 11 - Riešenie sporov */}
          <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">XII. RIEŠENIE SPOROV</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                <strong>12.1</strong> Poskytovateľ a zákazník sa zaväzujú riešiť všetky spory prednostne dohodou.
              </p>
              <p>
                <strong>12.2</strong> V prípade, že nedôjde k dohode, je zákazník oprávnený obrátiť sa na:
              </p>
              <div className="ml-6 p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold">Slovenská obchodná inšpekcia (SOI)</p>
                <p>Prešovská 35, 827 99 Bratislava</p>
                <p>Web: <a href="https://www.soi.sk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.soi.sk</a></p>
              </div>
            </div>
          </div>

          {/* Článok 12 - Záverečné */}
          <div className="bg-blue-100 border-l-4 border-blue-700 p-6 rounded-r-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">XIII. ZÁVEREČNÉ USTANOVENIA</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                <strong>13.1</strong> Vzťahy neupravené týmito VOP sa riadia platnými právnymi predpismi Slovenskej republiky, najmä:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Zákon č. 40/1964 Zb. Občiansky zákonník</li>
                <li>Zákon č. 108/2024 Z.z. o ochrane spotrebiteľa</li>
                <li>Nariadenie GDPR (EU) 2016/679</li>
              </ul>
              <p>
                <strong>13.2</strong> Poskytovateľ si vyhradzuje právo na zmenu VOP. Aktuálna verzia je vždy dostupná na www.fixanto.sk.
              </p>
              <p>
                <strong>13.3</strong> Tieto VOP nadobúdajú účinnosť dňa <strong>1. januára 2025</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t-2 border-gray-300 text-center">
          <p className="text-gray-600 mb-2">© 2025 Štefan Hupčík - Fixanto. Všetky práva vyhradené.</p>
          <p className="text-sm text-gray-500">
            V prípade otázok nás kontaktujte na <a href="mailto:phoneservissk@gmail.com" className="text-blue-600 hover:underline">phoneservissk@gmail.com</a> alebo <a href="tel:0949344600" className="text-blue-600 hover:underline">0949 344 600</a>
          </p>
        </div>
      </div>
    </section>
  );
}
