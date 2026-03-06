// src/sections/contact/BookingSection.tsx
import { MessageCircle, Mail, Phone, Calendar as CalendarIcon, ArrowRight, Clock, CheckCircle2 } from 'lucide-react';

export const BookingSection = () => {
    return (
        // El id="booking-section" es crucial porque el botón del Hero apunta hacia aquí
        <section id="booking-section" className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden z-0">

            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-tufts-blue/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

            <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* --- COLUMNA IZQUIERDA: Vías de Contacto Directo --- */}
                    <div className="flex flex-col justify-center">
                        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-100/50 border border-tufts-blue/20 mb-6 w-max">
                            <span className="w-2 h-2 rounded-full bg-tufts-blue animate-pulse"></span>
                            <span className="text-tufts-blue text-sm font-bold tracking-wider uppercase">
                                Comunicación Directa
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-space-cadet mb-6 leading-tight">
                            Hablemos sobre tu <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lapis-lazuli to-tufts-blue">
                                futuro financiero.
                            </span>
                        </h2>

                        <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-lg">
                            Ya sea que prefieras una respuesta rápida por mensaje o una llamada formal, estoy disponible para resolver tus dudas iniciales.
                        </p>

                        <div className="flex flex-col gap-4">
                            {/* Tarjeta WhatsApp (Prioridad Principal - Alta Conversión) */}
                            <a
                                href="https://wa.me/5520934484"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative bg-white border-2 border-gray-100 p-6 rounded-[2rem] flex items-center gap-6 hover:border-green-500 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                            >
                                {/* Brillo interno verde en hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="relative z-10 w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 transition-colors duration-300">
                                    <MessageCircle className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
                                </div>
                                <div className="relative z-10 flex-grow">
                                    <p className="text-xl font-black text-space-cadet mb-1">WhatsApp</p>
                                    <p className="text-gray-500 text-sm font-medium">Respuesta rápida garantizada</p>
                                </div>
                                <div className="relative z-10 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                                </div>
                            </a>

                            {/* Fila de Tarjetas Secundarias (Email y Teléfono) */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                <a href="mailto:contacto@themoneybridge.com.mx" className="group bg-white border-2 border-gray-100 p-6 rounded-[2rem] flex flex-col hover:border-tufts-blue hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-tufts-blue transition-colors">
                                        <Mail className="w-6 h-6 text-tufts-blue group-hover:text-white transition-colors" />
                                    </div>
                                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Correo Electrónico</p>
                                    <p className="text-space-cadet font-bold text-sm truncate">contacto@themoneybridge.com.mx</p>
                                </a>

                                <a href="tel:5520934484" className="group bg-white border-2 border-gray-100 p-6 rounded-[2rem] flex flex-col hover:border-sea-serpent hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                    <div className="w-12 h-12 rounded-xl bg-sea-serpent/10 flex items-center justify-center mb-4 group-hover:bg-sea-serpent transition-colors">
                                        <Phone className="w-6 h-6 text-sea-serpent group-hover:text-white transition-colors" />
                                    </div>
                                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Llamada Directa</p>
                                    <p className="text-space-cadet font-bold text-lg">55 2093 4484</p>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* --- COLUMNA DERECHA: Widget de Calendario de Reservas --- */}
                    <div className="flex justify-center lg:justify-end items-center relative group perspective-[1000px]">

                        {/* Marco decorativo que reacciona al hover */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-space-cadet to-tufts-blue rounded-[3rem] transform rotate-3 transition-transform duration-700 group-hover:rotate-6 opacity-20 lg:opacity-100 lg:-z-10 mt-4 ml-4"></div>

                        {/* Tarjeta Principal de Calendario */}
                        <div className="relative w-full max-w-lg bg-white rounded-[3rem] p-8 sm:p-10 shadow-2xl border border-gray-100 transform transition-transform duration-500 group-hover:-translate-y-2 z-10">

                            <div className="flex justify-between items-start mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-space-cadet flex items-center justify-center shadow-md">
                                    <CalendarIcon className="w-8 h-8 text-white" />
                                </div>
                                <div className="bg-blue-50 text-tufts-blue px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2">
                                    <Clock className="w-3.5 h-3.5" />
                                    Sesión de 45 min
                                </div>
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-black text-space-cadet mb-3">Agenda tu sesión <br /> estratégica</h3>
                            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                                Selecciona el día y la hora que mejor te acomoden. Nos conectaremos por videollamada para realizar tu diagnóstico.
                            </p>

                            {/* UI Simulada de Calendario (Días) */}
                            <div className="grid grid-cols-4 gap-2 mb-8">
                                {['Lun', 'Mar', 'Mié', 'Jue'].map((day, i) => (
                                    <div key={day} className={`flex flex-col items-center p-3 rounded-xl border ${i === 1 ? 'bg-space-cadet border-space-cadet text-white shadow-md' : 'bg-gray-50 border-gray-100 text-gray-500'}`}>
                                        <span className="text-[10px] font-bold uppercase mb-1">{day}</span>
                                        <span className={`text-lg font-black ${i === 1 ? 'text-white' : 'text-space-cadet'}`}>{15 + i}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Puntos de beneficio */}
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                                    <CheckCircle2 className="w-4 h-4 text-sea-serpent" /> Videollamada (Zoom/Meet)
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                                    <CheckCircle2 className="w-4 h-4 text-sea-serpent" /> Sin costo por apertura
                                </li>
                            </ul>

                            {/* Botón Principal (Aquí puedes poner tu link de Calendly) */}
                            <a
                                href="https://calendly.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 w-full bg-space-cadet text-white py-4 rounded-2xl font-bold text-lg hover:bg-tufts-blue transition-colors shadow-lg hover:shadow-tufts-blue/30 group/btn"
                            >
                                Abrir Calendario
                                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};