import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, BookOpen, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import BlogCard from '../components/blog/BlogCard';
import { blogArticles, blogCategories } from '../data/blogArticles';
import { resetMetaTags } from '../utils/seo';

const BlogListPage = () => {
    const [scrolled, setScrolled] = useState(false);
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        resetMetaTags();
        document.title = 'Blog o\u00A0Rehabilitacji | DR KANGUR';

        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const filtered = blogArticles.filter((a) => {
        const matchesSearch = !search ||
            a.title.toLowerCase().includes(search.toLowerCase()) ||
            a.excerpt.toLowerCase().includes(search.toLowerCase()) ||
            a.keywords.some(k => k.toLowerCase().includes(search.toLowerCase()));
        const matchesCategory = !activeCategory || a.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div style={{ minHeight: '100vh' }}>
            <Navbar scrolled={scrolled} />

            {/* Hero */}
            <section className="blog-list-hero" style={{
                background: 'linear-gradient(135deg, #2D3953 0%, #598BBC 100%)',
                padding: '160px 0 80px',
                position: 'relative',
                overflow: 'hidden',
            }}>
                {/* Decorative elements */}
                <div style={{
                    position: 'absolute',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: 'rgba(207, 167, 20, 0.06)',
                    top: '-200px',
                    right: '-100px',
                }} />
                <div style={{
                    position: 'absolute',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.03)',
                    bottom: '-100px',
                    left: '-50px',
                }} />

                <div className="container" style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}
                    >
                        <div style={{
                            width: '72px',
                            height: '72px',
                            borderRadius: '20px',
                            background: 'rgba(255,255,255,0.15)',
                            backdropFilter: 'blur(10px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 24px',
                        }}>
                            <BookOpen size={36} color="white" />
                        </div>

                        <h1 style={{
                            fontFamily: 'Outfit',
                            fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
                            fontWeight: 800,
                            color: 'white',
                            marginBottom: '16px',
                            lineHeight: 1.1,
                        }}>
                            Blog o{'\u00A0'}<span style={{ color: '#E5C14B' }}>Rehabilitacji</span>
                        </h1>
                        <p style={{
                            color: 'rgba(255,255,255,0.8)',
                            fontSize: '1.1rem',
                            lineHeight: 1.6,
                            marginBottom: '40px',
                        }}>
                            Wiedza ekspercka o{'\u00A0'}fizjoterapii, rehabilitacji i{'\u00A0'}zdrowiu. Poradniki, wskazówki i{'\u00A0'}nowoczesne metody leczenia.
                        </p>

                        {/* Search */}
                        <div style={{
                            position: 'relative',
                            maxWidth: '500px',
                            margin: '0 auto',
                        }}>
                            <Search size={20} style={{
                                position: 'absolute',
                                left: '20px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: '#999',
                            }} />
                            <input
                                type="text"
                                placeholder="Szukaj artykułów..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '16px 48px 16px 52px',
                                    borderRadius: '100px',
                                    border: 'none',
                                    fontSize: '1rem',
                                    background: 'white',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                                    outline: 'none',
                                }}
                            />
                            {search && (
                                <button
                                    onClick={() => setSearch('')}
                                    style={{
                                        position: 'absolute',
                                        right: '16px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        color: '#999',
                                        display: 'flex',
                                    }}
                                >
                                    <X size={18} />
                                </button>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Category filters */}
            <section className="blog-list-filters" style={{ padding: '40px 0 0' }}>
                <div className="container" style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 32px' }}>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '10px',
                        justifyContent: 'center',
                    }}>
                        <button
                            onClick={() => setActiveCategory(null)}
                            style={{
                                padding: '10px 22px',
                                borderRadius: '100px',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                transition: 'all 0.3s',
                                background: !activeCategory ? 'linear-gradient(135deg, #CFA714, #E5C14B)' : '#f0f0f0',
                                color: !activeCategory ? 'white' : '#444A56',
                                boxShadow: !activeCategory ? '0 4px 15px rgba(207, 167, 20, 0.3)' : 'none',
                            }}
                        >
                            Wszystkie
                        </button>
                        {blogCategories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                                style={{
                                    padding: '10px 22px',
                                    borderRadius: '100px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                    transition: 'all 0.3s',
                                    background: activeCategory === cat ? 'linear-gradient(135deg, #CFA714, #E5C14B)' : '#f0f0f0',
                                    color: activeCategory === cat ? 'white' : '#444A56',
                                    boxShadow: activeCategory === cat ? '0 4px 15px rgba(207, 167, 20, 0.3)' : 'none',
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="blog-list-articles" style={{ padding: '48px 0 96px' }}>
                <div className="container" style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 32px' }}>
                    {filtered.length > 0 ? (
                        <div className="blog-list-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '32px',
                        }}>
                            {filtered.map((article, i) => (
                                <BlogCard key={article.id} article={article} index={i} />
                            ))}
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '80px 0' }}>
                            <p style={{ color: '#999', fontSize: '1.1rem' }}>
                                Nie znaleziono artykułów dla "{search || activeCategory}"
                            </p>
                            <button
                                onClick={() => { setSearch(''); setActiveCategory(null); }}
                                style={{
                                    marginTop: '16px',
                                    padding: '12px 28px',
                                    borderRadius: '100px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    background: '#CFA714',
                                    color: 'white',
                                    fontWeight: 600,
                                }}
                            >
                                Pokaż wszystkie
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
            <FloatingButtons />

            {/* Responsive styles */}
            <style>{`
                @media (max-width: 1024px) {
                    .blog-list-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 768px) {
                    .blog-list-grid {
                        grid-template-columns: 1fr !important;
                        gap: 20px !important;
                    }
                    .blog-list-hero {
                        padding: 120px 0 48px !important;
                    }
                    .blog-list-hero .container {
                        padding: 0 16px !important;
                    }
                    .blog-list-filters .container {
                        padding: 0 16px !important;
                    }
                    .blog-list-filters .container > div > button {
                        padding: 8px 16px !important;
                        font-size: 0.8rem !important;
                    }
                    .blog-list-articles {
                        padding: 32px 0 64px !important;
                    }
                    .blog-list-articles .container {
                        padding: 0 16px !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default BlogListPage;
