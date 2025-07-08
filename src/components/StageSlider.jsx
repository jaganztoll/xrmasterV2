import React, { useState } from 'react';
import StageS from '../assets/concept/buehne-s.png';
import StageM from '../assets/concept/buehne-m.png';
import StageL from '../assets/concept/buehne-l.png';

const slides = [
    {
        src: StageS,
        alt: 'Bühne S – Übersicht',
        caption: 'Bühne S: Für Übersichtsseiten',
    },
    {
        src: StageM,
        alt: 'Bühne M – Detailansicht',
        caption: 'Bühne M: Für Detailseiten (Serien oder Formate).',
    },
    {
        src: StageL,
        alt: 'Bühne L – Highlightdarstellung',
        caption: 'Bühne L: In Kombination mit S zur Hervorhebung von Highlights.',
    },
];

const StageSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        if (activeIndex > 0) setActiveIndex(activeIndex - 1);
    };

    const handleNext = () => {
        if (activeIndex < slides.length - 1) setActiveIndex(activeIndex + 1);
    };

    const current = slides[activeIndex];

    return (
        <div className="mt-12 flex flex-col items-center">
            <img
                src={current.src}
                alt={current.alt}
                className="max-w-full max-h-[400px] rounded-xl shadow-md bg-[var(--wireframes)]"
            />
            <p className="text-sm text-center mt-4 italic">{current.caption}</p>
            <div className="mt-6 flex gap-4">
                <button
                    onClick={handlePrev}
                    disabled={activeIndex === 0}
                    className="px-6 py-2 rounded-lg bg-[var(--secondary)] text-[var(--text)] disabled:opacity-50 hover:bg-[var(--accent)] transition-colors"
                >
                    Zurück
                </button>
                <button
                    onClick={handleNext}
                    disabled={activeIndex === slides.length - 1}
                    className="px-6 py-2 rounded-lg bg-[var(--secondary)] text-[var(--text)] disabled:opacity-50 hover:bg-[var(--accent)] transition-colors"
                >
                    Weiter
                </button>
            </div>
        </div>
    );
};

export default StageSlider;
