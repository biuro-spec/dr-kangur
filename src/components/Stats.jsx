import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Sparkles, Clock } from 'lucide-react';

const stats = [
    { value: '2000+', label: 'Zadowolonych pacjentów', Icon: Heart },
    { value: 'NFZ', label: 'Kontrakt z Narodowym Funduszem Zdrowia', Icon: ShieldCheck },
    { value: '9', label: 'Specjalistycznych zabiegów', Icon: Sparkles },
    { value: '10+', label: 'Lat doświadczenia w rehabilitacji', Icon: Clock },
];

const Stats = () => {
    return (
        <section id="stats" style={{
            padding: '0',
            position: 'relative',
        }}>
            <div style={{
                background: 'linear-gradient(135deg, #3B6CB5 0%, #598BBC 40%, #4A7DB8 100%)',
                borderRadius: '32px',
                maxWidth: '1300px',
                margin: '-48px auto 0',
                padding: '60px 48px',
                position: 'relative',
                zIndex: 30,
                boxShadow: '0 25px 60px rgba(89, 139, 188, 0.35)',
                overflow: 'hidden',
            }}>
                {/* Decorative glow blobs */}
                <div style={{
                    position: 'absolute',
                    top: '-60px',
                    left: '-40px',
                    width: '200px',
                    height: '200px',
                    background: 'rgba(207, 167, 20, 0.15)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    pointerEvents: 'none',
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '-50px',
                    right: '-30px',
                    width: '180px',
                    height: '180px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '50%',
                    filter: 'blur(50px)',
                    pointerEvents: 'none',
                }} />
                {/* Subtle pattern overlay */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(207,167,20,0.06) 0%, transparent 50%)',
                    pointerEvents: 'none',
                }} />

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '32px',
                    position: 'relative',
                    zIndex: 2,
                }}>
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.12, duration: 0.5, ease: 'easeOut' }}
                            viewport={{ once: true, margin: '-50px' }}
                            style={{
                                textAlign: 'center',
                                padding: '12px 0',
                                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                            }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginBottom: '20px',
                                }}
                            >
                                <div style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '16px',
                                    background: 'rgba(255, 255, 255, 0.15)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                                }}>
                                    <stat.Icon size={26} color="#CFA714" />
                                </div>
                            </motion.div>
                            <h3 style={{
                                color: 'white',
                                fontSize: '2.75rem',
                                fontWeight: 800,
                                marginBottom: '10px',
                                fontFamily: 'Outfit, sans-serif',
                                lineHeight: 1,
                                textShadow: '0 2px 10px rgba(0,0,0,0.15)',
                            }}>
                                {stat.value}
                            </h3>
                            <p style={{
                                color: 'rgba(255,255,255,0.75)',
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                lineHeight: 1.5,
                                maxWidth: '180px',
                                margin: '0 auto',
                            }}>
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Responsive */}
            <style>{`
                @media (max-width: 768px) {
                    #stats > div:first-child {
                        margin-left: 16px !important;
                        margin-right: 16px !important;
                        padding: 40px 24px !important;
                    }
                    #stats > div:first-child > div:last-child {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                    #stats > div:first-child > div:last-child > div {
                        border-right: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Stats;
