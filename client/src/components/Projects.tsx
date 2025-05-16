import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';

import RoboticHandImg from '@assets/ROBOTCSI.jpg';
import HomeAutomationImg from '@assets/HomeAutomation.jpg';
import SoftwareDevImg from '@assets/PLP.webp';
import CybersecurityImg from '@assets/cybersecurity.jpg';
import AIImg from '@assets/AI2.webp';
import ThreeDImg from '@assets/3D.png';

type ProjectCategory = 'all' | 'robotics' | 'automation' | 'software';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: Exclude<ProjectCategory, 'all'>;
  period: string;
  details: string;
  technologies: string[];
  longDescription?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Robotic Hand Using Nitinol',
    description: 'Designed and developed a functional robotic hand prototype with electronic control system using Nitinol wire technology.',
    image: RoboticHandImg,
    category: 'robotics',
    period: 'ENIT, 2024-2025',
    details: '#',
    technologies: ['Arduino', 'Nitinol', 'Servo Motors', '3D Printing'],
    longDescription: 'Designed and constructed a robotic hand prototype using Nitinol wire that mimics human hand movements with precision. The system integrates servo motors, Arduino microcontrollers, and custom-designed 3D-printed components to create a lightweight, responsive robotic appendage capable of delicate movements for various industrial and medical applications.'
  },
  {
    id: 2,
    title: 'Bluetooth Home Automation',
    description: 'Smart home system integrating IoT devices for lighting, heating, security and entertainment with energy efficiency optimization.',
    image: HomeAutomationImg,
    category: 'automation',
    period: 'TUK, 2023-2024',
    details: '#',
    technologies: ['Bluetooth Module', 'Arduino', 'Mobile App', 'Relay Control'],
    longDescription: 'Developed a comprehensive home automation system allowing users to control household appliances via Bluetooth connection. The system includes features for scheduling, remote control, and energy usage monitoring, reducing household energy consumption by up to 30%. Integration with mobile applications provides a user-friendly interface for managing all connected devices.'
  },
  {
    id: 3,
    title: 'PLP Software Engineering',
    description: 'Mobile application development leveraging modern frameworks and APIs for industrial control systems integration.',
    image: SoftwareDevImg,
    category: 'software',
    period: 'Power Learn Project, 2023',
    details: '#',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'RESTful APIs'],
    longDescription: 'Created a mobile application that interfaces with industrial control systems, providing remote monitoring and control capabilities. The application includes real-time data visualization, alert systems, and comprehensive logging for industrial processes, significantly enhancing operational efficiency and reducing response time to critical events.'
  },
  {
    id: 4,
    title: 'Cybersecurity Assessment Tool',
    description: 'Developed a security assessment tool for identifying network vulnerabilities and providing remediation recommendations.',
    image: CybersecurityImg,
    category: 'software',
    period: 'Independent Project, 2023',
    details: '#',
    technologies: ['Python', 'Network Security', 'Penetration Testing', 'Web Security'],
    longDescription: 'Created a comprehensive security assessment tool that analyzes network configurations, identifies potential vulnerabilities, and generates detailed reports with prioritized remediation steps. The tool incorporates industry-standard security protocols and can be customized to meet the unique security requirements of different organizations.'
  },
  {
    id: 5,
    title: 'AI-Based Energy Optimization',
    description: 'Machine learning system for predicting and optimizing energy usage in industrial environments.',
    image: AIImg,
    category: 'automation',
    period: 'Research Project, 2024',
    details: '#',
    technologies: ['Machine Learning', 'Python', 'TensorFlow', 'Energy Management'],
    longDescription: 'Implemented a machine learning system that analyzes patterns in industrial energy consumption and automatically adjusts equipment settings to optimize efficiency. The system integrates with existing industrial control systems and has demonstrated energy savings of up to 25% in pilot implementations.'
  },
  {
    id: 6,
    title: '3D Printed Prosthetic Components',
    description: 'Designed cost-effective prosthetic components using 3D printing technology for accessibility.',
    image: ThreeDImg,
    category: 'robotics',
    period: 'Volunteer Project, 2023',
    details: '#',
    technologies: ['3D Modeling', 'Prosthetics Design', 'Material Science', 'Biomedical Engineering'],
    longDescription: 'Designed and produced low-cost prosthetic components using advanced 3D printing techniques and biocompatible materials. The project focuses on creating affordable, customizable prosthetic solutions for individuals with limited access to traditional medical resources. The designs are open-source and have been implemented in community health initiatives.'
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

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
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal"
          >
            {filteredProjects.map(project => (
              <motion.div 
                key={project.id}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="project-card shadow-lg rounded-lg overflow-hidden"
              >
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 2).map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded-full">
                        +{project.technologies.length - 2} more
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{project.period}</span>
                    <Button 
                      variant="ghost" 
                      className="text-primary hover:text-secondary transition-colors p-0"
                      onClick={() => openProjectDetails(project)}
                    >
                      View Details <FontAwesomeIcon icon="arrow-right" className="ml-1" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        <div className="text-center mt-12 reveal">
          <Button asChild variant="default" className="bg-primary hover:bg-secondary text-white">
            <a href="#" className="inline-flex items-center">
              View All Projects <FontAwesomeIcon icon="arrow-right" className="ml-2" />
            </a>
          </Button>
        </div>
      </div>

      {/* Project Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-gray-500">{selectedProject.period}</DialogDescription>
              </DialogHeader>
              
              <div className="mt-4">
                <div className="rounded-lg overflow-hidden mb-6">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-gray-700 mb-6">{selectedProject.longDescription}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <DialogFooter>
                <Button onClick={() => setIsModalOpen(false)} className="mr-2">
                  Close
                </Button>
                <Button asChild variant="default" className="bg-primary hover:bg-secondary text-white">
                  <a href={selectedProject.details} target="_blank" rel="noopener noreferrer">
                    Project Link <FontAwesomeIcon icon="arrow-right" className="ml-2" />
                  </a>
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
