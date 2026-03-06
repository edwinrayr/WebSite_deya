import { motion } from 'framer-motion';
import {
    ZoomIn,
    FileText,
    TrendingUp,
    MonitorPlay,
    CalendarCheck,
    ShieldCheck,
    ArrowRight,
    DollarSign,
    Percent,
    BarChart3
} from 'lucide-react';

const DELIVERABLES = [
    {
        title: "Sesión de Diagnóstico 1:1",
        desc: "60 min vía Zoom para radiografía total.",
        icon: ZoomIn,
        iconColor: "text-sea-serpent" // Ajustado al color del Hero
    },
    {
        title: "Hoja de Diagnóstico",
        desc: "Tu situación actual documentada.",
        icon: FileText,
        iconColor: "text-cyan-400"
    },
    {
        title: "Hoja de Plan de Inversión",
        desc: "Tu hoja de ruta con instituciones reguladas.",
        icon: TrendingUp,
        iconColor: "text-emerald-400"
    },
    {
        title: "Clases Exclusivas",
        desc: "Acceso mensual a temas financieros por 1 año.",
        icon: MonitorPlay,
        iconColor: "text-purple-400"
    },
    {
        title: "Revisiones 6 y 12 meses",
        desc: "Seguimiento directo para asegurar metas.",
        icon: CalendarCheck,
        iconColor: "text-amber-400"
    }
];

const FloatingSymbols = () => (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-80" aria-hidden="true">
        <motion.div
            animate={{
                y: [0, -30, 0],
                rotate: [0, 10, -10, 0],
                opacity: [0.04, 0.09, 0.04]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[25%] left-[15%]"
        >
            <DollarSign size={70} strokeWidth={0.5} className="text-white" />
        </motion.div>

        <motion.div
            animate={{
                y: [0, 40, 0],
                rotate: [0, -15, 15, 0],
                opacity: [0.03, 0.07, 0.03]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[20%] left-[20%]"
        >
            <Percent size={50} strokeWidth={0.5} className="text-white" />
        </motion.div>

        <motion.div
            animate={{
                scale: [1, 1.05, 1],
                opacity: [0.03, 0.08, 0.03]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[40%] right-[15%]"
        >
            <BarChart3 size={90} strokeWidth={0.5} className="text-white" />
        </motion.div>

        <div className="absolute inset-0 opacity-[0.1]"
            style={{
                // Usamos el color sea-serpent para los puntos del fondo
                backgroundImage: 'radial-gradient(circle, #4ECDC4 1px, transparent 1px)',
                backgroundSize: '70px 70px',
                maskImage: 'radial-gradient(circle at center, black, transparent 90%)'
            }}
        />
    </div>
);

const DeliverableCard = ({ item, index }: { item: typeof DELIVERABLES[0], index: number }) => {
    const Icon = item.icon;
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group flex items-start gap-6 p-6 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-sea-serpent/30 hover:bg-white/[0.04] transition-all duration-500 backdrop-blur-sm"
        >
            <div className="p-4 bg-slate-900 rounded-2xl group-hover:scale-110 group-hover:bg-sea-serpent transition-all duration-500 shadow-xl">
                <Icon className={`transition-colors duration-500 ${item.iconColor} group-hover:text-white`} size={24} />
            </div>
            <div>
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-sea-serpent transition-colors">
                    {item.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                </p>
            </div>
        </motion.div>
    );
};

export const WingsStrategy = () => {
    return (
        <section className="py-40 bg-white text-slate-900 relative overflow-hidden flex justify-center">

            {/* CONTENEDOR DE PROFUNDIDAD: Ahora usa 'bg-space-cadet' igual que tu Hero */}
            <div className="absolute inset-x-0 md:inset-x-20 top-10 bottom-10 rounded-[4rem] bg-space-cadet overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] flex justify-center">

                <div className="absolute inset-0 z-0">
                    {/* Gradientes ajustados para fundirse con la identidad de marca */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(78,205,196,0.1)_0%,transparent_70%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(15,23,42,0.6)_0%,transparent_100%)]" />
                </div>

                <FloatingSymbols />

                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-1 pointer-events-none" />
            </div>

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10 pt-16">

                <div className="mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sea-serpent/10 border border-sea-serpent/20 text-sea-serpent mb-6 text-[10px] font-black uppercase tracking-[0.3em]"
                    >
                        Metodología Exclusiva
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black leading-[1.1] max-w-4xl tracking-tighter text-white mx-auto">
                        ¿Qué incluye la <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sea-serpent to-blue-400 italic font-serif">Estrategia Personalizada?</span>
                    </h2>
                    <p className="mt-8 text-gray-300 text-xl font-light max-w-2xl italic leading-relaxed mx-auto">
                        "Alas del Éxito Financiero" es tu hoja de ruta hacia la libertad, blindada por expertos.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    <div className="lg:col-span-7 space-y-5">
                        {DELIVERABLES.map((item, i) => (
                            <DeliverableCard key={i} item={item} index={i} />
                        ))}
                    </div>

                    <div className="lg:col-span-5 relative flex items-center justify-center py-10">
                        {/* Brillo de fondo usando sea-serpent */}
                        <div className="absolute inset-0 bg-sea-serpent/10 blur-[120px] rounded-full" />

                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-20 w-full max-w-[390px] bg-gradient-to-br from-sea-serpent/80 to-space-cadet rounded-[3.5rem] p-12 shadow-2xl border border-white/10 overflow-hidden"
                        >
                            <div className="relative z-10 text-center">
                                <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-[2rem] flex items-center justify-center mx-auto mb-8 border border-white/20 shadow-inner">
                                    <ShieldCheck size={40} className="text-white drop-shadow-md" />
                                </div>
                                <h3 className="text-3xl font-black text-white mb-6 tracking-tighter uppercase italic leading-tight">
                                    Alas del <br />Éxito
                                </h3>

                                <div className="space-y-4 mb-12 text-left bg-black/30 p-6 rounded-2xl border border-white/5">
                                    <div className="flex justify-between text-[10px] font-bold text-sea-serpent tracking-widest uppercase italic">
                                        <span>Seguridad Regulada</span>
                                        <span>100%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '100%' }}
                                            transition={{ duration: 2, ease: "easeOut" }}
                                            viewport={{ once: true }}
                                            className="h-full bg-gradient-to-r from-sea-serpent to-cyan-300"
                                        />
                                    </div>
                                </div>

                                <button className="w-full bg-white text-space-cadet py-5 rounded-2xl font-black hover:bg-sea-serpent hover:text-white transition-all flex items-center justify-center gap-3 group active:scale-95 shadow-xl">
                                    RESERVAR MI SESIÓN
                                    <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                        </motion.div>

                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[130%] h-[130%] border-[1px] border-dashed border-white/[0.05] rounded-full pointer-events-none"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};