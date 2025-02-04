document.addEventListener("DOMContentLoaded", () => {
    console.log("Animations GSAP chargées !");
    
    /** 🌟 Animation du Header **/
    gsap.from(".header-title h1", {
        opacity: 0,
        scale: 1.5,
        duration: 1.5,
        ease: "power4.out",
        y: -50
    });

    // Effet glitch lumineux
    gsap.to(".header-title h1", {
        textShadow: "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px #ff0000, 0 0 40px #ff0000",
        duration: 1.5,
        repeat: -1,
        yoyo: true
    });

    // Effet d'écriture progressive
    gsap.from(".header-title p", {
        opacity: 0,
        x: -30,
        duration: 2,
        ease: "power2.out",
        delay: 0.8
    });

    /** 🎥 **Diaporama avec GSAP** **/
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlides() {
        slides.forEach((slide, i) => {
            gsap.to(slide, { 
                opacity: i === slideIndex ? 1 : 0, 
                scale: i === slideIndex ? 1 : 0.9, 
                duration: 1 
            });
        });

        slideIndex = (slideIndex + 1) % slides.length;
        setTimeout(showSlides, 4000);
    }

    gsap.set(slides, { opacity: 0, scale: 0.9 });
    gsap.set(slides[0], { opacity: 1, scale: 1 });

    showSlides();

    /** 🌀 Effet Parallax sur l'image de profil **/
    gsap.to(".header-photo img", {
        scale: 1.1,
        y: 10,
        ease: "power1.out",
        scrollTrigger: {
            trigger: ".header-photo img",
            start: "top bottom",
            scrub: 2
        }
    });

    /** 💥 Apparition Énergétique des Sections **/
    gsap.utils.toArray("section").forEach((section) => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });

    /** ⚡ Apparition dynamique des projets **/
    gsap.utils.toArray("#projects ul li").forEach((project, index) => {
        gsap.from(project, {
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
            duration: 1.2,
            scrollTrigger: {
                trigger: project,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        });
    });

    console.log("Animations chargées avec succès.");

    /** ☕ Animation de la tasse de café avec Fumée Tourbillonnante **/

    // Vérifie si GSAP est bien chargé
    if (typeof gsap !== "undefined") {
        // Animation d'apparition de la tasse
        gsap.from(".coffee-container", {
            opacity: 0,
            y: 30,
            duration: 1.5,
            ease: "power2.out"
        });

function createSmokeEffect() {
    const smokeContainer = document.querySelector(".steam");

    if (!smokeContainer) {
        console.warn("❌ Conteneur de fumée non trouvé !");
        return;
    }

    // Créer un nouvel élément pour la fumée
    const smoke = document.createElement("span");
    smoke.classList.add("smoke");
    smokeContainer.appendChild(smoke);

    console.log("✅ Fumée créée !");

    // Nouvelle animation avec GSAP
    gsap.fromTo(smoke, 
        { 
            opacity: 0, 
            y: 10, 
            scale: 0.5, 
            rotation: gsap.utils.random(-20, 20), 
            x: gsap.utils.random(-5, 5) 
        }, 
        { 
            opacity: 1, 
            y: -100, 
            scale: 1.5, 
            rotation: gsap.utils.random(180, 360), 
            x: gsap.utils.random(-15, 15),
            duration: 4, 
            ease: "power1.out",
            onComplete: () => {
                gsap.to(smoke, { opacity: 0, duration: 1, onComplete: () => smoke.remove() });
            }
        }
    );
}

// Lancer l’effet toutes les 3 secondes (pour tester plus vite)
setInterval(createSmokeEffect, 3000);


// Lancer l'effet toutes les 5 secondes
setInterval(createSmokeEffect, 5000);


        // Lancer l'effet toutes les 5 secondes
        setInterval(createSmokeEffect, 5000);
    } else {
        console.warn("GSAP n'est pas chargé. Vérifiez l'inclusion de la bibliothèque.");
    }
});
