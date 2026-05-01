'use client';

import { useTranslations } from 'next-intl';

const skills = [
  { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
];

export default function Skills() {
  const t = useTranslations('Skills');

  return (
    <section id="skills" className="relative py-24 bg-gray-900 border-t border-gray-800">
      <div className="absolute left-0 top-1/2 -ml-20 -mt-20 w-80 h-80 bg-emerald-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-16 drop-shadow-sm">
          {t('title')}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center p-6 bg-gray-800/30 backdrop-blur-md rounded-2xl border border-gray-700/50 justify-center transition-all duration-300 transform hover:-translate-y-2 hover:bg-gray-800/80 shadow-lg hover:shadow-emerald-500/20 cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="h-14 w-14 mb-4 filter drop-shadow-md group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-gray-300 font-semibold tracking-wide group-hover:text-emerald-400 transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}