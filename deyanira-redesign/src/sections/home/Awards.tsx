// src/sections/home/Awards.tsx
import { Trophy, Medal, Globe, MapPin, Award as AwardIcon, Star, CheckCircle2 } from 'lucide-react';

const mdrtHistory = [
    { year: 2021, title: 'Aspirante', location: 'Boston, US' },
    { year: 2022, title: 'Aspirante', location: 'Nashville, US' },
    { year: 2023, title: 'Miembro', location: 'Vancouver, CAN' },
    { year: 2024, title: 'Miembro', location: 'Miami, USA' },
];

const nationalAwards = [
    { year: 2021, title: 'Top 100 Nacional', location: 'Xcaret' },
    { year: 2022, title: 'Top 70 Nacional', location: 'Punta Mita' },
    { year: 2023, title: 'Top 25 Nacional', location: 'Argentina' },
    { year: 2024, title: 'Top 80 Nacional', location: 'Los Cabos' },
];

export const Awards = () => {
    return (
        <section id="reconocimientos" className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
            <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">

                {/* Cabecera de la sección */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-100/50 border border-tufts-blue/20 mb-6">
                        <Trophy className="w-4 h-4 text-lapis-lazuli" />
                        <span className="text-lapis-lazuli text-sm font-bold tracking-wider uppercase">
                            Trayectoria de Éxito
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-space-cadet tracking-tight mb-6">
                        Certificaciones y <span className="text-transparent bg-clip-text bg-gradient-to-r from-tufts-blue to-lapis-lazuli">Reconocimientos</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Resultados respaldados por las instituciones más prestigiosas del sector financiero a nivel nacional e internacional.
                    </p>
                </div>

                {/* Grid estilo "Bento Box" */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Tarjeta Principal: MDRT (Ocupa 2 columnas en pantallas grandes) */}
                    <div className="lg:col-span-2 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-sea-serpent/5 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110"></div>

                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-14 h-14 rounded-2xl bg-space-cadet flex items-center justify-center shadow-lg">
                                <Globe className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-space-cadet">Million Dollar Round Table (MDRT)</h3>
                                <p className="text-tufts-blue font-medium">Asociación Global Independiente</p>
                            </div>
                        </div>

                        <p className="text-gray-600 mb-8 leading-relaxed max-w-2xl">
                            La MDRT es la máxima condecoración en servicios financieros profesionales, un nivel de excelencia al que <strong>solo llega el 2% de los mejores asesores a nivel mundial</strong>.
                        </p>

                        {/* Línea de tiempo MDRT */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {mdrtHistory.map((item, index) => (
                                <div key={index} className="bg-gray-50 rounded-2xl p-4 border border-gray-100 hover:border-lapis-lazuli hover:bg-blue-50 transition-colors duration-300">
                                    <span className="text-xs font-bold text-gray-400 mb-1 block">{item.year}</span>
                                    <span className={`text-lg font-extrabold mb-1 block ${item.title === 'Miembro' ? 'text-lapis-lazuli' : 'text-space-cadet'}`}>
                                        {item.title}
                                    </span>
                                    <div className="flex items-center gap-1 text-sm text-gray-500">
                                        <MapPin className="w-3 h-3" />
                                        {item.location}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tarjeta Secundaria: Certificaciones Clave */}
                    <div className="bg-space-cadet rounded-3xl p-8 sm:p-10 shadow-lg text-white relative overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                        <div className="absolute -right-10 -top-10 text-white/5 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
                            <AwardIcon className="w-48 h-48" />
                        </div>

                        <h3 className="text-2xl font-bold mb-8 relative z-10">Credenciales</h3>

                        <div className="space-y-6 relative z-10">
                            <div className="flex gap-4 items-start">
                                <CheckCircle2 className="w-6 h-6 text-sea-serpent flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-lg leading-tight">Asesora Certificada CNSF</p>
                                    <p className="text-gray-300 text-sm mt-1">Vigente desde 2020</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <CheckCircle2 className="w-6 h-6 text-sea-serpent flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-lg leading-tight">Master Financial Advisor</p>
                                    <p className="text-gray-300 text-sm mt-1">LIMRA 2022</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <CheckCircle2 className="w-6 h-6 text-sea-serpent flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-lg leading-tight">Ganadora Crucero Caribe</p>
                                    <p className="text-gray-300 text-sm mt-1">Generación 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tarjeta Terciaria: Premiaciones Nacionales (Ocupa todo el ancho abajo) */}
                    <div className="lg:col-span-3 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-500">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-tufts-blue/10 flex items-center justify-center">
                                    <Medal className="w-7 h-7 text-tufts-blue" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-space-cadet">Premiaciones Nacionales</h3>
                                    <p className="text-gray-500">Evolución en el ranking de asesores</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {nationalAwards.map((award, index) => (
                                <div key={index} className="flex items-center gap-4 p-4 rounded-2xl border border-gray-50 hover:bg-gray-50 transition-colors">
                                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 border border-gray-100">
                                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-400">{award.year}</p>
                                        <p className="font-bold text-space-cadet">{award.title}</p>
                                        <p className="text-sm text-tufts-blue">{award.location}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};