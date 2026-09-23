// Mobile navigation menu

function toggleMenu() {

    const navLinks = document.querySelector(".nav-links");

    navLinks.classList.toggle("active");
}


// Project details

function showProject(projectName) {

    alert(
        "Project: " +
        projectName +
        "\n\nMore project details can be added here."
    );
}


// Contact form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const formMessage = document.getElementById("formMessage");

    formMessage.textContent =
        "Thank you, " + name + "! Your message has been received.";

    contactForm.reset();

});