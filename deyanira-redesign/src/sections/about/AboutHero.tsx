// src/sections/about/AboutHero.tsx
export const AboutHero = () => {
    return (
        <section className="bg-space-cadet relative overflow-hidden py-16 lg:py-24">
            {/* Elementos decorativos */}
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sea-serpent/30 to-transparent"></div>

            <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-sea-serpent"></span>
                        <span className="text-white text-sm font-bold tracking-wider uppercase">
                            Conoce a Deyanira
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Educación financiera con <span className="text-sea-serpent">propósito y resultados.</span>
                    </h1>

                    <p className="text-xl text-gray-300 leading-relaxed">
                        Apasionada de las matemáticas y los negocios, convencida de que la educación financiera es la llave para transformar vidas y construir legados.
                    </p>
                </div>
            </div>
        </section>
    );
};