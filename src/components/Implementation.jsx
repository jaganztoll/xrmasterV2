import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

const Implementation = () => {
    return (
        <section className="w-full py-20 px-8 bg-[var(--background)] text-[var(--text)] font-quicksand selection:bg-[var(--accent)]">
            <Element name="implementation" className="h-[80vh] flex items-center justify-center">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-semibold mb-6">Umsetzung</h2>
                        <p className="font-thin text-xl text-justify leading-[1.6] hyphens-auto mb-4">
                            In der Umsetzungsphase wurde das entwickelte Konzept mithilfe moderner Webtechnologien realisiert.
                            Dabei kamen React, TailwindCSS sowie Framer Motion für Animationen zum Einsatz.
                        </p>
                        <p className="font-thin text-xl text-justify leading-[1.6] hyphens-auto">
                            Besondere Herausforderungen lagen in der klaren Strukturierung der Komponenten, einer konsistenten Dark-Mode-Umsetzung
                            sowie der gestenfreundlichen Navigationslogik für immersive Inhalte.
                        </p>
                    </motion.div>
                </div>
            </Element>
        </section>
    );
};

export default Implementation;
