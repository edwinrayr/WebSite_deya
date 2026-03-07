import { ServicesHero } from '../sections/services/ServicesHero';
import { ServiceIntro } from '../sections/services/ServiceIntro';
import { Benefits } from '../sections/services/Benefits';
import { WingsStrategy } from '../sections/services/WingsStrategy';
import { Comparison } from '../sections/services/Comparison';
import { Testimonials } from '../sections/services/Testimonials';
// 1. IMPORTA AQUÍ EL PRICING
import { Pricing } from '../sections/services/Pricing';

export const ServicesPage = () => {
    return (
        <main className="flex flex-col w-full bg-white">
            <ServicesHero />
            <ServiceIntro />
            <Benefits />
            <WingsStrategy />
            <Comparison />
            <Testimonials />
            {/* 2. RENDERÍZALO AQUÍ AL FINAL */}
            <Pricing />
        </main>
    );
};