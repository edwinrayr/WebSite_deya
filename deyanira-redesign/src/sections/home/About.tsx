// src/sections/home/About.tsx
import { GraduationCap, BookOpen, Building2, Award, Quote } from 'lucide-react';

export const About = () => {
    return (
        // Usamos bg-gray-50 para crear un contraste suave con el blanco del Hero
        <section id="nosotros" className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden z-0">

            {/* Luces volumétricas sutiles de fondo para mantener el estilo premium del Hero */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-tufts-blue/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sea-serpent/5 rounded-full blur-[100px] -z-10 translate-x-1/3 translate-y-1/3"></div>

            <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

                {/* Estructura grid responsiva */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* Columna de Imagen (Ocupa 5 columnas. En móvil pasa abajo, en PC a la izquierda) */}
                    <div className="lg:col-span-5 relative group order-2 lg:order-1 mt-12 lg:mt-0">

                        {/* Borde arquitectónico desplazado con animación en hover */}
                        <div className="absolute top-6 -left-6 w-full h-full rounded-[2.5rem] border-2 border-dashed border-tufts-blue/30 -z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-700"></div>

                        {/* Contenedor principal de la foto */}
                        <div className="relative rounded-[2.5rem] shadow-2xl overflow-hidden aspect-[4/5] bg-white border-8 border-white">
                            {/* NOTA: Mantuvimos DEY002.jpg para no repetir las del Hero ni del AboutPage */}
                            <img
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                src="/images/deyanira/DEY002.jpg"
                                alt="Deyanira Mariscal con alcancía"
                            />
                            {/* Gradiente oscuro sutil abajo para que la tarjeta contraste bien */}
                            <div className="absolute inset-0 bg-gradient-to-t from-space-cadet/50 via-transparent to-transparent opacity-60"></div>
                        </div>

                        {/* Tarjeta de Cita (Glassmorphism VIP) */}
                        <div className="absolute -bottom-8 -right-4 sm:-right-10 w-[95%] sm:w-[320px] bg-white/80 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl border border-white z-20 hover:-translate-y-2 transition-transform duration-500">
                            {/* Icono de comillas flotante */}
                            <div className="absolute -top-6 left-8 w-12 h-12 bg-sea-serpent rounded-full flex items-center justify-center shadow-lg shadow-sea-serpent/40">
                                <Quote className="w-5 h-5 text-white fill-white" />
                            </div>
                            <p className="mt-4 text-sm sm:text-base font-bold text-space-cadet italic leading-relaxed">
                                "El cochinito es un recordatorio de que siempre hay que ahorrar para invertir, no para gastar."
                            </p>
                        </div>
                    </div>

                    {/* Columna de Texto (Ocupa 7 columnas) */}
                    <div className="lg:col-span-7 order-1 lg:order-2">

                        {/* Badge de Sección con punto animado */}
                        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-lapis-lazuli animate-pulse"></span>
                            <span className="text-lapis-lazuli text-sm font-bold tracking-wider uppercase">
                                Acerca de Mí
                            </span>
                        </div>

                        {/* Título Monumental */}
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-space-cadet tracking-tight mb-6 leading-[1.1]">
                            Pasión por las <span className="text-transparent bg-clip-text bg-gradient-to-r from-tufts-blue to-sea-serpent">matemáticas</span> y tu crecimiento.
                        </h2>

                        <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
                            Soy una especialista comprometida con la educación financiera. Mi misión es ayudarte a tomar decisiones inteligentes que te permitan construir seguridad, libertad y prosperidad patrimonial.
                        </p>

                        {/* Cuadrícula de Credenciales (2x2 Grid interactivo) */}
                        <div className="grid sm:grid-cols-2 gap-5">

                            {/* Credencial 1 */}
                            <div className="group bg-white p-6 rounded-[1.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-tufts-blue/30 cursor-default">
                                <div className="w-12 h-12 rounded-xl bg-tufts-blue/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-tufts-blue transition-all duration-300">
                                    <GraduationCap className="w-6 h-6 text-tufts-blue group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-lg font-bold text-space-cadet mb-2">Formación Académica</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">Licenciada en Actuaría por la UNAM.</p>
                            </div>

                            {/* Credencial 2 */}
                            <div className="group bg-white p-6 rounded-[1.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-space-cadet/30 cursor-default">
                                <div className="w-12 h-12 rounded-xl bg-space-cadet/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-space-cadet transition-all duration-300">
                                    <Building2 className="w-6 h-6 text-space-cadet group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-lg font-bold text-space-cadet mb-2">Corporativo</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">Ex-planeadora BBVA y analista CNBV.</p>
                            </div>

                            {/* Credencial 3 */}
                            <div className="group bg-white p-6 rounded-[1.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-sea-serpent/30 cursor-default">
                                <div className="w-12 h-12 rounded-xl bg-sea-serpent/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-sea-serpent transition-all duration-300">
                                    <Award className="w-6 h-6 text-sea-serpent group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-lg font-bold text-space-cadet mb-2">Reconocimiento</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">MDRT Member (Top 3% mundial).</p>
                            </div>

                            {/* Credencial 4 */}
                            <div className="group bg-white p-6 rounded-[1.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-lapis-lazuli/30 cursor-default">
                                <div className="w-12 h-12 rounded-xl bg-lapis-lazuli/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-lapis-lazuli transition-all duration-300">
                                    <BookOpen className="w-6 h-6 text-lapis-lazuli group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-lg font-bold text-space-cadet mb-2">Autora Bestseller</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">Coautora de "Compromiso Emprendedor".</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};