// src/components/layout/PageTransition.tsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
    children: React.ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
    const location = useLocation();
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        // 1. Al detectar un cambio de ruta, volvemos al estado inicial (invisible)
        setIsAnimating(true);

        // 2. Esperamos un instante microscópico (50ms) para que React renderice el nuevo componente en el DOM,
        // y luego disparamos la clase que quita la invisibilidad para crear el efecto fluido.
        const timeout = setTimeout(() => {
            setIsAnimating(false);
        }, 50);

        return () => clearTimeout(timeout);
    }, [location.pathname]); // Este Effect se dispara cada vez que navegas a otra página

    return (
        <div
            // Usamos una curva de Bezier personalizada (ease-[...]) para un movimiento "suave al final" muy premium
            className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] transform ${isAnimating
                    ? 'opacity-0 translate-y-8 blur-sm' // Estado inicial: Invisible, desplazado abajo y borroso
                    : 'opacity-100 translate-y-0 blur-0' // Estado final: Visible, en su lugar y nítido
                }`}
        >
            {children}
        </div>
    );
};