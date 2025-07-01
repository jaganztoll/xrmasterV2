import React from 'react';
import { Element } from 'react-scroll';
import ReactCompareImage from 'react-compare-image';
import { motion } from 'framer-motion';

import background from '../assets/adobeXD/images/background/00.jpg';
import backgroundMoon from '../assets/adobeXD/images/background/01.png';
import startseiteLight from '../assets/adobeXD/images/light/01startseitelight.png';
import startseiteDark from '../assets/adobeXD/images/dark/01startseitedark.png';
import rubrikenLight from '../assets/adobeXD/images/light/02rubrikenlight.png';
import rubrikenDark from '../assets/adobeXD/images/dark/02rubrikendark.png';
import dokuLight from '../assets/adobeXD/images/light/03dokuslight.png';
import dokuDark from '../assets/adobeXD/images/dark/03dokusdark.png';
import dokuDetailsLight from '../assets/adobeXD/images/light/04mondlight.png';
import dokuDetailsDark from '../assets/adobeXD/images/dark/04monddark.png';
import playerAmbientLight from '../assets/adobeXD/images/light/05folgelight.png';
import playerAmbientDark from '../assets/adobeXD/images/dark/05folgedark.png';
import playerLight from '../assets/adobeXD/images/light/06playerlight.png';
import playerDark from '../assets/adobeXD/images/dark/06playerdark.png';


const Results = () => {
  return (
    <section className="w-full py-20 px-6 bg-[var(--background)] text-[var(--text)] font-quicksand selection:bg-[var(--accent)] overflow-x-hidden">
      <Element name="results">
        <motion.h1 initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mt-8">
          <div className="max-w-4xl mx-auto">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-left">Ergebnisse</h1>
              <p className="font-thin text-base sm:text-xl text-center md:text-justify leading-[1.6] hyphens-auto">
                Die kontinuierliche Diskussion und das Feedback führten zu einer finalen Lösung, die sowohl funktionalen als auch den ästhetischen
                Anforderungen gerecht wird. Die verschiedenen Prototypen, die während des Prozesses entwickelt wurden, wurden detailliert getestet,
                um die Benutzererfahrung zu optimieren und die Interaktivität in der Mixed Reality Mediathek zu gewährleisten.
              </p>
              <p className="font-thin text-base sm:text-xl text-center md:text-justify leading-[1.6] hyphens-auto mt-2">
                Im Folgenden werden einige Beispiele der finalen Designentscheidungen gezeigt. Die gesamte Masterarbeit ist am Ende der Seite verlinkt.
              </p>
            </div>
          </div>
        </motion.h1>

        {/* 1. Vergleichsbild */}
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, threshold: 0.1 }}
          className="relative max-w-4xl w-full mx-auto text-xl md:text-2xl font-medium text-left mb-4 mt-24"
        >
          Startseite
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, threshold: 0.1 }}
          className="relative max-w-4xl w-full mx-auto overflow-hidden"
        >
          <img
            loading="lazy"
            src={background}
            alt="Hintergrund"
            className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-lg max-w-full h-auto"
          />
          <div className="relative z-20">
            <ReactCompareImage
              leftImage={startseiteLight}
              rightImage={startseiteDark}
              sliderLineColor="var(--accent)"
              alt="Vergleich zwischen Light und Dark Mode"
              className="max-w-full h-auto"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </motion.div>

        {/* 2. Vergleichsbild */}
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-4xl w-full mx-auto text-xl md:text-2xl font-medium text-left mb-4 mt-24"
        >
          Rubriken
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-4xl w-full mx-auto overflow-hidden"
        >
          <div className="relative max-w-4xl w-full mx-auto">
            <img
              loading="lazy"
              src={background}
              alt="Hintergrund"
              className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-lg max-w-full h-auto"
            />
            <div className="relative z-20">
              <ReactCompareImage
                leftImage={rubrikenLight}
                rightImage={rubrikenDark}
                sliderLineColor="var(--accent)"
                alt="Vergleich zwischen Light und Dark Mode"
                className="max-w-full h-auto"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </motion.div>

        {/* 3. Vergleichsbild */}
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, threshold: 0.1 }}
          className="relative max-w-4xl w-full mx-auto text-xl md:text-2xl font-medium text-left mb-4 mt-24"
        >
          Übersichtsseite Dokus & Reportagen
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, threshold: 0.1 }}
          className="relative max-w-4xl w-full mx-auto overflow-hidden"
        >
          <div className="relative max-w-4xl w-full mx-auto">
            <img
              loading="lazy"
              src={background}
              alt="Hintergrund"
              className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-lg max-w-full h-auto"
            />
            <div className="relative z-20">
              <ReactCompareImage
                leftImage={dokuLight}
                rightImage={dokuDark}
                sliderLineColor="var(--accent)"
                alt="Vergleich zwischen Light und Dark Mode"
                className="max-w-full h-auto"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </motion.div>

        {/* 4. Vergleichsbild */}
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-4xl w-full mx-auto text-xl md:text-2xl font-medium text-left mb-4 mt-24"
        >
          Folgenübersicht 'Der Mond'
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-4xl w-full mx-auto overflow-hidden"
        >
          <div className="relative max-w-4xl w-full mx-auto">
            <img
              loading="lazy"
              src={background}
              alt="Hintergrund"
              className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-lg max-w-full h-auto"
            />
            <div className="relative z-20">
              <ReactCompareImage
                leftImage={dokuDetailsLight}
                rightImage={dokuDetailsDark}
                sliderLineColor="var(--accent)"
                alt="Vergleich zwischen Light und Dark Mode"
                className="max-w-full h-auto"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </motion.div>

        {/* 5. Vergleichsbild */}
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, threshold: 0.1 }}
          className="relative max-w-4xl w-full mx-auto text-xl md:text-2xl font-medium text-left mb-4 mt-24"
        >
          Ambienteauswahl
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, threshold: 0.1 }}
          className="relative max-w-4xl w-full mx-auto overflow-hidden"
        >
          <div className="relative max-w-4xl w-full mx-auto">
            <img
              loading="lazy"
              src={background}
              alt="Hintergrund"
              className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-lg brightness-20 max-w-full h-auto"
            />
            <div className="relative z-20">
              <ReactCompareImage
                leftImage={playerAmbientLight}
                rightImage={playerAmbientDark}
                sliderLineColor="var(--accent)"
                alt="Vergleich zwischen Light und Dark Mode"
                className="max-w-full h-auto"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </motion.div>

        {/* 6. Vergleichsbild */}
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-4xl w-full mx-auto text-xl md:text-2xl font-medium text-left mb-4 mt-24"
        >
          Videowiedergabe inkl. 3D-Modell
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-4xl w-full mx-auto"
        >
          <div className="relative max-w-4xl w-full mx-auto">
            <img
              loading="lazy"
              src={background}
              alt="Hintergrund"
              className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-lg brightness-20 max-w-full h-auto"
            />
            <div className="relative z-20">
              <ReactCompareImage
                leftImage={playerLight}
                rightImage={playerDark}
                sliderLineColor="var(--accent)"
                alt="Vergleich zwischen Light und Dark Mode"
                className="max-w-full h-auto"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <img
                loading="lazy"
                src={backgroundMoon}
                alt="Hintergrund Mond"
                className="absolute top-[45%] left-0 -translate-x-[10%] h-[30vw] w-[30vw] max-h-[350px] max-w-[350px] z-10"
              />
            </div>
          </div>
        </motion.div>
      </Element>
    </section>
  );
};

export default Results;