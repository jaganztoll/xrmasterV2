import React, { useState } from 'react';

import AuswaehlenMeta from '../assets/project-info/auswaehlen-meta.gif';
import ScrollenMeta from '../assets/project-info/scrollen-meta.gif';
import TouchMeta from '../assets/project-info/touch-meta.gif';
import DirekteEingabe from '../assets/project-info/direkte-eingabe.png';
import IndirekteEingabe from '../assets/project-info/indirekte-eingabe.png';
import DegreesOfFreedom from '../assets/project-info/degrees-of-freedom.jpg';

const tabs = [
    { id: 'hand-tracking', label: 'Hand-Tracking' },
    { id: 'gestensteuerung', label: 'Gestensteuerung' },
    { id: 'voice-control', label: 'Voice-Control' },
    { id: 'head-tracking', label: 'Head-Tracking' },
    { id: 'eye-tracking', label: 'Eye-Tracking' },
    { id: 'direct-manipulation', label: 'Direct Manipulation' },
];

const LazyImage = ({ src, alt, className = '' }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="relative bg-[var(--wireframes)] rounded-xl overflow-hidden min-h-[200px]">
            {!loaded && <div className="absolute inset-0 bg-gray-300 animate-pulse z-0" />}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                className={`relative z-10 w-full h-auto transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
            />
        </div>
    );
};

const InteractionContent = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    const tabClass = (id) =>
        `pb-2 font-semibold whitespace-nowrap ${activeTab === id
            ? 'border-b-2 border-[var(--accent)] text-[var(--accent)]'
            : 'text-gray-600 hover:text-[var(--accent)]'
        }`;

    return (
        <div>
            <nav className="flex flex-wrap gap-4 mb-6 border-b border-gray-300">
                {tabs.map(({ id, label }) => (
                    <button
                        key={id}
                        type="button"
                        onClick={() => setActiveTab(id)}
                        className={tabClass(id)}
                    >
                        {label}
                    </button>
                ))}
            </nav>

            {activeTab === 'hand-tracking' && (
                <section>
                    <h2 className="text-xl font-bold mb-4">Hand-Tracking</h2>
                    <p className="mb-4">
                        Hand-Tracking erfolgt über <strong>Inside-Out-Tracking</strong> (Sensoren im Headset) oder <strong>Outside-In-Tracking</strong> (externe Sensoren). Kameras und Tiefensensoren wie LiDAR erfassen Handbewegungen in Echtzeit und ermöglichen eine natürliche Interaktion in VR-Umgebungen.
                    </p>
                </section>
            )}

            {activeTab === 'gestensteuerung' && (
                <section>
                    <h2 className="text-xl font-bold mb-4">Gestensteuerung</h2>
                    <p className="mb-4">
                        Die Meta Quest 3 unterstützt verschiedene Gesten, darunter zwei für Navigation:
                        <strong> Auswählen</strong> (Zusammenführen von Daumen und Zeigefinger) und
                        <strong> Scrollen</strong> (Ziehen mit zwei Fingern).
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <LazyImage src={AuswaehlenMeta} alt="Geste: Auswählen" />
                        <LazyImage src={ScrollenMeta} alt="Geste: Scrollen" />
                    </div>
                </section>
            )}

            {activeTab === 'voice-control' && (
                <section>
                    <h2 className="text-xl font-bold mb-4">Voice-Control</h2>
                    <p className="mb-4">
                        Sprachsteuerung wandelt Sprache mittels <strong>Speech-to-Text</strong> und <strong>Natural Language Processing</strong> in Steuerbefehle um. Die Erkennung erfolgt durch Verarbeitung von Sprachsignalen in <strong>Spektrogrammen</strong>, die von <strong>neuronalen Netzen</strong> klassifiziert werden.
                    </p>
                </section>
            )}

            {activeTab === 'head-tracking' && (
                <section>
                    <h2 className="text-xl font-bold mb-4">Head-Tracking</h2>
                    <p className="mb-4">
                        Head-Tracking erfasst Kopfbewegungen mittels Sensoren und passt die virtuelle Perspektive in Echtzeit an. Es bildet die Grundlage für <strong>3DoF</strong> und <strong>6DoF Systeme</strong>, wobei moderne HMDs wie Meta Quest 3 <strong>Inside-Out-Tracking</strong> nutzen, um Bewegungsfreiheit im Raum zu ermöglichen. Geräte wie HoloLens 2 ergänzen dies um Head-Gaze-basierte Auswahlmechanismen.
                    </p>
                    <div className="flex justify-center">
                        <LazyImage
                            src={DegreesOfFreedom}
                            alt="Degrees of Freedom: 3DoF & 6DoF"
                            className="w-[600px] max-w-full h-auto"
                        />
                    </div>
                </section>
            )}

            {activeTab === 'eye-tracking' && (
                <section>
                    <h2 className="text-xl font-bold mb-4">Eye-Tracking</h2>
                    <p className="mb-4">
                        Eye-Tracking erfasst die Blickrichtung über Kameras im Headset und ermöglicht die Analyse von Augenbewegungen wie <strong>Fixationen</strong> und <strong>Sakkaden</strong>. <strong>Gaze-Tracking</strong> verwendet diese Daten zur genauen Bestimmung des Blickpunkts. Bei der Apple Vision Pro ist Eye-Tracking mit Gesten oder Verweildauer als Eingabe kombiniert.
                    </p>
                    <LazyImage
                        src={IndirekteEingabe}
                        alt="Blickgeste Vision Pro"
                        className="w-[600px] max-w-full h-auto"
                    />
                </section>
            )}

            {activeTab === 'direct-manipulation' && (
                <section>
                    <h2 className="text-xl font-bold mb-4">Direct Manipulation</h2>
                    <p className="mb-4">
                        Direct Manipulation bezeichnet die direkte Steuerung von Objekten in der virtuellen Umgebung. Systeme wie die Meta Quest 3 ermöglichen <strong>Direct-Touch</strong> (z.B. Scrollen oder Klicken durch Fingergesten), ähnlich wie bei einem Touchpad.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <LazyImage src={TouchMeta} alt="Direct Touch (Meta)" />
                        <LazyImage
                            src={DirekteEingabe}
                            alt="Direkte Eingabe"
                            className="w-full h-45 object-cover"
                        />
                    </div>
                </section>
            )}
        </div>
    );
};

export default InteractionContent;
