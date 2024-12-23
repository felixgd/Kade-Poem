// Detecting horizontal scroll to transition sections
const poemScroll = document.querySelector('.poem-scroll');

// Listen for scroll events to move between sections
poemScroll.addEventListener('wheel', (event) => {
    if (event.deltaY !== 0) {
        if (event.deltaY > 0) {
            // Scroll down (move right)
            poemScroll.scrollLeft += window.innerWidth; // Move right by one screen width
        } else {
            // Scroll up (move left)
            poemScroll.scrollLeft -= window.innerWidth; // Move left by one screen width
        }
    }
});

// Optional: Adding swipe support for touch devices
poemScroll.addEventListener('touchstart', handleTouchStart, false);
poemScroll.addEventListener('touchmove', handleTouchMove, false);

let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
}

function handleTouchMove(e) {
    touchEndX = e.changedTouches[0].screenX;
}

poemScroll.addEventListener('touchend', () => {
    if (touchEndX < touchStartX) {
        // Swiped left (move right)
        poemScroll.scrollLeft += window.innerWidth;
    } else if (touchEndX > touchStartX) {
        // Swiped right (move left)
        poemScroll.scrollLeft -= window.innerWidth;
    }
});
