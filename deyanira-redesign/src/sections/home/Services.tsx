// src/sections/home/Services.tsx
import { LineChart, Landmark, ShieldCheck, Lightbulb, ArrowRight } from 'lucide-react';

const services = [
    {
        id: 'inversiones',
        title: 'Inversiones y Multiplicación',
        description: 'Estrategias en renta fija, renta variable (acciones, ETFs, fibras, fondos) e inversiones inmobiliarias adaptadas a tu perfil de riesgo.',
        icon: LineChart,
        color: 'text-tufts-blue',
        bg: 'bg-tufts-blue/10',
        borderHover: 'hover:border-tufts-blue'
    },
    {
        id: 'retiro',
        title: 'Estrategias para el Retiro',
        description: 'Planes de inversión para el retiro (PPR), orientación especializada en AFORES y maximización de la pensión del IMSS bajo Modalidad 40.',
        icon: Landmark,
        color: 'text-space-cadet',
        bg: 'bg-space-cadet/10',
        borderHover: 'hover:border-space-cadet'
    },
    {
        id: 'proteccion',
        title: 'Protección Patrimonial',
        description: 'Blindaje para ti y tu familia a través de seguros de vida y la creación de fideicomisos educativos para garantizar el futuro de tus hijos.',
        icon: ShieldCheck,
        color: 'text-sea-serpent',
        bg: 'bg-sea-serpent/10',
        borderHover: 'hover:border-sea-serpent'
    },
    {
        id: 'educacion',
        title: 'Educación Financiera',
        description: 'Clases prácticas sobre mentalidad, administración financiera, uso estratégico de tarjetas de crédito y finanzas aplicadas al día a día.',
        icon: Lightbulb,
        color: 'text-lapis-lazuli',
        bg: 'bg-lapis-lazuli/10',
        borderHover: 'hover:border-lapis-lazuli'
    }
];

export const Services = () => {
    return (
        // Fondo blanco para contrastar con el gris de la sección anterior, sin dejar espacios.
        <section id="servicios" className="py-16 lg:py-24 bg-white relative overflow-hidden">

            {/* Elemento decorativo de fondo */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gray-50/50 to-transparent -z-10"></div>

            <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">

                {/* Cabecera de la sección */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-50 border border-blue-100 mb-6">
                        <span className="text-lapis-lazuli text-sm font-bold tracking-wider uppercase">
                            Portafolio Integral
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-space-cadet tracking-tight mb-6">
                        Soluciones para tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-lapis-lazuli to-sea-serpent">crecimiento económico</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Ofrezco asesoría financiera personalizada, partiendo de un diagnóstico profesional que analiza tu situación actual y tus objetivos particulares.
                    </p>
                </div>

                {/* Grid de Servicios (Responsivo: 1 columna móvil, 2 tablet, 4 escritorio gigante) */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={service.id}
                                className={`group relative bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${service.borderHover} flex flex-col h-full cursor-pointer overflow-hidden`}
                            >
                                {/* Efecto de brillo de fondo al hacer hover */}
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-50 to-transparent rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150`}></div>

                                <div className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                    <Icon className={`w-8 h-8 ${service.color}`} />
                                </div>

                                <h3 className="text-xl font-bold text-space-cadet mb-4 leading-snug">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Botón "Conocer más" integrado en la tarjeta */}
                                <div className="mt-auto flex items-center text-sm font-bold text-space-cadet group-hover:text-lapis-lazuli transition-colors">
                                    <span>Explorar estrategia</span>
                                    <ArrowRight className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-2" />
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Call To Action Secundario */}
                <div className="mt-16 text-center">
                    <a
                        href="#contacto"
                        className="inline-flex justify-center items-center gap-2 px-8 py-3.5 border-2 border-space-cadet text-base font-semibold rounded-full text-space-cadet bg-white hover:bg-space-cadet hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
                    >
                        Solicitar un diagnóstico financiero
                    </a>
                </div>

            </div>
        </section>
    );
};