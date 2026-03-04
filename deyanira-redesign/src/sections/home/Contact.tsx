// src/sections/home/Contact.tsx
import { Phone, Mail, Instagram, MessageCircle, ArrowUpRight } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contacto" className="py-16 lg:py-24 bg-space-cadet relative overflow-hidden">
            {/* Elementos decorativos de fondo con los colores del Brandbook */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-lapis-lazuli/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sea-serpent/10 rounded-full blur-3xl"></div>

            <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
                <div className="bg-white/5 backdrop-blur-sm rounded-[3rem] p-8 md:p-16 border border-white/10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Columna de Texto e Invitación */}
                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                                ¿Listo para construir tu <span className="text-sea-serpent">libertad financiera</span>?
                            </h2>
                            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                                Agenda una asesoría personalizada hoy mismo. Analizaremos tu situación actual para diseñar un plan que garantice tu prosperidad y la de tu familia.
                            </p>

                            {/* Datos de contacto rápidos extraídos de su semblanza y manual */}
                            <div className="space-y-6">
                                <a href="tel:5520934484" className="flex items-center gap-4 text-white hover:text-sea-serpent transition-colors group">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <span className="text-xl font-bold">55 2093 4484</span>
                                </a>
                                <div className="flex items-center gap-4 text-white">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                                        <Instagram className="w-5 h-5" />
                                    </div>
                                    <span className="text-xl font-bold">@themoney.bridge</span>
                                </div>
                            </div>
                        </div>

                        {/* Columna de Acciones de Conversión */}
                        <div className="flex flex-col gap-4">
                            <a
                                href="https://wa.me/5520934484"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between bg-white text-space-cadet p-6 rounded-2xl font-extrabold text-xl hover:bg-sea-serpent hover:text-white transition-all duration-500 group shadow-xl"
                            >
                                <div className="flex items-center gap-4">
                                    <MessageCircle className="w-8 h-8" />
                                    <span>WhatsApp Directo</span>
                                </div>
                                <ArrowUpRight className="w-6 h-6 transform group-hover:rotate-45 transition-transform" />
                            </a>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/10 border border-white/10 p-6 rounded-2xl text-center">
                                    <p className="text-sea-serpent text-3xl font-black mb-1">100%</p>
                                    <p className="text-white text-xs font-bold uppercase tracking-widest">Ético y Seguro</p>
                                </div>
                                <div className="bg-white/10 border border-white/10 p-6 rounded-2xl text-center">
                                    <p className="text-tufts-blue text-3xl font-black mb-1">+1k</p>
                                    <p className="text-white text-xs font-bold uppercase tracking-widest">Asesorados</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};