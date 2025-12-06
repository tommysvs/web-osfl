const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section"),
      navToggle = document.querySelector(".nav-toggle"),
      navMenu = document.querySelector(".nav-menu");

let operacion = 0,
    counter = 0,
    widthImg = sliderSection.length > 0 ? 100 / sliderSection.length : 0;

let intervalo;

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