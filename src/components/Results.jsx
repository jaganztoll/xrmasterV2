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
      <div className="max-w-6xl mx-auto">
        <Element name="results" className="pt-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold mb-6">Ergebnisse</h2>
            <p className="font-thin text-xl text-justify leading-[1.6] hyphens-auto">
              Die kontinuierliche Diskussion und das Feedback führten zu einer finalen Lösung, die sowohl funktionalen als auch den ästhetischen
              Anforderungen gerecht wird. Die verschiedenen Prototypen, die während des Prozesses entwickelt wurden, wurden detailliert getestet,
              um die Benutzererfahrung zu optimieren und die Interaktivität in der Mixed Reality Mediathek zu gewährleisten.
            </p>
            <p className="font-thin text-xl text-justify leading-[1.6] hyphens-auto mt-2">
              Im Folgenden werden einige Beispiele der finalen Designentscheidungen gezeigt.
            </p>
          </motion.div>
        </Element>
      </div>

      {/* ---------------- Vergleichsbilder ---------------- */}

      {[
        { title: "Startseite", imgL: startseiteLight, imgR: startseiteDark, dir: "left" },
        { title: "Rubriken", imgL: rubrikenLight, imgR: rubrikenDark, dir: "right" },
        { title: "Übersichtsseite Dokus & Reportagen", imgL: dokuLight, imgR: dokuDark, dir: "left" },
        { title: "Folgenübersicht 'Der Mond'", imgL: dokuDetailsLight, imgR: dokuDetailsDark, dir: "right" },
        { title: "Ambienteauswahl", imgL: playerAmbientLight, imgR: playerAmbientDark, dir: "left", bgDark: true },
        { title: "Videowiedergabe inkl. 3D-Modell", imgL: playerLight, imgR: playerDark, dir: "right", moonOverlay: true, bgDark: true }
      ].map((entry, idx) => (
        <React.Fragment key={idx}>
          <motion.h2
            initial={{ opacity: 0, x: entry.dir === "left" ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, threshold: 0.1 }}
            className="relative max-w-4xl w-full mx-auto text-2xl font-medium text-left mb-4 mt-24"
          >
            {entry.title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: entry.dir === "left" ? -100 : 100 }}
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
                className={`absolute top-0 left-0 w-full h-full object-cover z-0 rounded-lg max-w-full ${entry.bgDark ? "brightness-20" : ""}`}
              />
              <div className="relative z-20">
                <ReactCompareImage
                  leftImage={entry.imgL}
                  rightImage={entry.imgR}
                  sliderLineColor="var(--accent)"
                  alt="Vergleich zwischen Light und Dark Mode"
                  className="max-w-full h-auto"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
                {entry.moonOverlay && (
                  <img
                    loading="lazy"
                    src={backgroundMoon}
                    alt="Hintergrund Mond"
                    className="absolute top-[45%] left-0 -translate-x-[10%] h-[30vw] w-[30vw] max-h-[350px] max-w-[350px] z-10"
                  />
                )}
              </div>
            </div>
          </motion.div>
        </React.Fragment>
      ))}
    </section>
  );
};

export default Results;
