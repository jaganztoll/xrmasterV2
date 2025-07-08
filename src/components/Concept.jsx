import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

import Brainstorm from '../assets/brainstorm.png';

import Navigationsstruktur from '../assets/implementation/navigationsstruktur.png';

import StageSlider from './StageSlider';
import ConceptSlider from './ConceptSlider';
import ScreenDesignSlider from './ScreenDesignSlider';

const tabs = [
  {
    id: 'content',
    title: 'Content Struktur',
    items: [
      {
        title: 'Verzicht auf Flyout-Hauptnavigation',
        text: 'Hover-basierte Navigationselemente sind in MR unpraktisch und entfallen zugunsten klar platzierter Interaktionsflächen.',
      },
      {
        title: 'Bühnenkonzept (S, M, L)',
        text: 'Inhalte werden je nach Kontext in unterschiedlichen Bühnen präsentiert. Bühne S (Standard), Bühne M (Detail), Kombination S+L (Gesamtübersicht).',
      },
      {
        title: 'Verzicht auf Promomodule',
        text: 'Promoinhalte entfallen, um den Fokus auf relevante Inhalte zu legen.',
      },
      {
        title: 'Alternative zum Footer',
        text: 'Footer-Informationen (z.B. Impressum, Hilfe) sind über ein kontextsensitives Untermenü im rechten Panel erreichbar.',
      },
    ],
  },
  {
    id: 'navigation',
    title: 'Navigationsstruktur',
    items: [
      {
        title: 'Startseitenlogik',
        text: 'Startseite zeigt offene Panels zur schnellen Orientierung.',
      },
      {
        title: 'Panel-Verhalten (Hide-Prinzip)',
        text: 'Panels schließen sich automatisch beim Verlassen der Startseite und öffnen sich bei Interaktion.',
      },
      {
        title: 'Hauptfunktionen: Mediathek, Interaktiv TV, Live TV',
        text: 'Anordnung folgt Nutzungshäufigkeit & Lesefluss; Interaktiv TV zentral als Fokus.',
      },
      {
        title: 'Rubriken-Zugriff',
        text: 'Über Hauptübersicht oder direkt zu Serien/Dokus – erhöht Aufgabenangemessenheit.',
      },
      {
        title: 'Navigationspanels (links/rechts)',
        text: 'Links: Rubriken & Hauptbereiche. Rechts: Start (ZDF-Logo), Ambient-Light, Mein ZDF & Barrierefreiheit.',
      },
      {
        title: 'Dark/Light Mode',
        text: 'Umschaltbares Farbschema zur Unterstützung individueller Präferenzen.',
      },
      {
        title: 'Ambient-Light-Steuerung',
        text: 'Glühbirnen-Icon im rechten Panel ermöglicht Dimmung und Steuerung der Hintergrundbeleuchtung.',
      },
      {
        title: 'Zurück-Button',
        text: 'Ermöglicht jederzeitiges Zurück – entspricht Erwartungskonformität.',
      },
      {
        title: 'Vollbildmodus mit Fokus',
        text: 'Beim Start der Wiedergabe bleiben Panels sichtbar; erst im eigentlichen Vollbildmodus werden sie ausgeblendet – Screengröße bleibt konstant.',
      },
      {
        title: 'Fixierte Mediensteuerung',
        text: 'Mediensteuerung bleibt auch im Vollbildmodus inaktiv sichtbar und am unteren Rand fixiert.',
      },
    ],
  },
  {
    id: 'screendesign',
    title: 'Screen Design',
    items: [], // Externe Komponente ScreenDesignSlider
  },
  {
    id: 'entwuerfe',
    title: 'Entwürfe',
    items: [], // Externe Komponente ConceptSlider
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
                  className={`text-xl px-4 py-2 rounded-xl font-medium transition-all duration-200 transform ${activeTab === tab.id
                    ? 'bg-[var(--accent)] text-white shadow-md translate-y-[1px]'
                    : 'bg-[var(--secondary)] text-[var(--text)] hover:shadow-sm hover:translate-y-[1px]'
                    }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Inhalt */}
            {activeTab === 'entwuerfe' ? (
              <ConceptSlider />
            ) : activeTab === 'screendesign' ? (
              <ScreenDesignSlider />
            ) : (
              <>
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
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

                {/* Images: Content Struktur */}
                {activeTab === 'content' && (
                  <div className="mt-10">
                    <StageSlider />
                  </div>
                )}

                {/* Image: Navigationsstruktur */}
                {activeTab === 'navigation' && (
                  <div className="mt-10 flex justify-center">
                    <img
                      src={Navigationsstruktur}
                      alt="Navigationsstruktur"
                      className="max-w-full max-h-[500px] rounded-lg shadow-md bg-[var(--wireframes)]"
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Concept;
