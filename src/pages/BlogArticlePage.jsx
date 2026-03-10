import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import BlogHero from '../components/blog/BlogHero';
import BlogContent from '../components/blog/BlogContent';
import BlogSidebar from '../components/blog/BlogSidebar';
import RelatedArticles from '../components/blog/RelatedArticles';
import { blogArticles } from '../data/blogArticles';
import { updateMetaTags, generateArticleSchema, injectSchema, removeSchema, resetMetaTags } from '../utils/seo';

const BlogArticlePage = () => {
    const { slug } = useParams();
    const [scrolled, setScrolled] = useState(false);

    const article = blogArticles.find((a) => a.slug === slug);

    const relatedArticles = article
        ? blogArticles.filter((a) => article.relatedArticles.includes(a.slug))
        : [];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (article) {
            updateMetaTags({
                title: `${article.title} | DR KANGUR Blog`,
                description: article.metaDescription,
                keywords: article.keywords.join(', '),
                slug: article.slug,
            });
            injectSchema(generateArticleSchema(article));
        }
        return () => {
            resetMetaTags();
            removeSchema();
        };
    }, [article]);

    if (!article) {
        return (
            <div style={{ minHeight: '100vh' }}>
                <Navbar scrolled={true} />
                <div style={{ padding: '200px 32px 100px', textAlign: 'center' }}>
                    <h1 style={{ fontFamily: 'Outfit', fontSize: '2rem', color: '#2C3034', marginBottom: '16px' }}>
                        Artykuł nie znaleziony
                    </h1>
                    <p style={{ color: '#444A56', marginBottom: '32px' }}>
                        Przepraszamy, szukany artykuł nie istnieje.
                    </p>
                    <Link
                        to="/blog"
                        className="btn-premium"
                        style={{ textDecoration: 'none' }}
                    >
                        Wróć do bloga
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div style={{ minHeight: '100vh' }}>
            <Navbar scrolled={scrolled} />

            <BlogHero article={article} />

            {/* Breadcrumbs */}
            <div className="blog-breadcrumbs" style={{ background: '#f8f9fa', padding: '16px 0', borderBottom: '1px solid #eee' }}>
                <div className="container" style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 32px' }}>
                    <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', flexWrap: 'wrap' }}>
                        <Link to="/" style={{ color: '#598BBC', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <Home size={14} />
                            Strona główna
                        </Link>
                        <ChevronRight size={14} color="#999" />
                        <Link to="/blog" style={{ color: '#598BBC', textDecoration: 'none' }}>
                            Blog
                        </Link>
                        <ChevronRight size={14} color="#999" />
                        <span style={{ color: '#999' }}>{article.title}</span>
                    </nav>
                </div>
            </div>

            {/* Content + Sidebar */}
            <section className="blog-article-content" style={{ padding: '64px 0' }}>
                <div className="container" style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 32px' }}>
                    <motion.div
                        className="blog-article-grid"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 340px',
                            gap: '48px',
                            alignItems: 'start',
                        }}
                    >
                        {/* Main Content */}
                        <article className="blog-article-main" style={{
                            background: 'white',
                            borderRadius: '32px',
                            padding: '48px',
                            boxShadow: '0 10px 30px rgba(44, 48, 52, 0.06)',
                            border: '1px solid rgba(0,0,0,0.03)',
                        }}>
                            <BlogContent content={article.content} />
                        </article>

                        {/* Sidebar */}
                        <BlogSidebar content={article.content} />
                    </motion.div>
                </div>
            </section>

            {/* Related Articles */}
            <RelatedArticles articles={relatedArticles} />

            <Footer />
            <FloatingButtons />

            {/* Responsive styles */}
            <style>{`
                @media (max-width: 1024px) {
                    .blog-article-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
                @media (max-width: 768px) {
                    .blog-article-content {
                        padding: 32px 0 !important;
                    }
                    .blog-article-content .container {
                        padding: 0 12px !important;
                    }
                    .blog-article-grid {
                        grid-template-columns: 1fr !important;
                        gap: 24px !important;
                    }
                    .blog-article-main {
                        padding: 24px 18px !important;
                        border-radius: 20px !important;
                    }
                    .blog-article-main h2 {
                        font-size: 1.3rem !important;
                    }
                    .blog-article-main p {
                        font-size: 0.95rem !important;
                    }
                    .blog-breadcrumbs .container {
                        padding: 0 16px !important;
                    }
                    .blog-breadcrumbs nav {
                        font-size: 0.75rem !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default BlogArticlePage;
