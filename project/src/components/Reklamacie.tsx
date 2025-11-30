import { AlertCircle } from 'lucide-react';

export default function Reklamacie() {
  return (
    <section id="reklamacie" className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Reklamačný poriadok
            </h1>
          </div>
          <div className="h-1 w-24 bg-blue-600 rounded-full mb-8"></div>
          <p className="text-gray-600 leading-relaxed mb-6">
            Postup pri reklamácii vykonaných opráv a záručné podmienky
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
            <p className="text-gray-700"><strong>Platné od:</strong> 1. januára 2025 | Verzia 1.0</p>
            <p className="text-gray-700 mt-2">
              <strong>Kontakt:</strong> <a href="tel:0949344600" className="text-blue-600 hover:text-blue-800">0949 344 600</a> | <a href="mailto:phoneservissk@gmail.com" className="text-blue-600 hover:text-blue-800">phoneservissk@gmail.com</a>
            </p>
          </div>
        </div>

        {/* Zjednodušený reklamačný poriadok */}
        <div className="mb-12 p-6 bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-400 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-yellow-600" />
            Zjednodušený reklamačný poriadok
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ak máte problém s našou opravou alebo službou, bezodkladne nás kontaktujte na našom telefónnom čísle alebo prostredníctvom emailu.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</span>
              <span>Reklamáciu musíte podať <strong>do 2 mesiacov</strong> od zistenia vady a do konca záručnej doby.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</span>
              <span>Reklamáciu podávate emailom alebo písomne a musíte priložiť doklady o oprave a popísať vadu a svoj nárok.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</span>
              <span>Reklamáciu vám vybavíme <strong>do 30 dní</strong> a dáme vedieť, ako sme ju vyriešili.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</span>
              <span>Záručná doba sa predlžuje o dobu, počas ktorej bolo zariadenie v záručnej oprave.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</span>
              <span>Ak je zariadenie poškodené v dôsledku nesprávneho použitia, nemôžete ho reklamovať.</span>
            </li>
          </ul>
        </div>

        {/* Postup reklamácie - 4 kroky */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Postup reklamácie krok za krokom</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Krok 1 */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 hover:shadow-lg transition-all hover:scale-105">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full text-lg font-bold">1</span>
                Podanie reklamácie
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Reklamáciu podajte <strong>bez zbytočného odkladu</strong>, najneskôr do <strong>2 mesiacov</strong> od zistenia vady a do konca záručnej doby. Kontaktujte nás telefonicky, emailom alebo WhatsApp s popisom problému a prípadne fotkami.
              </p>
            </div>

            {/* Krok 2 */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 hover:shadow-lg transition-all hover:scale-105">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full text-lg font-bold">2</span>
                Potvrdenie reklamácie
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Po podaní reklamácie vám bezodkladne potvrdíme jej prijatie a oznámime spôsob vybavenia. Zariadenie opätovne diagnostikujeme. Diagnostika trvá <strong>1-2 dni</strong>.
              </p>
            </div>

            {/* Krok 3 */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 hover:shadow-lg transition-all hover:scale-105">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full text-lg font-bold">3</span>
                Vybavenie reklamácie
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Reklamáciu vybavíme do <strong>30 dní</strong> od jej prijatia. Ak je problém našou chybou, opravíme zariadenie bezplatne. Môžeme vám zariadenie opraviť, vymeniť, vrátiť peniaze alebo poskytnúť zľavu.
              </p>
            </div>

            {/* Krok 4 */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 hover:shadow-lg transition-all hover:scale-105">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full text-lg font-bold">4</span>
                Prevzatie zariadenia
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Po vybavení reklamácie vás informujeme o výsledku a môžete si zariadenie prevziať. Vydáme vám písomné potvrdenie o vybavení reklamácie s dátumom a spôsobom riešenia.
              </p>
            </div>
          </div>
        </div>

        {/* Detailné ustanovenia */}
        <div className="space-y-8">
          {/* Článok 1 */}
          <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. VŠEOBECNÉ USTANOVENIA</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                <strong>1.1</strong> Tento reklamačný poriadok upravuje podmienky a spôsob uplatnenia práv zákazníka z vadného plnenia (ďalej len "reklamácia") na služby, ktoré boli poskytnuté poskytovateľom Štefan Hupčík - Fixanto (ďalej len "poskytovateľ").
              </p>
              <p>
                <strong>1.2</strong> Záručná doba je doba, počas ktorej má zákazník právo uplatniť reklamáciu. Záručná doba začína plynúť dňom prevzatia opraveného zariadenia zákazníkom.
              </p>
              <p>
                <strong>1.3</strong> Poskytovateľ zodpovedá za to, že opravené zariadenie je pri prevzatí zákazníkom bez vád a má požadované vlastnosti a funkčnosť.
              </p>
            </div>
          </div>

          {/* Článok 2 */}
          <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. ZODPOVEDNOSŤ ZA VADY OPRAVY</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                <strong>2.1</strong> Poskytovateľ zodpovedá za vady, ktoré malo opravené zariadenie v čase jeho prevzatia zákazníkom. Poskytovateľ zodpovedá aj za vady, ktoré sa prejavia neskôr, ak boli spôsobené príčinou už existujúcou v čase prevzatia zariadenia.
              </p>
              <p>
                <strong>2.2</strong> Poskytovateľ nezodpovedá za vady, ktoré vznikli po prevzatí zariadenia v dôsledku opotrebenia, neodborného používania, nevhodnej údržby, mechanického poškodenia alebo iného zásahu zo strany zákazníka alebo tretej osoby.
              </p>
              <p>
                <strong>2.3</strong> Záručná doba sa predlžuje o dobu, počas ktorej bolo zariadenie v záručnej oprave. Ak bolo zariadenie vymenené za nové, začína plynúť nová záručná doba od dňa prevzatia nového zariadenia.
              </p>
            </div>
          </div>

          {/* Článok 3 - Vylúčenie zodpovednosti */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. VYLÚČENIE ZODPOVEDNOSTI</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                <strong>3.1</strong> Poskytovateľ nezodpovedá za vady zariadenia, ktoré boli spôsobené:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Neodborným, nevhodným alebo neprimeraným používaním, obsluhou, údržbou alebo skladovaním zariadenia</li>
                <li>Mechanickým poškodením, opotrebovaním, živelnou pohromou, nesprávnym zaobchádzaním, zanedbaním, znečistením</li>
                <li>Zásahom do zariadenia zo strany zákazníka alebo tretej osoby bez súhlasu poskytovateľa</li>
                <li>Používaním zariadenia v rozpore s návodom na použitie</li>
                <li>Poškodením zariadenia vírusmi, malware alebo iným škodlivým softvérom</li>
              </ul>
              <p className="mt-4">
                <strong>3.2</strong> Poskytovateľ nezodpovedá za vady, ktoré boli zákazníkovi oznámené pred prevzatím opraveného zariadenia.
              </p>
            </div>
          </div>

          {/* Článok 4 - Uplatnenie reklamácie */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. UPLATNENIE REKLAMÁCIE</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                <strong>4.1</strong> Zákazník má právo uplatniť reklamáciu na opravené zariadenie <strong>bez zbytočného odkladu</strong>, najneskôr však <strong>do 2 mesiacov</strong> od zistenia vady. Reklamácia sa musí uplatniť najneskôr do konca záručnej doby.
              </p>
              <p>
                <strong>4.2</strong> Reklamácia sa uplatňuje:
              </p>
              <ul className="list-disc ml-6 space-y-2 font-semibold">
                <li>Telefonicky: <a href="tel:0949344600" className="text-blue-600 hover:underline">0949 344 600</a></li>
                <li>Emailom: <a href="mailto:phoneservissk@gmail.com" className="text-blue-600 hover:underline">phoneservissk@gmail.com</a></li>
                <li>WhatsApp správou</li>
                <li>Osobne: Dolná Súča 877, 913 32 Dolná Súča</li>
              </ul>
              <p className="mt-4">
                <strong>4.3</strong> Zákazník musí v reklamácii uviesť:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Svoje meno, adresu, telefónne číslo a email</li>
                <li>Dátum a miesto vykonania opravy</li>
                <li>Popis vady a svoj nárok z vady</li>
                <li>Doklad o vykonanej oprave (faktúra, záručný list)</li>
              </ul>
              <p className="mt-4">
                <strong>4.4</strong> Poskytovateľ je povinný potvrdiť zákazníkovi prijatie reklamácie a oznámiť mu spôsob jej vybavenia.
              </p>
            </div>
          </div>

          {/* Článok 5 - Vybavenie reklamácie */}
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. VYBAVENIE REKLAMÁCIE</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                <strong>5.1</strong> Poskytovateľ je povinný vybaviť reklamáciu <strong>bez zbytočného odkladu</strong>, najneskôr však <strong>do 30 dní</strong> od jej prijatia.
              </p>
              <p>
                <strong>5.2</strong> Poskytovateľ je povinný vybaviť reklamáciu tak, aby bola odstránená vada, a to:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Opravou</strong> - bezplatné odstránenie všetkých vád</li>
                <li><strong>Výmenou</strong> - výmena vadného náhradného dielu za nový</li>
                <li><strong>Vrátením ceny</strong> - vrátenie celej sumy zaplatenej za opravu</li>
                <li><strong>Poskytnutím zľavy</strong> - zníženie ceny opravy v primeranej miere</li>
              </ul>
              <p className="mt-4">
                <strong>5.3</strong> Poskytovateľ je povinný informovať zákazníka o spôsobe vybavenia reklamácie a o dôvodoch, ktoré ovplyvnili jeho rozhodnutie.
              </p>
              <p>
                <strong>5.4</strong> Po vybavení reklamácie poskytovateľ vydá zákazníkovi písomné potvrdenie o vybavení reklamácie, v ktorom uvedie dátum a spôsob vybavenia reklamácie, prípadne dôvod zamietnutia reklamácie.
              </p>
            </div>
          </div>

          {/* Článok 6 - Práva zákazníka */}
          <div className="bg-blue-100 border-l-4 border-blue-700 p-6 rounded-r-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. PRÁVA ZÁKAZNÍKA</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                <strong>6.1</strong> Zákazník má podľa zákona právo z vady opravy požadovať:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Odstránenie vady opravou, ak sa to dá urobiť bez zbytočných ťažkostí</li>
                <li>Primeranú zľavu z ceny opravy, ak sa vada nedá odstrániť</li>
                <li>Vrátenie ceny opravy, ak sa jedná o podstatné porušenie zmluvy</li>
              </ul>
              <p className="mt-4">
                <strong>6.2</strong> Ak sa vada opakovane vyskytne viac ako <strong>2-krát</strong>, má zákazník právo odstúpiť od zmluvy a požadovať vrátenie ceny opravy.
              </p>
              <p>
                <strong>6.3</strong> Ak má opravené zariadenie viac ako <strong>2 rôzne vady</strong>, ktoré bránia jeho riadnemu používaniu, má zákazník právo odstúpiť od zmluvy a požadovať vrátenie ceny opravy.
              </p>
            </div>
          </div>

          {/* Článok 7 - Alternatívne riešenie sporov */}
          <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. ALTERNATÍVNE RIEŠENIE SPOROV</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                <strong>7.1</strong> Ak nie je zákazník spokojný s vybavením reklamácie, má právo obrátiť sa na subjekt alternatívneho riešenia sporov:
              </p>
              <div className="ml-6 p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold">Slovenská obchodná inšpekcia (SOI)</p>
                <p>Prievozská 32, P. O. Box 29, 827 99 Bratislava</p>
                <p>Email: <a href="mailto:ars@soi.sk" className="text-blue-600 hover:underline">ars@soi.sk</a></p>
                <p>Web: <a href="https://www.soi.sk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.soi.sk</a></p>
              </div>
              <p className="mt-4">
                <strong>7.2</strong> Podmienkou začatia alternatívneho riešenia sporov je, že zákazník najskôr uplatnil svoje právo z vady u poskytovateľa a nebol s jeho vybavením spokojný.
              </p>
              <p>
                <strong>7.3</strong> Návrh na začatie alternatívneho riešenia sporov sa musí podať do <strong>1 roka</strong> od dňa, keď zákazník uplatnil svoje právo z vady u poskytovateľa.
              </p>
            </div>
          </div>

          {/* Článok 8 - Záverečné */}
          <div className="bg-blue-100 border-l-4 border-blue-700 p-6 rounded-r-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. ZÁVEREČNÉ USTANOVENIA</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                <strong>8.1</strong> Vo veciach, ktoré nie sú v tomto reklamačnom poriadku výslovne upravené, sa aplikuje Zákon č. 40/1964 Zb. Občiansky zákonník a Zákon č. 108/2024 Z.z. o ochrane spotrebiteľa.
              </p>
              <p>
                <strong>8.2</strong> Tento reklamačný poriadok nadobúda platnosť a účinnosť dňa <strong>1. januára 2025</strong>.
              </p>
              <p>
                <strong>8.3</strong> Tento reklamačný poriadok je zverejnený na webovej stránke www.fixanto.sk a je k dispozícii na požiadanie zákazníka.
              </p>
            </div>
          </div>
        </div>

        {/* Kontaktné informácie */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-center">Ako podať reklamáciu?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="font-semibold mb-2">Telefón</p>
              <a href="tel:0949344600" className="text-xl hover:text-blue-200 transition-colors">0949 344 600</a>
            </div>
            <div>
              <p className="font-semibold mb-2">Email</p>
              <a href="mailto:phoneservissk@gmail.com" className="text-xl hover:text-blue-200 transition-colors">phoneservissk@gmail.com</a>
            </div>
            <div>
              <p className="font-semibold mb-2">Osobne</p>
              <p className="text-xl">Dolná Súča 877<br />913 32 Dolná Súča</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t-2 border-gray-300 text-center">
          <p className="text-gray-600 mb-2">© 2025 Štefan Hupčík - Fixanto. Všetky práva vyhradené.</p>
          <p className="text-sm text-gray-500">
            Tento reklamačný poriadok je v súlade so zákonom č. 40/1964 Zb. Občiansky zákonník a zákonom č. 108/2024 Z.z. o ochrane spotrebiteľa.
          </p>
        </div>
      </div>
    </section>
  );
}
