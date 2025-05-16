import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface Skill {
  name: string;
  percentage: number;
}

interface SkillCard {
  icon: any;
  title: string;
  description: string;
}

const technicalSkills: Skill[] = [
  { name: 'Electrical Circuit Design', percentage: 90 },
  { name: 'Automation & Control Systems', percentage: 85 },
  { name: 'ICT Systems Installation', percentage: 80 },
  { name: 'Structural Cabling', percentage: 85 },
  { name: 'Robotics', percentage: 75 },
];

const professionalSkills: Skill[] = [
  { name: 'Problem Solving', percentage: 95 },
  { name: 'Project Management', percentage: 80 },
  { name: 'Team Collaboration', percentage: 90 },
  { name: 'Communication', percentage: 85 },
  { name: 'Adaptability', percentage: 90 },
];

const skillCards: SkillCard[] = [
  { 
    icon: 'laptop-code', 
    title: 'Software Tools', 
    description: 'Microsoft Office, AutoCAD, Google Sheets' 
  },
  { 
    icon: 'language', 
    title: 'Languages', 
    description: 'English, French, Kiswahili' 
  },
  { 
    icon: 'lightbulb', 
    title: 'Innovation', 
    description: 'Creative solutions for complex engineering problems' 
  },
  { 
    icon: 'user-tie', 
    title: 'Professional', 
    description: 'IEEE Member with a focus on continuous learning' 
  },
];

export default function Skills() {
  const skillsSectionRef = useRef<HTMLElement>(null);
  const revealRefs = useRef<HTMLDivElement[]>([]);
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [skillType, setSkillType] = useState<'technical' | 'professional'>('technical');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Animation for progress bars
  useEffect(() => {
    const animateProgressBars = () => {
      const progressBars = document.querySelectorAll('.progress-bar-fill');
      progressBars.forEach(bar => {
        const targetWidth = (bar as HTMLElement).dataset.percentage || '0';
        (bar as HTMLElement).style.width = '0%';
        
        setTimeout(() => {
          (bar as HTMLElement).style.width = `${targetWidth}%`;
        }, 300);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateProgressBars();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (skillsSectionRef.current) {
      observer.observe(skillsSectionRef.current);
    }

    return () => {
      if (skillsSectionRef.current) {
        observer.unobserve(skillsSectionRef.current);
      }
    };
  }, [skillType]);

  // Handle skill click to show detailed information
  const handleSkillClick = (index: number) => {
    setActiveSkill(activeSkill === index ? null : index);
  };

  const currentSkills = skillType === 'technical' ? technicalSkills : professionalSkills;

  return (
    <section id="skills" className="py-20 bg-gray-50" ref={skillsSectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            A showcase of my technical abilities and professional competencies in electrical and electronic engineering.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-200 rounded-lg p-1">
            <Button 
              onClick={() => setSkillType('technical')}
              className={`px-4 py-2 rounded-md transition-all ${
                skillType === 'technical' 
                  ? 'bg-primary text-white' 
                  : 'bg-transparent text-gray-700 hover:bg-gray-300'
              }`}
            >
              Technical Skills
            </Button>
            <Button 
              onClick={() => setSkillType('professional')}
              className={`px-4 py-2 rounded-md transition-all ${
                skillType === 'professional' 
                  ? 'bg-primary text-white' 
                  : 'bg-transparent text-gray-700 hover:bg-gray-300'
              }`}
            >
              Professional Skills
            </Button>
          </div>
        </div>
        
        <div className="mb-16 reveal">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6"
          >
            {currentSkills.map((skill, index) => (
              <div 
                className="mb-6 cursor-pointer" 
                key={index}
                onClick={() => handleSkillClick(index)}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="progress-bar relative">
                  <div 
                    className="progress-bar-fill transition-all duration-1000 ease-out" 
                    data-percentage={skill.percentage}
                    style={{ width: '0%' }}
                  ></div>
                  {/* Pulsing dot at the end of progress bar */}
                  <div 
                    className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent animate-pulse"
                    style={{ left: `${skill.percentage}%` }}
                  ></div>
                </div>
                
                {/* Expandable skill details */}
                {activeSkill === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 p-4 bg-white rounded-md shadow-md"
                  >
                    <p className="text-gray-700">
                      {skillType === 'technical'
                        ? `Advanced ${skill.percentage}% proficiency in ${skill.name}, with practical experience in professional engineering settings.`
                        : `${skill.percentage}% developed ${skill.name} skills through collaborative projects and real-world applications.`
                      }
                    </p>
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
          {skillCards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card className="bg-white shadow-md h-full">
                <CardContent className="p-6 text-center flex flex-col items-center justify-center h-full">
                  <div className="text-4xl text-primary mb-4">
                    <FontAwesomeIcon icon={card.icon} className="transform transition-transform duration-300 group-hover:rotate-12" />
                  </div>
                  <h4 className="font-semibold mb-2">{card.title}</h4>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
