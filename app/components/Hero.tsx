import React from 'react';
import ScrollButton from './ScrollButton';

// Hero Component
const Hero: React.FC<{ translations: any; }> = ({ translations }) => {
    return (
        <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 relative">
            <div className="container mx-auto text-center md:text-left max-w-5xl">
                <p className="text-blue-400 font-mono mb-4 animate-fade-in-up">{translations.greeting}</p>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight animate-fade-in-up delay-100">
                    Federico Aniello<span className="text-blue-500">.</span>
                    <br />
                    <span className="text-gray-400 text-4xl md:text-6xl">{translations.role}</span>
                </h1>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed animate-fade-in-up delay-200">
                    {translations.description}
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start animate-fade-in-up delay-300">
                    <ScrollButton to="skills" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                        {translations.cta_primary}
                    </ScrollButton>
                    <ScrollButton to="contact" className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-all border border-gray-700">
                        {translations.cta_secondary}
                    </ScrollButton>
                </div>
            </div>
        </section>
    );
};

export default Hero;