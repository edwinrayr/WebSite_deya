import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { XCircle, ArrowRight, Sparkles, ShieldCheck, Zap, AlertCircle, Ticket } from 'lucide-react';

export const Comparison = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // 1. Lógica de Mouse (Restaurada)
    const mouseX = useMotionValue(100);
    const smoothMouseX = useSpring(mouseX, { stiffness: 300, damping: 30 });

    // 2. Lógica de Scroll (Para mobile y entrada suave)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scrollValue = useTransform(scrollYProgress, [0.3, 0.6], [100, 0]);

    // Combinamos ambos: Si el mouse se mueve (m < 99), manda el mouse. Si no, manda el scroll.
    const finalX = useTransform([smoothMouseX, scrollValue], ([m, s]) => (m < 99 ? m : s));

    const clipPath = useTransform(finalX, (v) => `inset(0 0 0 ${v}%)`);
    const leftPos = useTransform(finalX, (v) => `${v}%`);
    const opacityNeg = useTransform(finalX, [0, 40], [0, 1]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const { left, width } = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        mouseX.set(Math.min(Math.max(x, 0), 100));
    };

    return (
        <section className="py-20 lg:py-32 bg-gray-50 overflow-hidden font-sans">
            <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">

                {/* --- HEADER --- */}
                <div className="max-w-3xl mb-16 space-y-4">
                    <div className="inline-flex items-center gap-3 py-2 px-5 rounded-full bg-space-cadet/5 backdrop-blur-md border border-space-cadet/10 mb-2">
                        <Ticket className="w-4 h-4 text-sea-serpent" />
                        <span className="text-space-cadet text-xs font-bold tracking-widest uppercase italic">Autodiagnóstico</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-space-cadet leading-[1.1]">
                        ¿Tu dinero está <span className="text-red-500 italic">estancado</span> <br />
                        o <span className="text-transparent bg-clip-text bg-gradient-to-r from-sea-serpent to-tufts-blue">creciendo?</span>
                    </h2>
                </div>

                {/* --- CONTENEDOR TIPO "ISLA" INTERACTIVO --- */}
                <div
                    ref={containerRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => mouseX.set(100)}
                    className="relative h-[800px] md:h-[600px] rounded-[3rem] lg:rounded-[4rem] overflow-hidden cursor-col-resize shadow-[0_30px_80px_-20px_rgba(25,37,91,0.2)] border border-white bg-white group"
                >
                    {/* --- CAPA BASE (DOLOR) --- */}
                    <motion.div
                        style={{ opacity: opacityNeg }}
                        className="absolute inset-0 flex items-center p-8 md:p-20 bg-slate-50"
                    >
                        <div className="w-full md:w-1/2 space-y-8 relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full border border-red-100">
                                <AlertCircle size={14} className="text-red-500" />
                                <span className="text-red-500 font-bold uppercase tracking-widest text-[10px]">Alerta de Riesgo Pasivo</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 leading-tight">
                                Estás en la <br /><span className="text-red-600 italic">Zona de Riesgo</span> si...
                            </h2>
                            <ul className="space-y-6">
                                {[{ t: "Inflación silenciosa", d: "Tu dinero pierde valor real cada día." }, { t: "Ahorro sin dirección", d: "Capital acumulado sin protección legal." }].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <div className="mt-1 p-2 bg-red-100 rounded-xl"><XCircle size={18} className="text-red-500" /></div>
                                        <div><p className="font-bold uppercase text-xs tracking-widest text-slate-700">{item.t}</p><p className="text-slate-500 text-xs mt-1">{item.d}</p></div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* --- CAPA SUPERIOR (SOLUCIÓN) --- */}
                    <motion.div
                        className="absolute inset-0 bg-space-cadet flex items-center p-8 md:p-20 overflow-hidden z-20"
                        style={{ clipPath }}
                    >
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tufts-blue/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sea-serpent/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

                        <div className="w-full flex justify-end relative z-20">
                            <div className="w-full md:w-1/2 space-y-8 text-right">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                                    <Zap size={14} className="text-sea-serpent fill-sea-serpent" />
                                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">Certeza Actuarial</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                                    Cruza a la <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sea-serpent to-tufts-blue">Libertad Real</span>
                                </h2>
                                <ul className="space-y-6">
                                    {[{ t: "Estrategia Blindada", d: "Protección real ante crisis." }, { t: "Interés Compuesto", d: "Tu dinero trabajando 24/7." }].map((item, i) => (
                                        <div key={i} className="flex flex-row-reverse gap-4 items-start">
                                            <div className="mt-1 p-2 bg-white/10 rounded-xl"><ArrowRight size={20} className="text-sea-serpent" /></div>
                                            <div><p className="text-xl md:text-2xl font-extrabold italic uppercase text-white leading-none">{item.t}</p><p className="text-gray-400 text-xs mt-1">{item.d}</p></div>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- BARRA SEPARADORA --- */}
                    <motion.div className="absolute top-0 bottom-0 w-[2px] bg-white/30 z-30 pointer-events-none" style={{ left: leftPos }}>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="bg-gradient-to-br from-sea-serpent to-tufts-blue p-4 rounded-2xl shadow-2xl text-white border border-white/20">
                                <ShieldCheck size={28} />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* --- BOTÓN DE ACCIÓN (FUERA PARA MÁXIMA RESPUESTA) --- */}
                <div className="mt-12 flex justify-center relative z-50">
                    <a
                        href="https://wa.me/5520934484"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center gap-4 bg-space-cadet text-white px-12 py-6 rounded-[2rem] font-black text-xl hover:bg-sea-serpent transition-all duration-300 shadow-xl overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out]"></div>
                        <span className="relative z-10 flex items-center gap-3">
                            ¡AGENDAR MI RUTA!
                            <Sparkles size={24} className="group-hover:rotate-12 transition-transform" />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};