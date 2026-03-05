import { MousePointerClick, ClipboardList, CalendarDays, FileText, MonitorPlay, Users2 } from 'lucide-react';

export const WingsStrategy = () => {
    return (
        <section className="py-24 bg-gray-50 relative z-10 rounded-t-[4rem] -mt-12">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-16">

                <div className="text-center mb-20">
                    <span className="text-sea-serpent font-black tracking-[0.4em] uppercase text-xs">Metodología Única</span>
                    <h2 className="text-4xl md:text-6xl font-black text-space-cadet mt-4">Alas del Éxito</h2>
                </div>

                {/* El Roadmap con conectores */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
                    {[
                        { step: "01", label: "Compra", icon: <MousePointerClick /> },
                        { step: "02", label: "Perfil", icon: <ClipboardList /> },
                        { step: "03", label: "Sesión", icon: <CalendarDays /> }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center group">
                            <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center mb-6 border-4 border-transparent group-hover:border-sea-serpent transition-all duration-500">
                                <div className="text-lapis-lazuli group-hover:scale-125 transition-transform duration-500">{item.icon}</div>
                            </div>
                            <h3 className="text-xl font-black text-space-cadet uppercase tracking-widest">{item.label}</h3>
                        </div>
                    ))}
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-8 bg-space-cadet rounded-[3rem] p-12 md:p-16 text-white relative overflow-hidden group">
                        <div className="relative z-10">
                            <h3 className="text-4xl font-black mb-8">Lo que incluye tu <span className="text-sea-serpent text-5xl block mt-2">Transformación</span></h3>
                            <p className="text-blue-100/60 mb-8 max-w-md italic font-light">Un acompañamiento de 12 meses diseñado para que nunca vuelvas a dudar de tus finanzas.</p>
                            <button className="bg-sea-serpent text-space-cadet px-10 py-5 rounded-2xl font-black hover:bg-white transition-all shadow-2xl">EMPEZAR AHORA</button>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-sea-serpent/10 transition-colors duration-700"></div>
                    </div>
                    <div className="md:col-span-4 space-y-8">
                        <div className="bg-lapis-lazuli rounded-[2.5rem] p-8 text-white hover:rotate-2 transition-transform shadow-lg">
                            <FileText className="mb-4 text-sea-serpent" size={32} />
                            <h4 className="font-bold">PDF de Diagnóstico</h4>
                        </div>
                        <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-lg hover:-rotate-2 transition-transform">
                            <MonitorPlay className="mb-4 text-lapis-lazuli" size={32} />
                            <h4 className="font-bold text-space-cadet">Clases Mensuales</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};