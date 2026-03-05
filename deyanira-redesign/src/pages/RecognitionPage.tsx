// src/pages/RecognitionPage.tsx
import { useEffect } from "react";
import { Header } from "../sections/Recognition/Header";
import { MdrtCard } from "../sections/Recognition/MdrtCard";
import { CredentialsCard } from "../sections/Recognition/CredentialsCard";
import { NationalAwardsCard } from "../sections/Recognition/NationalAwardsCard";
import { Contact } from "../sections/home/Contact";

export const RecognitionPage = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const mdrtHistory = [
    { year: 2021, title: "Aspirante", location: "Boston, US" },
    { year: 2022, title: "Aspirante", location: "Nashville, US" },
    { year: 2023, title: "Miembro", location: "Vancouver, CAN" },
    { year: 2024, title: "Miembro", location: "Miami, USA" },
  ];

  const credentials = [
    { title: "Asesora Certificada CNSF", subtitle: "Vigente desde 2020" },
    { title: "Master Financial Advisor", subtitle: "LIMRA 2022" },
    { title: "Ganadora Crucero Caribe", subtitle: "Generación 2024" },
  ];

  const nationalAwards = [
    { year: 2021, title: "Top 100 Nacional", location: "Xcaret" },
    { year: 2022, title: "Top 70 Nacional", location: "Punta Mita" },
    { year: 2023, title: "Top 25 Nacional", location: "Argentina" },
    { year: 2024, title: "Top 80 Nacional", location: "Los Cabos" },
  ];

  return (
    <div className="pt-20 lg:pt-24 bg-white">
      <Header />
      <section className="py-16 lg:py-24 bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Columna principal */}
            <div className="lg:col-span-8 space-y-8">
              <MdrtCard items={mdrtHistory} />
              <NationalAwardsCard items={nationalAwards} />
            </div>

            {/* Columna derecha sticky */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <CredentialsCard items={credentials} />
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};