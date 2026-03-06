// src/sections/home/Services.tsx
import { LineChart, Landmark, ShieldCheck, Lightbulb, ArrowRight, Sparkles } from 'lucide-react';

const services = [
    {
        id: 'inversiones',
        title: 'Inversiones y Multiplicación',
        description: 'Estrategias en renta fija, renta variable e inversiones inmobiliarias adaptadas a tu perfil de riesgo.',
        icon: LineChart,
        glow: 'group-hover:shadow-[0_0_30px_-5px_#4A90E2]', // tufts-blue glow
        gradient: 'from-tufts-blue to-lapis-lazuli'
    },
    {
        id: 'retiro',
        title: 'Estrategias para el Retiro',
        description: 'Planes de inversión para el retiro (PPR) y maximización de la pensión del IMSS bajo Modalidad 40.',
        icon: Landmark,
        glow: 'group-hover:shadow-[0_0_30px_-5px_#ffffff]', // white glow
        gradient: 'from-gray-300 to-white'
    },
    {
        id: 'proteccion',
        title: 'Protección Patrimonial',
        description: 'Blindaje familiar a través de seguros de vida y la creación de fideicomisos educativos.',
        icon: ShieldCheck,
        glow: 'group-hover:shadow-[0_0_30px_-5px_#64C2C8]', // sea-serpent glow
        gradient: 'from-sea-serpent to-tufts-blue'
    },
    {
        id: 'educacion',
        title: 'Educación Financiera',
        description: 'Clases prácticas sobre mentalidad, administración, tarjetas de crédito y finanzas del día a día.',
        icon: Lightbulb,
        glow: 'group-hover:shadow-[0_0_30px_-5px_#19255B]', // space-cadet glow
        gradient: 'from-lapis-lazuli to-tufts-blue'
    }
];

export const Services = () => {
    return (
        // Cambio dramático: Fondo oscuro para un contraste premium
        <section id="servicios" className="py-20 lg:py-32 bg-space-cadet relative overflow-hidden z-0">

            {/* Luces de Neón de Fondo (Volumetric Lighting) */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-tufts-blue/10 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sea-serpent/10 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

            {/* Grid principal decorativo */}
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>

            <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

                {/* Estructura dividida: Texto fijo a la izquierda, Tarjetas a la derecha */}
                <div className="lg:grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                    {/* Columna Izquierda: Sticky/Info (Ocupa 5 columnas) */}
                    <div className="lg:col-span-5 mb-16 lg:mb-0">
                        <div className="lg:sticky lg:top-32">

                            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                                <Sparkles className="w-4 h-4 text-sea-serpent animate-pulse" />
                                <span className="text-white text-sm font-bold tracking-wider uppercase">
                                    Portafolio Integral
                                </span>
                            </div>

                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-8 leading-[1.1]">
                                Soluciones para tu <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sea-serpent to-tufts-blue">
                                    crecimiento
                                </span>
                            </h2>

                            <p className="text-lg text-gray-300 leading-relaxed mb-10">
                                No ofrecemos "paquetes prearmados". Cada estrategia nace de un diagnóstico financiero profundo, diseñado milimétricamente para proteger a tu familia y multiplicar tu patrimonio en el tiempo.
                            </p>

                            <a
                                href="#contacto"
                                className="inline-flex justify-center items-center gap-3 px-8 py-4 bg-sea-serpent text-space-cadet text-base font-bold rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
                            >
                                Solicitar Diagnóstico
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Columna Derecha: Grid Asimétrico de Tarjetas (Ocupa 7 columnas) */}
                    <div className="lg:col-span-7 relative">
                        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                            {services.map((service, index) => {
                                const Icon = service.icon;
                                return (
                                    <div
                                        key={service.id}
                                        /* Truco de diseño: Desplazamos la segunda columna hacia abajo para un look asimétrico */
                                        className={`group relative bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10 transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden ${index % 2 !== 0 ? 'sm:translate-y-12' : ''
                                            } ${service.glow}`}
                                    >
                                        {/* Resplandor interno de la tarjeta en Hover */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                        {/* Contenedor del Ícono con fondo dinámico */}
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-8 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-4 leading-snug relative z-10">
                                            {service.title}
                                        </h3>

                                        <p className="text-gray-400 mb-8 leading-relaxed relative z-10">
                                            {service.description}
                                        </p>

                                        {/* Enlace interactivo */}
                                        <div className="mt-auto flex items-center text-sm font-bold text-sea-serpent group-hover:text-white transition-colors relative z-10">
                                            <span>Explorar estrategia</span>
                                            <div className="ml-3 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-sea-serpent group-hover:w-10 transition-all duration-300">
                                                <ArrowRight className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};