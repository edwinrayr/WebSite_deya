import { ServicesHero } from '../sections/services/ServicesHero';
import { Benefits } from '../sections/services/Benefits';
import { WingsStrategy } from '../sections/services/WingsStrategy';
import { Comparison } from '../sections/services/Comparison';
import { Testimonials } from '../sections/services/Testimonials';
import { Pricing } from '../sections/services/Pricing';

export const ServicesPage = () => {
    return (
        <div className="flex flex-col w-full">
            {/* AQUÍ ESTABA EL ERROR: DEBE SER <ServicesHero /> NO <Hero /> */}
            <ServicesHero />

            <Benefits />
            <WingsStrategy />
            <Comparison />
            <Testimonials />
            <Pricing />
        </div>
    );
};