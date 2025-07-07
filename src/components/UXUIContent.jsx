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
                <section className="prose max-w-none">
                    <h2 className="text-xl font-bold mb-4">User Experience</h2>

                    <div className="space-y-4">
                        <p>
                            UX bezeichnet die Gesamterfahrung bei der Nutzung eines Produkts – sie umfasst sowohl funktionale als auch emotionale Aspekte. Zentral sind die pragmatische Qualität (Effizienz, Zielerreichung) und die hedonische Qualität (persönliche Bedürfnisse, Freude, Zufriedenheit).
                        </p>
                        <ul className="list-disc pl-6">
                            <li><strong>Usability:</strong> Effizienz, leichte Bedienbarkeit, Erlernbarkeit</li>
                            <li><strong>Usefulness:</strong> Nützlichkeit zur Erreichung konkreter Ziele</li>
                            <li><strong>Emotional Impact:</strong> Zufriedenheit, positive Gefühle</li>
                            <li><strong>Meaningfulness:</strong> persönliche Relevanz, Identifikation</li>
                        </ul>
                    </div>
                </section>
            )}


            {/* UI Inhalt */}
            {activeTab === 'ui' && (
                <section className="prose max-w-none">
                    <h2 className="text-xl font-bold mb-4">User Interface</h2>

                    <div className="space-y-4">
                        <p>
                            Das User Interface ist die Schnittstelle zwischen Mensch und System. Es bestimmt, wie Inhalte dargestellt werden und wie die Interaktion erfolgt – visuell, sprachlich oder körperlich.
                        </p>

                        <ul className="list-disc pl-6">
                            <li><strong>Command Line Interface:</strong> Steuerung über Texteingaben</li>
                            <li><strong>Text User Interface:</strong> Menübasierte, textuelle Navigation</li>
                            <li><strong>Voice User Interface:</strong> Steuerung über gesprochene Sprache</li>
                            <li><strong>Graphical User Interface:</strong> Maus- und Tastaturinteraktion mit Fenstern und Icons</li>
                            <li><strong>Natural User Interface:</strong> Berührung, Sprache, Gesten</li>
                            <li><strong>Spatial User Interface:</strong> Interaktion im Raum über Position, Bewegung und Sensorik</li>
                        </ul>
                    </div>
                </section>
            )}

        </div>
    );
};

export default UXUIContent;
