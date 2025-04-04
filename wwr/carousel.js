let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".slideFade");

  // Remove 'active' class from all slides
  slides.forEach((slide) => slide.classList.remove("active"));

  // Increment the index and wrap around if needed
  slideIndex = (slideIndex + 1) % slides.length;

  // Add 'active' class to the current slide
  slides[slideIndex].classList.add("active");

  // Call the function again after 10 seconds
  setTimeout(showSlides, 10000);
}

// Start the slideshow after the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slideFade");

  if (slides.length > 0) {
    slides[0].classList.add("active"); // show first one initially
    showSlides(); // start the rotation
  }
});
