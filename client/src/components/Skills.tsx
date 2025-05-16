import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardContent } from '@/components/ui/card';

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
  }, []);

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 reveal">
          <div>
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            
            {technicalSkills.map((skill, index) => (
              <div className="mb-6" key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-bar-fill" 
                    data-percentage={skill.percentage}
                    style={{ width: '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Professional Skills</h3>
            
            {professionalSkills.map((skill, index) => (
              <div className="mb-6" key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-bar-fill" 
                    data-percentage={skill.percentage}
                    style={{ width: '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
          {skillCards.map((card, index) => (
            <Card key={index} className="bg-white shadow-md card-hover">
              <CardContent className="p-6 text-center">
                <div className="text-4xl text-primary mb-4">
                  <FontAwesomeIcon icon={card.icon} />
                </div>
                <h4 className="font-semibold mb-2">{card.title}</h4>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
