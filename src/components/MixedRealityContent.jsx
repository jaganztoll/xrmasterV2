import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Milgram from '../assets/project-info/milgram.png';
import Farshid from '../assets/project-info/farshid.png';
import Rauschnabel from '../assets/project-info/rauschnabel.png';


const tabs = [
    { id: 'einleitung', label: 'Einleitung' },
    { id: 'definitionen', label: 'Definitionen' },
    { id: 'vergleich', label: 'Vergleich' },
    { id: 'fazit', label: 'Fazit' },
];

const MixedRealityPresentation = () => {
    const [activeTab, setActiveTab] = useState('einleitung');
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const tabClass = (id) =>
        `pb-2 font-semibold whitespace-nowrap ${activeTab === id
            ? 'border-b-2 border-[var(--accent)] text-[var(--accent)]'
            : 'text-gray-600 hover:text-[var(--accent)]'
        }`;

    const handleTabChange = (id) => {
        setActiveTab(id);
        setActiveIndex(0);
        if (swiperRef.current) {
            swiperRef.current.slideTo(0);
        }
    };

    const slides = [
        {
            img: Milgram,
            alt: 'Reality-Virtuality-Kontinuum (Milgram et al.)',
            caption: 'Reality-Virtuality-Kontinuum (Milgram et al.)',
        },
        {
            img: Farshid,
            alt: 'Erweitertes RV-Kontinuum (Farshid et al.)',
            caption: 'Erweitertes RV-Kontinuum (Farshid et al.)',
        },
        {
            img: Rauschnabel,
            alt: 'AR-VR Telepräsenz-Modell (Rauschnabel et al.)',
            caption: 'AR-VR Telepräsenz-Modell (Rauschnabel et al.)',
        },
    ];

    const handlePrev = () => {
        if (swiperRef.current && activeIndex > 0) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current && activeIndex < slides.length - 1) {
            swiperRef.current.slideNext();
        }
    };

    return (
        <div className="max-w-5xl mx-auto p-4">
            {/* Navigation */}
            <nav className="flex gap-6 mb-8 border-b border-gray-300">
                {tabs.map(({ id, label }) => (
                    <button
                        key={id}
                        type="button"
                        onClick={() => handleTabChange(id)}
                        className={tabClass(id)}
                    >
                        {label}
                    </button>
                ))}
            </nav>

            {/* Inhalte */}
            {activeTab === 'einleitung' && (
                <section>
                    <h2 className="text-2xl font-bold mb-4">Mixed Reality: Überblick</h2>
                    <p className="mb-6 text-lg">
                        Mixed Reality (MR) ist ein vielschichtiger Begriff ohne einheitliche Definition.
                        Dieser Abschnitt stellt vier zentrale Definitionsansätze vor, darunter den klassischen von Milgram et al. (1994).
                    </p>
                </section>
            )}

            {activeTab === 'definitionen' && (
                <section>
                    <h3 className="text-xl font-semibold mb-4">Wichtige MR-Definitionen</h3>
                    <ul className="list-disc pl-6 space-y-3 text-lg mb-4">
                        <li>
                            <strong>Milgram et al. (1994):</strong> Reality-Virtuality-Kontinuum mit AR (reale Welt dominiert) und AV (virtuelle Welt dominiert).
                        </li>
                        <li>
                            <strong>Farshid et al. (2020):</strong> Erweitertes Kontinuum mit 6 Realitätsformaten; MR als Verschmelzung realer und virtueller Elemente.
                        </li>
                        <li>
                            <strong>Azuma (1997):</strong> AR als technisches System mit Echtzeit-Interaktivität und 3D-Registrierung.
                        </li>
                        <li>
                            <strong>Rauschnabel et al. (2021):</strong> AR und VR als getrennte Kontinua; MR als fortgeschrittene Form von AR, definiert über lokale Präsenz.
                        </li>
                    </ul>

                    {/* Bild-Slider */}
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        className="max-w-[600px] mx-auto"
                    >
                        {slides.map(({ img, alt, caption }, idx) => (
                            <SwiperSlide key={idx}>
                                <img
                                    src={img}
                                    alt={alt}
                                    className="w-full rounded-xl object-contain shadow bg-[var(--wireframes)]"
                                />
                                <p className="mt-2 text-center text-sm text-gray-600">{caption}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-6 mt-6">
                        <button
                            onClick={handlePrev}
                            disabled={activeIndex === 0}
                            className="px-4 py-2 rounded bg-[var(--secondary)] text-[var(--text)] disabled:opacity-50 hover:bg-[var(--accent)] transition-colors"
                        >
                            Zurück
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={activeIndex === slides.length - 1}
                            className="px-4 py-2 rounded bg-[var(--secondary)] text-[var(--text)] disabled:opacity-50 hover:bg-[var(--accent)] transition-colors"
                        >
                            Weiter
                        </button>
                    </div>
                </section>
            )}

            {activeTab === 'vergleich' && (
                <section className="overflow-x-auto mb-6">
                    <h3 className="text-xl font-semibold mb-4">Gegenüberstellung der MR-Definitionen</h3>
                    <table className="min-w-full border border-gray-300 text-sm">
                        <thead className="bg-[var(--accent)]">
                            <tr>
                                <th className="p-2 border">Merkmal</th>
                                <th className="p-2 border">Milgram</th>
                                <th className="p-2 border">Farshid</th>
                                <th className="p-2 border">Azuma</th>
                                <th className="p-2 border">Rauschnabel</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-2 border font-semibold">Konzept</td>
                                <td className="p-2 border">Reality-Virtuality-Kontinuum</td>
                                <td className="p-2 border">Erweitertes Kontinuum (6 Realitätsformen)</td>
                                <td className="p-2 border">AR als technisches Mittelfeld</td>
                                <td className="p-2 border">Getrennte Kontinua für AR und VR</td>
                            </tr>
                            <tr>
                                <td className="p-2 border font-semibold">MR Definition</td>
                                <td className="p-2 border">Mischform von Realität und VR</td>
                                <td className="p-2 border">Verschmelzung realer & virtueller Elemente</td>
                                <td className="p-2 border">Nicht explizit definiert</td>
                                <td className="p-2 border">Fortgeschrittene Form von AR</td>
                            </tr>
                            <tr>
                                <td className="p-2 border font-semibold">Stärken</td>
                                <td className="p-2 border">Einfach und intuitiv</td>
                                <td className="p-2 border">Umfassend und differenziert</td>
                                <td className="p-2 border">Fokus auf technische Merkmale</td>
                                <td className="p-2 border">Klare Trennung von AR und VR</td>
                            </tr>
                            <tr>
                                <td className="p-2 border font-semibold">Schwächen</td>
                                <td className="p-2 border">Wenig differenziert</td>
                                <td className="p-2 border">Komplex und umfangreich</td>
                                <td className="p-2 border">MR nicht konkret definiert</td>
                                <td className="p-2 border">Eingeschränkte MR-Definition</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            )}

            {activeTab === 'fazit' && (
                <section className="max-w-3xl mx-auto px-4">
                    <h3 className="text-xl font-semibold mb-4">Fazit</h3>
                    <p className="text-lg">
                        Für diese Arbeit wird der Ansatz von <strong>Rauschnabel et al.</strong> bevorzugt. Er schafft aus Anwendersicht klare Abgrenzungen zwischen AR und VR und definiert MR als höchste Ausprägung lokaler Präsenz innerhalb von AR.
                    </p>
                </section>
            )}
        </div>
    );
};

export default MixedRealityPresentation;
