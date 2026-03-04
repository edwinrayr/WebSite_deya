// src/components/layout/Footer.tsx
import { Instagram, Linkedin, Mail, Phone, ArrowUp, Shield } from 'lucide-react';
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
        <footer className="bg-space-cadet text-white pt-16 pb-8 relative overflow-hidden">
            {/* Elementos decorativos de marca */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tufts-blue via-sea-serpent to-lapis-lazuli"></div>

            <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Columna 1: Marca y Eslogan */}
                    <div className="space-y-6">
                        <img
                            src="/logo/LogotipoBlanco-3.png"
                            alt="The Money Bridge Logo"
                            className="h-14 w-auto"
                        />
                        <p className="text-gray-400 leading-relaxed max-w-xs">
                            Especialista en Inversiones y Patrimonio. Construyendo seguridad y prosperidad financiera.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/themoney.bridge" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-tufts-blue transition-all duration-300 group">
                                <Instagram className="w-5 h-5 group-hover:scale-110" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-tufts-blue transition-all duration-300 group">
                                <Linkedin className="w-5 h-5 group-hover:scale-110" />
                            </a>
                        </div>
                    </div>

                    {/* Columna 2: Navegación Rápida */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-l-4 border-sea-serpent pl-3">Explorar</h4>
                        <ul className="space-y-4">
                            {footerNav.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="text-gray-400 hover:text-sea-serpent hover:pl-2 transition-all duration-300 flex items-center gap-2"
                                    >
                                        <span className="h-px w-0 group-hover:w-4 bg-sea-serpent transition-all"></span>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Columna 3: Contacto Oficial */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-l-4 border-sea-serpent pl-3">Contacto</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-5 h-5 text-tufts-blue" />
                                <span>55 2093 4484</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-tufts-blue" />
                                <span className="text-sm sm:text-base">contacto@themoneybridge.com.mx</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Shield className="w-5 h-5 text-sea-serpent" />
                                <span className="text-sm italic uppercase tracking-tighter">Asesoría Certificada CNSF</span>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 4: Newsletter / CTA final */}
                    <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                        <h4 className="text-white font-bold mb-4">¿Deseas invertir?</h4>
                        <p className="text-gray-400 text-sm mb-6">
                            Únete a la comunidad Alas del Éxito Financiero.
                        </p>
                        <button
                            onClick={scrollToTop}
                            className="w-full bg-sea-serpent text-space-cadet py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white transition-colors duration-300"
                        >
                            Volver arriba
                            <ArrowUp className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Línea final de Copyright */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs font-medium uppercase tracking-widest">
                    <p>© {new Date().getFullYear()} The Money Bridge. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Aviso de Privacidad</a>
                        <a href="#" className="hover:text-white transition-colors">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};