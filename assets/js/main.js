let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide) => {
        slide.style.display = "none"; // Cache toutes les diapositives
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Revient à la première diapositive après la dernière
    }

    slides[slideIndex - 1].style.display = "block"; // Affiche la diapositive actuelle
    setTimeout(showSlides, 4000); // Change la diapositive toutes les 4 secondes
}

// Initialise le diaporama après le chargement de la page
document.addEventListener("DOMContentLoaded", showSlides);
