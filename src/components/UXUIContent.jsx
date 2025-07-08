import React, { useState } from 'react';

const UXUIContent = () => {
    const [activeTab, setActiveTab] = useState('ux');

    return (
        <div>
            {/* Tab Navigation */}
            <nav className="flex gap-4 mb-6 border-b border-gray-300">
                <button
                    type="button"
                    className={`pb-2 font-semibold ${activeTab === 'ux'
                        ? 'border-b-2 border-[var(--accent)] text-[var(--accent)]'
                        : 'text-gray-600 hover:text-[var(--accent)]'
                        }`}
                    onClick={() => setActiveTab('ux')}
                >
                    User Experience (UX)
                </button>
                <button
                    type="button"
                    className={`pb-2 font-semibold ${activeTab === 'ui'
                        ? 'border-b-2 border-[var(--accent)] text-[var(--accent)]'
                        : 'text-gray-600 hover:text-[var(--accent)]'
                        }`}
                    onClick={() => setActiveTab('ui')}
                >
                    User Interface (UI)
                </button>
            </nav>

            {/* UX Inhalt */}
            {activeTab === 'ux' && (
                <section>
                    <h2 className="text-xl font-bold mb-4">User Experience (UX)</h2>
                    <p className="mb-4">
                        UX umfasst die gesamte Nutzererfahrung mit einem Produkt – funktional und emotional.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Usability:</strong> einfache Bedienung und schnelle Erlernbarkeit</li>
                        <li><strong>Usefulness:</strong> unterstützt das Erreichen der Ziele</li>
                        <li><strong>Emotional Impact:</strong> positive Gefühle und Zufriedenheit</li>
                        <li><strong>Meaningfulness:</strong> persönliche Relevanz und Identifikation</li>
                    </ul>
                </section>

            )}


            {/* UI Inhalt */}
            {activeTab === 'ui' && (
                <section>
                    <h2 className="text-xl font-bold mb-4">User Interface (UI)</h2>
                    <p className="mb-4">
                        UI ist die Schnittstelle zwischen Nutzer und System. Sie definiert, wie Inhalte dargestellt und wie Interaktionen ermöglicht werden – visuell, sprachlich oder körperlich.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Command Line Interface:</strong> Steuerung per Texteingabe</li>
                        <li><strong>Text User Interface:</strong> Menübasierte, textuelle Navigation</li>
                        <li><strong>Voice User Interface:</strong> Sprachsteuerung</li>
                        <li><strong>Graphical User Interface:</strong> Maus, Tastatur mit Fenstern und Icons</li>
                        <li><strong>Natural User Interface:</strong> Berührung, Sprache, Gesten</li>
                        <li><strong>Spatial User Interface:</strong> Interaktion im Raum (Position, Bewegung, Sensorik)</li>
                    </ul>
                </section>

            )}

        </div>
    );
};

export default UXUIContent;
