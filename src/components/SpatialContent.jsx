import React, { useState } from 'react';

const SpatialContent = () => {
    const [activeTab, setActiveTab] = useState('grundlagen');

    return (
        <div>
            <nav className="flex gap-4 mb-6 border-b border-gray-300">
                <button
                    type="button"
                    className={`pb-2 font-semibold ${activeTab === 'grundlagen'
                        ? 'border-b-2 border-[var(--accent)] text-[var(--accent)]'
                        : 'text-gray-600 hover:text-[var(--accent)]'}`}
                    onClick={() => setActiveTab('grundlagen')}
                >
                    Grundlagen
                </button>
                <button
                    type="button"
                    className={`pb-2 font-semibold ${activeTab === 'platzierung'
                        ? 'border-b-2 border-[var(--accent)] text-[var(--accent)]'
                        : 'text-gray-600 hover:text-[var(--accent)]'}`}
                    onClick={() => setActiveTab('platzierung')}
                >
                    Platzierung
                </button>
                <button
                    type="button"
                    className={`pb-2 font-semibold ${activeTab === 'mapping-skalierung'
                        ? 'border-b-2 border-[var(--accent)] text-[var(--accent)]'
                        : 'text-gray-600 hover:text-[var(--accent)]'}`}
                    onClick={() => setActiveTab('mapping-skalierung')}
                >
                    Mapping & Skalierung
                </button>
            </nav>

            {activeTab === 'grundlagen' && (
                <section className="prose max-w-none">
                    <h2 className="text-xl font-bold mb-4">Spatial UI Design</h2>
                    <p>
                        Spatial UIs integrieren Benutzeroberflächen in dreidimensionalen Raum, um natürliche Interaktionen zu ermöglichen. Apple Vision Pro nutzt eine eigene visuelle Sprache mit abgerundeten Kanten, mehrschichtigen Icons und Materialeffekten.
                    </p>
                    <p>
                        Die Lesbarkeit wird durch angepasste Schriftgrößen und den Einsatz von Vibrancy-Modi sichergestellt.
                    </p>
                </section>
            )}

            {activeTab === 'platzierung' && (
                <section className="prose max-w-none">
                    <h2 className="text-xl font-bold mb-4">Platzierung</h2>
                    <p>
                        Inhalte sollten im Sichtfeld innerhalb von ca. 30° um das Zentrum angeordnet sein, um eine gute Sicht und Bedienbarkeit zu gewährleisten.
                    </p>
                    <p>
                        Horizontale Kopfbewegungen sind besser für Interaktion geeignet, vertikale sollten minimiert werden. Objekte sollten 1,25 bis 5 Meter entfernt platziert werden.
                    </p>
                </section>
            )}

            {activeTab === 'mapping-skalierung' && (
                <section className="prose max-w-none">
                    <h2 className="text-xl font-bold mb-4">Spatial Mapping & Skalierung</h2>
                    <p>
                        Spatial Mapping erzeugt 3D-Modelle der Umgebung zur nahtlosen Einbettung virtueller Objekte.
                    </p>
                    <p>
                        Skalierung kann dynamisch (automatische Anpassung an Entfernung) oder fixiert (natürliche Größenwirkung) sein.
                    </p>
                    <p>
                        Objekte können im Blickfeld des Nutzers verankert oder an festen Punkten platziert werden.
                    </p>
                </section>
            )}
        </div>
    );
};

export default SpatialContent;
