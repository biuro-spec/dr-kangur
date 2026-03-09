import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Facebook, Phone, MapPin, Clock, Mail, Code } from 'lucide-react';
import ServiceModal from './ServiceModal';
import { servicesSeoData } from '../data/servicesSeo';

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === '/';
    const [activeService, setActiveService] = useState(null);

    const handleSectionClick = (e, href) => {
        if (isHome) return;
        e.preventDefault();
        navigate('/' + href);
    };

    const navLinks = [
        { name: 'O nas', href: '#about' },
        { name: 'Usługi', href: '#services' },
        { name: 'Zespół', href: '#team' },
        { name: 'Galeria', href: '#gallery' },
        { name: 'Wypożyczalnia', href: '#rental' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Blog', href: '/blog', isRoute: true },
        { name: 'Kontakt', href: '#contact' },
    ];

    return (
        <footer style={{
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Main footer - dark */}
            <div style={{
                background: '#2C3034',
                position: 'relative',
                padding: '80px 0 0',
            }}>
                {/* Decorative blur elements */}
                <div style={{
                    position: 'absolute',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: '#598BBC',
                    filter: 'blur(120px)',
                    opacity: 0.07,
                    top: '-150px',
                    right: '-100px',
                    pointerEvents: 'none',
                }} />
                <div style={{
                    position: 'absolute',
                    width: '350px',
                    height: '350px',
                    borderRadius: '50%',
                    background: '#CFA714',
                    filter: 'blur(120px)',
                    opacity: 0.05,
                    bottom: '80px',
                    left: '-80px',
                    pointerEvents: 'none',
                }} />
                <div style={{
                    position: 'absolute',
                    width: '250px',
                    height: '250px',
                    borderRadius: '50%',
                    background: '#598BBC',
                    filter: 'blur(100px)',
                    opacity: 0.04,
                    top: '50%',
                    left: '55%',
                    pointerEvents: 'none',
                }} />

                {/* CTA Banner */}
                <div style={{
                    maxWidth: '1300px',
                    margin: '0 auto',
                    padding: '0 32px',
                    position: 'relative',
                    zIndex: 2,
                }}>
                    <div style={{
                        background: 'linear-gradient(135deg, #CFA714 0%, #E5C14B 100%)',
                        borderRadius: '24px',
                        padding: '40px 48px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '24px',
                        marginBottom: '64px',
                        boxShadow: '0 20px 50px rgba(207, 167, 20, 0.2)',
                    }}>
                        <div>
                            <h3 style={{
                                fontFamily: 'Outfit',
                                fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
                                fontWeight: 800,
                                color: 'white',
                                marginBottom: '8px',
                            }}>
                                Umów wizytę już dziś
                            </h3>
                            <p style={{
                                color: 'rgba(255,255,255,0.85)',
                                fontSize: '1rem',
                            }}>
                                Skontaktuj się z nami i rozpocznij swoją drogę do zdrowia
                            </p>
                        </div>
                        <a
                            href="tel:+48784565994"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                background: 'white',
                                color: '#CFA714',
                                padding: '16px 36px',
                                borderRadius: '100px',
                                fontWeight: 700,
                                fontSize: '1.05rem',
                                textDecoration: 'none',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                            }}
                        >
                            <Phone size={18} />
                            784 565 994
                        </a>
                    </div>

                    {/* Grid content */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '2fr 1fr 1fr 1fr',
                        gap: '48px',
                        paddingBottom: '64px',
                    }}>
                        {/* Brand column */}
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                                <img
                                    src="/dr_kangur_icon.webp"
                                    alt="Dr Kangur"
                                    style={{
                                        width: '56px',
                                        height: '56px',
                                        objectFit: 'contain',
                                    }}
                                />
                                <span style={{
                                    fontSize: '1.6rem',
                                    fontFamily: 'Outfit',
                                    fontWeight: 800,
                                    color: 'white',
                                    letterSpacing: '-0.02em',
                                }}>
                                    DR KANGUR
                                </span>
                            </div>
                            <p style={{
                                color: 'rgba(255,255,255,0.8)',
                                maxWidth: '320px',
                                lineHeight: 1.7,
                                fontSize: '0.95rem',
                                marginBottom: '24px',
                            }}>
                                Profesjonalna klinika fizjoterapii i rehabilitacji w Głubczycach. NFZ i prywatnie.
                            </p>

                            {/* Contact info */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <a href="tel:+48784565994" style={{
                                    display: 'flex', alignItems: 'center', gap: '10px',
                                    color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '0.9rem',
                                    transition: 'color 0.2s',
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}
                                >
                                    <Phone size={16} /> 784 565 994
                                </a>
                                <a href="mailto:kontakt@drkangur.pl" style={{
                                    display: 'flex', alignItems: 'center', gap: '10px',
                                    color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '0.9rem',
                                    transition: 'color 0.2s',
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}
                                >
                                    <Mail size={16} /> kontakt@drkangur.pl
                                </a>
                                <div style={{
                                    display: 'flex', alignItems: 'flex-start', gap: '10px',
                                    color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem',
                                }}>
                                    <MapPin size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
                                    ul. Bolesława Chrobrego 16, 48-100 Głubczyce
                                </div>
                            </div>

                            {/* Social */}
                            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                                <a
                                    href="https://www.facebook.com/drkangur"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    style={{
                                        width: '42px',
                                        height: '42px',
                                        background: 'rgba(255,255,255,0.15)',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        textDecoration: 'none',
                                        transition: 'all 0.3s',
                                        border: '1px solid rgba(255,255,255,0.15)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'white';
                                        e.currentTarget.style.color = '#CFA714';
                                        e.currentTarget.style.transform = 'translateY(-3px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                                        e.currentTarget.style.color = 'white';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <Facebook size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Navigation column */}
                        <div>
                            <h4 style={{
                                fontFamily: 'Outfit',
                                fontWeight: 700,
                                fontSize: '1.05rem',
                                color: 'white',
                                marginBottom: '24px',
                                paddingBottom: '12px',
                                borderBottom: '2px solid rgba(207, 167, 20, 0.3)',
                            }}>
                                Nawigacja
                            </h4>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {navLinks.map(link => (
                                    <li key={link.name}>
                                        {link.isRoute ? (
                                            <Link
                                                to={link.href}
                                                style={{
                                                    color: 'rgba(255,255,255,0.75)',
                                                    textDecoration: 'none',
                                                    fontSize: '0.9rem',
                                                    transition: 'all 0.2s',
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '4px',
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                                                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
                                            >
                                                {link.name}
                                            </Link>
                                        ) : (
                                            <a
                                                href={link.href}
                                                onClick={(e) => handleSectionClick(e, link.href)}
                                                style={{
                                                    color: 'rgba(255,255,255,0.75)',
                                                    textDecoration: 'none',
                                                    fontSize: '0.9rem',
                                                    transition: 'all 0.2s',
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                                                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
                                            >
                                                {link.name}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Hours column */}
                        <div>
                            <h4 style={{
                                fontFamily: 'Outfit',
                                fontWeight: 700,
                                fontSize: '1.05rem',
                                color: 'white',
                                marginBottom: '24px',
                                paddingBottom: '12px',
                                borderBottom: '2px solid rgba(207, 167, 20, 0.3)',
                            }}>
                                Godziny otwarcia
                            </h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    color: 'rgba(255,255,255,0.85)',
                                    fontSize: '0.9rem',
                                }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <Clock size={14} style={{ opacity: 0.7 }} />
                                        Pn - Pt
                                    </span>
                                    <span style={{
                                        background: 'rgba(207, 167, 20, 0.2)',
                                        padding: '4px 12px',
                                        borderRadius: '100px',
                                        fontSize: '0.8rem',
                                        fontWeight: 600,
                                        color: '#E5C14B',
                                    }}>
                                        08:00 - 18:00
                                    </span>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    color: 'rgba(255,255,255,0.6)',
                                    fontSize: '0.9rem',
                                }}>
                                    <span>Sobota</span>
                                    <span style={{ fontSize: '0.85rem' }}>Zamknięte</span>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    color: 'rgba(255,255,255,0.6)',
                                    fontSize: '0.9rem',
                                }}>
                                    <span>Niedziela</span>
                                    <span style={{ fontSize: '0.85rem' }}>Zamknięte</span>
                                </div>
                            </div>
                        </div>

                        {/* Services column */}
                        <div>
                            <h4 style={{
                                fontFamily: 'Outfit',
                                fontWeight: 700,
                                fontSize: '1.05rem',
                                color: 'white',
                                marginBottom: '24px',
                                paddingBottom: '12px',
                                borderBottom: '2px solid rgba(207, 167, 20, 0.3)',
                            }}>
                                Usługi
                            </h4>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {servicesSeoData.map(s => (
                                    <li key={s.id}>
                                        <button
                                            onClick={() => setActiveService(s)}
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                padding: 0,
                                                color: 'rgba(255,255,255,0.75)',
                                                fontSize: '0.9rem',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s',
                                                textAlign: 'left',
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.color = 'white';
                                                e.currentTarget.style.paddingLeft = '4px';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.color = 'rgba(255,255,255,0.75)';
                                                e.currentTarget.style.paddingLeft = '0';
                                            }}
                                        >
                                            {s.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="footer-bottom-bar" style={{
                    background: 'rgba(0,0,0,0.25)',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    padding: '20px 0',
                }}>
                    <div style={{
                        maxWidth: '1300px',
                        margin: '0 auto',
                        padding: '0 100px 0 32px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '8px',
                    }}>
                        <p style={{
                            color: 'rgba(255,255,255,0.6)',
                            fontSize: '0.8rem',
                            margin: 0,
                        }}>
                            &copy; {new Date().getFullYear()} DR KANGUR Rehabilitacja i Fizjoterapia
                        </p>

                        <div className="footer-credit" style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            gap: '6px',
                            fontSize: '0.8rem',
                            color: 'rgba(255,255,255,0.45)',
                            textAlign: 'center',
                        }}>
                            <Code size={14} style={{ opacity: 0.6 }} />
                            <span>Napisane kodem z najnowszymi technologiami przez</span>
                            <a
                                href="https://webstudio47.pl"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    textDecoration: 'none',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    transition: 'all 0.3s',
                                }}
                            >
                                <span className="webstudio-brand" style={{
                                    fontFamily: "'Space Grotesk', 'Outfit', sans-serif",
                                    fontWeight: 700,
                                    color: 'rgba(255,255,255,0.85)',
                                    letterSpacing: '-0.5px',
                                    fontSize: '0.85rem',
                                }}>
                                    &lt;WebStudio<span style={{ color: '#4A90D9' }}>47</span>&gt;
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hover styles */}
            <style>{`
                .webstudio-brand {
                    transition: all 0.3s ease;
                }
                a:hover .webstudio-brand {
                    text-shadow: 0 0 15px rgba(74, 144, 217, 0.5);
                }
                @media (max-width: 1024px) {
                    footer [style*="grid-template-columns: 2fr 1fr 1fr 1fr"] {
                        grid-template-columns: 1fr 1fr !important;
                    }
                    footer [style*="grid-template-columns: 2fr 1fr 1fr 1fr"] > div:first-child {
                        grid-column: span 2 !important;
                    }
                }
                @media (max-width: 640px) {
                    footer [style*="grid-template-columns: 2fr 1fr 1fr 1fr"] {
                        grid-template-columns: 1fr !important;
                    }
                    footer [style*="grid-template-columns: 2fr 1fr 1fr 1fr"] > div:first-child {
                        grid-column: span 1 !important;
                    }
                    footer [style*="padding: 40px 48px"] {
                        padding: 28px 24px !important;
                        flex-direction: column !important;
                        text-align: center !important;
                    }
                    .footer-bottom-bar {
                        padding: 20px 16px 120px !important;
                    }
                    .footer-bottom-bar > div {
                        padding: 0 16px !important;
                    }
                    .footer-credit {
                        flex-direction: column !important;
                        gap: 4px !important;
                    }
                }
            `}</style>

            <ServiceModal
                service={activeService}
                isOpen={!!activeService}
                onClose={() => setActiveService(null)}
            />
        </footer>
    );
};

export default Footer;
