// src/pages/AboutPage.tsx
import { useEffect } from 'react';
import { AboutHero } from '../sections/about/AboutHero';
import { Biography } from '../sections/about/Biography';
import { Philosophy } from '../sections/about/Philosophy';
import { AboutCTA } from '../sections/about/AboutCTA';

export const AboutPage = () => {
    // Asegurarnos de que al entrar a la página, el scroll esté arriba
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-space-cadet">
            <div className="pt-24 lg:pt-32">
                <AboutHero />
            </div>
            <Biography />
            <Philosophy />
            <AboutCTA />
        </div>
    );
};