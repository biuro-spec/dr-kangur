import React from 'react';
import { motion } from 'framer-motion';
import { Bed, Accessibility, Wind, MoveHorizontal, Phone, CheckCircle, Truck, Clock, ShieldCheck } from 'lucide-react';

const rentalItems = [
    {
        icon: Bed,
        title: 'Łóżka rehabilitacyjne',
        desc: 'Elektryczne, sterowane pilotem łóżka podnoszące komfort opieki domowej. Regulacja wysokości, zagłówka i\u00A0podnóżka.',
        features: ['Sterowanie pilotem', 'Regulacja pozycji', 'Barierki ochronne'],
    },
    {
        icon: Accessibility,
        title: 'Wózki inwalidzkie',
        desc: 'Lekkie i\u00A0składane wózki dla osób z\u00A0trudnościami w\u00A0poruszaniu się. Różne rozmiary i\u00A0modele.',
        features: ['Lekka konstrukcja', 'Składane', 'Hamulce postojowe'],
    },
    {
        icon: Wind,
        title: 'Koncentratory tlenu',
        desc: 'Niezbędne wsparcie w\u00A0tlenoterapii domowej. Modele stacjonarne i\u00A0przenośne dla pełnej mobilności.',
        features: ['Stacjonarne i\u00A0przenośne', 'Cicha praca', 'Prosty w\u00A0obsłudze'],
    },
    {
        icon: MoveHorizontal,
        title: 'Szyny CPM Ortoflex',
        desc: 'Specjalistyczny sprzęt do\u00A0automatycznej rehabilitacji stawu kolanowego po\u00A0operacjach i\u00A0urazach.',
        features: ['Automatyczny ruch', 'Regulacja zakresu', 'Po\u00A0operacjach kolana'],
    },
];

const advantages = [
    { icon: Truck, text: 'Dostawa i\u00A0odbiór pod drzwi' },
    { icon: Clock, text: 'Elastyczne okresy wypożyczenia' },
    { icon: ShieldCheck, text: 'Sprzęt serwisowany i\u00A0dezynfekowany' },
];

const Rental = () => {
    return (
        <section id="rental" className="rental-section" style={{ padding: '96px 0' }}>
            <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 32px' }}>
                <div className="rental-container" style={{
                    background: '#2C3034',
                    borderRadius: '48px',
                    padding: '64px 48px',
                    color: 'white',
                    overflow: 'hidden',
                    position: 'relative',
                }}>
                    <div style={{ zIndex: 10, position: 'relative' }}>
                        {/* Header */}
                        <div style={{ marginBottom: '56px' }}>
                            <span style={{
                                color: '#CFA714',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                fontWeight: 700,
                                fontSize: '0.75rem',
                                marginBottom: '12px',
                                display: 'block',
                            }}>
                                Wsparcie domowe
                            </span>
                            <h2 style={{
                                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                                fontFamily: 'Outfit',
                                marginBottom: '20px',
                                maxWidth: '42rem',
                                lineHeight: 1.1,
                            }}>
                                Posiadamy profesjonalną <span style={{ color: '#CFA714' }}>wypożyczalnię sprzętu</span> medycznego
                            </h2>
                            <p style={{
                                color: 'rgba(255,255,255,0.7)',
                                fontSize: '1.05rem',
                                maxWidth: '600px',
                                lineHeight: 1.7,
                            }}>
                                Oferujemy wypożyczenie profesjonalnego sprzętu rehabilitacyjnego i{'\u00A0'}medycznego na{'\u00A0'}potrzeby domowej opieki i{'\u00A0'}rekonwalescencji.
                            </p>
                        </div>

                        {/* Advantages strip */}
                        <div className="rental-advantages" style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '12px',
                            marginBottom: '48px',
                        }}>
                            {advantages.map((adv) => (
                                <div key={adv.text} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    background: 'rgba(207, 167, 20, 0.1)',
                                    border: '1px solid rgba(207, 167, 20, 0.2)',
                                    padding: '10px 20px',
                                    borderRadius: '100px',
                                    fontSize: '0.85rem',
                                    color: '#E5C14B',
                                    fontWeight: 600,
                                }}>
                                    <adv.icon size={16} />
                                    {adv.text}
                                </div>
                            ))}
                        </div>

                        {/* Equipment cards grid */}
                        <div className="rental-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '24px',
                        }}>
                            {rentalItems.map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: (i % 2) * 0.08, duration: 0.4, ease: 'easeOut' }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    style={{
                                        background: 'rgba(255,255,255,0.05)',
                                        padding: '36px',
                                        borderRadius: '28px',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        transition: 'background 0.3s, border-color 0.3s',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                                        e.currentTarget.style.borderColor = 'rgba(207, 167, 20, 0.2)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                    }}
                                >
                                    <div style={{
                                        width: '56px',
                                        height: '56px',
                                        borderRadius: '16px',
                                        background: 'rgba(207, 167, 20, 0.15)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '20px',
                                    }}>
                                        <item.icon size={28} style={{ color: '#CFA714' }} />
                                    </div>
                                    <h3 style={{
                                        fontSize: '1.25rem',
                                        fontWeight: 700,
                                        fontFamily: 'Outfit',
                                        marginBottom: '10px',
                                    }}>
                                        {item.title}
                                    </h3>
                                    <p style={{
                                        color: 'rgba(255,255,255,0.65)',
                                        fontSize: '0.9rem',
                                        lineHeight: 1.7,
                                        marginBottom: '16px',
                                    }}>
                                        {item.desc}
                                    </p>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        {item.features.map((f) => (
                                            <span key={f} style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                fontSize: '0.8rem',
                                                color: 'rgba(255,255,255,0.55)',
                                            }}>
                                                <CheckCircle size={14} style={{ color: '#CFA714', flexShrink: 0 }} />
                                                {f}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="rental-cta" style={{
                            marginTop: '56px',
                            textAlign: 'center',
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            padding: '48px',
                            borderRadius: '32px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '20px',
                        }}>
                            <p style={{ fontSize: '1.15rem', color: '#d1d5db' }}>
                                Potrzebujesz sprzętu do{'\u00A0'}rehabilitacji domowej?
                            </p>
                            <a
                                href="tel:+48604246994"
                                style={{
                                    color: '#CFA714',
                                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                                    fontWeight: 800,
                                    fontFamily: 'Outfit',
                                    textDecoration: 'none',
                                    background: 'var(--gold-gradient)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    transition: 'transform 0.3s',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <Phone size={28} style={{ color: '#CFA714', WebkitTextFillColor: 'initial' }} />
                                604 246 994
                            </a>
                            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                                Zadzwoń i{'\u00A0'}zapytaj o{'\u00A0'}dostępność i{'\u00A0'}warunki wypożyczenia
                            </p>
                        </div>
                    </div>

                    {/* Decorative blurs */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '384px',
                        height: '384px',
                        background: '#598BBC',
                        borderRadius: '50%',
                        filter: 'blur(100px)',
                        opacity: 0.1,
                        transform: 'translate(50%, -50%)',
                        pointerEvents: 'none',
                    }} />
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '300px',
                        height: '300px',
                        background: '#CFA714',
                        borderRadius: '50%',
                        filter: 'blur(100px)',
                        opacity: 0.06,
                        transform: 'translate(-40%, 40%)',
                        pointerEvents: 'none',
                    }} />
                </div>
            </div>

            {/* Responsive */}
            <style>{`
                @media (max-width: 768px) {
                    .rental-section {
                        padding: 64px 0 !important;
                    }
                    .rental-section > div {
                        padding: 0 16px !important;
                    }
                    .rental-container {
                        border-radius: 28px !important;
                        padding: 32px 20px !important;
                    }
                    .rental-grid {
                        grid-template-columns: 1fr !important;
                        gap: 16px !important;
                    }
                    .rental-grid > div {
                        padding: 24px !important;
                        border-radius: 20px !important;
                    }
                    .rental-cta {
                        padding: 32px 20px !important;
                        margin-top: 32px !important;
                        border-radius: 20px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Rental;
