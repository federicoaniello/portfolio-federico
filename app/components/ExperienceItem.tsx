import React from 'react';

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

export default ExperienceItem;