// script.js

// Function to generate a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change text color in .opening div
function changeTextColor() {
    var openingDiv = document.querySelector('.opening');
    var elements = openingDiv.querySelectorAll('h1, p, b, i');
    elements.forEach(function(element) {
        element.style.color = getRandomColor();
    });
}

// Call the changeTextColor function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    changeTextColor();
});

function initBannerSlider() {
    var openingDiv = document.querySelector('.opening');
    var titles = ['Fun and Safe is our motto', 'Explore New Destinations', 'Experience Adventure', 'Enjoy Your Vacation'];
    var currentIndex = 0;
    var intervalId;

    function changeTitle() {
        openingDiv.innerHTML = `
            <h1><b>HAROSI TRAVEL</b></h1>
            <p><i>${titles[currentIndex]}</i></p>
        `;
        currentIndex = (currentIndex + 1) % titles.length; 
    }

    function startAutoSlide() {
        intervalId = setInterval(changeTitle, 1000);
    }

    function stopAutoSlide() {
        clearInterval(intervalId);
    }

    startAutoSlide();

    openingDiv.addEventListener('mouseenter', stopAutoSlide);

    openingDiv.addEventListener('mouseleave', startAutoSlide);
}

document.addEventListener('DOMContentLoaded', function() {
    initBannerSlider();
});


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

    alert("Form is valid. Submitting...");
    
}

function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}