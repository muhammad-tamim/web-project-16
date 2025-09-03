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


// Show or hide the error message
function toggleErrorMessage(action) {
    const errorBox = document.getElementById("error-message");

    if (action === "show") {
        errorBox.classList.remove("hidden"); // make it visible
    } else if (action === "hide") {
        errorBox.classList.add("hidden"); // hide it
    }
}

function formatDate(value) {
    if (!value) return "";

    const num = Number(value);

    if (value.length === 10) {
        return new Date(num * 1000).toDateString();
    }

    if (num < 100000) {
        return new Date(num * 24 * 60 * 60 * 1000).toDateString();
    }


    return new Date(num).toDateString();
}
