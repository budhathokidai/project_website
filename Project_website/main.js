document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // Loading screen
    const loadingScreen = document.querySelector('.loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
    }, 2000);

    // Mobile navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Sticky header on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Create floating meats in hero section
    const floatingMeats = document.querySelector('.floating-meats');
    const meatIcons = ['🥩', '🍗', '🍖', '🥓', '🍖', '🍗', '🥩', '🥓'];
    
    for (let i = 0; i < 12; i++) {
        const meat = document.createElement('div');
        meat.className = 'floating-meat';
        meat.textContent = meatIcons[Math.floor(Math.random() * meatIcons.length)];
        
        // Random properties
        const size = Math.random() * 30 + 20;
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 15 + 10;
        const animationDelay = Math.random() * 5;
        const opacity = Math.random() * 0.7 + 0.3;
        
        meat.style.width = `${size}px`;
        meat.style.height = `${size}px`;
        meat.style.left = `${left}%`;
        meat.style.animationDuration = `${animationDuration}s`;
        meat.style.animationDelay = `${animationDelay}s`;
        meat.style.opacity = opacity;
        meat.style.fontSize = `${size}px`;
        meat.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
        
        floatingMeats.appendChild(meat);
    }

    // Create hero particles
    const heroParticles = document.querySelector('.hero-particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 10 + 5;
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 10 + 10;
        const animationDelay = Math.random() * 5;
        const opacity = Math.random() * 0.5 + 0.1;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}%`;
        particle.style.animationDuration = `${animationDuration}s`;
        particle.style.animationDelay = `${animationDelay}s`;
        particle.style.opacity = opacity;
        particle.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
        
        heroParticles.appendChild(particle);
    }

    // Product data
    const products = [
        {
            "id": 1,
            "name": "Whole Chicken",
            "category": "chicken",
            "description": "Locally raised, hormone-free whole chicken, perfect for family meals.",
            "price": "Rs. 350/kg",
            "image": "/pimage/whole chicken.png"
        },
        {
            "id": 2,
            "name": "Whole Mutton",
            "category": "mutton",
            "description": "Fresh and tender whole mutton, sourced from premium-quality livestock.",
            "price": "Rs. 1200/kg",
            "image": "/pimage/full-whole-mutton.png"
        },
        {
            "id": 3,
            "name": "Boneless Chicken",
            "category": "chicken",
            "description": "Skinless and boneless chicken, ideal for grilling, frying, and curries.",
            "price": "Rs. 800/kg",
            "image": "/pimage/boneless.png"
        },
        {
            "id": 4,
            "name": "Chicken Mince",
            "category": "chicken",
            "description": "Freshly ground chicken mince, perfect for kebabs, burgers, and curries.",
            "price": "Rs. 700/kg",
            "image": "/pimage/mince.jpg"
        },
        {
            "id": 5,
            "name": "Chicken Drumsticks",
            "category": "chicken",
            "description": "Juicy and tender chicken drumsticks, great for frying, grilling, or roasting.",
            "price": "Rs. 450/kg",
            "image": "/pimage/drumstick.png"
        },
        {
            "id": 6,
            "name": "Regular Eggs",
            "category": "egg",
            "description": "Farm-fresh regular eggs, packed with protein and essential nutrients.",
            "price": "Rs. 15/egg",
            "image": "/pimage/reggs.png"
        },
        {
            "id": 7,
            "name": "Mutton Curry Cut",
            "category": "mutton",
            "description": "Perfectly cut mutton pieces for rich and flavorful curries.",
            "price": "Rs. 1100/kg",
            "image": "/pimage/curry cut.jpg"
        },
        {
            "id": 8,
            "name": "Mutton Ribs & Chops",
            "category": "mutton",
            "description": "Juicy and meaty mutton ribs and chops, great for grilling and barbecuing.",
            "price": "Rs. 850/kg",
            "image": "/pimage/ribs.jpg"
        },
        {
            "id": 9,
            "name": "Mutton Sukuti",
            "category": "mutton",
            "description": "Traditional dried mutton (sukuti), rich in flavor and perfect for snacks.",
            "price": "Rs. 1500/kg",
            "image": "/pimage/sukuti.jpg"
        },
        {
            "id": 10,
            "name": "Organic Eggs",
            "category": "egg",
            "description": "Naturally produced organic eggs with no antibiotics or chemicals.",
            "price": "Rs. 25/egg",
            "image": "/pimage/organic.jpg"
        },
        {
            "id": 11,
            "name": "Duck Eggs",
            "category": "egg",
            "description": "Rich and nutritious duck eggs, perfect for cooking and baking.",
            "price": "Rs. 30/egg",
            "image": "/pimage/duck.jpg"
        },
        {
            "id": 12,
            "name": "Quail Eggs",
            "category": "egg",
            "description": "Small yet nutrient-packed quail eggs, known for their rich flavor.",
            "price": "Rs. 20/egg",
            "image": "/pimage/quail.png"
        }
    ];
    
    // Product filtering
    const productGrid = document.querySelector('.product-grid');
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    function displayProducts(category = 'all') {
        productGrid.innerHTML = '';
        
        const filteredProducts = category === 'all' 
            ? products 
            : products.filter(product => product.category === category);
        
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.setAttribute('data-aos', 'fade-up');
            productCard.innerHTML = `
                <div class="product-img">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-price">
                        <span class="price">${product.price}</span>
                        <button class="add-to-cart"><i class="fas fa-shopping-cart"></i> Add</button>
                    </div>
                </div>
            `;
            productGrid.appendChild(productCard);
        });

        // Add to cart functionality
        document.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const productCard = this.closest('.product-card');
                const productName = productCard.querySelector('h3').textContent;
                
                // Animation for add to cart
                this.innerHTML = '<i class="fas fa-check"></i> Added';
                this.style.backgroundColor = '#4CAF50';
                
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-shopping-cart"></i> Add';
                    this.style.backgroundColor = '';
                }, 2000);
                
                // Notification
                showNotification(`${productName} added to cart`);
            });
        });
    }
    
    // Initial display
    displayProducts();
    
    // Tab button functionality
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            tabBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Filter products
            const category = this.dataset.category;
            displayProducts(category);
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Your message has been sent successfully!');
            this.reset();
        });
    }

    // Show notification function
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Scroll reveal animation
    window.addEventListener('scroll', revealOnScroll);

    function revealOnScroll() {
        const elements = document.querySelectorAll('[data-aos]');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Initial call to check elements in viewport
    revealOnScroll();
});