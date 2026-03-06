import { CalendarCheck, ArrowRight, ShieldCheck } from "lucide-react";

export const RecognitionCTA = () => {
  return (
    <section id="cta" className="py-16 lg:py-24 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="rounded-[3rem] bg-space-cadet border border-white/10 p-8 sm:p-12 lg:p-16 shadow-[0_30px_80px_-30px_rgba(25,37,91,0.65)] transition-all duration-500 hover:shadow-[0_40px_100px_-30px_rgba(25,37,91,0.8)]">
          <div className="lg:flex items-center justify-between gap-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 py-2 px-5 rounded-full bg-white/10 border border-white/20 mb-8">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sea-serpent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-sea-serpent"></span>
                </span>
                <span className="text-white text-sm font-black tracking-wider uppercase">
                  Diagnóstico inicial
                </span>
              </div>

              <h3 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                Convierte reconocimiento en{" "}
                <span className="text-sea-serpent">estrategia</span>.
              </h3>
              <p className="text-gray-300 text-lg mt-4 leading-relaxed">
                Agenda una sesión y definamos un plan claro, medible y alineado a tus metas.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm text-gray-400">
                <ShieldCheck className="w-4 h-4 text-sea-serpent" />
                <span>Información 100% confidencial</span>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <a
                href="https://wa.me/5520934484"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-space-cadet px-8 py-4 rounded-2xl font-black text-lg
                           hover:bg-sea-serpent hover:text-white transition-all duration-300 shadow-xl hover:-translate-y-1"
              >
                <CalendarCheck className="w-5 h-5" />
                Agendar por WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-gray-400 text-xs mt-4 text-center">
                Respuesta en menos de 24 horas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};