import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { ChevronDown } from 'lucide-react';

export const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Non-scrolled: position relative, full-width, transparent, right-aligned nav items
    // Scrolled: position fixed, floating pill, centered
    return (
        <nav
            style={{
                position: scrolled ? 'fixed' : 'absolute',
                top: scrolled ? '12px' : '0px',
                left: 0,
                right: 0,
                zIndex: 9999,
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
        >
            <div
                style={{
                    maxWidth: scrolled ? '860px' : '1330px',
                    margin: '0 auto',
                    padding: scrolled ? '8px 16px' : '11.87px 39.58px',
                    background: scrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(20px)' : 'none',
                    WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
                    borderRadius: scrolled ? '999px' : '0px',
                    border: scrolled ? '1px solid rgba(0, 0, 0, 0.05)' : '1px solid transparent',
                    boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
            >
                {/* Left: Logo */}
                <div className="flex-shrink-0 cursor-pointer">
                    <Logo className={`w-auto transition-all duration-300 ${scrolled ? 'h-[24px]' : 'h-[28px]'}`} />
                </div>

                {/* Right side: Nav Links + Buttons grouped together */}
                <div className="flex items-center gap-8">
                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <div
                            className="group relative flex items-center gap-1 cursor-pointer hover:text-[#5035FF] transition-colors"
                            style={{ fontFamily: 'Geist, Arial, sans-serif', fontSize: '13.85px', fontWeight: 500, color: '#181d27' }}
                        >
                            Platform
                            <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#5035FF] transition-transform group-hover:rotate-180" />
                        </div>
                        <div
                            className="group relative flex items-center gap-1 cursor-pointer hover:text-[#5035FF] transition-colors"
                            style={{ fontFamily: 'Geist, Arial, sans-serif', fontSize: '13.85px', fontWeight: 500, color: '#181d27' }}
                        >
                            Resources
                            <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#5035FF] transition-transform group-hover:rotate-180" />
                        </div>
                        <a
                            href="#"
                            className="hover:text-[#5035FF] transition-colors"
                            style={{ fontFamily: 'Geist, Arial, sans-serif', fontSize: '13.85px', fontWeight: 500, color: '#181d27' }}
                        >
                            Careers
                        </a>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                        <button
                            className="hidden sm:block transition-all duration-300 hover:border-[#5035FF]/30"
                            style={{
                                fontFamily: 'Geist, Arial, sans-serif',
                                fontSize: '13.85px',
                                fontWeight: 500,
                                color: '#181d27',
                                padding: '10px 20px',
                                borderRadius: '59.3px',
                                border: '1px solid rgba(24, 29, 39, 0.1)',
                                background: 'white',
                            }}
                        >
                            Log in
                        </button>
                        <button
                            className="transition-all duration-300 hover:bg-[#3f2ac6] hover:-translate-y-0.5 hover:shadow-lg"
                            style={{
                                fontFamily: 'Geist, Arial, sans-serif',
                                fontSize: '13.85px',
                                fontWeight: 500,
                                color: 'white',
                                padding: '11.87px 23.75px',
                                borderRadius: '59.3px',
                                background: '#5035FF',
                            }}
                        >
                            Book a demo
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};
