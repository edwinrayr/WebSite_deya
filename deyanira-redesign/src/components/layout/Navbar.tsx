import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { INavItem } from '../../types/index';
import { User, Briefcase, Award, Menu, X, CalendarCheck } from 'lucide-react';

const navItems: INavItem[] = [
    { label: 'Nosotros', href: '/nosotros', icon: User },
    { label: 'Servicios', href: '/servicios', icon: Briefcase },
    { label: 'Reconocimientos', href: '/reconocimientos', icon: Award },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Cierra el menú móvil al cambiar de ruta y sube al inicio
    useEffect(() => {
        setIsOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);

    return (
        <nav
            // 1. CORRECCIÓN DE CONTRASTE: Usamos bg-white/95 en ambos estados. 
            // Esto asegura que la barra sea casi sólida, evitando que los fondos oscuros se coman el texto, 
            // pero manteniendo el elegante efecto de desenfoque (backdrop-blur).
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${scrolled
                    ? 'bg-white/95 backdrop-blur-xl border-gray-200 shadow-[0_10px_30px_-15px_rgba(25,37,91,0.15)] py-3'
                    : 'bg-white/95 backdrop-blur-md border-gray-100 py-4 lg:py-6'
                }`}
        >
            <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
                <div className="flex justify-between items-center">

                    {/* Logo con animación */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link
                            to="/"
                            className="group flex items-center gap-3"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            <img
                                className={`w-auto transition-all duration-500 transform group-hover:scale-105 ${scrolled ? 'h-9 lg:h-10' : 'h-11 lg:h-12'}`}
                                src="/images/logo/LogotipoTonoAzul-1.png"
                                alt="The Money Bridge Logo"
                            />
                        </Link>
                    </div>

                    {/* Menú de Escritorio */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = location.pathname === item.href;

                            return (
                                <Link
                                    key={item.label}
                                    to={item.href}
                                    className="group relative flex items-center gap-2 py-2 font-bold transition-colors duration-300"
                                >
                                    {/* 2. CORRECCIÓN DE TEXTOS: Oscurecemos los colores inactivos (text-gray-500 y text-gray-700) para máxima legibilidad */}
                                    {Icon && (
                                        <Icon className={`w-4 h-4 transition-colors duration-300 ${isActive ? 'text-sea-serpent' : 'text-gray-400 group-hover:text-tufts-blue'}`} />
                                    )}

                                    <span className={`transition-colors duration-300 ${isActive ? 'text-space-cadet' : 'text-gray-500 group-hover:text-space-cadet'}`}>
                                        {item.label}
                                    </span>

                                    {/* Línea animada (Underline Reveal) */}
                                    <span className={`absolute bottom-0 left-1/2 h-[2px] bg-gradient-to-r from-tufts-blue to-sea-serpent transition-all duration-300 -translate-x-1/2 ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                                        }`}></span>
                                </Link>
                            )
                        })}

                        {/* Separador vertical */}
                        <div className="w-[1px] h-8 bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-2"></div>

                        {/* Botón CTA Premium */}
                        <Link
                            to="/contacto"
                            className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 bg-space-cadet text-white font-bold rounded-full overflow-hidden shadow-lg hover:shadow-tufts-blue/30 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-space-cadet via-tufts-blue to-space-cadet opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <CalendarCheck className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                            <span className="relative z-10">Agendar Asesoría</span>
                        </Link>
                    </div>

                    {/* Botón de Menú Móvil */}
                    <div className="flex lg:hidden items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="relative w-10 h-10 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center text-space-cadet hover:bg-white hover:text-tufts-blue shadow-sm transition-colors focus:outline-none"
                        >
                            <span className="sr-only">Abrir menú</span>
                            <div className="absolute transition-all duration-300 transform">
                                {!isOpen ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Menú Móvil Desplegable */}
            <div
                className={`lg:hidden fixed top-[80px] left-4 right-4 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto visible'
                        : 'opacity-0 -translate-y-4 pointer-events-none invisible'
                    }`}
            >
                <div className="bg-white/95 backdrop-blur-xl border border-gray-100 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(25,37,91,0.2)] p-4 flex flex-col space-y-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.href;

                        return (
                            <Link
                                key={item.label}
                                to={item.href}
                                className={`flex items-center gap-4 px-5 py-4 rounded-2xl text-base font-bold transition-all duration-300 ${isActive
                                        ? 'text-white bg-space-cadet shadow-md'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-space-cadet'
                                    }`}
                            >
                                {Icon && <Icon className={`w-5 h-5 ${isActive ? 'text-sea-serpent' : 'text-gray-400'}`} />}
                                {item.label}
                            </Link>
                        )
                    })}

                    <div className="pt-2 mt-2 border-t border-gray-100">
                        <Link
                            to="/contacto"
                            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-tufts-blue to-sea-serpent text-white px-6 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300"
                        >
                            <CalendarCheck className="w-5 h-5" />
                            Agendar Asesoría
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};