



// Array of background images
const backgroundImages = [
    '/images/bg1.png',
    '/images/bg2.jfif',
    '/images/bg3.jpg',
    '/images/bg4.jpg',
    '/images/bg5.jpg',
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
setInterval(changeBackground, 5000);



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
