import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

const sections = [
  {
    id: 'motivation',
    title: 'Motivation',
    content: (
      <>
        <p>Die Zukunft der Mediennutzung wandelt sich durch Mixed Reality (MR) grundlegend.</p>
        <p>Die ZDFmediathek als etabliertes Angebot soll intuitiv in MR erlebbar werden.</p>
        <p>Im Fokus steht die neue Kategorie „Interaktiv“ für 3D Modelle, 180° und 360° Medien.</p>
        <p>Ziel ist ein innovatives, immersives Nutzererlebnis mit intuitiver Interaktion.</p>
      </>
    ),
  },
  {
    id: 'arbeitspakete',
    title: 'Arbeitspakete',
    content: (
      <ul className="list-disc pl-6">
        <li>Analyse und heuristische Evaluation der bestehenden ZDFmediathek</li>
        <li>Definition funktionaler und nicht-funktionaler Anforderungen</li>
        <li>Entwicklung eines Designkonzepts unter Berücksichtigung von Spatial UI und UX-Prinzipien</li>
        <li>Iterative Umsetzung eines High-Fidelity-Prototyps mit kontinuierlicher Verfeinerung</li>
        <li>Durchführung von Usability-Tests und technische Evaluationen während der Entwicklungsphase</li>
        <li>Abschlussdokumentation mit Ergebnissen, Erkenntnissen und Ausblick auf zukünftige Entwicklungen</li>
      </ul>
    ),
  },
  {
    id: 'grundlagen',
    title: 'Grundlagen',
    content: (
      <>
        <p>Abgrenzung zwischen VR, AR und MR.</p>
        <p>Relevante Head-Mounted Displays und deren Features.</p>
        <p>UX/UI Prinzipien für immersive Umgebungen.</p>
        <p>Konzept der Spatial User Interfaces.</p>
      </>
    ),
  },
  {
    id: 'fachliche-betrachtung',
    title: 'Fachliche Betrachtung',
    content: (
      <>
        <p>Herausforderungen beim MR-Design: Usability, Interaktion, Performance.</p>
        <p>Erkenntnisse aus Literatur und eigener Evaluation.</p>
        <p>Designprinzipien und Standards für MR-Anwendungen.</p>
      </>
    ),
  },
  {
    id: 'prozess',
    title: 'Prozess',
    content: (
      <>
        <p>Design-Thinking Ablauf: Empathize, Define, Ideate, Prototype, Test.</p>
        <p>Iterative Entwicklung mit integriertem Nutzerfeedback.</p>
        <p>Besonderheiten und Herausforderungen bei MR-Projekten.</p>
      </>
    ),
  },
];

const ProjectInfo = () => {
  const [active, setActive] = useState(sections[0].id);

  return (
    <section className="w-full py-20 px-8 bg-[var(--background)] text-[var(--text)] font-quicksand selection:bg-[var(--accent)]">
      <Element name="projectinfo" className="h-[80vh] flex flex-col items-center justify-center">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-semibold mb-6 text-left">Projektinfo</h2>
          <div className="flex gap-8">
            <motion.nav
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="flex flex-col w-64 border-r border-gray-600"
            >
              {sections.map(({ id, title }) => (
                <button
                  key={id}
                  onClick={() => setActive(id)}
                  className={`py-3 px-6 text-left font-medium text-xl cursor-pointer hover:text-[var(--accent)] transition-colors whitespace-nowrap ${active === id
                    ? 'border-l-4 border-[var(--accent)] text-[var(--accent)]'
                    : 'border-l-0 border-transparent'
                    }`}
                >
                  {title}
                </button>
              ))}
            </motion.nav>

            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="flex-1 text-xl leading-relaxed"
            >
              {sections.find((s) => s.id === active)?.content}
            </motion.div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default ProjectInfo;
