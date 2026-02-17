import React from 'react';

const logos = [
    { name: "Revival", url: "https://cdn.prod.website-files.com/685db6e347bea805032f8390/68826f2d1fe6aefa5f8d7733_Revival.png" },
    { name: "Cariuma", url: "https://cdn.prod.website-files.com/685db6e347bea805032f8390/68771fdf7e6af01dc3bbbbdb_logo-cariuma.svg" },
    { name: "Toys R Us", url: "https://cdn.prod.website-files.com/685db6e347bea805032f8390/68826fbb01b76ac93d6efa01_ToysRUs.png" },
    { name: "FabFitFun", url: "https://cdn.prod.website-files.com/685db6e347bea805032f8390/68826fbbeb81d59b1af01e1b_FabFitFun.png" },
    { name: "Jomashop", url: "https://cdn.prod.website-files.com/685db6e347bea805032f8390/68771fdf7e6af01dc3bbbbd6_b49f0a9ff8fc66219d6b68212568a23e_logo-jomashop.png" },
    { name: "American Dream", url: "https://cdn.prod.website-files.com/685db6e347bea805032f8390/68771fdf7e6af01dc3bbbbd3_logo-american-dream.svg" },
    { name: "Anne Klein", url: "https://cdn.prod.website-files.com/685db6e347bea805032f8390/68826fbb088804b5534c459e_Anne%20Klein.png" },
    { name: "Mall of America", url: "https://cdn.prod.website-files.com/685db6e347bea805032f8390/68771fdf7e6af01dc3bbbbdd_logo-mall-of-america.png" },
];

// Renders a single line of logos
const LogoLine: React.FC = () => (
    <div
        className="logo-ticker-line"
        style={{
            display: 'flex',
            alignItems: 'center',
            gap: '48px',
            flexShrink: 0,
        }}
    >
        {logos.map((logo, i) => (
            <img
                key={i}
                src={logo.url}
                alt={logo.name}
                style={{
                    height: '44px',
                    width: 'auto',
                    objectFit: 'contain',
                    flexShrink: 0,
                }}
            />
        ))}
    </div>
);

export const LogoTicker: React.FC = () => {
    return (
        <div
            style={{
                width: '100%',
                maxWidth: '640px',
                height: '44px',
                overflow: 'hidden',
                margin: '0',
                display: 'flex',
                alignItems: 'center',
                WebkitMaskImage:
                    'linear-gradient(90deg, rgba(0,0,0,0), rgb(0,0,0) 10%, rgb(0,0,0) 90%, rgba(0,0,0,0))',
                maskImage:
                    'linear-gradient(90deg, rgba(0,0,0,0), rgb(0,0,0) 10%, rgb(0,0,0) 90%, rgba(0,0,0,0))',
            }}
        >
            <style>
                {`
                    @keyframes xloop-final {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-33.333333%); }
                    }
                `}
            </style>
            <div
                key="ticker-18s"
                className="logo-ticker-track"
                style={{
                    display: 'flex',
                    gap: '48px',
                    minWidth: 'max-content',
                    paddingRight: '48px',
                    animation: 'xloop-final 18s linear infinite',
                    willChange: 'transform',
                }}
            >
                {/* 3 copies of the logo line — identical to original */}
                <LogoLine />
                <LogoLine />
                <LogoLine />
            </div>
        </div>
    );
};
