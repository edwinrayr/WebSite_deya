import { Wallet, ShieldCheck, TrendingUp, PieChart, CheckCircle2 } from 'lucide-react';

export const Benefits = () => {
    const data = [
        { title: "Ahorro Inteligente", desc: "Técnicas para acumular capital sin sacrificio.", icon: <Wallet size={32} />, details: ["Ahorro sistemático", "Fondo de paz"] },
        { title: "Estrategias Eficientes", desc: "Administra salud, renta y deudas con paz.", icon: <TrendingUp size={32} />, details: ["Gestión de flujo", "Eliminación de fugas"] },
        { title: "Protección Patrimonial", desc: "Blindaje para tu casa, auto y negocio.", icon: <ShieldCheck size={32} />, details: ["Seguros estratégicos", "Prevención"] },
        { title: "Crecimiento Seguro", desc: "Inversión regulada para no perder valor.", icon: <PieChart size={32} />, details: ["Instituciones legales", "Interés compuesto"] }
    ];

    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-16">

                {/* Banner con Gradiente Suave */}
                <div className="bg-gradient-to-br from-lapis-lazuli to-tufts-blue rounded-[3rem] p-12 md:p-20 mb-24 text-center relative overflow-hidden shadow-2xl transition-transform hover:scale-[1.01] duration-700">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-sea-serpent/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
                            ¿Te preocupa que tus ahorros estén estancados?
                        </h2>
                        <p className="text-blue-50 text-xl md:text-2xl mb-10 font-light italic">
                            "La mayoría ahorra, pero pocos tienen dirección. Es momento de activar tu libertad."
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {data.map((item, index) => (
                        <div key={index} className="group p-10 rounded-[2.5rem] bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
                            <div className="mb-8 p-5 bg-white rounded-2xl inline-block shadow-md group-hover:bg-sea-serpent group-hover:text-white transition-all duration-300">
                                {item.icon}
                            </div>
                            <h4 className="text-2xl font-bold text-space-cadet mb-4">{item.title}</h4>
                            <p className="text-gray-500 mb-6 text-sm leading-relaxed">{item.desc}</p>
                            <ul className="space-y-3">
                                {item.details.map((d, i) => (
                                    <li key={i} className="flex items-center gap-2 text-xs font-bold text-lapis-lazuli uppercase tracking-wider">
                                        <CheckCircle2 size={14} className="text-sea-serpent" /> {d}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            {/* Transición visual al siguiente bloque */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </section>
    );
};