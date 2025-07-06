import React, { useState } from 'react';

const tabs = [
    { id: 'hand-tracking', label: 'Hand-Tracking' },
    { id: 'gestensteuerung', label: 'Gesten-steuerung' },
    { id: 'voice-control', label: 'Voice-Control' },
    { id: 'head-tracking', label: 'Head-Tracking' },
    { id: 'eye-tracking', label: 'Eye-Tracking' },
    { id: 'direct-manipulation', label: 'Direct Manipulation' },
];

const InteractionContent = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div>
            {/* Tab Navigation */}
            <nav className="flex gap-4 mb-6 border-b border-gray-300">
                {tabs.map(({ id, label }) => (
                    <button
                        key={id}
                        type="button"
                        onClick={() => setActiveTab(id)}
                        className={`pb-2 font-semibold ${activeTab === id
                            ? 'border-b-2 border-[var(--accent)] text-[var(--accent)]'
                            : 'text-gray-600 hover:text-[var(--accent)]'
                            }`}
                    >
                        {label}
                    </button>
                ))}
            </nav>

            {/* Content Sektionen */}
            {activeTab === 'hand-tracking' && (
                <section>
                    <h2 className="text-xl font-bold mb-4">Hand-Tracking</h2>
                    <p className="mb-4">
                        Hand-Tracking erfolgt über Inside-Out-Tracking (Sensoren im Headset) oder Outside-In-Tracking (externe Sensoren). Kameras und Tiefensensoren wie LiDAR erfassen Handbewegungen in Echtzeit und ermöglichen eine natürliche Interaktion in VR-Umgebungen.
                    </p>
                </section>
            )}

            {activeTab === 'gestensteuerung' && (
                <section>
                    <h2 className="text-xl font-bold mb-4">Gestensteuerung</h2>
                    <p className="mb-4">
                        Die Meta Quest 3 unterstützt drei Gesten, davon zwei für Navigation: Auswählen (Zeigen mit zwei Fingern und Zusammenführen von Daumen und Zeigefinger) sowie Scrollen (Bewegen von zwei zusammengeführten Fingern). Diese Gesten ermöglichen intuitive Steuerung ohne zusätzliche Hardware.
                    </p>
                </section>
            )}

            {activeTab === 'voice-control' && (
                <section>
                    <h2 className="text-xl font-bold mb-4">Voice-Control</h2>
                    <p className="mb-4">
                        Sprachsteuerung wandelt Sprache mittels Speech-to-Text und Natural Language Processing in Steuerbefehle um. Die Erkennung erfolgt durch Verarbeitung von Sprachsignalen in Spektrogrammen, die von neuronalen Netzen klassifiziert werden.
                    </p>
                </section>
            )}

            {activeTab === 'head-tracking' && (
                <section>
                    <h2 className="text-xl font-bold mb-4">Head-Tracking</h2>
                    <p className="mb-4">
                        Head-Tracking erfasst Kopfbewegungen mittels Sensoren und passt die virtuelle Perspektive in Echtzeit an. Es bildet die Grundlage für 3DoF und 6DoF Systeme, wobei moderne HMDs wie Meta Quest 3 Inside-Out-Tracking nutzen, um Bewegungsfreiheit im Raum zu ermöglichen. Geräte wie HoloLens 2 ergänzen dies um Head-Gaze-basierte Auswahlmechanismen.
                    </p>
                </section>
            )}

            {activeTab === 'eye-tracking' && (
                <section>
                    <h2 className="text-xl font-bold mb-4">Eye-Tracking</h2>
                    <p className="mb-4">
                        Eye-Tracking erfasst die Blickrichtung über Kameras im Headset und ermöglicht die Analyse von Augenbewegungen wie Fixationen und Sakkaden. Gaze-Tracking verwendet diese Daten zur genauen Bestimmung des Blickpunkts. Bei der Apple Vision Pro ist Eye-Tracking mit Gesten oder Verweildauer als Eingabe kombiniert.
                    </p>
                </section>
            )}

            {activeTab === 'direct-manipulation' && (
                <section>
                    <h2 className="text-xl font-bold mb-4">Direct Manipulation</h2>
                    <p className="mb-4">
                        Direct Manipulation bezeichnet die direkte und natürliche Steuerung von Objekten in der virtuellen Umgebung, z.B. durch Berührung oder Gesten. Meta Quest 3 unterstützt neben Gesten auch Direct-Touch, vergleichbar mit Touchpad-Bedienung.
                    </p>
                </section>
            )}
        </div>
    );
};

export default InteractionContent;
