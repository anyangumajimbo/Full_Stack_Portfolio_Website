import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@/components/ui/button';

import RoboticHandImg from '@assets/ROBOTCSI.jpg';
import HomeAutomationImg from '@assets/HomeAutomation.jpg';
import SoftwareDevImg from '@assets/PLP.webp';

type ProjectCategory = 'all' | 'robotics' | 'automation' | 'software';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: Exclude<ProjectCategory, 'all'>;
  period: string;
  details: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Robotic Hand Using Nitinol',
    description: 'Designed and developed a functional robotic hand prototype with electronic control system using Nitinol wire technology.',
    image: RoboticHandImg,
    category: 'robotics',
    period: 'ENIT, 2024-2025',
    details: '#'
  },
  {
    id: 2,
    title: 'Bluetooth Home Automation',
    description: 'Smart home system integrating IoT devices for lighting, heating, security and entertainment with energy efficiency optimization.',
    image: HomeAutomationImg,
    category: 'automation',
    period: 'TUK, 2023-2024',
    details: '#'
  },
  {
    id: 3,
    title: 'PLP Software Engineering',
    description: 'Mobile application development leveraging modern frameworks and APIs for industrial control systems integration.',
    image: SoftwareDevImg,
    category: 'software',
    period: 'Power Learn Project, 2023',
    details: '#'
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const revealRef = useRef<HTMLDivElement>(null);

  // Filter projects based on selected category
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  // Reveal animations on scroll
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

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            A selection of my engineering projects showcasing technical expertise and innovation.
          </p>
        </div>
        
        <div className="flex justify-center mb-8 reveal">
          <div className="inline-flex flex-wrap justify-center gap-2">
            {(['all', 'robotics', 'automation', 'software'] as const).map((category) => (
              <Button
                key={category}
                onClick={() => setActiveFilter(category)}
                variant={activeFilter === category ? 'default' : 'secondary'}
                className={
                  activeFilter === category 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-200 text-foreground hover:bg-primary hover:text-white'
                }
              >
                {category === 'all' ? 'All Projects' : category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="project-card shadow-lg rounded-lg overflow-hidden card-hover"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <span className="bg-accent px-2 py-1 text-sm rounded-md">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{project.period}</span>
                  <a href={project.details} className="text-primary hover:text-secondary transition-colors">
                    View Details <FontAwesomeIcon icon="arrow-right" className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal">
          <Button asChild variant="default" className="bg-primary hover:bg-secondary text-white">
            <a href="#" className="inline-flex items-center">
              View All Projects <FontAwesomeIcon icon="arrow-right" className="ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
