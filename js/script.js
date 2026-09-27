const slider = document.querySelector(".hero-slider");
const slides = document.querySelectorAll(".hero-slide");
const prevButton = document.querySelector(".slider-prev");
const nextButton = document.querySelector(".slider-next");
const dots = document.querySelectorAll(".slider-dot");

if (slider && slides.length > 0) {
    let currentSlide = 0;

    function showSlide(index) {
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }

        slider.style.transform = `translateX(-${currentSlide * 100}%)`;

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === currentSlide);
        });
    }

    if (nextButton) {
        nextButton.addEventListener("click", () => {
            showSlide(currentSlide + 1);
        });
    }

    if (prevButton) {
        prevButton.addEventListener("click", () => {
            showSlide(currentSlide - 1);
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showSlide(index);
        });
    });

    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);

    let startX = 0;

    slider.addEventListener("touchstart", (event) => {
        startX = event.touches[0].clientX;
    });

    slider.addEventListener("touchend", (event) => {
        const endX = event.changedTouches[0].clientX;
        const difference = startX - endX;

        if (difference > 50) {
            showSlide(currentSlide + 1);
        } else if (difference < -50) {
            showSlide(currentSlide - 1);
        }
    });

    showSlide(0);
}