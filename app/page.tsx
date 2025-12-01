'use client';
import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Menu, 
  X, 
  Code2, 
  Layers, 
  Zap, 
  Globe, 
  Send,
  Download,
  Layout
} from 'lucide-react';

/**
 * DATI E TRADUZIONI
 */

const DATA = {
  email: "federicoaniello@hotmail.it",
  social: {
    github: "https://github.com/federicoaniello",
    linkedin: "https://linkedin.com/in/federico-aniello-a5867a222"
  }
};

const TRANSLATIONS = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
      downloadCv: "Download CV"
    },
    hero: {
      greeting: "Hello, I'm",
      role: "Front-end Developer",
      description: "Crafting pixel-perfect, engaging, and accessible digital experiences. Specialized in modern JavaScript frameworks with over 4 years of professional expertise.",
      cta_primary: "View My Work",
      cta_secondary: "Contact Me"
    },
    about: {
      title: "About Me",
      text: "I am Federico Aniello, a passionate Front-end Developer based in Italy. With a strong foundation in visual design and technical implementation, I bridge the gap between graphical interfaces and digital execution. My journey involves mastering the ecosystem of modern web development."
    },
    skills: {
      title: "Tech Stack",
      subtitle: "My technical toolkit",
      core: "Core Technologies",
      frameworks: "Frameworks & Libraries",
      tools: "Tools & Workflow"
    },
    experience: {
      title: "Experience",
      subtitle: "My professional journey",
      jobs: [
        {
          role: "Medior Front-end Developer",
          company: "Edilportale S.p.A.",
          period: "2023 - Present",
          desc: "Leading frontend architecture using Vue.js and TypeScript. Made SPA with Vue 3 and Typescript."
        },
        {
          role: "Front-end Developer",
          company: "Exprivia S.p.A.",
          period: "2021 - 2023",
          desc: "Developed complex SPAs using Angular. Collaborated with UX/UI designers to deliver responsive interfaces."
        }
      ]
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Have a project in mind?",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      sendButton: "Send Message",
      successMessage: "Message sent successfully! I'll get back to you soon.",
      infoText: "Feel free to reach out for collaborations, freelance work, or just a friendly chat."
    }
  },
  it: {
    nav: {
      about: "Chi Sono",
      skills: "Competenze",
      experience: "Esperienza",
      contact: "Contatti",
      downloadCv: "Scarica CV"
    },
    hero: {
      greeting: "Ciao, sono",
      role: "Sviluppatore Front-end",
      description: "Creo esperienze digitali pixel-perfect, coinvolgenti e accessibili. Specializzato nei moderni framework JavaScript con oltre 4 anni di esperienza professionale.",
      cta_primary: "I miei lavori",
      cta_secondary: "Contattami"
    },
    about: {
      title: "Chi Sono",
      text: "Sono Federico Aniello, uno Sviluppatore Front-end appassionato con base in Italia. Con solide basi nel visual design e nell'implementazione tecnica, colmo il divario tra interfacce grafiche ed esecuzione digitale. Il mio percorso prevede la padronanza dell'ecosistema dello sviluppo web moderno."
    },
    skills: {
      title: "Competenze",
      subtitle: "Il mio arsenale tecnico",
      core: "Tecnologie Core",
      frameworks: "Framework e Librerie",
      tools: "Strumenti e Workflow"
    },
    experience: {
      title: "Esperienza",
      subtitle: "Il mio percorso professionale",
      jobs: [
        {
          role: "Medior Front-end Developer",
          company: "Edilportale S.p.A.",
          period: "2023 - Presente",
          desc: "Guida dell'architettura frontend usando Vue.js e TypeScript. Migliorate le performance del sito del 40%."
        },
        {
          role: "Front-end Developer",
          company: "Exprivia S.p.A.",
          period: "2021 - 2023",
          desc: "Sviluppo di SPA complesse utilizzando Angular. Collaborazione con designer UX/UI per interfacce responsive."
        }
      ]
    },
    contact: {
      title: "Contattami",
      subtitle: "Hai un progetto in mente?",
      nameLabel: "Nome",
      emailLabel: "Email",
      messageLabel: "Messaggio",
      sendButton: "Invia Messaggio",
      successMessage: "Messaggio inviato con successo! Ti risponderò presto.",
      infoText: "Sentiti libero di contattarmi per collaborazioni, freelance o anche solo per un saluto."
    }
  }
};

// --- COMPONENTS ---

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
    {/* Timeline Line */}
    {!isLast && (
      <div className="absolute left-2 sm:left-[8.5rem] top-8 bottom-0 w-0.5 bg-gray-800 group-hover:bg-blue-500/50 transition-colors duration-300" />
    )}
    
    {/* Period Label (Desktop) */}
    <div className="hidden sm:block absolute left-0 w-28 text-right text-sm font-mono text-blue-400 pt-1">
      {period}
    </div>

    {/* Dot */}
    <div className="absolute left-[0.2rem] sm:left-[8.35rem] top-7 w-3 h-3 rounded-full bg-blue-500 border-4 border-gray-900 z-10" />

    {/* Content */}
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

export default function Home() {
  const [lang, setLang] = useState<'en' | 'it'>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const t = TRANSLATIONS[lang];

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'it' : 'en');

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const myForm = e.currentTarget;
    const formData = new FormData(myForm);
    const body = new URLSearchParams(formData as any).toString();

    // Modifica qui: invia la richiesta al file statico creato in public
    fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body,
    })
      .then(() => {
        setFormStatus('success');
        setTimeout(() => setFormStatus('idle'), 5000);
        myForm.reset();
      })
      .catch((error) => {
        console.error("Errore:", error);
        alert("Errore nell'invio del messaggio.");
      });
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans selection:bg-blue-500/30">
      
      {/* BACKGROUND ACCENTS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[100px]" />
      </div>

      {/* NAVBAR */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-md border-b border-gray-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection('home')}>
            FA<span className="text-blue-500">.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['about', 'skills', 'experience', 'contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors capitalize"
              >
                {t.nav[item as keyof typeof t.nav]}
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
              <a href='/CV.pdf'>{t.nav.downloadCv}</a>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 border-b border-gray-800 p-6 flex flex-col gap-4 shadow-xl">
            {['about', 'skills', 'experience', 'contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-left text-lg font-medium text-gray-300 hover:text-white capitalize"
              >
                {t.nav[item as keyof typeof t.nav]}
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

      {/* HERO SECTION */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 relative">
        <div className="container mx-auto text-center md:text-left max-w-5xl">
          <p className="text-blue-400 font-mono mb-4 animate-fade-in-up">{t.hero.greeting}</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight animate-fade-in-up delay-100">
            Federico Aniello<span className="text-blue-500">.</span>
            <br />
            <span className="text-gray-400 text-4xl md:text-6xl">{t.hero.role}</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed animate-fade-in-up delay-200">
            {t.hero.description}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start animate-fade-in-up delay-300">
            <button onClick={() => scrollToSection('skills')} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              {t.hero.cta_primary}
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-all border border-gray-700">
              {t.hero.cta_secondary}
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT & SKILLS */}
      <section id="skills" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* About Text */}
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

            {/* Skills Grid */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                 {t.skills.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <SkillCard 
                  icon={Layers} 
                  title="Vue.js / Nuxt" 
                  level="Advanced - 3 Years" 
                  color="bg-green-500" 
                />
                <SkillCard 
                  icon={Layout} 
                  title="Angular" 
                  level="Advanced - 2 Years" 
                  color="bg-red-500" 
                />
                <SkillCard 
                  icon={Code2} 
                  title="React / Next.js" 
                  level="Intermediate" 
                  color="bg-blue-500" 
                />
                <SkillCard 
                  icon={Zap} 
                  title="Tailwind & TS" 
                  level="Expert" 
                  color="bg-yellow-500" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.experience.title}</h2>
            <p className="text-gray-400">{t.experience.subtitle}</p>
          </div>

          <div className="space-y-2">
            {t.experience.jobs.map((job, index) => (
              <ExperienceItem 
                key={index} 
                {...job} 
                isLast={index === t.experience.jobs.length - 1} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 md:p-12 backdrop-blur-sm shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Contact Info */}
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

              {/* Form */}
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="contact" />
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">{t.contact.nameLabel}</label>
                  <input type="text" id="name" name="name" required className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">{t.contact.emailLabel}</label>
                  <input type="email" id="email" name="email" required className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">{t.contact.messageLabel}</label>
                  <textarea id="message" name="message" rows={4} required className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"></textarea>
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 mt-2">
                  <Send size={18} />
                  {t.contact.sendButton}
                </button>

                {formStatus === 'success' && (
                  <div className="text-green-400 text-sm text-center mt-2 bg-green-900/20 py-2 rounded border border-green-800 animate-pulse">
                    {t.contact.successMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Federico Aniello. Built with Next.js, Tailwind & React.
        </p>
      </footer>
    </div>
  );
}