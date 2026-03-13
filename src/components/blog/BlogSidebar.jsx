import React from 'react';
import { Phone, Calendar } from 'lucide-react';

const BlogSidebar = ({ content }) => {
    // Extract headings from content for table of contents
    const headings = content
        .map((block, i) => (block.type === 'heading' ? { text: block.text, id: `section-${i}` } : null))
        .filter(Boolean);

    return (
        <aside className="blog-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Table of Contents */}
            {headings.length > 0 && (
                <div style={{
                    background: 'white',
                    borderRadius: '24px',
                    padding: '28px',
                    boxShadow: '0 10px 30px rgba(44, 48, 52, 0.06)',
                    border: '1px solid rgba(0,0,0,0.03)',
                    position: 'sticky',
                    top: '90px',
                }}>
                    <h3 style={{
                        fontFamily: 'Outfit',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: '#2C3034',
                        marginBottom: '20px',
                        paddingBottom: '12px',
                        borderBottom: '2px solid rgba(207, 167, 20, 0.15)',
                    }}>
                        Spis treści
                    </h3>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {headings.map((h, i) => (
                            <a
                                key={i}
                                href={`#${h.id}`}
                                style={{
                                    color: '#444A56',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    lineHeight: 1.5,
                                    padding: '6px 12px',
                                    borderRadius: '8px',
                                    transition: 'all 0.2s',
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.background = 'rgba(207, 167, 20, 0.08)';
                                    e.target.style.color = '#996F00';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = 'transparent';
                                    e.target.style.color = '#444A56';
                                }}
                            >
                                {h.text}
                            </a>
                        ))}
                    </nav>
                </div>
            )}

            {/* CTA Card */}
            <div style={{
                background: 'linear-gradient(135deg, #CFA714 0%, #E5C14B 100%)',
                borderRadius: '24px',
                padding: '32px 28px',
                color: 'white',
                position: headings.length > 0 ? 'static' : 'sticky',
                top: '90px',
            }}>
                <Calendar size={32} style={{ marginBottom: '16px', opacity: 0.9 }} />
                <h3 style={{
                    fontFamily: 'Outfit',
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    marginBottom: '12px',
                }}>
                    Umów wizytę
                </h3>
                <p style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    opacity: 0.9,
                    marginBottom: '24px',
                }}>
                    Potrzebujesz profesjonalnej rehabilitacji? Skontaktuj się z nami i umów wizytę.
                </p>
                <a
                    href="tel:+48784565994"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        background: 'white',
                        color: '#996F00',
                        padding: '14px 24px',
                        borderRadius: '100px',
                        fontWeight: 700,
                        fontSize: '1rem',
                        textDecoration: 'none',
                        transition: 'transform 0.3s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                    <Phone size={18} />
                    784 565 994
                </a>
            </div>

            <style>{`
                @media (max-width: 1024px) {
                    .blog-sidebar > div {
                        position: static !important;
                    }
                }
                @media (max-width: 768px) {
                    .blog-sidebar > div {
                        padding: 24px 20px !important;
                        border-radius: 20px !important;
                    }
                }
            `}</style>
        </aside>
    );
};

export default BlogSidebar;
