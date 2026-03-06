import React from 'react';

export const ServiceIntro = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    {/* IMAGEN: Ahora con la ruta que confirmamos en tu captura */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-sky-200/30 rounded-full blur-3xl"></div>

                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                            <img
                                src="/images/deyanira/DEY003.jpg"
                                alt="Deyanira - Cuidado del patrimonio"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100/40 rounded-full blur-3xl"></div>
                    </div>

                    {/* TEXTO DE TRANSICIÓN */}
                    <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                            Tus ahorros no son <br />
                            <span className="text-blue-600 italic font-serif">solo números...</span>
                        </h2>

                        <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                            Son el resultado de tu esfuerzo, tus metas y la seguridad de tu familia. Por eso, no basta con "guardar dinero"; se trata de cuidarlo y hacerlo crecer con las herramientas correctas.
                        </p>

                        <div className="pt-4">
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-full border border-slate-100 shadow-sm">
                                <div className="w-2 h-2 rounded-full bg-sky-400 animate-ping"></div>
                                <span className="text-sm font-bold text-slate-700 tracking-wide uppercase">
                                    Protección · Crecimiento · Visión
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};