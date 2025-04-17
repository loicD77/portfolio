// ========================
// 🎞️ DIAPORAMA AUTOMATIQUE
// ========================

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = "none";
        dots[index].classList.remove("active");
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 3000); // Change d'image toutes les 3 secondes
}

document.addEventListener("DOMContentLoaded", showSlides);

// ============================
// ✨ ANIMATIONS FLUIDES (GSAP)
// ============================

// Chargement de GSAP
if (typeof gsap !== "undefined") {
    // Animation d'entrée en fondu du header
    gsap.from(".header-container", { opacity: 0, y: -50, duration: 1, ease: "power2.out" });

    // Animation du menu de navigation
    gsap.from(".navbar ul li", {
        opacity: 0,
        y: -20,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    });

    // Animation des éléments au scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                gsap.to(entry.target, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.study-item').forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        observer.observe(section);
    });

    // Effet de zoom au survol des images du diaporama
    document.querySelectorAll(".slide img").forEach(img => {
        img.addEventListener("mouseenter", () => {
            gsap.to(img, { scale: 1.05, duration: 0.3, ease: "power1.out" });
        });
        img.addEventListener("mouseleave", () => {
            gsap.to(img, { scale: 1, duration: 0.3, ease: "power1.out" });
        });
    });
} else {
    console.warn("GSAP n'est pas chargé. Assurez-vous d'inclure la bibliothèque.");
}
