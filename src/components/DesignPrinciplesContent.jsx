import React, { useState } from 'react';

const DesignPrinciplesPresentation = () => {
    const [activeTab, setActiveTab] = useState('ux');

    const tabClass = (id) =>
        `pb-2 font-semibold ${activeTab === id
            ? 'border-b-2 border-[var(--accent)] text-[var(--accent)]'
            : 'text-gray-600 hover:text-[var(--accent)]'
        }`;

    return (
        <div className="max-w-4xl mx-auto p-4">
            {/* Tab Navigation */}
            <nav className="flex gap-6 mb-6 border-b border-gray-300">
                <button type="button" className={tabClass('ux')} onClick={() => setActiveTab('ux')}>
                    UX / UI Prinzipien
                </button>
                <button type="button" className={tabClass('simplicity')} onClick={() => setActiveTab('simplicity')}>
                    Simplicity
                </button>
                <button type="button" className={tabClass('iso')} onClick={() => setActiveTab('iso')}>
                    ISO Prinzipien
                </button>
            </nav>

            {/* Inhalt */}
            {activeTab === 'ux' && (
                <section className="prose max-w-none">
                    <h2 className="text-xl font-bold mb-4">UX & UI Prinzipien (visuell)</h2>
                    <ul className="list-disc pl-6">
                        <li><strong>Skalierung:</strong> Größen lenken den Fokus</li>
                        <li><strong>Visuelle Hierarchie:</strong> Typografie & Farbe steuern Blickführung</li>
                        <li><strong>Balance:</strong> Ausgewogene Anordnung</li>
                        <li><strong>Kontrast:</strong> Klarheit durch Unterschiede</li>
                        <li><strong>Gestaltprinzipien:</strong> Nähe, Ähnlichkeit, Figur-Grund etc.</li>
                    </ul>
                </section>
            )}

            {activeTab === 'simplicity' && (
                <section className="prose max-w-none">
                    <h2 className="text-xl font-bold mb-4">Simplicity: Reduce & Organize</h2>
                    <p className="font-semibold">Reduce:</p>
                    <ul className="list-disc pl-6">
                        <li><strong>Shrink:</strong> Komprimieren (z.B. Symbolleisten)</li>
                        <li><strong>Hide:</strong> Verstecken (z.B. Menüs)</li>
                        <li><strong>Embody:</strong> Wesentliches hervorheben (z.B. Icons)</li>
                    </ul>
                    <p className="font-semibold mt-4">Organize (SLIP):</p>
                    <ul className="list-disc pl-6">
                        <li><strong>Sort:</strong> Gruppieren</li>
                        <li><strong>Label:</strong> Beschriften</li>
                        <li><strong>Integrate:</strong> Zusammenfassen</li>
                        <li><strong>Prioritize:</strong> Wichtiges hervorheben</li>
                    </ul>
                </section>
            )}

            {activeTab === 'iso' && (
                <section className="prose max-w-none">
                    <h2 className="text-xl font-bold mb-4">Interaktionsprinzipien (ISO 9241-110)</h2>
                    <ul className="list-disc pl-6">
                        <li><strong>Aufgabenangemessenheit:</strong> Unterstützung der Nutzerziele</li>
                        <li><strong>Selbstbeschreibungsfähigkeit:</strong> Verständliche Bedienung</li>
                        <li><strong>Erwartungskonformität:</strong> Konsistente Gestaltung</li>
                        <li><strong>Steuerbarkeit:</strong> Volle Nutzerkontrolle</li>
                        <li><strong>Fehlertoleranz:</strong> Fehler vermeiden & beheben</li>
                        <li><strong>Lernförderlichkeit:</strong> Schneller Einstieg durch Unterstützung</li>
                        <li><strong>Individualisierbarkeit:</strong> An Vorlieben anpassbar</li>

                    </ul>

                </section>
            )}
        </div>
    );
};

export default DesignPrinciplesPresentation;
