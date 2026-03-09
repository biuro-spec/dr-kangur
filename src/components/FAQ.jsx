import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: 'Czy przyjmujecie na NFZ?',
        answer: 'Tak! Nasz gabinet posiada kontrakt z Narodowym Funduszem Zdrowia jako Poradnia Rehabilitacyjna. Wystarczy skierowanie od specjalisty – można zadzwonić i umówić się na konsultację z lekarzem, a następnie skorzystać z naszych usług.'
    },
    {
        question: 'Jak mogę umówić się na wizytę?',
        answer: 'Najprościej zadzwonić pod numer 784 565 994 w godzinach 8:00 - 18:00 (poniedziałek - piątek). Można też wysłać wiadomość przez formularz na naszej stronie lub napisać na adres kontakt@drkangur.pl.'
    },
    {
        question: 'Czy potrzebuję skierowania?',
        answer: 'Na wizytę prywatną skierowanie nie jest wymagane. W przypadku korzystania z usług w ramach NFZ potrzebne jest skierowanie od lekarza specjalisty. Lekarz w naszej Poradni Rehabilitacyjnej również może wystawić stosowne zlecenie.'
    },
    {
        question: 'Jakie zabiegi oferujecie?',
        answer: 'Oferujemy szeroki wachlarz usług: rehabilitację po urazach i operacjach, fizjoterapię manualną, masaże lecznicze, falę uderzeniową, laseroterapię wysokoenergetyczną, krioterapię, taping medyczny, hydroterapię, masaż pneumatyczno-uciskowy oraz terapię blizn.'
    },
    {
        question: 'Czy wypożyczacie sprzęt medyczny?',
        answer: 'Tak, posiadamy profesjonalną wypożyczalnię sprzętu medycznego: łóżka rehabilitacyjne elektryczne, wózki inwalidzkie, koncentratory tlenu, szyny CPM Ortoflex, podnośniki dla osób niepełnosprawnych, chodziki i kule. Kontakt do wypożyczalni: 604 246 994.'
    },
    {
        question: 'Ile trwa wizyta i rehabilitacja?',
        answer: 'Czas wizyty zależy od rodzaju zabiegu – konsultacja trwa ok. 30 minut, a poszczególne zabiegi od 15 do 60 minut. Plan rehabilitacji jest indywidualnie dopasowywany do potrzeb pacjenta przez naszych specjalistów.'
    },
    {
        question: 'Czy masaż gorącymi kamieniami jest bezpieczny?',
        answer: 'Tak, masaż gorącymi kamieniami bazaltowymi jest bezpieczną i skuteczną formą terapii. Polecany jest osobom zestresowanym, zmęczonym, z napięciem mięśniowym czy problemami ze snem. Temperatura kamieni jest kontrolowana przez terapeutę.'
    },
    {
        question: 'Dla kogo jest fala uderzeniowa?',
        answer: 'Fala uderzeniowa jest polecana osobom z przewlekłym bólem ścięgien, mięśni i stawów, ostrogą piętową, łokciem tenisisty, bólem barku czy Achillesów. Sprawdza się również u sportowców i osób po urazach. Stosuje się ją także w medycynie estetycznej – redukcja cellulitu, wygładzanie blizn i rozstępów.'
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
                        Odpowiadamy na najczęstsze pytania naszych pacjentów. Jeśli nie znalazłeś odpowiedzi, skontaktuj się z nami.
                    </p>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05, duration: 0.4, ease: 'easeOut' }}
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
