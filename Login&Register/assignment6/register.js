window.onload = pageLoad;

function pageLoad() {
    let form = document.getElementById("myRegister");
    form.onsubmit = validateForm;
}

function validateForm() {
    let errorMessage = document.getElementById("errormsg");
    errorMessage.innerHTML = ""; 

   
    let firstname = document.forms["myRegister"]["firstname"].value;
    let lastname = document.forms["myRegister"]["lastname"].value;
    let gender = document.forms["myRegister"]["gender"];
    let birthday = document.forms["myRegister"]["bday"].value;
    let email = document.forms["myRegister"]["email"].value;
    let username = document.forms["myRegister"]["username"].value;
    let password = document.forms["myRegister"]["password"][0].value;
    let retypePassword = document.forms["myRegister"]["password"][1].value;

    
    let genderSelected = false;
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            genderSelected = true;
            break;
        }
    }

    if (!firstname || !lastname || !genderSelected || !birthday || !email || !username || !password || !retypePassword) {
        errorMessage.innerHTML = "กรุณากรอกข้อมูลให้ครบทุกช่อง";
        return false; 
    }

    
    if (password !== retypePassword) {
        errorMessage.innerHTML = "Password ไม่ตรงกัน โปรดลองใหม่อีกครั้ง";
        errorMessage.classList.add("errormsg");
        return false; 
    }

    
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    return true; 
}
