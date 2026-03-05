// src/sections/home/Contact.tsx
import { Phone, Instagram, MessageCircle, ArrowRight, CalendarCheck, ShieldCheck, Sparkles } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contacto" className="py-20 lg:py-32 bg-space-cadet relative overflow-hidden z-0">

            {/* Fondo con textura/gradientes más complejos para quitar lo "plano" */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-lapis-lazuli/30 via-tufts-blue/10 to-transparent rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-sea-serpent/20 to-transparent rounded-full blur-[80px] -z-10 -translate-x-1/3 translate-y-1/3"></div>

            <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
                <div className="lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Columna Izquierda: El Pitch y Contacto (Ocupa 7 columnas) */}
                    <div className="lg:col-span-7 mb-16 lg:mb-0">

                        {/* Animación de "Disponible" (Punto verde parpadeante) */}
                        <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full mb-8 backdrop-blur-sm">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-white text-sm font-medium tracking-wide">
                                Disponible para nuevas asesorías
                            </span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1]">
                            El mejor momento para invertir <span className="text-transparent bg-clip-text bg-gradient-to-r from-sea-serpent to-tufts-blue">fue ayer.</span>
                        </h2>

                        <p className="text-gray-300 text-lg sm:text-xl mb-10 leading-relaxed max-w-2xl">
                            El segundo mejor momento es hoy. Escríbeme y diseñemos juntos un plan financiero que proteja a tu familia y multiplique tu patrimonio.
                        </p>

                        {/* Botones de contacto secundarios (Email/Teléfono) con estilo Glassmorphism */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="tel:5520934484" className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-2xl transition-all duration-300 backdrop-blur-md">
                                <div className="w-12 h-12 rounded-xl bg-tufts-blue/20 flex items-center justify-center text-tufts-blue group-hover:bg-tufts-blue group-hover:text-white transition-colors">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Llamada Directa</p>
                                    <p className="text-white font-bold text-lg">55 2093 4484</p>
                                </div>
                            </a>

                            <a href="https://www.instagram.com/themoney.bridge" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-2xl transition-all duration-300 backdrop-blur-md">
                                <div className="w-12 h-12 rounded-xl bg-sea-serpent/20 flex items-center justify-center text-sea-serpent group-hover:bg-sea-serpent group-hover:text-white transition-colors">
                                    <Instagram className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Sígueme en IG</p>
                                    <p className="text-white font-bold text-lg">@themoney.bridge</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Columna Derecha: Tarjeta Principal CTA (Ocupa 5 columnas) */}
                    <div className="lg:col-span-5 relative group">

                        {/* Truco para el Borde de Gradiente Animado */}
                        <div className="absolute -inset-0.5 bg-gradient-to-br from-sea-serpent via-tufts-blue to-lapis-lazuli rounded-[2.5rem] blur opacity-50 group-hover:opacity-100 transition duration-700"></div>

                        {/* Tarjeta de Conversión */}
                        <div className="relative bg-space-cadet border border-white/10 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl overflow-hidden">

                            <Sparkles className="absolute top-6 right-6 w-6 h-6 text-sea-serpent/40" />

                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-8 shadow-lg shadow-green-500/30">
                                <MessageCircle className="w-8 h-8 text-white fill-white" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">
                                Agenda por WhatsApp
                            </h3>
                            <p className="text-gray-400 mb-8">
                                Respuesta directa de Deyanira o su equipo en menos de 24 horas.
                            </p>

                            <a
                                href="https://wa.me/5520934484"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 w-full bg-white text-space-cadet py-4 rounded-xl font-extrabold text-lg hover:bg-sea-serpent hover:text-white transition-colors duration-300 shadow-xl"
                            >
                                <CalendarCheck className="w-5 h-5" />
                                Agendar mi sesión
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>

                            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-400">
                                <ShieldCheck className="w-4 h-4 text-sea-serpent" />
                                <span>Información 100% confidencial y segura</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};