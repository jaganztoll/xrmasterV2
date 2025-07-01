import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

const ProjectInfo = () => {
  return (
    <section className="w-full py-20 px-8 bg-[var(--background)] text-[var(--text)] font-quicksand selection:bg-[var(--accent)]">
      <Element name="projectinfo" className="h-[80vh] flex items-center justify-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
              Projektinfo
            </h1>
            <p className="font-thin text-base sm:text-xl text-center md:text-justify leading-[1.6] hyphens-auto">
              Die Masterarbeit untersuchte das Potenzial von Mixed Reality (MR) und Spatial User Interfaces, um das Nutzungserlebnis
              der ZDFmediathek durch eine MR-basierte Anwendung zu erweitern. Dabei stand eine neue Kategorie 'Interaktiv' im Vordergrund.
              Diese Kategorie soll Nutzerinnen und Nutzern ermöglichen, Inhalte auf innovative Weise zu erleben und mit ihnen zu interagieren,
              beispielsweise durch die Darstellung eines 3D-Modells oder 180°- & 360°-Bilder und -Videos. Ausgehend von einer Analyse der
              bestehenden ZDFmediathek und relevanter Designprinzipien wurden funktionale und nicht-funktionale Anforderungen definiert.
              Daraufhin wurde ein interaktiver High-Fidelity-Prototyp mit Adobe XD entwickelt, um sowohl die Designmöglichkeiten als auch
              die Machbarkeit einer intuitiven und immersiven Benutzererfahrung in einer MR-Umgebung aufzuzeigen.
            </p>
          </motion.div>
        </div>
      </Element>
    </section>
  );
};

export default ProjectInfo;
