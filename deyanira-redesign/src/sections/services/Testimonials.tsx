import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, MessageCircle } from 'lucide-react';

// --- COMPONENTE: CARRUSEL INFINITO ÚNICO ---
const TestimonialMarquee = ({ items }: { items: any[] }) => {
    return (
        <div className="relative flex overflow-hidden py-12 border-t border-slate-100">
            <motion.div
                className="flex whitespace-nowrap gap-8"
                animate={{ x: [0, -1500] }}
                transition={{
                    duration: 50,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{ width: "fit-content" }}
            >
                {[...items, ...items, ...items].map((msg, i) => (
                    <div key={i} className="inline-block p-8 rounded-[2.5rem] bg-white/80 backdrop-blur-xl border border-slate-200 shadow-sm hover:border-[#4ECDC4]/50 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-[#4ECDC4]/10 rounded-full">
                                <MessageCircle size={18} className="text-[#4ECDC4]" />
                            </div>
                            <span className="font-bold text-slate-900">{msg.name}</span>
                        </div>
                        <p className="text-slate-600 italic text-lg leading-relaxed">
                            "{msg.text}"
                        </p>
                    </div>
                ))}
            </motion.div>
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
    );
};

const CustomPlayer = ({ src, id, isPlaying, onToggle, videoRef }: any) => {
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const current = videoRef.current.currentTime;
            const total = videoRef.current.duration;
            setCurrentTime(current);
            setProgress((current / total) * 100);
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) setDuration(videoRef.current.duration);
    };

    const formatTime = (time: number) => {
        const mins = Math.floor(time / 60);
        const secs = Math.floor(time % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <div className="relative w-full h-full group bg-black rounded-[2rem] overflow-hidden">
            <video
                ref={videoRef}
                src={src}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onClick={onToggle}
                className={`w-full h-full object-cover transition-all duration-700 ${isPlaying ? 'opacity-100' : 'opacity-70 scale-105'}`}
                playsInline
            />

            {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center cursor-pointer" onClick={onToggle}>
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/40 hover:scale-110 transition">
                        <Play className="text-white fill-white ml-1" size={32} />
                    </div>
                </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center gap-3 mb-2">
                    <button onClick={onToggle} className="text-white">
                        {isPlaying ? <Pause size={22} fill="white" /> : <Play size={22} fill="white" />}
                    </button>
                    <span className="text-xs text-white/80 font-mono">
                        {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                </div>
                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-[#4ECDC4] transition-all" style={{ width: `${progress}%` }} />
                </div>
            </div>
        </div>
    );
};

export const Testimonials = () => {
    const [playingId, setPlayingId] = useState<string | null>(null);
    const videoRef1 = useRef<HTMLVideoElement>(null);
    const videoRef2 = useRef<HTMLVideoElement>(null);

    const toggleVideo = (id: string) => {
        const v1 = videoRef1.current;
        const v2 = videoRef2.current;
        if (playingId === id) {
            id === 'v1' ? v1?.pause() : v2?.pause();
            setPlayingId(null);
        } else {
            v1?.pause(); v2?.pause();
            id === 'v1' ? v1?.play() : v2?.play();
            setPlayingId(id);
        }
    };

    const allTestimonials = [
        { name: "Adrian Diaz", text: "Me emociona saber que logré más de mi meta." },
        { name: "Adriana G.", text: "Deya, ¡ya abrí mi primera cuenta regulada! Muy fácil." },
        { name: "Lizbeth Figueroa", text: "No sería quien soy sin personitas maravillosas como tú." },
        { name: "Itayetzi Romero", text: "Gracias por estar al pendiente siempre y por enseñarme." },
        { name: "Aldahir Ramírez", text: "Con tu ayuda los sueños parecen más fáciles de cumplir." },
        { name: "Carlos R.", text: "Por fin entiendo a dónde se iba mi dinero. Mi fondo crece." },
        { name: "Adrian Diaz", text: "Tu ayuda es un súper gol a la economía." },
        { name: "Itayetzi Romero", text: "No sabes qué chido tener una preocupación menos en esta vida." },
        { name: "Lizbeth Figueroa", text: "Muchísimas gracias por todo, Deya." }
    ];

    return (
        <section className="relative py-40 bg-white overflow-hidden">
            {/* Glow Fintech Sea Serpent */}
            <div className="absolute top-1/2 left-1/2 w-[800px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-[#4ECDC4]/10 blur-[130px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Estilo Reporte */}
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4ECDC4]/10 border border-[#4ECDC4]/20 mb-4">
                            <span className="w-2 h-2 rounded-full bg-[#4ECDC4] animate-pulse"></span>
                            <span className="text-[#4ECDC4] text-xs font-bold uppercase tracking-widest">Resultados</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900">
                            TESTIMONIOS<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-[#4ECDC4] italic font-serif">
                                REALES
                            </span>
                        </h2>
                    </div>
                    <p className="mt-6 text-slate-500 max-w-sm text-lg border-l-2 border-slate-100 pl-6">
                        Historias reales de personas que tomaron el control de su futuro financiero.
                    </p>
                </div>

                {/* DASHBOARD DE VIDEOS INTEGRADO */}
                <div className="relative grid grid-cols-12 gap-8 items-center mb-20">
                    {/* Video Horizontal Principal */}
                    <div className="col-span-12 lg:col-span-8 group">
                        <div className="relative rounded-[2.8rem] p-2 bg-white border border-slate-200 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
                            <div className="aspect-video">
                                <CustomPlayer
                                    src="/videos/services/paso-1.mp4"
                                    id="v1"
                                    isPlaying={playingId === 'v1'}
                                    onToggle={() => toggleVideo('v1')}
                                    videoRef={videoRef1}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Video Vertical en "Smartphone Mockup" */}
                    <div className="col-span-12 lg:col-span-4 flex justify-center lg:-ml-16 z-20">
                        <div className="relative w-full max-w-[280px] group">
                            {/* Marco de Smartphone Minimalista */}
                            <div className="relative bg-slate-900 rounded-[3.5rem] p-3 border-[8px] border-slate-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] transform lg:rotate-3 hover:rotate-0 transition-transform duration-700">
                                {/* Sensor/Bocina Mockup */}
                                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-16 h-1 bg-slate-700 rounded-full z-30"></div>

                                <div className="aspect-[9/19] rounded-[2.5rem] overflow-hidden bg-black">
                                    <CustomPlayer
                                        src="/videos/services/paso-2.mp4"
                                        id="v2"
                                        isPlaying={playingId === 'v2'}
                                        onToggle={() => toggleVideo('v2')}
                                        videoRef={videoRef2}
                                    />
                                </div>
                            </div>
                            {/* Brillo decorativo posterior */}
                            <div className="absolute -inset-4 bg-[#4ECDC4]/10 blur-3xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    </div>
                </div>

                {/* --- ÚNICA FILA DE CARRUSEL --- */}
                <div className="mt-32">
                    <TestimonialMarquee items={allTestimonials} />
                </div>
            </div>
        </section>
    );
};