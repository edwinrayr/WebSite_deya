// src/sections/Recognition/NationalAwardsCard.tsx
import { TrendingUp, MapPin } from "lucide-react";

type TimelineItem = { year: number; title: string; location: string };

function extractTopNumber(title: string) {
  // "Top 100 Nacional" -> 100
  const match = title.match(/Top\s+(\d+)/i);
  return match ? Number(match[1]) : null;
}

export const NationalAwardsCard = ({ items }: { items: TimelineItem[] }) => {
  // Para barras: menor Top = mejor (Top 25 mejor que Top 100)
  const tops = items
    .map((it) => ({ ...it, top: extractTopNumber(it.title) }))
    .filter((it) => typeof it.top === "number") as Array<TimelineItem & { top: number }>;

  const maxTop = tops.length ? Math.max(...tops.map((t) => t.top)) : 100;
  const minTop = tops.length ? Math.min(...tops.map((t) => t.top)) : 1;

  const barWidth = (top: number) => {
    // Mejor (minTop) -> barra más larga
    const norm = (maxTop - top) / (maxTop - minTop || 1);
    return 30 + norm * 70; // 30% a 100%
  };

  return (
    <div className="rounded-3xl bg-white border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-8 sm:p-10">
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-tufts-blue/10 text-tufts-blue border border-tufts-blue/20">
              <TrendingUp className="w-4 h-4" />
              <span className="text-xs font-bold tracking-wider uppercase">
                Premiaciones nacionales
              </span>
            </div>
            <h3 className="mt-4 text-2xl font-extrabold text-space-cadet">
              Evolución del ranking
            </h3>
            <p className="mt-2 text-gray-600 leading-relaxed">
              Visualización del progreso en ranking. Menor número “Top” = mejor posición.
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-5">
          {items.map((it, idx) => {
            const top = extractTopNumber(it.title);
            const width = typeof top === "number" ? barWidth(top) : 45;

            return (
              <div key={idx} className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold text-gray-400">{it.year}</p>
                    <p className="text-lg font-extrabold text-space-cadet">{it.title}</p>
                    <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{it.location}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-gray-400 font-bold">Progreso</p>
                    <p className="text-sm font-extrabold text-tufts-blue">
                      {typeof top === "number" ? `Top ${top}` : "—"}
                    </p>
                  </div>
                </div>

                {/* Barra */}
                <div className="mt-4 h-3 w-full bg-white rounded-full border border-gray-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-sea-serpent to-tufts-blue"
                    style={{ width: `${width}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-8 sm:px-10 py-6 bg-space-cadet text-white/90">
        <p className="text-sm">
          * Rankings y reconocimientos refuerzan disciplina, consistencia y resultados.
        </p>
      </div>
    </div>
  );
};