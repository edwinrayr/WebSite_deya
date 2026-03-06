// src/pages/ContactPage.tsx
import { useEffect } from 'react';
import { ContactHero } from '../sections/contact/ContactHero';
import { BookingSection } from '../sections/contact/BookingSection';
import { ContactFAQ } from '../sections/contact/ContactFAQ';

export const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-space-cadet min-h-screen flex flex-col">
            <ContactHero />
            <BookingSection />
            <ContactFAQ />
        </div>
    );
};