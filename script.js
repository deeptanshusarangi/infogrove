// Form validation
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Basic validation
    if (!name || !email || !message) {
        alert("Please fill in all fields.");
    } else {
        alert("Thank you for your message, " + name + "!");
        // Here, you can add code to send the data to a server
    }
});

// Dynamic greeting based on time of day
function greetUser() {
    const date = new Date();
    const hours = date.getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good morning!";
    } else if (hours < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    const welcomeMessage = document.createElement("h3");
    welcomeMessage.textContent = greeting + " Welcome to our platform.";
    document.getElementById("home").appendChild(welcomeMessage);
}

// Call the greetUser function when the page loads
window.onload = greetUser;

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

});
