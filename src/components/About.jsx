import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';

const About = () => {
    const points = [
        "Indywidualne plany terapii",
        "Wykwalifikowana kadra medyczna",
        "Gabinet z\u00A0kontraktem NFZ",
        "Nowoczesna sala ćwiczeń",
        "Głęboka hydroterapia",
        "Specjalistyczna terapia blizn"
    ];

    return (
        <section id="about" style={{ padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
            {/* Subtle background decoration */}
            <div style={{
                position: 'absolute',
                top: '10%',
                right: '-5%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(207,167,20,0.06) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '-5%',
                width: '350px',
                height: '350px',
                background: 'radial-gradient(circle, rgba(89,139,188,0.06) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 32px' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '80px',
                    alignItems: 'center',
                }}>
                    {/* Image column */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{
                            borderRadius: '40px',
                            overflow: 'hidden',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                            position: 'relative',
                            zIndex: 2,
                        }}>
                            <picture>
                                <source media="(max-width: 768px)" srcSet="/clinic_gym-mobile.webp" />
                                <img
                                    src="/clinic_gym.webp"
                                    loading="lazy"
                                    decoding="async"
                                    alt="Sala ćwiczeń Dr Kangur"
                                    width="800"
                                    height="480"
                                    style={{
                                        width: '100%',
                                        height: '480px',
                                        objectFit: 'cover',
                                        display: 'block',
                                    }}
                                />
                            </picture>
                            {/* Gradient overlay at bottom */}
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: '120px',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)',
                                pointerEvents: 'none',
                            }} />
                        </div>

                        {/* Decorative blobs like Hero */}
                        <div style={{
                            position: 'absolute',
                            top: '-30px',
                            left: '-30px',
                            width: '200px',
                            height: '200px',
                            background: '#CFA714',
                            borderRadius: '50%',
                            filter: 'blur(70px)',
                            opacity: 0.2,
                            zIndex: 1,
                        }} />
                        <div style={{
                            position: 'absolute',
                            bottom: '-30px',
                            right: '-30px',
                            width: '200px',
                            height: '200px',
                            background: '#598BBC',
                            borderRadius: '50%',
                            filter: 'blur(70px)',
                            opacity: 0.2,
                            zIndex: 1,
                        }} />

                        {/* Floating badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            style={{
                                position: 'absolute',
                                bottom: '-20px',
                                right: '-20px',
                                background: 'white',
                                borderRadius: '20px',
                                padding: '16px 24px',
                                boxShadow: '0 15px 40px rgba(0,0,0,0.12)',
                                zIndex: 3,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                            }}
                        >
                            <div style={{
                                width: '44px',
                                height: '44px',
                                borderRadius: '12px',
                                background: 'linear-gradient(135deg, #CFA714, #E5C14B)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Sparkles size={22} color="white" />
                            </div>
                            <div>
                                <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.25rem', color: '#2C3034', lineHeight: 1.2 }}>10+ lat</div>
                                <div style={{ fontSize: '0.8rem', color: '#444A56' }}>doświadczenia</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Text column */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <span style={{
                            color: '#598BBC',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            fontWeight: 700,
                            fontSize: '0.75rem',
                            marginBottom: '12px',
                            display: 'block',
                        }}>
                            Twoje zdrowie, nasza misja
                        </span>
                        <h2 style={{
                            color: '#2C3034',
                            fontSize: '3rem',
                            marginBottom: '24px',
                            lineHeight: 1.05,
                        }}>
                            Klinika stworzona z{'\u00A0'}myślą o{'\u00A0'}
                            <span style={{ color: '#CFA714' }}>Tobie</span>
                        </h2>
                        <p style={{
                            color: '#444A56',
                            fontSize: '1.1rem',
                            marginBottom: '40px',
                            lineHeight: 1.7,
                            maxWidth: '520px',
                        }}>
                            Gabinet DR KANGUR to{'\u00A0'}nowoczesne centrum fizjoterapii i{'\u00A0'}rehabilitacji w{'\u00A0'}sercu Głubczyc. Naszą misją jest poprawa jakości życia pacjentów poprzez skuteczne, indywidualnie dobrane terapie.
                        </p>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '16px 32px',
                        }}>
                            {points.map((point, i) => (
                                <motion.div
                                    key={point}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.06, duration: 0.3, ease: 'easeOut' }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        padding: '8px 0',
                                    }}
                                >
                                    <CheckCircle2 size={20} color="#CFA714" />
                                    <span style={{ fontWeight: 600, color: '#2C3034', fontSize: '0.95rem' }}>{point}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Responsive */}
            <style>{`
                @media (max-width: 768px) {
                    #about > div > div {
                        grid-template-columns: 1fr !important;
                        gap: 48px !important;
                    }
                    #about img {
                        height: 320px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
