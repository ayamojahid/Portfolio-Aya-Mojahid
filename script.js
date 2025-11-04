// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Loading Animation
window.addEventListener('load', function() {
  const loadingBar = document.getElementById('loadingBar');
  gsap.to(loadingBar, {
    scaleX: 1,
    duration: 0.5,
    onComplete: () => {
      gsap.to(loadingBar, {
        scaleX: 0,
        duration: 0.3,
        delay: 0.2
      });
    }
  });
});

// Custom Cursor
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  
  setTimeout(() => {
    cursorFollower.style.left = e.clientX + 'px';
    cursorFollower.style.top = e.clientY + 'px';
  }, 100);
});

// Mobile Menu Functionality
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('open');
  // Empêcher le défilement du body quand le menu est ouvert
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.remove('open');
  document.body.style.overflow = ''; // Réactiver le défilement
}

// Attacher les événements après le chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const closeMobileMenuButton = document.getElementById('closeMobileMenu');
  
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', toggleMobileMenu);
  }
  
  if (closeMobileMenuButton) {
    closeMobileMenuButton.addEventListener('click', closeMobileMenu);
  }
});

// Initialize particles
particlesJS('particles-js', {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 800 } },
    color: { value: "#8b5cf6" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#0ea5e9",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    }
  }
});

// Typing Animation
const typed = new Typed('#typed', {
  strings: ['Développeuse Web', 'Designer UI/UX', 'Créative', 'Passionnée'],
  typeSpeed: 60,
  backSpeed: 40,
  backDelay: 2000,
  loop: true
});

// Theme Toggle - CORRECTION
document.getElementById('theme').addEventListener('click', function() {
  const body = document.body;
  const icon = this.querySelector('i');
  
  if (body.classList.contains('dark-mode')) {
    body.classList.replace('dark-mode', 'light-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
    icon.style.color = ''; // Reset color
    icon.classList.add('text-yellow-400');
  } else {
    body.classList.replace('light-mode', 'dark-mode');
    icon.classList.replace('fa-sun', 'fa-moon');
    icon.style.color = ''; // Reset color
    icon.classList.add('text-purple-400');
  }
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 300) {
    backToTop.style.opacity = '1';
  } else {
    backToTop.style.opacity = '0';
  }
});

backToTop.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Progress Bar
const progress = document.getElementById('progress');

window.addEventListener('scroll', function() {
  const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  progress.style.width = pct + '%';
});

// GSAP Animations
window.addEventListener('load', function() {
  if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Hero animations
    gsap.from('#home h1', { 
      y: 50, 
      opacity: 0, 
      duration: 1, 
      ease: 'power3.out' 
    });
    
    gsap.from('#home p', { 
      y: 30, 
      opacity: 0, 
      duration: 1, 
      delay: 0.3,
      stagger: 0.2 
    });

    // Tech logos animation
    gsap.from('.tech-logo', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      delay: 1
    });

    // Section animations
    gsap.utils.toArray('section').forEach(section => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // Card animations
    gsap.utils.toArray('.card-3d').forEach(card => {
      gsap.from(card, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      closeMobileMenu();
      gsap.to(window, { 
        duration: 1, 
        scrollTo: { 
          y: target, 
          offsetY: 80 
        },
        ease: 'power2.inOut'
      });
    }
  });
});

// Skill bar animations
const skillBars = document.querySelectorAll('.skill-bar');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const width = entry.target.style.width;
      entry.target.style.width = '0%';
      setTimeout(() => {
        entry.target.style.width = width;
      }, 300);
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => observer.observe(bar));



// Validation du formulaire
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    const inputs = this.querySelectorAll('input[required], textarea[required]');
    
    // Reset des messages d'erreur
    this.querySelectorAll('.error-message').forEach(error => error.classList.add('hidden'));
    
    // Validation de chaque champ
    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.nextElementSibling.classList.remove('hidden');
        input.classList.add('border-red-500');
      } else {
        input.classList.remove('border-red-500');
      }
    });
    
    // Validation spécifique pour l'email
    const emailInput = document.getElementById('email');
    const emailError = emailInput.nextElementSibling;
    if (emailInput.value && !isValidEmail(emailInput.value)) {
      isValid = false;
      emailError.textContent = 'Veuillez entrer un email valide';
      emailError.classList.remove('hidden');
      emailInput.classList.add('border-red-500');
    }
    
    if (isValid) {
      // Ici vous ajouterez le code pour envoyer le formulaire
      // Par exemple avec EmailJS, Fetch API, etc.
      alert('Formulaire validé ! Envoi en cours...');
      // this.submit(); // Décommentez cette ligne pour l'envoi réel
    }
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Validation en temps réel
  document.querySelectorAll('#contact-form input, #contact-form textarea').forEach(input => {
    input.addEventListener('input', function() {
      if (this.value.trim()) {
        this.classList.remove('border-red-500');
        this.nextElementSibling.classList.add('hidden');
      }
    });
  });

/// EmailJS Contact Form - CORRECTED VERSION
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser EmailJS avec votre Public Key
    emailjs.init("ELnwHerUFAw0VXkId");
    
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Envoi en cours...';
            submitBtn.disabled = true;
            
            // CORRECTION : Utiliser les mêmes noms que dans le template
            const templateParams = {
                name: document.getElementById('name').value,        // Doit correspondre à {{name}}
                email: document.getElementById('email').value,      // Doit correspondre à {{email}}
                subject: document.getElementById('subject').value,  // Doit correspondre à {{subject}}
                message: document.getElementById('message').value,  // Doit correspondre à {{message}}
                date: new Date().toLocaleString('fr-FR')           // Doit correspondre à {{date}}
            };
            
            console.log('Envoi des données:', templateParams);
            
            // Envoyer l'email avec le BON Service ID
            emailjs.send('service_d6jd3dh', 'template_2hbqjba', templateParams)
                .then(function(response) {
                    console.log('SUCCÈS!', response);
                    submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i>Message envoyé !';
                    contactForm.reset();
                    
                    setTimeout(() => {
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                    }, 3000);
                    
                }, function(error) {
                    console.log('ERREUR:', error);
                    submitBtn.innerHTML = '<i class="fas fa-exclamation-triangle mr-2"></i>Erreur, réessayez';
                    
                    setTimeout(() => {
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                    }, 3000);
                });
        });
    }
});