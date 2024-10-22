const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('mobile-nav-active');
    hamburger.classList.toggle('hamburger-active');
});


const backgrounds = [
    // 'image/chart2.jpg',
    // 'image/btc1.png'
    // 'image/Bitcoin-price-2.webp'
    'image/bitlap.jpg',
    'image/bitcoin2.jpg',
    'image/vu.webp',
    // 'image/lob.avif'
];

let currentIndex = 0;
const container = document.getElementById('background-container');

// Function to update background image
function updateBackground() {
    container.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
}

// Show the initial background
updateBackground();

// Event listeners for buttons
document.getElementById('nextBtn').addEventListener('click', () => {
    nextBackground();
    resetAutoChange(); // Reset the interval when manually navigating
});

document.getElementById('prevBtn').addEventListener('click', () => {
    prevBackground();
    resetAutoChange(); // Reset the interval when manually navigating
});

// Functions to change the background index
function nextBackground() {
    currentIndex = (currentIndex + 1) % backgrounds.length;
    updateBackground();
}

function prevBackground() {
    currentIndex = (currentIndex - 1 + backgrounds.length) % backgrounds.length;
    updateBackground();
}

// Automatic background change every 5 seconds
let interval = setInterval(nextBackground, 4000);

// Reset the interval to prevent conflicts when clicking buttons
function resetAutoChange() {
    clearInterval(interval);
    interval = setInterval(nextBackground, 4000);
}



window.onload = function() {
    const fin = document.querySelector('.fin');
    const fin1 = document.querySelector('.fin1');

    // Add the "show" class to trigger the CSS transition
    fin.classList.add('show');
    setTimeout(function() {
        fin1.classList.add('show');
    }, 1000); // Wait 1 second to start animating the second paragraph
};
