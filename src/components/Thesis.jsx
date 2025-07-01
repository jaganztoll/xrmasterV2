import React from 'react';
import { Element } from 'react-scroll';
import { DiGoogleDrive } from "react-icons/di";

const Thesis = () => {
    return (
        <section className="w-full py-2 px-6 bg-[var(--background)] text-[var(--text)] font-quicksand selection:bg-[var(--accent)]">
            <Element name="thesis" className="h-24 flex items-center justify-center">
                <div className="max-w-4xl mx-auto text-center flex items-center">
                    <div className="text-lg md:text-xl font-medium">
                        Hier geht's zu meiner
                        <a href="https://drive.google.com/file/d/198y-KvVVpTpE-H1s-8tqHfH0-xBlzWzx/view"
                            target="_blank" rel="noopener noreferrer"
                            className="text-lg md:text-xl underline underline-offset-3 decoration-1 text-[var(--text)] hover:text-[var(--accent)] ml-1">
                            Masterarbeit
                        </a>
                        <DiGoogleDrive className="inline w-8 h-8 md:w-10 md:h-10 fill-[var(--text)] align-[-12px] transition-colors duration-300" />
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Thesis;
