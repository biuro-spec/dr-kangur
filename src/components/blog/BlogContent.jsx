import React from 'react';
import { AlertCircle, CheckCircle, Lightbulb } from 'lucide-react';

const BlogContent = ({ content }) => {
    return (
        <div>
            {content.map((block, i) => {
                switch (block.type) {
                    case 'heading':
                        return (
                            <h2
                                key={i}
                                id={`section-${i}`}
                                style={{
                                    fontFamily: 'Outfit',
                                    fontSize: '1.6rem',
                                    fontWeight: 700,
                                    color: '#2C3034',
                                    marginTop: i === 0 ? 0 : '40px',
                                    marginBottom: '16px',
                                    paddingBottom: '12px',
                                    borderBottom: '2px solid rgba(207, 167, 20, 0.15)',
                                }}
                            >
                                {block.text}
                            </h2>
                        );

                    case 'paragraph':
                        return (
                            <p
                                key={i}
                                style={{
                                    color: '#444A56',
                                    fontSize: '1.05rem',
                                    lineHeight: 1.8,
                                    marginBottom: '20px',
                                }}
                            >
                                {block.text}
                            </p>
                        );

                    case 'list':
                        return (
                            <ul
                                key={i}
                                style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: '20px 0',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '10px',
                                }}
                            >
                                {block.items.map((item, j) => (
                                    <li
                                        key={j}
                                        style={{
                                            display: 'flex',
                                            gap: '12px',
                                            alignItems: 'flex-start',
                                            color: '#444A56',
                                            fontSize: '1rem',
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        <CheckCircle
                                            size={18}
                                            color="#CFA714"
                                            style={{ flexShrink: 0, marginTop: '4px' }}
                                        />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        );

                    case 'callout':
                        return (
                            <div
                                key={i}
                                style={{
                                    background: 'linear-gradient(135deg, rgba(89, 139, 188, 0.08) 0%, rgba(89, 139, 188, 0.04) 100%)',
                                    borderLeft: '4px solid #598BBC',
                                    borderRadius: '0 16px 16px 0',
                                    padding: '20px 24px',
                                    margin: '24px 0',
                                    display: 'flex',
                                    gap: '14px',
                                    alignItems: 'flex-start',
                                }}
                            >
                                <Lightbulb
                                    size={22}
                                    color="#598BBC"
                                    style={{ flexShrink: 0, marginTop: '2px' }}
                                />
                                <p style={{
                                    color: '#2C3034',
                                    fontSize: '0.95rem',
                                    lineHeight: 1.7,
                                    fontWeight: 500,
                                    margin: 0,
                                }}>
                                    {block.text}
                                </p>
                            </div>
                        );

                    case 'timeline':
                        return (
                            <div key={i} style={{ margin: '24px 0', paddingLeft: '20px', borderLeft: '2px solid rgba(207, 167, 20, 0.3)' }}>
                                {(block.items || []).map((item, j) => (
                                    <div key={j} style={{ position: 'relative', paddingLeft: '24px', paddingBottom: j < (block.items.length - 1) ? '24px' : 0 }}>
                                        <div style={{
                                            position: 'absolute',
                                            left: '-11px',
                                            top: '4px',
                                            width: '20px',
                                            height: '20px',
                                            borderRadius: '50%',
                                            background: 'linear-gradient(135deg, #CFA714, #E5C14B)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            fontSize: '0.65rem',
                                            fontWeight: 700,
                                        }}>
                                            {j + 1}
                                        </div>
                                        <p style={{
                                            color: '#444A56',
                                            fontSize: '1rem',
                                            lineHeight: 1.7,
                                            margin: 0,
                                        }}>
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        );

                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default BlogContent;
