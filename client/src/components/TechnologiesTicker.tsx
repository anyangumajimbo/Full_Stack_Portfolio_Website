import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Technology {
  icon: IconProp;
  name: string;
  color: string;
}

const technologies: Technology[] = [
  { icon: ['fab', 'html5'], name: 'HTML5', color: 'text-orange-500' },
  { icon: ['fab', 'css3-alt'], name: 'CSS3', color: 'text-blue-500' },
  { icon: ['fab', 'js'], name: 'JavaScript', color: 'text-yellow-500' },
  { icon: ['fab', 'python'], name: 'Python', color: 'text-blue-600' },
  { icon: ['fab', 'react'], name: 'React', color: 'text-blue-400' },
  { icon: 'microchip', name: 'Circuit Design', color: 'text-gray-600' },
  { icon: 'robot', name: 'Robotics', color: 'text-accent' },
  { icon: 'cogs', name: 'Automation', color: 'text-secondary' }
];

export default function TechnologiesTicker() {
  return (
    <div className="bg-gray-100 py-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="relative">
          <div className="languages-ticker flex items-center">
            <div className="flex items-center space-x-10 pr-10">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={tech.icon} className={`text-3xl ${tech.color}`} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
            
            {/* Duplicate for smooth infinite animation */}
            <div className="flex items-center space-x-10 pr-10">
              {technologies.map((tech, index) => (
                <div key={`dup-${index}`} className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={tech.icon} className={`text-3xl ${tech.color}`} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
