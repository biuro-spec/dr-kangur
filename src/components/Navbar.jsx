import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ scrolled }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Block body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const sectionLinks = [
        { name: 'O nas', href: '#about' },
        { name: 'Usługi', href: '#services' },
        { name: 'Zespół', href: '#team' },
        { name: 'Wypożyczalnia', href: '#rental' },
        { name: 'Galeria', href: '#gallery' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Kontakt', href: '#contact' },
    ];

    const handleSectionClick = (e, href) => {
        if (isHome) {
            // On homepage — normal anchor scroll
            return;
        }
        // On blog pages — navigate to homepage with hash
        e.preventDefault();
        navigate('/' + href);
    };

    const handleLogoClick = (e) => {
        if (isHome) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const isBlogActive = location.pathname.startsWith('/blog');

    return (
        <>
            <nav
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    height: '70px',
                    display: 'flex',
                    alignItems: 'center',
                    background: (scrolled || windowWidth < 1024) ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
                    backdropFilter: (scrolled || windowWidth < 1024) ? 'blur(20px) saturate(180%)' : 'none',
                    WebkitBackdropFilter: (scrolled || windowWidth < 1024) ? 'blur(20px) saturate(180%)' : 'none',
                    borderBottom: (scrolled || windowWidth < 1024) ? '1px solid rgba(207, 167, 20, 0.1)' : 'none',
                    boxShadow: (scrolled || windowWidth < 1024) ? '0 4px 20px rgba(0,0,0,0.06)' : 'none',
                    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
            >
                <div style={{
                    maxWidth: '1300px',
                    margin: '0 auto',
                    padding: '0 32px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>

                    {/* Logo — crossfade between full logo (top) and icon-only (scrolled) */}
                    <Link to="/" onClick={handleLogoClick} style={{
                        textDecoration: 'none',
                        position: 'relative',
                        zIndex: 1001,
                        alignSelf: 'flex-start',
                        marginTop: scrolled ? '6px' : (windowWidth < 1024 ? '12px' : '104px'),
                        width: scrolled ? '52px' : (windowWidth < 1024 ? '52px' : '132px'),
                        height: scrolled ? '52px' : (windowWidth < 1024 ? '52px' : '160px'),
                        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                        flexShrink: 0,
                    }}>
                        {/* Full logo with text — visible at top (desktop only) */}
                        <img
                            src="/dr_kangur_logo.png"
                            alt="Dr Kangur"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                objectPosition: 'top left',
                                opacity: (scrolled || windowWidth < 1024) ? 0 : 1,
                                transform: (scrolled || windowWidth < 1024) ? 'scale(0.4) rotate(-8deg)' : 'scale(1) rotate(0deg)',
                                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                                filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))',
                            }}
                        />
                        {/* Icon only — visible when scrolled or on mobile */}
                        <img
                            src="/dr_kangur_icon.png"
                            alt="Dr Kangur"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                objectPosition: 'top left',
                                opacity: (scrolled || windowWidth < 1024) ? 1 : 0,
                                transform: (scrolled || windowWidth < 1024) ? 'scale(1) rotate(0deg)' : 'scale(2) rotate(8deg)',
                                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                                filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))',
                            }}
                        />
                    </Link>

                    {/* Links (Desktop) */}
                    <div style={{ display: windowWidth >= 1024 ? 'flex' : 'none', alignItems: 'center', gap: '26px' }}>
                        {sectionLinks.map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleSectionClick(e, link.href)}
                                style={{
                                    color: '#2C3034',
                                    fontWeight: 700,
                                    textDecoration: 'none',
                                    fontSize: '0.88rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    transition: 'color 0.3s',
                                    padding: '4px 0',
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#CFA714'}
                                onMouseLeave={(e) => e.target.style.color = '#2C3034'}
                            >
                                {link.name}
                            </a>
                        ))}
                        <Link
                            to="/blog"
                            style={{
                                color: isBlogActive ? '#CFA714' : '#2C3034',
                                fontWeight: 700,
                                textDecoration: 'none',
                                fontSize: '0.88rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                transition: 'color 0.3s',
                                padding: '4px 0',
                            }}
                            onMouseEnter={(e) => e.target.style.color = '#CFA714'}
                            onMouseLeave={(e) => { if (!isBlogActive) e.target.style.color = '#2C3034'; }}
                        >
                            Blog
                        </Link>
                    </div>

                    {/* CTA Button (Desktop) */}
                    <div style={{ display: windowWidth >= 1024 ? 'flex' : 'none', alignItems: 'center' }}>
                        <a href="tel:+48784565994" className="btn-premium" style={{ padding: '11px 26px', fontSize: '0.99rem' }}>
                            <Phone size={15} />
                            <span>Zadzwoń</span>
                        </a>
                    </div>

                    {/* Mobile Hamburger Toggle */}
                    {windowWidth < 1024 && (
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Menu"
                            style={{
                                border: 'none',
                                background: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '6px',
                                padding: '8px',
                                zIndex: 10000,
                            }}
                        >
                            <span style={{
                                width: '28px',
                                height: '2px',
                                background: '#2C3034',
                                borderRadius: '2px',
                                transition: 'all 0.3s',
                                transform: isOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none',
                            }} />
                            <span style={{
                                width: '28px',
                                height: '2px',
                                background: '#2C3034',
                                borderRadius: '2px',
                                transition: 'all 0.3s',
                                opacity: isOpen ? 0 : 1,
                            }} />
                            <span style={{
                                width: '28px',
                                height: '2px',
                                background: '#2C3034',
                                borderRadius: '2px',
                                transition: 'all 0.3s',
                                transform: isOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none',
                            }} />
                        </button>
                    )}
                </div>
            </nav>

            {/* Mobile Menu — OUTSIDE nav, full-screen overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        data-lenis-prevent
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100vh',
                            zIndex: 9998,
                            background: '#ffffff',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0',
                        }}
                    >
                        {/* Logo */}
                        <img src="/dr_kangur_icon.png" alt="Logo" style={{ width: '56px', marginBottom: '36px' }} />

                        {/* Links */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '22px' }}>
                            {sectionLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={isHome ? link.href : '/' + link.href}
                                    onClick={(e) => {
                                        setIsOpen(false);
                                        if (!isHome) {
                                            e.preventDefault();
                                            navigate('/' + link.href);
                                        }
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.04, duration: 0.3 }}
                                    style={{
                                        fontSize: '1.25rem',
                                        fontFamily: 'Outfit',
                                        fontWeight: 700,
                                        color: '#2C3034',
                                        textDecoration: 'none',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.06em',
                                    }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: sectionLinks.length * 0.04, duration: 0.3 }}
                            >
                                <Link
                                    to="/blog"
                                    onClick={() => setIsOpen(false)}
                                    style={{
                                        fontSize: '1.25rem',
                                        fontFamily: 'Outfit',
                                        fontWeight: 700,
                                        color: isBlogActive ? '#CFA714' : '#2C3034',
                                        textDecoration: 'none',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.06em',
                                    }}
                                >
                                    Blog
                                </Link>
                            </motion.div>

                            {/* CTA */}
                            <motion.a
                                href="tel:+48784565994"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: (sectionLinks.length + 1) * 0.04, duration: 0.3 }}
                                style={{
                                    marginTop: '28px',
                                    background: 'linear-gradient(135deg, #CFA714, #E2C044)',
                                    color: 'white',
                                    padding: '16px 48px',
                                    borderRadius: '12px',
                                    textAlign: 'center',
                                    fontWeight: 700,
                                    textDecoration: 'none',
                                    fontSize: '1.05rem',
                                    boxShadow: '0 4px 16px rgba(207, 167, 20, 0.3)',
                                }}
                            >
                                Zadzwoń teraz
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
