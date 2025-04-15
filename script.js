const images = [
    "https://res.cloudinary.com/dhvpdrd8m/image/upload/v1744744217/Lona_Arlequin_a2f0ve.jpg"
]; // Add your image paths here
let currentIndex = 0;

const collageImage = document.getElementById("collage-image");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

prevButton.addEventListener("click", () => {
    console.log("Prev button clicked");
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back to the last image
    console.log("Current Index:", currentIndex);
    updateImage();
});

nextButton.addEventListener("click", () => {
    console.log("Next button clicked");
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
    console.log("Current Index:", currentIndex);
    updateImage();
});

function updateImage() {
    console.log("Updating image to:", images[currentIndex]);
    collageImage.style.opacity = 0; // Fade out effect
    setTimeout(() => {
        collageImage.src = images[currentIndex];
        collageImage.style.opacity = 1; // Fade in effect
    }, 300);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute("href").substring(1); // Get the target ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth", // Smooth scrolling
                block: "center", // Align to the center of the viewport for smoother focus
                inline: "nearest" // Ensures the closest alignment
            });
        }
    });
});