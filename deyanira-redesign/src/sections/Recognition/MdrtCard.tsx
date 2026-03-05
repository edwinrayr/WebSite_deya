// src/sections/Recognition/MdrtCard.tsx
import { Globe, MapPin, Link2 } from "lucide-react";

type TimelineItem = { year: number; title: string; location: string };

export const MdrtCard = ({ items }: { items: TimelineItem[] }) => {
  return (
    <div className="lg:col-span-2 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
      <div className="absolute top-0 right-0 w-64 h-64 bg-sea-serpent/5 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110"></div>

      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-space-cadet flex items-center justify-center shadow-lg">
          <Globe className="w-7 h-7 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-space-cadet">
            Million Dollar Round Table (MDRT)
          </h3>
          <p className="text-tufts-blue font-medium">Asociación Global Independiente</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl p-4 border border-gray-100 hover:border-lapis-lazuli hover:bg-blue-50 transition-colors duration-300"
          >
            <span className="text-xs font-bold text-gray-400 mb-1 block">{item.year}</span>
            <span className="text-lg font-extrabold mb-1 block text-space-cadet">
              {item.title}
            </span>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <MapPin className="w-3 h-3" />
              {item.location}
            </div>
          </div>
        ))}
      </div>

      {/* Nota MDRT (tu texto) */}
      <div className="rounded-2xl border border-gray-100 bg-white p-5 sm:p-6">
        <p className="text-gray-700 leading-relaxed">
          <span className="font-bold">*</span> La{" "}
          <span className="font-extrabold text-space-cadet">
            Million Dollar Round Table (MDRT)
          </span>{" "}
          es una asociación global e independiente líder mundial en servicios financieros
          profesionales de más de 500 compañías en 70 países y territorios por todo el mundo.
          Es la máxima condecoración que se puede lograr en este sector, donde solo llegan{" "}
          <span className="font-extrabold text-space-cadet">2%</span> de los mejores asesores
          patrimoniales a nivel mundial.
        </p>

        <a
          href="https://www.mdrt.org/es"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 font-bold text-tufts-blue hover:text-lapis-lazuli transition-colors"
        >
          <Link2 className="w-4 h-4" />
          Conoce de la MDRT
        </a>
      </div>
    </div>
  );
};