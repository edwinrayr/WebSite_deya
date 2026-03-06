import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, MessageCircle, Star, Award } from 'lucide-react';

// --- ANIMACIONES CONFIG (Mantenemos las buenas) ---
const starContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.4 } }
};

const starItemVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -45 },
    visible: {
        opacity: 1, scale: 1, rotate: 0,
        transition: { type: "spring", stiffness: 200, damping: 12 }
    }
};

const TestimonialMarquee = ({ items }: { items: any[] }) => {
    return (
        <div className="relative flex overflow-hidden py-12 md:py-16 border-t border-slate-100 bg-slate-50/50">
            <motion.div
                className="flex gap-6 md:gap-8"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                style={{ width: "max-content" }}
            >
                {[...items, ...items].map((msg, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -8, scale: 1.02 }} // Mantenemos la elevación en hover
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="flex-shrink-0 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:border-[#64C2C8]/40 transition-colors group w-[280px] md:w-[380px] cursor-pointer"
                    >
                        <div className="flex items-center gap-3 md:gap-4 mb-4">
                            <motion.div
                                whileHover={{ rotate: [0, -10, 10, 0] }} // Mantenemos el giro del icono
                                className="p-2.5 md:p-3 bg-[#64C2C8]/10 rounded-xl md:rounded-2xl group-hover:bg-[#64C2C8] transition-colors duration-300"
                            >
                                <MessageCircle size={20} className="text-[#64C2C8] group-hover:text-white" />
                            </motion.div>
                            <div>
                                <span className="block font-black text-[#19255B] text-sm md:text-lg uppercase tracking-tight">{msg.name}</span>
                                <div className="flex text-amber-400">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                                </div>
                            </div>
                        </div>
                        <p className="text-slate-600 italic text-sm md:text-lg leading-relaxed font-medium whitespace-normal">
                            "{msg.text}"
                        </p>
                    </motion.div>
                ))}
            </motion.div>
            <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
        </div>
    );
};

const CustomPlayer = ({ src, id, isPlaying, onToggle, videoRef, label, sublabel }: any) => {
    const [progress, setProgress] = useState(0);

    return (
        <div className="relative w-full h-full group bg-[#19255B] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden">
            <video
                ref={videoRef}
                src={src}
                onTimeUpdate={() => videoRef.current && setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100)}
                onClick={onToggle}
                className={`w-full h-full object-cover transition-transform duration-1000 ${isPlaying ? 'scale-100' : 'scale-105 opacity-80'}`}
                playsInline
            />

            <div className="absolute top-3 left-3 md:top-6 md:left-6 z-20">
                <motion.div
                    whileHover={{ x: 5 }} // Mantenemos la micro-animación del label
                    className="bg-[#19255B]/90 backdrop-blur-sm px-3 py-1.5 md:px-5 md:py-3 rounded-xl md:rounded-2xl border-l-4 border-[#64C2C8]"
                >
                    <p className="text-white font-black text-[10px] md:text-sm uppercase tracking-wide">{label}</p>
                    <p className="text-[#64C2C8] text-[8px] md:text-[10px] font-bold uppercase tracking-widest mt-0.5">{sublabel}</p>
                </motion.div>
            </div>

            <AnimatePresence>
                {!isPlaying && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center z-20 bg-black/10"
                    >
                        <motion.button
                            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                            onClick={onToggle}
                            className="w-16 h-16 md:w-24 md:h-24 bg-[#64C2C8] text-white rounded-full flex items-center justify-center shadow-lg"
                        >
                            <Play fill="currentColor" className="w-8 h-8 md:w-10 md:h-10 ml-1" />
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="absolute bottom-0 left-0 right-0 z-20 p-4 md:p-8 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-[#19255B] to-transparent">
                <div className="flex items-center justify-between mb-2">
                    <button onClick={onToggle} className="text-[#64C2C8]">
                        {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
                    </button>
                    <div className="text-[8px] md:text-[10px] text-white/60 font-black tracking-widest uppercase">HD STREAM</div>
                </div>
                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                    <motion.div className="h-full bg-[#64C2C8]" style={{ width: `${progress}%` }} />
                </div>
            </div>
        </div>
    );
};

export const Testimonials = () => {
    const [playingId, setPlayingId] = useState<string | null>(null);
    const vRef1 = useRef<HTMLVideoElement>(null);
    const vRef2 = useRef<HTMLVideoElement>(null);

    const toggleVideo = (id: string) => {
        if (playingId === id) {
            id === 'v1' ? vRef1.current?.pause() : vRef2.current?.pause();
            setPlayingId(null);
        } else {
            vRef1.current?.pause(); vRef2.current?.pause();
            id === 'v1' ? vRef1.current?.play() : vRef2.current?.play();
            setPlayingId(id);
        }
    };

    const realTestimonials = [
        { name: "Itayetzi Romero", text: "Muchas gracias Deya, ¡qué bonito! Gracias por estar al pendiente siempre y por enseñarme tanto sobre mis finanzas personales." },
        { name: "Lizbeth Figueroa", text: "Hola Deya! Muchísimas gracias por todo. No sería quien soy sin personitas maravillosas como tú en mi vida." },
        { name: "Adriana Díaz", text: "Me emociona saber que logré más de mi meta... Tu ayuda es un súper gol a la economía." },
        { name: "Aldahir Ramírez", text: "Muchas gracias, con tu ayuda los sueños parecen más fáciles de cumplir." },
        { name: "Dra. Claudia Peña", text: "Por fin entiendo a dónde se iba mi dinero. Mi fondo crece y me siento segura." }
    ];

    return (
        <section className="relative py-16 md:py-32 bg-white overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-12 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <span className="text-[#64C2C8] font-black tracking-[0.3em] text-xs uppercase mb-4 block border-l-4 border-[#64C2C8] pl-4">Testimonios</span>
                        <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-[#19255B] leading-[0.9]">
                            HISTORIAS DE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#19255B] to-[#64C2C8] italic font-serif block mt-2 py-1 md:py-2">ÉXITO REAL</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                        className="flex items-center gap-4 p-5 md:p-6 rounded-[2rem] bg-[#19255B] border-b-4 border-[#64C2C8] shadow-xl shadow-[#19255B]/10 self-start md:self-end"
                    >
                        <motion.div
                            animate={{ rotateY: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                            className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#64C2C8] flex items-center justify-center text-white shrink-0"
                        >
                            <Award className="w-7 h-7 md:w-8 md:h-8" />
                        </motion.div>
                        <div className="text-left">
                            <motion.div className="flex text-amber-400 mb-1" variants={starContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                {[...Array(5)].map((_, i) => <motion.div key={i} variants={starItemVariants}><Star size={14} fill="currentColor" /></motion.div>)}
                            </motion.div>
                            <p className="text-white font-black text-xs md:text-sm uppercase tracking-widest leading-none">Excelencia Garantizada</p>
                        </div>
                    </motion.div>
                </div>

                {/* ESTRUCTURA DE VIDEOS RESPONSIVA Y ESTÁTICA */}
                <div className="grid grid-cols-12 gap-8 items-center mb-20 md:mb-32 relative">
                    {/* Video 1: Itayetzi Romero (Horizontal) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="col-span-12 lg:col-span-8 relative z-10"
                    >
                        {/* Margen delgado (p-1.5) y sin sombra shadow-2xl */}
                        <div className="aspect-video relative p-1.5 md:p-2 bg-slate-50 border border-slate-100 rounded-[2rem] md:rounded-[2.5rem]">
                            <CustomPlayer
                                src="/videos/services/paso-1.mp4" id="v1" label="Biol. Itayetzi Romero" sublabel="Bióloga e Investigadora"
                                isPlaying={playingId === 'v1'} onToggle={() => toggleVideo('v1')} videoRef={vRef1}
                            />
                        </div>
                    </motion.div>

                    {/* Video 2: Dra. Claudia Peña (Vertical) - AHORA ESTÁTICO */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, delay: 0.2 }}
                        // Quitamos el animate={{ y: [0, 15, 0] }} para que se quede fijo
                        className="col-span-12 sm:col-span-6 sm:col-start-4 lg:col-span-4 lg:-ml-16 z-20"
                    >
                        <div className="relative mx-auto max-w-[280px] md:max-w-[320px]">
                            {/* Margen delgado (p-2.5) y sin sombra shadow-2xl */}
                            <div className="bg-[#19255B] p-2.5 md:p-3 rounded-[3.5rem] md:rounded-[4rem] border border-white/5 relative shadow-xl shadow-[#19255B]/10">
                                <div className="aspect-[9/19] rounded-[2.8rem] md:rounded-[3.2rem] overflow-hidden relative border border-white/5">
                                    <CustomPlayer
                                        src="/videos/services/paso-2.mp4" id="v2" label="Dra. Claudia Peña Pacheco" sublabel="Médico Patólogo"
                                        isPlaying={playingId === 'v2'} onToggle={() => toggleVideo('v2')} videoRef={vRef2}
                                    />
                                </div>
                                {/* Notch */}
                                <div className="absolute top-6 md:top-7 left-1/2 -translate-x-1/2 w-12 md:w-16 h-3.5 md:h-4 bg-[#19255B] rounded-b-xl z-30 flex items-center justify-center">
                                    <div className="w-1 h-1 rounded-full bg-white/10" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Carrusel Infinito Responsivo */}
                <TestimonialMarquee items={realTestimonials} />
            </div>
        </section>
    );
};