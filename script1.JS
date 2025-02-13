// script.js

// Example of a simple interactive feature
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function() {
            this.style.color = "#ffcc00"; // Change color on hover
        });
        link.addEventListener("mouseout", function() {
            this.style.color = "#ffffff"; // Revert color
        });
    });
});