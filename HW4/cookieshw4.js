function cookiemonster1() {
    let namevalue = document.getElementById('fname').value;
    const date = new Date();
    date.setTime(date.getTime() + (2 * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toString();
    document.cookie = "username=" + encodeURIComponent(namevalue) + "; " + expires + "; path=/; SameSite=Lax";
    window.alert(document.cookie);
}

function cookiemonster2() {
    var reggie = /username=([^]*)/;
    var opreggie = decodeURIComponent(document.cookie).match(reggie);
    window.alert(opreggie[1])
    return opreggie[1];
}
const cookiename = cookiemonster2()
window.alert(cookiemonster2())
function cookiemonster3() {
    if (cookiemonster2() !== "") {
        document.getElementById('fname').value = cookiemonster2();

    }

}

function cookiemonster4() {

    if (cookiemonster2() == "") {
            document.getElementById('cookiecheck').innerHTML = "Welcome new user";
            document.getElementById("undo-cookie").style.display = "none";
    }
        

    else {
    document.getElementById('cookiecheck').innerHTML = "Welcome back " + cookiemonster2();
    document.getElementById("undo-cookie").style.display = "block";
}
}