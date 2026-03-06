import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Sun, Coffee, Heart, Trophy, Sparkles } from 'lucide-react';

export const Benefits = () => {
    // Paleta Oficial del Manual
    const brand = {
        spaceCadet: "#19255B",
        seaSerpent: "#64C2C8",
        tuftsBlue: "#3CA0DA",
        lapisLazuli: "#3065AF",
        ghostWhite: "#F8FAFC"
    };

    const data = [
        {
            title: "Ahorro Inteligente",
            desc: "Imagina abrir tu banca móvil y sentir orgullo en lugar de ansiedad. Creamos un sistema de ahorro sistemático que no duele y construye tu paz.",
            icon: Sun,
            details: ["Orgullo financiero", "Fondo de paz real"],
            color: brand.lapisLazuli
        },
        {
            title: "Estrategias Eficientes",
            desc: "Deja de trabajar solo para pagar facturas y deudas. Reestructuramos tus flujos para que recuperes el control de tu tiempo y tu dinero.",
            icon: Coffee,
            details: ["Tranquilidad mensual", "Cero fugas de dinero"],
            color: brand.tuftsBlue
        },
        {
            title: "Protección Patrimonial",
            desc: "Blindamos lo que más amas: tu familia, salud y hogar. Tu futuro y el de ellos será innegociable, ante cualquier imprevisto.",
            icon: Heart,
            details: ["Futuro asegurado", "Blindaje total"],
            color: brand.spaceCadet
        },
        {
            title: "Crecimiento Seguro",
            desc: "Ponemos tu excedente a trabajar en instituciones reguladas. Tu jubilación no será una preocupación, será tu mejor etapa.",
            icon: Trophy,
            details: ["Crecimiento exponencial", "Seguridad legal total"],
            color: brand.seaSerpent
        }
    ];

    return (
        <section className="py-28 relative overflow-hidden font-sans" style={{ backgroundColor: brand.ghostWhite }}>

            {/* Patrón de fondo institucional del Manual */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(${brand.spaceCadet} 1.5px, transparent 1.5px)`,
                    backgroundSize: '48px 48px'
                }}
            />

            <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">

                {/* Título de Sección con Tipografía de Marca */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8"
                        style={{ backgroundColor: `${brand.spaceCadet}08`, border: `1px solid ${brand.spaceCadet}15` }}
                    >
                        <Sparkles size={14} style={{ color: brand.seaSerpent }} />
                        <span className="text-[11px] font-black uppercase tracking-[0.4em]" style={{ color: brand.lapisLazuli }}>
                            Tu nueva realidad financiera
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6" style={{ color: brand.spaceCadet }}>
                        Construye una vida donde el dinero <br />
                        <span className="italic text-transparent bg-clip-text bg-gradient-to-r"
                            style={{
                                backgroundImage: `linear-gradient(to right, ${brand.seaSerpent}, ${brand.tuftsBlue}, ${brand.lapisLazuli})`,
                                WebkitBackgroundClip: 'text'
                            }}>
                            no sea el límite.
                        </span>
                    </h2>
                </div>

                {/* GRILLA DE BENEFICIOS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {data.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-10 rounded-[3rem] bg-white border border-slate-100 shadow-[0_10px_40px_rgba(25,37,91,0.03)] hover:shadow-[0_40px_80px_-15px_rgba(25,37,91,0.08)] transition-all duration-500 hover:-translate-y-3"
                            >
                                <div
                                    className="mb-10 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                                >
                                    <Icon size={28} />
                                </div>

                                <h4 className="text-2xl font-bold mb-4 tracking-tight" style={{ color: brand.spaceCadet }}>{item.title}</h4>
                                <p className="text-slate-500 mb-10 text-sm leading-relaxed min-h-[80px]">
                                    {item.desc}
                                </p>

                                <ul className="space-y-4 pt-8 border-t border-slate-50">
                                    {item.details.map((d, i) => (
                                        <li key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.12em]" style={{ color: `${brand.spaceCadet}60` }}>
                                            <CheckCircle2 size={14} style={{ color: brand.seaSerpent }} />
                                            {d}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>

                {/* BOTÓN DE ACCIÓN FINAL */}
                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <button
                            className="text-white px-12 py-6 rounded-2xl font-black text-lg transition-all flex items-center gap-4 shadow-2xl active:scale-95 hover:-translate-y-1 group"
                            style={{ backgroundColor: brand.spaceCadet }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = brand.seaSerpent}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = brand.spaceCadet}
                        >
                            EMPEZAR MI TRANSFORMACIÓN
                            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};