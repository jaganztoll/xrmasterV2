import React, { useState } from 'react';
import { motion } from 'framer-motion';

const professionalSections = [
    {
        id: 'mr-design-challenges',
        title: 'MR-Design Herausforderungen',
        content: (
            <>
                <p>Usability: Intuitive Bedienbarkeit trotz komplexer 3D-Interaktion.</p>
                <p>Interaktion: Integration natürlicher Gesten und Blicksteuerung.</p>
                <p>Performance: Hohe Anforderungen an Latenz und Rechenleistung.</p>
            </>
        ),
    },
    {
        id: 'literature-insights',
        title: 'Erkenntnisse aus Literatur',
        content: (
            <>
                <p>Standardisierte Designprinzipien für MR sind noch im Aufbau.</p>
                <p>Nutzerzentrierte Ansätze sind essenziell für Akzeptanz und Effektivität.</p>
                <p>Gestaltprinzipien helfen bei der Wahrnehmung und Strukturierung im Raum.</p>
            </>
        ),
    },
    {
        id: 'design-principles',
        title: 'Designprinzipien & Standards',
        content: (
            <>
                <p>Visuelle Hierarchie, Kontrast und Balance zur Strukturierung.</p>
                <p>DIN EN ISO 9241-110: Interaktionsprinzipien wie Selbstbeschreibungsfähigkeit und Fehlertoleranz.</p>
                <p>Prinzipien von John Maeda: Reduce und Organize als Leitlinien.</p>
            </>
        ),
    },
];

const ProfessionalContent = () => {
    const [active, setActive] = useState(professionalSections[0].id);

    return (
        <div className="flex gap-6">
            <motion.nav
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col w-48 border-r border-gray-500"
            >
                {professionalSections.map(({ id, title }) => (
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
                {professionalSections.find((s) => s.id === active)?.content}
            </motion.div>
        </div>
    );
};

export default ProfessionalContent;
