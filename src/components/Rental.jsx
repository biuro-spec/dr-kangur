import React from 'react';
import { Bed, Accessibility, Wind, MoveHorizontal } from 'lucide-react';

const rentalItems = [
    { icon: Bed, title: 'Łóżka rehabilitacyjne', desc: 'Elektryczne, sterowane pilotem łóżka podnoszące komfort opieki.' },
    { icon: Accessibility, title: 'Wózki inwalidzkie', desc: 'Lekkie i składane wózki dla osób z trudnościami w poruszaniu się.' },
    { icon: Wind, title: 'Koncentratory tlenu', desc: 'Niezbędne wsparcie w tlenoterapii domowej. Modele stacjonarne i przenośne.' },
    { icon: MoveHorizontal, title: 'Szyny CPM Ortoflex', desc: 'Specjalistyczny sprzęt do automatycznej rehabilitacji stawu kolanowego.' },
];

const Rental = () => {
    return (
        <section className="py-24" id="rental" style={{ padding: '96px 0' }}>
            <div className="container mx-auto px-6">
                <div className="bg-[#2C3034] rounded-[48px] p-12 md:p-20 text-white overflow-hidden relative" style={{ background: '#2C3034', borderRadius: '48px', padding: '48px', color: 'white', overflow: 'hidden', position: 'relative' }}>

                    <div className="z-10 relative" style={{ zIndex: 10, position: 'relative' }}>
                        <span className="text-[#CFA714] uppercase tracking-widest font-bold text-xs mb-3 block" style={{ color: '#CFA714', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, fontSize: '0.75rem', marginBottom: '12px', display: 'block' }}>Wsparcie domowe</span>
                        <h2 className="text-4xl md:text-5xl font-outfit mb-12 max-w-2xl" style={{ fontSize: '2.25rem', fontFamily: 'Outfit', marginBottom: '48px', maxWidth: '42rem' }}>Posiadamy profesjonalną <span className="text-[#CFA714]">wypożyczalnię sprzętu</span> medycznego</h2>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
                            {rentalItems.map((item, i) => (
                                <div key={item.title} className="bg-white/5 p-8 rounded-3xl border border-white/10" style={{ background: 'rgba(255,255,255,0.05)', padding: '32px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <item.icon className="text-[#CFA714] mb-6" size={40} style={{ color: '#CFA714', marginBottom: '24px' }} />
                                    <h3 className="text-xl font-bold mb-3" style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px' }}>{item.title}</h3>
                                    <p className="text-[#9ca3af] text-sm leading-relaxed" style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: 1.625 }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 text-center bg-white/[0.03] border border-white/5 p-12 rounded-[40px] flex flex-col items-center gap-6" style={{ marginTop: '64px', textAlign: 'center', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '48px', borderRadius: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
                            <p className="text-xl text-gray-300" style={{ fontSize: '1.25rem', color: '#d1d5db' }}>Potrzebujesz sprzętu do rehabilitacji domowej?</p>
                            <a href="tel:+48604246994" className="text-4xl md:text-5xl font-outfit font-extrabold hover:scale-105 transition-transform no-underline" style={{ color: '#CFA714', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, textDecoration: 'none', background: 'var(--gold-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>+48 604 246 994</a>
                        </div>
                    </div>

                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#598BBC] rounded-full filter blur-[100px] opacity-10 -translate-y-1/2 translate-x-1/2" style={{ position: 'absolute', top: 0, right: 0, width: '384px', height: '384px', background: '#598BBC', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.1, transform: 'translate(50%, -50%)' }}></div>
                </div>
            </div>
        </section>
    );
};

export default Rental;
