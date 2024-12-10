const carouselContainer = document.querySelector('.carddiv'); // Main container of cards
const cards = document.querySelectorAll('.card'); // Individual cards
let scrollPosition = 0;

// Function to scroll the carousel programmatically
function scrollCarousel(direction) {
    const cardWidth = cards[0].offsetWidth; // Width of a single card
    const containerWidth = carouselContainer.offsetWidth; // Visible width of the container

    if (direction === 'right') {
        scrollPosition += cardWidth;
        if (scrollPosition > carouselContainer.scrollWidth - containerWidth) {
            scrollPosition = 0; // Reset to start if scrolling exceeds total width
        }
    } else if (direction === 'left') {
        scrollPosition -= cardWidth;
        if (scrollPosition < 0) {
            scrollPosition = carouselContainer.scrollWidth - containerWidth; // Go to the end if scrolling left at the start
        }
    }

    carouselContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
    });
}

// Scroll event to trigger carousel movement
carouselContainer.addEventListener('scroll', () => {
    console.log('Carousel scrolled:', carouselContainer.scrollLeft);
});

// Buttons to manually trigger scrolling (if you add them)
document.querySelector('.scroll-left').addEventListener('click', () => scrollCarousel('left'));
document.querySelector('.scroll-right').addEventListener('click', () => scrollCarousel('right'));
window.addEventListener('resize', () => {
    scrollPosition = 0; // Reset scroll position
    carouselContainer.scrollTo({ left: scrollPosition, behavior: 'smooth' });
});
