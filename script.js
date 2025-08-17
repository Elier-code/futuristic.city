window.addEventListener("scroll", () => {
    document.body.style.setProperty("--scroll", window.scrollY);
});



function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100; // margen para activar antes

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
    
}

window.addEventListener("scroll", revealOnScroll);

// ejecuta una vez al cargar
revealOnScroll();