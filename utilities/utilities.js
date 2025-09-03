function errorMessageShowOrHide(value) {
    if (value === "show") {
        const errorMessageContainer = document.getElementById("error-message")
        errorMessageContainer.classList.remove("hidden")
    }
    if (value === "hide") {
        const errorMessageContainer = document.getElementById("error-message")
        errorMessageContainer.classList.add("hidden")
    }
}