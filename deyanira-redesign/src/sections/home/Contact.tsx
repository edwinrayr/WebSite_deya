// src/sections/home/Contact.tsx
import { Phone, Instagram, MessageCircle, ArrowRight, Sparkles, Clock } from 'lucide-react';

export const Contact = () => {
    return (
        // El fondo exterior es blanco para fusionarse suavemente con el Footer oscuro que sigue después
        <section id="contacto" className="py-20 lg:py-32 bg-white relative overflow-hidden z-0">

            <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">

                {/* ISLA FLOTANTE VIP: Contenedor principal con sombra masiva y bordes súper redondeados */}
                <div className="relative bg-space-cadet rounded-[3rem] lg:rounded-[4rem] p-8 sm:p-12 lg:p-20 shadow-[0_20px_60px_-15px_rgba(25,37,91,0.5)] overflow-hidden border border-gray-100 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Efectos de Luces Volumétricas dentro de la isla */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-tufts-blue/20 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sea-serpent/20 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/3 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>

                    {/* --- COLUMNA IZQUIERDA: Copywriting de Alto Nivel --- */}
                    <div className="relative z-10 w-full lg:w-1/2 text-center lg:text-left">

                        {/* Indicador de "En Línea" (Gatillo psicológico) */}
                        <div className="inline-flex items-center gap-3 py-2 px-5 rounded-full bg-white/10 border border-white/10 mb-8 backdrop-blur-md">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-white text-sm font-bold tracking-wider uppercase">
                                Agenda Abierta
                            </span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1]">
                            El mejor momento para invertir <br className="hidden xl:block" />
                            <span className="relative inline-block">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sea-serpent to-tufts-blue">
                                    fue ayer.
                                </span>
                                <Sparkles className="absolute -top-6 -right-8 w-6 h-6 text-tufts-blue animate-pulse hidden sm:block" />
                            </span>
                        </h2>

                        <p className="text-gray-300 text-lg sm:text-xl mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            El segundo mejor momento es hoy. Escríbeme directamente y diseñemos un plan a la medida para blindar el futuro de tu familia.
                        </p>

                        <div className="flex items-center justify-center lg:justify-start gap-4 text-gray-400 font-medium text-sm">
                            <Clock className="w-5 h-5 text-sea-serpent" />
                            <span>Respuesta personal de Deyanira en menos de 24 horas.</span>
                        </div>
                    </div>

                    {/* --- COLUMNA DERECHA: Tarjetas de Contacto Interactivas --- */}
                    <div className="relative z-10 w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6">

                        {/* Tarjeta Principal: WhatsApp (Alta Conversión) */}
                        <a
                            href="https://wa.me/5520934484"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-gradient-to-br from-green-500 to-green-600 rounded-[2rem] p-6 sm:p-8 flex items-center justify-between shadow-lg shadow-green-500/20 hover:shadow-2xl hover:shadow-green-500/40 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute right-0 top-0 w-32 h-32 bg-white/20 rounded-full blur-3xl transform group-hover:scale-150 transition-transform duration-700"></div>

                            <div className="flex items-center gap-5 relative z-10">
                                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-inner flex-shrink-0">
                                    <MessageCircle className="w-8 h-8 text-green-600 fill-green-600" />
                                </div>
                                <div>
                                    <p className="text-white font-black text-xl sm:text-2xl mb-1">WhatsApp Directo</p>
                                    <p className="text-green-100 font-medium text-sm">Chatea ahora mismo</p>
                                </div>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white transition-colors duration-300 relative z-10 flex-shrink-0 hidden sm:flex">
                                <ArrowRight className="w-6 h-6 text-white group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                            </div>
                        </a>

                        {/* Contenedor de Tarjetas Secundarias (Teléfono e Instagram) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

                            {/* Tarjeta Secundaria: Llamada */}
                            <a
                                href="tel:5520934484"
                                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 flex flex-col hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 hover:border-tufts-blue/50"
                            >
                                <div className="w-12 h-12 rounded-xl bg-tufts-blue/20 flex items-center justify-center mb-4 group-hover:bg-tufts-blue transition-colors duration-300">
                                    <Phone className="w-6 h-6 text-tufts-blue group-hover:text-white transition-colors" />
                                </div>
                                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Llamada</p>
                                <p className="text-white font-bold text-lg">55 2093 4484</p>
                            </a>

                            {/* Tarjeta Secundaria: Instagram */}
                            <a
                                href="https://www.instagram.com/themoney.bridge"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 flex flex-col hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 hover:border-sea-serpent/50"
                            >
                                <div className="w-12 h-12 rounded-xl bg-sea-serpent/20 flex items-center justify-center mb-4 group-hover:bg-sea-serpent transition-colors duration-300">
                                    <Instagram className="w-6 h-6 text-sea-serpent group-hover:text-white transition-colors" />
                                </div>
                                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Sígueme</p>
                                <p className="text-white font-bold text-lg truncate">@themoney.bridge</p>
                            </a>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};