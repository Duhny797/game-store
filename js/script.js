/* ===== СЛАЙДЕР ПОПУЛЯРНИХ ІГОР ===== */

/* Отримуємо всі слайди */
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

/* Показуємо поточний слайд */
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

/* Наступний слайд */
function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

/* Попередній слайд */
function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
}

/* Автоматичне перемикання кожні 5 секунд */
setInterval(nextSlide, 5000);
