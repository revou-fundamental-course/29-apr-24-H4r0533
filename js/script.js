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

    alert("Thank You for your attention, we will submit your form");
    
}

function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}