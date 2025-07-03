import React, { useRef } from 'react';
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

    return (
        <div className="max-w-6xl mx-auto">
            <Swiper
                modules={[Navigation]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={40}
                slidesPerView={1}
                navigation={false}
                className="w-full"
            >
                {slides.map(({ leftImg, leftTitle, rightImg, rightTitle }, index) => (
                    <SwiperSlide key={index}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col items-center">
                                <img
                                    src={leftImg}
                                    alt={leftTitle}
                                    className="rounded-xl shadow-md max-w-full h-[300px] object-contain"
                                />
                                <p className="mt-4 text-center text-lg font-semibold">{leftTitle}</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img
                                    src={rightImg}
                                    alt={rightTitle}
                                    className="rounded-xl shadow-md max-w-full h-[300px] object-contain"
                                />
                                <p className="mt-4 text-center text-lg font-semibold">{rightTitle}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Eigene Navigation unter den Bildern */}
            <div className="flex justify-center gap-10 mt-6">
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="px-4 py-2 bg-[var(--secondary)] text-[var(--text)] rounded-lg shadow hover:bg-[var(--accent)] cursor-pointer"
                    aria-label="Vorheriges Bild"
                >
                    &larr; Zurück
                </button>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="px-4 py-2 bg-[var(--secondary)] text-[var(--text)] rounded-lg shadow hover:bg-[var(--accent)] cursor-pointer"
                    aria-label="Nächstes Bild"
                >
                    Weiter &rarr;
                </button>
            </div>
        </div>
    );
};

export default ConceptSlider;
