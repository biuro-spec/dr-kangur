import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, AlertCircle, CheckCircle2, ArrowUpRight, Send, Navigation } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('');

    const validatePhone = (phone) => {
        const cleaned = phone.replace(/[\s\-()]/g, '');
        return /^(\+48)?[0-9]{9}$/.test(cleaned);
    };

    const validateEmail = (email) => {
        if (!email) return true;
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim() || formData.name.trim().length < 2) {
            newErrors.name = 'Podaj imię i\u00A0nazwisko (min. 2\u00A0znaki)';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Podaj numer telefonu';
        } else if (!validatePhone(formData.phone)) {
            newErrors.phone = 'Podaj prawidłowy numer telefonu (9\u00A0cyfr)';
        }
        if (!validateEmail(formData.email)) {
            newErrors.email = 'Podaj prawidłowy adres e-mail';
        }
        if (formData.message && formData.message.length > 1000) {
            newErrors.message = 'Wiadomość może mieć maksymalnie 1000\u00A0znaków';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus('sending');
        // TODO: Zamienić na prawdziwe API (np. EmailJS, formspree, własny backend)
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', phone: '', email: '', message: '' });
            setTimeout(() => setStatus(''), 4000);
        }, 1500);
    };

    const inputStyle = (field) => ({
        width: '100%',
        padding: '14px 18px',
        borderRadius: '14px',
        border: errors[field] ? '2px solid #ef4444' : '1px solid rgba(89, 139, 188, 0.2)',
        background: 'white',
        fontSize: '0.95rem',
        fontFamily: 'Inter, system-ui, sans-serif',
        color: '#2C3034',
        outline: 'none',
        transition: 'all 0.3s ease',
    });

    const contactItems = [
        {
            icon: MapPin,
            title: 'Adres gabinetu',
            content: 'ul. Bolesława Chrobrego 16, 48-100 Głubczyce',
        },
        {
            icon: Phone,
            title: 'Telefon i\u00A0Rejestracja',
            content: '+48 784 565 994',
            href: 'tel:+48784565994',
            highlight: true,
        },
        {
            icon: Mail,
            title: 'E-mail',
            content: 'kontakt@dr-kangur.pl',
            href: 'mailto:kontakt@dr-kangur.pl',
        },
        {
            icon: Clock,
            title: 'Godziny otwarcia',
            content: 'Pn - Pt: 08:00 - 18:00',
        },
    ];

    return (
        <section id="contact" style={{ padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
            {/* Subtle background decoration */}
            <div style={{
                position: 'absolute',
                top: '5%',
                right: '-8%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(89,139,188,0.06) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '-5%',
                width: '350px',
                height: '350px',
                background: 'radial-gradient(circle, rgba(207,167,20,0.05) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 2 }}>
                {/* Section header */}
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <span style={{ color: '#3d6f99', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700, fontSize: '0.75rem', marginBottom: '12px', display: 'block' }}>
                        Skontaktuj się z{'\u00A0'}nami
                    </span>
                    <h2 style={{ color: '#2C3034', fontSize: '3rem', marginBottom: '16px' }}>
                        Zapisz się na{'\u00A0'}<span style={{ color: '#996F00' }}>wizytę</span>
                    </h2>
                    <p style={{ color: '#444A56', maxWidth: '42rem', margin: '0 auto' }}>
                        Skontaktuj się z{'\u00A0'}nami telefonicznie lub wypełnij formularz – oddzwonimy najszybciej jak to{'\u00A0'}możliwe.
                    </p>
                </div>

                <div className="contact-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '64px',
                    alignItems: 'start',
                }}>
                    {/* Left column - Contact info */}
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                            {contactItems.map((item) => (
                                <div
                                    key={item.title}
                                    className="contact-info-card"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '16px',
                                        padding: '20px 24px',
                                        borderRadius: '20px',
                                        background: 'white',
                                        border: '1px solid rgba(0, 0, 0, 0.04)',
                                        boxShadow: '0 4px 20px rgba(44, 48, 52, 0.04)',
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    <div style={{
                                        width: '48px',
                                        height: '48px',
                                        minWidth: '48px',
                                        background: item.highlight ? 'linear-gradient(135deg, #CFA714, #E5C14B)' : 'rgba(89, 139, 188, 0.1)',
                                        borderRadius: '14px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: item.highlight ? 'white' : '#598BBC',
                                    }}>
                                        <item.icon size={22} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontSize: '0.8rem', color: '#444A56', fontWeight: 500, marginBottom: '2px' }}>
                                            {item.title}
                                        </div>
                                        {item.href ? (
                                            <a href={item.href} style={{
                                                color: item.highlight ? '#7A5F00' : '#2C3034',
                                                textDecoration: 'none',
                                                fontWeight: 700,
                                                fontSize: item.highlight ? '1.15rem' : '0.95rem',
                                            }}>
                                                {item.content}
                                            </a>
                                        ) : (
                                            <span style={{ color: '#2C3034', fontWeight: 600, fontSize: '0.95rem' }}>
                                                {item.content}
                                            </span>
                                        )}
                                    </div>
                                    {item.href && (
                                        <ArrowUpRight size={18} color="#598BBC" style={{ opacity: 0.4 }} />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Google Map */}
                        <div style={{
                                borderRadius: '24px',
                                overflow: 'hidden',
                                border: '1px solid rgba(0, 0, 0, 0.04)',
                                height: '280px',
                                boxShadow: '0 10px 30px rgba(44, 48, 52, 0.06)',
                            }}
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1251.4!2d17.820373!3d50.203626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471139e4b0d1d1bd%3A0x6c1db83da88fbf84!2sDR+KANGUR+Rehabilitacja!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                                title="Mapa DR KANGUR"
                                sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                                referrerPolicy="no-referrer"
                            ></iframe>
                        </div>

                        {/* Navigate button */}
                        <a
                            href="https://www.google.com/maps/dir/?api=1&destination=DR+KANGUR+Rehabilitacja,+Chrobrego+16,+48-100+Głubczyce"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="navigate-btn"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px',
                                marginTop: '16px',
                                padding: '14px 28px',
                                borderRadius: '16px',
                                background: 'linear-gradient(135deg, #598BBC, #3B6CB5)',
                                color: 'white',
                                fontWeight: 700,
                                fontSize: '0.95rem',
                                textDecoration: 'none',
                                boxShadow: '0 8px 25px rgba(89, 139, 188, 0.25)',
                                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                            }}
                        >
                            <Navigation size={18} />
                            Nawiguj do{'\u00A0'}nas
                        </a>
                    </div>

                    {/* Right column - Form */}
                    <div style={{
                            background: 'linear-gradient(145deg, rgba(89, 139, 188, 0.06) 0%, rgba(59, 108, 181, 0.1) 100%)',
                            padding: '40px',
                            borderRadius: '32px',
                            border: '1px solid rgba(89, 139, 188, 0.1)',
                            boxShadow: '0 20px 50px rgba(89, 139, 188, 0.08)',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '12px',
                                background: 'linear-gradient(135deg, #598BBC, #3B6CB5)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Send size={18} color="white" />
                            </div>
                            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#2C3034' }}>Wyślij wiadomość</h3>
                        </div>

                        <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {/* Name + Phone row */}
                            <div className="contact-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                    <label style={{ fontWeight: 600, color: '#2C3034', fontSize: '0.85rem' }}>Imię i{'\u00A0'}Nazwisko *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Jan Kowalski"
                                        style={inputStyle('name')}
                                        onFocus={(e) => { e.target.style.borderColor = '#598BBC'; e.target.style.boxShadow = '0 0 0 3px rgba(89, 139, 188, 0.1)'; }}
                                        onBlur={(e) => { e.target.style.borderColor = errors.name ? '#ef4444' : 'rgba(89, 139, 188, 0.2)'; e.target.style.boxShadow = 'none'; }}
                                    />
                                    {errors.name && (
                                        <span style={{ color: '#ef4444', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                            <AlertCircle size={12} /> {errors.name}
                                        </span>
                                    )}
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                    <label style={{ fontWeight: 600, color: '#2C3034', fontSize: '0.85rem' }}>Telefon *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+48 000 000 000"
                                        style={inputStyle('phone')}
                                        onFocus={(e) => { e.target.style.borderColor = '#598BBC'; e.target.style.boxShadow = '0 0 0 3px rgba(89, 139, 188, 0.1)'; }}
                                        onBlur={(e) => { e.target.style.borderColor = errors.phone ? '#ef4444' : 'rgba(89, 139, 188, 0.2)'; e.target.style.boxShadow = 'none'; }}
                                    />
                                    {errors.phone && (
                                        <span style={{ color: '#ef4444', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                            <AlertCircle size={12} /> {errors.phone}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                <label style={{ fontWeight: 600, color: '#2C3034', fontSize: '0.85rem' }}>E-mail</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="jan@example.com"
                                    style={inputStyle('email')}
                                    onFocus={(e) => { e.target.style.borderColor = '#598BBC'; e.target.style.boxShadow = '0 0 0 3px rgba(89, 139, 188, 0.1)'; }}
                                    onBlur={(e) => { e.target.style.borderColor = errors.email ? '#ef4444' : 'rgba(89, 139, 188, 0.2)'; e.target.style.boxShadow = 'none'; }}
                                />
                                {errors.email && (
                                    <span style={{ color: '#ef4444', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <AlertCircle size={12} /> {errors.email}
                                    </span>
                                )}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                <label style={{ fontWeight: 600, color: '#2C3034', fontSize: '0.85rem' }}>Wiadomość</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder={"Opisz z\u00A0czym możemy pomóc..."}
                                    rows="4"
                                    style={{ ...inputStyle('message'), resize: 'vertical', minHeight: '110px' }}
                                    onFocus={(e) => { e.target.style.borderColor = '#598BBC'; e.target.style.boxShadow = '0 0 0 3px rgba(89, 139, 188, 0.1)'; }}
                                    onBlur={(e) => { e.target.style.borderColor = errors.message ? '#ef4444' : 'rgba(89, 139, 188, 0.2)'; e.target.style.boxShadow = 'none'; }}
                                ></textarea>
                                {errors.message && (
                                    <span style={{ color: '#ef4444', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <AlertCircle size={12} /> {errors.message}
                                    </span>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="contact-submit-btn"
                                style={{
                                    width: '100%',
                                    padding: '16px',
                                    borderRadius: '14px',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                    background: status === 'success'
                                        ? 'linear-gradient(135deg, #16a34a, #22c55e)'
                                        : 'linear-gradient(135deg, #CFA714 0%, #E5C14B 100%)',
                                    color: 'white',
                                    border: 'none',
                                    cursor: status === 'sending' ? 'wait' : 'pointer',
                                    opacity: status === 'sending' ? 0.7 : 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    boxShadow: status === 'success'
                                        ? '0 8px 25px rgba(22, 163, 74, 0.25)'
                                        : '0 8px 25px rgba(207, 167, 20, 0.25)',
                                    marginTop: '4px',
                                }}
                            >
                                {status === 'sending' && 'Wysyłanie...'}
                                {status === 'success' && <><CheckCircle2 size={18} /> Wysłano pomyślnie!</>}
                                {!status && <><span>Umów wizytę</span> <ArrowUpRight size={18} /></>}
                            </button>

                            <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#9ca3af', lineHeight: 1.4 }}>
                                Oddzwonimy w{'\u00A0'}ciągu 24h w{'\u00A0'}dni robocze.
                            </p>
                        </form>
                    </div>
                </div>
            </div>

            {/* Styles */}
            <style>{`
                @media (hover: hover) {
                    .contact-info-card:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 8px 30px rgba(44, 48, 52, 0.08) !important;
                        border-color: rgba(89, 139, 188, 0.15) !important;
                    }
                    .contact-submit-btn:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 12px 35px rgba(207, 167, 20, 0.35) !important;
                    }
                    .navigate-btn:hover {
                        transform: translateY(-3px);
                        box-shadow: 0 12px 35px rgba(89, 139, 188, 0.35) !important;
                    }
                }
                @media (max-width: 768px) {
                    #contact {
                        padding: 64px 0 !important;
                    }
                    #contact > div {
                        padding: 0 16px !important;
                    }
                    .contact-grid {
                        grid-template-columns: 1fr !important;
                        gap: 32px !important;
                    }
                    .contact-form-row {
                        grid-template-columns: 1fr !important;
                    }
                    #contact h2 {
                        font-size: 2rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Contact;
