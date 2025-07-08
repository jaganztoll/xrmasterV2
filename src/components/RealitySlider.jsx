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
            'Vollständig virtuelle Umgebung, die die reale Welt komplett ersetzt.',
    },
    {
        title: 'Augmented Reality (AR)',
        image: AR,
        description:
            'Reale Umgebung bleibt dominant, digitale Elemente erweitern sie kontextbezogen.',
    },
    {
        title: 'Mixed Reality (MR)',
        image: MR,
        description:
            'Immersive Form von AR mit nahtloser Verschmelzung von real und virtuell.',
    },
];

const RealitySlider = () => {
    const swiperRef = useRef();
    const [activeIndex, setActiveIndex] = useState(0);
    const [loaded, setLoaded] = useState(false);

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
                        <div className="flex flex-col items-start text-left w-full max-w-xl">
                            <div className="w-full min-h-[250px] bg-[var(--wireframes)] rounded mb-4 relative overflow-hidden">
                                {!loaded && (
                                    <div className="absolute inset-0 bg-gray-300 animate-pulse z-0" />
                                )}
                                <img
                                    src={image}
                                    alt={title}
                                    loading="lazy"
                                    onLoad={() => setLoaded(true)}
                                    className={`w-full h-auto relative z-10 transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                                />
                            </div>
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
