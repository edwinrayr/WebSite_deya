import { Users, Star, ShieldCheck, TrendingUp } from "lucide-react";

export const TrustMetrics = () => {
  const metrics = [
    { title: "+1k", subtitle: "Personas asesoradas", icon: Users, tint: "bg-tufts-blue/10 text-tufts-blue" },
    { title: "Top 2%", subtitle: "MDRT (élite global)", icon: Star, tint: "bg-sea-serpent/10 text-sea-serpent" },
    { title: "CNSF", subtitle: "Certificación vigente", icon: ShieldCheck, tint: "bg-lapis-lazuli/10 text-lapis-lazuli" },
    { title: "Estrategia", subtitle: "Plan a tu medida", icon: TrendingUp, tint: "bg-space-cadet/10 text-space-cadet" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {metrics.map((m, i) => {
        const Icon = m.icon;
        return (
          <div
            key={i}
            className="rounded-3xl bg-white border border-gray-100 shadow-sm p-6 transition-all duration-500
                       hover:-translate-y-1 hover:shadow-xl hover:border-tufts-blue/40"
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${m.tint}`}>
              <Icon className="w-6 h-6" />
            </div>
            <p className="text-2xl font-extrabold text-space-cadet">{m.title}</p>
            <p className="text-gray-600 mt-1">{m.subtitle}</p>
          </div>
        );
      })}
    </div>
  );
};