// src/pages/RecognitionPage.tsx
import { useEffect } from "react";

import { Header } from "../sections/Recognition/Header";
import { MdrtCard } from "../sections/Recognition/MdrtCard";
import { CredentialsCard } from "../sections/Recognition/CredentialsCard";
import { NationalAwardsCard } from "../sections/Recognition/NationalAwardsCard";
import { BlogRecognition } from "../sections/Recognition/BlogRecognition";

import { SectionNav } from "../sections/Recognition/SectionNav";
import { TrustMetrics } from "../sections/Recognition/TrustMetrics";
import { ProcessSteps } from "../sections/Recognition/ProcessSteps";
import { RecognitionFAQ } from "../sections/Recognition/RecognitionFAQ";
import { RecognitionCTA } from "../sections/Recognition/RecognitionCTA";

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
      {/* Hero/Header de Reconocimientos */}
      <Header />

      {/* Nav interna + métricas (misma anchura centrada que todo) */}
      <section className="bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-10 space-y-8">
          
          <TrustMetrics />
        </div>
      </section>

      {/* Grid principal: MDRT + Ranking (izq) / Credenciales sticky (der) */}
      <section className="bg-white py-10 lg:py-14">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Izquierda */}
            <div className="lg:col-span-8 space-y-8">
              <div id="mdrt">
                <MdrtCard items={mdrtHistory} />
              </div>

              <div id="premios">
                <NationalAwardsCard items={nationalAwards} />
              </div>
            </div>

            {/* Derecha sticky */}
            <div
              id="credenciales"
              className="lg:col-span-4 lg:sticky lg:top-28 space-y-8"
            >
              <CredentialsCard items={credentials} />
            </div>
          </div>
        </div>
      </section>

      {/* ✅ ProcessSteps (sin card, web centered) */}
      <section className="bg-white">
        <div className="w-full max-w-[1440px] mx-auto">
          <ProcessSteps />
        </div>
      </section>

      {/* ✅ FAQ (sin card, web centered) */}
      <section className="bg-white">
        <div className="w-full max-w-[1440px] mx-auto">
          <RecognitionFAQ />
        </div>
      </section>

      {/* Blog (ancho completo dentro del mismo contenedor) */}
      <section id="blog" className="bg-white py-10 lg:py-14">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <BlogRecognition />
        </div>
      </section>


      {/* Contacto final */}
      <Contact />
    </div>
  );
};