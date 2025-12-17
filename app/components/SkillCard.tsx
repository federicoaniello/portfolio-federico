import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SkillCard = ({ icon: Icon, title, level, color }: { icon: IconDefinition, title: string, level: string, color: string }) => (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] group">
        <div className={`p-3 rounded-lg w-fit mb-4 ${color} bg-opacity-20`}>
            <FontAwesomeIcon size={'lg'} icon={Icon} className={color.replace('bg-', 'text-white')} />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{level}</p>
    </div>
);

export default SkillCard;