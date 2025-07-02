import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faLaptopCode, faLanguage, faLightbulb, faUserTie, faEnvelope, faFileDownload, 
  faGraduationCap, faBriefcase, faMapMarkerAlt, faPhoneAlt, faGlobe, faBars, 
  faArrowRight, faMicrochip, faRobot, faCogs, faBuilding, faUserGraduate,
  faTools, faDesktop, faNetworkWired, faShieldAlt, faDatabase, faClipboardCheck,
  faCode, faServer, faBrain, faChartLine
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedinIn, faTwitter, faGithub, faFacebookF, 
  faHtml5, faCss3Alt, faJs, faPython, faReact, faNode, faAngular,
  faAws, faDocker, faNpm
} from '@fortawesome/free-brands-svg-icons';

// Add icons to the library
library.add(
  faLaptopCode, faLanguage, faLightbulb, faUserTie, faEnvelope, faFileDownload,
  faGraduationCap, faBriefcase, faMapMarkerAlt, faPhoneAlt, faGlobe, faBars,
  faArrowRight, faMicrochip, faRobot, faCogs, faBuilding, faUserGraduate,
  faTools, faDesktop, faNetworkWired, faShieldAlt, faDatabase, faClipboardCheck,
  faCode, faServer, faBrain, faChartLine,
  faLinkedinIn, faTwitter, faGithub, faFacebookF,
  faHtml5, faCss3Alt, faJs, faPython, faReact, faNode, faAngular,
  faAws, faDocker, faNpm
);

createRoot(document.getElementById("root")!).render(<App />);
