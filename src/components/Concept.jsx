import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import Brainstorm from '../assets/brainstorm.png';

import ConceptSlider from './ConceptSlider'; // Import der ausgelagerten Slider-Komponente

const tabs = [
  {
    id: 'content',
    title: 'Content Struktur',
    items: [
      {
        title: 'Strukturprinzip',
        text: 'Verzicht auf klassische Webelemente wie Footer oder Promomodule zur besseren Raumnutzung in MR.',
      },
      {
        title: 'Bühnenkonzept',
        text: 'Verwendung von Bühne S, M, L zur responsiven Darstellung – je nach Übersicht oder Detailtiefe.',
      },
      {
        title: 'Zugänglichkeit von Metainformationen',
        text: 'Informationen aus dem Footer über ein Panel-Untermenü zugänglich gemacht.',
      },
    ],
  },
  {
    id: 'navigation',
    title: 'Navigationsstruktur',
    items: [
      {
        title: 'Startseitenlogik',
        text: 'Startseite zeigt Panels standardmäßig offen und ermöglicht schnellen Zugriff auf Hauptfunktionen.',
      },
      {
        title: 'Hauptnavigation',
        text: 'Links: Mediathek, Interaktiv TV, Live TV – zentrale Platzierung der Interaktiv-Kategorie.',
      },
      {
        title: 'Kontextsensitive Steuerung',
        text: 'Zurück-Button, Exit-Icons, Panel-Hiding und Ambient-Light-Regler fördern Übersicht & Steuerbarkeit.',
      },
    ],
  },
  {
    id: 'screendesign',
    title: 'Screen Design',
    items: [
      {
        title: 'ZDF-Brandguide',
        text: 'Farben, Typografie, Icons orientieren sich eng an der ZDF-CI, mit leichten Anpassungen.',
      },
      {
        title: 'Dark/Light Mode',
        text: 'Optimierter Farbkontrast für MR – ZDF-Grau & Dunkelblau, Orange als Interaktionsfarbe.',
      },
      {
        title: 'Hover-Feedback & Tiefenwirkung',
        text: 'Hover-Animationen, Icon-Vergrößerung und 3D-Icons verbessern Zielgenauigkeit & Orientierung.',
      },
    ],
  },
  {
    id: 'entwuerfe',
    title: 'Entwürfe',
    items: [],
  },
];

const Concept = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="relative z-10 min-h-screen w-full">
      <Element name="concept" className="min-h-screen flex items-center justify-center py-16">
        {/* Hintergrundbild */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-cover z-0"
          style={{ backgroundImage: `url(${Brainstorm})` }}
        />

        {/* Inhalt */}
        <div className="font-quicksand selection:bg-[var(--accent)] text-[var(--text)] px-8 relative z-10 w-full">
          <div className="bg-[var(--primary)] dark:bg-[var(--primary)] rounded-2xl px-6 py-8 max-w-6xl mx-auto shadow-lg backdrop-blur-sm">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-4xl font-semibold mb-8"
            >
              Konzept
            </motion.h2>

            {/* Tabs */}
            <div className="flex flex-wrap gap-4 mb-10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-base px-4 py-2 rounded-xl font-medium transition-all duration-200 transform ${activeTab === tab.id
                    ? 'bg-[var(--accent)] text-white shadow-md translate-y-[1px]'
                    : 'bg-[var(--secondary)] text-[var(--text)] hover:shadow-sm hover:translate-y-[1px]'
                    }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Inhalt */}
            {activeTab !== 'entwuerfe' ? (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {activeContent?.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[var(--secondary)] dark:bg-[var(--secondary)] p-6 rounded-xl shadow-sm hover:shadow-md hover:translate-y-[1px] transition-all duration-200"
                  >
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-lg leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </motion.div>
            ) : (
              <ConceptSlider />
            )}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Concept;
