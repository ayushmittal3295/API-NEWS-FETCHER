document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const emailInput = form.querySelector("input[type='email']");
        const email = emailInput.value;

        alert(`You have successfully subscribed`);
        
        emailInput.value = "";
    });
});