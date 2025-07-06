import React, { useState } from 'react';
import { motion } from 'framer-motion';

const basicsSections = [
    {
        id: 'vr-ar-mr',
        title: 'VR / AR / MR',
        content: (
            <>
                <p></p>
                <p></p>
                <p></p>
            </>
        ),
    },
    {
        id: 'immersion',
        title: 'Immersion & Präsenz',
        content: (
            <>
                <p></p>
                <p></p>
                <p></p>
            </>
        ),
    },
    {
        id: 'interaction',
        title: 'Interaktionen',
        content: (
            <>
                <p></p>
                <p></p>
                <p></p>
            </>
        ),
    },
    {
        id: 'user-experience',
        title: 'User Experience',
        content: (
            <>
                <p></p>
                <p></p>
            </>
        ),
    },
    {
        id: 'user-interface',
        title: 'User Interface',
        content: (
            <>
                <p></p>
                <p></p>
            </>
        ),
    },
    {
        id: 'spatial-ui',
        title: 'Spatial UI',
        content: (
            <>
                <p></p>
                <p></p>
                <p></p>
            </>
        ),
    },
    {
        id: 'design-principles',
        title: 'Designprinzipien',
        content: (
            <>
                <p></p>
                <p></p>
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
