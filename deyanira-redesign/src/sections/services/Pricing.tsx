import { ShieldCheck, Zap, ArrowRight, CreditCard, Lock } from 'lucide-react';

export const Pricing = () => {
    return (
        <section className="py-32 bg-white relative">
            <div className="max-w-[1100px] mx-auto px-6">

                {/* Encabezado de Precio */}
                <div className="text-center mb-20">
                    <span className="text-sea-serpent font-black tracking-[0.4em] uppercase text-xs mb-4 block animate-pulse">Inversión con Propósito</span>
                    <h2 className="text-4xl md:text-6xl font-black text-space-cadet mb-6 leading-tight">
                        Comienza tu <br /><span className="text-lapis-lazuli italic">Transformación</span>
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
                        Un pago único para un cambio de vida financiero permanente y acompañado.
                    </p>
                </div>

                {/* Tarjeta de Precio Premium */}
                <div className="relative group">
                    {/* Brillo de fondo animado */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-sea-serpent to-lapis-lazuli rounded-[4rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                    <div className="relative bg-white border border-gray-100 rounded-[3.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">

                        {/* Columna Izquierda: Qué obtienes */}
                        <div className="flex-[1.2] p-12 md:p-16 bg-gray-50/50">
                            <div className="inline-flex items-center gap-2 px-5 py-2 bg-lapis-lazuli text-white rounded-full text-[10px] font-black tracking-[0.2em] mb-10 shadow-lg">
                                <Zap size={14} fill="currentColor" className="text-sea-serpent" /> MÁS SOLICITADO
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black text-space-cadet mb-6 leading-tight">
                                Estrategia <br /> <span className="text-lapis-lazuli">Alas del Éxito</span>
                            </h3>

                            <div className="space-y-5">
                                {[
                                    "Sesión 1:1 de Diagnóstico Profundo",
                                    "Hoja de Plan de Inversión Personalizada",
                                    "Acceso a Clases Exclusivas Mensuales",
                                    "Seguimiento Directo por 12 meses",
                                    "Revisiones en Mes 6 y 12"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 text-sm font-bold text-space-cadet/80">
                                        <ShieldCheck className="text-sea-serpent shrink-0" size={20} />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Columna Derecha: El Precio */}
                        <div className="flex-1 p-12 md:p-16 flex flex-col items-center justify-center text-center bg-white border-l border-gray-100 relative">
                            <span className="text-gray-400 font-bold line-through text-xl mb-2 opacity-60">$4,500 MXN</span>

                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-6xl md:text-8xl font-black text-space-cadet">$2,997</span>
                                <span className="text-lg font-bold text-lapis-lazuli uppercase tracking-tighter">mxn</span>
                            </div>

                            <p className="text-[11px] text-gray-400 mb-10 font-bold uppercase tracking-widest italic">Inversión de Pago Único</p>

                            <button className="w-full bg-lapis-lazuli text-white py-6 rounded-2xl font-black text-xl hover:bg-space-cadet transition-all shadow-[0_20px_40px_rgba(3,4,94,0.2)] flex items-center justify-center gap-3 active:scale-95 group/btn">
                                EMPEZAR AHORA
                                <ArrowRight size={22} className="group-hover/btn:translate-x-2 transition-transform" />
                            </button>

                            {/* Sellos de Seguridad */}
                            <div className="mt-12 flex items-center gap-6 text-gray-400 opacity-60">
                                <div className="flex flex-col items-center gap-1">
                                    <Lock size={18} />
                                    <span className="text-[9px] font-black uppercase tracking-widest">Seguro</span>
                                </div>
                                <div className="w-px h-10 bg-gray-200"></div>
                                <div className="flex flex-col items-center gap-1">
                                    <CreditCard size={18} />
                                    <span className="text-[9px] font-black uppercase tracking-widest">MSI</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Garantía de satisfacción */}
                <div className="mt-12 text-center p-6 bg-blue-50/50 rounded-2xl border border-blue-100 max-w-xl mx-auto">
                    <p className="text-lapis-lazuli text-sm font-medium">
                        🔒 <strong>Garantía de Satisfacción:</strong> Tu inversión está protegida. Si al finalizar la primera sesión sientes que no es para ti, te devolvemos tu inversión.
                    </p>
                </div>

            </div>
        </section>
    );
};