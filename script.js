document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    form.addEventListener("submit", (event) => {
        let valid = true;
        clearErrors();

        // Email validation
        if (!validateEmail(emailInput.value)) {
            showError(emailInput, "Please enter a valid email address");
            valid = false;
        }

        // Password validation
        if (passwordInput.value.trim() === "") {
            showError(passwordInput, "Password cannot be empty");
            valid = false;
        } else if (passwordInput.value.length < 6) {
            showError(passwordInput, "Password must be at least 6 characters long");
            valid = false;
        }

        if (!valid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });

    // Email validation regex function
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }

    // Display error message
    function showError(input, message) {
        const error = document.createElement("div");
        error.classList.add("error-message");
        error.innerText = message;
        input.parentElement.appendChild(error);
        input.classList.add("input-error");
    }

    // Clear previous errors
    function clearErrors() {
        document.querySelectorAll(".error-message").forEach((error) => error.remove());
        document.querySelectorAll(".input-error").forEach((input) => input.classList.remove("input-error"));
    }
});
