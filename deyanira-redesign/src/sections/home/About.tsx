// src/sections/home/About.tsx
import { GraduationCap, BookOpen, Building2, Award, Quote } from 'lucide-react';

export const About = () => {
    return (
        // Utilizamos bg-gray-50 para separar sutilmente del Hero (blanco) sin dejar huecos
        // Mantenemos un padding moderado (py-16 lg:py-24) para fluidez visual
        <section id="nosotros" className="py-16 lg:py-24 bg-gray-50 overflow-hidden">
            <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">

                {/* Estructura grid responsiva: 1 columna en móvil, 2 en escritorio */}
                <div className="lg:grid lg:grid-cols-2 gap-16 items-center">

                    {/* Columna de Imagen (Alternada a la izquierda para contraste visual) */}
                    <div className="relative mb-12 lg:mb-0 order-2 lg:order-1">
                        <div className="relative mx-auto w-full max-w-md lg:max-w-lg group">
                            {/* Fondo decorativo asimétrico con animación suave al hacer hover */}
                            <div className="absolute inset-0 bg-tufts-blue/15 rounded-[3rem] transform -rotate-3 scale-105 transition-transform duration-500 group-hover:rotate-0"></div>

                            <div className="relative rounded-[2rem] shadow-xl overflow-hidden aspect-[4/5] bg-white border-4 border-white z-10">
                                {/* NOTA: Cambia "DEY002.jpg" por el nombre exacto de la foto donde sale con el cochinito azul */}
                                <img
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    src="/images/deyanira/DEY002.jpg"
                                    alt="Deyanira Mariscal con alcancía"
                                />
                            </div>

                            {/* Tarjeta de Cita (Quote) flotante animada */}
                            <div className="absolute -right-4 lg:-right-10 bottom-12 bg-white p-5 rounded-2xl shadow-2xl border border-gray-100 max-w-[260px] z-20 transition-transform duration-300 hover:-translate-y-2">
                                <Quote className="w-8 h-8 text-sea-serpent mb-3 opacity-60" />
                                <p className="text-sm font-medium text-space-cadet italic leading-relaxed">
                                    "El cochinito es un recordatorio de que siempre hay que ahorrar para invertir, no para gastar."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Columna de Texto */}
                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-50 border border-blue-100 mb-6">
                            <span className="text-lapis-lazuli text-sm font-bold tracking-wider uppercase">
                                Acerca de Mí
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-space-cadet tracking-tight mb-6 leading-tight">
                            Pasión por las <span className="text-tufts-blue">matemáticas</span> y tu crecimiento
                        </h2>

                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            Soy una especialista comprometida con la educación financiera. Mi misión es ayudarte a tomar decisiones inteligentes que te permitan construir seguridad, libertad y prosperidad patrimonial.
                        </p>

                        {/* Lista de Credenciales con animaciones hover dinámicas en grupo */}
                        <div className="space-y-6">
                            {/* Credencial 1 */}
                            <div className="flex gap-4 group cursor-default">
                                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:bg-lapis-lazuli transition-colors duration-300">
                                    <GraduationCap className="w-7 h-7 text-lapis-lazuli group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-space-cadet mb-1 group-hover:text-lapis-lazuli transition-colors">Formación Académica</h3>
                                    <p className="text-gray-600">Licenciada en Actuaría por la Universidad Nacional Autónoma de México (UNAM).</p>
                                </div>
                            </div>

                            {/* Credencial 2 */}
                            <div className="flex gap-4 group cursor-default">
                                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:bg-tufts-blue transition-colors duration-300">
                                    <Building2 className="w-7 h-7 text-tufts-blue group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-space-cadet mb-1 group-hover:text-tufts-blue transition-colors">Experiencia Corporativa</h3>
                                    <p className="text-gray-600">Ex-planeadora financiera en BBVA y analista en la Comisión Nacional Bancaria y de Valores.</p>
                                </div>
                            </div>

                            {/* Credencial 3 */}
                            <div className="flex gap-4 group cursor-default">
                                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:bg-sea-serpent transition-colors duration-300">
                                    <Award className="w-7 h-7 text-sea-serpent group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-space-cadet mb-1 group-hover:text-sea-serpent transition-colors">Reconocimiento Global</h3>
                                    <p className="text-gray-600">Miembro de la Million Dollar Round Table (MDRT), distinción del top 3% de los mejores asesores del mundo.</p>
                                </div>
                            </div>

                            {/* Credencial 4 */}
                            <div className="flex gap-4 group cursor-default">
                                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:bg-space-cadet transition-colors duration-300">
                                    <BookOpen className="w-7 h-7 text-space-cadet group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-space-cadet mb-1 group-hover:text-space-cadet transition-colors">Autora Best Seller</h3>
                                    <p className="text-gray-600">Coautora del libro "Compromiso Emprendedor", éxito de ventas en Amazon México.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};