import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { formatDate } from '../../utils/seo';

const BlogCard = ({ article, index }) => {
    const IconComponent = LucideIcons[article.icon] || LucideIcons.FileText;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link
                to={`/blog/${article.slug}`}
                style={{ textDecoration: 'none', display: 'block' }}
            >
                <div
                    className="card-premium"
                    style={{
                        padding: 0,
                        overflow: 'hidden',
                        cursor: 'pointer',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {/* Gradient Hero */}
                    <div style={{
                        background: article.gradient,
                        height: '200px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                    }}>
                        {/* Decorative circles */}
                        <div style={{
                            position: 'absolute',
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.1)',
                            top: '-30px',
                            right: '-20px',
                        }} />
                        <div style={{
                            position: 'absolute',
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.08)',
                            bottom: '-20px',
                            left: '20px',
                        }} />
                        <div style={{
                            width: '72px',
                            height: '72px',
                            borderRadius: '20px',
                            background: 'rgba(255,255,255,0.2)',
                            backdropFilter: 'blur(10px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <IconComponent size={36} color="white" />
                        </div>
                    </div>

                    {/* Content */}
                    <div style={{ padding: '28px 28px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                        {/* Category + Read time */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                            <span style={{
                                background: 'rgba(89, 139, 188, 0.1)',
                                color: '#598BBC',
                                padding: '4px 12px',
                                borderRadius: '100px',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                            }}>
                                {article.category}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#999', fontSize: '0.8rem' }}>
                                <Clock size={14} />
                                {article.readTime} min
                            </span>
                        </div>

                        {/* Title */}
                        <h3 style={{
                            fontFamily: 'Outfit',
                            fontSize: '1.2rem',
                            fontWeight: 700,
                            color: '#2C3034',
                            marginBottom: '10px',
                            lineHeight: 1.3,
                        }}>
                            {article.title}
                        </h3>

                        {/* Excerpt */}
                        <p style={{
                            color: '#444A56',
                            fontSize: '0.9rem',
                            lineHeight: 1.6,
                            flex: 1,
                            marginBottom: '16px',
                        }}>
                            {article.excerpt}
                        </p>

                        {/* Footer */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f0f0f0', paddingTop: '16px' }}>
                            <span style={{ color: '#999', fontSize: '0.8rem' }}>
                                {formatDate(article.publishDate)}
                            </span>
                            <span style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                                color: '#CFA714',
                                fontWeight: 600,
                                fontSize: '0.85rem',
                            }}>
                                Czytaj <ArrowRight size={16} />
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default BlogCard;
