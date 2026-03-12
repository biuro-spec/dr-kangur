import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { generateFAQSchema, injectSchema, removeSchema } from '../utils/seo';

const faqs = [
    {
        question: 'Czy przyjmujecie na\u00A0NFZ?',
        answer: 'Tak! Nasz gabinet posiada kontrakt z\u00A0Narodowym Funduszem Zdrowia jako Poradnia Rehabilitacyjna. Wystarczy skierowanie od\u00A0specjalisty – można zadzwonić i\u00A0umówić się na\u00A0konsultację z\u00A0lekarzem, a\u00A0następnie skorzystać z\u00A0naszych usług.'
    },
    {
        question: 'Jak mogę umówić się na\u00A0wizytę?',
        answer: 'Najprościej zadzwonić pod numer 784 565 994 w\u00A0godzinach 8:00 - 18:00 (poniedziałek - piątek). Można też wysłać wiadomość przez formularz na\u00A0naszej stronie lub napisać na\u00A0adres kontakt@dr-kangur.pl.'
    },
    {
        question: 'Czy potrzebuję skierowania?',
        answer: 'Na\u00A0wizytę prywatną skierowanie nie jest wymagane. W\u00A0przypadku korzystania z\u00A0usług w\u00A0ramach NFZ potrzebne jest skierowanie od\u00A0lekarza specjalisty. Lekarz w\u00A0naszej Poradni Rehabilitacyjnej również może wystawić stosowne zlecenie.'
    },
    {
        question: 'Jakie zabiegi oferujecie?',
        answer: 'Oferujemy szeroki wachlarz usług: rehabilitację po\u00A0urazach i\u00A0operacjach, fizjoterapię manualną, masaże lecznicze, falę uderzeniową, laseroterapię wysokoenergetyczną, krioterapię, taping medyczny, hydroterapię, masaż pneumatyczno-uciskowy oraz terapię blizn.'
    },
    {
        question: 'Czy wypożyczacie sprzęt medyczny?',
        answer: 'Tak, posiadamy profesjonalną wypożyczalnię sprzętu medycznego: łóżka rehabilitacyjne elektryczne, wózki inwalidzkie, koncentratory tlenu, szyny CPM Ortoflex, podnośniki dla osób niepełnosprawnych, chodziki i\u00A0kule. Kontakt do\u00A0wypożyczalni: 604 246 994.'
    },
    {
        question: 'Ile trwa wizyta i\u00A0rehabilitacja?',
        answer: 'Czas wizyty zależy od\u00A0rodzaju zabiegu – konsultacja trwa ok. 30 minut, a\u00A0poszczególne zabiegi od\u00A015 do\u00A060 minut. Plan rehabilitacji jest indywidualnie dopasowywany do\u00A0potrzeb pacjenta przez naszych specjalistów.'
    },
    {
        question: 'Czy masaż gorącymi kamieniami jest bezpieczny?',
        answer: 'Tak, masaż gorącymi kamieniami bazaltowymi jest bezpieczną i\u00A0skuteczną formą terapii. Polecany jest osobom zestresowanym, zmęczonym, z\u00A0napięciem mięśniowym czy problemami ze\u00A0snem. Temperatura kamieni jest kontrolowana przez terapeutę.'
    },
    {
        question: 'Dla kogo jest fala uderzeniowa?',
        answer: 'Fala uderzeniowa jest polecana osobom z\u00A0przewlekłym bólem ścięgien, mięśni i\u00A0stawów, ostrogą piętową, łokciem tenisisty, bólem barku czy Achillesów. Sprawdza się również u\u00A0sportowców i\u00A0osób po\u00A0urazach. Stosuje się ją także w\u00A0medycynie estetycznej – redukcja cellulitu, wygładzanie blizn i\u00A0rozstępów.'
    },
];

const FAQItem = ({ faq, isOpen, onClick }) => {
    return (
        <div
            style={{
                background: 'white',
                borderRadius: '24px',
                border: isOpen ? '1px solid rgba(207, 167, 20, 0.3)' : '1px solid rgba(0, 0, 0, 0.05)',
                boxShadow: isOpen ? '0 10px 30px rgba(207, 167, 20, 0.08)' : '0 2px 8px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.3s ease',
                overflow: 'hidden',
            }}
        >
            <button
                onClick={onClick}
                aria-expanded={isOpen}
                style={{
                    width: '100%',
                    padding: '24px 32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                }}
            >
                <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#2C3034', lineHeight: 1.3 }}>
                    {faq.question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ minWidth: '24px', color: '#CFA714' }}
                >
                    <ChevronDown size={24} />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div style={{ padding: '0 32px 24px 32px', color: '#444A56', lineHeight: 1.7, fontSize: '0.95rem' }}>
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        const schemaId = 'faq-schema';
        let script = document.getElementById(schemaId);
        if (!script) {
            script = document.createElement('script');
            script.id = schemaId;
            script.type = 'application/ld+json';
            document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(generateFAQSchema(faqs));
        return () => {
            const el = document.getElementById(schemaId);
            if (el) el.remove();
        };
    }, []);

    return (
        <section id="faq" style={{ padding: '96px 0', background: '#f8f9fa' }}>
            <div className="container" style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 32px' }}>
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <span style={{ color: '#598BBC', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, fontSize: '0.75rem', marginBottom: '12px', display: 'block' }}>
                        Masz pytania?
                    </span>
                    <h2 style={{ color: '#2C3034', fontSize: '3rem', marginBottom: '16px' }}>
                        Najczęściej zadawane <span style={{ color: '#CFA714' }}>pytania</span>
                    </h2>
                    <p style={{ color: '#444A56', maxWidth: '42rem', margin: '0 auto' }}>
                        Odpowiadamy na{'\u00A0'}najczęstsze pytania naszych pacjentów. Jeśli nie znalazłeś odpowiedzi, skontaktuj się z{'\u00A0'}nami.
                    </p>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.04, duration: 0.3, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.15 }}
                        >
                            <FAQItem
                                faq={faq}
                                isOpen={openIndex === i}
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
