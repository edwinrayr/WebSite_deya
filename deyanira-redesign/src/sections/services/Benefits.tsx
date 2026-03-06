import React from 'react';
import { motion } from 'framer-motion';
// He actualizado algunos iconos para que sean más coherentes con el nuevo enfoque emocional
import { Wallet, ShieldCheck, TrendingUp, PieChart, CheckCircle2, ArrowRight, Sun, Coffee, Heart, Trophy } from 'lucide-react';

export const Benefits = () => {
    // HE ADAPTADO LOS TEXTOS: Mantenemos el título del pilar, 
    // pero la descripción y los detalles ahora hablan de BENEFICIOS EMOCIONALES.
    const data = [
        {
            title: "Ahorro Inteligente", // Título Original
            desc: "Imagina abrir tu banca móvil y sentir orgullo en lugar de ansiedad. Creamos un sistema de ahorro sistemático que no duele y construye tu paz.",
            icon: <Sun size={28} />, // Icono de Paz/Claridad
            details: ["Orgullo financiero", "Fondo de paz real"],
            color: "blue"
        },
        {
            title: "Estrategias Eficientes", // Título Original
            desc: "Deja de trabajar solo para pagar facturas y deudas. Reestructuramos tus flujos para que recuperes el control de tu tiempo y tu dinero.",
            icon: <Coffee size={28} />, // Icono de Tiempo/Control
            details: ["Tranquilidad mensual", "Cero fugas de dinero"],
            color: "sky"
        },
        {
            title: "Protección Patrimonial", // Título Original
            desc: "Blindamos lo que más amas: tu familia, salud y hogar. Tu futuro y el de ellos será innegociable, ante cualquier imprevisto.",
            icon: <Heart size={28} />, // Icono de Familia/Cuidado
            details: ["Futuro asegurado", "Blindaje total"],
            color: "indigo"
        },
        {
            title: "Crecimiento Seguro", // Título Original
            desc: "Ponemos tu excedente a trabajar en instituciones reguladas. Tu jubilación no será una preocupación, será tu mejor etapa.",
            icon: <Trophy size={28} />, // Icono de Éxito/Logro
            details: ["Crecimiento exponencial", "Seguridad legal total"],
            color: "cyan"
        }
    ];

    return (
        <section className="py-28 bg-white text-slate-900 relative">

            {/* Pequeño detalle visual de fondo para que no se vea "plano", sin saturar */}
            <div className="absolute inset-0 opacity-[0.2]"
                style={{ backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

            <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">

                {/* Título de Sección Potente */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-600 mb-6"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Tu nueva realidad financiera</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter leading-[1.1]">
                        Construye una vida donde el dinero <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600 italic font-serif">no sea el límite.</span>
                    </h2>
                </div>

                {/* GRILLA DE BENEFICIOS: Mantengo la estructura original de 4 columnas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {data.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            // Diseño limpio en blanco, con sombras suaves y hover sutil
                            className="group p-10 rounded-[3rem] bg-white border border-slate-100 hover:border-sky-200 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1"
                        >
                            <div className={`mb-10 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 
                                ${item.color === 'blue' ? 'bg-blue-50 text-blue-500 group-hover:bg-blue-600' : ''}
                                ${item.color === 'sky' ? 'bg-sky-50 text-sky-500 group-hover:bg-sky-600' : ''}
                                ${item.color === 'indigo' ? 'bg-indigo-50 text-indigo-500 group-hover:bg-indigo-600' : ''}
                                ${item.color === 'cyan' ? 'bg-cyan-50 text-cyan-500 group-hover:bg-cyan-600' : ''}
                                group-hover:text-white group-hover:shadow-lg`}
                            >
                                {item.icon}
                            </div>

                            <h4 className="text-2xl font-bold text-slate-950 mb-4 tracking-tight">{item.title}</h4>
                            <p className="text-slate-600 mb-10 text-sm leading-relaxed min-h-[70px]">
                                {item.desc}
                            </p>

                            <ul className="space-y-4 pt-8 border-t border-slate-100">
                                {item.details.map((d, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-[0.1em]">
                                        <CheckCircle2 size={14} className="text-sky-500" />
                                        {d}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* BOTÓN DE ACCIÓN: Reubicado al final de la grilla para un cierre natural */}
                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <button className="bg-slate-950 hover:bg-sky-600 text-white px-12 py-6 rounded-2xl font-black text-lg transition-all flex items-center gap-4 shadow-2xl active:scale-95 hover:-translate-y-1 group">
                            EMPEZAR MI TRANSFORMACIÓN <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};