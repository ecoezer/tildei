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
                className="mx-auto px-[39.58px] pt-[64px] lg:pt-[72px] h-full flex flex-col justify-between"
                style={{
                    maxWidth: '1316px',
                }}
            >
                {/* Top Section: Text + Lottie */}
                <div
                    className="flex flex-col lg:flex-row justify-between items-center flex-grow gap-[64px]"
                >
                    {/* Left Content — exact match to original .hp_hero-content */}
                    <div className="relative z-10 flex flex-col justify-center shrink" style={{ maxWidth: '760px' }}>
                        <div className="mb-4 lg:mb-4">
                            <h1
                                className="text-[#181D27] text-center lg:text-left"
                                style={{
                                    fontFamily: 'Fields, Arial, sans-serif',
                                    fontSize: 'clamp(40px, 5vw, 48px)',
                                    fontWeight: 400,
                                    lineHeight: '1.1',
                                    letterSpacing: '-1.44px',
                                }}
                            >
                                <div className="overflow-hidden">
                                    <div className="py-[0.05em]">Build powerful marketing agents.</div>
                                </div>
                                <div className="overflow-hidden">
                                    <div className="py-[0.05em]">Activate them everywhere.</div>
                                </div>
                            </h1>
                        </div>

                        <p
                            className="text-[#181D27] opacity-75 text-center lg:text-left mx-auto lg:mx-0 mb-10"
                            style={{
                                fontFamily: 'Geist, Arial, sans-serif',
                                fontSize: '20px',
                                fontWeight: 300,
                                lineHeight: '1.5',
                                maxWidth: '540px',
                            }}
                        >
                            Bring deep agentic capabilities to your entire marketing stack.
                        </p>

                        <div className="flex justify-center lg:justify-start">
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
                                }}
                            >
                                Book a demo
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>

                    {/* Right Content — Lottie animation */}
                    <div
                        ref={lottieRef}
                        className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] shrink-0 flex self-center"
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
