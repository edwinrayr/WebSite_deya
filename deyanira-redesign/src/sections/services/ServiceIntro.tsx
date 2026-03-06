import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, Target, HeartHandshake, Quote, Zap } from 'lucide-react';

// Componente Counter optimizado para repetirse al hacer scroll
const Counter = ({ value, duration = 2.5 }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const ref = useRef(null);

    // CAMBIO CLAVE: once: false permite que la animación ocurra cada vez que entra en pantalla
    const isInView = useInView(ref, { once: false, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            const target = parseInt(value.replace(/[^0-9]/g, ''));
            let start = 0;
            const startTime = performance.now();

            const updateCount = (currentTime) => {
                const elapsedTime = (currentTime - startTime) / 1000;
                const progress = Math.min(elapsedTime / duration, 1);
                const easeOutProgress = 1 - Math.pow(1 - progress, 3);
                const currentCount = Math.floor(easeOutProgress * target);

                setDisplayValue(currentCount);

                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                }
            };
            requestAnimationFrame(updateCount);
        } else {
            // Opcional: Reiniciar a 0 cuando sale de vista para que el efecto sea total al volver
            setDisplayValue(0);
        }
    }, [isInView, value, duration]);

    return (
        <span ref={ref} className="tabular-nums">
            {value.includes('+') && '+'}
            {displayValue.toLocaleString()}
            {value.includes('%') && '%'}
        </span>
    );
};

export const ServiceIntro = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    return (
        <section className="py-20 md:py-32 bg-slate-50/50 overflow-hidden font-sans">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* LADO IZQUIERDO: CONTENIDO */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={staggerContainer}
                        className="w-full lg:w-1/2 space-y-8 md:space-y-10"
                    >
                        {/* Badge Responsivo */}
                        <motion.div variants={fadeInUp} className="relative inline-block">
                            <div className="absolute inset-0 bg-sea-serpent/20 blur-xl rounded-full" />
                            <div className="relative flex items-center gap-3 px-5 py-2 bg-white border border-slate-200 rounded-full shadow-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sea-serpent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-sea-serpent"></span>
                                </span>
                                <span className="text-[9px] md:text-[10px] font-black text-slate-900 uppercase tracking-[0.3em]">The Money Bridge</span>
                            </div>
                        </motion.div>

                        <div className="space-y-6">
                            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] md:leading-none">
                                Más que ahorro, <br />
                                <span className="text-tufts-blue italic font-serif">es tu legado.</span>
                            </motion.h2>

                            <motion.p variants={fadeInUp} className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-lg">
                                Diseñamos rutas financieras con la precisión técnica de <strong>actuarios especializados</strong> y la calidez de un aliado.
                            </motion.p>
                        </div>

                        {/* STATS RESPONSIVOS */}
                        <motion.div variants={fadeInUp} className="flex flex-row gap-8 md:gap-12 items-center pt-4">
                            <div className="relative group">
                                <div className="text-4xl md:text-5xl font-black text-space-cadet tracking-tighter">
                                    <Counter value="100%" duration={2} />
                                </div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">Personalizado</p>
                            </div>

                            <div className="h-10 w-[1px] bg-slate-200 rotate-12" />

                            <div className="relative group">
                                <div className="text-4xl md:text-5xl font-black text-tufts-blue tracking-tighter">
                                    <Counter value="+1000" duration={2.5} />
                                </div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">Casos de Éxito</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* LADO DERECHO: GRID DE TARJETAS */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        variants={staggerContainer}
                        className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 relative"
                    >
                        {/* TARJETA 1 */}
                        <motion.div
                            variants={fadeInUp}
                            whileHover={{ y: -8 }}
                            className="group p-8 bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-200 shadow-lg shadow-slate-200/40 transition-all duration-300"
                        >
                            <ShieldCheck className="w-10 h-10 text-sea-serpent mb-6 group-hover:scale-110 transition-transform" />
                            <h4 className="font-bold text-slate-900 text-xl mb-3">Seguridad Blindada</h4>
                            <p className="text-sm text-slate-500 leading-relaxed">Instrumentos regulados por CNBV, Banxico y Hacienda.</p>
                        </motion.div>

                        {/* TARJETA 2: ESTRATEGIA 360 */}
                        <motion.div
                            variants={fadeInUp}
                            whileHover={{ y: -8 }}
                            className="p-8 bg-space-cadet rounded-[2rem] md:rounded-[2.5rem] text-white shadow-xl relative group overflow-hidden transition-all duration-300"
                        >
                            <Target className="w-10 h-10 text-sea-serpent mb-6 group-hover:rotate-12 transition-transform" />
                            <h4 className="font-bold text-xl mb-3 italic">Estrategia 360°</h4>
                            <p className="text-sm text-blue-100/60 leading-relaxed">Metas reales a corto, mediano y largo plazo.</p>
                        </motion.div>

                        {/* TARJETA 3 */}
                        <motion.div
                            variants={fadeInUp}
                            whileHover={{ y: -8 }}
                            className="p-8 bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-200 shadow-lg shadow-slate-200/40 transition-all duration-300"
                        >
                            <HeartHandshake className="w-10 h-10 text-tufts-blue mb-6 group-hover:scale-110 transition-transform" />
                            <h4 className="font-bold text-slate-900 text-xl mb-3">Acompañamiento</h4>
                            <p className="text-sm text-slate-500 leading-relaxed">Revisiones constantes para ajustar tu ruta al éxito.</p>
                        </motion.div>

                        {/* TARJETA 4: FRASE DINÁMICA */}
                        <motion.div variants={fadeInUp} className="sm:translate-y-6">
                            <div className="h-full bg-gradient-to-br from-tufts-blue to-blue-800 rounded-[2rem] md:rounded-[2.5rem] p-8 text-white flex flex-col justify-between shadow-xl">
                                <Quote className="w-8 h-8 text-white/20 mb-4" />
                                <p className="text-lg md:text-xl font-medium italic leading-snug">
                                    "Tu tranquilidad financiera es el mejor rendimiento..."
                                </p>
                                <div className="mt-8 flex items-center gap-3">
                                    <div className="h-[1px] w-8 bg-sea-serpent" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-sea-serpent">The Money Bridge</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};