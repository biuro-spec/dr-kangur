import React from 'react';
import { motion } from 'framer-motion';
import { Clock, User, Calendar, Activity, Bone, Heart, Hand, Zap, Dumbbell, Footprints, Stethoscope, Bandage, ShieldCheck, Snowflake, FileText } from 'lucide-react';
import { formatDate } from '../../utils/seo';

const ICON_MAP = { Activity, Bone, Heart, Hand, Zap, Dumbbell, Footprints, Stethoscope, Bandage, ShieldCheck, Snowflake, FileText };

const BlogHero = ({ article }) => {
    const IconComponent = ICON_MAP[article.icon] || FileText;

    return (
        <section className="blog-hero" style={{
            padding: '160px 0 80px',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Background image */}
            <img
                src={article.image}
                alt=""
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            />
            {/* Dark overlay for readability */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.7))',
            }} />

            <div className="container" style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
                >
                    {/* Icon */}
                    <div style={{
                        width: '88px',
                        height: '88px',
                        borderRadius: '24px',
                        background: 'rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(10px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 32px',
                    }}>
                        <IconComponent size={44} color="white" />
                    </div>

                    {/* Category */}
                    <span style={{
                        background: 'rgba(255,255,255,0.2)',
                        color: 'white',
                        padding: '6px 20px',
                        borderRadius: '100px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                    }}>
                        {article.category}
                    </span>

                    {/* Title */}
                    <h1 style={{
                        fontFamily: 'Outfit',
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 800,
                        color: 'white',
                        marginTop: '20px',
                        marginBottom: '24px',
                        lineHeight: 1.15,
                    }}>
                        {article.title}
                    </h1>

                    {/* Subtitle */}
                    {article.subtitle && (
                        <p style={{
                            color: 'rgba(255,255,255,0.85)',
                            fontSize: '1.15rem',
                            lineHeight: 1.6,
                            marginBottom: '32px',
                        }}>
                            {article.subtitle}
                        </p>
                    )}

                    {/* Meta info */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '24px',
                        flexWrap: 'wrap',
                        color: 'rgba(255,255,255,0.8)',
                        fontSize: '0.9rem',
                    }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <User size={16} />
                            DR KANGUR
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Calendar size={16} />
                            {formatDate(article.publishDate)}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Clock size={16} />
                            {article.readTime} min czytania
                        </span>
                    </div>
                </motion.div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .blog-hero {
                        padding: 120px 0 48px !important;
                    }
                    .blog-hero .container {
                        padding: 0 16px !important;
                    }
                    .blog-hero h1 {
                        font-size: 1.7rem !important;
                    }
                    .blog-hero [style*="width: 88px"] {
                        width: 64px !important;
                        height: 64px !important;
                        border-radius: 18px !important;
                        margin-bottom: 20px !important;
                    }
                    .blog-hero [style*="width: 88px"] svg {
                        width: 32px !important;
                        height: 32px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default BlogHero;
