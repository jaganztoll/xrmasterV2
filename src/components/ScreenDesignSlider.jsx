import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Hintergrund1 from '../assets/concept/screendesign/hintergrund1.png';
import Hintergrund2 from '../assets/concept/screendesign/hintergrund2.png';
import Hintergrund3 from '../assets/concept/screendesign/hintergrund3.png';
import Hintergrund4 from '../assets/concept/screendesign/hintergrund4.png';
import Hintergrund5 from '../assets/concept/screendesign/hintergrund5.png';
import Hintergrund6 from '../assets/concept/screendesign/hintergrund6.png';
import Typografie1 from '../assets/concept/screendesign/typografie1.png';
import Typografie2 from '../assets/concept/screendesign/typografie2.png';
import Typografie3 from '../assets/concept/screendesign/typografie3.png';
import Typografie4 from '../assets/concept/screendesign/typografie4.png';
import Icons1 from '../assets/concept/screendesign/rubriken.png';
import Icons2 from '../assets/concept/screendesign/cube-grey.png';
import Icons3 from '../assets/concept/screendesign/tv.png';
import Icons4 from '../assets/concept/screendesign/play.png';
import Icons5 from '../assets/concept/screendesign/pause.png';
import Icons6 from '../assets/concept/screendesign/user.png';
import MerkenTeilen1 from '../assets/concept/screendesign/share.png';
import MerkenTeilen2 from '../assets/concept/screendesign/add.png';
import HoverIcon1 from '../assets/concept/screendesign/cube-lightgrey.png';
import HoverIcon2 from '../assets/concept/screendesign/cube-grey.png';
import HoverIcon3 from '../assets/concept/screendesign/cube-orange.png';

const slides = [
    {
        category: 'Hintergrund',
        description:
            'Light Mode: ZDF-Hellgrau für ruhige Atmosphäre. Dark Mode: Dunkelblau für modernen Look und Augenschonung. Sechs ZDF-Farben schaffen visuelle Hierarchie.',
        images: [
            { src: Hintergrund1, title: '' },
            { src: Hintergrund2, title: '' },
            { src: Hintergrund3, title: '' },
            { src: Hintergrund4, title: '' },
            { src: Hintergrund5, title: '' },
            { src: Hintergrund6, title: '' },
        ],
    },
    {
        category: 'Typografie',
        description:
            'Logo und Hausschrift werden übernommen. ZDF Type für Überschriften, Segoe UI für Fließtext. Weiß und Dunkelblau für optimalen Kontrast.',
        images: [
            { src: Typografie1, title: '' },
            { src: Typografie2, title: '' },
            { src: Typografie3, title: '' },
            { src: Typografie4, title: '' },
        ],
    },
    {
        category: 'Icons',
        description:
            '3D-Effekt, einheitliche Farbgebung und Stil. Kombination aus bewährten und neuen Icons fördert Orientierung und Aufgabenangemessenheit.',
        images: [
            { src: Icons1, title: '' },
            { src: Icons2, title: '' },
            { src: Icons3, title: '' },
            { src: Icons4, title: '' },
            { src: Icons5, title: '' },
            { src: Icons6, title: '' },
        ],
    },
    {
        category: 'Akzente',
        description:
            'ZDF-Orange gezielt für wichtige Inhalte und interaktive Elemente eingesetzt, fördert visuelle Einheitlichkeit und Erwartungskonformität.',
        images: [
            { src: MerkenTeilen1, title: '' },
            { src: MerkenTeilen2, title: '' },
        ],
    },
    {
        category: 'Hover-Effekt',
        description:
            'Hover bewirkt Farbwechsel auf ZDF-Orange und Icon-Vergrößerung in seitlichen Panels zur besseren Zielgenauigkeit. Klickbare Texte erhalten Hintergrund für erhöhte Aufgabenangemessenheit.',
        images: [
            { src: HoverIcon1, title: '' },
            { src: HoverIcon2, title: '' },
            { src: HoverIcon3, title: '' },
        ],
    },
];

const ScreenDesignSlider = () => {
    const swiperRef = useRef(null);

    return (
        <div className="max-w-6xl mx-auto px-4">
            <Swiper
                modules={[Navigation]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={40}
                slidesPerView={1}
                navigation={false}
                className="w-full"
            >
                {slides.map(({ category, description, images }, index) => (
                    <SwiperSlide key={index}>
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-center">{category}</h2>
                            <p className="mb-6 text-center text-lg max-w-xl mx-auto">{description}</p>
                            {/* Icons Darstellung – zentriert & flexibel */}
                            <div className="flex flex-wrap justify-center gap-4">
                                {images.map(({ src, title }, idx) => (
                                    <div
                                        key={idx}
                                        className="flex flex-col items-center w-[100px]"
                                    >
                                        <img
                                            src={src}
                                            alt={title}
                                            className="w-[80px] h-[80px] object-contain"
                                        />
                                        {title && <p className="mt-2 text-center">{title}</p>}
                                    </div>
                                ))}
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="flex justify-center gap-10 mt-6">
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="px-4 py-2 bg-[var(--secondary)] rounded-lg shadow hover:bg-[var(--accent)] cursor-pointer"
                    aria-label="Vorheriges Slide"
                >
                    &larr; Zurück
                </button>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="px-4 py-2 bg-[var(--secondary)] text-[var(--text)] rounded-lg shadow hover:bg-[var(--accent)] cursor-pointer"
                    aria-label="Nächstes Slide"
                >
                    Weiter &rarr;
                </button>
            </div>
        </div>
    );
};

export default ScreenDesignSlider;
