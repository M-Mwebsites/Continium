//carousel
const carousel = document.getElementById('carousel');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

let itemsPerPage = 4;
let currentIndex = 0;
let autoSlideInterval;

function updateItemsPerPage() {
    itemsPerPage = window.innerWidth > 992 ? 4 : 2;
}

function updateCarousel() {
    const itemWidth = carousel.querySelector('.carousel-item').offsetWidth;
    const translateValue = -currentIndex * itemWidth;
    carousel.style.transform = `translateX(${translateValue}px)`;
}

function autoSlide() {
    rightArrow.click();
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 3000);
}

leftArrow.addEventListener('click', () => {
    currentIndex = currentIndex === 0 ? carousel.children.length - itemsPerPage : Math.max(currentIndex - itemsPerPage, 0);
    updateCarousel();
    resetAutoSlide();
});

rightArrow.addEventListener('click', () => {
    currentIndex = currentIndex + itemsPerPage >= carousel.children.length ? 0 : currentIndex + itemsPerPage;
    updateCarousel();
    resetAutoSlide();
});

window.addEventListener('resize', () => {
    updateItemsPerPage();
    updateCarousel();
});

// Initial setup
updateItemsPerPage();
updateCarousel();

// Initial auto-slide setup
autoSlideInterval = setInterval(autoSlide, 3000);

// Reset auto-slide on button click
leftArrow.addEventListener('click', resetAutoSlide);
rightArrow.addEventListener('click', resetAutoSlide);