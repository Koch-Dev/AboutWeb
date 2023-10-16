// Existing code for the slideshow
let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");

function showSlides() {
    slides[slideIndex].style.display = "none";
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = "block";
    setTimeout(showSlides, 3000);
}

showSlides();

// Load and display blog content when the "Blog" link is clicked
const blogLink = document.getElementById("blog-link");
const blogContent = document.getElementById("blog-content");

blogLink.addEventListener("click", async function (event) {
    event.preventDefault();

    // Update this array with the names of your blog HTML files
    const blogFileNames = ["blog1.html", "blog2.html", "blog3.html"];

    // Randomly select a blog to display (you can modify this logic)
    const randomBlogIndex = Math.floor(Math.random() * blogFileNames.length);
    const selectedBlogFileName = blogFileNames[randomBlogIndex];

    // Load and display the selected blog content
    try {
        const response = await fetch(`blogs/${selectedBlogFileName}`);
        if (response.ok) {
            const blogHTML = await response.text();
            blogContent.innerHTML = blogHTML;
        } else {
            console.error('Failed to load the blog content.');
        }
    } catch (error) {
        console.error('An error occurred while loading the blog content:', error);
    }
});
