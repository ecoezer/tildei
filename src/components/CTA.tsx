import React from 'react';

export const CTA: React.FC = () => {
    return (
        <section
            style={{
                background: 'rgb(255, 255, 255)',
                padding: '160px 0',
            }}
        >
            {/* CTA Content */}
            <div className="text-center max-w-[600px] mx-auto px-10">
                <h2
                    style={{
                        fontFamily: 'Fields, Arial, sans-serif',
                        fontSize: '44px',
                        lineHeight: '1.15',
                        letterSpacing: '-0.02em',
                        color: '#181d27',
                        marginBottom: '24px',
                    }}
                >
                    Ready to transform your marketing?
                </h2>
                <p
                    className="mb-10"
                    style={{
                        fontFamily: 'Geist, Arial, sans-serif',
                        fontSize: '18px',
                        lineHeight: '1.6',
                        color: 'rgba(24, 29, 39, 0.5)',
                    }}
                >
                    Join leading brands using Tildei to build and deploy powerful AI marketing agents.
                </p>
                <button
                    className="transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                    style={{
                        fontFamily: 'Geist, Arial, sans-serif',
                        background: '#5035FF',
                        color: 'white',
                        fontWeight: 500,
                        fontSize: '16px',
                        padding: '19.8px 31.7px',
                        borderRadius: '59.37px',
                    }}
                >
                    Book a demo →
                </button>
            </div>
        </section>
    );
};
