import { MessageCircle, Info, CheckCircle, Smartphone } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    number: 1,
    title: 'Kontaktujte nás cez WhatsApp/Facebook/Instagram',
    description: 'Prvotný krok je jednoduchý',
  },
  {
    icon: Info,
    number: 2,
    title: 'Pošlite informácie o zariadení',
    description: 'Model, popis problém',
  },
  {
    icon: CheckCircle,
    number: 3,
    title: 'Overíme dostupnosť náhradných dielov',
    description: 'Pošleme vám cenovú ponuku',
  },
  {
    icon: Smartphone,
    number: 4,
    title: 'Prineste zariadenie',
    description: 'Po našom potvrdení sa dohodeme na termíne opravy.',
  },
];

export default function HowItWorks() {
  return (
    <section id="ako-funguje" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ako to funguje v prípade opravy mobilu
          </h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Jednoduchý a transparentný proces opravy vášho zariadenia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative flex">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 w-8 h-1 bg-gradient-to-r from-blue-600 to-transparent"></div>
                )}

                <div className="flex flex-col items-center text-center w-full">
                  {/* Ikona a číslo - fixná výška */}
                  <div className="relative mb-6 flex-shrink-0">
                    <div className="absolute inset-0 bg-blue-100 rounded-full blur-lg"></div>
                    <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-full shadow-lg">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-bold text-sm shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Nadpis - fixná minimálna výška */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 min-h-[64px] flex items-center justify-center">
                    {step.title}
                  </h3>

                  {/* Popis - môže byť rôzne dlhý */}
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
