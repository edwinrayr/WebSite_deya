{/* BOTÓN REFINADO PARA MÓVIL */ }
<motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="w-full relative overflow-hidden py-4 md:py-6 px-4 rounded-2xl md:rounded-3xl text-white font-black transition-all shadow-2xl"
    style={{
        background: `linear-gradient(135deg, ${brand.lapisLazuli} 0%, ${brand.spaceCadet} 100%)`,
        border: `1px solid ${brand.tuftsBlue}50`
    }}
>
    <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3 uppercase text-[15px] sm:text-lg md:text-2xl tracking-tight md:tracking-normal">
        <span>¡Quiero mi Estrategia!</span>
        <ArrowRight size={20} className="md:w-[26px] shrink-0" />
    </span>
</motion.button>