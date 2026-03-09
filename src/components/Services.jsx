import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Zap, Droplets, UserCheck, Heart, Layers, Waves, ThermometerSnowflake, Ruler, X, ChevronRight } from 'lucide-react';

const services = [
    {
        icon: Activity,
        title: 'Rehabilitacja po urazach',
        desc: 'Szybki powrót do ruchu po złamaniach, skręceniach i zerwaniach więzadeł.',
        details: 'Oferujemy kompleksową opiekę po urazach, obejmującą terapie manualne zmniejszające ból i obrzęk, ćwiczenia stabilizacyjne i wzmacniające przywracające kontrolę nad stawem, fizykoterapię (laser, ultradźwięki, krioterapia) oraz indywidualne plany terapii dostosowane do stopnia urazu i stylu życia. Wczesna fizjoterapia to szybszy powrót do aktywności i mniejsze ryzyko przewlekłych problemów.',
    },
    {
        icon: Layers,
        title: 'Rehabilitacja po operacjach',
        desc: 'Opieka po zabiegach ortopedycznych i neurochirurgicznych.',
        details: 'Specjalizujemy się w rehabilitacji po operacjach kolana (rekonstrukcja ACL, endoproteza, artroskopia), zabiegach ortopedycznych i neurochirurgicznych. Wykorzystujemy również szyny CPM Ortoflex do biernego ruchu stawu kolanowego, które przyspieszają regenerację, zapobiegają sztywności i poprawiają zakres ruchu.',
    },
    {
        icon: UserCheck,
        title: 'Fizjoterapia manualna',
        desc: 'Terapia tkanek miękkich i mobilizacje stawowe wykonywane przez specjalistów.',
        details: 'Nasza kadra posiada kwalifikacje do wykonywania masażu tkanek głębokich (MTG) – metody prowadzonej świadomie, celowo i nieschematycznie. Efekty to regulacja napięcia mięśniowo-powięziowego, zwiększenie elastyczności tkanek, likwidacja punktów spustowych bólu, wzrost ruchomości w stawach i przywracanie prawidłowej postawy ciała.',
    },
    {
        icon: Heart,
        title: 'Masaże lecznicze',
        desc: 'Masaż klasyczny, tkanek głębokich, gorącymi kamieniami i więcej.',
        details: 'Oferujemy szeroki wybór masaży: klasyczny/leczniczy, relaksacyjny, powięziowy, tkanek głębokich, gorącymi kamieniami bazaltowymi oraz drenaż limfatyczny. Masaż gorącymi kamieniami to głęboko relaksująca forma terapii wykorzystująca ciepło, które rozluźnia mięśnie, poprawia krążenie i zmniejsza napięcie. Oferujemy także masaż pneumatyczno-uciskowy BOA redukujący cellulit i obrzęki.',
    },
    {
        icon: Zap,
        title: 'Fala uderzeniowa',
        desc: 'Skuteczna walka z przewlekłymi stanami zapalnymi i ostrogami.',
        details: 'Nowoczesna metoda wykorzystująca impulsy akustyczne pobudzające naturalne procesy regeneracji. Leczy: ból ścięgna Achillesa, ostrogi piętowe, łokieć tenisisty/golfisty, bóle stawów barkowych i biodrowych, zapalenie powięzi podeszwowej, kolano skoczka oraz zmiany zwyrodnieniowe. Stosowana również w medycynie estetycznej – redukcja cellulitu, wygładzanie blizn i rozstępów.',
    },
    {
        icon: Droplets,
        title: 'Laseroterapia',
        desc: 'Laser wysokoenergetyczny przyspieszający regenerację komórkową.',
        details: 'Laseroterapia wysokoenergetyczna i biostymulacja działają przeciwbólowo, przeciwzapalnie, przyspieszają regenerację tkanek, łagodzą bóle krzyża i choroby reumatyczne oraz wspomagają leczenie stanów pourazowych. Zabieg jest nieinwazyjny, a efekty odczuwalne praktycznie od razu – poprawa ukrwienia oraz stymulacja układu krwionośnego i limfatycznego.',
    },
    {
        icon: ThermometerSnowflake,
        title: 'Krioterapia',
        desc: 'Leczenie zimnem redukujące obrzęki i ból po urazach.',
        details: 'Krioterapia wykorzystuje niską temperaturę w celach leczniczych. Działa przeciwzapalnie, przeciwbólowo i obkurczająco na naczynia krwionośne. Polecana po urazach (skręceniach, stłuczeniach, operacjach), przy bólu stawów lub mięśni, chorobach reumatycznych oraz dla sportowców potrzebujących szybszej regeneracji. Zabieg jest bezbolesny, a efekty widoczne już po pierwszej sesji.',
    },
    {
        icon: Ruler,
        title: 'Taping medyczny',
        desc: 'Wspomaganie stabilizacji i drenaż limfatyczny za pomocą taśm.',
        details: 'Taping (plastrowanie dynamiczne) to elastyczne taśmy wspierające regenerację, zmniejszające ból, poprawiające stabilizację mięśni i stawów oraz usprawniające drenaż limfatyczny. Oferujemy taping limfatyczny przeciwobrzękowy, który naciąga skórę umożliwiając chłonce szybszy przepływ, poprawia mikrokrążenie i stymuluje regenerację. Sprawdza się u sportowców, po urazach, operacjach i przy pracy siedzącej.',
    },
    {
        icon: Waves,
        title: 'Hydroterapia',
        desc: 'Lecznicze kąpiele wirowe poprawiające krążenie i zakres ruchu.',
        details: 'Posiadamy wannę do hydroterapii całego ciała oraz stanowisko do masażu wirowego rąk i nóg. Woda odciąża ciało, dzięki czemu ćwiczenia są bezpieczniejsze i mniej bolesne – idealna metoda po urazach, operacjach i przy chorobach stawów. Regularne sesje wspierają krążenie, przyspieszają regenerację i poprawiają samopoczucie. Pomieszczenia i urządzenia są zawsze sterylnie czyste.',
    },
];

const ServiceModal = ({ service, onClose }) => {
    if (!service) return null;
    const Icon = service.icon;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.6)',
                zIndex: 9998,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px',
            }}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                    background: 'white',
                    borderRadius: '32px',
                    padding: '48px',
                    maxWidth: '600px',
                    width: '100%',
                    position: 'relative',
                    maxHeight: '85vh',
                    overflowY: 'auto',
                }}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        border: 'none',
                        background: '#f1f3f5',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#2C3034',
                    }}
                >
                    <X size={20} />
                </button>

                <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    background: 'rgba(207, 167, 20, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    color: '#CFA714',
                }}>
                    <Icon size={32} />
                </div>

                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#2C3034', marginBottom: '16px' }}>
                    {service.title}
                </h3>
                <p style={{ color: '#444A56', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '32px' }}>
                    {service.details}
                </p>

                <a
                    href="#contact"
                    onClick={onClose}
                    className="btn-premium"
                    style={{ fontSize: '0.95rem', padding: '14px 32px' }}
                >
                    Umów wizytę <ChevronRight size={18} />
                </a>
            </motion.div>
        </motion.div>
    );
};

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <section className="py-24 bg-[#f1f3f5]" id="services" style={{ padding: '96px 0', background: '#f1f3f5' }}>
            <div className="container mx-auto px-6">
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <span style={{ color: '#598BBC', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, fontSize: '0.75rem', marginBottom: '12px', display: 'block' }}>Specjalistyczna Oferta</span>
                    <h2 style={{ color: '#2C3034', fontSize: '3rem', marginBottom: '16px' }}>Nasze Usługi</h2>
                    <p style={{ color: '#444A56', maxWidth: '42rem', margin: '0 auto' }}>Najnowocześniejszy sprzęt i doświadczeni terapeuci to podstawa skuteczności naszych zabiegów.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: (i % 3) * 0.08, duration: 0.4, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.15 }}
                            className="card-premium"
                            onClick={() => setSelectedService(service)}
                            style={{ textAlign: 'center', cursor: 'pointer' }}
                        >
                            <div style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 24px',
                                background: '#f8f9fa',
                                color: '#CFA714',
                                transition: 'all 0.3s',
                            }}>
                                <service.icon size={32} />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#2C3034', marginBottom: '16px' }}>{service.title}</h3>
                            <p style={{ color: '#444A56', lineHeight: 1.6, fontSize: '0.875rem', marginBottom: '16px' }}>{service.desc}</p>
                            <span style={{ color: '#CFA714', fontWeight: 600, fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                Dowiedz się więcej <ChevronRight size={16} />
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedService && (
                    <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
                )}
            </AnimatePresence>

            <style>{`
                @media (max-width: 768px) {
                    #services > div > div:last-of-type {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Services;
