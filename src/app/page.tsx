"use client";

import dynamic from "next/dynamic";

const CalendlyWidget = dynamic(() => import("./components/calendlyWidget"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-amber-100 text-gray-800 p-4 sm:p-8 font-[family-name:var(--font-geist-sans)]">
      <header className="text-center mb-8 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-4 text-gold font-playfair">Goldexperten Tage</h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-700">Buchen Sie jetzt einen Termin bei Ihrem Goldexperten</p>
        <p className="text-base sm:text-lg text-gray-600 mt-2">Ihr vertrauenswürdiger Partner für exklusiven Schmuck und Goldankauf.</p>
      </header>

      <main className="w-full max-w-5xl grid gap-8 sm:gap-12">
        

        <section id="booking" className="">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 sm:mb-6 text-primary">Termin Buchen</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
            Sichern Sie sich Ihren persönlichen Beratungstermin mit unseren Goldexperten. Nutzen Sie unser einfaches Online-Buchungssystem, um Wartezeiten zu vermeiden und eine individuelle Betreuung zu gewährleisten.
          </p>
          <CalendlyWidget/>
        </section>

        <section id="about" className="">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 sm:mb-6 text-primary">Über Uns</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Wir sind Ihr vertrauenswürdiger Partner, wenn es um den Ankauf von Gold und Schmuck geht. Mit langjähriger Erfahrung bieten wir Ihnen eine faire und transparente Bewertung Ihrer Wertgegenstände. Unser Ziel ist es, Ihnen den bestmöglichen Preis für Ihr Altgold, Schmuckstücke und Edelmetalle zu garantieren. Besuchen Sie uns und profitieren Sie von unserer Expertise und unserem erstklassigen Service.
          </p>
        </section>

        <section id="services" className="">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 sm:mb-6 text-primary">Unsere Dienstleistungen an den Goldexperten Tagen</h2>
          <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 space-y-2 sm:space-y-3">
            <li>Kostenlose Bewertung Ihrer Schmuckstücke und Edelmetalle</li>
            <li>Sofortiger Ankauf von Gold, Silber, Platin und Diamanten zu fairen Preisen</li>
            <li>Professionelle Beratung durch unsere zertifizierten Experten</li>
            <li>Umarbeitung und Reparatur Ihrer wertvollen Stücke</li>
            <li>Exklusive Angebote und Kollektionen nur während der Expertentage</li>
          </ul>
        </section>

        <section id="contact" className="">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 sm:mb-6 text-primary">Kontakt</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-1 sm:mb-2">Meth Media Verlagsgesellschaft mbH</p>
          <p className="text-base sm:text-lg text-gray-700 mb-1 sm:mb-2">Siebensterngasse 35/9</p>
          <p className="text-base sm:text-lg text-gray-700 mb-2 sm:mb-4">A-1070 Wien</p>
          <p className="text-base sm:text-lg text-gray-700 mb-1 sm:mb-2">Telefon: <a href="tel:00431982 48 08" className="hover:text-yellow-600">0043/1/982 48 08</a></p>
          <p className="text-base sm:text-lg text-gray-700">E-Mail: <a href="mailto:info@juwelier-muehlbacher.de" className="hover:text-yellow-600">info@blickpunktjuwelier.de</a></p>
        </section>
      </main>

      <footer className="mt-12 sm:mt-16 text-center text-gray-600 text-sm sm:text-base">
        <p>&copy; {new Date().getFullYear()} Meth Media Verlagsgesellschaft m.b.H. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}
