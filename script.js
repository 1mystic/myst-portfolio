
// Loader
setTimeout(() => {
    const loaderContainer = document.querySelector('.loader-container');
    const loader = document.querySelector('.loader');
    
    if (loaderContainer && loader) {
        // Add fade-out classes
        loaderContainer.classList.add('fade-out');
        loader.classList.add('fade-out');
        
        // Remove elements after animation completes
        setTimeout(() => {
            loaderContainer.style.display = 'none';
        }, 500);
    }
    
}, 200);

// Enhanced audio autoplay with multiple strategies
document.addEventListener('DOMContentLoaded', function() {
    const bgMusic = document.getElementById('bg-music');
    
    if (bgMusic) {
        bgMusic.volume = 0.05;
        
        // Try autoplay multiple times with increasing delays
        const tryAutoplay = (attempts = 0) => {
            if (attempts >= 50) {
                console.log('Autoplay failed after 5 attempts');
                return;
            }
            
            bgMusic.play().then(() => {
                console.log('Audio autoplay successful on attempt', attempts + 1);
            }).catch(() => {
                console.log('Autoplay attempt', attempts + 1, 'failed');
                setTimeout(() => tryAutoplay(attempts + 1), 2000);
            });
        };
        
        tryAutoplay();
    }

    // Enhanced hero section animations
    const heroTitle = document.querySelector('.hero-title');
    const heroDescription = document.querySelector('.hero-description');
    const heroButtons = document.querySelector('.hero-buttons');
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroTitle.style.transition = 'all 0.8s ease';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 300);
    }
    
    if (heroDescription) {
        heroDescription.style.opacity = '0';
        heroDescription.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroDescription.style.transition = 'all 0.8s ease';
            heroDescription.style.opacity = '1';
            heroDescription.style.transform = 'translateY(0)';
        }, 500);
    }
    
    if (heroButtons) {
        heroButtons.style.opacity = '0';
        heroButtons.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroButtons.style.transition = 'all 0.8s ease';
            heroButtons.style.opacity = '1';
            heroButtons.style.transform = 'translateY(0)';
        }, 600);
    }
    
    if (heroVisual) {
        heroVisual.style.opacity = '0';
        heroVisual.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            heroVisual.style.transition = 'all 1s ease';
            heroVisual.style.opacity = '1';
            heroVisual.style.transform = 'scale(1)';
        }, 800);
    }


    // Typing effect for all CGPA elements - initialize when user scrolls to each element
    const cgpaElements = document.querySelectorAll('.cgpa');
    cgpaElements.forEach(cgpaEl => {
        const originalText = cgpaEl.textContent;
        cgpaEl.textContent = ''; // Clear initially

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter(cgpaEl, originalText, 210); // Faster animation
                    obs.unobserve(cgpaEl); // Only run once per element
                }
            });
        }, { threshold: 0.5 });

        observer.observe(cgpaEl);
    });

    // Skills animation in data visualization
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        setTimeout(() => {
            bar.style.animationDelay = `${index * 0.2}s`;
        }, 1000);
    });

    // Enhanced button interactions
    const buttons = document.querySelectorAll('.btn, .btn-link');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
    });

    // Blog card interactions
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.cursor = 'pointer';
        });
        
        card.addEventListener('click', () => {
            // In a real app, you'd navigate to the blog post
            console.log('Navigate to blog post');
        });
    });

    // Project card interactions
    const projectCards = document.querySelectorAll('.project-card, .featured-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
    });

    // Initialize floating particles
    createFloatingParticles();
});

// Smooth scrolling and active nav link
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

function changeActiveNav() {
    const scrollPosition = window.scrollY + window.innerHeight / 3; // Use 1/3 of viewport height
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        // Check if scroll position is within this section's bounds
        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            currentSection = section.getAttribute('id');
        }
    });
    
    // Update active nav link
    navItems.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', changeActiveNav);

// Project filtering functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        
        // Update active filter button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Filter project cards
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.5s ease-out';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all section elements
const animateSections = document.querySelectorAll('.section');
animateSections.forEach(section => {
    observer.observe(section);
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.9)';
        }
    }
});


// Project Cards Scroll Effect
document.addEventListener('DOMContentLoaded', function() {
    const projectsInner = document.querySelector('.projects-inner');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (!projectsInner) return;
    
    let dragging = false;
    let startX = 0;
    let scrollLeft = 0;
    let velocity = 0;
    let currentIndex = 0;
    
    // Responsive card width calculation
    function getCardWidth() {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 768) return 300; // Mobile
        if (screenWidth <= 920) return 320; // Tablet
        if (screenWidth <= 1280) return 345; // Medium desktop
        return 380; // Large desktop
    }
    
    // Responsive margin calculation
    function getCardMargin() {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 768) return 20;
        if (screenWidth <= 920) return 25;
        if (screenWidth <= 1280) return 25;
        return 30;
    }
    
    // Get total card spacing (width + margin)
    function getCardSpacing() {
        return getCardWidth() + getCardMargin();
    }
    
    // Calculate initial offset based on screen size
    function getInitialOffset() {
        const containerWidth = document.querySelector('.projects-grid').offsetWidth;
        const cardSpacing = getCardSpacing();
        return (containerWidth / 2) - (cardSpacing / 2);
    }
    
    // Update card dimensions and spacing
    function updateCardDimensions() {
        const cardWidth = getCardWidth();
        const cardMargin = getCardMargin();
        
        projectCards.forEach(card => {
            card.style.width = `${cardWidth}px`;
            card.style.marginRight = `${cardMargin}px`;
        });
    }
    
    // Initialize with responsive dimensions
    updateCardDimensions();
    let initialOffset = getInitialOffset();
    let cardSpacing = getCardSpacing();
    
    // Set initial position
    projectsInner.style.transform = `translateX(${initialOffset}px)`;
    
    function updateActiveCard() {
        projectCards.forEach((card, index) => {
            card.classList.remove('active');
            if (index === currentIndex) {
                card.classList.add('active');
            }
        });
    }
    
    function snapToCard() {
        const targetX = initialOffset - (cardSpacing * currentIndex);
        projectsInner.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        projectsInner.style.transform = `translateX(${targetX}px)`;
        
        setTimeout(() => {
            projectsInner.style.transition = 'none';
        }, 500);
        
        updateActiveCard();
    }
    
    // Enhanced drag calculation with responsive values
    function calculateCardTransforms(newTranslateX) {
        projectCards.forEach((card, index) => {
            const cardOffset = Math.abs((newTranslateX - initialOffset + (cardSpacing * index)) / cardSpacing);
            const scale = Math.max(0.75, 1 - (cardOffset * 0.25));
            const opacity = Math.max(0.4, 1 - (cardOffset * 0.6));
            
            // Responsive rotation calculation
            const screenWidth = window.innerWidth;
            const maxRotation = screenWidth <= 768 ? 5 : screenWidth <= 1280 ? 10 : 15;
            const rotation = Math.min(cardOffset * maxRotation, maxRotation);
            
            card.style.transform = `scale(${scale}) rotateY(${rotation}deg)`;
            card.style.opacity = opacity;
        });
    }
    
    // Mouse events with responsive calculations
    projectsInner.addEventListener('mousedown', (e) => {
        dragging = true;
        startX = e.pageX;
        scrollLeft = getCurrentTranslateX();
        projectsInner.classList.add('dragging');
        projectsInner.style.cursor = 'grabbing';
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!dragging) return;
        
        const x = e.pageX;
        const dragSensitivity = window.innerWidth <= 768 ? 1.0 : 1.2;
        const walk = (x - startX) * dragSensitivity;
        const newTranslateX = scrollLeft + walk;
        
        projectsInner.style.transform = `translateX(${newTranslateX}px)`;
        calculateCardTransforms(newTranslateX);
    });
    
    document.addEventListener('mouseup', () => {
        if (!dragging) return;
        
        dragging = false;
        projectsInner.classList.remove('dragging');
        projectsInner.style.cursor = 'grab';
        
        // Calculate which card to snap to
        const currentTranslateX = getCurrentTranslateX();
        const offset = currentTranslateX - initialOffset;
        const newIndex = Math.round(-offset / cardSpacing);
        
        currentIndex = Math.max(0, Math.min(projectCards.length - 1, newIndex));
        
        // Reset card transforms and snap to position
        projectCards.forEach(card => {
            card.style.transform = 'scale(1) rotateY(0deg)';
            card.style.opacity = '1';
        });
        
        snapToCard();
    });
    
    // Touch events with responsive calculations
    let touchStartX = 0;
    
    projectsInner.addEventListener('touchstart', (e) => {
        dragging = true;
        touchStartX = e.touches[0].pageX;
        scrollLeft = getCurrentTranslateX();
        projectsInner.classList.add('dragging');
    });
    
    projectsInner.addEventListener('touchmove', (e) => {
        if (!dragging) return;
        
        const x = e.touches[0].pageX;
        const walk = (x - touchStartX) * 1.0; // Less sensitive for touch
        const newTranslateX = scrollLeft + walk;
        
        projectsInner.style.transform = `translateX(${newTranslateX}px)`;
        calculateCardTransforms(newTranslateX);
        e.preventDefault();
    });
    
    projectsInner.addEventListener('touchend', () => {
        if (!dragging) return;
        
        dragging = false;
        projectsInner.classList.remove('dragging');
        
        const currentTranslateX = getCurrentTranslateX();
        const offset = currentTranslateX - initialOffset;
        const newIndex = Math.round(-offset / cardSpacing);
        
        currentIndex = Math.max(0, Math.min(projectCards.length - 1, newIndex));
        
        // Reset transforms
        projectCards.forEach(card => {
            card.style.transform = 'scale(1) rotateY(0deg)';
            card.style.opacity = '1';
        });
        
        snapToCard();
    });
    
    // Utility function to get current translateX value
    function getCurrentTranslateX() {
        const style = window.getComputedStyle(projectsInner);
        const matrix = style.transform || style.webkitTransform || style.mozTransform;
        
        if (matrix === 'none' || typeof matrix === 'undefined') {
            return 0;
        }
        
        const matrixArray = matrix.match(/matrix.*\((.+)\)/)[1].split(', ');
        return parseFloat(matrixArray[4]) || 0;
    }
    
    // Handle window resize
    window.addEventListener('resize', debounce(() => {
        updateCardDimensions();
        initialOffset = getInitialOffset();
        cardSpacing = getCardSpacing();
        
        // Reset to current position
        const targetX = initialOffset - (cardSpacing * currentIndex);
        projectsInner.style.transform = `translateX(${targetX}px)`;
    }, 250));
    
    // Filter functionality with responsive transitions
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter and animate cards with responsive delays
            projectCards.forEach((card, index) => {
                const shouldShow = filter === 'all' || card.getAttribute('data-category') === filter;
                const delay = window.innerWidth <= 768 ? index * 50 : index * 100;
                
                if (shouldShow) {
                    card.style.display = 'block';
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    
                    setTimeout(() => {
                        card.style.transition = 'all 0.5s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, delay);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
            
            // Reset position
            currentIndex = 0;
            setTimeout(() => {
                snapToCard();
            }, 500);
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            currentIndex--;
            snapToCard();
        } else if (e.key === 'ArrowRight' && currentIndex < projectCards.length - 1) {
            currentIndex++;
            snapToCard();
        }
    });
    
    // Initialize
    updateActiveCard();
});

// Debounce utility function for resize events
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Interactive Certificates Animation
document.addEventListener('DOMContentLoaded', function() {
    const certGrid = document.querySelector('.cert-interactive-grid');
    
    if (!certGrid) return;
    
    const certItems = certGrid.querySelectorAll('li');
    
    const setCertIndex = (event) => {
        const closest = event.target.closest('li');
        if (closest) {
            const index = [...certItems].indexOf(closest);
            const cols = new Array(certGrid.children.length)
                .fill()
                .map((_, i) => {
                    certItems[i].dataset.active = (index === i).toString();
                    return index === i ? '8fr' : '1fr';
                })
                .join(' ');
            certGrid.style.setProperty('grid-template-columns', cols);
        }
    };
    
    const resyncCerts = () => {
        const w = Math.max(
            ...[...certItems].map((i) => {
                return i.offsetWidth;
            })
        );
        certGrid.style.setProperty('--article-width', w);
    };
    
    // Event listeners
    certGrid.addEventListener('focus', setCertIndex, true);
    certGrid.addEventListener('click', setCertIndex);
    certGrid.addEventListener('pointermove', setCertIndex);
    
    // Handle resize
    window.addEventListener('resize', resyncCerts);
    resyncCerts();
    
    // Initialize first item as active
    if (certItems.length > 0) {
        certItems[0].dataset.active = 'true';
    }
});

// jounrey section animations
class BlogSlider {
    constructor(container) {
        this.container = container;
        this.items = container.querySelectorAll('.blog-slider__item');
        this.bullets = container.querySelectorAll('.pagination-bullet');
        this.prevBtn = container.querySelector('.prev-btn');
        this.nextBtn = container.querySelector('.next-btn');
        this.currentIndex = 0;
        this.isAnimating = false;
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.startAutoplay();
    }
    
    bindEvents() {
        // Pagination bullets
        this.bullets.forEach((bullet, index) => {
            bullet.addEventListener('click', () => {
                this.goToSlide(index);
            });
        });
        
        // Navigation buttons
        this.nextBtn.addEventListener('click', () => {
            this.nextSlide();
        });
        
        this.prevBtn.addEventListener('click', () => {
            this.prevSlide();
        });
        
        // Touch/swipe support
        this.bindTouchEvents();
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prevSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            }
        });
        
        // Pause autoplay on hover
        this.container.addEventListener('mouseenter', () => {
            this.pauseAutoplay();
        });
        
        this.container.addEventListener('mouseleave', () => {
            this.startAutoplay();
        });
    }
    
    bindTouchEvents() {
        let startX = 0;
        let endX = 0;
        
        this.container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        this.container.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            this.handleSwipe(startX, endX);
        });
    }
    
    handleSwipe(startX, endX) {
        const threshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                this.nextSlide();
            } else {
                this.prevSlide();
            }
        }
    }
    
    goToSlide(index) {
        if (this.isAnimating || index === this.currentIndex) return;
        
        this.isAnimating = true;
        
        // Remove active classes
        this.items[this.currentIndex].classList.remove('active');
        this.bullets[this.currentIndex].classList.remove('active');
        
        // Update current index
        this.currentIndex = index;
        
        // Add active classes
        this.items[this.currentIndex].classList.add('active');
        this.bullets[this.currentIndex].classList.add('active');
        
        // Reset animation flag after transition
        setTimeout(() => {
            this.isAnimating = false;
        }, 600);
    }
    
    nextSlide() {
        const nextIndex = (this.currentIndex + 1) % this.items.length;
        this.goToSlide(nextIndex);
    }
    
    prevSlide() {
        const prevIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
        this.goToSlide(prevIndex);
    }
    
    startAutoplay() {
        this.stopAutoplay();
        this.autoplayInterval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    }
    
    pauseAutoplay() {
        this.stopAutoplay();
    }
    
    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
}

// Initialize the slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.blog-slider');
    if (sliderContainer) {
        new BlogSlider(sliderContainer);
    }
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BlogSlider;
}

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Show success message (in a real app, you'd send this to a server)
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
    });
}


// Typing effect for hero subtitle
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Smooth reveal on scroll
function revealOnScroll() {
    const reveals = document.querySelectorAll('.fade-in:not(.visible)');
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Performance optimization: Debounce scroll events
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Apply debouncing to scroll events
window.addEventListener('scroll', debounce(changeActiveNav, 10));
window.addEventListener('scroll', debounce(revealOnScroll, 10));

// counter animation numbers
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  const options = {
    threshold: 0.5 // Trigger when 50% visible
  };

  const animateCounter = (el) => {
    const target = +el.getAttribute("data-target");
    const duration = 150; // total animation duration in ms
    const stepTime = 1;
    const steps = Math.ceil(duration / stepTime);
    let count = 0;
    const increment = target / steps;

    const updateCount = () => {
      count += increment;
      if (count < target) {
        el.textContent = Math.floor(count);
        requestAnimationFrame(updateCount);
      } else {
        el.textContent = target;
      }
    };

    updateCount();
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.classList.add("visible");
        animateCounter(el);
        obs.unobserve(el); // Run only once
      }
    });
  }, options);

  counters.forEach(counter => {
    observer.observe(counter);
  });


});


// origami gallery
let currentImageIndex = 0;
let currentStartIndex = 0;
const visibleThumbnails = 8;

const imageUrls = [
    'web-origami/#1 beetle H.webp',
    'web-origami/#2 bettle H.webp',
    'web-origami/#5 beetle H.webp',
    'web-origami/#1pegasus.webp',
    'web-origami/20210420_100944.webp',
    'web-origami/20220323_104640.webp',
    'web-origami/20220414_095311.webp',
    'web-origami/20230128_121931.webp',
    'web-origami/20230316_184801.webp',
    'web-origami/20230317_114637.webp',
    'web-origami/20230317_130343.webp',
    'web-origami/20230425_092623.webp',
    'web-origami/20230425_180347.webp',
    'web-origami/20230427_131158.webp',
    'web-origami/20230517_093943.webp',
    'web-origami/20230526_175123.webp',
    'web-origami/20230526_175151.webp',
    'web-origami/20230526_183630.webp',
    'web-origami/20230602_102454.webp',
    'web-origami/20230602_102517.webp',
    'web-origami/20230602_102649.webp',
    'web-origami/20230705_103629-PhotoRoom.webp',
    'web-origami/20230706_092047-PhotoRoom.webp',
    'web-origami/20230720_173329.webp',
    'web-origami/20230720_174054.webp',
    'web-origami/20230723_112644-PhotoRoom.webp',
    'web-origami/20230726_084918-PhotoRoom.webp',
    'web-origami/20230813_113328bw-PhotoRoom.webp',
    'web-origami/20230813_113605-PhotoRoom.webp',
    'web-origami/20230908_190209-PhotoRoom.webp',
    'web-origami/2%20done.webp',
    'web-origami/2-PhotoRoom.webp',
    'web-origami/3-PhotoRoom.webp',
    'web-origami/Darkness%20Dragon%20main%202.webp',
    'web-origami/IMG_20220609_090207_593.webp',
    'web-origami/IMG-20201223-WA0004.webp',
    'web-origami/IMG-20201223-WA0007.webp',
    'web-origami/IMG-20201223-WA0009.webp',
    'web-origami/IMG-20210525-WA0000.webp',
    'web-origami/imgonline-com-ua-ReplaceColor-o1idOtH105d.webp',
    'web-origami/me.webp',
    'web-origami/msg1521241230-6606.webp',
    'web-origami/msg1521241230-6608.webp',
    'web-origami/msg1521241230-6611.webp',
    'web-origami/msg1521241230-6612.webp',
    'web-origami/msg1521241230-6613.webp',
    'web-origami/msg1521241230-6614.webp',
    'web-origami/peg%202.webp',
    'web-origami/peg3.webp',
    'web-origami/pegasus%201%20Redone.webp',
    'web-origami/Polish_20230425_145034667.webp',
    'web-origami/Polish_20230510_180251220.webp',
    'web-origami/Polish_20230516_214538855.webp',
    'web-origami/Polish_20230520_130842102.webp',
    'web-origami/Polish_20230702_123230551.webp',
    'web-origami/saber%20t%201.webp',
    'web-origami/saber%20t%202.webp',
    'web-origami/saber%20t%203.webp',
    'web-origami/SUn%20wukong%201.webp',
    'web-origami/sunwukong%202.webp',
    'web-origami/sunwukong%203.webp',
    'web-origami/V3.webp',
    'web-origami/wyv2.webp',
    'web-origami/Yoda%20cleaned.webp'
];

const totalImages = imageUrls.length;

// DOM elements
const mainImage = document.getElementById('mainImage');
const thumbnailContainer = document.getElementById('thumbnailContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentIndexSpan = document.getElementById('currentIndex');
const totalImagesSpan = document.getElementById('totalImages');

// Initialize gallery
function initGallery() {
    if (!mainImage || !thumbnailContainer || !prevBtn || !nextBtn || !currentIndexSpan || !totalImagesSpan) {
        console.error('Gallery elements not found');
        return;
    }
    
    totalImagesSpan.textContent = totalImages;
    createThumbnails();
    updateMainImage();
    updateCarousel();
    updateNavButtons();
}

// Create thumbnail elements
function createThumbnails() {
    thumbnailContainer.innerHTML = '';
    imageUrls.forEach((url, index) => {
        const img = document.createElement('img');
        img.src = url;
        img.className = 'thumbnail';
        img.alt = `Origami ${index + 1}`;
        img.addEventListener('click', () => selectImage(index));
        img.addEventListener('error', (e) => {
            console.warn(`Failed to load image: ${url}`);
            e.target.style.display = 'none';
        });
        thumbnailContainer.appendChild(img);
    });
}

// Select image by index
function selectImage(index) {
    currentImageIndex = index;
    updateMainImage();
    updateCarousel();
    updateNavButtons();
    
    // Center the selected thumbnail in view
    const thumbnailsPerView = Math.min(visibleThumbnails, totalImages);
    const centerPosition = Math.floor(thumbnailsPerView / 2);
    currentStartIndex = Math.max(0, Math.min(
        totalImages - thumbnailsPerView, 
        index - centerPosition
    ));
    updateCarousel();
}

// Update main image
function updateMainImage() {
    mainImage.src = imageUrls[currentImageIndex];
    mainImage.alt = `Origami artwork ${currentImageIndex + 1}`;
    currentIndexSpan.textContent = currentImageIndex + 1;
    
    // Add error handling for main image
    mainImage.addEventListener('error', (e) => {
        console.warn(`Failed to load main image: ${imageUrls[currentImageIndex]}`);
        // Try next image if current one fails
        if (currentImageIndex < totalImages - 1) {
            selectImage(currentImageIndex + 1);
        }
    });
    
    // Update active thumbnail
    const thumbnails = thumbnailContainer.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentImageIndex);
    });
}

// Update carousel position
function updateCarousel() {
    const thumbnailWidth = 90; // thumbnail width + gap
    const offset = -currentStartIndex * thumbnailWidth;
    thumbnailContainer.style.transform = `translateX(${offset}px)`;
}

// Update navigation buttons
function updateNavButtons() {
    prevBtn.disabled = currentImageIndex === 0;
    nextBtn.disabled = currentImageIndex === totalImages - 1;
}

// Navigate to previous image
function previousImage() {
    if (currentImageIndex > 0) {
        selectImage(currentImageIndex - 1);
    }
}

// Navigate to next image
function nextImage() {
    if (currentImageIndex < totalImages - 1) {
        selectImage(currentImageIndex + 1);
    }
}

// Event listeners
if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', previousImage);
    nextBtn.addEventListener('click', nextImage);
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') previousImage();
    if (e.key === 'ArrowRight') nextImage();
});

// Touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

if (mainImage) {
    mainImage.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    mainImage.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            nextImage(); // Swipe left -> next image
        } else {
            previousImage(); // Swipe right -> previous image
        }
    }
}

// Initialize the gallery when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initGallery, 100); // Small delay to ensure DOM is ready
});


// Featured projects 
