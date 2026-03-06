// src/sections/about/Philosophy.tsx
import { HeartHandshake, ShieldCheck, Scale, Lightbulb, Compass } from 'lucide-react';

const values = [
    {
        title: 'Empatía Financiera',
        description: 'No hay fórmulas mágicas. Escucho tus metas, miedos y situación familiar para crear un plan real.',
        icon: HeartHandshake,
        color: 'text-tufts-blue',
        bg: 'bg-tufts-blue/10',
        gradient: 'from-tufts-blue/20 to-transparent'
    },
    {
        title: 'Transparencia Absoluta',
        description: 'Te explico las letras chiquitas. Mi objetivo es que entiendas dónde está tu dinero y cuáles son los riesgos.',
        icon: ShieldCheck,
        color: 'text-space-cadet',
        bg: 'bg-space-cadet/10',
        gradient: 'from-space-cadet/20 to-transparent'
    },
    {
        title: 'Objetividad',
        description: 'Al ser independiente, busco la mejor opción en el mercado para ti, no para una institución específica.',
        icon: Scale,
        color: 'text-sea-serpent',
        bg: 'bg-sea-serpent/10',
        gradient: 'from-sea-serpent/20 to-transparent'
    },
    {
        title: 'Visión a Largo Plazo',
        description: 'Construimos patrimonio con estrategias sólidas, paciencia y el poder del interés compuesto.',
        icon: Lightbulb,
        color: 'text-lapis-lazuli',
        bg: 'bg-lapis-lazuli/10',
        gradient: 'from-lapis-lazuli/20 to-transparent'
    }
];

export const Philosophy = () => {
    return (
        <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden z-0">

            {/* Malla decorativa de fondo (Grid Pattern) */}
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.03] mix-blend-multiply pointer-events-none"></div>

            {/* Orbes luminosos para dar profundidad */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-tufts-blue/10 rounded-full blur-[100px] -z-10 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sea-serpent/10 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

            <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

                <div className="lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* --- Bloque Izquierdo: Copywriting y Cabecera --- */}
                    <div className="lg:col-span-5 mb-16 lg:mb-0">
                        <div className="lg:sticky lg:top-32">

                            {/* Etiqueta animada VIP */}
                            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
                                <Compass className="w-4 h-4 text-lapis-lazuli animate-[spin_4s_linear_infinite]" />
                                <span className="text-lapis-lazuli text-sm font-bold tracking-wider uppercase">
                                    Mis Principios
                                </span>
                            </div>

                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-space-cadet mb-6 leading-[1.1]">
                                Valores que construyen <br className="hidden lg:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-tufts-blue to-sea-serpent">
                                    patrimonios sólidos.
                                </span>
                            </h2>

                            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-lg">
                                El dinero es solo una herramienta; el verdadero objetivo es tu tranquilidad. Así es como guío las decisiones estratégicas de cada uno de mis clientes, sin atajos ni fórmulas mágicas.
                            </p>

                            {/* Elemento de confianza visual */}
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm max-w-sm">
                                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                                    <ShieldCheck className="w-6 h-6 text-tufts-blue" />
                                </div>
                                <p className="text-sm font-bold text-space-cadet">Ética y transparencia en cada recomendación.</p>
                            </div>

                        </div>
                    </div>

                    {/* --- Bloque Derecho: Panel de Control de Valores (Stacked Cards) --- */}
                    <div className="lg:col-span-7">
                        {/* Contenedor Macro con estilo Glassmorphism invertido */}
                        <div className="bg-white rounded-[2.5rem] p-4 sm:p-6 shadow-2xl border border-gray-100 relative overflow-hidden">

                            <div className="grid sm:grid-cols-2 gap-4">
                                {values.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="group relative bg-gray-50 rounded-[1.5rem] p-8 border border-gray-100 hover:border-transparent transition-all duration-500 overflow-hidden"
                                        >
                                            {/* Resplandor radial de fondo que sigue el hover */}
                                            <div className={`absolute -inset-full bg-gradient-radial ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none scale-0 group-hover:scale-100`}></div>

                                            {/* Fondo blanco sólido en hover para dar efecto de "encendido" */}
                                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                                            <div className="relative z-10">
                                                <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 border border-transparent group-hover:border-white group-hover:shadow-lg`}>
                                                    <Icon className={`w-7 h-7 ${item.color}`} />
                                                </div>

                                                <h3 className="text-xl font-extrabold text-space-cadet mb-3">
                                                    {item.title}
                                                </h3>

                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};