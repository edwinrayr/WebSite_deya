// src/sections/about/AboutHero.tsx
import { Award, ShieldCheck, Target, Star } from 'lucide-react';

export const AboutHero = () => {
    return (
        // 1. ESPACIADOS IDÉNTICOS AL HOME: min-h-screen, flex items-center, pt-24 pb-12 lg:pt-28 lg:pb-16
        <section className="relative bg-space-cadet min-h-screen flex items-center pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden z-0">

            {/* Efectos de luces volumétricas de fondo (Estilo oscuro) */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-tufts-blue/10 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sea-serpent/10 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3"></div>
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.03] mix-blend-overlay -z-10"></div>

            <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative">
                {/* 2. GRID IDÉNTICO AL HOME: 12 columnas, gap-12 lg:gap-16 */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* --- COLUMNA DE TEXTO (7 Columnas, igual que el Home) --- */}
                    <div className="lg:col-span-7 text-center lg:text-left relative z-10">

                        {/* Badge VIP */}
                        <div className="inline-flex items-center gap-3 py-2 px-5 rounded-full bg-white/5 border border-white/10 shadow-sm mb-8 backdrop-blur-md">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sea-serpent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-sea-serpent"></span>
                            </span>
                            <span className="text-white text-sm font-black tracking-wider uppercase">
                                Conoce a Deyanira
                            </span>
                        </div>

                        {/* Título Monumental - Tamaños idénticos al Home */}
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.1]">
                            Educación <br className="hidden md:block" />
                            financiera con <br className="hidden md:block" />
                            <span className="relative inline-block">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sea-serpent to-tufts-blue">
                                    resultados.
                                </span>
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                            Apasionada por las matemáticas. Convencida de que el conocimiento es la llave maestra para transformar números en tranquilidad y legados reales para tu familia.
                        </p>

                        {/* Bloque de Autoridad (Ocupa el lugar donde van los botones en el Home) */}
                        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                            <div className="flex items-center gap-4 group cursor-default">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-tufts-blue/20 transition-colors">
                                    <Award className="w-6 h-6 text-tufts-blue" />
                                </div>
                                <div className="text-left">
                                    <p className="text-white font-extrabold text-lg leading-tight">MDRT Member</p>
                                    <p className="text-gray-400 text-sm">Top 3% Mundial</p>
                                </div>
                            </div>

                            {/* Separador vertical en desktop */}
                            <div className="hidden sm:block w-px h-10 bg-white/10"></div>

                            <div className="flex items-center gap-4 group cursor-default">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-sea-serpent/20 transition-colors">
                                    <ShieldCheck className="w-6 h-6 text-sea-serpent" />
                                </div>
                                <div className="text-left">
                                    <p className="text-white font-extrabold text-lg leading-tight">Asesora CNSF</p>
                                    <p className="text-gray-400 text-sm">Práctica Regulada</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- COLUMNA DE IMAGEN (5 Columnas, igual que el Home) --- */}
                    <div className="lg:col-span-5 relative lg:pl-10 mt-10 lg:mt-0">

                        {/* Círculo decorativo giratorio */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full border-[1px] border-dashed border-tufts-blue/30 animate-[spin_60s_linear_infinite] -z-10"></div>

                        {/* Contenedor principal - Dimensiones y anchos idénticos al Home */}
                        <div className="relative mx-auto w-full max-w-sm lg:max-w-full">

                            {/* 3. IMAGEN NO ENORME: Usamos aspect-[3/4] exacto para que no se deforme */}
                            <div className="relative rounded-[3rem] shadow-2xl overflow-hidden aspect-[3/4] bg-space-cadet border border-white/20 group">
                                <img
                                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                    src="/images/deyanira/IMG_7947.jpg"
                                    alt="Deyanira Mariscal"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-space-cadet/80 via-transparent to-transparent opacity-80"></div>
                            </div>

                            {/* Tarjeta Flotante (Glassmorphism asimétrico) */}
                            <div className="absolute -bottom-6 -left-6 sm:-left-10 bg-white/10 backdrop-blur-2xl border border-white/20 p-4 sm:p-5 rounded-3xl shadow-2xl flex items-center gap-4 hover:-translate-y-2 transition-transform duration-300 z-20">
                                <div className="bg-sea-serpent p-3 rounded-xl shadow-lg shadow-sea-serpent/30">
                                    <Target className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-white font-black text-base sm:text-lg">Objetividad</p>
                                    <p className="text-gray-300 text-xs sm:text-sm font-medium">Asesora Independiente</p>
                                </div>
                            </div>

                            {/* Tarjeta Flotante Derecha Arriba */}
                            <div className="absolute top-10 -right-6 sm:-right-8 bg-white/10 backdrop-blur-2xl border border-white/20 p-3 rounded-2xl shadow-xl flex items-center justify-center gap-2 z-20 animate-[bounce_4s_ease-in-out_infinite]">
                                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                <span className="text-white text-xs font-bold uppercase tracking-wider">Premium</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};