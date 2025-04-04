let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".slideFade");
  slides.forEach((slide, index) => {
    slide.style.opacity = "0";
  });
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.opacity = "1";
  setTimeout(showSlides, 10000); // Change image every 10 seconds
}

document.addEventListener("DOMContentLoaded", showSlides);