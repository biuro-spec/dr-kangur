import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Anna K.',
        text: 'Po operacji kolana szukałam profesjonalnej rehabilitacji. W DR KANGUR znalazłam nie tylko nowoczesny sprzęt, ale przede wszystkim wspaniały zespół, który pomógł mi wrócić do pełnej sprawności. Polecam z całego serca!',
        rating: 5,
        treatment: 'Rehabilitacja pooperacyjna',
    },
    {
        name: 'Marek W.',
        text: 'Fala uderzeniowa zrobiła cuda z moją ostrogą piętową. Po kilku zabiegach ból praktycznie ustąpił. Profesjonalne podejście i miła atmosfera – to wyróżnia ten gabinet.',
        rating: 5,
        treatment: 'Fala uderzeniowa',
    },
    {
        name: 'Katarzyna L.',
        text: 'Korzystam z masażu gorącymi kamieniami regularnie. To niesamowite, jak jeden zabieg potrafi rozluźnić napięte mięśnie i poprawić samopoczucie. Fizjoterapeutki są bardzo profesjonalne i uważne.',
        rating: 5,
        treatment: 'Masaż gorącymi kamieniami',
    },
    {
        name: 'Tomasz P.',
        text: 'Wypożyczyłem łóżko rehabilitacyjne dla mamy po operacji biodra. Szybki kontakt, sprawna dostawa i świetna jakość sprzętu. Bardzo pomocni ludzie – dziękuję!',
        rating: 5,
        treatment: 'Wypożyczalnia sprzętu',
    },
    {
        name: 'Ewa M.',
        text: 'Hydroterapia w DR KANGUR to prawdziwa przyjemność. Nowoczesny sprzęt, czyste pomieszczenia i fachowa opieka. Po kilku sesjach moje bóle stawów znacząco się zmniejszyły.',
        rating: 5,
        treatment: 'Hydroterapia',
    },
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const next = () => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const timer = setInterval(next, 6000);
        return () => clearInterval(timer);
    }, []);

    const t = testimonials[current];

    const variants = {
        enter: (dir) => ({ x: dir > 0 ? 30 : -30, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir) => ({ x: dir > 0 ? -30 : 30, opacity: 0 }),
    };

    return (
        <section id="testimonials" style={{ padding: '96px 0' }}>
            <div className="container" style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 32px' }}>
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <span style={{ color: '#598BBC', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, fontSize: '0.75rem', marginBottom: '12px', display: 'block' }}>
                        Opinie pacjentów
                    </span>
                    <h2 style={{ color: '#2C3034', fontSize: '3rem', marginBottom: '16px' }}>
                        Co mówią nasi <span style={{ color: '#CFA714' }}>pacjenci</span>
                    </h2>
                    <p style={{ color: '#444A56', maxWidth: '42rem', margin: '0 auto' }}>
                        Satysfakcja pacjentów jest dla nas najważniejsza. Oto opinie osób, które nam zaufały.
                    </p>
                </div>

                <div style={{ maxWidth: '750px', margin: '0 auto', position: 'relative' }}>
                    {/* Quote icon */}
                    <div style={{
                        position: 'absolute',
                        top: '-20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #CFA714 0%, #E5C14B 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 10px 30px rgba(207, 167, 20, 0.2)',
                        zIndex: 10,
                    }}>
                        <Quote size={28} color="white" />
                    </div>

                    <div style={{
                        background: 'white',
                        borderRadius: '48px',
                        padding: '64px 48px 48px',
                        boxShadow: '0 20px 50px rgba(44, 48, 52, 0.08)',
                        border: '1px solid rgba(0, 0, 0, 0.03)',
                        minHeight: '300px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        position: 'relative',
                    }}>
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={current}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                                style={{ textAlign: 'center', width: '100%' }}
                            >
                                {/* Stars */}
                                <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '24px' }}>
                                    {Array.from({ length: t.rating }).map((_, i) => (
                                        <Star key={i} size={20} fill="#CFA714" color="#CFA714" />
                                    ))}
                                </div>

                                <p style={{
                                    color: '#444A56',
                                    fontSize: '1.1rem',
                                    lineHeight: 1.8,
                                    marginBottom: '32px',
                                    fontStyle: 'italic',
                                }}>
                                    "{t.text}"
                                </p>

                                <p style={{ fontWeight: 700, color: '#2C3034', fontSize: '1.1rem', marginBottom: '4px' }}>
                                    {t.name}
                                </p>
                                <span style={{
                                    background: 'rgba(207, 167, 20, 0.08)',
                                    color: '#CFA714',
                                    padding: '4px 16px',
                                    borderRadius: '100px',
                                    fontSize: '0.8rem',
                                    fontWeight: 600,
                                }}>
                                    {t.treatment}
                                </span>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '24px', marginTop: '32px' }}>
                        <button
                            onClick={prev}
                            style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '50%',
                                border: '2px solid #e5e7eb',
                                background: 'white',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.3s',
                                color: '#2C3034',
                            }}
                            onMouseEnter={(e) => { e.target.style.borderColor = '#CFA714'; e.target.style.color = '#CFA714'; }}
                            onMouseLeave={(e) => { e.target.style.borderColor = '#e5e7eb'; e.target.style.color = '#2C3034'; }}
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <div style={{ display: 'flex', gap: '8px' }}>
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                                    style={{
                                        width: i === current ? '32px' : '10px',
                                        height: '10px',
                                        borderRadius: '100px',
                                        background: i === current ? '#CFA714' : '#e5e7eb',
                                        border: 'none',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s',
                                        padding: 0,
                                    }}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '50%',
                                border: '2px solid #e5e7eb',
                                background: 'white',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.3s',
                                color: '#2C3034',
                            }}
                            onMouseEnter={(e) => { e.target.style.borderColor = '#CFA714'; e.target.style.color = '#CFA714'; }}
                            onMouseLeave={(e) => { e.target.style.borderColor = '#e5e7eb'; e.target.style.color = '#2C3034'; }}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
