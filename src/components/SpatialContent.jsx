import React, { useState } from 'react';

import DynamischeSkalierung from '../assets/project-info/dynamische-skalierung.gif';
import FixierteSkalierung from '../assets/project-info/fixierte-skalierung.gif';
import OptimaleDistanz from '../assets/project-info/optimale-distanz.png';
import VerankerungRaum from '../assets/project-info/verankerung-raum.gif';
import VerankerungSichtfeld from '../assets/project-info/verankerung-sichtfeld.gif';
import FieldOfView1 from '../assets/project-info/field-of-view.png';
import FieldOfView2 from '../assets/project-info/field-of-view2.png';
import AppIconsLayer from '../assets/project-info/app-icons-layer.png';
import SchriftStaerken from '../assets/project-info/schrift-staerken.png';
import AbgerundeteKanten from '../assets/project-info/abgerundete-kanten.jpg';
import Farbakzente from '../assets/project-info/farbakzente.png';
import Vibrancy from '../assets/project-info/vibrancy.png';

// 🔧 LazyImage mit Fade-In und Skeleton
const LazyImage = ({ src, alt = '', className = '' }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="relative w-full max-w-md min-h-[200px] rounded-xl overflow-hidden">
            {!loaded && (
                <div className="absolute inset-0 animate-pulse z-0" />
            )}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                className={`relative z-10 w-full h-auto rounded-xl shadow transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
            />
        </div>
    );
};

const SpatialContent = () => {
    const [activeTab, setActiveTab] = useState('design');
    const [slideIndex, setSlideIndex] = useState(0);

    const handlePrev = () => setSlideIndex((prev) => Math.max(prev - 1, 0));
    const handleNext = (length) => setSlideIndex((prev) => Math.min(prev + 1, length - 1));
    const resetSlider = () => setSlideIndex(0);

    const tabClass = (key) =>
        `pb-2 font-semibold ${activeTab === key
            ? 'border-b-2 border-[var(--accent)] text-[var(--accent)]'
            : 'text-gray-600 hover:text-[var(--accent)]'}`;

    const designMedia = [AppIconsLayer, SchriftStaerken, AbgerundeteKanten, Vibrancy, Farbakzente];
    const platzierungMedia = [FieldOfView1, FieldOfView2, OptimaleDistanz];
    const skalierungMedia = [DynamischeSkalierung, FixierteSkalierung, VerankerungRaum, VerankerungSichtfeld];

    const currentMedia =
        activeTab === 'design' ? designMedia :
            activeTab === 'platzierung' ? platzierungMedia :
                skalierungMedia;

    return (
        <div>
            <nav className="flex gap-4 mb-6 border-b border-gray-300">
                {['design', 'platzierung', 'skalierung'].map((key) => (
                    <button
                        key={key}
                        type="button"
                        className={tabClass(key)}
                        onClick={() => {
                            setActiveTab(key);
                            resetSlider();
                        }}
                    >
                        {key === 'design' && 'Designprinzipien'}
                        {key === 'platzierung' && 'Platzierung'}
                        {key === 'skalierung' && 'Skalierung & Verankerung'}
                    </button>
                ))}
            </nav>

            {activeTab === 'design' && (
                <section className="prose max-w-none">
                    <h2 className="text-xl font-bold mb-4">Designprinzipien in VisionOS</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li>Icons mit Tiefenwirkung durch mehrere Ebenen (Layering)</li>
                        <li>Schriftstärken an räumliche Darstellung angepasst (z.B. Regular → Medium)</li>
                        <li>Runde Formen statt scharfer Kanten zur visuellen Beruhigung</li>
                        <li>Materialeffekte wie Vibrancy und Transparenz sorgen für klare Trennung und Integration</li>
                        <li>Farben auf Glasmaterialien abgestimmt: Weiß für Text, Bunt nur flächig</li>
                    </ul>
                </section>
            )}

            {activeTab === 'platzierung' && (
                <section className="prose max-w-none">
                    <h2 className="text-xl font-bold mb-4">Ergonomische Platzierung</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li>Hauptinhalte innerhalb von ±30° horizontalem Sichtfeld</li>
                        <li>Vertikale Blickbewegung auf max. 10° nach oben / 35° nach unten begrenzt</li>
                        <li>Idealer Abstand zu UI-Elementen: 1,25–5 Meter</li>
                    </ul>
                </section>
            )}

            {activeTab === 'skalierung' && (
                <section className="prose max-w-none">
                    <h2 className="text-xl font-bold mb-4">Skalierung & Verankerung</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li>Dynamische Skalierung: Text bleibt unabhängig vom Abstand lesbar</li>
                        <li>Fixierte Skalierung: erzeugt realistisches Raumgefühl durch Perspektive</li>
                        <li>Verankerung im Raum: UI folgt nicht der Kopfbewegung</li>
                        <li>Verankerung im Sichtfeld: UI folgt der Kopfbewegung</li>
                    </ul>
                </section>
            )}

            <div className="flex flex-col items-center mt-6">
                <LazyImage
                    src={currentMedia[slideIndex]}
                    alt={`Slide ${slideIndex + 1}`}
                />

                <div className="flex justify-center gap-10 mt-6">
                    <button
                        onClick={handlePrev}
                        disabled={slideIndex === 0}
                        className="px-6 py-2 rounded-lg bg-[var(--secondary)] text-[var(--text)] disabled:opacity-50 hover:bg-[var(--accent)] transition-colors"
                    >
                        Zurück
                    </button>
                    <button
                        onClick={() => handleNext(currentMedia.length)}
                        disabled={slideIndex === currentMedia.length - 1}
                        className="px-6 py-2 rounded-lg bg-[var(--secondary)] text-[var(--text)] disabled:opacity-50 hover:bg-[var(--accent)] transition-colors"
                    >
                        Weiter
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SpatialContent;
