import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

const functionalRequirements = [
    { id: "F-01", text: "Intuitive, gestenbasierte Navigation ohne Anleitung mit Erweiterungspotenzial", priority: "Hoch" },
    { id: "F-03", text: "Hauptkategorien Mediathek, Interaktiv TV und Live TV", priority: "Hoch" },
    { id: "F-08", text: "Kontextbezogenes unteres Steuer-Panel während der Videowiedergabe", priority: "Hoch" },
    { id: "F-12", text: "Interaktive Elemente innerhalb von Beiträgen müssen klar gekennzeichnet sein.", priority: "Hoch" },
    { id: "F-14", text: "Visuelles Feedback (z.B. Hervorheben, Farbänderung) bei Hover zur Anzeige von Interaktivität", priority: "Mittel" },
];

const nonFunctionalRequirements = [
    { id: "NF-02", text: "Reaktionsschnelle Anzeige interaktiver Elemente ohne Verzögerung", priority: "Hoch" },
    { id: "NF-03", text: "Intuitive, konsistente Benutzeroberfläche", priority: "Hoch" },
    { id: "NF-09", text: "Im Vollbildmodus müssen die Panels links und rechts ausgebelendet werden.", priority: "Hoch" },
    { id: "NF-10", text: "Modernes, minimalistisches Design gemäß ZDF Brandguide", priority: "Hoch" },
    { id: "NF-11", text: "Einheitliche Designelemente und Interaktionsmuster", priority: "Hoch" },
];

const Card = ({ id, text, priority }) => (
    <div className="bg-[var(--secondary)] p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow cursor-default text-left">
        <div className="flex justify-between items-center mb-3">
            <span className="font-semibold text-lg">{id}</span>
            <span
                className={`px-3 py-1 text-xs font-semibold rounded-full text-white ${priority === "Hoch" ? "bg-[var(--accent)]" : "bg-gray-500"
                    }`}
            >
                {priority}
            </span>
        </div>
        <p className="text-lg leading-relaxed">{text}</p>
    </div>
);

const Requirements = () => {
    return (
        <section className="w-full py-20 px-8 bg-[var(--background)] text-[var(--text)] font-quicksand selection:bg-[var(--accent)]">
            <Element
                name="requirements"
                id="requirements-anchor"
                style={{ paddingTop: '90px', marginTop: '-90px' }}
            >                <div className="max-w-6xl mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-semibold mb-6 text-left">Anforderungen</h2>
                        <p className="font-thin text-xl text-left leading-[1.6] hyphens-auto mb-12">
                            Für die Entwicklung der MR-Anwendung wurden funktionale und nicht-funktionale Anforderungen definiert. Der Fokus lag auf intuitiver Interaktion,
                            konsistentem Design, verschiedenen Eingabemethoden sowie Nutzerfreundlichkeit.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                            <div>
                                <h3 className="text-2xl font-semibold mb-6 border-b border-[var(--accent)] pb-2">Funktionale Anforderungen</h3>
                                <div className="space-y-6">
                                    {functionalRequirements.map(({ id, text, priority }) => (
                                        <Card key={id} id={id} text={text} priority={priority} />
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-6 border-b border-[var(--accent)] pb-2">Nicht-funktionale Anforderungen</h3>
                                <div className="space-y-6">
                                    {nonFunctionalRequirements.map(({ id, text, priority }) => (
                                        <Card key={id} id={id} text={text} priority={priority} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Element>
        </section>
    );
};

export default Requirements;
