import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

const Requirements = () => {
    return (
        <section className="w-full py-20 px-8 bg-[var(--background)] text-[var(--text)] font-quicksand selection:bg-[var(--accent)]">
            <Element name="requirements" className="h-[80vh] flex items-center justify-center">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-semibold mb-6">
                            Anforderungen
                        </h2>
                        <p className="font-thin text-xl text-justify leading-[1.6] hyphens-auto mt-6">
                            Für die Entwicklung der MR-Anwendung wurden funktionale und nicht-funktionale Anforderungen definiert. Dazu zählten eine interaktive Benutzeroberfläche,
                            konsistentes visuelles Design, Unterstützung für verschiedene Eingabemethoden (z.&nbsp;B. Gesten, Sprache), sowie Kompatibilität mit gängigen MR-Plattformen.
                            Zusätzlich war ein nahtloser Dark Mode und eine klare Navigationsstruktur erforderlich, um die Nutzerführung zu optimieren und Barrieren zu minimieren.
                        </p>
                    </motion.div>
                </div>
            </Element>
        </section>
    );
};

export default Requirements;
