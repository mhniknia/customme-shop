const loginFormEl = document.querySelector(".login-form");
const usernameInputEl = document.querySelector(".username--input");
const passwordInputEl = document.querySelector(".password--input");
const usernameStateMsgEl = document.querySelector(".form--username");
const passwordStateMsgEl = document.querySelector(".form--password");
const showPasswordInputEl = document.querySelector(".form--show-password");
const usernameLabelEl = document.querySelector(".username--label");
const passwordLabelEl = document.querySelector(".password--label");

// for test
const CORRECT_USERNAME = "admin";
const CORRECT_PASSWORD = "Pass1234"



function loginUsernameKeyup() {
    const usernameValue = usernameInputEl.value.trim();
    

    if (usernameValue.length === 0) {
        showUsernameError("فیلد نمی‌تواند خالی باشد");
    } else {
        clearUsernameError();
    }
}

function loginUsernameBlur() {
    const usernameValue = usernameInputEl.value.trim();

    if (usernameValue.length === 0) {
        showUsernameError("فیلد نمی‌تواند خالی باشد");
    }
}

function loginPasswordKeyup() {
    const passwordValue = passwordInputEl.value.trim();

    if (passwordValue.length === 0) {
        showPasswordError("فیلد نمی‌تواند خالی باشد");
    } else {
        clearPasswordError();
    }
}

function loginPasswordBlur() {
    const passwordValue = passwordInputEl.value.trim();

    if (passwordValue.length === 0) {
        showPasswordError("فیلد نمی‌تواند خالی باشد");
    }
}

function showUsernameError(message) {
    usernameInputEl.classList.add("unsuccess--input");
    usernameLabelEl.classList.add("unsuccess--label");
    usernameStateMsgEl.classList.remove("hidden");
    usernameStateMsgEl.classList.add("unsuccess");
    usernameStateMsgEl.innerHTML = message;
}



function clearUsernameError() {
    usernameInputEl.classList.remove("unsuccess--input");
    usernameLabelEl.classList.remove("unsuccess--label");
    usernameStateMsgEl.classList.add("hidden");
    usernameStateMsgEl.classList.remove("unsuccess");
    usernameStateMsgEl.innerHTML = "";
}


function showPasswordError(message) {
    passwordInputEl.classList.add("unsuccess--input");
    passwordLabelEl.classList.add("unsuccess--label");
    passwordStateMsgEl.classList.remove("hidden");
    passwordStateMsgEl.classList.add("unsuccess");
    passwordStateMsgEl.innerHTML = message;
}


function clearPasswordError() {
    passwordInputEl.classList.remove("unsuccess--input");
    passwordLabelEl.classList.remove("unsuccess--label");
    passwordStateMsgEl.classList.add("hidden");
    passwordStateMsgEl.classList.remove("unsuccess");
    passwordStateMsgEl.innerHTML = "";
}


// toggle hide/show password logic
let showPasswordFlag = false;
function showPasswordClick() {
    if (!showPasswordFlag) {
        passwordInputEl.setAttribute("type", "text");
        showPasswordFlag = true;
    } else {
        passwordInputEl.setAttribute("type", "password");
        showPasswordFlag = false;
    }
}



function loginFormSubmit(event) {
    event.preventDefault();

    const usernameValue = usernameInputEl.value.trim();
    const passwordValue = passwordInputEl.value.trim();

    let isUsernameOk = false;
    let isPasswordOk = false;

    //final check
    if (usernameValue.length === 0) {
        showUsernameError("فیلد نمی‌تواند خالی باشد");
    } else if (usernameValue !== CORRECT_USERNAME) {
        showUsernameError("نام کاربری اشتباه است");
    } else {
        clearUsernameError();
        isUsernameOk = true;
    }

    
    if (passwordValue.length === 0) {
        showPasswordError("فیلد نمی‌تواند خالی باشد");
    } else if (passwordValue !== CORRECT_PASSWORD) {
        showPasswordError("رمز عبور اشتباه است");
    } else {
        clearPasswordError();
        isPasswordOk = true;
    }

    
    if (isUsernameOk && isPasswordOk) {
        console.log("ورود موفقیت آمیز✅");
    }
}


// events
loginFormEl.addEventListener("submit", loginFormSubmit);
usernameInputEl.addEventListener("keyup", loginUsernameKeyup);
usernameInputEl.addEventListener("blur", loginUsernameBlur);
passwordInputEl.addEventListener("keyup", loginPasswordKeyup);
passwordInputEl.addEventListener("blur", loginPasswordBlur);
showPasswordInputEl.addEventListener("click", showPasswordClick);
usernameInputEl.focus();
