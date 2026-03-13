import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import DOMPurify from 'dompurify';
import { serviceIllustrations } from '../data/serviceIllustrations';

const ModalContent = ({ service, onClose, contentRef }) => {
    const Icon = service.icon;
    const illustration = serviceIllustrations[service.id];

    const renderBlock = (block, i) => {
        switch (block.type) {
            case 'heading':
                return (
                    <h3
                        key={i}
                        style={{
                            fontFamily: 'Outfit',
                            fontSize: '1.25rem',
                            fontWeight: 700,
                            color: '#2C3034',
                            marginTop: i > 0 ? '28px' : '0',
                            marginBottom: '12px',
                            paddingBottom: '8px',
                            borderBottom: '2px solid rgba(207, 167, 20, 0.2)',
                        }}
                    >
                        {block.text}
                    </h3>
                );
            case 'paragraph':
                return (
                    <p
                        key={i}
                        style={{
                            color: '#444A56',
                            lineHeight: 1.75,
                            fontSize: '0.95rem',
                            marginBottom: '16px',
                        }}
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(block.text, { ALLOWED_TAGS: ['strong', 'em', 'br'], ALLOWED_ATTR: [] }) }}
                    />
                );
            case 'list':
                return (
                    <ul
                        key={i}
                        style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: '0 0 16px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                        }}
                    >
                        {block.items.map((item, j) => (
                            <li
                                key={j}
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '10px',
                                    color: '#444A56',
                                    fontSize: '0.93rem',
                                    lineHeight: 1.6,
                                }}
                            >
                                <CheckCircle
                                    size={16}
                                    style={{
                                        flexShrink: 0,
                                        marginTop: '4px',
                                        color: '#CFA714',
                                    }}
                                />
                                {item}
                            </li>
                        ))}
                    </ul>
                );
            case 'callout':
                return (
                    <div
                        key={i}
                        style={{
                            background: 'linear-gradient(135deg, rgba(207,167,20,0.08) 0%, rgba(229,193,75,0.12) 100%)',
                            borderLeft: '4px solid #CFA714',
                            borderRadius: '0 16px 16px 0',
                            padding: '20px 24px',
                            marginTop: '24px',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '12px',
                        }}
                    >
                        <Phone
                            size={18}
                            style={{ flexShrink: 0, marginTop: '2px', color: '#CFA714' }}
                        />
                        <p
                            style={{
                                color: '#2C3034',
                                fontWeight: 500,
                                fontSize: '0.93rem',
                                lineHeight: 1.6,
                                margin: 0,
                            }}
                        >
                            {block.text}
                        </p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <motion.div
            key="service-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            data-lenis-prevent
            onWheel={(e) => e.stopPropagation()}
            style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(8px)',
                zIndex: 10000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px',
                overflowY: 'auto',
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                style={{
                    background: 'white',
                    borderRadius: '28px',
                    width: '100%',
                    maxWidth: '640px',
                    maxHeight: '85vh',
                    overflow: 'hidden',
                    boxShadow: '0 40px 80px rgba(0,0,0,0.25)',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {/* Header with gradient + illustration */}
                <div
                    style={{
                        background: service.gradient,
                        padding: '32px 36px 24px',
                        position: 'relative',
                        overflow: 'hidden',
                        flexShrink: 0,
                    }}
                >
                    {/* SVG illustration in background */}
                    {illustration && (
                        <div
                            style={{
                                position: 'absolute',
                                right: '-10px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                opacity: 0.12,
                                width: '220px',
                                height: '220px',
                                pointerEvents: 'none',
                            }}
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(illustration, { USE_PROFILES: { svg: true }, ADD_TAGS: ['use'], ALLOWED_ATTR: ['viewBox', 'fill', 'stroke', 'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'd', 'cx', 'cy', 'r', 'rx', 'ry', 'x', 'y', 'width', 'height', 'xmlns', 'opacity', 'transform'] }) }}
                        />
                    )}

                    {/* Decorative circles */}
                    <div
                        style={{
                            position: 'absolute',
                            width: '200px',
                            height: '200px',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.08)',
                            top: '-80px',
                            right: '-40px',
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.05)',
                            bottom: '-40px',
                            left: '20%',
                        }}
                    />

                    {/* Close button */}
                    <button
                        onClick={onClose}
                        aria-label="Zamknij"
                        style={{
                            position: 'absolute',
                            top: '16px',
                            right: '16px',
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.2)',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            transition: 'background 0.2s',
                            zIndex: 2,
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.background = 'rgba(255,255,255,0.35)')
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')
                        }
                    >
                        <X size={18} />
                    </button>

                    {/* Icon + Title */}
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div
                            style={{
                                width: '52px',
                                height: '52px',
                                borderRadius: '16px',
                                background: 'rgba(255,255,255,0.2)',
                                backdropFilter: 'blur(10px)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '16px',
                            }}
                        >
                            <Icon size={26} color="white" />
                        </div>
                        <h2
                            style={{
                                fontFamily: 'Outfit',
                                fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
                                fontWeight: 800,
                                color: 'white',
                                lineHeight: 1.2,
                                marginBottom: '6px',
                            }}
                        >
                            {service.title}
                        </h2>
                        <p
                            style={{
                                color: 'rgba(255,255,255,0.75)',
                                fontSize: '0.9rem',
                            }}
                        >
                            {service.subtitle}
                        </p>
                    </div>
                </div>

                {/* Content - scrollable */}
                <div
                    ref={contentRef}
                    data-lenis-prevent
                    onWheel={(e) => e.stopPropagation()}
                    style={{
                        padding: '32px 36px 36px',
                        overflowY: 'auto',
                        flex: 1,
                        WebkitOverflowScrolling: 'touch',
                    }}
                >
                    {service.content.map((block, i) => renderBlock(block, i))}

                    {/* Location badge */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginTop: '28px',
                            padding: '14px 18px',
                            background: '#f8f9fa',
                            borderRadius: '14px',
                            fontSize: '0.85rem',
                            color: '#3d6f99',
                            fontWeight: 500,
                        }}
                    >
                        <MapPin size={16} />
                        ul. Bolesława Chrobrego 16, 48-100 Głubczyce
                    </div>

                    {/* CTA button */}
                    <a
                        href="tel:+48784565994"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            width: '100%',
                            marginTop: '20px',
                            padding: '16px 32px',
                            background: 'linear-gradient(135deg, #CFA714 0%, #E5C14B 100%)',
                            color: 'white',
                            borderRadius: '100px',
                            border: 'none',
                            fontSize: '1rem',
                            fontWeight: 700,
                            textDecoration: 'none',
                            cursor: 'pointer',
                            boxShadow: '0 8px 25px rgba(207, 167, 20, 0.3)',
                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 12px 35px rgba(207, 167, 20, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(207, 167, 20, 0.3)';
                        }}
                    >
                        <Phone size={18} />
                        Umów wizytę – 784 565 994
                        <ArrowRight size={16} />
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
};

const ServiceModal = ({ service, isOpen, onClose }) => {
    const contentRef = useRef(null);
    const [displayedService, setDisplayedService] = useState(null);

    useEffect(() => {
        if (service) {
            setDisplayedService(service);
        }
    }, [service]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
            return () => window.removeEventListener('keydown', handleEsc);
        }
    }, [isOpen, onClose]);

    const current = service || displayedService;

    return (
        <AnimatePresence>
            {isOpen && current && (
                <ModalContent
                    service={current}
                    onClose={onClose}
                    contentRef={contentRef}
                />
            )}
        </AnimatePresence>
    );
};

export default ServiceModal;
