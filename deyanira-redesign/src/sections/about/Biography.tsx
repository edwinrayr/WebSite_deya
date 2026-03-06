// src/sections/about/Biography.tsx
import { BookOpen, Target, Quote, CheckCircle2, TrendingUp } from 'lucide-react';

export const Biography = () => {
    return (
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden z-0">

            {/* Decoración sutil de fondo para profundidad */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-tufts-blue/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sea-serpent/5 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

            <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
                <div className="lg:grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* --- COLUMNA IZQUIERDA: Composición Fotográfica (5 columnas) --- */}
                    <div className="lg:col-span-5 mb-24 sm:mb-32 lg:mb-0 relative z-10 group">

                        {/* Marco decorativo rotado (Se alinea en hover) */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-tufts-blue/20 to-sea-serpent/20 rounded-[2.5rem] transform -rotate-3 transition-transform duration-700 group-hover:rotate-0 -z-10 mt-4 ml-4"></div>

                        {/* Contenedor de la Imagen Principal */}
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] bg-gray-100 border-4 border-white">
                            <img
                                src="/images/deyanira/IMG_7909.jpg"
                                alt="Deyanira Mariscal Perfil"
                                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                            />
                            {/* Overlay sutil para la parte inferior de la foto */}
                            <div className="absolute inset-0 bg-gradient-to-t from-space-cadet/40 via-transparent to-transparent opacity-60"></div>
                        </div>

                        {/* Sello Flotante de Experiencia (Arriba Izquierda) */}
                        <div className="absolute -top-6 -left-6 sm:-left-10 bg-white p-2 rounded-2xl shadow-xl border border-gray-100 animate-[bounce_4s_ease-in-out_infinite] z-20">
                            <div className="bg-gradient-to-br from-space-cadet to-lapis-lazuli text-white px-5 py-3 rounded-xl flex flex-col items-center justify-center">
                                <span className="text-2xl font-black">+10</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-tufts-blue">Años Exp.</span>
                            </div>
                        </div>

                        {/* Tarjeta de Filosofía de Cristal (Abajo Derecha) */}
                        <div className="absolute -bottom-12 sm:-bottom-16 right-0 sm:-right-8 w-[92%] sm:w-[340px] bg-white/80 backdrop-blur-xl p-6 sm:p-8 rounded-[2rem] shadow-2xl z-30 transition-transform duration-500 hover:-translate-y-2 border border-white">
                            {/* Comilla Gigante de Fondo */}
                            <Quote className="absolute -top-4 right-4 w-20 h-20 text-sea-serpent/10 rotate-12 pointer-events-none" />

                            <div className="w-10 h-10 rounded-full bg-sea-serpent flex items-center justify-center mb-4 shadow-lg shadow-sea-serpent/30">
                                <Quote className="w-4 h-4 text-white fill-white" />
                            </div>
                            <p className="font-bold text-space-cadet text-base sm:text-lg leading-relaxed italic relative z-10">
                                "Lo que más me gusta de mi profesión es hacer realidad los sueños de mis clientes: ahorrar para un futuro tranquilo, viajar o emprender."
                            </p>
                        </div>
                    </div>

                    {/* --- COLUMNA DERECHA: Texto y Tarjetas de Enfoque (7 columnas) --- */}
                    <div className="lg:col-span-7 lg:pl-6">

                        {/* Etiqueta de sección (Badge) */}
                        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-50 border border-blue-100 mb-6 transition-all hover:bg-blue-100">
                            <span className="w-2 h-2 rounded-full bg-lapis-lazuli animate-pulse"></span>
                            <span className="text-lapis-lazuli text-sm font-bold tracking-wider uppercase">
                                Mi Historia
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-space-cadet mb-8 leading-tight">
                            Experiencia real en el <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lapis-lazuli to-tufts-blue">
                                corazón financiero.
                            </span>
                        </h2>

                        <div className="prose prose-lg text-gray-600 mb-10">
                            <p className="mb-8 leading-relaxed text-lg">
                                Mi enfoque no se basa en teoría de libros, sino en años de práctica real administrando portafolios en el sistema financiero mexicano. Trabajé como planeadora financiera en <strong className="text-space-cadet">BBVA</strong> y analista de sociedades de inversión en la <strong className="text-space-cadet">CNBV</strong>.
                            </p>

                            {/* Checklist Premium */}
                            <ul className="space-y-5 mb-10">
                                <li className="flex items-start gap-4 group">
                                    <div className="w-8 h-8 rounded-lg bg-sea-serpent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-sea-serpent transition-colors">
                                        <CheckCircle2 className="w-5 h-5 text-sea-serpent group-hover:text-white transition-colors" />
                                    </div>
                                    <span className="text-gray-700 font-medium pt-1">Lectora compulsiva y estudiosa de las tendencias económicas mundiales.</span>
                                </li>
                                <li className="flex items-start gap-4 group">
                                    <div className="w-8 h-8 rounded-lg bg-tufts-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-tufts-blue transition-colors">
                                        <TrendingUp className="w-5 h-5 text-tufts-blue group-hover:text-white transition-colors" />
                                    </div>
                                    <span className="text-gray-700 font-medium pt-1">Diseño de estrategias patrimoniales robustas frente a escenarios globales.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Cajas de Enfoque (Estilo Tech/Data Cards) */}
                        <div className="grid sm:grid-cols-2 gap-6">

                            {/* Tarjeta 1 */}
                            <div className="group relative bg-gray-50 p-6 rounded-[2rem] border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                {/* Línea luminosa superior (Aparece en hover) */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sea-serpent to-tufts-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                                    <Target className="w-6 h-6 text-tufts-blue" />
                                </div>
                                <h3 className="text-xl font-bold text-space-cadet mb-2">Mi Público Ideal</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Asesoro a profesionistas y empresarios de 25 a 59 años con el deseo firme de multiplicar su capital en el mercado.
                                </p>
                            </div>

                            {/* Tarjeta 2 */}
                            <div className="group relative bg-gray-50 p-6 rounded-[2rem] border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                {/* Línea luminosa superior (Aparece en hover) */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lapis-lazuli to-space-cadet opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                                    <BookOpen className="w-6 h-6 text-lapis-lazuli" />
                                </div>
                                <h3 className="text-xl font-bold text-space-cadet mb-2">Autora Bestseller</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Coautora del libro <em>"Compromiso Emprendedor"</em>, éxito de ventas (Bestseller) en Amazon México.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};