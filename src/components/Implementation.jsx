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

import Navigationsstruktur from '../assets/implementation/navigationsstruktur.png';

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
                                text: 'Schrittweise Überarbeitung der Panels, Farbwerte, Hover-Interaktionen und Layouts; Fokus lag auf Nutzerführung und Lesbarkeit.',
                            },
                            {
                                subtitle: 'Version 4',
                                text: 'Finalisierung: dezente Panels, neue Farbgebung (Dark Mode Blau), Icons skaliert, Hover-Verhalten subtiler, ZDF-Orange als Feedback-Farbe.',
                            },
                            {
                                subtitle: 'Gestaltungsprinzipien',
                                text: 'Nähe, Prägnanz, Konsistenz und Ähnlichkeit flossen systematisch in jede Iteration ein.',
                            },
                        ],
                    },
                ],
            },
            {
                id: 'startseite',
                title: 'Startseite',
                slides: [
                    { title: 'Startseite', text: 'Frühere Versionen nutzten kontrastreiche Icons mit ZDF-Orange als visuelles Feedback. In Version 4 wurden die Icons im Dark Mode bewusst zurückgenommen, um die visuelle Hierarchie zu stärken. Zudem wurde die Hintergrundfarbe im Dark Mode angepasst, um näher an der bestehenden Mediathek zu bleiben und einen moderneren, hochwertigeren Eindruck zu vermitteln. Das ZDF Logo unterstützt zusätzlich die Markenwahrnehmung.', images: [Startseite1, Startseite2] },
                ],
            },
            {
                id: 'navi',
                title: 'Navigationspanels',
                slides: [
                    { title: 'Navigationspanels', text: 'Die Navigationspanels zählten zu den gestalterisch anspruchsvollen UI-Elementen und wurden im Verlauf der Iterationen mit am stärksten überarbeitet. Besonders die Differenzierung zwischen inaktivem und aktivem Zustand stelle eine zentrale Herausforderung dar und erforderte mehrere gestalterische Anpassungen, um ein ausgewogenes Verhältnis zwischen Zurückhaltung und klarer Interaktion zu erreichen.' },
                    { title: 'Version 1', text: 'In der ersten Version waren die Navigationspanels ständig sichtbar und sollten durch erhöhte Transparenz im inaktiven Zustand weniger dominant wirken. Dies führte jedoch zu Problemen der Auffindbarkeit. Im Hover-Zustand vergrößerten sich die Icons leicht und wechselten die Farbe zu ZDF-Orange.', images: [Navigationspanel13, Navigationspanel14, Navigationspanel15, Navigationspanel16] },
                    { title: 'Version 2', text: 'In der zweiten Version wurde auf Transparenz verzichtet, da die schemenhafte Darstellung im peripheren Sichtfeld eher ablenkend wirkte. Größe und Farbe der Icons blieben gleich, neu war jedoch die seitliche Erweiterung im Hover-Zustand, wodurch erstmals Beschriftugngen eingeblendet wurden.', images: [Navigationspanel2, Navigationspanel3, Navigationspanel8] },
                    { title: 'Version 3', text: 'In der dritten Version wurde der Standardzustand und der Öffnungsmechanismus angepasst: Die Panels öffneten sich nun symmetrisch von der Mitte aus, was die Hand-Tracking-Navigation präziser und fehlerärmer machte. Gleichzeitig kam es zu einer leichten Überlagerung mit dem Hauptscreen.', images: [Navigationspanel6, Navigationspanel4] },
                    { title: 'Version 4', text: 'In der vierten Version wurden die Panels breiter, aber in der Höhe reduziert. Die Icons wurden insgesamt verkleinert, wordurch der Abstand zum Seitenrand wuchs. Das unterstützt das Gesetz der Nähe durch stärkere visuelle Trennung. Neu hinzu kame ein Glühlampen-Icon zur Steuerung der Hintergrundbeleuchtung. Die Beschriftungen wurden nun im Hover-Zustand unter dem Icon eingeblendet.', images: [Navigationspanel9, Navigationspanel10, Navigationspanel11, Navigationspanel5, Navigationspanel17, Navigationspanel18] },
                ],
            },
            {
                id: 'rubriken',
                title: 'Rubrikauswahl',
                slides: [
                    { title: 'Rubrikenauswahl', text: 'In Version 4 wurden die Rubriken Kacheln durch Bilder ersetzt, was die visuelle Orientierung verbessert. Die Gruppierung folgt dem Gesetz der Nähe, der Hintergrund greift Bühne und Überschrift auf und schafft Konsistenz. Statt einer Farbfüllung im Hover-Zustand sorgt nun eine dezente Umrandung mit leichter innerer Vergrößerung für elegantes, prägnantes Feedback.', images: [RubrikenDarkV1, RubrikenDarkV4, RubrikenLightV1, RubrikenLightV4] },
                ],
            },
            {
                id: 'uebersicht',
                title: 'Übersichtsseiten',
                slides: [
                    { title: 'Hauptübersicht', text: 'Die Hauptübersicht wurde in Version 4 durch eine Bühne L erweitert, um aktuelle Highlights hervorzuheben. Diese bewusste Abweichung vom übrigen Seitenaufbau fördert die Orientierung und macht den Einstiegspunkt sofort erkennbar.', images: [Uebersicht5, Uebersicht6] },
                    { title: 'Serien & Interaktiv', text: 'Ein neues Plakat-Clusterband ergänzt die visuelle Struktur. Der Hover-Effekt wurde überarbeitet: Statt Kachelvergrößerung vergrößert sich nur noch der Inhalt leicht, begleitet von einer farbigen Umrandung.', images: [Uebersicht1, Uebersicht2, Uebersicht3, Uebersicht4] },
                    { title: 'Live TV', text: 'Die Darstellung von Live-Inhalten wurde vereinheitlicht: Videos starten nun direkt im Vollbildmodus. Der separate Vollbild-Button entfällt, stattdessen wurde ein Zurück-Pfeil integriert. Diese Änderung sorgt für ein konsistenteres Nutzererlebnis im Vergleich zu vorherigen Versionen.', images: [Uebersicht7, Uebersicht8] },
                    { title: 'Sendung verpasst?', text: 'Die Rubrik "Sendung verpasst?" blieb strukturell erhalten, erhielt jedoch eine optimierte Zeitnavigation. Die aktuell ausgewählte Tageszeit bleibt nun bei Hover durch eine farbige Hinterlegung hervorgehoben.', images: [Uebersicht9, Uebersicht10] },
                    { title: 'Serie', text: 'Die Serienübersicht wurde um ein Dropdown-Menü zur Staffelauswahl ergänzt, um bei vielen Staffeln die Übersicht zu wahren. Hover-Effekte und reduzierte Informationstexte sorgen für mehr Klarheit und weniger kognitive Belastung.', images: [Uebersicht11, Uebersicht12] },
                    { title: 'Dokumentation', text: 'Interaktive Dokumentationen wurden durch ein Cube-Icon kenntlich gemacht. Die Bühne S spart Platz und lässt mehr Inhalte zu. Zusatzseiten wie „Fakten“ wurden beibehalten, während inhaltlich überladene Seiten wie „Interview“ zugunsten einer besseren Usability entfernt wurden.', images: [Uebersicht13, Uebersicht14] },
                ],
            },
            {
                id: 'medien',
                title: 'Mediensteuerung',
                slides: [
                    { title: 'Version 1–3', text: 'In den ersten drei Versionen blieb das Design der Mediensteuerung weitgehend unverändert. Die Icons wiesen einen konstanten Randabstand auf und vergrößerten sich im Hover-Zustand, ergänzt durch eine Beschriftung. Für interaktive Inhalte wurde das Informations-Icon durch ein Cube-Symbol ersetzt. Der Lautstärkeregler öffnete sich im Hover-Zustand nach oben, und der Vollbildmodus war über das Icon am unteren rechten Bildschirmrand zugänglich.', images: [Mediensteuerung1, Mediensteuerung2, Mediensteuerung4] },
                    { title: 'Version 4', text: 'In der vierten Version wurde die Mediensteuerung kompakter gestaltet: Das Panel ist schmaler und höher, die Icons kleiner mit größerem Abstand zum Rand. Statt Größenänderung wechseln die Icons beim Hovern die Farbe zu ZDF-Orange, die im aktiven Zustand bestehen bleibt. Der Lautstärkeregler ist dauerhaft oben links sichtbar und bleibt im Panel. Das Vollbild-Icon wurde integriert, das Cube-Icon für interaktive Inhalte an den unteren rechten Bildschirmrand verschoben.', images: [Mediensteuerung3, Mediensteuerung6, Mediensteuerung5] },
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
                    {
                        title: 'Strukturübersicht',
                        text: 'Schematische Darstellung der Navigationslogik anhand der vereinfachten Darstellung aus der Masterarbeit. Die Hauptpfade führen zu Mediathek, Interaktiven Inhalten und Live TV.',
                        images: [Navigationsstruktur],
                    },
                ],
            },
            {
                id: 'pfad-mediathek',
                title: 'Beispielpfad: Mediathek – The Rookie',
                slides: [
                    {
                        title: 'Navigation durch eine Serie',
                        text: 'Der Einstieg erfolgt über die Rubrikenseite. Nach Auswahl der Serie öffnet sich die Serienübersicht mit Staffelwahl. Die Folge wird im Vollbildmodus abgespielt, gesteuert über das Medienpanel.',
                        images: [],
                    },
                ],
            },
            {
                id: 'pfad-interaktiv',
                title: 'Beispielpfad: Interaktives TV – Der Mond',
                slides: [
                    {
                        title: 'Interaktive Navigation mit Zusatzseiten',
                        text: 'Nach Start einer Folge kann über Cube-Icons auf 3D-Modelle oder Zusatzinhalte wie Faktenseiten verzweigt werden. Die nichtlineare Struktur erlaubt exploratives Navigieren.',
                        images: [],
                    },
                ],
            },
            {
                id: 'pfad-livetv',
                title: 'Beispielpfad: Live TV – ZDFneo',
                slides: [
                    {
                        title: 'Lineare Navigation mit direktem Videostart',
                        text: 'Live TV-Inhalte starten direkt im Vollbild. Die Navigation erfolgt über das Medienpanel. Ein Zurück-Button ermöglicht den Wechsel zurück in die Rubrikenübersicht.',
                        images: [],
                    },
                ],
            },
        ],
    }

];

const Implementation = () => {
    const [activeTopic, setActiveTopic] = useState('iteration');
    const [activeSection, setActiveSection] = useState('startseite');
    const [slideIndex, setSlideIndex] = useState(0);

    const currentTopic = topics.find(t => t.id === activeTopic);
    const currentSection = currentTopic?.sections.find(s => s.id === activeSection);
    const currentSlide = currentSection?.slides[slideIndex];

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
                                className={`text-xl px-4 py-2 rounded-xl font-medium transition-all duration-200 transform ${activeTopic === t.id ? 'bg-[var(--accent)] text-white shadow-md translate-y-[1px]' : 'bg-[var(--secondary)] text-[var(--text)] hover:shadow-sm hover:translate-y-[1px]'}`}
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
                                className={`text-lg px-3 py-1 rounded-md border transition ${activeSection === section.id ? 'bg-[var(--accent)] text-white border-[var(--accent)]' : 'bg-[var(--secondary)] text-[var(--text)] hover:border-[var(--accent)]'}`}
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
                            className={`bg-[var(--secondary)] p-6 rounded-xl shadow-sm space-y-6 text-center`}
                        >
                            <h3 className="text-2xl font-semibold">{currentSlide.title}</h3>
                            {currentSlide.text && <p className="text-lg leading-relaxed">{currentSlide.text}</p>}
                            {currentSlide.images?.length > 0 && (
                                <div className="flex flex-wrap justify-center gap-4">
                                    {currentSlide.images.map((imgSrc, idx) => (
                                        <div key={idx} className="p-2">
                                            <img
                                                src={imgSrc}
                                                alt={`${currentSlide.title} Bild ${idx + 1}`}
                                                loading="eager"
                                                className="block max-w-[300px] max-h-[220px] object-contain opacity-0 transition-opacity duration-500 will-change-opacity animate-fade-in"
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
        </section>
    );
};

export default Implementation;
