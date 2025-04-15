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
            "price": 350,
            "priceDisplay": "Rs. 350/kg",
            "unit": "kg",
            "image": "pimage/whole chicken.png"
        },
        {
            "id": 2,
            "name": "Whole Mutton",
            "category": "mutton",
            "description": "Fresh and tender whole mutton, sourced from premium-quality livestock.",
            "price": 1200,
            "priceDisplay": "Rs. 1200/kg",
            "unit": "kg",
            "image": "pimage/full-whole-mutton.png"
        },
        {
            "id": 3,
            "name": "Boneless Chicken",
            "category": "chicken",
            "description": "Skinless and boneless chicken, ideal for grilling, frying, and curries.",
            "price": 800,
            "priceDisplay": "Rs. 800/kg",
            "unit": "kg",
            "image": "pimage/boneless.png"
        },
        {
            "id": 4,
            "name": "Chicken Mince",
            "category": "chicken",
            "description": "Freshly ground chicken mince, perfect for kebabs, burgers, and curries.",
            "price": 700,
            "priceDisplay": "Rs. 700/kg",
            "unit": "kg",
            "image": "pimage/mince.jpg"
        },
        {
            "id": 5,
            "name": "Chicken Drumsticks",
            "category": "chicken",
            "description": "Juicy and tender chicken drumsticks, great for frying, grilling, or roasting.",
            "price": 450,
            "priceDisplay": "Rs. 450/kg",
            "unit": "kg",
            "image": "pimage/drumstick.png"
        },
        {
            "id": 6,
            "name": "Regular Eggs",
            "category": "egg",
            "description": "Farm-fresh regular eggs, packed with protein and essential nutrients.",
            "price": 15,
            "priceDisplay": "Rs. 15/egg",
            "unit": "egg",
            "image": "pimage/reggs.png"
        },
        {
            "id": 7,
            "name": "Mutton Curry Cut",
            "category": "mutton",
            "description": "Perfectly cut mutton pieces for rich and flavorful curries.",
            "price": 1100,
            "priceDisplay": "Rs. 1100/kg",
            "unit": "kg",
            "image": "pimage/curry cut.jpg"
        },
        {
            "id": 8,
            "name": "Mutton Ribs & Chops",
            "category": "mutton",
            "description": "Juicy and meaty mutton ribs and chops, great for grilling and barbecuing.",
            "price": 850,
            "priceDisplay": "Rs. 850/kg",
            "unit": "kg",
            "image": "pimage/ribs.jpg"
        },
        {
            "id": 9,
            "name": "Mutton Sukuti",
            "category": "mutton",
            "description": "Traditional dried mutton (sukuti), rich in flavor and perfect for snacks.",
            "price": 1500,
            "priceDisplay": "Rs. 1500/kg",
            "unit": "kg",
            "image": "pimage/sukuti.jpg"
        },
        {
            "id": 10,
            "name": "Organic Eggs",
            "category": "egg",
            "description": "Naturally produced organic eggs with no antibiotics or chemicals.",
            "price": 25,
            "priceDisplay": "Rs. 25/egg",
            "unit": "egg",
            "image": "pimage/organic.jpg"
        },
        {
            "id": 11,
            "name": "Duck Eggs",
            "category": "egg",
            "description": "Rich and nutritious duck eggs, perfect for cooking and baking.",
            "price": 30,
            "priceDisplay": "Rs. 30/egg",
            "unit": "egg",
            "image": "pimage/duck.jpg"
        },
        {
            "id": 12,
            "name": "Quail Eggs",
            "category": "egg",
            "description": "Small yet nutrient-packed quail eggs, known for their rich flavor.",
            "price": 20,
            "priceDisplay": "Rs. 20/egg",
            "unit": "egg",
            "image": "pimage/quail.png"
        }
    ];
    
    // Shopping cart functionality
    let cart = [];
    const cartIcon = document.querySelector('.cart-icon');
    const cartPanel = document.querySelector('.cart-panel');
    const closeCartBtn = document.querySelector('.close-cart');
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartCount = document.querySelector('.cart-count');
    const totalPriceElement = document.querySelector('.total-price');
    const cartOverlay = document.createElement('div');
    cartOverlay.className = 'cart-overlay';
    document.body.appendChild(cartOverlay);

    // Toggle cart panel
    cartIcon.addEventListener('click', toggleCart);
    closeCartBtn.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', toggleCart);

    function toggleCart() {
        cartPanel.classList.toggle('active');
        cartOverlay.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    }

    // Add to cart function
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }

        updateCart();
        showNotification(`${product.name} added to cart`);
    }

    // Remove from cart function
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCart();
    }

    // Update quantity function
    function updateQuantity(productId, newQuantity) {
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity = Math.max(1, newQuantity);
            updateCart();
        }
    }

    // Update cart UI
    function updateCart() {
        // Update cart count
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;

        // Update cart items
        cartItemsContainer.innerHTML = '';
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
            totalPriceElement.textContent = 'Rs. 0';
        } else {
            cart.forEach(item => {
                const cartItemElement = document.createElement('div');
                cartItemElement.className = 'cart-item';
                cartItemElement.innerHTML = `
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">${item.priceDisplay}</div>
                        <div class="cart-item-quantity">
                            <button class="decrease-quantity" data-id="${item.id}">-</button>
                            <span>${item.quantity} ${item.unit}</span>
                            <button class="increase-quantity" data-id="${item.id}">+</button>
                        </div>
                    </div>
                    <i class="fas fa-trash remove-item" data-id="${item.id}"></i>
                `;
                cartItemsContainer.appendChild(cartItemElement);
            });

            // Calculate total price
            const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            totalPriceElement.textContent = `Rs. ${totalPrice}`;

            // Add event listeners to quantity buttons
            document.querySelectorAll('.decrease-quantity').forEach(btn => {
                btn.addEventListener('click', function() {
                    const id = parseInt(this.dataset.id);
                    const item = cart.find(item => item.id === id);
                    if (item && item.quantity > 1) {
                        updateQuantity(id, item.quantity - 1);
                    } else {
                        removeFromCart(id);
                    }
                });
            });

            document.querySelectorAll('.increase-quantity').forEach(btn => {
                btn.addEventListener('click', function() {
                    const id = parseInt(this.dataset.id);
                    const item = cart.find(item => item.id === id);
                    if (item) {
                        updateQuantity(id, item.quantity + 1);
                    }
                });
            });

            document.querySelectorAll('.remove-item').forEach(btn => {
                btn.addEventListener('click', function() {
                    const id = parseInt(this.dataset.id);
                    removeFromCart(id);
                });
            });
        }
    }

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
                        <span class="price">${product.priceDisplay}</span>
                        <button class="add-to-cart" data-id="${product.id}">
                            <i class="fas fa-shopping-cart"></i> Add
                        </button>
                    </div>
                </div>
            `;
            productGrid.appendChild(productCard);
        });

        // Add to cart functionality
        document.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const productId = parseInt(this.dataset.id);
                addToCart(productId);
                
                // Animation for add to cart
                this.innerHTML = '<i class="fas fa-check"></i> Added';
                this.style.backgroundColor = '#4CAF50';
                
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-shopping-cart"></i> Add';
                    this.style.backgroundColor = '';
                }, 2000);
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
    // Add this code to your existing main.js file

// Enhanced Payment System
const checkoutBtn = document.querySelector('.checkout-btn');
const paymentModal = document.querySelector('.payment-modal');
const closePayment = document.querySelector('.close-payment');
const paymentSteps = document.querySelectorAll('.payment-steps .step');
const paymentSections = document.querySelectorAll('.payment-section');
const nextStepBtns = document.querySelectorAll('.next-step');
const prevStepBtns = document.querySelectorAll('.prev-step');
const paymentMethods = document.querySelectorAll('.payment-method');
const confirmPaymentBtn = document.querySelector('.confirm-payment');
const orderItemsContainer = document.querySelector('.order-items');
const totalAmountElement = document.querySelector('.total-amount');
const paymentAmountElement = document.querySelector('.payment-amount');
const methodTitle = document.querySelector('.payment-method-title span');
const methodQR = document.querySelector('.method-qr');

// QR code images for different methods
const qrCodes = {
    esewa: '/pimage/esewa-qr.png',
    khalti: '/pimage/khalti-qr.png',
    bank: '/pimage/bank-qr.png',
    cod: '/pimage/cod-icon.png'
};

// Open payment modal
checkoutBtn.addEventListener('click', function() {
    // Update order summary
    updateOrderSummary();
    paymentModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

// Close payment modal
closePayment.addEventListener('click', function() {
    paymentModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close when clicking outside
paymentModal.addEventListener('click', function(e) {
    if (e.target === paymentModal) {
        paymentModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Next step button
nextStepBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        goToStep(2);
    });
});

// Previous step buttons
prevStepBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const currentSection = this.closest('.payment-section').id;
        if (currentSection === 'choose-method') {
            goToStep(1);
        } else if (currentSection === 'complete-payment') {
            goToStep(2);
        }
    });
});

// Payment method selection
paymentMethods.forEach(method => {
    method.addEventListener('click', function() {
        const methodType = this.dataset.method;
        methodTitle.textContent = this.querySelector('span').textContent;
        methodQR.src = qrCodes[methodType];
        paymentAmountElement.textContent = totalAmountElement.textContent;
        
        if (methodType === 'cod') {
            document.querySelector('.qr-code-container').innerHTML = `
                <img src="/pimage/code.png" alt="Cash on Delivery" style="max-width: 150px;">
                <p>Pay when you receive your order</p>
                <div class="payment-details">
                    <p>Our delivery person will collect the payment</p>
                </div>
            `;
        }
        
        goToStep(3);
    });
});

// Confirm payment
confirmPaymentBtn.addEventListener('click', function() {
    showNotification('Thank you for your payment! Your order is being processed.');
    setTimeout(() => {
        paymentModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Clear cart
        cart = [];
        updateCart();
        
        // Reset payment flow
        goToStep(1);
    }, 2000);
});

// Function to update order summary
function updateOrderSummary() {
    orderItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        orderItemsContainer.innerHTML = '<p>Your cart is empty</p>';
        totalAmountElement.textContent = 'Rs. 0';
        return;
    }
    
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'order-item';
        itemElement.innerHTML = `
            <span class="order-item-name">${item.quantity} x ${item.name}</span>
            <span class="order-item-price">Rs. ${item.price * item.quantity}</span>
        `;
        orderItemsContainer.appendChild(itemElement);
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalAmountElement.textContent = `Rs. ${total}`;
}

// Function to navigate between steps
function goToStep(stepNumber) {
    // Update step indicators
    paymentSteps.forEach((step, index) => {
        if (index < stepNumber) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
    
    // Show corresponding section
    paymentSections.forEach(section => {
        section.classList.remove('active');
    });
    
    if (stepNumber === 1) {
        document.getElementById('review-order').classList.add('active');
    } else if (stepNumber === 2) {
        document.getElementById('choose-method').classList.add('active');
    } else if (stepNumber === 3) {
        document.getElementById('complete-payment').classList.add('active');
    }
}
});