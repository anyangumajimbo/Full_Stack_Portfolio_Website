/**
 * Handles reveal animations on scroll
 */
export function animateOnScroll() {
  const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  };

  // Run once on initialization
  reveal();
  
  // Add scroll event listener
  window.addEventListener('scroll', reveal);
  
  // Animate progress bars when skills section is visible
  const skillsSection = document.getElementById('skills');
  
  if (skillsSection) {
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
    
    observer.observe(skillsSection);
  }

  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', reveal);
  };
}

/**
 * Animates progress bars in skills section
 */
export function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress-bar-fill');
  
  progressBars.forEach(bar => {
    const width = (bar as HTMLElement).dataset.percentage || '0';
    (bar as HTMLElement).style.width = '0%';
    
    setTimeout(() => {
      (bar as HTMLElement).style.width = `${width}%`;
    }, 300);
  });
}
