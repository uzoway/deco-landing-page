var mobile = document.querySelector("#mobileNav");
var openMobileNav = document.querySelector("#hamburger").addEventListener("click", function () {
    // Toggles the active class on the mobile navigation
    mobile.classList.toggle("active");
});
// Print the input fields data to the browser console on submit
var logFormData = document.querySelector("#form").addEventListener("submit", function (e) {
    // Prevents the form default action
    e.preventDefault();
    // Select all the Form input fields
    var fullName = document.querySelector("#name");
    var email = document.querySelector("#email");
    var message = document.querySelector("#message");
    console.log(fullName.value, email.value, message.value);
});
