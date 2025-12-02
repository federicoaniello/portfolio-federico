import MainPage from "./components/MainPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Portfolio di Federico Aniello',
  description: "Benvenuti nel portfolio di Federico Aniello. Uno sviluppatore Front-end appassionato con base in Italia, che crea esperienze digitali pixel-perfect, coinvolgenti e accessibili.",
};

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
          desc: `
          • Refactoring componenti da JavaScript/jQuery/Razor a Vue.js con TypeScript
          • Sviluppo progetto micro-frontend per testing componenti Vue
          • Riscrittura componenti cruciali in Vue.js e VueX per E-Commerce
          • Aggiornamento framework CSS da Bootstrap 3 a 5`
        },
        {
          role: "Front-end Developer",
          company: "Exprivia S.p.A.",
          period: "2021 - 2023",
          desc: `• Sviluppo pagine web per Plenitude usando Angular e TypeScript
• Manutenzione e aggiornamento sito Mooney S.p.A. da Angular 8 a 15
• Migrazione app mobile Mooney da Ionic 3 a 6
• Sviluppo componenti con GSAP e ScrollTrigger per ENI Plenitude`
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


export default function Home() {

  return (
    <MainPage DATA={DATA} TRANSLATIONS={TRANSLATIONS} />
  );
}
