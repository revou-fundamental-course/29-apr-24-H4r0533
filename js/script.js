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