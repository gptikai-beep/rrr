import { Shield, Clock, Lock, User, Mail, Phone } from 'lucide-react';

export default function Privacy() {
  return (
    <section id="ochrana-osobnych-udajov" className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Ochrana osobných údajov
            </h1>
          </div>
          <div className="h-1 w-24 bg-blue-600 rounded-full mb-8"></div>
          <p className="text-gray-600 leading-relaxed">
            Platné od 8. novembra 2025 | Verzia 1.1 (aktualizované pre lehotu uchovávania a kontakty cez platformy)
          </p>
        </div>

        <div className="space-y-12">
          {/* ÚVOD */}
          <section className="prose prose-sm max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
              <h2 className="text-xl font-bold text-gray-900 mt-0 mb-3">Prevádzkovateľ údajov</h2>
              <div className="space-y-2 text-gray-700">
                <p className="font-semibold">Fixanto - Servis elektroniky</p>
                <p><strong>Meno podnikateľa:</strong> Štefan Hupčík (živnostník, neplatiteľ DPH)</p>
                <p><strong>IČO:</strong> 57 310 990</p>
                <p><strong>Adresa:</strong> Dolná Súča 877, 913 32 Dolná Súča</p>
                <p><strong>Telefón:</strong> <a href="tel:0949344600" className="text-blue-600 hover:text-blue-800">0949 344 600</a></p>
                <p><strong>Kontakt na GDPR:</strong> <a href="mailto:phoneservissk@gmail.com" className="text-blue-600 hover:text-blue-800">phoneservissk@gmail.com</a></p>
              </div>
            </div>
          </section>

          {/* SPRACÚVANÉ ÚDAJE */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <User className="w-6 h-6 text-blue-600" />
              Aké údaje spracúvame?
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Údaje o zákazníkovi:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>Meno a priezvisko</li>
                  <li>Telefónne číslo</li>
                  <li>Adresa</li>
                  <li>E-mailová adresa</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Údaje o zariadení:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>Model zariadenia (mobil, TV, notebook atď.)</li>
                  <li>Sériové číslo</li>
                  <li>Popis problému a poruchy</li>
                  <li>Fotografie či screenshoty obrazovky</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Komunikačné údaje:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>Správy na WhatsApp, Facebook a Instagram</li>
                  <li>Telefonická komunikácia</li>
                  <li>E-mailová korešpondencia</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ÚČEL SPRACÚVANIA */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Lock className="w-6 h-6 text-blue-600" />
              Účel spracúvania údajov
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-3 text-gray-700">
              <p>Vaše osobné údaje spracúvame výhradne na:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Vybavenie opravy vášho zariadenia (mobilu, TV, elektroniky)</li>
                <li>Komunikáciu s vami ohľadom stavu opravy</li>
                <li>Poskytovanie informácií o dostupnosti náhradných dielov</li>
                <li>Dohodnutie termínu prinesenia zariadenia</li>
                <li>Faktúracia a vedenie účtov podľa slovenského práva (ako neplatiteľ DPH)</li>
                <li>Splnenie zákonných povinností (daňové právo, účtovníctvo)</li>
              </ul>
              <p className="mt-4 font-semibold text-gray-900">
                Vaše údaje nepoužívame na marketing ani ich neposielame tretím stranám bez vášho súhlasu.
              </p>
            </div>
          </section>

          {/* PRÁVNY ZÁKLAD */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Právny základ spracúvania</h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-3 text-gray-700">
              <p>Spracúvame vaše údaje na základe:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Zmluva (GDPR čl. 6 odst. 1 písm. b)</strong> - Vybavenie opravy, ktorú ste objednali</li>
                <li><strong>Právna povinnosť (GDPR čl. 6 odst. 1 písm. c)</strong> - Vedenie účtov a daňové záznamy</li>
                <li><strong>Váš súhlas (GDPR čl. 6 odst. 1 písm. a)</strong> - Ak nás kontaktujete prostredníctvom komunikačnej siete, ktorú ste konkrétne zvolili (napr. WhatsApp, Facebook, Instagram)</li>
              </ul>
            </div>
          </section>

          {/* DOBA UCHOVÁVANIA */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="w-6 h-6 text-blue-600" />
              Ako dlho uchováme vaše údaje?
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-3 text-gray-700">
              <ul className="space-y-3">
                <li>
                  <strong>Počas opravy:</strong> Po dobu vybavenia opravy
                </li>
                <li>
                  <strong>Po ukončení opravy:</strong> Minimálne 10 rokov v súlade so slovenským účtovným zákonom (zákon č. 431/2002 Z. z., § 35 ods. 3) pre účtovné doklady a daňové účely, ako živnostník s jednoduchým účtovníctvom
                </li>
                <li>
                  <strong>Po zániku záväzku:</strong> Uchováme si záznam o oprave pre prípadné reklamácie a záruku (do uplynutia lehôt podľa Občianskeho zákonníka)
                </li>
                <li>
                  <strong>Vaša žiadosť:</strong> Môžete požiadať o vymazanie údajov po dosiahnutí účelu spracúvania, pokiaľ to neprotire zákonným povinnostiam (napr. daňové záznamy)
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                Lehota 10 rokov platí pre všetky účtovné doklady vrátane osobných údajov v nich, bez ohľadu na spôsob kontaktu (web, sociálne siete alebo telefonicky).
              </p>
            </div>
          </section>

          {/* KONTAKTY CEZ SOCIÁLNE SIETE - NOVÁ SEKCIÁ */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Mail className="w-6 h-6 text-blue-600" />
              Kontakt cez sociálne siete (WhatsApp, Facebook, Instagram)
            </h2>
            <div className="bg-yellow-50 p-6 rounded-lg space-y-3 text-gray-700 border border-yellow-200">
              <p>Ak nás kontaktujete cez WhatsApp, Facebook alebo Instagram (platformy prevádzkované spoločnosťou Meta Platforms, Inc.), stávame sa prevádzkovateľom vašich údajov pre účely opravy, ale tieto platformy fungujú ako spoloční prevádzkovatelia (joint controllers) alebo sprostredkovatelia (processors) podľa GDPR.</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Spracúvame údaje len na vybavenie opravy a komunikáciu; platformy majú vlastné zásady ochrany údajov, ktoré si môžete prečítať na ich stránkach (napr. Meta Privacy Policy).</li>
                <li>Meta môže zdieľať údaje v rámci svojich služieb (FB, IG, WhatsApp), ale my ich nepoužívame na marketing a nezdieľame ďalej bez vášho súhlasu.</li>
                <li>Podrobnosti o spracovaní nájdete v tejto politike; pri kontakte vás odkážeme na ňu pre transparentnosť.</li>
              </ul>
              <p className="mt-4 font-semibold text-gray-900">
                Vaša zodpovednosť za súhlas s platformami: Kontaktovaním nás cez tieto siete súhlasíte so spracovaním na naše účely, ale overte si Meta zásady pre ich spracovanie.
              </p>
            </div>
          </section>

          {/* VAŠE PRÁVA */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Vaše práva v oblasti ochrany údajov</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-2">Právo na prístup</h3>
                <p className="text-gray-700 text-sm">Máte právo vedieť, aké údaje o vás spracúvame a ako ich používame.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-2">Právo na opravu</h3>
                <p className="text-gray-700 text-sm">Ak sú vaše údaje nesprávne, môžete požiadať o ich opravu.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-2">Právo na vymazanie</h3>
                <p className="text-gray-700 text-sm">Môžete požiadať o vymazanie vašich údajov (v prípade, že to nebráni zákonným povinnostiam).</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-2">Právo na obmedzenie</h3>
                <p className="text-gray-700 text-sm">Môžete požiadať, aby sme obmedzili spracúvanie vašich údajov.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-2">Právo na prenosnosť</h3>
                <p className="text-gray-700 text-sm">Máte právo dostať si vaše údaje v strojovo čitateľnom formáte.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-2">Právo na námietku</h3>
                <p className="text-gray-700 text-sm">Môžete namietať spracúvanie vašich údajov v určitých prípadoch.</p>
              </div>
            </div>
            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <p className="text-gray-700">
                <strong>Ako uplatniť vaše práva?</strong> Pošlite nám žiadosť na e-mail: <a href="mailto:phoneservissk@gmail.com" className="text-blue-600 hover:text-blue-800 font-semibold">phoneservissk@gmail.com</a> alebo zavolajte: <a href="tel:0949344600" className="text-blue-600 hover:text-blue-800 font-semibold">0949 344 600</a>
              </p>
            </div>
          </section>

          {/* COOKIES */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies a sledovací kód</h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-3 text-gray-700">
              <p>
                Naša webová stránka <strong>nepoužíva cookies</strong> ani sledovací kód (analytics).
              </p>
              <p>
                Nekomunikujeme s tretími stranami, ktoré by spracúvavali vaše údaje na marketing alebo analýzu správania.
              </p>
              <p className="font-semibold text-gray-900 mt-4">
                Vaša súkromie a bezpečnosť sú naša priorita.
              </p>
            </div>
          </section>

          {/* BEZPEČNOSŤ */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Bezpečnosť vašich údajov</h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-3 text-gray-700">
              <p>Vaše údaje chránime pomocou:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Šifrovanej komunikácie (HTTPS na webovej stránke)</li>
                <li>Bezpečného ukladania údajov</li>
                <li>Kontroly prístupu (len autorizovaní zamestnanci)</li>
                <li>Pravidelného školenia personálu v oblasti ochrany údajov</li>
              </ul>
              <p className="mt-4">
                V prípade porušenia bezpečnosti údajov vás informujeme bez zbytočného oneskôrenia.
              </p>
            </div>
          </section>

          {/* TRETIE STRANY */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Zdieľanie údajov s tretími stranami</h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-3 text-gray-700">
              <p>Vaše údaje zdieľame výhradne s:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Fiškálnym systémom</strong> - Pre faktúraciu a daňové povinnosti (zákonná požiadavka, bez DPH evidencie)</li>
                <li><strong>Softvérom na správu servisov</strong> - Na evidenciu opráv a objednávok</li>
                <li><strong>Sociálnymi platformami (Meta)</strong> - Pri kontaktoch cez WhatsApp, Facebook alebo Instagram, kde Meta spracúva údaje ako spoločný prevádzkovateľ, ale len na naše účely opravy</li>
              </ul>
              <p className="mt-4 font-semibold text-gray-900">
                Vaše údaje nepredávame a nepoužívame na marketingové účely tretích strán. Bez vášho výslovného súhlasu ich nezdieľame ďalej.
              </p>
            </div>
          </section>

          {/* ZMENY */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Zmeny v zásadách ochrany údajov</h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-3 text-gray-700">
              <p>
                Môžeme aktualizovať tieto zásady kedykoľvek. Významné zmeny vám oznámime prostredníctvom e-mailu alebo telefonicky.
              </p>
              <p className="text-sm text-gray-600 italic">
                Posledná aktualizácia: 8. november 2025
              </p>
            </div>
          </section>

          {/* KONTAKT */}
          <section className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Máte otázky na GDPR?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Telefón</p>
                  <p className="text-gray-700"><a href="tel:0949344600" className="text-blue-600 hover:text-blue-800">0949 344 600</a></p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">E-mail</p>
                  <p className="text-gray-700"><a href="mailto:phoneservissk@gmail.com" className="text-blue-600 hover:text-blue-800">phoneservissk@gmail.com</a></p>
                </div>
              </div>
            </div>
          </section>

          {/* ZÁVER */}
          <section className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
            <p className="text-gray-700 leading-relaxed">
              <strong>Spôsob podania stížnosti:</strong> Ak si myslíte, že sme porušili vaše práva na ochranu údajov, máte právo podať stížnosť Úradu na ochranu osobných údajov Slovenskej republiky (<a href="https://www.naseudaje.sk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">www.naseudaje.sk</a>).
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
