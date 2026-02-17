import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { LogoTicker } from './LogoTicker';
import lottie from 'lottie-web';

const LOTTIE_URL =
    'https://cdn.prod.website-files.com/685db6e347bea805032f8390/68771ca928542c10843f2bd4_18714bd18701e6588e6a5a9717027c2d_Hero.json';

export const Hero: React.FC = () => {
    const lottieRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!lottieRef.current) return;

        const anim = lottie.loadAnimation({
            container: lottieRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: LOTTIE_URL,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
                progressiveLoad: true,
            },
        });

        return () => anim.destroy();
    }, []);

    return (
        <section
            className="relative overflow-hidden"
            style={{
                backgroundImage: 'url("https://cdn.prod.website-files.com/685db6e347bea805032f8390/687ee997ea343cd7c5ea761a_home-background.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
            }}
        >
            {/* Noise texture overlay — exact match to original .noise.is-white */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'url("https://cdn.prod.website-files.com/685db6e347bea805032f8390/68779b29cbf1fbf19267d3da_noise-light.png")',
                    backgroundPosition: '0% 0%',
                    backgroundSize: 'auto',
                    pointerEvents: 'none',
                    zIndex: 1,
                }}
            />
            {/* Hero content wrapper — exact match to original .hp_hero-wrap_top */}
            <div
                style={{
                    maxWidth: '1316px',
                    margin: '0 auto',
                    paddingTop: '71.25px',
                    paddingLeft: '39.58px',
                    paddingRight: '39.58px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                {/* Top Section: Text + Lottie */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexGrow: 1,
                        gap: '64px',
                    }}
                >
                    {/* Left Content — exact match to original .hp_hero-content */}
                    <div className="relative z-10" style={{ flexShrink: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h1
                            style={{
                                fontFamily: 'Fields, Arial, sans-serif',
                                fontSize: '64px', /* Increased from 48px to match "powerful" visual */
                                fontWeight: 400,
                                lineHeight: '1.1',
                                color: 'rgb(24, 29, 39)',
                                letterSpacing: '-0.03em',
                                marginBottom: '24px',
                            }}
                        >
                            Build powerful marketing agents.
                            <br />
                            Activate them everywhere.
                        </h1>

                        <p
                            style={{
                                fontFamily: 'Geist, Arial, sans-serif',
                                fontSize: '20px', /* Increased from 17.81px */
                                fontWeight: 300,
                                lineHeight: '1.5',
                                color: 'rgba(24, 29, 39, 0.75)',
                                marginBottom: '40px',
                                maxWidth: '540px',
                            }}
                        >
                            Bring deep agentic capabilities to your entire marketing stack.
                        </p>

                        <a
                            href="#"
                            className="group inline-flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                            style={{
                                fontFamily: 'Geist, Arial, sans-serif',
                                background: 'rgb(80, 53, 255)',
                                color: 'white',
                                fontWeight: 500,
                                fontSize: '16px',
                                padding: '16px 32px',
                                borderRadius: '59.37px',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                alignSelf: 'flex-start',
                            }}
                        >
                            Book a demo
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>

                    {/* Right Content — Lottie animation */}
                    <div
                        ref={lottieRef}
                        style={{
                            width: '500px',
                            height: '500px',
                            flexShrink: 0,
                            display: 'flex',
                            alignSelf: 'center',
                        }}
                    />
                </div>

                {/* Bottom Section: Logo Ticker */}
                <div style={{ paddingBottom: '64px', marginTop: 'auto' }}>
                    <LogoTicker />
                </div>
            </div>
        </section>
    );
};
