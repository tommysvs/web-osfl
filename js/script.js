const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section"),
      navToggle = document.querySelector(".nav-toggle"),
      navMenu = document.querySelector(".nav-menu"),
      pageLoader = document.getElementById("page-loader");

let operacion = 0,
    counter = 0,
    widthImg = sliderSection.length > 0 ? 100 / sliderSection.length : 0;

let intervalo;

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

// SLIDER 
function iniciarIntervalo() {
    if (slider && sliderSection.length > 0) {
        intervalo = setInterval(() => {
            moveToRight();
        }, 3000);
    }
}

function reiniciarIntervalo() {
    clearInterval(intervalo);
    iniciarIntervalo();
}

if (btnLeft) {
    btnLeft.addEventListener("click", e => {
        moveToLeft();
        reiniciarIntervalo();
    });
}

if (btnRight) {
    btnRight.addEventListener("click", e => {
        moveToRight();
        reiniciarIntervalo();
    });
}

iniciarIntervalo();

function moveToRight() {
    if (!slider || sliderSection.length === 0) return;
    
    if (counter >= sliderSection.length - 1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";
}

function moveToLeft() {
    if (!slider || sliderSection.length === 0) return;
    
    counter--;
    if (counter < 0) {
        counter = sliderSection.length - 1;
        operacion = widthImg * (sliderSection.length - 1);
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";
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

// IMAGE MODAL FOR GALLERY
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
