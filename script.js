
document.addEventListener("DOMContentLoaded", function () {
    const aboutImages = document.querySelectorAll(".aboutimage");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        { threshold: 0.5 } 
    );

    aboutImages.forEach((image) => observer.observe(image));
});

document.addEventListener("DOMContentLoaded", function () {
    const downloadImage = document.querySelector(".downloadimage");

    if (downloadImage) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        downloadImage.classList.add("show");
                    }
                });
            },
            { threshold: 0.5 } 
        );

        observer.observe(downloadImage);
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const logoContainer = document.querySelector(".logocontainer");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    logoContainer.classList.add("show"); 
                }
            });
        },
        { threshold: 0.5 } 
    );

    observer.observe(logoContainer);
});
document.addEventListener("DOMContentLoaded", function () {
    const faqCards = document.querySelectorAll(".faqcard");

    faqCards.forEach((card) => {
        const toggleButton = card.querySelector(".toggle img");
        const question = card.querySelector(".question");

        toggleButton.addEventListener("click", function () {
            card.classList.toggle("open"); 
            if (card.classList.contains("open")) {
                toggleButton.src = "Assets/Icon.png"; 
            } else {
                toggleButton.src = "Assets/plus.png"; 
                question.style.animation ="fadeIn 0.6s ease-in-out";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let menuBtn = document.getElementById("menu");
    let closeBtn = document.getElementById("close");
    let navItems = document.querySelector(".menu"); 
    let body = document.body;
    let menuLinks = document.querySelectorAll(".menu a"); // Select all menu links

    // Function to open menu
    function openMenu() {
        navItems.classList.add("open");
        closeBtn.style.display = "block";
        menuBtn.style.display = "none";
        body.classList.add("noscroll");
    }

    // Function to close menu
    function closeMenu() {
        navItems.classList.remove("open");
        closeBtn.style.display = "none";
        menuBtn.style.display = "block";
        body.classList.remove("noscroll");
    }

    // Event listeners
    menuBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);

    // Close menu when any link is clicked
    menuLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });
});



