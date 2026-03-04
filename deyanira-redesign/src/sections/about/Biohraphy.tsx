// src/sections/about/Biography.tsx
import { BookOpen, Target, Quote } from 'lucide-react';

export const Biography = () => {
    return (
        <section className="py-16 lg:py-24 bg-white overflow-hidden">
            <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
                <div className="lg:grid lg:grid-cols-12 gap-16 items-start">

                    {/* Columna Izquierda: Fotografías y Cita (5 columnas) */}
                    <div className="lg:col-span-5 mb-12 lg:mb-0 relative">
                        {/* Puedes usar otra foto de la serie IMG_... para variar respecto al Home */}
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] bg-gray-100">
                            <img
                                src="/images/deyanira/IMG_7909.jpg"
                                alt="Deyanira Mariscal Perfil"
                                className="absolute inset-0 w-full h-full object-cover object-top"
                            />
                        </div>

                        {/* Tarjeta de Filosofía superpuesta */}
                        <div className="absolute -bottom-8 -right-8 lg:-right-12 bg-tufts-blue text-white p-8 rounded-3xl shadow-xl max-w-[320px]">
                            <Quote className="w-10 h-10 text-white/30 mb-4" />
                            <p className="font-medium text-lg leading-relaxed italic">
                                "Lo que más me gusta de mi profesión es hacer realidad los sueños de mis clientes: ahorrar para un futuro tranquilo, irse de viaje, o tener su propio negocio."
                            </p>
                        </div>
                    </div>

                    {/* Columna Derecha: Texto de Biografía (7 columnas) */}
                    <div className="lg:col-span-7 lg:pl-8 pt-8">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-space-cadet mb-8">
                            Trayectoria y <span className="text-tufts-blue">Experiencia Corporativa</span>
                        </h2>

                        <div className="prose prose-lg text-gray-600 mb-12">
                            <p className="mb-6 leading-relaxed">
                                Mi enfoque no se basa solo en la teoría, sino en años de experiencia práctica en el corazón del sistema financiero mexicano. Trabajé como planeadora financiera en <strong>BBVA</strong> y como analista en sociedades de inversión dentro de la <strong>Comisión Nacional Bancaria y de Valores (CNBV)</strong>.
                            </p>
                            <p className="leading-relaxed">
                                Soy una lectora compulsiva y estudiosa permanente de las tendencias económicas a nivel mundial. Esta preparación constante me permite diseñar estrategias patrimoniales robustas frente a cualquier escenario global.
                            </p>
                        </div>

                        {/* Cajas de Enfoque */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-sea-serpent hover:bg-white hover:shadow-lg transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-sea-serpent/10 flex items-center justify-center mb-4">
                                    <Target className="w-6 h-6 text-sea-serpent" />
                                </div>
                                <h3 className="text-xl font-bold text-space-cadet mb-2">Mi Público</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Asesoro principalmente a profesionistas y empresarios de 25 a 59 años de edad con el deseo firme de multiplicar su dinero en el mercado financiero.
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-lapis-lazuli hover:bg-white hover:shadow-lg transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-lapis-lazuli/10 flex items-center justify-center mb-4">
                                    <BookOpen className="w-6 h-6 text-lapis-lazuli" />
                                </div>
                                <h3 className="text-xl font-bold text-space-cadet mb-2">Autora Bestseller</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Coautora del libro <em>"Compromiso Emprendedor"</em>, reconocido como un éxito de ventas (Bestseller) en Amazon México.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};