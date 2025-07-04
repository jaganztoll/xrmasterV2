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
import Navigationspanel12 from '../assets/implementation/navigationspanel12.png';

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

const Implementation = () => {
    const [activeTopic, setActiveTopic] = useState('iteration');
    const [activeSection, setActiveSection] = useState('startseite');
    const [slideIndex, setSlideIndex] = useState(0);

    const topics = [
        {
            id: 'iteration',
            title: 'Iterative Entwicklung',
            sections: [
                {
                    id: 'iteration',
                    title: 'Iterationsprozess',
                    slides: [
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
                },
                {
                    id: 'startseite',
                    title: 'Startseite',
                    slides: [
                        { title: 'Startseite v1', text: 'Erste Version mit Navigationsstruktur.', images: [Startseite1] },
                        { title: 'Startseite v2', text: 'Dark Mode und Layout optimiert.', images: [Startseite2] },
                    ],
                },
                {
                    id: 'navi',
                    title: 'Navigationspanels',
                    slides: [
                        { title: 'Panels', images: [Navigationspanel6, Navigationspanel12, Navigationspanel7, Navigationspanel8, Navigationspanel9, Navigationspanel10, Navigationspanel11] },
                        { title: 'Panels 1–3', images: [Navigationspanel1, Navigationspanel2, Navigationspanel3] },
                        { title: 'Panels 4–6', images: [Navigationspanel4, Navigationspanel5, Navigationspanel6] },
                        { title: 'Panels 7–9', images: [Navigationspanel7, Navigationspanel8, Navigationspanel9] },
                        { title: 'Panels 10–11', images: [Navigationspanel10, Navigationspanel11] },
                    ],
                },
                {
                    id: 'rubriken',
                    title: 'Rubrikauswahl',
                    slides: [
                        { title: 'Dark Mode v1 vs v4', images: [RubrikenDarkV1, RubrikenDarkV4] },
                        { title: 'Light Mode v1 vs v4', images: [RubrikenLightV1, RubrikenLightV4] },
                    ],
                },
                {
                    id: 'uebersicht',
                    title: 'Übersichtsseiten',
                    slides: [
                        { title: 'Übersicht allgemein', images: [Uebersicht1, Uebersicht2, Uebersicht3, Uebersicht4] },
                        { title: 'Serienübersicht', images: [UebersichtSerien1, UebersichtSerien2, UebersichtSerien3, UebersichtSerien4] },
                        { title: 'Dokuübersicht', images: [UebersichtDoku1, UebersichtDoku2, UebersichtDoku3, UebersichtDoku4] },
                    ],
                },
                {
                    id: 'medien',
                    title: 'Mediensteuerung',
                    slides: [
                        { title: 'Player UI Varianten', images: [Mediensteuerung1, Mediensteuerung2, Mediensteuerung3, Mediensteuerung4, Mediensteuerung5] },
                    ],
                },
            ],
        },
        {
            id: 'navigationsstruktur',
            title: 'Navigationsstruktur & Interaktion',
            sections: [
                {
                    id: 'navi-struktur',
                    title: 'Vereinfachte Navigationsstruktur',
                    slides: [
                        { title: 'Strukturübersicht', text: 'Schematische Darstellung der Navigationslogik.', images: [Navigationsstruktur] },
                    ],
                },
                {
                    id: 'the-rookie',
                    title: 'Mediathek "The Rookie"',
                    slides: [
                        { title: 'Strukturübersicht', text: 'Schematische Darstellung der Navigationslogik.', images: [Navigationsstruktur] },
                    ],
                },
                {
                    id: 'der-mond',
                    title: 'Interaktiv TV "Der Mond"',
                    slides: [
                        { title: 'Strukturübersicht', text: 'Schematische Darstellung der Navigationslogik.', images: [Navigationsstruktur] },
                    ],
                },
            ],
        },
    ];

    const currentTopic = topics.find(t => t.id === activeTopic);
    const currentSection = currentTopic?.sections.find(s => s.id === activeSection);
    const currentSlide = currentSection?.slides[slideIndex];

    useEffect(() => {
        setActiveSection(currentTopic?.sections[0].id || '');
        setSlideIndex(0);
    }, [activeTopic]);

    useEffect(() => {
        setSlideIndex(0);
    }, [activeSection]);

    const handlePrev = () => setSlideIndex(i => Math.max(i - 1, 0));
    const handleNext = () => setSlideIndex(i => Math.min(i + 1, (currentSection?.slides.length || 1) - 1));

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

                        <div className="flex flex-wrap gap-4 mb-6">
                            {topics.map(t => (
                                <button
                                    key={t.id}
                                    onClick={() => setActiveTopic(t.id)}
                                    className={`text-base px-4 py-2 rounded-xl font-medium transition-all duration-200 transform ${activeTopic === t.id ? 'bg-[var(--accent)] text-white shadow-md translate-y-[1px]' : 'bg-[var(--secondary)] text-[var(--text)] hover:shadow-sm hover:translate-y-[1px]'
                                        }`}
                                >
                                    {t.title}
                                </button>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-3 mb-8">
                            {currentTopic?.sections.map(section => (
                                <button
                                    key={section.id}
                                    onClick={() => setActiveSection(section.id)}
                                    className={`text-sm px-3 py-1 rounded-md border transition ${activeSection === section.id ? 'bg-[var(--accent)] text-white border-[var(--accent)]' : 'bg-[var(--secondary)] text-[var(--text)] hover:border-[var(--accent)]'
                                        }`}
                                >
                                    {section.title}
                                </button>
                            ))}
                        </div>

                        {currentSlide && (
                            <motion.div
                                key={`${activeSection}-${slideIndex}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="bg-[var(--secondary)] p-6 rounded-xl shadow-sm space-y-6"
                            >
                                <h3 className="text-2xl font-semibold">{currentSlide.title}</h3>
                                {currentSlide.text && <p className="text-lg leading-relaxed">{currentSlide.text}</p>}
                                {currentSlide.images?.length > 0 && (
                                    <div className="flex flex-wrap justify-center gap-4">
                                        {currentSlide.images.map((imgSrc, idx) => (
                                            <div
                                                key={idx}
                                                className="bg-black/5 border border-black/10 rounded-lg p-2"
                                                style={{ display: 'inline-block' }}
                                            >
                                                <img
                                                    src={imgSrc}
                                                    alt={`${currentSlide.title} Bild ${idx + 1}`}
                                                    className="block"
                                                    style={{
                                                        maxWidth: '300px',
                                                        maxHeight: '220px',
                                                        objectFit: 'contain',
                                                    }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        )}

                        <div className="flex justify-between mt-8">
                            <button
                                onClick={handlePrev}
                                disabled={slideIndex === 0}
                                className="px-6 py-2 rounded-lg bg-[var(--secondary)] text-[var(--text)] disabled:opacity-50 hover:bg-[var(--accent)] transition-colors"
                            >
                                Zurück
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={slideIndex === (currentSection?.slides.length || 1) - 1}
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
