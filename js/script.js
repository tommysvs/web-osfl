const navToggle = document.querySelector(".nav-toggle"),
      navMenu = document.querySelector(".nav-menu"),
      pageLoader = document.getElementById("page-loader");

// LOADER
if (pageLoader) {
    window.addEventListener("load", () => {
        const LOADER_MIN_MS = 800;
        const HIDE_TRANSITION_MS = 500;

        setTimeout(() => {
            pageLoader.classList.add("hide");
            setTimeout(() => pageLoader.remove(), HIDE_TRANSITION_MS);
        }, LOADER_MIN_MS);
    });
}

// HAMBURGUER MENU 
if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
        const isOpen = navMenu.classList.contains("open");
        navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
}

if (navMenu) {
    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            if (navToggle) navToggle.setAttribute("aria-expanded", "false");
        });
    });
}

// GALLERY CAROUSEL
document.addEventListener("DOMContentLoaded", () => {
    const carouselContainer = document.querySelector(".carousel-container");
    if (carouselContainer) {
        let carouselPrincipal = new Carousel(carouselContainer);
        carouselPrincipal.init();
    }
});

class Carousel {
    contenedor = null;
    track = null;
    items = [];
    
    direction = 1;
    timeInSeconds = 3;
    timerId = null;
    currentItem = 0;
    
    rightButton = null;
    leftButton = null;
    
    constructor(contenedor) {
        this.contenedor = contenedor;
        this.track = this.contenedor.querySelector(".carousel-track");
        this.items = [...this.track.querySelectorAll(".carousel-item")];
    }
    
    init() {
        console.log("Carousel Inicializado");
        console.log("items:", this.items);
        this.generateUX();
        this.tick();
    }
    
    generateUX() {
        this.rightButton = document.createElement("button");
        this.leftButton = document.createElement("button");
        this.rightButton.classList.add("carousel_right");
        this.leftButton.classList.add("carousel_left");
        this.rightButton.innerHTML = ">";
        this.leftButton.innerHTML = "<";
        
        this.rightButton.addEventListener("click", (e) => {
            this.moveToDirection(1);
        });
        
        this.leftButton.addEventListener("click", (e) => {
            this.moveToDirection(-1);
        });
        
        this.contenedor.appendChild(this.rightButton);
        this.contenedor.appendChild(this.leftButton);
    }
    
    moveToDirection(nextDirection) {
        clearTimeout(this.timerId);
        this.direction = nextDirection;
        this.moveToNext();
        this.tick();
    }
    
    tick() {
        this.timerId = setTimeout(
            () => {
                this.moveToNext();
                this.tick();
            },
            this.timeInSeconds * 1000
        );
    }
    
    moveToNext() {
        let nextIndex = (this.currentItem + this.direction + this.items.length) % this.items.length;
        this.currentItem = nextIndex;
        this.moveTo(nextIndex);
    }
    
    moveTo(index) {
        this.track.style.transform = `translateX(-${index * 100}%)`;
    }
}

// FAQ ACCORDION
document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.faq-question');
    
    function toggleAnswer(button) {
        const answer = button.nextElementSibling;
        const isActive = button.getAttribute('aria-expanded') === 'true';

        if (!isActive) {
            button.setAttribute('aria-expanded', 'true');
            answer.classList.add('open');
            answer.style.maxHeight = answer.scrollHeight + 32 + 'px'; 
        } else {
            button.setAttribute('aria-expanded', 'false');
            answer.classList.remove('open');
            answer.style.maxHeight = '0';
        }
    }

    questions.forEach(button => {
        button.addEventListener('click', () => {
            toggleAnswer(button);
        });
    });
});

// DONATION PAGE IMAGE MODAL
function openImageModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    if (modal && modalImg) {
        modal.style.display = 'block';
        modalImg.src = imageSrc;
        document.body.style.overflow = 'hidden';
    }
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeImageModal();
    }
});
