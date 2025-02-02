// Select Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a'); // Individual navigation links

// Toggle Dropdown Menu
hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the click event from propagating to the document
    hamburger.classList.toggle('active'); // Animates the hamburger
    navLinks.classList.toggle('active'); // Slides down/up the menu
});

// Close Menu When Clicking a Navigation Link
navLinksItems.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute('href').slice(1); // Get the target section ID
        const targetSection = document.getElementById(targetId);

        // Calculate dynamic offset based on viewport size
        const headerHeight = document.querySelector('.main-header').offsetHeight; // Get header height
        let offset = headerHeight;

        // Add extra offset for smaller screens (adjust value as needed)
        if (window.innerWidth <= 768) {
            offset += 20; // Add extra offset for phones
        }

        // Scroll to the target section with adjusted offset
        const sectionPosition = targetSection.offsetTop - offset;
        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        });

        // Close the dropdown menu
        hamburger.classList.remove('active'); // Reset hamburger animation
        navLinks.classList.remove('active'); // Close dropdown
    });
});

// Close Menu When Clicking Outside
document.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
        hamburger.classList.remove('active'); // Reset hamburger animation
        navLinks.classList.remove('active'); // Close dropdown
    }
});

// Toggle Branches Dropdown
document.getElementById("toggle-branches-btn").addEventListener("click", function () {
    const dropdown = document.getElementById("branches-dropdown");
    dropdown.classList.toggle("show");
});

// Automatic Gallery Slider
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.gallery-slider .slides');
    const slideImages = document.querySelectorAll('.gallery-slider img');
    let currentIndex = 0;

    const slideCount = slideImages.length;

    // Automatic slide transition
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slideCount;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 3000); // Change slide every 3 seconds
});

function showPopup(menuItem) {
    // Get elements inside the popup
    const popupModal = document.getElementById('popup-modal');
    const popupImage = document.getElementById('popup-image');
    const popupItemName = document.getElementById('popup-item-name');
    const popupItemPrice = document.getElementById('popup-item-price');

    // Extract details from the clicked item
    const itemImage = menuItem.querySelector('img').src;
    const itemName = menuItem.querySelector('.item-name').textContent;
    const itemPrice = menuItem.querySelector('.item-price').textContent;

    // Set the popup content
    popupImage.src = itemImage;
    popupItemName.textContent = itemName;
    popupItemPrice.textContent = itemPrice;

    // Show the modal
    popupModal.classList.remove('hidden');
    popupModal.classList.add('show');
}

function hidePopup() {
    const popupModal = document.getElementById('popup-modal');
    popupModal.classList.remove('show');
    popupModal.classList.add('hidden');
}
