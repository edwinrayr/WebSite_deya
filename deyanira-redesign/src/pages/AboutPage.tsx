// src/pages/AboutPage.tsx
import { useEffect } from 'react';
import { AboutHero } from '../sections/about/AboutHero';
import { Biography } from '../sections/about/Biography';
import { Philosophy } from '../sections/about/Philosophy';
import { AboutCTA } from '../sections/about/AboutCTA';

export const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-space-cadet">
            <AboutHero />
            <Biography />
            <Philosophy />
            <AboutCTA />
        </div>
    );
};