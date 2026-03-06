// src/sections/about/AboutCTA.tsx
import { CalendarCheck, ArrowRight, Shield, Clock, Sparkles, Ticket } from 'lucide-react';

export const AboutCTA = () => {
    return (
        // Fondo gris claro para fusionarse con Philosophy y hacer resaltar la isla oscura
        <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden z-0">
            <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative">

                {/* --- ISLA FLOTANTE VIP --- */}
                {/* Borde de gradiente simulado con sombra masiva */}
                <div className="relative rounded-[3rem] lg:rounded-[4rem] bg-space-cadet overflow-hidden p-8 sm:p-12 lg:p-20 shadow-[0_30px_80px_-20px_rgba(25,37,91,0.5)] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 group">

                    {/* Efectos de luces volumétricas interactivas (se mueven sutilmente al hacer hover en el contenedor) */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-tufts-blue/20 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3 group-hover:bg-sea-serpent/20 transition-colors duration-1000 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sea-serpent/20 rounded-full blur-[120px] -z-10 -translate-x-1/3 translate-y-1/3 group-hover:bg-tufts-blue/20 transition-colors duration-1000 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none"></div>

                    {/* --- COLUMNA IZQUIERDA: Mensaje de Exclusividad --- */}
                    <div className="relative z-10 w-full lg:w-3/5 text-center lg:text-left">

                        {/* Etiqueta VIP / Escasez */}
                        <div className="inline-flex items-center gap-3 py-2 px-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-lg">
                            <Ticket className="w-4 h-4 text-sea-serpent" />
                            <span className="text-white text-sm font-bold tracking-widest uppercase">
                                Invitación Privada
                            </span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.15]">
                            Tu tranquilidad empieza con una <br className="hidden xl:block" />
                            <span className="relative inline-block">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sea-serpent to-tufts-blue">
                                    conversación franca.
                                </span>
                                <Sparkles className="absolute -top-4 -right-8 w-6 h-6 text-tufts-blue animate-pulse hidden sm:block" />
                            </span>
                        </h2>

                        <p className="text-gray-300 text-lg sm:text-xl mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Hablemos sobre tus metas y miedos. El diagnóstico inicial no tiene costo y te dará claridad inmediata sobre el rumbo de tu patrimonio.
                        </p>

                        {/* Etiquetas de Confianza (Estilo Pill de Cristal) */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2.5 rounded-full">
                                <Shield className="w-4 h-4 text-sea-serpent" />
                                <span className="text-sm font-bold text-gray-300">100% Confidencial</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2.5 rounded-full">
                                <Clock className="w-4 h-4 text-tufts-blue" />
                                <span className="text-sm font-bold text-gray-300">Respuesta en 24h</span>
                            </div>
                        </div>
                    </div>

                    {/* --- COLUMNA DERECHA: El "Pase VIP" (Tarjeta de Conversión) --- */}
                    <div className="relative z-10 w-full lg:w-2/5 flex justify-center lg:justify-end">

                        {/* Tarjeta Glassmorphism Ultra-Premium */}
                        <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 p-8 sm:p-10 rounded-[2.5rem] shadow-2xl w-full max-w-md flex flex-col items-center text-center transform transition-all duration-500 hover:-translate-y-2 hover:shadow-tufts-blue/20 overflow-hidden">

                            {/* Brillo dinámico que pasa por la tarjeta en hover */}
                            <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-45deg] group-hover:animate-[shine_1.5s_ease-in-out]"></div>

                            <div className="w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-sea-serpent to-tufts-blue flex items-center justify-center mb-6 shadow-lg shadow-tufts-blue/30 relative">
                                {/* Anillo animado alrededor del icono */}
                                <div className="absolute inset-0 rounded-[1.5rem] border border-white/50 animate-ping opacity-20"></div>
                                <CalendarCheck className="w-10 h-10 text-white" />
                            </div>

                            <h3 className="text-3xl font-extrabold text-white mb-3">Reserva tu lugar</h3>

                            {/* Indicador de Cupos (Gatillo de urgencia) */}
                            <div className="bg-red-500/20 text-red-200 border border-red-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                                Cupos limitados este mes
                            </div>

                            <a
                                href="https://wa.me/5520934484"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative flex items-center justify-center gap-3 w-full bg-white text-space-cadet px-6 py-4 rounded-2xl font-black text-lg hover:bg-sea-serpent hover:text-white transition-all duration-300 shadow-xl overflow-hidden group/btn"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Contactar a Deyanira
                                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform" />
                                </span>
                            </a>

                            <p className="text-gray-400 text-xs mt-6">
                                Serás redirigido a WhatsApp para atención directa.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};