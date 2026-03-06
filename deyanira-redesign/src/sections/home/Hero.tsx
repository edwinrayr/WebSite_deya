import { Calendar, ArrowRight, ShieldCheck, Users, TrendingUp, Sparkles, Star } from 'lucide-react';

export const Hero = () => {
    return (
        <section id="inicio" className="relative bg-white min-h-screen flex items-center pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden z-0">

            {/* Efectos de luces volumétricas de fondo */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-tufts-blue/10 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sea-serpent/10 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3"></div>

            {/* Patrón sutil para darle textura al fondo blanco */}
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.02] mix-blend-multiply -z-10"></div>

            <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Columna de Texto (7 Columnas para mayor respiro) */}
                    <div className="lg:col-span-7 text-center lg:text-left relative z-10">

                        {/* Badge VIP Animado */}
                        <div className="inline-flex items-center gap-3 py-2 px-5 rounded-full bg-white border border-gray-100 shadow-sm mb-8 hover:shadow-md transition-shadow">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sea-serpent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-tufts-blue"></span>
                            </span>
                            <span className="text-space-cadet text-sm font-black tracking-wider uppercase">
                                Asesoría Financiera Premium
                            </span>
                        </div>

                        {/* Título Monumental con Gradiente */}
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-space-cadet tracking-tight mb-8 leading-[1.1]">
                            Construye tu <br className="hidden md:block" />
                            <span className="relative inline-block">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lapis-lazuli via-tufts-blue to-sea-serpent">
                                    libertad financiera
                                </span>
                                {/* Destello decorativo */}
                                <Sparkles className="absolute -top-6 -right-8 w-8 h-8 text-sea-serpent animate-pulse hidden sm:block" />
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Diseñamos estrategias de inversión a medida para multiplicar tu patrimonio y proteger el futuro de tu familia con total transparencia y objetividad.
                        </p>

                        {/* Botones de Acción con Micro-interacciones */}
                        <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                            <a
                                href="#contacto"
                                className="group inline-flex justify-center items-center gap-3 px-8 py-4 text-base font-bold rounded-full text-white bg-space-cadet hover:bg-tufts-blue transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                            >
                                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                Agendar Diagnóstico
                            </a>
                            <a
                                href="#servicios"
                                className="group inline-flex justify-center items-center gap-3 px-8 py-4 border-2 border-gray-200 text-base font-bold rounded-full text-space-cadet bg-white hover:border-sea-serpent hover:text-sea-serpent transition-all duration-300"
                            >
                                Ver Soluciones
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        {/* Social Proof Elegante */}
                        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                            <div className="flex -space-x-4">
                                {/* Avatares simulados de clientes */}
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center overflow-hidden z-20 shadow-sm">
                                        <Users className="w-5 h-5 text-gray-400" />
                                    </div>
                                ))}
                                <div className="w-12 h-12 rounded-full border-4 border-white bg-lapis-lazuli flex items-center justify-center z-30 shadow-sm">
                                    <span className="text-white text-xs font-black">+1k</span>
                                </div>
                            </div>
                            <div className="text-center sm:text-left">
                                <div className="flex gap-1 justify-center sm:justify-start mb-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-sm font-bold text-gray-600">
                                    Familias y empresarios asesorados.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Columna de Imagen (5 Columnas) */}
                    <div className="lg:col-span-5 relative lg:pl-10 mt-10 lg:mt-0">

                        {/* Círculo decorativo giratorio en el fondo */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full border-[1px] border-dashed border-tufts-blue/30 animate-[spin_60s_linear_infinite] -z-10"></div>

                        {/* Contenedor principal tipo "Arco" (Arch Shape) */}
                        <div className="relative mx-auto w-full max-w-sm lg:max-w-full">
                            <div className="relative rounded-t-[10rem] rounded-b-[2rem] shadow-2xl overflow-hidden aspect-[3/4] bg-space-cadet border-[6px] border-white group">
                                {/* IMPORTANTE: Usamos DEY003.jpg u otra foto distinta para no repetir */}
                                <img
                                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                    src="/images/deyanira/DEY003.jpg"
                                    alt="Deyanira Mariscal"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-space-cadet/60 via-transparent to-transparent opacity-80"></div>
                            </div>

                            {/* Tarjeta Flotante Derecha (Glassmorphism + Animación Hover) */}
                            <div className="absolute top-10 -right-6 sm:-right-10 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white flex items-center gap-4 hover:-translate-y-2 transition-transform duration-300 z-20">
                                <div className="bg-sea-serpent p-3 rounded-full shadow-lg shadow-sea-serpent/30">
                                    <TrendingUp className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm font-black text-space-cadet">Crecimiento</p>
                                    <p className="text-xs font-bold text-gray-500">Resultados Reales</p>
                                </div>
                            </div>

                            {/* Tarjeta Flotante Izquierda (Glassmorphism + Animación Bounce) */}
                            <div className="absolute -bottom-8 -left-6 sm:-left-10 bg-white p-5 rounded-[1.5rem] shadow-2xl border border-gray-100 flex items-center gap-4 animate-[bounce_3s_ease-in-out_infinite] z-20">
                                <div className="bg-lapis-lazuli/10 p-3.5 rounded-full">
                                    <ShieldCheck className="w-8 h-8 text-lapis-lazuli" />
                                </div>
                                <div>
                                    <p className="text-base font-black text-space-cadet">Patrimonio Blindado</p>
                                    <p className="text-sm font-medium text-gray-500">Estrategias Seguras</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};