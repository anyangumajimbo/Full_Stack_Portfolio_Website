import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@/components/ui/button';

export default function About() {
  const revealRef = useRef<HTMLDivElement>(null);

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

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal" ref={revealRef}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Learn more about my background, education, and professional journey in electrical and electronic engineering.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center reveal">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Engineering workspace with electronic components" 
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-semibold mb-4">Committed to Innovation</h3>
            <p className="text-gray-700 mb-4">
              I am a passionate Electrical and Electronic Engineer with a focus on control and automation. 
              My professional journey combines technical expertise with creative problem-solving to develop 
              innovative solutions.
            </p>
            
            <p className="text-gray-700 mb-6">
              With experience in ICT systems installation, structural cabling, and electronic control systems, 
              I bring practical skills to every project I undertake. My academic background from the Technical 
              University of Kenya and École Nationale D'Ingénieurs De Tarbes has provided me with a solid 
              foundation in engineering principles.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="font-semibold">Name:</p>
                <p className="text-gray-600">Majimbo Anyangu Mukhutsi</p>
              </div>
              <div>
                <p className="font-semibold">Age:</p>
                <p className="text-gray-600">24 years</p>
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <p className="text-gray-600">majimboanyangu50@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold">Location:</p>
                <p className="text-gray-600">Nairobi, Kenya</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="default" className="bg-primary hover:bg-secondary text-white">
                <a href="#contact" className="inline-flex items-center">
                  <FontAwesomeIcon icon="envelope" className="mr-2" /> Contact Me
                </a>
              </Button>
              <Button asChild variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                <a href="/attached_assets/MAJIMBOCV.pdf" download className="inline-flex items-center">
                  <FontAwesomeIcon icon="file-download" className="mr-2" /> Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
