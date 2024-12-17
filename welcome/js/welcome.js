let welcomeMsg = document.getElementById("welcomeMsg");

window.addEventListener("load", function () {
    displayWelcomeMsg();
})



function displayWelcomeMsg() {
    if ((localStorage.getItem("userName") !== null)) {
        welcomeMsg.innerHTML = `Welcome ${(localStorage.getItem("userName"))}`;

    } else {
        welcomeMsg.innerHTML = "";

    }
}

