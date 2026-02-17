import React from 'react';

const connectionNodes = [
    { label: 'CRM', top: '38%', left: '33%' },
    { label: 'INVENTORY', top: '75%', left: '10%' },
    { label: 'PRODUCT\nINFORMATION\nMGMT', top: '58%', left: '82%' },
    { label: 'APIS', top: '22%', left: '50%' },
    { label: 'CDP', top: '30%', left: '70%' },
    { label: 'PRODUCT\nCATALOG', top: '28%', left: '18%' },
    { label: 'EDITORIAL\nASSETS', top: '42%', left: '58%' },
    { label: 'MARKETING\nCALENDAR', top: '50%', left: '85%' },
    { label: 'DATA\nWAREHOUSE', top: '60%', left: '20%' },
    { label: 'VOICE\n& TONE', top: '55%', left: '45%' },
    { label: 'FAQS', top: '68%', left: '62%' },
    { label: 'LOYALTY\nDATA', top: '62%', left: '55%' },
];

export const HowItWorks: React.FC = () => {
    return (
        <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgb(111, 140, 250) 10%, rgb(75, 33, 181) 70%)' }}>
            {/* HOW TILDEI WORKS badge */}
            <div className="text-center pt-20 pb-8 relative z-10">
                <div
                    className="inline-block"
                    style={{
                        background: '#bae6fd',
                        color: '#0c4a6e',
                        fontSize: '11px',
                        fontWeight: 600,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase' as const,
                        padding: '8px 16px',
                        borderRadius: '8px',
                        fontFamily: 'GeistMono, monospace',
                    }}
                >
                    HOW TILDEI WORKS
                </div>
            </div>

            {/* Main heading */}
            <div className="text-center px-10 pb-16 relative z-10">
                <h2
                    className="mx-auto"
                    style={{
                        fontFamily: 'Fields, Arial, sans-serif',
                        fontSize: '44px',
                        lineHeight: '1.15',
                        letterSpacing: '-0.02em',
                        color: 'rgba(255,255,255,0.6)',
                        maxWidth: '800px',
                    }}
                >
                    Tildei takes your scattered marketing systems and connects them into{' '}
                    <span style={{ color: 'white', fontWeight: 500 }}>a united agentic platform</span>
                </h2>
            </div>

            {/* Starfield / Knowledge Graph area */}
            <div className="relative min-h-[600px]">
                {/* Stars background */}
                {[...Array(60)].map((_, i) => (
                    <div
                        key={`star-${i}`}
                        className="absolute rounded-full animate-twinkle"
                        style={{
                            width: `${1 + Math.random() * 2}px`,
                            height: `${1 + Math.random() * 2}px`,
                            background: 'white',
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            opacity: 0.2 + Math.random() * 0.5,
                        }}
                    />
                ))}

                {/* Floating connection nodes */}
                {connectionNodes.map((node, i) => (
                    <div
                        key={i}
                        className={`absolute ${i % 2 === 0 ? 'animate-float' : 'animate-float-delay'}`}
                        style={{ top: node.top, left: node.left }}
                    >
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-2.5 h-2.5 bg-white/60 rotate-45" />
                            <span
                                className="text-[11px] tracking-[0.15em] uppercase text-white/50 text-center whitespace-pre-line leading-tight"
                                style={{ fontFamily: 'GeistMono, monospace' }}
                            >
                                {node.label}
                            </span>
                        </div>
                    </div>
                ))}

                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" xmlns="http://www.w3.org/2000/svg">
                    <line x1="33%" y1="40%" x2="50%" y2="24%" stroke="white" strokeWidth="0.5" />
                    <line x1="70%" y1="32%" x2="50%" y2="24%" stroke="white" strokeWidth="0.5" />
                    <line x1="18%" y1="30%" x2="33%" y2="40%" stroke="white" strokeWidth="0.5" />
                    <line x1="58%" y1="44%" x2="50%" y2="24%" stroke="white" strokeWidth="0.5" />
                    <line x1="10%" y1="77%" x2="20%" y2="62%" stroke="white" strokeWidth="0.5" />
                    <line x1="82%" y1="60%" x2="70%" y2="32%" stroke="white" strokeWidth="0.5" />
                    <line x1="85%" y1="52%" x2="82%" y2="60%" stroke="white" strokeWidth="0.5" />
                    <line x1="20%" y1="62%" x2="45%" y2="57%" stroke="white" strokeWidth="0.5" />
                    <line x1="45%" y1="57%" x2="58%" y2="44%" stroke="white" strokeWidth="0.5" />
                    <line x1="62%" y1="70%" x2="55%" y2="64%" stroke="white" strokeWidth="0.5" />
                </svg>
            </div>

            {/* Gradient transition to communicate section */}
            <div
                className="relative h-[300px]"
                style={{
                    background: 'linear-gradient(180deg, rgba(75, 33, 181, 0) 0%, rgba(75, 33, 181, 0.5) 30%, rgba(111, 140, 250, 0.3) 60%, rgba(224, 232, 255, 0.5) 80%, #f0f0f5 100%)',
                }}
            />
        </section>
    );
};
