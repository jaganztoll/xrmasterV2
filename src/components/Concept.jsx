import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

import Brainstorm from '../assets/brainstorm.png';

const Concept = () => {
  return (
    <section className="relative z-10 min-h-screen w-full">
      <Element name="concept" className="min-h-screen flex items-center justify-center py-16">
        {/* Hintergrundbild */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-cover z-0"
          style={{ backgroundImage: `url(${Brainstorm})` }}
        />

        {/* Inhalt */}
        <div className="font-quicksand selection:bg-[var(--accent)] text-[var(--text)] px-8">
          <div className={`bg-[var(--primary)] dark:bg-[var(--primary)] rounded-2xl px-6 py-8 max-w-6xl shadow-lg backdrop-blur-sm`}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-semibold mb-6">Konzept</h2>
              <p className="font-thin text-xl text-justify leading-[1.6] hyphens-auto mt-6">
                Die Konzeptentwicklung war ein iterativer Prozess, der durch kreative Techniken wie Brainstorming und Mind Mapping unterstützt wurde.
                In enger Zusammenarbeit mit dem ZDF, insbesondere mit <span className='font-medium'>Rainer Kirchknopf</span> vom Innovation Office,
                sowie <span className='font-medium'>Prof. Dr. Robert Strzebkowski </span> und <span className='font-medium'>Andreas Forster</span> wurden
                die entwickelten Ideen kontinuierlich diskutiert und optimiert.
              </p>

              <p className="font-thin text-xl text-justify leading-[1.6] hyphens-auto mt-6">
                Im Rahmen des <span className='font-medium'>Design Thinking</span>-Prozesses lag der Schwerpunkt auf der nutzerzentrierten Entwicklung von Lösungen.
                Neben der Analyse bestehender Systeme wurden kreative Ideen generiert, Prototypen entwickelt und iterativ getestet. Diese Methodik ermöglichte es,
                innovative Ansätze für die Herausforderungen von Mixed Reality zu finden, ohne auf klassische Nutzerbefragungen zurückzugreifen, da diese in diesem
                speziellen Kontext nicht zielführend waren.
              </p>

              {/* Die mehrfach wiederholten Absätze kannst du ggf. hier zusammenfassen oder separat lassen */}
              <p className="font-thin text-xl text-justify leading-[1.6] hyphens-auto mt-6">
                Zu Beginn wurden erste Entwürfe erstellt, um die grundlegende Struktur, Navigation und das Design der Mixed Reality Mediathek zu visualisieren.
                Dies umfasste die Definition einer klaren Content- und Navigationsstruktur sowie eine ansprechende, nutzerfreundliche visuelle Gestaltung. Ziel
                war es, eine effiziente und intuitive Benutzererfahrung zu schaffen, die sowohl den Anforderungen des ZDF als auch den spezifischen Anforderungen
                der Mixed Reality Technologie gerecht wird.
              </p>
              <p className="font-thin text-xl text-justify leading-[1.6] hyphens-auto mt-6">
                Zu Beginn wurden erste Entwürfe erstellt, um die grundlegende Struktur, Navigation und das Design der Mixed Reality Mediathek zu visualisieren.
                Dies umfasste die Definition einer klaren Content- und Navigationsstruktur sowie eine ansprechende, nutzerfreundliche visuelle Gestaltung. Ziel
                war es, eine effiziente und intuitive Benutzererfahrung zu schaffen, die sowohl den Anforderungen des ZDF als auch den spezifischen Anforderungen
                der Mixed Reality Technologie gerecht wird.
              </p>
              <p className="font-thin text-xl text-justify leading-[1.6] hyphens-auto mt-6">
                Zu Beginn wurden erste Entwürfe erstellt, um die grundlegende Struktur, Navigation und das Design der Mixed Reality Mediathek zu visualisieren.
                Dies umfasste die Definition einer klaren Content- und Navigationsstruktur sowie eine ansprechende, nutzerfreundliche visuelle Gestaltung. Ziel
                war es, eine effiziente und intuitive Benutzererfahrung zu schaffen, die sowohl den Anforderungen des ZDF als auch den spezifischen Anforderungen
                der Mixed Reality Technologie gerecht wird.
              </p>
              <p className="font-thin text-xl text-justify leading-[1.6] hyphens-auto mt-6">
                Zu Beginn wurden erste Entwürfe erstellt, um die grundlegende Struktur, Navigation und das Design der Mixed Reality Mediathek zu visualisieren.
                Dies umfasste die Definition einer klaren Content- und Navigationsstruktur sowie eine ansprechende, nutzerfreundliche visuelle Gestaltung. Ziel
                war es, eine effiziente und intuitive Benutzererfahrung zu schaffen, die sowohl den Anforderungen des ZDF als auch den spezifischen Anforderungen
                der Mixed Reality Technologie gerecht wird.
              </p>
            </motion.div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Concept;
