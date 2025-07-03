import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

import Startseite1 from '../assets/implementation/startseite1.png';
import Startseite2 from '../assets/implementation/startseite2.png';

import Navigationspanel1 from '../assets/implementation/navigationspanel1.png';
import Navigationspanel2 from '../assets/implementation/navigationspanel2.png';
import Navigationspanel3 from '../assets/implementation/navigationspanel3.png';
import Navigationspanel4 from '../assets/implementation/navigationspanel4.png';
import Navigationspanel5 from '../assets/implementation/navigationspanel5.png';
import Navigationspanel6 from '../assets/implementation/navigationspanel6.png';
import Navigationspanel7 from '../assets/implementation/navigationspanel7.png';
import Navigationspanel8 from '../assets/implementation/navigationspanel8.png';
import Navigationspanel9 from '../assets/implementation/navigationspanel9.png';
import Navigationspanel10 from '../assets/implementation/navigationspanel10.png';
import Navigationspanel11 from '../assets/implementation/navigationspanel11.png';

import RubrikenDarkV1 from '../assets/implementation/rubriken-dark-v1-3.png';
import RubrikenDarkV4 from '../assets/implementation/rubriken-dark-v4.png';
import RubrikenLightV1 from '../assets/implementation/rubriken-light-v1-3.png';
import RubrikenLightV4 from '../assets/implementation/rubriken-light-v4.png';

import Uebersicht1 from '../assets/implementation/uebersicht1.png';
import Uebersicht2 from '../assets/implementation/uebersicht2.png';
import Uebersicht3 from '../assets/implementation/uebersicht3.png';
import Uebersicht4 from '../assets/implementation/uebersicht4.png';

import UebersichtDoku1 from '../assets/implementation/uebersicht-doku1.png';
import UebersichtDoku2 from '../assets/implementation/uebersicht-doku2.png';
import UebersichtDoku3 from '../assets/implementation/uebersicht-doku3.png';
import UebersichtDoku4 from '../assets/implementation/uebersicht-doku4.png';

import UebersichtSerien1 from '../assets/implementation/uebersicht-serien1.png';
import UebersichtSerien2 from '../assets/implementation/uebersicht-serien2.png';
import UebersichtSerien3 from '../assets/implementation/uebersicht-serien3.png';
import UebersichtSerien4 from '../assets/implementation/uebersicht-serien4.png';

import Mediensteuerung1 from '../assets/implementation/mediensteuerung1.png';
import Mediensteuerung2 from '../assets/implementation/mediensteuerung2.png';
import Mediensteuerung3 from '../assets/implementation/mediensteuerung3.png';
import Mediensteuerung4 from '../assets/implementation/mediensteuerung4.png';
import Mediensteuerung5 from '../assets/implementation/mediensteuerung5.png';

import Navigationsstruktur from '../assets/implementation/navigationsstruktur.png';


const tabs = [
    {
        id: 'iteration',
        title: 'Iterative Entwicklung',
        pages: [
            [
                {
                    title: 'Version 1–3',
                    text: 'Schrittweise Überarbeitung der Panels, Farbwerte, Hover-Interaktionen und Layouts; Fokus lag auf Nutzerführung und Lesbarkeit.',
                },
                {
                    title: 'Version 4',
                    text: 'Finalisierung: dezente Panels, neue Farbgebung (Dark Mode Blau), Icons skaliert, Hover-Verhalten subtiler, ZDF-Orange als Feedback-Farbe.',
                },
                {
                    title: 'Gestaltungsprinzipien',
                    text: 'Nähe, Prägnanz, Konsistenz und Ähnlichkeit flossen systematisch in jede Iteration ein.',
                },
            ],
            [
                {
                    title: 'Startseite',
                    text: 'Navigationspanels angepasst, Hover-Interaktionen verfeinert, Icons beschriftet, Dark Mode abgestimmt auf Hintergrund.',
                    images: [Startseite1, Startseite2],
                },
            ],
            [
                {
                    title: 'Navigationspanels',
                    text: 'Panels schließen sich automatisch, neue Farbgebung, optimierte Icons.',
                    images: [Navigationspanel1, Navigationspanel2, Navigationspanel3, Navigationspanel4, Navigationspanel5, Navigationspanel6, Navigationspanel7, Navigationspanel8, Navigationspanel9, Navigationspanel10, Navigationspanel11],
                },],
            [
                {
                    title: 'Rubrikauswahl',
                    text: 'Kachelgestaltung überarbeitet, Bilder ersetzen Textfelder, Hover-Feedback subtil durch Umrandung und leichte Skalierung.',
                    images: [RubrikenDarkV1, RubrikenDarkV4, RubrikenLightV1, RubrikenLightV4],
                },
            ],
            [
                {
                    title: 'Übersichtsseiten',
                    text: 'Kombination von Bühne S+L zur Hervorhebung aktueller Inhalte.',
                    images: [Uebersicht1, Uebersicht2, Uebersicht3, Uebersicht4],
                },
            ],
            [
                {
                    title: 'Inhaltsübersicht Serien',
                    text: 'Dropdown für Staffelauswahl eingeführt, Hover-Verhalten angepasst.',
                    images: [UebersichtSerien1, UebersichtSerien2, UebersichtSerien3, UebersichtSerien4],
                },
            ],
            [
                {
                    title: 'Inhaltsübersicht Doku',
                    text: 'Interaktive Dokumentation und intuitive Navigation für Doku-Inhalte.',
                    images: [UebersichtDoku1, UebersichtDoku2, UebersichtDoku3, UebersichtDoku4],
                },
            ],
            [
                {
                    title: 'Mediensteuerung',
                    text: 'Icongröße reduziert, Position verbessert, Cube-Icon ergänzt, Vollbildmodus integriert.',
                    images: [Mediensteuerung1, Mediensteuerung2, Mediensteuerung3, Mediensteuerung4, Mediensteuerung5],
                },
            ],
        ],
    },
    {
        id: 'navigation',
        title: 'Navigations & Interaktionspfade',
        pages: [
            [
                {
                    title: 'Vereinfachte Navigationsstruktur',
                    images: [Navigationsstruktur],
                },
            ],
            [
                {
                    title: 'Mediathek The Rookie',
                    text: 'Spezifische Navigationspfade für die Mediathek am Beispiel The Rookie.',
                    images: [],
                },
            ],
            [
                {
                    title: 'Interaktiv TV Der Mond',
                    text: 'Interaktionspfade und Nutzerführung bei Interaktiv TV am Beispiel Der Mond.',
                    images: [],
                },
            ],
            [
                {
                    title: 'LiveTV ZDFneo',
                    text: 'LiveTV Navigation und Bedienung am Beispiel ZDFneo.',
                    images: [],
                },
            ],
        ],
    },
];

const Implementation = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const [pageIndex, setPageIndex] = useState(0);

    useEffect(() => {
        setPageIndex(0);
    }, [activeTab]);

    const activeTabData = tabs.find((t) => t.id === activeTab);
    const currentPage = activeTabData.pages[pageIndex];

    const handlePrev = () => setPageIndex((i) => Math.max(i - 1, 0));
    const handleNext = () => setPageIndex((i) => Math.min(i + 1, activeTabData.pages.length - 1));

    return (
        <section className="relative z-10 min-h-screen w-full">
            <Element name="implementation" className="min-h-screen flex items-center justify-center py-16">
                <div className="font-quicksand selection:bg-[var(--accent)] text-[var(--text)] px-8 relative z-10 w-full">
                    <div className="bg-[var(--primary)] rounded-2xl px-6 py-8 max-w-6xl mx-auto shadow-lg backdrop-blur-sm">
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            className="text-4xl font-semibold mb-8"
                        >
                            Entwicklung
                        </motion.h2>

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

                        <motion.div
                            key={`${activeTab}-${pageIndex}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-10"
                        >
                            {currentPage.map((item, idx) => (
                                <div key={idx} className="bg-[var(--secondary)] p-6 rounded-xl shadow-sm">
                                    <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                                    <p className="text-lg leading-relaxed mb-4">{item.text}</p>
                                    {item.images && item.images.length > 0 && (
                                        <div className="flex flex-wrap gap-4">
                                            {item.images.map((imgSrc, imgIdx) => (
                                                <div
                                                    key={imgIdx}
                                                    className="p-2 bg-black/5 rounded-lg border border-black/10 max-w-[300px] max-h-[220px] flex items-center justify-center"
                                                >
                                                    <img
                                                        src={imgSrc}
                                                        alt={`${item.title} Bild ${imgIdx + 1}`}
                                                        className="object-scale-down max-w-full max-h-full"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </motion.div>

                        <div className="flex justify-between mt-8">
                            <button
                                onClick={handlePrev}
                                disabled={pageIndex === 0}
                                className="px-6 py-2 rounded-lg bg-[var(--secondary)] text-[var(--text)] disabled:opacity-50 hover:bg-[var(--accent)] transition-colors"
                            >
                                Zurück
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={pageIndex === activeTabData.pages.length - 1}
                                className="px-6 py-2 rounded-lg bg-[var(--secondary)] text-[var(--text)] disabled:opacity-50 hover:bg-[var(--accent)] transition-colors"
                            >
                                Weiter
                            </button>
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Implementation;
