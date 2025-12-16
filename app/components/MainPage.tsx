'use client'

import React, { useState } from 'react'
import { Github, Linkedin, Mail, Code2, Layers, Zap, Layout } from 'lucide-react'
import Navbar from './Navbar'
import Hero from './Hero'
import SkillCard from './SkillCard'
import ExperienceItem from './ExperienceItem'
import ContactForm from './ContactForm'

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