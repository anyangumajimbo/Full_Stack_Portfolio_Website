import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface NavLink {
  name: string;
  href: string;
}

interface SocialLink {
  icon: ['fab', string];
  url: string;
}

const navLinks: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks: SocialLink[] = [
  { icon: ['fab', 'linkedin-in'], url: '#' },
  { icon: ['fab', 'twitter'], url: '#' },
  { icon: ['fab', 'github'], url: '#' },
  { icon: ['fab', 'facebook-f'], url: '#' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Majimbo Anyangu</h2>
            <p className="text-gray-400">Electrical & Electronic Engineer</p>
          </div>
          
          <div className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors"
                  aria-label={`Follow on ${social.icon[1]}`}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; {currentYear} Majimbo Anyangu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
