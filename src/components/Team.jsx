import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Heart } from 'lucide-react';

const team = [
    {
        name: 'Specjalista fizjoterapii',
        role: 'Fizjoterapia manualna & MTG',
        description: 'Wykwalifikowana fizjoterapeutka z\u00A0wieloletnim doświadczeniem w\u00A0terapii manualnej, masażu tkanek głębokich oraz tapingu. Specjalizuje się w\u00A0rehabilitacji pourazowej i\u00A0pooperacyjnej.',
        specialties: ['Terapia manualna', 'Masaż tkanek głębokich', 'Taping limfatyczny'],
        icon: Award,
    },
    {
        name: 'Specjalista rehabilitacji',
        role: 'Rehabilitacja & Fizykoterapia',
        description: 'Doświadczony terapeuta specjalizujący się w\u00A0nowoczesnych metodach fizykoterapii \u2013\u00A0fali uderzeniowej, laseroterapii wysokoenergetycznej oraz krioterapii.',
        specialties: ['Fala uderzeniowa', 'Laseroterapia', 'Krioterapia'],
        icon: GraduationCap,
    },
    {
        name: 'Specjalista hydroterapii',
        role: 'Hydroterapia & Masaże',
        description: 'Terapeuta z\u00A0pasją do\u00A0hydroterapii i\u00A0masaży leczniczych. Prowadzi zabiegi w\u00A0wannie do\u00A0hydroterapii oraz stanowisku do\u00A0masażu wirowego rąk i\u00A0nóg.',
        specialties: ['Hydroterapia', 'Masaż gorącymi kamieniami', 'Masaż relaksacyjny'],
        icon: Heart,
    },
];

const Team = () => {
    return (
        <section id="team" style={{ padding: '96px 0' }}>
            <div className="container" style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 32px' }}>
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <span style={{ color: '#598BBC', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, fontSize: '0.75rem', marginBottom: '12px', display: 'block' }}>
                        Poznaj nasz zespół
                    </span>
                    <h2 style={{ color: '#2C3034', fontSize: '3rem', marginBottom: '16px' }}>
                        Doświadczeni <span style={{ color: '#CFA714' }}>specjaliści</span>
                    </h2>
                    <p style={{ color: '#444A56', maxWidth: '42rem', margin: '0 auto' }}>
                        Nasz zespół tworzą wykwalifikowani fizjoterapeuci z{'\u00A0'}wieloletnim doświadczeniem, którzy nieustannie podnoszą swoje kwalifikacje.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                    {team.map((member, i) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08, duration: 0.4, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.15 }}
                            className="card-premium"
                            style={{
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            {/* Avatar placeholder with icon */}
                            <div style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #CFA714 0%, #E5C14B 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '24px',
                                boxShadow: '0 10px 30px rgba(207, 167, 20, 0.2)',
                            }}>
                                <member.icon size={40} color="white" />
                            </div>

                            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#2C3034', marginBottom: '4px' }}>
                                {member.name}
                            </h3>
                            <p style={{ color: '#CFA714', fontWeight: 600, fontSize: '0.9rem', marginBottom: '16px' }}>
                                {member.role}
                            </p>
                            <p style={{ color: '#444A56', lineHeight: 1.7, fontSize: '0.9rem', marginBottom: '20px' }}>
                                {member.description}
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                                {member.specialties.map(spec => (
                                    <span
                                        key={spec}
                                        style={{
                                            background: 'rgba(207, 167, 20, 0.08)',
                                            color: '#2C3034',
                                            padding: '6px 14px',
                                            borderRadius: '100px',
                                            fontSize: '0.8rem',
                                            fontWeight: 600,
                                        }}
                                    >
                                        {spec}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
