import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { XCircle, CheckCircle2, ArrowRight, Sparkles, ShieldCheck, Zap, AlertCircle } from 'lucide-react';

export const Comparison = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // 1. Lógica para Desktop (Mouse)
    const mouseX = useMotionValue(100);
    const smoothMouseX = useSpring(mouseX, { stiffness: 300, damping: 30 });

    // 2. Lógica para Mobile (Scroll)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // En mobile, el scroll revela la parte buena de derecha a izquierda (100 a 0)
    const scrollValue = useTransform(scrollYProgress, [0.3, 0.6], [100, 0]);

    // Combinamos: Si el mouse no se ha movido (está en 100), manda el scroll
    const finalX = useTransform([smoothMouseX, scrollValue], ([m, s]) => {
        return m < 99 ? m : s;
    });

    // Estilos dinámicos
    const clipPath = useTransform(finalX, (v) => `inset(0 0 0 ${v}%)`);
    const leftPos = useTransform(finalX, (v) => `${v}%`);
    const opacityNeg = useTransform(finalX, [0, 40], [0, 1]);

    // Animación de pálpito para el texto de alerta
    const alertPulse = {
        scale: [1, 1.05, 1],
        opacity: [1, 0.7, 1],
        transition: {
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const { left, width } = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        mouseX.set(Math.min(Math.max(x, 0), 100));
    };

    return (
        <section className="py-24 bg-white overflow-hidden font-sans">
            <div className="max-w-[1200px] mx-auto px-6">

                <div className="text-center mb-16 space-y-4">
                    <h3 className="text-slate-400 font-black tracking-[0.3em] uppercase text-[10px]">Autodiagnóstico Financiero</h3>
                    <h2 className="text-4xl md:text-5xl font-black text-space-cadet uppercase italic leading-none">
                        ¿Tu dinero está <span className="text-red-400">estancado</span> <br className="md:hidden" /> o <span className="text-sea-serpent">creciendo</span>?
                    </h2>
                </div>

                <div
                    ref={containerRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => mouseX.set(100)}
                    className="relative h-[750px] md:h-[600px] rounded-[3rem] md:rounded-[4rem] overflow-hidden cursor-col-resize shadow-2xl border border-slate-100 bg-slate-50"
                >
                    {/* --- CAPA BASE (ABAJO): EL DOLOR / INCERTIDUMBRE --- */}
                    <motion.div
                        style={{ opacity: opacityNeg }}
                        className="absolute inset-0 flex items-center p-8 md:p-20 bg-slate-100"
                    >
                        <div className="w-full md:w-1/2 space-y-8 relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full border border-red-200">
                                <AlertCircle size={14} className="text-red-500" />
                                <span className="text-red-500 font-black uppercase tracking-widest text-[8px] md:text-[10px]">Alerta de Riesgo Pasivo</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-black text-slate-400 italic leading-tight uppercase">
                                Estás en la <br />
                                <motion.span
                                    animate={alertPulse}
                                    className="text-red-600 font-black inline-block drop-shadow-sm"
                                >
                                    Zona de Riesgo
                                </motion.span> si...
                            </h2>

                            <ul className="space-y-6">
                                {[
                                    { t: "Inflación silenciosa", d: "Tu dinero pierde valor real cada día que no lo inviertes." },
                                    { t: "Ahorro sin dirección", d: "Capital acumulado sin metas protegidas legalmente." },
                                    { t: "Futuro incierto", d: "Dudas constantes sobre si tu retiro será digno." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start text-slate-400 group">
                                        <XCircle size={20} className="mt-1 shrink-0 opacity-40 group-hover:text-red-500 transition-all" />
                                        <div>
                                            <p className="font-bold uppercase text-xs md:text-sm tracking-widest text-slate-500 group-hover:text-slate-800 transition-colors">{item.t}</p>
                                            <p className="text-[11px] md:text-xs font-medium opacity-70 mt-1 leading-relaxed">{item.d}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* --- CAPA SUPERIOR (ARRIBA): LA SOLUCIÓN / THE MONEY BRIDGE --- */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-space-cadet via-lapis-lazuli to-tufts-blue flex items-center p-8 md:p-20 overflow-hidden z-20"
                        style={{ clipPath }}
                    >
                        <div className="w-full flex justify-end relative z-20">
                            <div className="w-full md:w-1/2 space-y-8 text-white text-right md:text-left">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-sea-serpent/20 rounded-full border border-sea-serpent/30">
                                    <Zap size={14} className="text-sea-serpent fill-sea-serpent" />
                                    <span className="text-sea-serpent text-[10px] font-black uppercase tracking-widest">Certeza Actuarial</span>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-black italic leading-tight uppercase">
                                    Cruza a la <br /> <span className="text-sea-serpent">Libertad Real</span>
                                </h2>

                                <ul className="space-y-6">
                                    {[
                                        { t: "Estrategia Blindada", d: "Protección real ante inflación y crisis de mercado." },
                                        { t: "Interés Compuesto", d: "Tu dinero trabajando 24/7 bajo tu control absoluto." },
                                        { t: "Paz Mental Total", d: "Saber que tu futuro está asegurado hoy." }
                                    ].map((item, i) => (
                                        <motion.li key={i} whileHover={{ x: -10 }} className="flex md:flex-row-reverse gap-5 group cursor-default items-center md:items-start md:justify-end">
                                            <div className="p-2 bg-sea-serpent/10 rounded-xl group-hover:bg-sea-serpent transition-colors duration-300">
                                                <ArrowRight size={22} className="text-sea-serpent group-hover:text-space-cadet transition-colors" />
                                            </div>
                                            <div className="text-right">
                                                <p className="text-xl md:text-2xl font-black tracking-tight leading-none italic uppercase text-white group-hover:text-sea-serpent transition-colors">{item.t}</p>
                                                <p className="text-xs md:text-sm text-blue-100/70 mt-1 font-medium leading-relaxed">{item.d}</p>
                                            </div>
                                        </motion.li>
                                    ))}
                                </ul>

                                <button className="bg-sea-serpent text-space-cadet w-full md:w-auto px-12 py-6 rounded-[2rem] font-black text-xl flex items-center justify-center gap-4 hover:bg-white transition-all shadow-xl group">
                                    ¡AGENDAR RUTA!
                                    <Sparkles size={24} className="group-hover:rotate-12 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- BARRA SEPARADORA --- */}
                    <motion.div
                        className="absolute top-0 bottom-0 w-[4px] bg-sea-serpent z-30 shadow-[0_0_40px_rgba(0,180,216,1)]"
                        style={{ left: leftPos }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="bg-sea-serpent p-4 rounded-full shadow-2xl text-space-cadet border-4 border-white/20"
                            >
                                <ShieldCheck size={32} />
                            </motion.div>
                            <div className="bg-space-cadet/90 backdrop-blur-sm text-white text-[9px] font-black px-4 py-2 rounded-full whitespace-nowrap uppercase tracking-[0.2em] border border-sea-serpent/50 md:hidden shadow-lg">
                                Haz Scroll ↓
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};