import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import Brainstorm from '../assets/brainstorm.png';
import Navigationsstruktur from '../assets/implementation/navigationsstruktur.png';

import ConceptSlider from './ConceptSlider';
import ScreenDesignSlider from './ScreenDesignSlider';

const tabs = [
  {
    id: 'content',
    title: 'Content Struktur',
    items: [
      {
        title: 'Verzicht auf klassische Webelemente',
        text: 'Hauptnavigation, Promomodule und Footer werden bewusst ausgelassen, da sie für MR unpraktisch sind (z. B. Hover, Scroll).',
      },
      {
        title: 'Bühnenkonzept (S, M, L)',
        text: 'Bühne S für Übersichtsseiten, Bühne M bei Detailtiefe (z. B. Serien), Kombination S+L in Gesamtübersicht zur Hervorhebung aktueller Inhalte.',
      },
      {
        title: 'Optimierte Raumaufteilung',
        text: 'Kompakte Bühnenstruktur ersetzt klassische Seitenlayouts zur effizienten Nutzung des begrenzten MR-Raums.',
      },
      {
        title: 'Verzicht auf Promomodule',
        text: 'Promoinhalte entfallen zugunsten aktiv aufrufbarer, relevanter Inhalte ohne visuelle Überfrachtung.',
      },
      {
        title: 'Alternative zum Footer',
        text: 'Footer-Informationen (z. B. Impressum, Hilfe) sind über ein kontextsensitives Untermenü im rechten Panel erreichbar.',
      },
      {
        title: 'Fokuslenkung durch Reduktion',
        text: 'Durch Weglassen irrelevanter Elemente bleibt der Nutzerfokus auf den eigentlichen Inhalten, was Übersicht und Immersion erhöht.',
      },
    ],
  },
  {
    id: 'navigation',
    title: 'Navigationsstruktur',
    items: [
      {
        title: 'Startseitenlogik',
        text: 'Startseite zeigt standardmäßig geöffnete Navigationspanels, um eine schnelle Orientierung und Übersicht zu ermöglichen.',
      },
      {
        title: 'Dynamisches Panel-Verhalten',
        text: 'Navigationspanels schließen sich automatisch beim Verlassen der Startseite (Prinzip: Hide) und öffnen sich bei erneuter Interaktion.',
      },
      {
        title: 'Reihenfolge der Hauptfunktionen',
        text: 'Links nach rechts: Mediathek, Interaktives TV (zentral), Live TV – angeordnet nach Nutzungshäufigkeit und natürlichem Lesefluss.',
      },
      {
        title: 'Linkes Navigationspanel',
        text: 'Beinhaltet Rubrikenübersicht, Interaktives TV, Live TV, Sendung verpasst – bietet konsistenten Zugriff auf zentrale Inhalte.',
      },
      {
        title: 'Rechtes Navigationspanel',
        text: 'ZDF-Logo führt zur Startseite; Glühbirnensymbol erlaubt Steuerung der Ambient-Beleuchtung; enthält außerdem Zugang zu „Mein ZDF“ & barrierefreien Angeboten.',
      },
      {
        title: 'Dark/Light Mode',
        text: 'Umschaltbares Farbschema für bessere Benutzerfreundlichkeit und Berücksichtigung individueller Präferenzen.',
      },
      {
        title: 'Rubriken-Navigation',
        text: 'Zugriff entweder über Hauptübersichtsseite oder direkt zur Rubrikenseite (z. B. Serien, Dokus); fördert Aufgabenangemessenheit.',
      },
      {
        title: 'Videowiedergabe im Vollbild',
        text: 'Video startet im Vollbild (Panels werden ausgeblendet, Hauptscreen bleibt gleich groß), um maximale Immersion zu bieten.',
      },
      {
        title: 'Mediensteuerung im Vollbild',
        text: 'Steuerpanel erscheint am unteren Rand – bleibt im Vollbild sichtbar und erlaubt ergonomische, kontextbezogene Bedienung.',
      },
      {
        title: 'Zurück-Button',
        text: 'Ermöglicht jederzeitiges Zurückkehren zur vorherigen Ansicht; erhöht Erwartungskonformität und Usability.',
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
