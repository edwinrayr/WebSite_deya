import { HelpCircle, ChevronDown } from "lucide-react";

type FAQItem = { q: string; a: string };

const faqs: FAQItem[] = [
  {
    q: "¿Qué significa MDRT y por qué importa?",
    a: "MDRT es una asociación global e independiente que reconoce excelencia en servicios financieros. Funciona como un estándar internacional de disciplina, consistencia y resultados.",
  },
  {
    q: "¿La asesoría es solo para personas con mucho dinero?",
    a: "No. La asesoría se adapta a tu punto de partida: desde orden y hábitos, hasta inversión y protección patrimonial con una estrategia clara y medible.",
  },
  {
    q: "¿Cómo sé que la estrategia es segura?",
    a: "Se diseña con enfoque en perfil de riesgo y herramientas reguladas, priorizando transparencia (pros y contras) y control: objetivos, plazos, liquidez y diversificación.",
  },
  {
    q: "¿Qué obtengo en la primera sesión?",
    a: "Un diagnóstico de tu situación y un plan de acción inicial: prioridades, siguientes pasos y recomendaciones para avanzar con claridad.",
  },
];

export const RecognitionFAQ = () => {
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-12 lg:py-16 bg-white">
      {/* ✅ Importante: NO max-w aquí. Solo padding. El ancho lo manda RecognitionPage */}
      <div className="px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="flex items-start gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-tufts-blue/10 flex items-center justify-center flex-shrink-0">
            <HelpCircle className="w-6 h-6 text-tufts-blue" />
          </div>
          <div>
            <h3 id="faq-title" className="text-3xl sm:text-4xl font-extrabold text-space-cadet">
              Preguntas frecuentes
            </h3>
            <p className="text-gray-600 mt-1">
              Respuestas rápidas para decidir con confianza.
            </p>
          </div>
        </div>

        {/* Lista estilo web (sin card) */}
        <div className="border-y border-gray-100 divide-y divide-gray-100">
          {faqs.map((f, i) => (
            <details key={i} className="group py-5">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                <span className="font-extrabold text-space-cadet text-base sm:text-lg">
                  {f.q}
                </span>
                <ChevronDown className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180 flex-shrink-0" />
              </summary>
              <p className="text-gray-600 mt-3 leading-relaxed text-sm sm:text-base">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};