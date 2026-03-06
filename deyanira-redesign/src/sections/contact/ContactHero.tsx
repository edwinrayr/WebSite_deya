// src/sections/contact/ContactHero.tsx
import { CalendarDays, LineChart, ShieldCheck, ArrowDown, Lock, Sparkles, ArrowRight } from 'lucide-react';

export const ContactHero = () => {
    return (
        // AJUSTE CLAVE: Cambiamos los paddings a pt-24 pb-12 lg:pt-28 lg:pb-16.
        // Esto iguala las dimensiones exactas del Hero del Home, garantizando un centrado perfecto.
        <section className="relative min-h-screen flex items-center pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden z-0 bg-space-cadet">

            {/* --- Fondo Atmosférico Premium --- */}
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-tufts-blue/10 rounded-full blur-[140px] -z-10 -translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-sea-serpent/10 rounded-full blur-[120px] -z-10 translate-x-1/4 translate-y-1/4 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

            <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 flex flex-col justify-center h-full">

                <div className="lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">

                    {/* --- COLUMNA IZQUIERDA: Tipografía y Llamado a la Acción (6 Columnas) --- */}
                    <div className="lg:col-span-6 text-center lg:text-left mb-12 lg:mb-0 relative z-20">

                        {/* Etiqueta de Estado Activo */}
                        <div className="inline-flex items-center gap-3 py-2 px-5 rounded-full bg-white/5 border border-white/10 shadow-sm mb-8 backdrop-blur-md">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sea-serpent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sea-serpent"></span>
                            </span>
                            <span className="text-white text-xs font-bold tracking-[0.15em] uppercase">
                                Recepción de Casos Abierta
                            </span>
                        </div>

                        {/* Título Monumental */}
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-extrabold text-white tracking-tighter leading-[1.05] mb-8">
                            Transforma tu <br className="hidden lg:block" />
                            <span className="relative inline-block">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sea-serpent to-tufts-blue">
                                    incertidumbre
                                </span>
                                <Sparkles className="absolute -top-4 -right-10 w-8 h-8 text-sea-serpent animate-pulse hidden sm:block" />
                            </span> <br className="hidden lg:block" />
                            en patrimonio.
                        </h1>

                        <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0 mb-12">
                            Da el primer paso hoy. Obtén un diagnóstico financiero claro, 100% confidencial y sin compromisos.
                        </p>

                        {/* Botón de Acción Sutil */}
                        <a
                            href="#booking-section"
                            className="group inline-flex items-center justify-center lg:justify-start gap-4"
                        >
                            <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-sea-serpent group-hover:border-sea-serpent transition-colors duration-300 shadow-lg">
                                <ArrowDown className="w-6 h-6 text-white group-hover:translate-y-1 transition-transform" />
                            </div>
                            <span className="text-white font-bold tracking-wide uppercase text-sm group-hover:text-sea-serpent transition-colors">
                                Iniciar Proceso
                            </span>
                        </a>
                    </div>

                    {/* --- COLUMNA DERECHA: Bento Grid de Proceso (6 Columnas) --- */}
                    <div className="lg:col-span-6 relative z-10 flex justify-center lg:justify-end">

                        {/* Contenedor del Bento Box */}
                        <div className="relative w-full max-w-lg lg:max-w-xl">

                            {/* Luz de fondo para resaltar el cristal */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-tufts-blue/20 blur-[80px] rounded-full pointer-events-none"></div>

                            {/* Grid 2x2 Estilo Bento */}
                            <div className="grid grid-cols-2 gap-4 sm:gap-5 relative z-10">

                                {/* Header del Grid (Indicador de Privacidad) */}
                                <div className="col-span-2 flex items-center justify-end mb-2">
                                    <div className="bg-green-500/10 text-green-400 px-4 py-1.5 rounded-full text-xs font-bold border border-green-500/20 flex items-center gap-2">
                                        <Lock className="w-3.5 h-3.5" /> Sesión 1 a 1 Privada
                                    </div>
                                </div>

                                {/* PASO 1: Tarjeta Panorámica (Ocupa 2 columnas) */}
                                <div className="col-span-2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 sm:p-8 flex items-center justify-between group hover:bg-white/10 transition-all duration-300 hover:border-white/20">
                                    <div className="flex items-center gap-5 sm:gap-6">
                                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-space-cadet/80 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                                            <CalendarDays className="w-7 h-7 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sea-serpent text-xs font-black uppercase tracking-wider mb-1">Paso 01</p>
                                            <h3 className="text-white font-extrabold text-xl sm:text-2xl">Agenda tu Sesión</h3>
                                            <p className="text-gray-400 text-sm mt-1 hidden sm:block">Horario flexible adaptado a ti.</p>
                                        </div>
                                    </div>
                                    <ArrowRight className="w-6 h-6 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                                </div>

                                {/* PASO 2: Tarjeta Cuadrada Izquierda */}
                                <div className="col-span-2 sm:col-span-1 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 sm:p-8 group hover:bg-white/10 transition-all duration-300 hover:border-white/20 flex flex-col justify-between min-h-[200px]">
                                    <div className="w-12 h-12 rounded-xl bg-space-cadet/80 border border-white/10 flex items-center justify-center mb-6 group-hover:-rotate-6 transition-transform duration-300">
                                        <LineChart className="w-6 h-6 text-tufts-blue" />
                                    </div>
                                    <div>
                                        <p className="text-tufts-blue text-xs font-black uppercase tracking-wider mb-1">Paso 02</p>
                                        <h3 className="text-white font-extrabold text-lg sm:text-xl">Diagnóstico</h3>
                                        <p className="text-gray-400 text-sm mt-2 leading-relaxed">Análisis profundo de tu situación actual.</p>
                                    </div>
                                </div>

                                {/* PASO 3: Tarjeta Destacada Derecha (Highlight) */}
                                <div className="col-span-2 sm:col-span-1 bg-gradient-to-br from-space-cadet to-tufts-blue/40 backdrop-blur-2xl border border-tufts-blue/30 rounded-[2rem] p-6 sm:p-8 shadow-lg shadow-tufts-blue/20 group hover:-translate-y-2 transition-transform duration-500 flex flex-col justify-between min-h-[200px] cursor-default">
                                    <div className="w-12 h-12 rounded-xl bg-sea-serpent flex items-center justify-center mb-6 shadow-lg shadow-sea-serpent/30 group-hover:scale-110 transition-transform duration-300">
                                        <ShieldCheck className="w-6 h-6 text-space-cadet" />
                                    </div>
                                    <div>
                                        <p className="text-sea-serpent text-xs font-black uppercase tracking-wider mb-1">Paso 03</p>
                                        <h3 className="text-white font-extrabold text-lg sm:text-xl">Estrategia</h3>
                                        <p className="text-gray-300 text-sm mt-2 leading-relaxed">Diseñamos tu plan de inversión a medida.</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};