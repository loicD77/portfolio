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

    /** 🎥 **Diaporama avec Fix Display None** **/
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlides() {
        slides.forEach((slide, i) => {
            if (i === slideIndex) {
                gsap.to(slide, { opacity: 1, duration: 1, scale: 1, display: "block" });
            } else {
                gsap.to(slide, { opacity: 0, duration: 1, scale: 0.9, display: "none" });
            }
        });

        slideIndex = (slideIndex + 1) % slides.length;
        setTimeout(showSlides, 4000);
    }

    // Initialisation correcte des slides
    slides.forEach((slide, i) => {
        gsap.set(slide, { opacity: i === 0 ? 1 : 0, scale: i === 0 ? 1 : 0.9, display: i === 0 ? "block" : "none" });
    });

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
    gsap.utils.toArray("section").forEach((section, index) => {
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
});
