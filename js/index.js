let registerForm = document.getElementById("registerForm");
let signName = document.getElementById("signName");
let signEmail = document.getElementById("signEmail");
let signPassword = document.getElementById("signPassword");
let nameAlert = document.getElementById("nameAlert");
let emailAlert = document.getElementById("emailAlert");
let passwordAlert = document.getElementById("passwordAlert");
let existAlert = document.getElementById("existAlert");
let successAlert = document.getElementById("successAlert");
let signUpRequire = document.getElementById("signUpRequire");
let userList = [];


if (localStorage.getItem("userList") !== null) {
    userList = JSON.parse(localStorage.getItem("userList"));

}

registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (checkAllInputes()) {
        console.log("okkk");
        addUser();
    }
});


function addUser() {
    let newUser = {
        name: signName.value,
        email: signEmail.value,
        password: signPassword.value,
    };

    if (isExist(newUser) == true) {
        console.log("already exist");
        existAlert.classList.replace("d-none", "d-block");
        successAlert.classList.replace("d-block", "d-none");

    } else {
        console.log(newUser);
        userList.push(newUser);
        localStorage.setItem("userList", JSON.stringify(userList));
        successAlert.classList.replace("d-none", "d-block");
        existAlert.classList.replace("d-block", "d-none");
        setTimeout(function () {
            window.location.href = 'sign in/login.html'

        }, 1700);
        console.log(userList);
        console.log("is new");

    }
}


function isExist(newUser) {
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].email.toLowerCase() == newUser.email.toLowerCase()) {
            console.log("email is exist");
            return true;
        }

    }

}



function validInputs(regex, element, alertMsg) {

    let pattern = regex;

    if (pattern.test(element.value) == true) {
        console.log("ok");
        alertMsg.classList.replace("d-block", "d-none");
        return true;

    } else {
        console.log("nooo");
        alertMsg.classList.replace("d-none", "d-block");
        return false;
    }

}

function checkAllInputes() {
    if (validInputs(/^[a-zA-Z]{2,}$/, signName, nameAlert) &&
        validInputs(/^[a-zA-Z0-9]+.[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/, signEmail, emailAlert) &&
        validInputs(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, signPassword, passwordAlert)) {
        console.log("k");
        return true;


    } else {
        console.log("no")
        return false;
    }

}


