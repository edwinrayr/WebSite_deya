import { Instagram, Linkedin, Mail, Phone, ArrowUp, ShieldCheck, ChevronRight, MapPin } from 'lucide-react';
import type { INavItem } from '../../types/index';

const footerNav: INavItem[] = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Reconocimientos', href: '#reconocimientos' },
];

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        // Añadimos w-full y un color ligeramente más oscuro (#111A42) para que contraste con la sección de contacto
        <footer className="w-full bg-[#111A42] text-white pt-20 pb-8 relative overflow-hidden">

            {/* Borde superior luminoso infinito */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sea-serpent/40 to-transparent"></div>

            {/* Marca de agua del logo (Gigante y casi transparente en el fondo derecho) */}
            <img
                src="/images/logo/LogotipoBlanco-3.png"
                alt="Watermark"
                className="absolute -right-20 -bottom-20 w-[500px] opacity-5 pointer-events-none rotate-12"
            />

            {/* Contenedor centralizado y alineado con el resto de la web */}
            <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Columna 1: Marca y Eslogan (Ocupa 4 columnas) */}
                    <div className="lg:col-span-4 space-y-6">
                        <img
                            src="/images/logo/LogotipoBlanco-3.png"
                            alt="The Money Bridge Logo"
                            className="h-16 w-auto drop-shadow-lg"
                        />
                        <p className="text-gray-400 leading-relaxed max-w-sm text-lg">
                            Especialista en Inversiones y Patrimonio. Construyendo seguridad y prosperidad financiera paso a paso.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="https://www.instagram.com/themoney.bridge" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-sea-serpent hover:border-sea-serpent hover:shadow-lg hover:shadow-sea-serpent/20 transition-all duration-300 hover:-translate-y-1 group">
                                <Instagram className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-tufts-blue hover:border-tufts-blue hover:shadow-lg hover:shadow-tufts-blue/20 transition-all duration-300 hover:-translate-y-1 group">
                                <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Columna 2: Navegación Rápida Dinámica (Ocupa 2 columnas) */}
                    <div className="lg:col-span-2">
                        <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-sea-serpent"></span>
                            Explorar
                        </h4>
                        <ul className="space-y-4">
                            {footerNav.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                                    >
                                        <ChevronRight className="w-4 h-4 text-sea-serpent opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        <span className="group-hover:translate-x-2 transition-transform duration-300">
                                            {item.label}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Columna 3: Contacto Oficial (Ocupa 3 columnas) */}
                    <div className="lg:col-span-3">
                        <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-tufts-blue"></span>
                            Contacto
                        </h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4 group">
                                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-tufts-blue/20 transition-colors">
                                    <Phone className="w-5 h-5 text-tufts-blue" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Teléfono</span>
                                    <span className="text-gray-300 group-hover:text-white transition-colors">55 2093 4484</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-tufts-blue/20 transition-colors">
                                    <Mail className="w-5 h-5 text-tufts-blue" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Email</span>
                                    <span className="text-gray-300 group-hover:text-white transition-colors text-sm">contacto@themoneybridge.com.mx</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-sea-serpent/20 transition-colors">
                                    <MapPin className="w-5 h-5 text-sea-serpent" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Ubicación</span>
                                    <span className="text-gray-300 group-hover:text-white transition-colors">Polanco, CDMX</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 4: Tarjeta VIP "Volver arriba" (Ocupa 3 columnas) */}
                    <div className="lg:col-span-3">
                        <div className="h-full bg-gradient-to-br from-white/10 to-transparent p-[1px] rounded-3xl">
                            <div className="h-full bg-[#111A42]/80 backdrop-blur-xl p-8 rounded-3xl flex flex-col justify-between">
                                <div>
                                    <ShieldCheck className="w-10 h-10 text-sea-serpent mb-4" />
                                    <h4 className="text-white font-bold text-xl mb-2">Comunidad Segura</h4>
                                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                        Asesoría financiera autorizada y certificada por la CNSF.
                                    </p>
                                </div>
                                <button
                                    onClick={scrollToTop}
                                    className="w-full bg-white/10 text-white border border-white/20 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-sea-serpent hover:border-sea-serpent hover:text-space-cadet transition-all duration-300 group"
                                >
                                    Volver arriba
                                    <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Línea final de Copyright */}
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