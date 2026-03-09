import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone } from 'lucide-react';

const FloatingButtons = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Powrót na górę"
                className="scroll-top-btn"
                style={{
                    position: 'fixed',
                    bottom: '32px',
                    right: '32px',
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #CFA714 0%, #E5C14B 100%)',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 30px rgba(207, 167, 20, 0.4)',
                    opacity: showScrollTop ? 1 : 0,
                    transform: showScrollTop ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
                    pointerEvents: showScrollTop ? 'auto' : 'none',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    zIndex: 900,
                }}
            >
                <ArrowUp size={22} />
            </button>

            <a
                href="tel:+48784565994"
                aria-label="Zadzwoń"
                style={{
                    position: 'fixed',
                    bottom: '96px',
                    right: '32px',
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #CFA714 0%, #E5C14B 100%)',
                    color: 'white',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 30px rgba(207, 167, 20, 0.4)',
                    zIndex: 900,
                    textDecoration: 'none',
                    animation: 'phonePulse 2s ease-in-out infinite',
                }}
            >
                <Phone size={24} />
            </a>

            <style>{`
                @keyframes phonePulse {
                    0%, 100% { box-shadow: 0 8px 30px rgba(207, 167, 20, 0.4); }
                    50% { box-shadow: 0 8px 40px rgba(207, 167, 20, 0.6), 0 0 0 12px rgba(207, 167, 20, 0.1); }
                }
                .scroll-top-btn:hover {
                    transform: translateY(-4px) scale(1.1) !important;
                    box-shadow: 0 12px 40px rgba(207, 167, 20, 0.5) !important;
                }
                @media (min-width: 1024px) {
                    a[aria-label="Zadzwoń"] {
                        display: none !important;
                    }
                }
            `}</style>
        </>
    );
};

export default FloatingButtons;
