function cookiemonster1() {
    let namevalue = document.getElementById('fname').value;
    const date = new Date();
    date.setTime(date.getTime() + (2 * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = "username=" + encodeURIComponent(namevalue) + "; " + expires + "; path=/;";
}

function cookiemonster2() {
    var reggie = /username=([^]*)/;
    var opreggie = decodeURIComponent(document.cookie).match(reggie);
    return opreggie[1];
}
const cookiename = cookiemonster2();
window.alert(cookiename);
function cookiemonster3() {
    if (cookiename !== null) {
        document.getElementById('fname').value = cookiename;

    }
    else {
        document.getElementById('fname').value = "";
    }

}

function cookiemonster4() {

    if (cookiename != null) {
        document.getElementById('cookiecheck').innerHTML = "Welcome back " + cookiename;
        document.getElementById("undo-cookie").style.display = "block";

    }
        

    else {
        document.getElementById('cookiecheck').innerHTML = "Welcome new user";
        document.getElementById("undo-cookie").style.display = "none";
}
}

function cookiemonster5() {

    document.cookie = null
    window.alert(document.cookie)
}