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
        <section id="reconocimientos" className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden z-0">

            {/* Efecto de destello solar en el fondo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-white via-gray-50 to-gray-50 opacity-80 -z-10"></div>
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.03] mix-blend-multiply -z-10"></div>

            <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

                {/* Cabecera Premium */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 relative">
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[6rem] sm:text-[8rem] font-black text-gray-100 -z-10 whitespace-nowrap select-none">
                        TOP 2%
                    </div>

                    <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
                        <Trophy className="w-4 h-4 text-yellow-500" />
                        <span className="text-space-cadet text-sm font-bold tracking-wider uppercase">
                            Trayectoria de Éxito
                        </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-space-cadet tracking-tight mb-6 leading-[1.1]">
                        Resultados respaldados a <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-tufts-blue to-sea-serpent">
                            nivel global.
                        </span>
                    </h2>
                </div>

                {/* NUEVO GRID: Perfectamente balanceado */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

                    {/* --- 1. BANNER PANORÁMICO: MDRT (Ocupa las 12 columnas) --- */}
                    <div className="lg:col-span-12 bg-white rounded-[2.5rem] p-8 sm:p-10 lg:p-12 shadow-xl border border-gray-100 relative overflow-hidden group flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

                        {/* Brillo en hover */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-tufts-blue/10 to-transparent rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                        {/* Mitad Izquierda del Banner: Título y Texto */}
                        <div className="w-full lg:w-1/2 relative z-10 text-center lg:text-left">
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-8">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-space-cadet to-lapis-lazuli flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0">
                                    <Globe className="w-10 h-10 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-extrabold text-space-cadet leading-tight mb-2">Million Dollar Round Table</h3>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-tufts-blue text-sm font-bold">
                                        <Star className="w-3.5 h-3.5 fill-tufts-blue" />
                                        Asociación Global Independiente
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                                La MDRT es la máxima condecoración en servicios financieros. Un nivel de excelencia técnica y ética al que <strong className="text-space-cadet">solo llega el 2% de los mejores asesores</strong> a nivel mundial.
                            </p>
                        </div>

                        {/* Mitad Derecha del Banner: Timeline (Evita el espacio en blanco) */}
                        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 relative z-10">
                            {mdrtHistory.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-tufts-blue hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <span className="text-sm font-black text-gray-400 mb-1 block">{item.year}</span>
                                    <span className={`text-xl font-extrabold mb-1 block ${item.title === 'Miembro' ? 'text-tufts-blue' : 'text-space-cadet'}`}>
                                        {item.title}
                                    </span>
                                    <div className="flex items-center gap-1.5 text-sm font-medium text-gray-500">
                                        <MapPin className="w-4 h-4 text-gray-400" />
                                        {item.location}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* --- 2. TARJETA INFERIOR IZQUIERDA: Credenciales (Ocupa 6 columnas) --- */}
                    <div className="lg:col-span-6 bg-space-cadet rounded-[2.5rem] p-8 sm:p-10 shadow-2xl text-white relative overflow-hidden group h-full flex flex-col">
                        <div className="absolute -right-8 -top-8 text-white/5 transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                            <AwardIcon className="w-56 h-56" />
                        </div>
                        <h3 className="text-2xl font-bold mb-8 relative z-10 flex items-center gap-3">
                            <div className="w-2 h-8 bg-sea-serpent rounded-full"></div>
                            Licencias Oficiales
                        </h3>
                        <div className="space-y-6 relative z-10 flex-grow flex flex-col justify-center">
                            <div className="flex gap-4 items-center group/item p-4 rounded-2xl hover:bg-white/5 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-sea-serpent transition-colors">
                                    <CheckCircle2 className="w-6 h-6 text-sea-serpent group-hover/item:text-space-cadet" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg leading-tight">Asesora Certificada CNSF</p>
                                    <p className="text-gray-400 text-sm mt-1">Autorización Gubernamental Vigente</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center group/item p-4 rounded-2xl hover:bg-white/5 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-sea-serpent transition-colors">
                                    <CheckCircle2 className="w-6 h-6 text-sea-serpent group-hover/item:text-space-cadet" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg leading-tight">Master Financial Advisor</p>
                                    <p className="text-gray-400 text-sm mt-1">Otorgado por LIMRA International</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- 3. TARJETA INFERIOR DERECHA: Ranking Nacional (Ocupa 6 columnas) --- */}
                    <div className="lg:col-span-6 bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-sm border border-gray-100 group h-full flex flex-col">
                        <h3 className="text-2xl font-bold text-space-cadet mb-8 flex items-center gap-3">
                            <Medal className="w-7 h-7 text-tufts-blue" />
                            Ranking Nacional
                        </h3>
                        <div className="space-y-4 flex-grow flex flex-col justify-center">
                            {nationalAwards.map((award, index) => (
                                <div key={index} className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-tufts-blue/30 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100">
                                            <span className="text-sm font-black text-gray-400">{award.year}</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-space-cadet text-base">{award.title}</p>
                                            <p className="text-xs text-tufts-blue font-semibold uppercase tracking-wider">{award.location}</p>
                                        </div>
                                    </div>
                                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 opacity-50" />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};