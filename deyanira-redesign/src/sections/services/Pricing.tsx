import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, ArrowRight, Star, ShieldCheck, Monitor, TrendingUp, Sparkles } from 'lucide-react';

export const Pricing = () => {
    const brand = {
        spaceCadet: "#19255B",
        seaSerpent: "#64C2C8",
        tuftsBlue: "#3CA0DA",
        lapisLazuli: "#3065AF",
        ghostWhite: "#F8FAFC"
    };

    const features = [
        "1 sesión de diagnóstico financiero 1:1 conmigo por zoom.",
        "1 sesión de estrategia 1:1 conmigo por zoom (Dónde, cuánto y cómo invertir).",
        "Hoja de Diagnóstico Profesional.",
        "Hoja de Plan de Inversión Personalizado.",
        "Acceso a clases exclusivas mensuales por 1 año.",
        "2 revisiones adicionales en los meses 6 y 12."
    ];

    return (
        <section className="py-28 relative overflow-hidden font-sans" style={{ backgroundColor: brand.ghostWhite }}>

            {/* --- ELEMENTOS DE FONDO OPTIMIZADOS (Más pequeños y fluidos) --- */}

            {/* Orbe 1 Pequeño - Movimiento muy sutil */}
            <motion.div
                animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-10 left-10 w-[250px] h-[250px] rounded-full blur-[80px] pointer-events-none opacity-10"
                style={{ backgroundColor: brand.seaSerpent }}
            />

            {/* Orbe 2 Pequeño */}
            <motion.div
                animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-20 right-10 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none opacity-10"
                style={{ backgroundColor: brand.lapisLazuli }}
            />

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">

                {/* Cabecera */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight leading-[1.1]" style={{ color: brand.spaceCadet }}>
                        ¿QUÉ INCLUYE TU <span style={{ color: brand.lapisLazuli }}>ESTRATEGIA PERSONALIZADA</span>?
                    </h2>
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border bg-white/50" style={{ borderColor: `${brand.lapisLazuli}30` }}>
                        <TrendingUp size={18} style={{ color: brand.seaSerpent }} />
                        <p className="text-slate-600 font-extrabold text-lg italic tracking-tight">Plan "Alas del Éxito Financiero"</p>
                    </div>
                </div>

                {/* Tarjeta Unificada */}
                <div className="relative bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">

                    {/* Contenido Izquierdo */}
                    <div className="flex-[1.3] p-10 md:p-16">
                        <div className="mb-10 flex items-center gap-3">
                            <Zap size={22} style={{ color: brand.seaSerpent }} fill={brand.seaSerpent} />
                            <span className="font-black text-xs tracking-[0.25em] uppercase" style={{ color: brand.spaceCadet }}>BENEFICIOS EXCLUSIVOS</span>
                        </div>

                        <div className="space-y-6">
                            {features.map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="mt-1 flex-shrink-0">
                                        <CheckCircle2 size={20} style={{ color: brand.seaSerpent }} />
                                    </div>
                                    <span className="text-lg font-bold text-slate-700 leading-snug tracking-tight">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-5 rounded-2xl border border-dashed flex items-center gap-4 bg-slate-50/50" style={{ borderColor: brand.seaSerpent }}>
                            <Monitor size={24} style={{ color: brand.lapisLazuli }} className="opacity-70" />
                            <p className="text-xs font-black uppercase text-slate-400 tracking-wider">Sesiones 1:1 vía Zoom con instituciones reguladas</p>
                        </div>
                    </div>

                    {/* Contenido Derecho (CTA) - Animación de Precio Optimizada */}
                    <div className="flex-1 p-12 md:p-16 text-center flex flex-col justify-center items-center text-white relative" style={{ backgroundColor: brand.spaceCadet }}>

                        <div className="relative z-10 w-full flex flex-col items-center">
                            <span className="block mb-2 text-white/40 font-bold line-through text-lg tracking-tight tracking-widest">VALOR REAL: $15,000 MXN</span>

                            <p className="text-[11px] font-black tracking-[0.4em] mb-4 uppercase" style={{ color: brand.seaSerpent }}>OFERTA VIP ÚNICA</p>

                            {/* PRECIO: Animación simplificada para evitar lag */}
                            <motion.div
                                className="mb-12"
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <span className="text-7xl md:text-8xl font-black tracking-tighter text-white">$4,999</span>
                                <span className="text-2xl font-bold ml-1 text-white/80">MXN</span>
                            </motion.div>

                            <div className="flex items-center justify-center gap-3 mb-12 bg-white/5 py-2 px-6 rounded-full border border-white/10">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_red]" />
                                <span className="text-[10px] font-black italic tracking-[0.2em] uppercase text-white">¡Cupos limitados!</span>
                            </div>

                            {/* BOTÓN CON SHIMMER REESTRUCTURADO */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full relative overflow-hidden py-6 rounded-3xl text-white font-black text-2xl transition-all shadow-2xl"
                                style={{
                                    background: `linear-gradient(135deg, ${brand.lapisLazuli} 0%, ${brand.spaceCadet} 100%)`,
                                    border: `1px solid ${brand.tuftsBlue}50`
                                }}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3 uppercase">
                                    ¡Quiero mi Estrategia!
                                    <ArrowRight size={26} />
                                </span>
                            </motion.button>

                            <div className="mt-12 flex justify-center items-center gap-8 opacity-40">
                                <ShieldCheck size={24} />
                                <div className="w-px h-8 bg-white/20"></div>
                                <Star size={24} fill="currentColor" stroke="none" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};