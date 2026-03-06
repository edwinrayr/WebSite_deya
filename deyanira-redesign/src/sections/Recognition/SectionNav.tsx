import { Globe, Medal, ShieldCheck, BookOpen, CalendarCheck } from "lucide-react";

const items = [
  { href: "#mdrt", label: "MDRT", icon: Globe },
  { href: "#premios", label: "Premiaciones", icon: Medal },
  { href: "#credenciales", label: "Credenciales", icon: ShieldCheck },
  { href: "#blog", label: "Blog", icon: BookOpen },
  { href: "#cta", label: "Agendar", icon: CalendarCheck },
];

export const SectionNav = () => {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sm:p-8 transition-all duration-500 hover:shadow-xl hover:border-tufts-blue/40">
      <p className="text-xs font-bold tracking-wider uppercase text-gray-400 mb-4">
        Explorar
      </p>

      <div className="flex flex-wrap gap-3">
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <a
              key={it.href}
              href={it.href}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-space-cadet font-bold text-sm transition-all
                         hover:bg-white hover:border-tufts-blue/30 hover:shadow-sm hover:-translate-y-0.5"
            >
              <Icon className="w-4 h-4 text-tufts-blue" />
              {it.label}
            </a>
          );
        })}
      </div>
    </div>
  );
};