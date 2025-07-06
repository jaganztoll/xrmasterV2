import React, { useState } from 'react';
import { motion } from 'framer-motion';

const processSections = [
    {
        id: 'design-thinking',
        title: 'Design Thinking',
        content: (
            <>
                <p className="mb-4">
                    Der Design-Thinking-Prozess ist ein nutzerzentrierter und iterativer Ansatz mit fünf Phasen:
                </p>
                <img
                    src="src/assets/project-info/design-thinking1.png"
                    alt="Design Thinking Prozess"
                    className="w-full max-w-xl mb-6"
                />
            </>
        ),
    },
    {
        id: 'empathize',
        title: 'Empathize',
        content: (
            <>
                <p><strong>Nutzerbedürfnisse verstehen:</strong></p>
                <ul className="list-disc pl-6 pt-2">
                    <li>Analyse bestehender Funktionen und Einschränkungen, um Stärken, Schwächen und MR-Potenziale zu identifizieren.</li>
                    <li>Konkurrenzanalyse von MR-Lösungen im Medienbereich und Lessons Learned.</li>
                </ul>
            </>
        ),
    },
    {
        id: 'define',
        title: 'Define',
        content: (
            <>
                <p><strong>Bedürfnisse und Probleme definieren:</strong></p>
                <ul className="list-disc pl-6 pt-2">
                    <li>Klare Problemdefinition speziell für MR-Anforderungen.</li>
                    <li>Zielsetzung (z.B. neue Interaktionsmöglichkeiten, innovative Inhalte).</li>
                    <li>Funktionale und nicht-funktionale Anforderungen festlegen.</li>
                </ul>
            </>
        ),
    },
    {
        id: 'ideate',
        title: 'Ideate',
        content: (
            <>
                <p><strong>Ideen finden und kreative Lösungen entwickeln:</strong></p>
                <ul className="list-disc pl-6 pt-2">
                    <li>Brainstorming zur Erweiterung der Mediathek mit MR-spezifischen Inhalten.</li>
                    <li>Integration in bestehende Strukturen und sinnvolle Ergänzung vorhandener Funktionen.</li>
                </ul>
            </>
        ),
    },
    {
        id: 'prototype',
        title: 'Prototype',
        content: (
            <>
                <p><strong>Erste Lösungsansätze entwickeln:</strong></p>
                <ul className="list-disc pl-6 pt-2">
                    <li><strong>Prototyping:</strong> Erstellung von Low-Fidelity Skizzen bis hin zu High-Fidelity Prototypen.</li>
                    <li><strong>Reviewing:</strong> Feedback von Stakeholdern einholen und Notizen zur Verbesserung machen.</li>
                    <li><strong>Refining:</strong> Umsetzung von Verbesserungen und Anpassungen, erneutes Iterieren bei Bedarf.</li>
                </ul>
            </>
        ),
    },
    {
        id: 'test',
        title: 'Test',
        content: (
            <>
                <p><strong>Lösungen testen und verbessern:</strong></p>
                <ul className="list-disc pl-6 pt-2">
                    <li>Interne und externe Tests der Prototypen zur Gewinnung von Feedback.</li>
                    <li>Iterative Weiterentwicklung basierend auf Testergebnissen.</li>
                </ul>
            </>
        ),
    },
];



const ProcessContent = () => {
    const [active, setActive] = useState(processSections[0].id);

    return (
        <div className="flex gap-6">
            <motion.nav
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col w-48 border-r border-gray-500"
            >
                {processSections.map(({ id, title }) => (
                    <button
                        key={id}
                        onClick={() => setActive(id)}
                        className={`py-2 px-4 text-left cursor-pointer hover:text-[var(--accent)] transition-colors ${active === id
                            ? 'border-l-4 border-[var(--accent)] text-[var(--accent)] font-semibold'
                            : 'text-[var(--text)]'
                            }`}
                    >
                        {title}
                    </button>
                ))}
            </motion.nav>

            <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex-1"
            >
                {processSections.find((s) => s.id === active)?.content}
            </motion.div>
        </div>
    );
};

export default ProcessContent;
