import { useEffect, useMemo, useRef, useState } from "react";
import { BookOpen, ExternalLink, Calendar, Tag, ChevronLeft, ChevronRight } from "lucide-react";

type BlogPost = {
  category: string;
  title: string;
  subtitle: string;
  date: string;
  url: string;
  paragraphs: string[];
  keyPoints: string[];
};

export const BlogRecognition = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [page, setPage] = useState(0);

  // ✅ Pon aquí tus 10 blogs (cada objeto = 1 página)
  const posts: BlogPost[] = useMemo(
    () => [
      {
        category: "Finanzas para la Vida Diaria",
        title: "7 Consejos Financieros Imprescindibles Para Construir Tu Casa Sin Deudas En México",
        subtitle: "🏠 ¿Estás pensando en construir tu casa en México y no sabes por dónde empezar?",
        date: "sábado, 5 de julio de 2025",
        url: "https://www.themoneybridge.com.mx/construye-tu-casa-en-mexico",
        paragraphs: [
          "Construir tu casa es un proyecto de vida que requiere estrategia, presupuesto y paciencia.",
          "La clave es evitar improvisación: terreno, presupuesto, arquitecto funcional y construir por etapas.",
        ],
        keyPoints: [
          "Terreno: escrituras, servicios, uso de suelo, seguridad y plusvalía.",
          "Presupuesto: permisos, estructura, acabados, instalaciones + imprevistos 15–20%.",
          "Construcción por etapas: lo esencial primero, luego ampliaciones.",
        ],
      },
      {
  category: "Finanzas para la Vida Diaria",
  title: "Cómo iniciar un negocio rentable desde cero en 2025: 7 pasos clave para emprender con éxito",
  subtitle: "Todo lo que implica emprender con cabeza, corazón y estrategia 🧠❤️📈",
  date: "sábado, 7 de junio de 2025",
  url: "https://www.themoneybridge.com.mx/como-iniciar-un-negocio-desde-cero-en-mexico",
  paragraphs: [
    "Emprender no es vender por vender: es resolver un problema y ejecutar con enfoque.",
    "La guía recorre idea, cliente ideal, plan simple, inversión inteligente, presencia digital y formalización."
  ],
  keyPoints: [
    "Empieza con un problema real + tus habilidades + un diferenciador.",
    "Define cliente ideal (edad, red social, dolor y cuánto puede pagar).",
    "Plan en una hoja: qué vendo / a quién / costos / precio / canal / cómo me encuentran.",
    "Invierte en lo que genera ingreso (producto, entrega, redes), no solo en “lo bonito”.",
    "Formaliza: SAT, cuenta bancaria del negocio, control de ingresos/gastos, IMPI si aplica."
  ],
},
{
  category: "Finanzas para la Vida Diaria",
  title: "Mamá y finanzas personales: cómo evitar quedarse sin nada mientras cuidas a todos, guía para mujeres que lo dan todo",
  subtitle: "De darlo todo… a no tener nada: la trampa financiera de muchas mamás 🤱",
  date: "martes, 6 de mayo de 2025",
  url: "https://www.themoneybridge.com.mx/mama-y-finanzas-personales",
  paragraphs: [
    "Mamá también es gerente financiera del hogar: administra presupuesto, prioridades y emergencias.",
    "Cada etapa de la maternidad cambia las decisiones económicas; el objetivo es cuidar a todos sin dejarte al final."
  ],
  keyPoints: [
    "Primeriza: fondo de emergencia + seguro de vida básico.",
    "Escolar: presupuesto realista + inversión a largo plazo para educación.",
    "Adolescentes: límites financieros y hablar de dinero en casa.",
    "Regresa al trabajo/emprende: separar finanzas y construir plan de retiro.",
    "Cuidadora/abuela: evalúa patrimonio y priorízate sin culpa."
  ],
},
{
  category: "Finanzas para la Vida Diaria",
  title: "Todo lo que necesitas saber sobre la Declaración Anual al SAT 2024: Guía para Profesionistas y Emprendedores",
  subtitle: "💌 ¿Ya presentaste tu declaración anual de impuestos en México 2024?",
  date: "sábado, 5 de abril de 2025",
  url: "https://www.themoneybridge.com.mx/declaracion-anual-sat-2024",
  paragraphs: [
    "Explica qué es la declaración anual, quién debe presentarla y cómo usar deducciones correctamente.",
    "Enfoca la declaración como herramienta de orden y posible saldo a favor para ahorro o inversión."
  ],
  keyPoints: [
    "Obligados: honorarios/actividad empresarial/rentas/inversiones, >$400k, cambio o múltiples patrones, etc.",
    "Deducciones: salud, GMM, lentes, colegiaturas, transporte escolar, AFORE/retiro, donativos, funerarios.",
    "Regla: pagos en efectivo no deducen.",
    "Errores: no revisar prellenado, facturas mal emitidas, omitir deducciones, CSF desactualizada.",
    "Fecha límite (según texto): 30 de abril."
  ],
},
{
  category: "Finanzas para la Vida Diaria",
  title: "Profesionistas y Emprendedores: 8 Errores Financieros Que Te Cuestan Dinero y Cómo Evitarlos",
  subtitle: "🎯 Errores Financieros que Profesionistas y Emprendedores Cometen y Cómo Evitarlos",
  date: "miércoles, 5 de marzo de 2025",
  url: "https://www.themoneybridge.com.mx/errores-financieros-profesionistas-y-emprendedores",
  paragraphs: [
    "Tener buen ingreso no garantiza estabilidad: los hábitos y decisiones mandan.",
    "Presenta 8 errores frecuentes con soluciones claras para evitarlos."
  ],
  keyPoints: [
    "Evita inflación del estilo de vida: aumenta inversión/ahorro, no gastos fijos.",
    "Controla gastos (Excel o apps) para saber a dónde se va tu dinero.",
    "No dejes todo en banco: considera CETES/fondos/bienes raíces.",
    "Fondo de emergencia: 3–6 meses de gastos fijos.",
    "Tarjeta: no pagar mínimo; pagar total para evitar intereses.",
    "Diversifica inversiones y busca asesoría cuando sea necesario."
  ],
},
{
  category: "Finanzas para la Vida Diaria",
  title: "Tarjetas de Crédito en México: Cómo Usarlas Inteligentemente y Evitar Errores Comunes en 2025",
  subtitle: "💳 ¿Tu tarjeta de crédito trabaja para ti o contra ti?",
  date: "miércoles, 5 de febrero de 2025",
  url: "https://www.themoneybridge.com.mx/todo-sobre-tarjetas-de-credito",
  paragraphs: [
    "Explica tipos de tarjetas y cómo elegir según tu perfil, además de errores comunes.",
    "Incluye guía rápida para entender estado de cuenta (corte, límite, total, mínimo, MSI)."
  ],
  keyPoints: [
    "Tipos: básicas sin anualidad, clásicas, recompensas, premium, departamentales.",
    "Errores: pagar mínimo, usar >30% del límite, olvidar fecha límite, no revisar movimientos.",
    "Buenas prácticas: pagar saldo total, recordatorios, revisar estado y detectar fraudes."
  ],
},
{
  category: "Inversiones",
  title: "Lo que se viene para México en 2025: Expectativas y Eventos Económicos Clave",
  subtitle: "Qué se viene para México en 2025: Expectativas y Eventos Económicos Clave 🌎💼",
  date: "martes, 7 de enero de 2025",
  url: "https://www.themoneybridge.com.mx/economia-mexico-2025",
  paragraphs: [
    "Panorama 2025: crecimiento moderado, reformas, T-MEC, energías renovables, inflación/tasas y mercado laboral.",
    "Recomendación: diversificar, protegerse de inflación y fortalecer habilidades."
  ],
  keyPoints: [
    "Diversifica: renta fija + renta variable para reducir riesgos.",
    "Protégete contra inflación: CETES/fondos + fondo de emergencia.",
    "Oportunidades: sectores ligados a T-MEC (automotriz, agro, TI).",
    "Tendencia: automatización/IA → invertir en formación y habilidades digitales."
  ],
},
{
  category: "Finanzas para la Vida Diaria",
  title: "Cómo Protegerte de los Fraudes Financieros Comunes y Evitar Estafas en México",
  subtitle: "Cómo cuidarse de los fraudes financieros este fin de año",
  date: "lunes, 9 de diciembre de 2024",
  // ⚠️ No apareció URL directa indexada; reemplaza cuando tengas el link exacto.
  url: "https://www.themoneybridge.com.mx/category/finanzas-para-la-vida-diaria?page=3",
  paragraphs: [
    "Expone fraudes comunes (inversión, phishing, WhatsApp/SMS, clonación, empleo falso, préstamos, romance, premios).",
    "Enfoca prevención: verificar fuentes, no dar datos, activar seguridad y reportar movimientos raros."
  ],
  keyPoints: [
    "Inversión: desconfía de rendimientos “garantizados” y verifica regulaciones.",
    "Phishing: no abrir links sospechosos; confirma directo con el banco.",
    "WhatsApp/SMS: confirma identidad y activa verificación en dos pasos.",
    "Tarjetas: alertas en tiempo real y revisar cajeros/terminales.",
    "Préstamos: nunca pagar por adelantado."
  ],
},
{
  category: "Finanzas y Fe",
  title: "Cómo Administrar el Dinero Según la Biblia: 10 Revelaciones que Cambiaron Mi Vida como Hija de Dios y Experta Financiera",
  subtitle: "10 Revelaciones que Cambiaron Mi Vida",
  date: "viernes, 1 de noviembre de 2024",
  url: "https://www.themoneybridge.com.mx/diez-revelaciones-que-cambiaron-mi-vida",
  paragraphs: [
    "Reflexión de fe aplicada a finanzas: confiar, amar, ser generosos, trabajar con diligencia y vivir sin temor.",
    "Incluye principios como perdón, mente sana, humildad y esperanza para decidir mejor."
  ],
  keyPoints: [
    "Confianza y guía: no cargar todo el control sola.",
    "Generosidad + mayordomía: administrar con propósito.",
    "Diligencia y disciplina: hábitos que sostienen resultados.",
    "Fe sobre miedo: decisiones financieras más estables.",
    "Perdón, mente sana, humildad y esperanza como bases."
  ],
},
{
  category: "Finanzas y Fe",
  title: "Cómo Evitar que el Dinero se Convierta en tu Dios: Claves Financieras y Bíblicas",
  subtitle: "Reflexionando sobre el Dinero y la Fe",
  date: "jueves, 3 de octubre de 2024",
  url: "https://www.themoneybridge.com.mx/evita-que-el-dinero-sea-tu-dios",
  paragraphs: [
    "Plantea que el dinero es una herramienta: el problema es cuando define prioridades y decisiones.",
    "Une historias bíblicas con hábitos y herramientas financieras para vivir con propósito."
  ],
  keyPoints: [
    "Advertencias bíblicas: acumular sin sentido y traicionar valores por dinero.",
    "Problema común: gastar todo y no planificar (sin ahorro/fondo).",
    "4 herramientas: ahorro, inversiones, seguros y plan de retiro.",
    "Conclusión: poner valores al centro y planificar el futuro."
  ],
},
    ],
    []
  );

  const total = posts.length;

  const goTo = (index: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(index, total - 1));
    el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
  };

  const prev = () => goTo(page - 1);
  const next = () => goTo(page + 1);

  // Actualiza page al hacer scroll
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      const w = el.clientWidth || 1;
      const idx = Math.round(el.scrollLeft / w);
      setPage(Math.max(0, Math.min(idx, total - 1)));
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [total]);

  // Si cambia tamaño, intenta alinear a la página actual
  useEffect(() => {
    const onResize = () => goTo(page);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, total]);

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500">
      {/* Header */}
      <div className="flex items-start justify-between gap-6 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <BookOpen className="w-4 h-4 text-lapis-lazuli" />
            <span className="text-lapis-lazuli text-sm font-bold tracking-wider uppercase">
              Blog
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-space-cadet">
            Publicaciones
          </h3>

          <p className="text-gray-600 mt-2">
            Estamos en la página ({total}).
          </p>
        </div>

        {/* Flechas */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            disabled={page === 0}
            className="w-11 h-11 rounded-2xl border border-gray-100 bg-white hover:bg-gray-50 shadow-sm flex items-center justify-center transition disabled:opacity-40"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 text-space-cadet" />
          </button>

          <button
            type="button"
            onClick={next}
            disabled={page === total - 1}
            className="w-11 h-11 rounded-2xl border border-gray-100 bg-white hover:bg-gray-50 shadow-sm flex items-center justify-center transition disabled:opacity-40"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5 text-space-cadet" />
          </button>
        </div>
      </div>

      {/* Carrusel por páginas (1 blog = 1 página) */}
      <div
        ref={scrollerRef}
        className="
          overflow-x-auto scroll-smooth
          snap-x snap-mandatory
          [-ms-overflow-style:none] [scrollbar-width:none]
        "
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {/* Ocultar scrollbar en WebKit */}
        <style>{`
          div::-webkit-scrollbar { display: none; }
        `}</style>

        <div className="flex">
          {posts.map((p, i) => (
            <div key={i} className="snap-start min-w-full pr-0">
              {/* “Página” */}
              <article className="rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <span className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-full bg-white border border-gray-100 text-gray-600">
                    <Tag className="w-3.5 h-3.5" />
                    {p.category}
                  </span>

                  <span className="inline-flex items-center gap-2 text-xs font-bold text-gray-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {p.date}
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl font-extrabold text-space-cadet leading-snug">
                  {p.title}
                </h4>

                <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
                  {p.subtitle}
                </p>

                <div className="mt-5 space-y-2">
                  {p.paragraphs.map((t, idx) => (
                    <p key={idx} className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {t}
                    </p>
                  ))}
                </div>

                <ul className="mt-5 space-y-2 text-sm sm:text-base text-gray-600 list-disc pl-5">
                  {p.keyPoints.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>

                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-tufts-blue hover:text-lapis-lazuli transition-colors"
                >
                  Leer artículo <ExternalLink className="w-4 h-4" />
                </a>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Paginación 1..10 */}
      <div className="mt-6 flex items-center justify-center gap-2 flex-wrap">
        {posts.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === page ? "w-8 bg-tufts-blue" : "w-2.5 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Ir a página ${i + 1}`}
            title={`Página ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};