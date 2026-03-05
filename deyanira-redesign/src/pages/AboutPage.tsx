// src/pages/AboutPage.tsx
import { useEffect } from 'react';
import { AboutHero } from '../sections/about/AboutHero';
import { Biography } from '../sections/about/Biohraphy';
import { Contact } from '../sections/home/Contact';

export const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20 lg:pt-24 bg-white">
            {/* El pt-20 compensa la Navbar fija para que no tape el contenido inicial */}
            <AboutHero />
            <Biography />
            <Contact />
        </div>
    );
};