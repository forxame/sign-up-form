const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const li = document.querySelector(".wrong-password-match");

password.addEventListener("change", () => {
    password.value = password.value;
});

confirmPassword.addEventListener("change", () => {
    confirmPassword.value = confirmPassword.value;
});

confirmPassword.addEventListener("focusout", () => {
    if (password.value != confirmPassword.value) {
        li.textContent = "*Passwords do not match";
        password.classList.add("wrong-password-border");
        confirmPassword.classList.add("wrong-password-border");
    } else {
        li.textContent = "";
        password.classList.remove("wrong-password-border");
        confirmPassword.classList.remove("wrong-password-border");
    }
})

password.addEventListener("focusout", () => {
    if (confirmPassword.value != "" && (password.value != confirmPassword.value)) {
        li.textContent = "*Passwords do not match";
        password.classList.add("wrong-password-border");
        confirmPassword.classList.add("wrong-password-border");
    } else {
        li.textContent = "";
        password.classList.remove("wrong-password-border");
        confirmPassword.classList.remove("wrong-password-border");
    }
})