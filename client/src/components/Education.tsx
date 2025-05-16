import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardContent } from '@/components/ui/card';

import TUKImage from '@assets/TUK.webp';
import ENITImage from '@assets/Enit.webp';

interface Education {
  period: string;
  title: string;
  institution: string;
  description: string;
}

interface Experience {
  period: string;
  title: string;
  company: string;
  responsibilities: string[];
}

interface Institution {
  name: string;
  logo: string;
}

const educationItems: Education[] = [
  {
    period: '2024 - 2025',
    title: 'Exchange Program in General Engineering',
    institution: 'École Nationale D\'Ingénieurs De Tarbes (ENIT)',
    description: 'Specialized in Integrated Systems Design with focus on industrial systems design and project management.'
  },
  {
    period: '2020 - 2024',
    title: 'Bachelor of Technology in Electrical and Electronic Engineering',
    institution: 'Technical University of Kenya (TUK)',
    description: 'Specialized in Control and Automation Engineering with skills in circuit design, electrical installation, and industrial wiring.'
  }
];

const experienceItems: Experience[] = [
  {
    period: 'March 2024 - August 2024',
    title: 'Technicien',
    company: 'Salto Limited, Nairobi, Kenya',
    responsibilities: [
      'Installed and configured ICT systems on construction sites',
      'Conducted structural cabling with safety and quality standards compliance',
      'Collaborated with teams to meet project timelines',
      'Optimized system layouts for improved efficiency'
    ]
  },
  {
    period: '2023 - Present',
    title: 'Project Engineering',
    company: 'Various Engineering Projects',
    responsibilities: [
      'Designed robotic hand using Nitinol technology',
      'Developed smart home automation systems',
      'Created electronic control systems for robotics',
      'Applied automation and control principles to optimize energy efficiency'
    ]
  }
];

const institutions: Institution[] = [
  {
    name: 'Technical University of Kenya',
    logo: TUKImage
  },
  {
    name: 'École Nationale D\'Ingénieurs De Tarbes',
    logo: ENITImage
  },
  {
    name: 'Salto Limited',
    logo: ''
  }
];

export default function Education() {
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
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Experience</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            My academic journey and professional experience in the field of electrical and electronic engineering.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <FontAwesomeIcon icon="graduation-cap" className="text-primary mr-3" /> Education
            </h3>
            
            <div className="relative pl-8 border-l-2 border-primary">
              {educationItems.map((item, index) => (
                <div className="mb-10 relative" key={index}>
                  <div className="absolute -left-10 top-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-md text-sm font-medium mb-2">
                      {item.period}
                    </span>
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-600 mb-2">{item.institution}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <FontAwesomeIcon icon="briefcase" className="text-primary mr-3" /> Experience
            </h3>
            
            <div className="relative pl-8 border-l-2 border-primary">
              {experienceItems.map((item, index) => (
                <div className="mb-10 relative" key={index}>
                  <div className="absolute -left-10 top-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-md text-sm font-medium mb-2">
                      {item.period}
                    </span>
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-600 mb-2">{item.company}</p>
                    <ul className="text-gray-600 list-disc ml-5">
                      {item.responsibilities.map((responsibility, idx) => (
                        <li key={idx}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center mt-16 space-y-6 md:space-y-0 md:space-x-8 reveal">
          {institutions.map((institution, index) => (
            <Card key={index} className="bg-white shadow-md flex flex-col items-center w-64 card-hover">
              <CardContent className="p-4 flex flex-col items-center">
                {institution.logo ? (
                  <img 
                    src={institution.logo} 
                    alt={institution.name} 
                    className="h-20 object-contain mb-4"
                  />
                ) : (
                  <div className="h-20 flex items-center justify-center mb-4">
                    <FontAwesomeIcon icon="building" className="text-primary text-5xl" />
                  </div>
                )}
                <h4 className="font-semibold text-center">{institution.name}</h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
