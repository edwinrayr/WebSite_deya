// src/sections/Recognition/CredentialsCard.tsx
import { BadgeCheck, ShieldCheck, GraduationCap, Sparkles } from "lucide-react";

type CredentialItem = { title: string; subtitle: string };

export const CredentialsCard = ({ items }: { items: CredentialItem[] }) => {
  return (
    <div className="rounded-3xl bg-white border border-gray-100 shadow-sm overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-tufts-blue/40">
      <div className="p-8 sm:p-10">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-2xl font-extrabold text-space-cadet">Credenciales</h3>
          <span className="text-xs font-bold tracking-wider uppercase text-gray-400">
            verificado
          </span>
        </div>

        {/* Badges */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-gray-50 border border-gray-100 p-4 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-tufts-blue/30 hover:-translate-y-0.5">
            <div className="w-10 h-10 rounded-xl bg-sea-serpent/10 flex items-center justify-center mb-3">
              <BadgeCheck className="w-5 h-5 text-sea-serpent" />
            </div>
            <p className="font-extrabold text-space-cadet">CNSF</p>
            <p className="text-sm text-gray-600">Certificación</p>
          </div>

          <div className="rounded-2xl bg-gray-50 border border-gray-100 p-4 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-tufts-blue/30 hover:-translate-y-0.5">
            <div className="w-10 h-10 rounded-xl bg-tufts-blue/10 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5 text-tufts-blue" />
            </div>
            <p className="font-extrabold text-space-cadet">Protección</p>
            <p className="text-sm text-gray-600">Estrategia</p>
          </div>

          <div className="rounded-2xl bg-gray-50 border border-gray-100 p-4 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-tufts-blue/30 hover:-translate-y-0.5">
            <div className="w-10 h-10 rounded-xl bg-lapis-lazuli/10 flex items-center justify-center mb-3">
              <GraduationCap className="w-5 h-5 text-lapis-lazuli" />
            </div>
            <p className="font-extrabold text-space-cadet">Formación</p>
            <p className="text-sm text-gray-600">Base sólida</p>
          </div>

          <div className="rounded-2xl bg-gray-50 border border-gray-100 p-4 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-tufts-blue/30 hover:-translate-y-0.5">
            <div className="w-10 h-10 rounded-xl bg-space-cadet/10 flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5 text-space-cadet" />
            </div>
            <p className="font-extrabold text-space-cadet">Excelencia</p>
            <p className="text-sm text-gray-600">Consistencia</p>
          </div>
        </div>

        {/* Lista tipo chips */}
        <div className="mt-8 space-y-3">
          {items.map((c, i) => (
            <div
              key={i}
              className="flex items-start justify-between gap-4 rounded-2xl border border-gray-100 bg-white p-4 transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:border-tufts-blue/20 hover:-translate-y-0.5"
            >
              <div>
                <p className="font-extrabold text-space-cadet">{c.title}</p>
                <p className="text-sm text-gray-600 mt-1">{c.subtitle}</p>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-bold bg-sea-serpent/10 text-sea-serpent">
                Activo
              </span>
            </div>
          ))}
        </div>
      </div>

{/* Sticky hint */}
      <div className="px-8 sm:px-10 py-6 bg-gray-50 border-t border-gray-100">
        <p className="text-sm text-gray-600">
          Consejo: mantener credenciales vigentes protege tus decisiones financieras.
        </p>
      </div>
    </div>
  );
};