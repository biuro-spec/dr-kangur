import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';

const About = () => {
    const points = [
        "Indywidualne plany terapii",
        "Wykwalifikowana kadra medyczna",
        "Gabinet z kontraktem NFZ",
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
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
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
                            <img
                                src="/clinic_gym.jpg"
                                alt="Sala ćwiczeń Dr Kangur"
                                style={{
                                    width: '100%',
                                    height: '480px',
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
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
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.5, type: 'spring' }}
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
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
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
                            Klinika stworzona z myślą o{' '}
                            <span style={{ color: '#CFA714' }}>Tobie</span>
                        </h2>
                        <p style={{
                            color: '#444A56',
                            fontSize: '1.1rem',
                            marginBottom: '40px',
                            lineHeight: 1.7,
                            maxWidth: '520px',
                        }}>
                            Gabinet DR KANGUR to nowoczesne centrum fizjoterapii i rehabilitacji w sercu Głubczyc. Naszą misją jest poprawa jakości życia pacjentów poprzez skuteczne, indywidualnie dobrane terapie.
                        </p>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '16px 32px',
                        }}>
                            {points.map((point, i) => (
                                <motion.div
                                    key={point}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.08, duration: 0.4, ease: 'easeOut' }}
                                    viewport={{ once: true, margin: '-30px' }}
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
