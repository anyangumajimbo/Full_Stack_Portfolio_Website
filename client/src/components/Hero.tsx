import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import MajimboImage from '@assets/Majimbo.png';
import AI2Image from '@assets/AI2.webp';
import RoboticsImage from '@assets/Robotics.jpg';
import DataImage from '@assets/Data1.webp';

export default function Hero() {
  const [currentBg, setCurrentBg] = useState(0);
  const [typing, setTyping] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const backgroundImages = [
    'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080',
    'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080',
    'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080'
  ];

  const expertiseAreas = [
    { 
      title: 'Artificial Intelligence', 
      icon: ['fas', 'microchip'],
      image: AI2Image,
      description: 'Integrating AI into electronic systems' 
    },
    { 
      title: 'Robotics', 
      icon: ['fas', 'robot'],
      image: RoboticsImage,
      description: 'Building advanced robotic prototypes' 
    },
    { 
      title: 'Data Analytics', 
      icon: ['fas', 'laptop-code'],
      image: DataImage,
      description: 'Analyzing complex system data' 
    }
  ];

  const [activeExpertise, setActiveExpertise] = useState(0);

  // Background rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const fullText = "Majimbo Anyangu";
    let currentIndex = 0;
    
    if (!isTypingComplete) {
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTyping(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTypingComplete(true);
        }
      }, 150);
      
      return () => clearInterval(typingInterval);
    }
  }, [isTypingComplete]);

  // Rotate through expertise areas
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveExpertise((prev) => (prev + 1) % expertiseAreas.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="bg-gradient text-white pt-32 pb-20 relative">
      {/* Background pattern with opacity */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="h-full w-full bg-cover bg-center transition-all duration-1000"
          style={{ 
            backgroundImage: `url('${backgroundImages[currentBg]}')` 
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <div className="typewriter mb-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{typing}
                <span className="inline-block w-1 h-8 bg-accent ml-1 animate-blink"></span>
              </h1>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Electrical & Electronic Engineer</h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mb-8"
            >
              <p className="text-lg max-w-2xl">
                A young professional passionate about emerging trends including Artificial Intelligence, 
                Robotics, and Energy Transition. Committed to leveraging cutting-edge technology to drive 
                innovation and sustainability.
              </p>
            </motion.div>
            
            <div className="flex flex-wrap mb-8 gap-4">
              {expertiseAreas.map((area, index) => (
                <motion.div 
                  key={index}
                  animate={{ 
                    scale: activeExpertise === index ? 1.05 : 1,
                    opacity: activeExpertise === index ? 1 : 0.7,
                  }}
                  className={`px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg cursor-pointer flex items-center gap-2 ${
                    activeExpertise === index ? 'border-2 border-white' : ''
                  }`}
                  onClick={() => setActiveExpertise(index)}
                >
                  <FontAwesomeIcon icon={area.icon} className="text-xl" />
                  <span>{area.title}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="bg-white text-primary hover:bg-accent hover:text-white border-none relative overflow-hidden group"
              >
                <a href="#contact">
                  <span className="relative z-10">Get In Touch</span>
                  <span className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </a>
              </Button>
              <Button 
                asChild 
                size="lg" 
                className="bg-accent hover:bg-white hover:text-accent text-white border-none relative overflow-hidden group"
              >
                <a href="#projects">
                  <span className="relative z-10">View Projects</span>
                  <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </a>
              </Button>
            </motion.div>
          </div>
          
          <div className="md:w-1/3 flex justify-center relative">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
              className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg relative"
            >
              <img 
                src={MajimboImage} 
                alt="Majimbo Anyangu - Electrical & Electronic Engineer" 
                className="w-full h-full object-cover"
              />
              
              {/* Floating expertise image */}
              <motion.div 
                initial={{ x: 50, y: 50, opacity: 0 }}
                animate={{ 
                  x: [50, 70, 50], 
                  y: [50, 30, 50], 
                  opacity: 1,
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute -right-16 -bottom-10 w-24 h-24 rounded-lg overflow-hidden border-2 border-white shadow-lg"
                key={activeExpertise}
              >
                <img 
                  src={expertiseAreas[activeExpertise].image} 
                  alt={expertiseAreas[activeExpertise].title} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Wave SVG at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="w-full h-20 fill-current text-background" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
}
