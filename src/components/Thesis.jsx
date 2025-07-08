import React from 'react';
import { DiGoogleDrive } from "react-icons/di";

const exampleVideoUrl = 'https://drive.google.com/file/d/1dwuXCZVWFIB7PzeJIdAC87PwnFEiUDZL/view?usp=drive_link';
const thesisUrl = 'https://drive.google.com/file/d/198y-KvVVpTpE-H1s-8tqHfH0-xBlzWzx/view';

const Footer = () => {
    return (
        <footer className="w-full py-6 px-6 bg-[var(--background)] text-[var(--text)] font-quicksand selection:bg-[var(--accent)]">
            <div className="max-w-4xl mx-auto text-center text-lg md:text-xl font-medium flex items-center justify-center gap-2 flex-wrap">
                <a
                    href={exampleVideoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 underline underline-offset-3 decoration-1 text-[var(--text)] hover:text-[var(--accent)] whitespace-nowrap"
                    aria-label="Beispielvideo"
                >
                    Beispielvideo
                </a>

                <span className="whitespace-nowrap">oder</span>

                <a
                    href={thesisUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 underline underline-offset-3 decoration-1 text-[var(--text)] hover:text-[var(--accent)] whitespace-nowrap"
                    aria-label="Masterarbeit"
                >
                    Masterarbeit
                </a>
                <span className="whitespace-nowrap">ansehen</span>
                <DiGoogleDrive className="w-6 h-6 md:w-7 md:h-7 fill-[var(--text)] transition-colors duration-300" />
            </div>
        </footer>
    );
};

export default Footer;
