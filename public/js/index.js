document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        const emailInput = form.querySelector("input[type='email']");
        const email = emailInput.value;

        // Show the alert message
        alert(`You have successfully subscribed`);

        // Clear the input field
        emailInput.value = "";
    });
});


