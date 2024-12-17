let loginForm = document.getElementById("loginForm");
let loginEmail = document.getElementById("loginEmail");
let loginPassword = document.getElementById("loginPassword");
let loginAlert = document.getElementById("loginAlert");
let loginSuccess = document.getElementById("loginSuccess");
let loginRequire = document.getElementById("loginRequire");
let userList=[];


if (localStorage.getItem("userList") !== null) {
    userList = JSON.parse(localStorage.getItem("userList"));
}


loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    login();

});


function login() {
    let userData = {
        email: loginEmail.value,
        password: loginPassword.value,
    };

    console.log(userData);

    if (loginValid(userData) == true) {
        console.log("you are ok");
        loginSuccess.classList.replace("d-none", "d-block");
        loginAlert.classList.replace("d-block", "d-none");
        loginRequire.classList.replace("d-block", "d-none");

        setTimeout(function () {
            window.location.href = '../welcome/welcome.html'

        }, 1700);
    } else {
        console.log("not ok");
        loginSuccess.classList.replace("d-block", "d-none");
        loginAlert.classList.replace("d-none", "d-block");
        loginRequire.classList.replace("d-block", "d-none");


    }
    if (isLoginEmpty() == false) {
        loginRequire.classList.replace("d-none", "d-block");
        loginAlert.classList.replace("d-block", "d-none");
        loginSuccess.classList.replace("d-block", "d-none");
        return false;
    }


}

function loginValid(userData) {
    for (let i = 0; i < userList.length; i++) {
        if (
            userList[i].email.toLowerCase() === userData.email.toLowerCase() &&
            userList[i].password.toLowerCase() === userData.password.toLowerCase()) {
            console.log("user found");
            localStorage.setItem("userName", userList[i].name);
            return true;
        }

    }

}

function isLoginEmpty() {

    if (loginPassword.value == "" || loginEmail.value == "") {
        return false
    } else {
        return true
    }
}

