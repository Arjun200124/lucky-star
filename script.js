// Age Verification
function verifyAge() {
    const age = document.getElementById('ageInput').value;
    if (age >= 21) {
        document.querySelector('.age-verification').style.display = 'none';
    } else {
        window.location.href = 'https://www.fda.gov/tobacco-products/public-health-education/health-effects-smoking';
    }
}

// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
}

// Initialize Slider
setInterval(nextSlide, 5000);

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});