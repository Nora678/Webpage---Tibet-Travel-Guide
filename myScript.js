// Array of images for the carousel
const images = ["index_header.jpg", "about_header.jpg", "places_header.jpg", "festivals_header.jpg"];
let currentIndex = 0;

// Change the image when the user clicks the arrows
function changeImage(direction) {
    currentIndex += direction;

    // Loop back to the first image when the end is reached
    if (currentIndex >= images.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    // Change the image source
    document.getElementById('carousel-image').src = images[currentIndex];
}

// Show the scroll-to-top button when scrolling down
window.onscroll = function() {
    let button = document.getElementById("scrollToTopButton");
    // Show the button when the page is scrolled down 300px
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        button.style.display = "block"; // Show the button
    } else {
        button.style.display = "none"; // Hide the button
    }
};

// Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
