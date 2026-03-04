import { Calendar, ArrowRight, ShieldCheck, Users, Star } from 'lucide-react';

export const Hero = () => {
    return (
        // 1. AJUSTE DE PANTALLA COMPLETA Y ESPACIADOS: 
        // Agregamos min-h-screen y flex items-center.
        // Redujimos el pt (padding-top) a pt-24 (lo justo para que no lo tape la navbar) y el pb (padding-bottom) a pb-12.
        <section id="inicio" className="relative bg-white min-h-screen flex items-center pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden">

            {/* Elemento decorativo sutil en el fondo */}
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gray-50 rounded-l-[4rem] -z-10 hidden lg:block"></div>

            <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

                    {/* Columna de Texto */}
                    <div className="lg:col-span-6 text-center lg:text-left mb-12 lg:mb-0">
                        {/* Badge de presentación */}
                        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-50 border border-blue-100 mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-tufts-blue"></span>
                            <span className="text-lapis-lazuli text-sm font-bold tracking-wider uppercase">
                                Deyanira Mariscal
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-space-cadet tracking-tight mb-6 leading-tight">
                            Especialista en <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lapis-lazuli to-tufts-blue">
                                Inversiones
                            </span> y Patrimonio
                        </h1>

                        <p className="mt-4 text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Te ayudo a construir un mejor futuro económico. Toma decisiones inteligentes para garantizar seguridad, libertad y prosperidad financiera para ti y tu familia.
                        </p>

                        {/* Botones con Iconos de Lucide */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="#contacto"
                                className="inline-flex justify-center items-center gap-2 px-8 py-3.5 text-base font-semibold rounded-full text-white bg-tufts-blue hover:bg-space-cadet transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                <Calendar className="w-5 h-5" />
                                Agendar Asesoría
                            </a>
                            <a
                                href="#servicios"
                                className="inline-flex justify-center items-center gap-2 px-8 py-3.5 border-2 border-gray-200 text-base font-semibold rounded-full text-space-cadet bg-white hover:border-lapis-lazuli hover:text-lapis-lazuli transition-all duration-300"
                            >
                                Conocer Servicios
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>

                        {/* 'Trust Indicator' Mejorado */}
                        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                            <div className="flex -space-x-3">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center border-4 border-white z-20">
                                    <Users className="w-5 h-5 text-lapis-lazuli" />
                                </div>
                                <div className="w-12 h-12 rounded-full bg-tufts-blue flex items-center justify-center border-4 border-white z-10 text-white font-bold text-xs">
                                    +1k
                                </div>
                            </div>
                            <div className="text-center sm:text-left">
                                <div className="flex gap-1 justify-center sm:justify-start mb-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-sm font-medium text-gray-600">
                                    Personas asesoradas exitosamente
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Columna de Imagen */}
                    <div className="lg:col-span-6 relative">
                        {/* Redujimos un poco el max-w para que no se estire de más en pantallas gigantes y mantenga proporción */}
                        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
                            <div className="relative rounded-[2rem] shadow-2xl overflow-hidden aspect-[3/4] bg-gray-100 border-8 border-white">
                                <img
                                    className="absolute inset-0 h-full w-full object-cover object-top"
                                    src="/images/deyanira/DEY001.jpg"
                                    alt="Deyanira Mariscal, Especialista en Finanzas"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-space-cadet/40 via-transparent to-transparent"></div>
                            </div>

                            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-50 hidden md:flex items-center gap-4 animate-fade-in-up z-10">
                                <div className="bg-sea-serpent/10 p-3.5 rounded-full">
                                    <ShieldCheck className="w-7 h-7 text-sea-serpent" />
                                </div>
                                <div>
                                    <p className="text-base font-extrabold text-space-cadet">Patrimonio Seguro</p>
                                    <p className="text-sm font-medium text-gray-500">Inversión confiable</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};