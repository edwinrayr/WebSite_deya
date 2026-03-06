// src/sections/contact/ContactFAQ.tsx
import { useState } from 'react';
// CORRECCIÓN: Cambiamos MessageSquareQuestion por HelpCircle que es 100% compatible
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: '¿La sesión de diagnóstico tiene algún costo?',
        answer: 'No. La primera sesión de 45 minutos es una inversión de mi tiempo para conocerte. No tiene costo ni compromiso de contratación. Sirve para evaluar si mi metodología hace match con tus objetivos.'
    },
    {
        question: '¿Necesito tener un gran capital para empezar a invertir?',
        answer: 'En absoluto. Un error común es creer que se invierte lo que sobra. Diseñamos planes que se adaptan a tu flujo de efectivo actual, comenzando con aportaciones accesibles que crecerán mediante el interés compuesto.'
    },
    {
        question: '¿Cómo garantizan la confidencialidad de mi información?',
        answer: 'Como asesora certificada por la CNSF, opero bajo estrictos protocolos de privacidad y secreto profesional. Tu información financiera, personal y familiar está 100% blindada.'
    },
    {
        question: '¿Qué necesito preparar para nuestra videollamada?',
        answer: 'No necesitas preparar documentos complejos. Solo te pediré que tengas claridad sobre cuáles son tus principales preocupaciones financieras (ej. retiro, educación de tus hijos, compra de casa) y tus ingresos/gastos mensuales aproximados.'
    }
];

export const ContactFAQ = () => {
    // Estado para controlar qué pregunta está abierta. Iniciamos con la primera abierta (0).
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 lg:py-24 bg-white relative overflow-hidden z-0 border-t border-gray-100">
            <div className="w-full max-w-[1000px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

                {/* Cabecera del FAQ */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-tufts-blue mb-6 shadow-sm">
                        {/* CORRECCIÓN: Usamos HelpCircle aquí */}
                        <HelpCircle className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-space-cadet mb-4">
                        Preguntas Frecuentes
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Resolvemos tus dudas antes de nuestra primera sesión.
                    </p>
                </div>

                {/* Acordeón Interactivo */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className={`group rounded-[1.5rem] border transition-all duration-300 overflow-hidden ${isOpen
                                        ? 'bg-white border-tufts-blue shadow-[0_10px_30px_-15px_rgba(74,144,226,0.3)]'
                                        : 'bg-gray-50 border-gray-100 hover:border-gray-300'
                                    }`}
                            >
                                {/* Botón de la Pregunta */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-6 sm:px-8 flex items-center justify-between gap-4 text-left focus:outline-none"
                                >
                                    <span className={`font-bold text-lg transition-colors duration-300 ${isOpen ? 'text-space-cadet' : 'text-gray-700 group-hover:text-space-cadet'}`}>
                                        {faq.question}
                                    </span>

                                    {/* Icono animado +/- */}
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isOpen ? 'bg-tufts-blue text-white' : 'bg-gray-200 text-gray-500 group-hover:bg-tufts-blue/20 group-hover:text-tufts-blue'}`}>
                                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </div>
                                </button>

                                {/* Contenido de la Respuesta (Animación de altura con CSS Grid) */}
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-6 sm:px-8 pb-6 sm:pb-8 text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};