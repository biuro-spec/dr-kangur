import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFoundPage = () => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar scrolled={true} />
            <main style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '160px 32px 80px',
                textAlign: 'center',
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <div style={{
                        fontSize: '8rem',
                        fontFamily: 'Outfit, sans-serif',
                        fontWeight: 800,
                        background: 'linear-gradient(135deg, #CFA714, #598BBC)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        lineHeight: 1,
                        marginBottom: '16px',
                    }}>
                        404
                    </div>
                    <h1 style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: '2rem',
                        color: '#2C3034',
                        marginBottom: '16px',
                    }}>
                        Strona nie znaleziona
                    </h1>
                    <p style={{
                        color: '#444A56',
                        fontSize: '1.1rem',
                        marginBottom: '40px',
                        maxWidth: '500px',
                        margin: '0 auto 40px',
                        lineHeight: 1.7,
                    }}>
                        Przepraszamy, strona której szukasz nie istnieje lub została przeniesiona.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link
                            to="/"
                            className="btn-premium"
                            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                        >
                            <Home size={18} />
                            Strona główna
                        </Link>
                        <Link
                            to="/blog"
                            style={{
                                borderRadius: '50px',
                                fontWeight: 700,
                                fontSize: '1rem',
                                textDecoration: 'none',
                                border: '2px solid #2C3034',
                                color: '#2C3034',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '14px 32px',
                                transition: 'all 0.3s',
                            }}
                        >
                            <ArrowLeft size={18} />
                            Blog
                        </Link>
                    </div>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
};

export default NotFoundPage;
