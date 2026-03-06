import { ClipboardList, Target, CheckCircle2 } from "lucide-react";

type StepItem = {
  title: string;
  desc: string;
  icon: React.ElementType;
  tint: string;
};

export const ProcessSteps = () => {
  const steps: StepItem[] = [
    {
      title: "Diagnóstico",
      desc: "Revisamos tu situación actual, metas y prioridades para entender el punto de partida.",
      icon: ClipboardList,
      tint: "bg-tufts-blue/10 text-tufts-blue",
    },
    {
      title: "Estrategia",
      desc: "Diseñamos un plan realista: ahorro, inversión y protección patrimonial, con objetivos medibles.",
      icon: Target,
      tint: "bg-sea-serpent/10 text-sea-serpent",
    },
    {
      title: "Seguimiento",
      desc: "Acompañamiento para ejecutar y ajustar: consistencia, control y mejoras con el tiempo.",
      icon: CheckCircle2,
      tint: "bg-lapis-lazuli/10 text-lapis-lazuli",
    },
  ];

  return (
    <section id="proceso" aria-labelledby="steps-title" className="py-12 lg:py-16 bg-white">
      {/* ✅ Importante: NO max-w aquí. Solo padding. El ancho lo manda RecognitionPage */}
      <div className="px-6 sm:px-10 lg:px-16">
        <h3 id="steps-title" className="text-3xl sm:text-4xl font-extrabold text-space-cadet">
          ¿Cómo trabajamos?
        </h3>
        <p className="text-gray-600 mt-2 max-w-3xl">
          Un proceso claro para convertir confianza en decisiones medibles.
        </p>

        {/* Layout tipo web (sin card): columnas */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="flex gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${s.tint}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-extrabold text-space-cadet text-lg">{s.title}</p>
                  <p className="text-gray-600 mt-1 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Línea separadora sutil (opcional, da look de web section) */}
        <div className="mt-12 h-px w-full bg-gray-100" />
      </div>
    </section>
  );
};