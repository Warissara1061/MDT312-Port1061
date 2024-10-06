let postCount = 0;


window.onload = function() {
    document.getElementById("top").innerText = "Welcome to the Forum";
};


function postFunction() {
    const message = document.getElementById("message").value;

    postCount++;

    if (postCount === 1) {
        document.getElementById("topic").innerText = message;
    } else if (postCount === 2) {
        document.getElementById("reply1").innerText = message;
    } else if (postCount === 3) {
        document.getElementById("reply2").innerText = message;
    }

    // ล้างค่าของช่องข้อความหลังจากโพสต์แล้ว
    document.getElementById("message").value = "";
}


function clearFunction() {
    document.getElementById("topic").innerText = "";
    document.getElementById("reply1").innerText = "";
    document.getElementById("reply2").innerText = "";
    postCount = 0;
}
