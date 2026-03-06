import { Calendar, ArrowRight, TrendingUp, ShieldCheck } from 'lucide-react';

export const ServicesHero = () => {
    return (
        /* min-h-screen asegura que ocupe el 100% de la altura del navegador */
        <section className="bg-space-cadet relative overflow-hidden min-h-screen flex items-center pt-20 pb-12 lg:pt-24 lg:pb-16">

            {/* Elementos decorativos de fondo del 1er Hero */}
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.03] mix-blend-overlay"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sea-serpent/30 to-transparent"></div>

            {/* Luces volumétricas corregidas para abarcar más espacio */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sea-serpent/10 rounded-full blur-[140px] -z-0 translate-x-1/4 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-tufts-blue/10 rounded-full blur-[120px] -z-0 -translate-x-1/4 translate-y-1/4"></div>

            <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* COLUMNA TEXTO: 7 Columnas para mayor respiro */}
                    <div className="lg:col-span-7 text-center lg:text-left">
                        {/* Badge VIP Estilo Original */}
                        <div className="inline-flex items-center gap-3 py-2 px-5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md shadow-2xl">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sea-serpent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-sea-serpent"></span>
                            </span>
                            <span className="text-white text-xs md:text-sm font-black tracking-widest uppercase">
                                Estrategia Personalizada 1:1
                            </span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-white mb-8 leading-[1.05] tracking-tight">
                            Tu dinero ya trabaja. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sea-serpent via-tufts-blue to-white">
                                Dale dirección.
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mb-12 mx-auto lg:mx-0">
                            Si ya tienes el hábito del ahorro, necesitas la claridad de un plan experto.
                            Transforma tus activos en un <span className="text-white font-semibold">patrimonio con propósito.</span>
                        </p>

                        {/* Botones de Acción */}
                        <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                            <a
                                href="#contacto"
                                className="group inline-flex justify-center items-center gap-3 px-10 py-5 text-base font-bold rounded-full text-space-cadet bg-sea-serpent hover:bg-white transition-all duration-300 shadow-xl shadow-sea-serpent/20 hover:-translate-y-1"
                            >
                                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                Agendar Diagnóstico
                            </a>
                            <a
                                href="#servicios"
                                className="group inline-flex justify-center items-center gap-3 px-10 py-5 border-2 border-white/20 text-base font-bold rounded-full text-white hover:border-sea-serpent hover:text-sea-serpent transition-all duration-300"
                            >
                                Ver Soluciones
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* COLUMNA IMAGEN: 5 Columnas */}
                    <div className="lg:col-span-5 relative mt-12 lg:mt-0">
                        {/* Glow posterior a la imagen */}
                        <div className="absolute inset-0 bg-sea-serpent/15 rounded-full blur-[100px] transform scale-75 -z-10"></div>

                        <div className="relative mx-auto w-full max-w-md lg:max-w-full">
                            {/* El contenedor tipo "Arco" o rounded alto del 1er hero */}
                            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-[8px] border-white/5 group bg-space-cadet">
                                <img
                                    src="/images/deyanira/DEY003.jpg"
                                    alt="Deyanira - Cuidado del patrimonio"
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Overlay para fundir la base de la foto con el fondo */}
                                <div className="absolute inset-0 bg-gradient-to-t from-space-cadet/60 via-transparent to-transparent"></div>
                            </div>

                            {/* TARJETA RENDIMIENTO (Mejorada: Glassmorphism Blanco/Transparente) */}
                            <div className="absolute -top-6 -right-4 sm:-right-8 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white flex items-center gap-4 hover:-translate-y-2 transition-transform duration-300 z-20">
                                <div className="bg-sea-serpent p-2.5 rounded-xl shadow-lg shadow-sea-serpent/30">
                                    <TrendingUp className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Resultados</p>
                                    <p className="text-sm font-black text-space-cadet leading-none">Rendimiento Real</p>
                                </div>
                            </div>

                            {/* TARJETA SEGURIDAD (Estilo Space Cadet) */}
                            <div className="absolute -bottom-8 -left-4 sm:-left-8 bg-space-cadet p-5 rounded-[2rem] shadow-2xl border border-white/10 flex items-center gap-4 z-20 hover:scale-105 transition-transform duration-300">
                                <div className="bg-white/10 p-3 rounded-full">
                                    <ShieldCheck className="w-7 h-7 text-sea-serpent" />
                                </div>
                                <div>
                                    <p className="text-sm font-black text-white leading-tight">Patrimonio</p>
                                    <p className="text-xs font-medium text-gray-400">Blindaje Financiero</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};