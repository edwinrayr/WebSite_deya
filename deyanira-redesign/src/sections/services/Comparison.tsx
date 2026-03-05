import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const Comparison = () => {
    return (
        <section className="py-32 bg-white relative">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col md:flex-row shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] rounded-[4rem] overflow-hidden border border-gray-50">

                    <div className="flex-1 bg-gray-50 p-12 md:p-20">
                        <XCircle className="text-red-400 mb-6" size={40} />
                        <h2 className="text-3xl font-black text-space-cadet mb-8 italic">Esto NO es para ti si...</h2>
                        <ul className="space-y-6 text-gray-400 font-medium">
                            <li className="flex gap-4"><span>•</span> Buscas dinero fácil sin esfuerzo.</li>
                            <li className="flex gap-4"><span>•</span> Prefieres el colchón a la inversión regulada.</li>
                            <li className="flex gap-4"><span>•</span> No estás listo para comprometerte 1 hora.</li>
                        </ul>
                    </div>

                    <div className="flex-1 bg-gradient-to-br from-lapis-lazuli to-space-cadet p-12 md:p-20 text-white relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-sea-serpent/20 blur-3xl rounded-full"></div>
                        <CheckCircle2 className="text-sea-serpent mb-6" size={40} />
                        <h2 className="text-3xl font-black mb-8 italic">¡Es para ti si buscas...!</h2>
                        <ul className="space-y-6 mb-12">
                            <li className="flex gap-4 items-center font-bold text-lg"><ArrowRight className="text-sea-serpent" size={20} /> Seguridad Legal</li>
                            <li className="flex gap-4 items-center font-bold text-lg"><ArrowRight className="text-sea-serpent" size={20} /> Dirección Clara</li>
                            <li className="flex gap-4 items-center font-bold text-lg"><ArrowRight className="text-sea-serpent" size={20} /> Paz Financiera</li>
                        </ul>
                        <button className="w-full bg-white text-lapis-lazuli py-5 rounded-2xl font-black text-xl hover:bg-sea-serpent hover:text-white transition-all shadow-xl">
                            ¡SOY ESTE PERFIL!
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};