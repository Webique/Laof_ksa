// --- Hamburger Menu ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

// Toggle Dropdown Menu
hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close Menu When Clicking a Navigation Link
navLinksItems.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);

        const headerHeight = document.querySelector('.main-header').offsetHeight;
        let offset = headerHeight;

        if (window.innerWidth <= 768) {
            offset += 20; // Extra offset for smaller screens
        }

        const sectionPosition = targetSection.offsetTop - offset;
        window.scrollTo({ top: sectionPosition, behavior: 'smooth' });

        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Close Menu When Clicking Outside
document.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// --- Branches Dropdown ---
document.getElementById("toggle-branches-btn").addEventListener("click", function () {
    const dropdown = document.getElementById("branches-dropdown");
    dropdown.classList.toggle("show");
});

// --- Gallery Navigation ---
let currentIndex = 0;

function updateSlidePosition() {
    const slides = document.querySelector('.gallery-slider .slides');
    const slideWidth = document.querySelector('.gallery-slider').clientWidth;
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
    const slideCount = document.querySelectorAll('.slides img').length;
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlidePosition();
}

function previousSlide() {
    const slideCount = document.querySelectorAll('.slides img').length;
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlidePosition();
}

// Automatic Gallery Slider
document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        nextSlide();
    }, 3000); // Change slide every 3 seconds
});

function showPopup(menuItem) {
    const popupModal = document.getElementById('popup-modal');
    const popupImage = document.getElementById('popup-image');
    const popupItemName = document.getElementById('popup-item-name');
    const popupItemPrice = document.getElementById('popup-item-price');
    const popupItemDescription = document.getElementById('popup-item-description');
    const popupItemCalories = document.getElementById('popup-item-calories');

    // Extract item details
    const itemImage = menuItem.querySelector('img').src;
    const itemName = menuItem.querySelector('.item-name').textContent;
    const itemPrice = menuItem.querySelector('.item-price').textContent;
    const itemDescription = menuItem.querySelector('.item-description')?.textContent || "No description available.";
    const itemCalories = menuItem.querySelector('.item-calories')?.textContent || "Calories not specified.";

    // Update popup content
    popupImage.src = itemImage;
    popupItemName.textContent = itemName;
    popupItemPrice.textContent = itemPrice;
    popupItemDescription.textContent = itemDescription;
    popupItemCalories.textContent = itemCalories;

    // Show popup
    popupModal.classList.remove('hidden');
    popupModal.classList.add('show');
}

// Hide the popup
function hidePopup() {
    const popupModal = document.getElementById('popup-modal');
    popupModal.classList.remove('show');
    popupModal.classList.add('hidden');
}

// Add event listener to close popup when clicking outside the content
document.getElementById('popup-modal').addEventListener('click', hidePopup);

// Prevent event propagation when clicking inside the popup content
document.querySelector('.popup-content').addEventListener('click', (e) => {
    e.stopPropagation();
});


