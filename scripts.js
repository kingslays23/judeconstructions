// JavaScript for the image slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function showSlide(index) {
    slides[currentSlide].style.display = 'none';
    slides[index].style.display = 'block';
    currentSlide = index;
}

function nextSlide() {
    const next = (currentSlide + 1) % totalSlides;
    showSlide(next);
}

setInterval(nextSlide, 5000); // Auto-advance the slider every 5 seconds

showSlide(currentSlide); // Show the initial slide

// JavaScript for the testimonials section
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials[currentTestimonial].style.display = 'none';
    testimonials[index].style.display = 'block';
    currentTestimonial = index;
}

function prevTestimonial() {
    const prev = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(prev);
}

function nextTestimonial() {
    const next = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(next);
}

// Handle manual controls for testimonials
document.getElementById('prevTestimonial').addEventListener('click', prevTestimonial);
document.getElementById('nextTestimonial').addEventListener('click', nextTestimonial);

showTestimonial(currentTestimonial); // Show the initial testimonial
