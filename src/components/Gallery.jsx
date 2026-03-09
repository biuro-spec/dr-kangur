import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
    {
        src: '/clinic_room.webp',
        alt: 'Gabinet fizjoterapii DR KANGUR',
        title: 'Gabinet zabiegowy',
        category: 'Wnętrze',
    },
    {
        src: '/clinic_gym.webp',
        alt: 'Sala ćwiczeń DR KANGUR',
        title: 'Sala ćwiczeń',
        category: 'Wnętrze',
    },
    {
        src: '/hero_rehab.webp',
        alt: 'Rehabilitacja DR KANGUR',
        title: 'Rehabilitacja',
        category: 'Zabiegi',
    },
    {
        src: '/hero_premium.webp',
        alt: 'Premium fizjoterapia',
        title: 'Fizjoterapia premium',
        category: 'Zabiegi',
    },
];

const Gallery = () => {
    const [selected, setSelected] = useState(null);

    return (
        <section id="gallery" style={{ padding: '96px 0', background: '#f1f3f5' }}>
            <div className="container" style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 32px' }}>
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <span style={{ color: '#598BBC', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, fontSize: '0.75rem', marginBottom: '12px', display: 'block' }}>
                        Nasze wnętrza
                    </span>
                    <h2 style={{ color: '#2C3034', fontSize: '3rem', marginBottom: '16px' }}>
                        Galeria <span style={{ color: '#CFA714' }}>gabinetu</span>
                    </h2>
                    <p style={{ color: '#444A56', maxWidth: '42rem', margin: '0 auto' }}>
                        Nowoczesne wnętrza i profesjonalny sprzęt — u nas czujesz się komfortowo od pierwszej wizyty.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '24px',
                }}>
                    {galleryItems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: (i % 3) * 0.08, duration: 0.4, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.15 }}
                            onClick={() => setSelected(item)}
                            style={{
                                position: 'relative',
                                borderRadius: '32px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                aspectRatio: '4/3',
                                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                            }}
                        >
                            <img
                                src={item.src}
                                alt={item.alt}
                                loading="lazy"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease',
                                }}
                                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                            />
                            {/* Overlay */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(44, 48, 52, 0.7) 0%, transparent 50%)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                padding: '24px',
                                transition: 'opacity 0.3s',
                            }}>
                                <span style={{
                                    background: 'rgba(207, 167, 20, 0.9)',
                                    color: 'white',
                                    padding: '4px 12px',
                                    borderRadius: '100px',
                                    fontSize: '0.7rem',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    alignSelf: 'flex-start',
                                    marginBottom: '8px',
                                }}>
                                    {item.category}
                                </span>
                                <h4 style={{ color: 'white', fontSize: '1.2rem', fontWeight: 700 }}>
                                    {item.title}
                                </h4>
                            </div>
                            {/* Zoom icon on hover */}
                            <div style={{
                                position: 'absolute',
                                top: '16px',
                                right: '16px',
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: 'rgba(255, 255, 255, 0.9)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                opacity: 0.7,
                                transition: 'opacity 0.3s',
                            }}>
                                <ZoomIn size={18} color="#2C3034" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelected(null)}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(0, 0, 0, 0.9)',
                            zIndex: 9998,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '32px',
                            cursor: 'pointer',
                        }}
                    >
                        <button
                            onClick={() => setSelected(null)}
                            style={{
                                position: 'absolute',
                                top: '24px',
                                right: '24px',
                                width: '48px',
                                height: '48px',
                                borderRadius: '50%',
                                background: 'rgba(255, 255, 255, 0.1)',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                zIndex: 9999,
                            }}
                        >
                            <X size={24} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            src={selected.src}
                            alt={selected.alt}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                maxWidth: '90vw',
                                maxHeight: '85vh',
                                objectFit: 'contain',
                                borderRadius: '16px',
                                cursor: 'default',
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
