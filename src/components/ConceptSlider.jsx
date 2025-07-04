import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import ErsteEntwuerfe from '../assets/concept/rubriken.png';
import ErstePraezise from '../assets/concept/rubriken-pe.png';
import ZweiteEntwuerfe from '../assets/concept/filmauswahl.png';
import ZweitePraezise from '../assets/concept/filmauswahl-pe.png';
import DritteEntwuerfe from '../assets/concept/film.png';
import DrittePraezise from '../assets/concept/film-pe.png';
import VierteEntwuerfe from '../assets/concept/wiedergabe.png';
import ViertePraezise from '../assets/concept/wiedergabe-pe.png';
import FuenfteEntwuerfe from '../assets/concept/tv-programm.png';
import FuenftePraezise from '../assets/concept/tv-programm-pe.png';

const ConceptSlider = () => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState(null);

    const slides = [
        {
            leftImg: ErsteEntwuerfe,
            leftTitle: 'Rubrikenauswahl',
            rightImg: ErstePraezise,
            rightTitle: 'Rubrikenauswahl',
        },
        {
            leftImg: ZweiteEntwuerfe,
            leftTitle: 'Übersicht: Filmauswahl',
            rightImg: ZweitePraezise,
            rightTitle: 'Übersicht: Interaktive TV',
        },
        {
            leftImg: DritteEntwuerfe,
            leftTitle: 'Übersicht: Film',
            rightImg: DrittePraezise,
            rightTitle: 'Übersicht: interaktive Dokumentation',
        },
        {
            leftImg: VierteEntwuerfe,
            leftTitle: 'Übersicht: Wiedergabe',
            rightImg: ViertePraezise,
            rightTitle: 'Übersicht: Wiedergabe',
        },
        {
            leftImg: FuenfteEntwuerfe,
            leftTitle: 'Übersicht: TV-Programm',
            rightImg: FuenftePraezise,
            rightTitle: 'Übersicht: TV-Programm',
        },
    ];

    const handlePrev = () => swiperInstance?.slidePrev();
    const handleNext = () => swiperInstance?.slideNext();

    return (
        <div className="max-w-6xl mx-auto px-4">
            <Swiper
                modules={[Navigation]}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    setSwiperInstance(swiper);
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                spaceBetween={40}
                slidesPerView={1}
                navigation={false}
                className="w-full"
            >
                {slides.map(({ leftImg, leftTitle, rightImg, rightTitle }, index) => (
                    <SwiperSlide key={index}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col items-center bg-[var(--wireframes)] rounded-xl shadow-md p-4">
                                <img
                                    src={leftImg}
                                    alt={leftTitle}
                                    className="max-w-full h-[300px] object-contain"
                                />
                                <p className="mt-4 text-center text-lg font-semibold">{leftTitle}</p>
                            </div>
                            <div className="flex flex-col items-center bg-[var(--wireframes)] rounded-xl shadow-md p-4">
                                <img
                                    src={rightImg}
                                    alt={rightTitle}
                                    className="max-w-full h-[300px] object-contain"
                                />
                                <p className="mt-4 text-center text-lg font-semibold">{rightTitle}</p>
                            </div>
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

export default ConceptSlider;
