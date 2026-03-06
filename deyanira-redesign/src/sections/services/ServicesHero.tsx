import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, TrendingUp, ShieldCheck, ChevronDown } from 'lucide-react';

export const ServicesHero = () => {
    // Colores Manual de Identidad
    const brand = {
        spaceCadet: "#19255B",
        seaSerpent: "#64C2C8",
        tuftsBlue: "#3CA0DA",
        lapisLazuli: "#3065AF",
        ghostWhite: "#F8FAFC"
    };

    return (
        <section
            className="relative overflow-hidden min-h-[90vh] md:min-h-screen flex items-center pt-32 pb-16 lg:pt-24 lg:pb-16 font-sans" // pt-32 en móvil para despegarlo del header
            style={{ backgroundColor: brand.spaceCadet }}
        >
            {/* Fondo decorativo */}
            <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: "url('/images/pattern.svg')" }}></div>

            {/* Luces volumétricas */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full blur-[80px] md:blur-[120px] -z-0 translate-x-1/4 -translate-y-1/4"
                style={{ backgroundColor: brand.seaSerpent }}
            />

            <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* COLUMNA IZQUIERDA: TEXTO */}
                    <div className="lg:col-span-7 text-center lg:text-left">

                        {/* Badge de Marca */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-3 py-2 px-5 rounded-full bg-white/5 border border-white/10 mb-6 md:mb-8 backdrop-blur-md"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: brand.seaSerpent }}></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ backgroundColor: brand.seaSerpent }}></span>
                            </span>
                            <span className="text-white text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase">Estrategia Personalizada 1:1</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl sm:text-6xl lg:text-8xl font-black text-white mb-6 md:mb-8 leading-[1.1] tracking-tight"
                        >
                            Tu dinero ya trabaja. <br />
                            <span className="text-transparent bg-clip-text italic font-serif"
                                style={{ backgroundImage: `linear-gradient(to right, ${brand.seaSerpent}, ${brand.tuftsBlue}, #FFFFFF)` }}>
                                Dale dirección.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-base md:text-xl text-blue-100/70 leading-relaxed max-w-2xl mb-10 md:mb-12 mx-auto lg:mx-0"
                        >
                            Si ya tienes el hábito del ahorro, necesitas la claridad de un plan experto.
                            Transforma tus activos en un <span className="text-white font-bold" style={{ color: brand.seaSerpent }}>patrimonio con propósito.</span>
                        </motion.p>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#contacto"
                                className="group relative overflow-hidden inline-flex justify-center items-center gap-3 px-10 py-5 text-sm md:text-base font-black rounded-2xl transition-all shadow-2xl"
                                style={{ backgroundColor: brand.seaSerpent, color: brand.spaceCadet }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
                                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform relative z-10" />
                                <span className="relative z-10 uppercase tracking-tight">Agendar Diagnóstico</span>
                            </motion.a>
                        </div>
                    </div>

                    {/* COLUMNA DERECHA: IMAGEN Y TARJETAS (Ajustada para móvil) */}
                    <div className="lg:col-span-5 relative mt-8 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative mx-auto w-[85%] sm:w-full max-w-md lg:max-w-full"
                        >
                            <div className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-[6px] md:border-[8px] border-white/5 group"
                                style={{ backgroundColor: brand.lapisLazuli }}>
                                <img
                                    src="/images/deyanira/DEY001.jpg"
                                    alt="Deyanira"
                                    className="w-full h-auto object-cover transition-transform duration-[2s] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#19255B]/80 via-transparent to-transparent"></div>
                            </div>

                            {/* Tarjetas flotantes: Ajustadas en tamaño y posición para móvil */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-2 md:-right-8 bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-3 md:gap-4 z-20"
                            >
                                <div className="p-2 rounded-lg shadow-lg" style={{ backgroundColor: brand.seaSerpent }}>
                                    <TrendingUp className="w-4 h-4 md:w-6 md:h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">Resultados</p>
                                    <p className="text-[11px] md:text-sm font-black" style={{ color: brand.spaceCadet }}>Rendimiento Real</p>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ x: [0, 6, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-6 -left-2 md:-left-8 p-4 md:p-5 rounded-2xl md:rounded-3xl shadow-2xl border border-white/10 flex items-center gap-3 md:gap-4 z-20 backdrop-blur-md"
                                style={{ backgroundColor: `${brand.spaceCadet}E6` }}
                            >
                                <div className="bg-white/10 p-2 md:p-3 rounded-full">
                                    <ShieldCheck className="w-5 h-5 md:w-7 md:h-7" style={{ color: brand.seaSerpent }} />
                                </div>
                                <div>
                                    <p className="text-[11px] md:text-sm font-black text-white leading-tight">Patrimonio</p>
                                    <p className="text-[8px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider">Blindaje Financiero</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Indicador de Scroll (Opcional, ayuda visual en móvil) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
                >
                    <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white/30">Scroll</span>
                    <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                        <ChevronDown size={20} className="text-white/20" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};