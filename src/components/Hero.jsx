import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
    return (
        <section
            id="hero"
            style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                paddingTop: '160px',
                paddingBottom: '80px',
            }}
        >
            <div className="container" style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 32px', width: '100%' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '64px',
                    alignItems: 'center',
                }}>
                    {/* Text column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{ zIndex: 10 }}
                    >
                        <span style={{
                            color: '#598BBC',
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                            fontWeight: 700,
                            fontSize: '0.875rem',
                            marginBottom: '16px',
                            display: 'block',
                        }}>
                            Rehabilitacja i Fizjoterapia Głubczyce
                        </span>
                        <h1 style={{
                            color: '#2C3034',
                            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                            marginBottom: '24px',
                            lineHeight: 0.95,
                        }}>
                            Powrót do <span style={{ color: '#CFA714' }}>sprawności</span> zaczyna się tutaj
                        </h1>
                        <p style={{
                            color: '#444A56',
                            fontSize: '1.15rem',
                            marginBottom: '40px',
                            maxWidth: '500px',
                            lineHeight: 1.7,
                        }}>
                            Profesjonalna rehabilitacja i fizjoterapia pomagająca wrócić do zdrowia po urazach, operacjach i przewlekłym bólu.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                            <a href="#contact" className="btn-premium" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
                                <span>Umów wizytę</span>
                                <ArrowUpRight size={20} />
                            </a>
                            <a
                                href="#services"
                                style={{
                                    borderRadius: '50px',
                                    fontWeight: 700,
                                    fontSize: '1.05rem',
                                    textDecoration: 'none',
                                    border: '2px solid #2C3034',
                                    color: '#2C3034',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    padding: '16px 36px',
                                    transition: 'all 0.3s',
                                }}
                            >
                                Zobacz usługi
                            </a>
                        </div>
                    </motion.div>

                    {/* Image column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{
                            borderRadius: '40px',
                            overflow: 'hidden',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                            position: 'relative',
                            zIndex: 20,
                            maxHeight: '520px',
                        }}>
                            <img
                                src="/clinic_room.jpg"
                                alt="Gabinet Fizjoterapii Dr Kangur"
                                style={{
                                    width: '100%',
                                    height: '520px',
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                        </div>

                        {/* Decorative Blobs */}
                        <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '256px', height: '256px', background: '#CFA714', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.2, zIndex: 10 }}></div>
                        <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '256px', height: '256px', background: '#598BBC', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.2, zIndex: 10 }}></div>
                    </motion.div>
                </div>
            </div>

            {/* Responsive override for mobile */}
            <style>{`
                @media (max-width: 1024px) {
                    #hero {
                        padding-top: 200px !important;
                        min-height: auto !important;
                    }
                }
                @media (max-width: 768px) {
                    #hero > div > div {
                        grid-template-columns: 1fr !important;
                        gap: 40px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
