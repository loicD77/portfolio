document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ Animations GSAP chargées !");

    /** 🌟 Animation du Header **/
    gsap.from(".header-title h1", {
        opacity: 0,
        scale: 1.5,
        duration: 1.5,
        ease: "power4.out",
        y: -50
    });

    gsap.to(".header-title h1", {
        textShadow: "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px #ff0000, 0 0 40px #ff0000",
        duration: 1.5,
        repeat: -1,
        yoyo: true
    });

    gsap.from(".header-title p", {
        opacity: 0,
        x: -30,
        duration: 2,
        ease: "power2.out",
        delay: 0.8
    });

    /** 🎥 Diaporama **/
    let slideIndex = 0;
    const slides = document.querySelectorAll("#slideshow-container .slide");

    if (slides.length > 0) {
        function showSlides() {
            slides.forEach((slide, i) => {
                gsap.to(slide, {
                    opacity: i === slideIndex ? 1 : 0,
                    scale: i === slideIndex ? 1 : 0.9,
                    zIndex: i === slideIndex ? 2 : 1,
                    display: i === slideIndex ? "block" : "none",
                    duration: 1
                });
            });

            slideIndex = (slideIndex + 1) % slides.length;
            setTimeout(showSlides, 4000);
        }

        gsap.set(slides, { opacity: 0, scale: 0.9, display: "none", zIndex: 1 });
        gsap.set(slides[0], { opacity: 1, scale: 1, display: "block", zIndex: 2 });

        setTimeout(showSlides, 1000);
    }

    /** 🌀 Parallax image de profil **/
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

    /** 💥 Apparition Sections **/
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

    /** ⚡ Projets dynamiques **/
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

    console.log("✅ Animations chargées avec succès.");

    /** ☕ Animation de la tasse de café avec Fumée Rose **/
    if (typeof gsap !== "undefined") {
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

            for (let i = 0; i < 3; i++) {
                const smoke = document.createElement("span");
                smoke.classList.add("smoke", "pink"); // optionnel si tu veux cibler .pink
                smokeContainer.appendChild(smoke);

                console.log(`✅ Fumée ${i + 1} créée !`);

                gsap.fromTo(smoke,
                    {
                        opacity: 0,
                        y: 10,
                        scale: gsap.utils.random(0.5, 1),
                        rotation: gsap.utils.random(-20, 20),
                        x: gsap.utils.random(-10, 10)
                    },
                    {
                        opacity: 1,
                        y: gsap.utils.random(-100, -150),
                        scale: gsap.utils.random(1.2, 1.8),
                        rotation: gsap.utils.random(180, 360),
                        x: gsap.utils.random(-20, 20),
                        duration: 5,
                        ease: "power1.out",
                        onComplete: () => {
                            gsap.to(smoke, {
                                opacity: 0,
                                duration: 1,
                                onComplete: () => smoke.remove()
                            });
                        }
                    }
                );
            }
        }

        setInterval(createSmokeEffect, 1000);
    }
});

