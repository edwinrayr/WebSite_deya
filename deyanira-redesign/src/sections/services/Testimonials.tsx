import React, { useState, useRef } from 'react';
import { Play, Pause, MessageCircle } from 'lucide-react';

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

    const handleSeek = (e: any) => {
        const seekTo = (parseFloat(e.target.value) / 100) * duration;
        if (videoRef.current) {
            videoRef.current.currentTime = seekTo;
            setProgress(parseFloat(e.target.value));
        }
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
                className={`w-full h-full object-cover transition-all duration-700 ${isPlaying ? 'opacity-100' : 'opacity-70 scale-105'
                    }`}
                playsInline
            />

            {!isPlaying && (
                <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={onToggle}
                >
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

                <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={handleSeek}
                    className="w-full h-1.5 appearance-none rounded-full bg-white/20 accent-cyan-400"
                />
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
            v1?.pause();
            v2?.pause();

            id === 'v1' ? v1?.play() : v2?.play();

            setPlayingId(id);
        }
    };

    return (
        <section className="relative py-32 bg-gradient-to-b from-white via-blue-50/40 to-white overflow-hidden">

            {/* Glow fintech */}
            <div className="absolute top-1/2 left-1/2 w-[900px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-cyan-400/20 blur-[140px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="mb-20 text-center">

                    <h2 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900">
                        TESTIMONIOS
                        <br />

                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 italic">
                            REALES
                        </span>

                    </h2>

                    <p className="mt-6 text-slate-500 max-w-xl mx-auto">
                        Personas reales que ya están tomando control de su dinero.
                    </p>

                </div>

                {/* VIDEOS */}
                <div className="flex flex-col lg:flex-row items-end gap-12 mb-28">

                    {/* Video horizontal */}
                    <div className="w-full lg:w-[60%]">

                        <div className="rounded-[2.5rem] p-2 bg-white/5 backdrop-blur-xl border border-sea-serpent/40 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">

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

                    {/* Video vertical */}
                    <div className="w-full lg:w-[30%] flex justify-center">

                        <div className="relative w-full max-w-[260px] p-3 bg-white/70 backdrop-blur-xl rounded-[3rem] border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">

                            <div className="aspect-[9/18]">

                                <CustomPlayer
                                    src="/videos/services/paso-2.mp4"
                                    id="v2"
                                    isPlaying={playingId === 'v2'}
                                    onToggle={() => toggleVideo('v2')}
                                    videoRef={videoRef2}
                                />

                            </div>

                        </div>

                    </div>

                </div>

                {/* TESTIMONIOS CHAT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                    {[
                        {
                            name: "Adriana G.",
                            text: "Deya, ¡ya abrí mi primera cuenta regulada! No puedo creer lo fácil que fue."
                        },
                        {
                            name: "Carlos R.",
                            text: "Por fin entiendo a dónde se iba mi dinero. Mi fondo de paz ya está creciendo."
                        }
                    ].map((msg, i) => (

                        <div
                            key={i}
                            className="p-8 rounded-[2rem] bg-white/70 backdrop-blur-xl border border-slate-200 shadow-lg hover:shadow-xl transition"
                        >

                            <div className="flex items-center gap-3 mb-4 text-blue-500">

                                <MessageCircle size={20} />

                                <span className="font-semibold text-slate-900">
                                    {msg.name}
                                </span>

                            </div>

                            <p className="text-slate-600 italic leading-relaxed">
                                "{msg.text}"
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};