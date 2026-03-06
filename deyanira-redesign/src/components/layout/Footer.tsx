// src/components/layout/Footer.tsx
import { Instagram, Linkedin, Mail, Phone, ArrowUp, ShieldCheck, ChevronRight, MapPin } from 'lucide-react';
import type { INavItem } from '../../types/index';
import { Link } from 'react-router-dom'; // Importante: usar Link para navegación interna

// Eliminamos 'Inicio' del arreglo
const footerNav: INavItem[] = [
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Reconocimientos', href: '/reconocimientos' },
];

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full bg-space-cadet text-white pt-20 pb-8 relative overflow-hidden z-0">

            {/* --- Elementos Decorativos de Fondo --- */}
            {/* Borde luminoso superior infinito */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-sea-serpent/30 to-transparent"></div>

            {/* Luces volumétricas sutiles */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-tufts-blue/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-sea-serpent/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            {/* Marca de agua gigante y rotada en el fondo (Opcional, pero muy premium) */}
            <div className="absolute -right-32 -bottom-32 opacity-[0.03] transform rotate-12 pointer-events-none select-none">
                <ShieldCheck className="w-[600px] h-[600px] text-white" />
            </div>

            <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

                {/* --- Grid Principal del Footer --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 mb-16">

                    {/* Columna 1: Marca y Redes (Ocupa 4 columnas) */}
                    <div className="lg:col-span-4 space-y-8">
                        <img
                            src="/images/logo/LogotipoBlanco-3.png"
                            alt="The Money Bridge Logo"
                            className="h-16 w-auto drop-shadow-xl"
                        />
                        <p className="text-gray-400 leading-relaxed max-w-sm text-base">
                            Especialista en Inversiones y Patrimonio. Diseñando estrategias seguras para multiplicar tu dinero paso a paso.
                        </p>

                        {/* Redes Sociales con efecto Glassmorphism */}
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/themoney.bridge"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-sea-serpent hover:border-sea-serpent transition-all duration-300 hover:-translate-y-1 shadow-lg"
                            >
                                <Instagram className="w-5 h-5 text-gray-300 group-hover:text-space-cadet transition-colors" />
                            </a>
                            <a
                                href="#"
                                className="group w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-tufts-blue hover:border-tufts-blue transition-all duration-300 hover:-translate-y-1 shadow-lg"
                            >
                                <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Columna 2: Navegación Rápida (Ocupa 2 columnas) */}
                    <div className="lg:col-span-2">
                        <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-sea-serpent"></span>
                            Explorar
                        </h4>
                        <ul className="space-y-4">
                            {footerNav.map((item) => (
                                <li key={item.label}>
                                    {/* Cambiamos <a> por <Link> de React Router */}
                                    <Link
                                        to={item.href}
                                        className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                                        onClick={scrollToTop}
                                    >
                                        <ChevronRight className="w-4 h-4 text-sea-serpent opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        <span className="group-hover:translate-x-2 transition-transform duration-300">
                                            {item.label}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Columna 3: Contacto Directo (Ocupa 3 columnas) */}
                    <div className="lg:col-span-3">
                        <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-tufts-blue"></span>
                            Contacto
                        </h4>
                        <ul className="space-y-6">
                            <li className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-tufts-blue/20 transition-colors">
                                    <Phone className="w-4 h-4 text-tufts-blue" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-0.5">Llamada</p>
                                    <p className="text-gray-300 group-hover:text-white transition-colors font-medium">55 2093 4484</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-tufts-blue/20 transition-colors">
                                    <Mail className="w-4 h-4 text-tufts-blue" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-0.5">Email</p>
                                    <p className="text-gray-300 group-hover:text-white transition-colors text-sm font-medium">contacto@themoneybridge.com.mx</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-sea-serpent/20 transition-colors">
                                    <MapPin className="w-4 h-4 text-sea-serpent" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-0.5">Oficina</p>
                                    <p className="text-gray-300 font-medium">Polanco, CDMX</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 4: Tarjeta de Seguridad (Ocupa 3 columnas) */}
                    <div className="lg:col-span-3 h-full">
                        {/* Contenedor con borde de degradado y fondo Glassmorphism oscuro */}
                        <div className="relative h-full rounded-3xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-transparent overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-bl from-sea-serpent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="h-full bg-[#111A42]/90 backdrop-blur-xl p-8 rounded-3xl flex flex-col justify-between relative z-10">
                                <div>
                                    <div className="w-14 h-14 rounded-2xl bg-sea-serpent/10 flex items-center justify-center mb-5">
                                        <ShieldCheck className="w-7 h-7 text-sea-serpent" />
                                    </div>
                                    <h4 className="text-white font-bold text-xl mb-3">Asesoría Protegida</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Práctica financiera regulada y certificada oficialmente por la CNSF.
                                    </p>
                                </div>

                                <button
                                    onClick={scrollToTop}
                                    className="mt-8 w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white hover:bg-sea-serpent hover:border-sea-serpent hover:text-space-cadet transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
                                >
                                    Volver arriba
                                    <ArrowUp className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                {/* --- Copyright y Legales --- */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs font-bold uppercase tracking-widest">
                    <p>© {new Date().getFullYear()} The Money Bridge. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-sea-serpent transition-colors">Aviso de Privacidad</a>
                        <a href="#" className="hover:text-sea-serpent transition-colors">Términos Legales</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};