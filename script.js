



// Array of background images
const backgroundImages = [
    'images/bg1.png',
    'images/bg2.jfif',
    'images/bg3.jpg',
    'images/bg4.jpg',
    'images/bg5.jpg',
];

// Function to change the background image
let currentIndex = 0;

function changeBackground() {
    const bodyElement = document.body;
    
    // Change the background image by cycling through the array
    bodyElement.style.backgroundImage = `url('${backgroundImages[currentIndex]}')`;
    
    // Update the index, and reset if it exceeds the number of images
    currentIndex = (currentIndex + 1) % backgroundImages.length;
}

// Call changeBackground every 5 seconds (5000 milliseconds)
setInterval(changeBackground, 10000);



const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-list li a');

    navLinks.forEach(link => {
        // Check if the link's href matches the current location
        if (link.href === window.location.href) {
            link.classList.add('active'); // Add the active class
        }
    });


// Initialize with the first background
changeBackground();
document.getElementById("hamburger").addEventListener("click", function() {
    const navList = document.getElementById("nav-list");
    navList.classList.toggle("show"); // Toggle the show class
});

// Get the buttons and card container
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const cards = document.querySelectorAll('.card');

// Set the initial card index to 0 (first card)
let currentCardIndex = 0;

// Show the first card by adding the 'show' class
cards[currentCardIndex].classList.add('show');

// Next button functionality
nextBtn.addEventListener('click', () => {
    // Hide the current card
    cards[currentCardIndex].classList.remove('show');

    // Increment the index to show the next card
    currentCardIndex = (currentCardIndex + 1) % cards.length;

    // Show the next card
    cards[currentCardIndex].classList.add('show');
});

// Previous button functionality
prevBtn.addEventListener('click', () => {
    // Hide the current card
    cards[currentCardIndex].classList.remove('show');

    // Decrement the index to show the previous card
    currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;

    // Show the previous card
    cards[currentCardIndex].classList.add('show');
});
