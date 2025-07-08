import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

import Startseite1 from '../assets/implementation/startseite1.png';
import Startseite2 from '../assets/implementation/startseite2.png';

import Navigationspanel2 from '../assets/implementation/navigationspanel2.png';
import Navigationspanel3 from '../assets/implementation/navigationspanel3.png';
import Navigationspanel4 from '../assets/implementation/navigationspanel4.png';
import Navigationspanel5 from '../assets/implementation/navigationspanel5.png';
import Navigationspanel6 from '../assets/implementation/navigationspanel6.png';
import Navigationspanel8 from '../assets/implementation/navigationspanel8.png';
import Navigationspanel9 from '../assets/implementation/navigationspanel9.png';
import Navigationspanel10 from '../assets/implementation/navigationspanel10.png';
import Navigationspanel11 from '../assets/implementation/navigationspanel11.png';
import Navigationspanel13 from '../assets/implementation/navigationspanel13.png';
import Navigationspanel14 from '../assets/implementation/navigationspanel14.png';
import Navigationspanel15 from '../assets/implementation/navigationspanel15.png';
import Navigationspanel16 from '../assets/implementation/navigationspanel16.png';
import Navigationspanel17 from '../assets/implementation/navigationspanel17.png';
import Navigationspanel18 from '../assets/implementation/navigationspanel18.png';

import RubrikenDarkV1 from '../assets/implementation/rubriken-dark-v1-3.png';
import RubrikenDarkV4 from '../assets/implementation/rubriken-dark-v4.png';
import RubrikenLightV1 from '../assets/implementation/rubriken-light-v1-3.png';
import RubrikenLightV4 from '../assets/implementation/rubriken-light-v4.png';

import Uebersicht1 from '../assets/implementation/uebersicht1.png';
import Uebersicht2 from '../assets/implementation/uebersicht2.png';
import Uebersicht3 from '../assets/implementation/uebersicht3.png';
import Uebersicht4 from '../assets/implementation/uebersicht4.png';
import Uebersicht5 from '../assets/implementation/uebersicht5.png';
import Uebersicht6 from '../assets/implementation/uebersicht6.png';
import Uebersicht7 from '../assets/implementation/uebersicht7.png';
import Uebersicht8 from '../assets/implementation/uebersicht8.png';
import Uebersicht9 from '../assets/implementation/uebersicht9.png';
import Uebersicht10 from '../assets/implementation/uebersicht10.png';
import Uebersicht11 from '../assets/implementation/uebersicht11.png';
import Uebersicht12 from '../assets/implementation/uebersicht12.png';
import Uebersicht13 from '../assets/implementation/uebersicht13.png';
import Uebersicht14 from '../assets/implementation/uebersicht14.png';

import Mediensteuerung1 from '../assets/implementation/mediensteuerung1.png';
import Mediensteuerung2 from '../assets/implementation/mediensteuerung2.png';
import Mediensteuerung3 from '../assets/implementation/mediensteuerung3.png';
import Mediensteuerung4 from '../assets/implementation/mediensteuerung4.png';
import Mediensteuerung5 from '../assets/implementation/mediensteuerung5.png';
import Mediensteuerung6 from '../assets/implementation/mediensteuerung6.png';

import Navigationsstruktur1 from '../assets/implementation/navigationsstruktur1.png';
import Navigationsstruktur2 from '../assets/implementation/navigationsstruktur2.png';
import Navigationsstruktur3 from '../assets/implementation/navigationsstruktur3.png';

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
                        title: 'Iterationsprozess',
                        texts: [
                            {
                                subtitle: 'Version 1–3',
                                text: 'Panels, Farben, Hover-Effekte und Layout wurden schrittweise überarbeitet. Fokus lag auf Nutzerführung und Lesbarkeit.',
                            },
                            {
                                subtitle: 'Version 4',
                                text: 'Finales Design mit dezenten Panels, neuem Dark-Mode-Blau, skalierten Icons und ZDF-Orange als Feedback-Farbe',
                            },
                            {
                                subtitle: 'Gestaltungsprinzipien',
                                text: 'Nähe, Prägnanz, Konsistenz und Ähnlichkeit wurden systematisch angewendet.',
                            },
                        ],
                    },
                ],
            },
            {
                id: 'startseite',
                title: 'Startseite',
                slides: [
                    {
                        title: 'Startseite',
                        text: 'Frühere Versionen zeigten kontrastreiche Icons in ZDF-Orange. Version 4 reduzierte Icons im Dark Mode für bessere Hierarchie und passte die Hintergrundfarbe für einen moderneren Look an. Das ZDF-Logo stärkt die Markenwahrnehmung.',
                        images: [Startseite1, Startseite2],
                    },
                ],
            },
            {
                id: 'navi',
                title: 'Navigationspanels',
                slides: [
                    {
                        title: 'Navigationspanels',
                        text: 'Eines der komplexesten UI-Elemente, mit Fokus auf klare Abgrenzung zwischen aktivem und inaktivem Zustand.',
                    },
                    {
                        title: 'Version 1',
                        text: 'Panels immer sichtbar, inaktiv transparent – führte zu Auffindbarkeitsproblemen. Hover vergrößert Icons und färbt sie ZDF-Orange.',
                        images: [Navigationspanel13, Navigationspanel14, Navigationspanel15, Navigationspanel16],
                    },
                    {
                        title: 'Version 2',
                        text: 'Keine Transparenz mehr, da ablenkend. Icons blieben gleich, Hover erweitert Panel seitlich und zeigt Beschriftungen.',
                        images: [Navigationspanel2, Navigationspanel3, Navigationspanel8],
                    },
                    {
                        title: 'Version 3',
                        text: 'Panels öffnen sich symmetrisch von der Mitte, verbessert Hand-Tracking und verursachte leichte Überlagerung mit Hauptscreen.',
                        images: [Navigationspanel6, Navigationspanel4],
                    },
                    {
                        title: 'Version 4',
                        text: 'Panels breiter, aber kürzer; Icons kleiner, größerer Abstand zum Rand. Neu: Glühlampen-Icon für Hintergrundbeleuchtung, Beschriftungen im Hover sichtbar.',
                        images: [Navigationspanel9, Navigationspanel10, Navigationspanel11, Navigationspanel5, Navigationspanel17, Navigationspanel18],
                    },
                ],
            },
            {
                id: 'rubriken',
                title: 'Rubrikauswahl',
                slides: [
                    {
                        title: 'Rubrikenauswahl',
                        text: 'Version 4 ersetzt Kacheln durch Bilder zur besseren Orientierung. Die Gruppierung folgt dem Nähegesetz, der Hintergrund schafft Konsistenz. Hover zeigt eine dezente Umrandung mit leichter Vergrößerung als Feedback.',
                        images: [RubrikenDarkV1, RubrikenDarkV4, RubrikenLightV1, RubrikenLightV4],
                    },
                ],
            },
            {
                id: 'uebersicht',
                title: 'Übersichtsseiten',
                slides: [
                    {
                        title: 'Hauptübersicht',
                        text: 'Version 4 ergänzt Bühne L, um Highlights hervorzuheben und Orientierung zu fördern.',
                        images: [Uebersicht5, Uebersicht6],
                    },
                    {
                        title: 'Serien & Interaktiv',
                        text: 'Neues Plakat-Clusterband, Hover vergrößert nur noch Inhalt mit farbiger Umrandung.',
                        images: [Uebersicht1, Uebersicht2, Uebersicht3, Uebersicht4],
                    },
                    {
                        title: 'Live TV',
                        text: 'Live-Videos starten direkt im Vollbild, ohne separaten Button; Zurück-Pfeil integriert.',
                        images: [Uebersicht7, Uebersicht8],
                    },
                    {
                        title: 'Sendung verpasst?',
                        text: 'Optimierte Zeitnavigation; aktive Tageszeit wird beim Hover farbig hervorgehoben.',
                        images: [Uebersicht9, Uebersicht10],
                    },
                    {
                        title: 'Serie',
                        text: 'Dropdown für Staffelauswahl sorgt für Übersicht; reduzierte Infos und Hover-Effekte verbessern Klarheit.',
                        images: [Uebersicht11, Uebersicht12],
                    },
                    {
                        title: 'Dokumentation',
                        text: 'Interaktive Dokus mit Cube-Icon; überladene Seiten wie „Interview“ entfernt.',
                        images: [Uebersicht13, Uebersicht14],
                    },
                ],
            },
            {
                id: 'medien',
                title: 'Mediensteuerung',
                slides: [
                    {
                        title: 'Version 1–3',
                        text: 'Design blieb ähnlich: Icons mit konstantem Randabstand, Farb- und Größenänderung bei Hover, Lautstärkeregler öffnete sich oben, Vollbild über Icon unten rechts.',
                        images: [Mediensteuerung1, Mediensteuerung2, Mediensteuerung4],
                    },
                    {
                        title: 'Version 4',
                        text: 'Kompakteres Panel mit kleineren Icons und größerem Abstand. Icons wechseln beim Hover die Farbe zu ZDF-Orange, Lautstärkeregler dauerhaft sichtbar oben links. Vollbild-Icon integriert, Cube-Icon für interaktive Inhalte unten rechts.',
                        images: [Mediensteuerung3, Mediensteuerung6, Mediensteuerung5],
                    },
                ],
            }
        ],
    },
    {
        id: 'navigationsstruktur',
        title: 'Navigationsstruktur & Interaktion',
        sections: [
            {
                id: 'pfad-mediathek',
                title: 'Beispielpfad: Mediathek – The Rookie',
                slides: [
                    {
                        title: 'Mediathek – The Rookie',
                        text: '',
                        images: [Navigationsstruktur1],
                    },
                ],
            },
            {
                id: 'pfad-interaktiv',
                title: 'Beispielpfad: Interaktives TV – Der Mond',
                slides: [
                    {
                        title: 'Interaktiv TV – Der Mond & Der Mars',
                        text: '',
                        images: [Navigationsstruktur2],
                    },
                ],
            },
            {
                id: 'pfad-livetv',
                title: 'Beispielpfad: Live TV – ZDFneo',
                slides: [
                    {
                        title: 'Live TV – ZDFneo',
                        text: '',
                        images: [Navigationsstruktur3],
                    },
                ],
            },
        ],
    }

];

const LazyImage = ({ src, alt = '', className = '' }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="relative w-full max-w-full min-h-[100px]">
            {!loaded && (
                <div className="absolute inset-0 animate-pulse bg-gray-300 rounded-md" />
            )}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                className={`rounded-md shadow-md transition-opacity duration-300 object-contain ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
            />
        </div>
    );
};


const Implementation = () => {
    const [activeTopic, setActiveTopic] = useState('iteration');
    const [activeSection, setActiveSection] = useState('startseite');
    const [slideIndex, setSlideIndex] = useState(0);

    const currentTopic = topics.find(t => t.id === activeTopic);
    const currentSection = currentTopic?.sections.find(s => s.id === activeSection);
    const currentSlide = currentSection?.slides[slideIndex];

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImg, setLightboxImg] = useState('');

    // ⏱ Tab-Wechsel → Section-Reset
    useEffect(() => {
        setActiveSection(currentTopic?.sections[0].id || '');
        setSlideIndex(0);
    }, [activeTopic]);

    // ⏱ Slide-Reset bei Section-Wechsel
    useEffect(() => {
        setSlideIndex(0);
    }, [activeSection]);

    // ✅ Preload Bilder der aktiven Section
    useEffect(() => {
        const preloadImages = (section) => {
            const images = section?.slides?.flatMap(slide => slide.images || []);
            images?.forEach((src) => {
                const img = new Image();
                img.src = src;
            });
        };
        if (currentSection) preloadImages(currentSection);
    }, [activeSection]);

    const handlePrev = () => setSlideIndex(i => Math.max(i - 1, 0));
    const handleNext = () => setSlideIndex(i => Math.min(i + 1, (currentSection?.slides.length || 1) - 1));

    return (
        <section className="relative z-10 min-h-screen w-full">
            <Element
                name="implementation"
                className="w-full py-20 px-8 bg-[var(--background)] text-[var(--text)] font-quicksand selection:bg-[var(--accent)]"
            >
                <div className="max-w-6xl mx-auto w-full">
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
                                className={`text-xl px-4 py-2 rounded-xl font-medium transition-all duration-200 transform ${activeTopic === t.id
                                    ? 'bg-[var(--accent)] text-white shadow-md translate-y-[1px]'
                                    : 'bg-[var(--secondary)] text-[var(--text)] hover:shadow-sm hover:translate-y-[1px]'
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
                                className={`text-lg px-3 py-1 rounded-md border transition ${activeSection === section.id
                                    ? 'bg-[var(--accent)] text-white border-[var(--accent)]'
                                    : 'bg-[var(--secondary)] text-[var(--text)] hover:border-[var(--accent)]'
                                    }`}
                            >
                                {section.title}
                            </button>
                        ))}
                    </div>

                    {currentSlide && activeTopic === 'iteration' && activeSection === 'iteration' && currentSlide.texts ? (
                        <motion.div
                            key={`${activeSection}-iteration`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
                        >
                            {currentSlide.texts.map((item, idx) => (
                                <div key={idx} className="bg-[var(--secondary)] p-6 rounded-xl shadow-md">
                                    <h3 className="text-2xl font-semibold mb-3">{item.subtitle}</h3>
                                    <p className="text-lg leading-relaxed">{item.text}</p>
                                </div>
                            ))}
                        </motion.div>
                    ) : currentSlide && (
                        <motion.div
                            key={`${activeSection}-${slideIndex}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="bg-[var(--secondary)] p-6 rounded-xl shadow-sm space-y-6 text-center"
                        >
                            <h3 className="text-2xl font-semibold">{currentSlide.title}</h3>
                            {currentSlide.text && <p className="text-lg leading-relaxed">{currentSlide.text}</p>}

                            {currentSlide.images?.length > 0 && (
                                <div className="flex flex-wrap justify-center gap-4">
                                    {currentSlide.images.map((imgSrc, idx) => (
                                        <div
                                            key={idx}
                                            className="p-2 cursor-zoom-in transition-transform duration-200 hover:scale-[1.03]"
                                            onClick={() => {
                                                setLightboxImg(imgSrc);
                                                setLightboxOpen(true);
                                            }}
                                        >
                                            <LazyImage
                                                src={imgSrc}
                                                alt={`${currentSlide.title} Bild ${idx + 1}`}
                                                className={
                                                    ['pfad-mediathek', 'pfad-interaktiv'].includes(activeSection)
                                                        ? 'max-w-[1920px] max-h-[1080px]'
                                                        : ['pfad-livetv'].includes(activeSection)
                                                            ? 'max-w-[1440px] max-h-[920px]'
                                                            : ['startseite'].includes(activeSection) ||
                                                                (activeSection === 'uebersicht' &&
                                                                    ['Live TV', 'Sendung verpasst?', 'Serie', 'Dokumentation'].includes(currentSlide.title))
                                                                ? 'max-w-[600px] max-h-[200px]'
                                                                : activeSection === 'navi-struktur'
                                                                    ? 'max-w-[700px] max-h-[500px]'
                                                                    : 'max-w-[300px] max-h-[220px]'
                                                }
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}

                        </motion.div>
                    )}

                    {(activeSection !== 'iteration' || activeTopic !== 'iteration') && (
                        <div className="flex justify-center gap-10 mt-6">
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
                    )}
                </div>
            </Element>
            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--secondary)] bg-opacity-80 backdrop-blur-sm"
                    onClick={() => setLightboxOpen(false)}
                >
                    <img
                        src={lightboxImg}
                        alt="Vollbild"
                        className="max-w-[80vw] max-h-[80vh] rounded-xl shadow-xl"
                    />
                    <button
                        className="absolute top-6 right-6 text-white text-3xl font-bold"
                        onClick={() => setLightboxOpen(false)}
                    >
                        ×
                    </button>
                </div>
            )}
        </section>
    );

};

export default Implementation;
