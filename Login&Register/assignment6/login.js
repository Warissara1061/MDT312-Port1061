window.onload = loginLoad;

function loginLoad() {
    let form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin() {
    let savedUsername = localStorage.getItem("username");
    let savedPassword = localStorage.getItem("password");

    let enteredUsername = document.forms["myLogin"]["username"].value;
    let enteredPassword = document.forms["myLogin"]["password"].value;

    if (enteredUsername === savedUsername && enteredPassword === savedPassword) {
        alert("Login Successful!!");
        return true; 
    } else {
        alert("Username หรือ Password ไม่ถูกต้อง");
        return false; 
    }
}
