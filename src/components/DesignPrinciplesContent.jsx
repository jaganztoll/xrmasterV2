import React, { useState } from 'react';

const DesignPrinciplesContent = () => {
    const [activeTab, setActiveTab] = useState('gestaltungsprinzipien');

    return (
        <div>
            {/* Tab Navigation */}
            <nav className="flex gap-4 mb-6 border-b border-gray-300">
                <button
                    type="button"
                    className={`pb-2 font-semibold ${activeTab === 'gestaltungsprinzipien'
                        ? 'border-b-2 border-[var(--accent)] text-[var(--accent)]'
                        : 'text-gray-600 hover:text-[var(--accent)]'
                        }`}
                    onClick={() => setActiveTab('gestaltungsprinzipien')}
                >
                    Designprinzipien
                </button>
                <button
                    type="button"
                    className={`pb-2 font-semibold ${activeTab === 'simplicity'
                        ? 'border-b-2 border-[var(--accent)] text-[var(--accent)]'
                        : 'text-gray-600 hover:text-[var(--accent)]'
                        }`}
                    onClick={() => setActiveTab('simplicity')}
                >
                    Simplicity
                </button>
                <button
                    type="button"
                    className={`pb-2 font-semibold ${activeTab === 'iso'
                        ? 'border-b-2 border-[var(--accent)] text-[var(--accent)]'
                        : 'text-gray-600 hover:text-[var(--accent)]'
                        }`}
                    onClick={() => setActiveTab('iso')}
                >
                    Interaktionsprinzipien
                </button>
            </nav>

            {/* Tab Inhalte */}
            {activeTab === 'gestaltungsprinzipien' && (
                <section className="prose max-w-none">
                    <h2 className="text-xl font-bold mb-4">UX & UI Designprinzipien</h2>
                    <p>Designprinzipien unterstützen die Gestaltung von Benutzeroberflächen, die sowohl funktional als auch ästhetisch überzeugend sind. Fünf visuelle Prinzipien sind besonders relevant:</p>
                    <ul className="list-disc pl-6">
                        <li><strong>Skalierung:</strong> Unterschiedliche Größen lenken den Fokus und strukturieren die Inhalte.</li>
                        <li><strong>Visuelle Hierarchie:</strong> Schriftgrößen und Farben steuern die Blickführung.</li>
                        <li><strong>Balance:</strong> Gleichgewicht in der Anordnung von Elementen – symmetrisch, asymmetrisch oder radial.</li>
                        <li><strong>Kontrast:</strong> Unterschiede durch Farbe, Form oder Größe sorgen für Klarheit und Lesbarkeit.</li>
                        <li><strong>Gestaltprinzipien:</strong> Wahrnehmungsmuster wie Nähe, Ähnlichkeit, Geschlossenheit oder Figur-Grund-Trennung.</li>
                    </ul>
                </section>
            )}

            {activeTab === 'simplicity' && (
                <section className="prose max-w-none">
                    <h2 className="text-xl font-bold mb-4">Simplicity im UI Design</h2>
                    <p>Einfachheit ist ein zentrales Ziel bei der Gestaltung nutzerfreundlicher Interfaces. Zwei grundlegende Ansätze:</p>
                    <h3 className="mt-4 font-semibold">Reduce</h3>
                    <ul className="list-disc pl-6">
                        <li><strong>Shrink:</strong> Kompression von Inhalten (z.B. Symbolleisten, Miniaturen)</li>
                        <li><strong>Hide:</strong> Ausblenden wenig genutzter Funktionen (z.B. in Menüs)</li>
                        <li><strong>Embody:</strong> Reduktion auf das Wesentliche (z.B. Icons, Minimaldesign)</li>
                    </ul>
                    <h3 className="mt-4 font-semibold">Organize (SLIP)</h3>
                    <ul className="list-disc pl-6">
                        <li><strong>Sort:</strong> Gruppierung nach logischen Zusammenhängen</li>
                        <li><strong>Label:</strong> Benennung der Gruppen zur besseren Orientierung</li>
                        <li><strong>Integrate:</strong> Zusammenfassen ähnlicher Gruppen</li>
                        <li><strong>Prioritize:</strong> Hervorhebung der wichtigsten Elemente</li>
                    </ul>
                </section>
            )}

            {activeTab === 'iso' && (
                <section className="prose max-w-none">
                    <h2 className="text-xl font-bold mb-4">Interaktionsprinzipien</h2>
                    <p>Die folgenden Prinzipien unterstützen benutzerfreundliche Interaktion:</p>
                    <ul className="list-disc pl-6">
                        <li><strong>Aufgabenangemessenheit:</strong> Unterstützung der Benutzeraufgaben</li>
                        <li><strong>Selbstbeschreibungsfähigkeit:</strong> Intuitive und verständliche Bedienung</li>
                        <li><strong>Erwartungskonformität:</strong> Übereinstimmung mit Benutzererwartungen (Konsistenz)</li>
                        <li><strong>Erlernbarkeit:</strong> Leichter Einstieg und schnelle Lernkurve</li>
                        <li><strong>Steuerbarkeit:</strong> Nutzerkontrolle über das System</li>
                        <li><strong>Fehlertoleranz:</strong> Unterstützung bei der Vermeidung und Korrektur von Fehlern</li>
                        <li><strong>Benutzerbindung:</strong> Ansprechende Darstellung, die zur Nutzung motiviert</li>
                    </ul>
                </section>
            )}
        </div>
    );
};

export default DesignPrinciplesContent;
