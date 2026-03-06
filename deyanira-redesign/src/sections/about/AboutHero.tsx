// src/sections/about/AboutHero.tsx
import { Award, TrendingUp, ShieldCheck, Star } from 'lucide-react';

export const AboutHero = () => {
    return (
        <section className="relative bg-space-cadet min-h-screen flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden z-0">

            {/* Efectos de Luces Premium (Fondo) */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-tufts-blue/10 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sea-serpent/15 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

            <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

                {/* Diseño Editorial: Contenedor Principal Centralizado */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">

                    {/* --- Bloque Izquierdo: Tipografía Gigante --- */}
                    <div className="w-full lg:w-5/12 text-center lg:text-right relative z-20">
                        <div className="inline-flex lg:hidden items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-sea-serpent animate-pulse"></span>
                            <span className="text-white text-xs font-bold tracking-wider uppercase">
                                Conoce a Deyanira
                            </span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-extrabold text-white tracking-tight leading-[1] mb-6">
                            El <span className="text-transparent bg-clip-text bg-gradient-to-r from-sea-serpent to-tufts-blue">arte</span> de <br />
                            multiplicar
                        </h1>
                        <p className="text-lg text-gray-300 leading-relaxed max-w-sm mx-auto lg:ml-auto lg:mr-0">
                            Apasionada por las matemáticas. Dedicada a transformar números en tranquilidad y legados reales para tu familia.
                        </p>
                    </div>

                    {/* --- Bloque Central: La Imagen en Píldora (Pill Shape) --- */}
                    <div className="w-full lg:w-3/12 flex justify-center relative group">

                        {/* Círculo giratorio detrás de la foto */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square rounded-full border-t border-r border-tufts-blue/40 animate-[spin_20s_linear_infinite] -z-10"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] aspect-square rounded-full border-b border-l border-sea-serpent/30 animate-[spin_30s_linear_infinite_reverse] -z-10"></div>

                        {/* Contenedor de Foto tipo Píldora */}
                        <div className="relative w-64 sm:w-80 lg:w-full max-w-[320px] rounded-full overflow-hidden aspect-[1/2] border-4 border-space-cadet shadow-[0_0_50px_rgba(100,194,200,0.15)] transform transition-transform duration-700 group-hover:scale-105 z-10 bg-white">
                            {/* NUEVA FOTO PARA EVITAR REPETICIONES */}
                            <img
                                src="/images/deyanira/IMG_7942.jpg"
                                alt="Deyanira Mariscal Perfil"
                                className="absolute inset-0 w-full h-full object-cover object-top"
                            />
                            {/* Gradiente interno para resaltar */}
                            <div className="absolute inset-0 bg-gradient-to-t from-space-cadet/80 via-transparent to-transparent opacity-80"></div>
                        </div>

                        {/* Tarjeta Flotante Central (Orbita la píldora en pantallas grandes) */}
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[110%] sm:w-auto bg-white/10 backdrop-blur-2xl border border-white/20 p-4 sm:px-6 sm:py-4 rounded-3xl shadow-2xl flex items-center justify-center gap-3 z-20 group-hover:-translate-y-2 transition-transform duration-500">
                            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            <span className="text-white font-bold text-sm sm:text-base whitespace-nowrap">Top 3% Mundial</span>
                        </div>
                    </div>

                    {/* --- Bloque Derecho: Autoridad Orbitante --- */}
                    <div className="w-full lg:w-4/12 flex flex-col items-center lg:items-start justify-center gap-6 relative z-20">

                        {/* Etiqueta visible solo en PC */}
                        <div className="hidden lg:inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 mb-2 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-tufts-blue animate-pulse"></span>
                            <span className="text-white text-xs font-bold tracking-wider uppercase">
                                Respaldo Oficial
                            </span>
                        </div>

                        {/* Tarjeta MDRT */}
                        <div className="group/card flex items-center gap-5 bg-white/5 backdrop-blur-lg border border-white/10 p-5 rounded-3xl w-full max-w-sm hover:bg-white/10 transition-all duration-300 hover:translate-x-2">
                            <div className="w-14 h-14 rounded-2xl bg-tufts-blue/20 flex items-center justify-center flex-shrink-0 group-hover/card:bg-tufts-blue transition-colors duration-300">
                                <Award className="w-7 h-7 text-tufts-blue group-hover/card:text-white transition-colors" />
                            </div>
                            <div>
                                <p className="text-white font-black text-lg">MDRT Member</p>
                                <p className="text-gray-400 text-sm font-medium">Asociación Global</p>
                            </div>
                        </div>

                        {/* Tarjeta CNSF */}
                        <div className="group/card flex items-center gap-5 bg-white/5 backdrop-blur-lg border border-white/10 p-5 rounded-3xl w-full max-w-sm lg:ml-8 hover:bg-white/10 transition-all duration-300 hover:translate-x-2">
                            <div className="w-14 h-14 rounded-2xl bg-sea-serpent/20 flex items-center justify-center flex-shrink-0 group-hover/card:bg-sea-serpent transition-colors duration-300">
                                <ShieldCheck className="w-7 h-7 text-sea-serpent group-hover/card:text-space-cadet transition-colors" />
                            </div>
                            <div>
                                <p className="text-white font-black text-lg">Asesora CNSF</p>
                                <p className="text-gray-400 text-sm font-medium">Práctica Regulada</p>
                            </div>
                        </div>

                        {/* Tarjeta Crecimiento */}
                        <div className="group/card flex items-center gap-5 bg-white/5 backdrop-blur-lg border border-white/10 p-5 rounded-3xl w-full max-w-sm hover:bg-white/10 transition-all duration-300 hover:translate-x-2">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-sea-serpent to-tufts-blue flex items-center justify-center flex-shrink-0">
                                <TrendingUp className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <p className="text-white font-black text-lg">Independiente</p>
                                <p className="text-gray-400 text-sm font-medium">100% Objetiva</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};