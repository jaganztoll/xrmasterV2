import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import rauschnabelImg from '../assets/project-info/rauschnabel.png';
import milgramImg from '../assets/project-info/milgram.png';

const MixedRealityContent = () => {
    const [activeTab, setActiveTab] = useState('definitionen');
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            img: rauschnabelImg,
            alt: 'AR-VR Telepräsenz-Modell (Rauschnabel et al.)',
            caption: 'AR-VR Telepräsenz-Modell (Rauschnabel et al.)',
        },
        {
            img: milgramImg,
            alt: 'Reality-Virtuality-Kontinuum (Milgram et al.)',
            caption: 'Reality-Virtuality-Kontinuum (Milgram et al.)',
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
        <div>
            {/* Tab Navigation */}
            <nav className="flex gap-4 mb-6 border-b border-gray-300">
                <button
                    className={`pb-2 font-semibold ${activeTab === 'definitionen' ? 'border-b-2 border-[var(--accent)] text-[var(--accent)]' : 'text-gray-600 hover:text-[var(--accent)]'
                        }`}
                    onClick={() => setActiveTab('definitionen')}
                    type="button"
                >
                    Definitionen & Modelle
                </button>
                <button
                    className={`pb-2 font-semibold ${activeTab === 'visualisierung' ? 'border-b-2 border-[var(--accent)] text-[var(--accent)]' : 'text-gray-600 hover:text-[var(--accent)]'
                        }`}
                    onClick={() => setActiveTab('visualisierung')}
                    type="button"
                >
                    Visualisierungen
                </button>
                <button
                    className={`pb-2 font-semibold ${activeTab === 'vergleich' ? 'border-b-2 border-[var(--accent)] text-[var(--accent)]' : 'text-gray-600 hover:text-[var(--accent)]'
                        }`}
                    onClick={() => setActiveTab('vergleich')}
                    type="button"
                >
                    Vergleich
                </button>
                <button
                    className={`pb-2 font-semibold ${activeTab === 'fazit' ? 'border-b-2 border-[var(--accent)] text-[var(--accent)]' : 'text-gray-600 hover:text-[var(--accent)]'
                        }`}
                    onClick={() => setActiveTab('fazit')}
                    type="button"
                >
                    Fazit
                </button>
            </nav>

            {/* Content Sektionen */}
            {activeTab === 'definitionen' && (
                <section>
                    <h2 className="text-xl font-bold mb-4">Mixed Reality: Definitionen im Vergleich</h2>
                    <p className="mb-6">
                        Mixed Reality ist kein klar definierter Begriff. Die folgende Übersicht zeigt vier zentrale Definitionsansätze, ihre Merkmale und Abgrenzungen.
                    </p>
                    <p className="mb-2 font-semibold">Klassische Modelle und Erweiterungen</p>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>Milgram et al. (1994):</strong> Reality-Virtuality-Kontinuum mit AR und AV als Zwischenstufen.</li>
                        <li><strong>Farshid et al.:</strong> Erweiterung um zusätzliche Realitätsformen & Unterscheidung real / virtuell.</li>
                        <li><strong>Azuma:</strong> AR als Mittelfeld mit Fokus auf technische Merkmale (3D-Registrierung, Echtzeitinteraktion).</li>
                        <li><strong>Rauschnabel et al.:</strong> Zwei getrennte Kontinua für AR und VR; MR als fortgeschrittene Form von AR.</li>
                    </ul>
                </section>
            )}

            {activeTab === 'visualisierung' && (
                <section className="max-w-md mx-auto">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    >
                        {slides.map(({ img, alt, caption }, idx) => (
                            <SwiperSlide key={idx}>
                                <img src={img} alt={alt} className="w-full h-auto rounded" />
                                <p className="mt-2 text-center text-lg text-gray-600">{caption}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="flex justify-center gap-6 mt-4">
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
                    <p className="mb-2 font-semibold">2. Vergleich zentraler Merkmale</p>
                    <table className="min-w-full text-sm border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-2 border">Merkmal</th>
                                <th className="p-2 border">Milgram</th>
                                <th className="p-2 border">Farshid</th>
                                <th className="p-2 border">Azuma</th>
                                <th className="p-2 border">Rauschnabel</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-2 border">Konzeptbasis</td>
                                <td className="p-2 border">RV-Kontinuum</td>
                                <td className="p-2 border">Erweitertes Kontinuum</td>
                                <td className="p-2 border">AR = Mittelfeld</td>
                                <td className="p-2 border">Zwei Kontinua</td>
                            </tr>
                            <tr>
                                <td className="p-2 border">MR-Definition</td>
                                <td className="p-2 border">Mischform</td>
                                <td className="p-2 border">Verschmelzung</td>
                                <td className="p-2 border">–</td>
                                <td className="p-2 border">Form von AR</td>
                            </tr>
                            <tr>
                                <td className="p-2 border">Stärken</td>
                                <td className="p-2 border">Einfach</td>
                                <td className="p-2 border">Umfassend</td>
                                <td className="p-2 border">Technischer Fokus</td>
                                <td className="p-2 border">Klare Trennung</td>
                            </tr>
                            <tr>
                                <td className="p-2 border">Schwächen</td>
                                <td className="p-2 border">Undifferenziert</td>
                                <td className="p-2 border">Komplex</td>
                                <td className="p-2 border">MR nicht konkret</td>
                                <td className="p-2 border">MR ≠ AV?</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            )}

            {activeTab === 'fazit' && (
                <section>
                    <p className="mb-4">
                        Je nach Forschungsziel und technischer Umsetzung bietet sich ein anderer MR-Begriff an. Für diese Arbeit ist der Ansatz von <strong>Rauschnabel et al.</strong> aufgrund seiner Anwendungsnähe am überzeugendsten: Mixed Reality als maximale Ausprägung lokaler Präsenz innerhalb von AR.
                    </p>
                </section>
            )}
        </div>
    );
};

export default MixedRealityContent;
