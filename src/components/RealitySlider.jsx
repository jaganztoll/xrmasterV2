import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';

import VR from '../assets/project-info/vr.png';
import AR from '../assets/project-info/ar.png';
import MR from '../assets/project-info/mr.png';

const slides = [
    {
        title: 'Virtual Reality (VR)',
        image: VR,
        description:
            'Vollständig virtuelle Umgebung, die die reale Welt komplett ersetzt. Nutzer tauchen mithilfe von Headsets in digitale Welten ein.',
    },
    {
        title: 'Augmented Reality (AR)',
        image: AR,
        description:
            'Erweiterung der realen Welt durch virtuelle Inhalte. Die reale Umgebung bleibt dominant, digitale Elemente ergänzen sie kontextbezogen.',
    },
    {
        title: 'Mixed Reality (MR)',
        image: MR,
        description:
            'Verschmelzung von realer und virtueller Welt. Interaktive, ortsbezogene Einbindung virtueller Objekte in die reale Umgebung.',
    },
];

const RealitySlider = () => {
    const swiperRef = useRef();
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        if (swiperRef.current && activeIndex < slides.length - 1) {
            swiperRef.current.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current && activeIndex > 0) {
            swiperRef.current.slidePrev();
        }
    };

    return (
        <div className="w-full max-w-xl ml-6">
            <Swiper
                spaceBetween={40}
                slidesPerView={1}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {slides.map(({ title, image, description }) => (
                    <SwiperSlide key={title}>
                        <div className="flex flex-col items-start text-left">
                            <img src={image} alt={title} className="w-full h-auto max-w-xl rounded mb-4 bg-[var(--wireframes)]" />
                            <h2 className="font-semibold mb-4">{title}</h2>
                            <p>{description}</p>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>

            <div className="flex justify-center gap-10 mt-6">
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

export default RealitySlider;
