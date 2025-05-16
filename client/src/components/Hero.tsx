import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@/components/ui/button';
import MajimboImage from '@assets/Majimbo.png';

export default function Hero() {
  return (
    <section id="hero" className="bg-gradient text-white pt-32 pb-20 relative">
      {/* Background pattern with opacity */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="h-full w-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')` 
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <div className="typewriter">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Majimbo Anyangu</h1>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Electrical & Electronic Engineer</h2>
            <p className="text-lg mb-8 max-w-2xl">
              A young professional passionate about emerging trends including Artificial Intelligence, 
              Robotics, and Energy Transition. Committed to leveraging cutting-edge technology to drive 
              innovation and sustainability.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="outline" size="lg" className="bg-white text-primary hover:bg-accent hover:text-white border-none">
                <a href="#contact">
                  Get In Touch
                </a>
              </Button>
              <Button asChild size="lg" className="bg-accent hover:bg-white hover:text-accent text-white border-none">
                <a href="#projects">
                  View Projects
                </a>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src={MajimboImage} 
                alt="Majimbo Anyangu - Electrical & Electronic Engineer" 
                className="w-full h-full object-cover"
              />
            </div>
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
