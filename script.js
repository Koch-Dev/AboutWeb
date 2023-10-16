// script.js
let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");

function showSlides() {
    slides[slideIndex].style.display = "none";
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = "block";
    setTimeout(showSlides, 3000);
}

showSlides();

const blogLink = document.getElementById("blog-link");
const blogContent = document.getElementById("blog-content");

blogLink.addEventListener("click", function(event) {
    event.preventDefault();
    blogContent.style.display = "block";
});
