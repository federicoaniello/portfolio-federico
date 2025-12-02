'use client'

import React, { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Code2, Layers, Zap, Layout, Globe, Download, Menu, X, Send } from 'lucide-react'

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


const SkillCard = ({ icon: Icon, title, level, color }: { icon: any, title: string, level: string, color: string }) => (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] group">
        <div className={`p-3 rounded-lg w-fit mb-4 ${color} bg-opacity-20`}>
            <Icon size={24} className={color.replace('bg-', 'text-')} />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{level}</p>
    </div>
);

const ExperienceItem = ({ role, company, period, desc, isLast }: { role: string, company: string, period: string, desc: string, isLast: boolean }) => (
    <div className="relative pl-8 sm:pl-32 py-6 group">
        {!isLast && (
            <div className="absolute left-2 sm:left-[8.5rem] top-8 bottom-0 w-0.5 bg-gray-800 group-hover:bg-blue-500/50 transition-colors duration-300" />
        )}
        <div className="hidden sm:block absolute left-0 w-28 text-right text-sm font-mono text-blue-400 pt-1">
            {period}
        </div>
        <div className="absolute left-[0.2rem] sm:left-[8.35rem] top-7 w-3 h-3 rounded-full bg-blue-500 border-4 border-gray-900 z-10" />
        <div className="bg-gray-800/40 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors">
            <div className="sm:hidden text-xs font-mono text-blue-400 mb-2">{period}</div>
            <h3 className="text-xl font-bold text-white mb-1">{role}</h3>
            <h4 className="text-gray-300 font-medium mb-3">{company}</h4>
            <p className="text-gray-400 leading-relaxed text-sm">
                {desc}
            </p>
        </div>
    </div>
);

const ContactForm: React.FC<{ translations: any; }> = ({ translations }) => {
    const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setFormStatus('success');
                setTimeout(() => setFormStatus('idle'), 5000);
                (e.target as HTMLFormElement).reset();
            } else {
                console.error('Error sending message.');
                alert('Error sending message.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error sending message.');
        }
    };

    return (
        <form
            name="contact"
            onSubmit={handleSubmit}
            className="space-y-4"
        >
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">{translations.nameLabel}</label>
                <input type="text" id="name" name="name" required className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">{translations.emailLabel}</label>
                <input type="email" id="email" name="email" required className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">{translations.messageLabel}</label>
                <textarea id="message" name="message" rows={4} required className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"></textarea>
            </div>

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 mt-2">
                <Send size={18} />
                {translations.sendButton}
            </button>

            {formStatus === 'success' && (
                <div className="text-green-400 text-sm text-center mt-2 bg-green-900/20 py-2 rounded border border-green-800 animate-pulse">
                    {translations.successMessage}
                </div>
            )}
        </form>
    );
}

const MainPage = ({ DATA, TRANSLATIONS }: { DATA: any, TRANSLATIONS: any }) => {
    const [lang, setLang] = useState<'en' | 'it'>('it');
    const t = TRANSLATIONS[lang];

    const toggleLang = () => setLang(prev => prev === 'en' ? 'it' : 'en');

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 font-sans selection:bg-blue-500/30">

            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[100px]" />
                <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[100px]" />
            </div>

            <Navbar translations={t.nav} lang={lang} toggleLang={toggleLang} scrollToSection={scrollToSection} />
            <main>
                <Hero translations={t.hero} />

                <section id="skills" className="py-20 bg-gray-900/50">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-16">

                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                                    {t.about.title}
                                </h2>
                                <p className="text-gray-400 leading-relaxed text-lg mb-8">
                                    {t.about.text}
                                </p>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-red-500">
                                        <div className="text-3xl font-bold text-white mb-1">2+</div>
                                        <div className="text-sm text-gray-400">Years Angular</div>
                                    </div>
                                    <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
                                        <div className="text-3xl font-bold text-white mb-1">3+</div>
                                        <div className="text-sm text-gray-400">Years Vue.js</div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-white mb-8">
                                    {t.skills.title}
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <SkillCard
                                        icon={Layers}
                                        title="Vue.js / Nuxt"
                                        level="Intermediate - 3 Years"
                                        color="bg-green-500"
                                    />
                                    <SkillCard
                                        icon={Layout}
                                        title="Angular"
                                        level="Intermediate - 2 Years"
                                        color="bg-red-500"
                                    />
                                    <SkillCard
                                        icon={Code2}
                                        title="React / Next.js"
                                        level="Beginner"
                                        color="bg-blue-500"
                                    />
                                    <SkillCard
                                        icon={Zap}
                                        title="Tailwind & TS"
                                        level="Intermediate"
                                        color="bg-yellow-500"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section id="experience" className="py-20">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.experience.title}</h2>
                            <p className="text-gray-400">{t.experience.subtitle}</p>
                        </div>

                        <div className="space-y-2">
                            {t.experience.jobs.map((job: any, index: number) => (
                                <ExperienceItem
                                    key={index}
                                    {...job}
                                    isLast={index === t.experience.jobs.length - 1}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 md:p-12 backdrop-blur-sm shadow-2xl">
                            <div className="grid md:grid-cols-2 gap-12">

                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-4">{t.contact.title}</h2>
                                    <p className="text-gray-400 mb-8">
                                        {t.contact.infoText}
                                    </p>

                                    <div className="space-y-6">
                                        <a href={`mailto:${DATA.email}`} className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors group">
                                            <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                                <Mail size={20} />
                                            </div>
                                            <span className="font-mono text-sm sm:text-base">{DATA.email}</span>
                                        </a>
                                        <div className="flex gap-4 pt-4">
                                            <a href={DATA.social.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all">
                                                <Github size={20} />
                                            </a>
                                            <a href={DATA.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500 transition-all">
                                                <Linkedin size={20} />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <ContactForm translations={t.contact} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="py-8 bg-gray-900 border-t border-gray-800 text-center">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Federico Aniello. Built with Next.js, Tailwind & React.
                </p>
            </footer>
        </div>
    )
}

export default MainPage