import { useState, useEffect } from 'react';
import type { INavItem } from '../../types/index';
import { Home, User, Briefcase, Award, Menu, X, Calendar } from 'lucide-react';

const navItems: INavItem[] = [
    { label: 'Inicio', href: '#inicio', icon: Home },
    { label: 'Nosotros', href: '#nosotros', icon: User },
    { label: 'Servicios', href: '#servicios', icon: Briefcase },
    { label: 'Reconocimientos', href: '#reconocimientos', icon: Award },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200 py-2'
                    : 'bg-white border-b border-gray-100 py-4'
                }`}
        >
            {/* AQUÍ ESTÁ EL CAMBIO: max-w-[1600px] y padding lateral más amplio (lg:px-16) */}
            <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
                <div className="flex justify-between items-center transition-all duration-300">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer">
                        <a href="#inicio" className="flex items-center gap-3">
                            <img
                                className={`w-auto transition-all duration-300 ${scrolled ? 'h-10' : 'h-12'}`}
                                src="/images/logo/LogotipoTonoAzul-1.png"
                                alt="The Money Bridge Logo"
                            />
                        </a>
                    </div>

                    {/* Menú de Escritorio con Iconos */}
                    <div className="hidden lg:flex items-center space-x-2 lg:space-x-6">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="flex items-center gap-2 px-3 py-2 text-space-cadet hover:text-lapis-lazuli hover:bg-blue-50 rounded-lg font-medium transition-all duration-200"
                                >
                                    {Icon && <Icon className="w-4 h-4" />}
                                    {item.label}
                                </a>
                            )
                        })}

                        {/* Separador visual sutil */}
                        <div className="w-px h-6 bg-gray-300 mx-2 hidden lg:block"></div>

                        <a
                            href="#contacto"
                            className="flex items-center gap-2 bg-tufts-blue text-white px-6 py-2.5 rounded-full font-medium hover:bg-space-cadet hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ml-2"
                        >
                            <Calendar className="w-4 h-4" />
                            Agendar Asesoría
                        </a>
                    </div>

                    {/* Botón de Menú Móvil */}
                    <div className="flex lg:hidden items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="p-2 text-space-cadet hover:text-lapis-lazuli bg-gray-50 rounded-lg focus:outline-none transition-colors"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Abrir menú principal</span>
                            {!isOpen ? <Menu className="w-6 h-6" /> : <X className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menú Móvil Desplegable */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100 shadow-xl absolute w-full ${isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 py-0 border-transparent'
                    }`}
                id="mobile-menu"
            >
                <div className="px-6 flex flex-col space-y-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-space-cadet hover:text-lapis-lazuli hover:bg-blue-50 transition-colors"
                            >
                                {Icon && <Icon className="w-5 h-5 text-lapis-lazuli" />}
                                {item.label}
                            </a>
                        )
                    })}
                    <div className="pt-4 pb-2">
                        <a
                            href="#contacto"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center gap-2 w-full bg-tufts-blue text-white px-6 py-4 rounded-xl font-medium hover:bg-space-cadet shadow-md transition-colors"
                        >
                            <Calendar className="w-5 h-5" />
                            Agendar Asesoría
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};