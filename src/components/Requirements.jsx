import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

const functionalRequirements = [
    { id: "F-01", text: "Intuitive, gestenbasierte Navigation mit Erweiterungspotenzial", priority: "Hoch" },
    { id: "F-02", text: "Klare Hauptkategorien (Mediathek, Interaktiv TV, Live TV)", priority: "Hoch" },
    { id: "F-05", text: "Suchfunktion zur einfachen Inhaltsfindung", priority: "Hoch" },
    { id: "F-08", text: "Kontextbezogenes Steuer-Panel während der Videowiedergabe", priority: "Hoch" },
    { id: "F-13", text: "Visuelles Feedback bei Interaktionen", priority: "Hoch" },
];

const nonFunctionalRequirements = [
    { id: "NF-03", text: "Intuitive, konsistente Benutzeroberfläche", priority: "Hoch" },
    { id: "NF-02", text: "Reaktionsschnelle Anzeige interaktiver Elemente ohne Verzögerung", priority: "Hoch" },
    { id: "NF-09", text: "Im Vollbildmodus müssen die Panels links und rechts ausgebelendet werden.", priority: "Hoch" },
    { id: "NF-10", text: "Modernes Design gemäß ZDF Brandguide", priority: "Hoch" },
    { id: "NF-11", text: "Einheitliche Designelemente und Interaktionsmuster", priority: "Hoch" },
];



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
                        <h2 className="text-4xl font-semibold mb-6">Anforderungen</h2>
                        <p className="font-thin text-xl text-justify leading-[1.6] hyphens-auto mt-6 mb-12">
                            Für die Entwicklung der MR-Anwendung wurden funktionale und nicht-funktionale Anforderungen definiert. Der Fokus lag auf intuitiver Interaktion,
                            konsistentem Design, verschiedenen Eingabemethoden sowie Nutzerfreundlichkeit.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg">
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">Funktionale Anforderungen</h3>
                                <ul className="list-disc list-inside space-y-3">
                                    {functionalRequirements.map(({ id, text, priority }) => (
                                        <li key={id}>
                                            <span className="font-semibold">{id}:</span> {text} <span className="ml-2 px-2 py-0.5 text-xs bg-[var(--accent)] text-white rounded">{priority}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-4">Nicht-funktionale Anforderungen</h3>
                                <ul className="list-disc list-inside space-y-3">
                                    {nonFunctionalRequirements.map(({ id, text, priority }) => (
                                        <li key={id}>
                                            <span className="font-semibold">{id}:</span> {text} <span className="ml-2 px-2 py-0.5 text-xs bg-[var(--accent)] text-white rounded">{priority}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Element>
        </section>
    );
};

export default Requirements;
