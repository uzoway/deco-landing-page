const mobile = document.querySelector("#mobileNav")!;

const openMobileNav = document.querySelector("#hamburger")!.addEventListener("click", () => {

    // Toggles the active class on the mobile navigation
    mobile.classList.toggle("active");
});

// Print the input fields data to the browser console on submit
const logFormData = document.querySelector("#form")!.addEventListener("submit", (e: Event) => {

    // Prevents the form default action
    e.preventDefault();


    // Select all the Form input fields
    const fullName = document.querySelector("#name") as HTMLInputElement;
    const email = document.querySelector("#email") as HTMLInputElement;
    const message = document.querySelector("#message") as HTMLTextAreaElement;

    console.log(
        fullName.value,
        email.value,
        message.value
    )
});