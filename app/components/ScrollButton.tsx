'use client'

import React from 'react';

// ScrollButton Component
const ScrollButton: React.FC<{ to: string; children: React.ReactNode; className?: string; }> = ({ to, children, className }) => {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <button onClick={() => scrollTo(to)} className={className}>
            {children}
        </button>
    );
};

export default ScrollButton;
