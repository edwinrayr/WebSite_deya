// src/pages/Home.tsx
import { Hero } from '../sections/home/Hero';
import { About } from '../sections/home/About';
import { Services } from '../sections/home/Services';
import { Awards } from '../sections/home/Awards';
import { Contact } from '../sections/home/Contact';

export const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Awards />
            <Contact />
        </>
    );
};