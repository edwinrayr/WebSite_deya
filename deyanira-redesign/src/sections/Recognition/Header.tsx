// src/sections/Recognition/Header.tsx
import { Trophy, BadgeCheck, Globe2, Sparkles } from "lucide-react";

export const Header = () => {
  return (
    <section className="relative overflow-hidden bg-space-cadet">
      {/* ✅ SIN “luces”: quitamos gradients/blur/pattern */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Texto */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 border border-white/15 mb-6 backdrop-blur-sm">
              <Trophy className="w-4 h-4 text-sea-serpent" />
              <span className="text-white/90 text-sm font-bold tracking-wider uppercase">
                Reconocimientos
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Trayectoria que{" "}
              <span className="text-sea-serpent">respalda resultados</span>
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Certificaciones, distinciones y logros que validan la experiencia y el compromiso con tu patrimonio.
            </p>
          </div>

          {/* Stats / mini-cards (mismo diseño + iconos) */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-3xl bg-white/10 border border-white/15 p-6 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-2xl bg-sea-serpent/20 flex items-center justify-center mb-4">
                  <BadgeCheck className="w-6 h-6 text-sea-serpent" />
                </div>
                <p className="text-white font-extrabold text-xl">CNSF</p>
                <p className="text-gray-300 text-sm mt-1">Certificación vigente</p>
              </div>

              <div className="rounded-3xl bg-white/10 border border-white/15 p-6 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-2xl bg-tufts-blue/20 flex items-center justify-center mb-4">
                  <Globe2 className="w-6 h-6 text-tufts-blue" />
                </div>
                <p className="text-white font-extrabold text-xl">MDRT</p>
                <p className="text-gray-300 text-sm mt-1">Distinción internacional</p>
              </div>

              <div className="sm:col-span-2 rounded-3xl bg-white/10 border border-white/15 p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-lapis-lazuli/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-lapis-lazuli" />
                  </div>
                  <div>
                    <p className="text-white font-extrabold text-lg">Confianza + Evidencia</p>
                    <p className="text-gray-300 text-sm mt-1 leading-relaxed">
                      La experiencia se demuestra con resultados medibles y acreditaciones verificables.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* fin stats */}
        </div>
      </div>

      <div className="h-px w-full bg-white/10" />
    </section>
  );
};