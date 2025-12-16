'use client'

import React, { useState, useEffect } from 'react';
import { Globe, Download, Menu, X } from 'lucide-react';

// Navbar Component
const Navbar: React.FC<{ translations: any; lang: 'en' | 'it'; toggleLang: () => void; scrollToSection: (id: string) => void; }> = ({ translations, lang, toggleLang, scrollToSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-md border-b border-gray-800 py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection('home')}>
                    FA<span className="text-blue-500">.</span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {['about', 'skills', 'experience', 'contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors capitalize"
                        >
                            {translations[item as keyof typeof translations]}
                        </button>
                    ))}
                    <div className="h-4 w-px bg-gray-700" />
                    <button
                        onClick={toggleLang}
                        className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                    >
                        <Globe size={16} />
                        {lang.toUpperCase()}
                    </button>
                    <button className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors flex items-center gap-2">
                        <Download size={16} />
                        <a href='/CV.pdf'>{translations.downloadCv}</a>
                    </button>
                </div>

                <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 border-b border-gray-800 p-6 flex flex-col gap-4 shadow-xl">
                    {['about', 'skills', 'experience', 'contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => {
                                scrollToSection(item)
                                setIsMenuOpen(false);
                            }}
                            className="text-left text-lg font-medium text-gray-300 hover:text-white capitalize"
                        >
                            {translations[item as keyof typeof translations]}
                        </button>
                    ))}
                    <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                        <button onClick={toggleLang} className="flex items-center gap-2 text-gray-300">
                            <Globe size={18} /> {lang.toUpperCase()}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;