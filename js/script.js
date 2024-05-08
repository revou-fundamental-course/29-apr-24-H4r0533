// Function to initialize the auto-slide banner
function initBannerSlider() {
    var openingDiv = document.querySelector('.opening');
    var titles = ['HAROSI TRAVEL', 'Explore New Destinations', 'Experience Adventure', 'Enjoy Your Vacation']; // Array of titles
    var currentIndex = 0;
    var intervalId;

    // Function to change the title
    function changeTitle() {
        openingDiv.innerHTML = `
            <h1><b>${titles[currentIndex]}</b></h1>
            <p><i>Fun and Safe is our motto</i></p>
        `;
        currentIndex = (currentIndex + 1) % titles.length; // Move to the next title or loop back to the beginning
    }

    // Start the auto-slide interval
    function startAutoSlide() {
        intervalId = setInterval(changeTitle, 3000); // Change title every 3 seconds
    }

    // Stop the auto-slide interval
    function stopAutoSlide() {
        clearInterval(intervalId);
    }

    // Start auto-slide when the page loads
    startAutoSlide();

    // Pause auto-slide when mouse enters the banner area
    openingDiv.addEventListener('mouseenter', stopAutoSlide);

    // Resume auto-slide when mouse leaves the banner area
    openingDiv.addEventListener('mouseleave', startAutoSlide);
}

// Call the initBannerSlider function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    initBannerSlider();
});


// Call the initBannerSlider function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    initBannerSlider();
});


function validateForm() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var interest = document.getElementById("interest").value;

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email.");
        return false;
    }

    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (interest === "select") {
        alert("Please select your interest.");
        return false;
    }

    // If all validation passes, you can submit the form or perform further actions
    alert("Form is valid. Submitting...");
    // document.getElementById("form").submit();
}

// Function to check if email is valid using regex
function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}