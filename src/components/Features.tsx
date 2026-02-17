import React from 'react';

export const Features: React.FC = () => {
    return (
        <section style={{ padding: '64px 0', background: 'rgb(255, 255, 255)' }}>
            <div className="max-w-[1240px] mx-auto px-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    {/* AGENTS badge — matches original */}
                    <div
                        className="inline-block font-mono mb-6"
                        style={{
                            background: '#bae6fd',
                            color: '#0c4a6e',
                            fontSize: '11px',
                            fontWeight: 600,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase' as const,
                            padding: '8px 16px',
                            borderRadius: '8px',
                        }}
                    >
                        AGENTS
                    </div>
                    <h2
                        style={{
                            fontFamily: 'Fields, Arial, sans-serif',
                            fontSize: '44px',
                            lineHeight: '1.1',
                            letterSpacing: '-0.02em',
                            color: '#181d27',
                        }}
                    >
                        <span className="gradient-span-violet">AI agents</span> built to automate<br />
                        <span className="gradient-span-violet">your marketing workflows</span>
                    </h2>
                </div>

                {/* Two Main Feature Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {/* Customer Engagement Card */}
                    <div
                        className="text-white relative overflow-hidden flex flex-col"
                        style={{
                            background: '#181d27',
                            borderRadius: '40px',
                            padding: '40px',
                            minHeight: '700px',
                            fontFamily: 'Geist, Arial, sans-serif',
                        }}
                    >
                        <div className="relative z-10">
                            <h3
                                style={{
                                    fontFamily: 'Fields, Arial, sans-serif',
                                    fontSize: '36px',
                                    lineHeight: '1.15',
                                    letterSpacing: '-0.01em',
                                    color: '#82c9ff',
                                    marginBottom: '16px',
                                }}
                            >
                                Customer Engagement
                            </h3>
                            <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'rgba(255,255,255,0.6)', maxWidth: '400px', fontFamily: 'Geist, Arial, sans-serif' }}>
                                Reply to messages and conduct intelligent & complex conversations
                                to drive defined customer outcomes.
                            </p>
                        </div>

                        {/* Visual mockup area - phone UI */}
                        <div className="mt-auto pt-10 flex justify-center">
                            <div className="bg-[#2a2f3a] rounded-2xl p-5 w-full max-w-[380px]">
                                {/* Brand header */}
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="bg-[#3a3f4a] px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase text-white/80" style={{ fontFamily: 'Geist, Arial, sans-serif' }}>HEY JEANS</div>
                                    <div className="flex-1 h-[2px] bg-[#3a3f4a] rounded-full ml-2" />
                                </div>

                                {/* CTA text */}
                                <div className="text-center mb-6" style={{ fontFamily: 'Geist, Arial, sans-serif' }}>
                                    <p className="text-[13px] font-semibold tracking-[0.05em] uppercase text-white/90">REPLY TO CHAT</p>
                                    <p className="text-[13px] font-semibold tracking-[0.05em] uppercase text-white/90">WITH OUR VIRTUAL STYLIST</p>
                                </div>

                                {/* Product images */}
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="bg-[#f5f0eb] rounded-xl h-[120px] overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&h=200&fit=crop" alt="Fashion" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="bg-[#2a3040] rounded-xl h-[120px] overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" alt="Fashion" className="w-full h-full object-cover opacity-80" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Extended content at the bottom — chat bubbles */}
                        <div className="mt-6 space-y-3 px-2">
                            {/* WEB badge */}
                            <div className="flex items-center gap-2">
                                <div className="bg-[#5035FF] rounded-full p-1.5">
                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" /></svg>
                                </div>
                                <span className="text-[11px] tracking-wider uppercase text-white/50" style={{ fontFamily: 'Geist, Arial, sans-serif' }}>WEB</span>
                            </div>

                            {/* Chat bubble */}
                            <div className="bg-[#2a2f3a] rounded-2xl p-4 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gray-600 overflow-hidden flex-shrink-0">
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user1" alt="" className="w-full h-full" />
                                </div>
                                <p className="text-[13px] text-white/70" style={{ fontFamily: 'Geist, Arial, sans-serif' }}>Does that come in other colors?</p>
                                <div className="w-8 h-8 rounded-full bg-gray-500 overflow-hidden flex-shrink-0 ml-auto">
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user2" alt="" className="w-full h-full" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Marketing Operations Card */}
                    <div
                        className="text-white relative overflow-hidden flex flex-col"
                        style={{
                            background: 'linear-gradient(131deg, rgb(111, 140, 250), rgb(75, 33, 181) 78%)',
                            borderRadius: '40px',
                            padding: '40px',
                            minHeight: '700px',
                            fontFamily: 'Geist, Arial, sans-serif',
                        }}
                    >
                        <div className="relative z-10">
                            <h3
                                style={{
                                    fontFamily: 'Fields, Arial, sans-serif',
                                    fontSize: '36px',
                                    lineHeight: '1.15',
                                    letterSpacing: '-0.01em',
                                    color: 'white',
                                    marginBottom: '16px',
                                }}
                            >
                                Marketing Operations
                            </h3>
                            <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'rgba(255,255,255,0.7)', maxWidth: '420px', fontFamily: 'Geist, Arial, sans-serif' }}>
                                Automate tedious and time consuming workflows, and reclaim your
                                time for work that matters.
                            </p>
                        </div>

                        {/* Visual mockup area */}
                        <div className="mt-auto pt-10">
                            {/* Reddit post mockup */}
                            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 mb-6">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-[#FF4500] rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-lg">🔥</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-wider text-white/50 mb-1 font-mono">NEW POST ON R/FLOWERS FROM U/LILLACLOVER1986</p>
                                        <p className="text-[15px] font-semibold text-white mb-1">How is the bouquet packaged?</p>
                                        <p className="text-[13px] text-white/60 leading-relaxed">I'm sending some flowers as a gift but I'm worried because I don't know what the packaging looks like. Can anyone share...</p>
                                    </div>
                                </div>
                            </div>

                            {/* Diamond connector */}
                            <div className="flex flex-col items-center gap-1 my-3">
                                <div className="w-3 h-3 bg-white/40 rotate-45" />
                                <div className="w-[1px] h-4 bg-white/30" />
                                <div className="w-3 h-3 bg-white/40 rotate-45" />
                            </div>

                            {/* Agent Workflow */}
                            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-5">
                                <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-white/80 mb-4 font-mono">AGENT WORKFLOW</p>
                                <div className="flex items-center justify-between gap-2">
                                    {[
                                        { icon: '📊', label: 'GOALS\nASSESSED' },
                                        { icon: '🔍', label: 'POST\nREVIEWED' },
                                        { icon: '💡', label: 'OPPORTUNITY\nIDENTIFIED' },
                                        { icon: '📄', label: 'REPORT\nGENERATED' },
                                    ].map((step, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <div className="flex flex-col items-center gap-1.5">
                                                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-sm">
                                                    {step.icon}
                                                </div>
                                                <span className="text-[9px] tracking-wider uppercase text-center text-white/70 whitespace-pre-line leading-tight font-mono">{step.label}</span>
                                            </div>
                                            {i < 3 && (
                                                <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 -mt-4">
                                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Extended: Social Listener email + Opportunity card */}
                            <div className="mt-4 space-y-3">
                                <div className="flex flex-col items-center gap-1 my-2">
                                    <div className="w-3 h-3 bg-white/40 rotate-45" />
                                    <div className="w-[1px] h-3 bg-white/30" />
                                    <div className="w-3 h-3 bg-white/40 rotate-45" />
                                </div>

                                {/* Social Listener notification */}
                                <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-[#5035FF] flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zm-4-2a7 7 0 110-14 7 7 0 010 14z" /></svg>
                                        </div>
                                        <div>
                                            <span className="text-[13px] font-semibold text-white">Social Listener</span>
                                            <span className="text-[11px] text-white/40 ml-1">&lt;hello@tildei.com&gt;</span>
                                        </div>
                                    </div>
                                    <p className="text-[14px] font-semibold text-white mb-1">Potential Opportunity Found on Reddit</p>
                                    <p className="text-[12px] text-white/60 leading-relaxed">A potential customer is expressing anxiety about product presentation despite having positive intent.</p>
                                    <p className="text-[12px] text-white/80 mt-2"><strong>Problem:</strong> Customer doesn't understand the delivery format.</p>
                                    <p className="text-[12px] text-white/80"><strong>Solution:</strong> Create a series of social posts showing packaging/unboxing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
