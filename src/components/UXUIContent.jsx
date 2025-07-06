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
                    <p>
                        UX beschreibt die ganzheitliche Erfahrung bei der Nutzung eines Produkts. Sie umfasst sowohl funktionale Aspekte als auch emotionale Erlebnisse während der Interaktion.
                    </p>
                    <p>
                        Zwei zentrale Dimensionen der UX sind die pragmatische und die hedonische Qualität. Die pragmatische Qualität beschreibt, wie effektiv und effizient ein Produkt zur Zielerreichung beiträgt. Die hedonische Qualität betrifft die Erfüllung emotionaler und persönlicher Bedürfnisse.
                    </p>
                    <p>
                        Eine gute UX berücksichtigt sowohl funktionale Anforderungen als auch persönliche Motivation, Freude an der Nutzung und langfristige Zufriedenheit.
                    </p>
                    <ul className="list-disc pl-6">
                        <li><strong>Usability:</strong> Effizienz, leichte Bedienbarkeit, Erlernbarkeit</li>
                        <li><strong>Usefulness:</strong> Nützlichkeit zur Erreichung konkreter Ziele</li>
                        <li><strong>Emotional Impact:</strong> Zufriedenheit, positive Gefühle</li>
                        <li><strong>Meaningfulness:</strong> persönliche Relevanz, Identifikation</li>
                    </ul>
                </section>
            )}

            {/* UI Inhalt */}
            {activeTab === 'ui' && (
                <section className="prose max-w-none">
                    <h2 className="text-xl font-bold mb-4">User Interface</h2>
                    <p>
                        Das User Interface ist die Schnittstelle zwischen Mensch und System. Es bestimmt, wie Inhalte dargestellt werden und wie die Interaktion erfolgt – visuell, sprachlich oder körperlich.
                    </p>
                    <p>
                        Je nach Anwendungskontext und Technologie gibt es unterschiedliche Arten von Interfaces. In immersiven Umgebungen wie VR und AR spielt insbesondere das Spatial UI eine zentrale Rolle.
                    </p>
                    <ul className="list-disc pl-6">
                        <li><strong>Command Line Interface:</strong> Steuerung über Texteingaben</li>
                        <li><strong>Text User Interface:</strong> Menübasierte, textuelle Navigation</li>
                        <li><strong>Voice User Interface:</strong> Steuerung über gesprochene Sprache</li>
                        <li><strong>Graphical User Interface:</strong> Maus- und Tastaturinteraktion mit Fenstern und Icons</li>
                        <li><strong>Natural User Interface:</strong> Berührung, Sprache, Gesten</li>
                        <li><strong>Spatial User Interface:</strong> Interaktion im Raum über Position, Bewegung und Sensorik</li>
                    </ul>
                    <p>
                        Spatial UIs ermöglichen eine natürliche, körpernahe Bedienung durch den Einsatz von Technologien wie Hand-Tracking, Sprachsteuerung oder Eye-Tracking.
                    </p>
                </section>
            )}
        </div>
    );
};

export default UXUIContent;
