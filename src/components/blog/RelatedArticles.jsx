import React from 'react';
import { motion } from 'framer-motion';
import BlogCard from './BlogCard';

const RelatedArticles = ({ articles }) => {
    if (!articles || articles.length === 0) return null;

    return (
        <section className="related-section" style={{ padding: '80px 0', background: '#f8f9fa' }}>
            <div className="container" style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 32px' }}>
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <span style={{
                        color: '#3d6f99',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        marginBottom: '12px',
                        display: 'block',
                    }}>
                        Czytaj dalej
                    </span>
                    <h2 style={{
                        fontFamily: 'Outfit',
                        fontSize: '2rem',
                        fontWeight: 800,
                        color: '#2C3034',
                    }}>
                        Powiązane <span style={{ color: '#996F00' }}>artykuły</span>
                    </h2>
                </div>

                <div className="related-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '32px',
                    maxWidth: '1100px',
                    margin: '0 auto',
                }}>
                    {articles.map((article, i) => (
                        <BlogCard key={article.id} article={article} index={i} />
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .related-section {
                        padding: 48px 0 !important;
                    }
                    .related-section .container {
                        padding: 0 16px !important;
                    }
                    .related-grid {
                        grid-template-columns: 1fr !important;
                        gap: 20px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default RelatedArticles;
