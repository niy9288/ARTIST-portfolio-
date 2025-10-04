// Global Variables
let currentPaintingIndex = 0;
let filteredPaintings = [];
let allPaintings = [];

// Paintings Data
const paintingsData = [
    {
        id: 1,
        title: "Artwork 1",
        year: 2024,
        medium: "Mixed Media",
        description: "Artwork from Yves collection",
        image: "yves/IMG-20251004-WA0044.jpg",
        category: "all"
    },
    {
        id: 2,
        title: "Artwork 2",
        year: 2024,
        medium: "Mixed Media",
        description: "Artwork from Yves collection",
        image: "yves/IMG-20251004-WA0045.jpg",
        category: "all"
    },
    {
        id: 3,
        title: "Artwork 3",
        year: 2024,
        medium: "Mixed Media",
        description: "Artwork from Yves collection",
        image: "yves/IMG-20251004-WA0046.jpg",
        category: "all"
    },
    {
        id: 4,
        title: "Artwork 4",
        year: 2024,
        medium: "Mixed Media",
        description: "Artwork from Yves collection",
        image: "yves/IMG-20251004-WA0047.jpg",
        category: "all"
    },
    {
        id: 5,
        title: "Artwork 5",
        year: 2024,
        medium: "Mixed Media",
        description: "Artwork from Yves collection",
        image: "yves/IMG-20251004-WA0048.jpg",
        category: "all"
    },
    {
        id: 6,
        title: "Artwork 6",
        year: 2024,
        medium: "Mixed Media",
        description: "Artwork from Yves collection",
        image: "yves/IMG-20251004-WA0049.jpg",
        category: "all"
    },
    {
        id: 7,
        title: "Artwork 7",
        year: 2024,
        medium: "Mixed Media",
        description: "Artwork from Yves collection",
        image: "yves/IMG-20251004-WA0050.jpg",
        category: "all"
    },
    {
        id: 8,
        title: "Artwork 8",
        year: 2024,
        medium: "Mixed Media",
        description: "Artwork from Yves collection",
        image: "yves/IMG-20251004-WA0051.jpg",
        category: "all"
    },
    {
        id: 9,
        title: "Artwork 9",
        year: 2024,
        medium: "Mixed Media",
        description: "Artwork from Yves collection",
        image: "yves/IMG-20251004-WA0052.jpg",
        category: "all"
    },
    {
        id: 10,
        title: "Artwork 10",
        year: 2024,
        medium: "Mixed Media",
        description: "Artwork from Yves collection",
        image: "yves/WhatsApp Image 2025-09-26 at 11.05.12_69b3beab.jpg",
        category: "all"
    },
    {
        id: 12,
        title: "Artwork 12",
        year: 2024,
        medium: "Mixed Media",
        description: "Artwork from Yves collection",
        image: "yves/WhatsApp Image 2025-10-04 at 12.52.27_00af2c07.jpg",
        category: "all"
    },
    {
        id: 13,
        title: "Artwork 13",
        year: 2024,
        medium: "Mixed Media",
        description: "Artwork from Yves collection",
        image: "yves/WhatsApp Image 2025-10-04 at 12.52.27_602d8ec8.jpg",
        category: "all"
    },
    {
        id: 14,
        title: "Artwork 14",
        year: 2024,
        medium: "Mixed Media",
        description: "Artwork from Yves collection",
        image: "yves/WhatsApp Image 2025-10-04 at 12.52.28_5cc38538.jpg",
        category: "all"
    },
    {
        id: 15,
        title: "Artwork 15",
        year: 2024,
        medium: "Mixed Media",
        description: "Artwork from Yves collection",
        image: "yves/WhatsApp Image 2025-10-04 at 12.57.38_d9913172.jpg",
        category: "all"
    }
];

// DOM Elements
const nav = document.getElementById('navigation');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const galleryGrid = document.getElementById('gallery-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxYear = document.getElementById('lightbox-year');
const lightboxMedium = document.getElementById('lightbox-medium');
const lightboxCategory = document.getElementById('lightbox-category');
const lightboxDescription = document.getElementById('lightbox-description');
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const loadingScreen = document.getElementById('loading-screen');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Show loading screen
    showLoadingScreen();
    
    // Initialize all components
    setupNavigation();
    setupScrollAnimations();
    setupGallery();
    setupLightbox();
    setupContactForm();
    setupSmoothScrolling();
    
    // Hide loading screen after a short delay
    setTimeout(() => {
        hideLoadingScreen();
    }, 1500);
}

// Loading Screen Functions
function showLoadingScreen() {
    if (loadingScreen) {
        loadingScreen.style.display = 'flex';
    }
}

function hideLoadingScreen() {
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }
}

// Navigation Functions
function setupNavigation() {
    // Handle scroll effect
    window.addEventListener('scroll', handleNavScroll);
    
    // Handle mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Handle nav link clicks
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
            closeMobileMenu();
        });
    });
}

function handleNavScroll() {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
}

function closeMobileMenu() {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
}

// Smooth Scrolling
function setupSmoothScrolling() {
    // Handle CTA button click
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            scrollToSection('gallery');
        });
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80; // Account for fixed nav
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-up');
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Gallery Functions
function setupGallery() {
    allPaintings = [...paintingsData];
    filteredPaintings = [...allPaintings];
    
    // Render initial gallery
    renderGallery();
    
    // Setup filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            filterGallery(filter);
            updateActiveFilter(button);
        });
    });
}

function renderGallery() {
    if (!galleryGrid) return;
    
    galleryGrid.innerHTML = '';
    
    filteredPaintings.forEach((painting, index) => {
        const galleryItem = createGalleryItem(painting, index);
        galleryGrid.appendChild(galleryItem);
    });
}

function createGalleryItem(painting, index) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.setAttribute('data-index', index);
    
    item.innerHTML = `
        <img src="${painting.image}" alt="${painting.title}" loading="lazy">
        <div class="gallery-overlay">
            <h3 class="gallery-title">${painting.title}</h3>
            <p class="gallery-details">${painting.year} • ${painting.medium}</p>
        </div>
        <div class="gallery-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
            </svg>
        </div>
    `;
    
    // Add click event
    item.addEventListener('click', () => {
        openLightbox(index);
    });
    
    return item;
}

function filterGallery(filter) {
    if (filter === 'all') {
        filteredPaintings = [...allPaintings];
    } else {
        filteredPaintings = allPaintings.filter(painting => 
            painting.category.toLowerCase() === filter.toLowerCase()
        );
    }
    
    renderGallery();
}

function updateActiveFilter(activeButton) {
    filterButtons.forEach(button => {
        button.classList.remove('active');
    });
    activeButton.classList.add('active');
}

// Lightbox Functions
function setupLightbox() {
    // Handle escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        } else if (e.key === 'ArrowRight' && lightbox.classList.contains('active')) {
            nextPainting();
        } else if (e.key === 'ArrowLeft' && lightbox.classList.contains('active')) {
            prevPainting();
        }
    });
    
    // Handle overlay click
    const lightboxOverlay = document.querySelector('.lightbox-overlay');
    if (lightboxOverlay) {
        lightboxOverlay.addEventListener('click', closeLightbox);
    }
}

function openLightbox(index) {
    currentPaintingIndex = index;
    const painting = filteredPaintings[index];
    
    if (!painting) return;
    
    // Update lightbox content
    lightboxImage.src = painting.image;
    lightboxImage.alt = painting.title;
    lightboxTitle.textContent = painting.title;
    lightboxYear.textContent = painting.year;
    lightboxMedium.textContent = painting.medium;
    lightboxCategory.textContent = painting.category.charAt(0).toUpperCase() + painting.category.slice(1);
    lightboxDescription.textContent = painting.description;
    
    // Show lightbox
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'unset';
}

function nextPainting() {
    if (filteredPaintings.length <= 1) return;
    
    currentPaintingIndex = (currentPaintingIndex + 1) % filteredPaintings.length;
    const painting = filteredPaintings[currentPaintingIndex];
    
    lightboxImage.src = painting.image;
    lightboxImage.alt = painting.title;
    lightboxTitle.textContent = painting.title;
    lightboxYear.textContent = painting.year;
    lightboxMedium.textContent = painting.medium;
    lightboxCategory.textContent = painting.category.charAt(0).toUpperCase() + painting.category.slice(1);
    lightboxDescription.textContent = painting.description;
}

function prevPainting() {
    if (filteredPaintings.length <= 1) return;
    
    currentPaintingIndex = currentPaintingIndex === 0 ? filteredPaintings.length - 1 : currentPaintingIndex - 1;
    const painting = filteredPaintings[currentPaintingIndex];
    
    lightboxImage.src = painting.image;
    lightboxImage.alt = painting.title;
    lightboxTitle.textContent = painting.title;
    lightboxYear.textContent = painting.year;
    lightboxMedium.textContent = painting.medium;
    lightboxCategory.textContent = painting.category.charAt(0).toUpperCase() + painting.category.slice(1);
    lightboxDescription.textContent = painting.description;
}

// Contact Form Functions
function setupContactForm() {
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', handleFormSubmit);
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const submitButton = document.getElementById('form-submit');
    const formData = new FormData(contactForm);
    
    // Disable submit button
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    // Simulate form submission
    setTimeout(() => {
        // Reset form
        contactForm.reset();
        
        // Show success message
        showFormStatus('success', 'Thank you! Your message has been sent.');
        
        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
        
        // Hide status after 3 seconds
        setTimeout(() => {
            hideFormStatus();
        }, 3000);
    }, 1000);
}

function showFormStatus(type, message) {
    if (!formStatus) return;
    
    formStatus.textContent = message;
    formStatus.className = `form-status ${type}`;
    formStatus.style.display = 'block';
}

function hideFormStatus() {
    if (!formStatus) return;
    
    formStatus.style.display = 'none';
    formStatus.className = 'form-status';
}

// Newsletter Functions
function setupNewsletter() {
    const newsletterButton = document.querySelector('.newsletter-button');
    const newsletterInput = document.querySelector('.newsletter-input');
    
    if (newsletterButton && newsletterInput) {
        newsletterButton.addEventListener('click', (e) => {
            e.preventDefault();
            const email = newsletterInput.value.trim();
            
            if (email && isValidEmail(email)) {
                // Simulate subscription
                newsletterInput.value = '';
                newsletterButton.textContent = 'Subscribed!';
                newsletterButton.style.background = '#4CAF50';
                
                setTimeout(() => {
                    newsletterButton.textContent = 'Subscribe';
                    newsletterButton.style.background = '#D4AF37';
                }, 2000);
            }
        });
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Image Loading Functions
function preloadImages() {
    const imageUrls = paintingsData.map(painting => painting.image);
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize newsletter on load
document.addEventListener('DOMContentLoaded', function() {
    setupNewsletter();
    preloadImages();
});

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Close mobile menu on resize
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
}, 250));

// Handle page visibility change
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause any animations or videos when page is hidden
    } else {
        // Resume animations when page becomes visible
    }
});

// Error handling for images
document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        console.warn('Failed to load image:', e.target.src);
        // You could set a fallback image here
        // e.target.src = 'path/to/fallback-image.jpg';
    }
}, true);

// Performance optimization: Lazy load images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', setupLazyLoading);

// Export functions for global access
window.scrollToSection = scrollToSection;
window.closeLightbox = closeLightbox;
window.nextPainting = nextPainting;
window.prevPainting = prevPainting;

