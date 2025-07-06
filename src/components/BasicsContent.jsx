import React, { useState } from 'react';
import { motion } from 'framer-motion';

const basicsSections = [
    {
        id: 'vr-ar-mr',
        title: 'VR / AR / MR',
        content: (
            <>
                <p>Virtual Reality (VR) schließt die reale Umgebung komplett aus.</p>
                <p>Augmented Reality (AR) ergänzt die reale Welt mit digitalen Inhalten.</p>
                <p>Mixed Reality (MR) verschmilzt reale und virtuelle Welten interaktiv.</p>
            </>
        ),
    },
    {
        id: 'ux-ui-principles',
        title: 'UX/UI',
        content: (
            <>
                <p>Lesbarkeit, Sichtfeld und Interaktion sind zentral.</p>
                <p>Spatial UI nutzt räumliche Positionierung und Gestensteuerung.</p>
            </>
        ),
    },
    {
        id: 'spatial-ui',
        title: 'Spatial UI',
        content: (
            <>
                <p>Positionierung von UI-Elementen im 3D-Raum ist entscheidend.</p>
                <p>Ergonomie und Sichtfeld (30°-60° horizontal, 0°-35° vertikal) sind zu beachten.</p>
                <p>Dynamische vs. fixierte Skalierung beeinflussen Wahrnehmung und Lesbarkeit.</p>
            </>
        ),
    },
];

const BasicsContent = () => {
    const [active, setActive] = useState(basicsSections[0].id);

    return (
        <div className="flex gap-6">
            <motion.nav
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col w-48 border-r border-gray-500"
            >
                {basicsSections.map(({ id, title }) => (
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
                {basicsSections.find((s) => s.id === active)?.content}
            </motion.div>
        </div>
    );
};

export default BasicsContent;
