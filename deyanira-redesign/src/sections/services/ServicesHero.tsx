export const ServicesHero = () => {
    return (
        <section className="bg-space-cadet relative overflow-hidden py-20 lg:py-28">
            {/* Elementos decorativos (Manteniendo el estilo original) */}
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sea-serpent/30 to-transparent"></div>

            <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
                <div className="max-w-4xl">
                    {/* Badge dinámico */}
                    <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-sea-serpent animate-pulse"></span>
                        <span className="text-white text-xs md:text-sm font-bold tracking-widest uppercase">
                            Estrategia Personalizada 1:1
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-8 leading-tight">
                        Tu dinero ya trabaja. <br />
                        <span className="text-sea-serpent">Haz que trabaje con dirección.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                        Si ya tienes el hábito del ahorro, necesitas la claridad de un plan experto.
                        Transforma tus ahorros estancados en un <span className="text-white font-semibold">patrimonio con propósito.</span>
                    </p>
                </div>
            </div>

            {/* Decoración extra sutil en la esquina inferior derecha */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-sea-serpent/5 blur-[100px] rounded-full"></div>
        </section>
    );
};