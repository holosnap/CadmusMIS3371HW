function validateFname() {

    const fname = document.getElementById("fname").value;
    const fnamepattern = /^[a-zA-Z'-]+$/

    if (!fname) {
        document.getElementById("fname-error").innerHTML = "First name can't be blank";
        return false;
    }
    if (!fname.match(fnamepattern)) {
        document.getElementById("fname-error").innerHTML = "Please only enter letters, apostrophes or dashes";
        return false;
    }
    if (fname.length >= 30) {
        document.getElementById("fname-error").innerHTML = "First name can't be more than 30 characters";
        return false;
    }
    else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
}

function validateLname() {

    const Lname = document.getElementById("Lname").value;
    const lnamepattern = /^[a-zA-Z'-]+$/

    if (!Lname) {
        document.getElementById("Lname-error").innerHTML = "Last name can't be blank";
        return false;
    }
    if (!Lname.match(lnamepattern)) {
        document.getElementById("Lname-error").innerHTML = "Please only enter letters, apostrophes or dashes";
        return false;
    }
    if (Lname.length == 0) {

        document.getElementById("Lname-error").innerHTML = "Last name needs to be at least 1 character";
        return false;
    }
    if (Lname.length >= 30) {
        document.getElementById("Lname-error").innerHTML = "Last name can't be more than 30 characters";
        return false;
    }
    else {
        document.getElementById("Lname-error").innerHTML = "";
        return true;
    }
}

function useraddress1() {

    const addy = document.getElementById("Address1").value;
    if (addy == null) {
        document.getElementById("address1-error").innerHTML = "address can't be blank"
    }
    if (addy.length < 2) {
        document.getElementById("address1-error").innerHTML = "address must be more than 2 characters";
        return false;
    }
    if (addy.length > 30) {
        document.getElementById("address1-error").innerHTML = "address must be less than 30 characters";
        return false;
    }
    else {
        document.getElementById("address1-error").innerHTML = ""
        return true
    }

}


function validateDob() {
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = 
        "Date can't be in the future";
        dob.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = 
        "Date can't be more than 120 years ago";
        dob.value = "";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

function validateSsn() {
    const ssn = document.getElementById("Ssn").value;
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = 
        "Please enter a valid SSN";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

function validateZcode() {
    const zipInput = document.getElementById("zcode");
    let zip = zipInput.value.replace(/[^\d-]/, "");
    if (/^[A-Za-z]+$/.test(zipInput.value) || zipInput.value == "") {
        document.getElementById("zcode-error").innerHTML = 
        "Zip code can't be blank or contain letters";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
    } else {
        zip = zip.slice(0, 5);
    }

    if (zipInput.value == zip)
        {
    document.getElementById("zcode-error").innerHTML = "";
    return true;
    }
}


function emailvalidate() {
    const emailR = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const EmailInput = document.getElementById("Email").value;

    if (emailR.test(EmailInput) == false) {
        document.getElementById("Email-error").innerHTML = 
        "Please enter valid email!";
        return false;
    }



    if (emailR.test(EmailInput) == true) {
        
    document.getElementById("Email-error").innerHTML = "";
    return true;
    }
}


function phonevalidate() {

    const phoner = /^\d{1,4}(-\d{1,4}){1,3}$/
    const phoneInput = document.getElementById("Phone").value;

    if (phoner.test(phoneInput) == false) {
        document.getElementById("phone-error").innerHTML = "Phone number can't be blank and can contain only numbers and dashes!";
        return false;
    }
    if (phoner.test(phoneInput) == true) {
        document.getElementById("phone-error").innerHTML = "";
        return true;
    }

}

function validateUid() {
    uid = document.getElementById("uid").value.toLowerCase();
    document.getElementById("uid").value = uid;

    if (uid.length == 0) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can't be blank";
        return false;
    }

    if (!isNaN(uid.charAt(0))) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can't start with a number";
        return false;
    }
    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(uid)) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can only have letters, numbers, underscores, and dashes";
        return false;
    } else if (uid.length < 5) {
        document.getElementById("uid-error").innerHTML = 
        "User ID must be at least 5 characters";
        return false;
    } else if (uid.length > 30) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can't exceed 30 characters";
        return false;
    } else {
        document.getElementById("uid-error").innerHTML = "";
        return true;
    }
}

function validatePword() {
    uid = document.getElementById("uid").value
    pword = document.getElementById("pword").value;
    if (!pword.match(/[a-z]/)) {

        document.getElementById('pwd-error').innerHTML =
        "Enter at least one lowercase letter for user password";
        return false;
    }
    if (!pword.match(/[A-Z]/)) {

        document.getElementById("pwd-error").innerHTML = 
        "Ener at least one uppercase letter for password";
        return false;
    }
    if (!pword.match(/[0-9]/)) {
        
        document.getElementById("pwd-error").innerHTML = 
        "enter at least one number for password";
        return false;
    }
    if ((!pword.match(/[!\@#\$%&*\-_\\.+\(\)]/))) {

        document.getElementById("pwd-error").innerHTML = 
        "enter at least one special character";
        return false;

    }
    if (pword.includes(uid)) {
        document.getElementById("pwd-error").innerHTML =
        "Password can't contain user ID";
        return false
    }
    else {
        document.getElementById('pwd-error').innerHTML = ""
        return true
    }
}

function confirmPword() {
    pword1 = document.getElementById("pword").value;
    pword2 = document.getElementById("con_pword").value;

    if (pword1 !== pword2) {
        document.getElementById("pword2-error").innerHTML = 
        "Passwords don't match";
        return false;
    } else {
        document.getElementById("pword2-error").innerHTML = 
        "";
        return true;
    }
}



function reviewInput() {
    var formcontent = document.getElementById("formstyle");
    var formoutput = "<table  style='text-align:center;' class='output'><th colspan = '3'> Review Your Information:</th>";
    for (let i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].value !== "") {
            switch (formcontent.elements[i].type) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>&#x2713;</td></tr>`;
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='righ'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
                    }
                    break;
                default:
                    formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
            }
        }
    }
    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}

function sliderdynamic() {
const slider = document.getElementById("painrange").value;
var slider2 = document.getElementById("dynamicvalue");

slider2.innerHTML = slider
}
function validateEverything() {
    let valid = true;

    if (!validateFname()) {
        valid = false;
    }
    if (!validateMini()) {
        valid = false;
    }
    if (!validateLname()) {
        valid = false;
    }
    if (!validateDob()) {
        valid = false;
    }
    if (!validateSsn()) {
        valid = false;
    }
    if (!useraddress1()) {
        valid = false;
    }
    if (!validateCity()) {
        valid = false;
    }
    if (!validateZcode()) {
        valid = false;
    }
    if (!emailvalidate()) {
        valid = false;
    }
    if (!phonevalidate()) {
        valid = false;
    }
    if (!validateUid()) {
        valid = false;
    }
    if (!validatePword()) {
        valid = false;
    }
    if (!confirmPword()) {
        valid = false;
    }
     if (valid) {
        window.open("thank-you.html");
     } 
     else{
        showAlert();
     }
 }

 function showAlert() {
    window.confirm("please fill out requried fields properly");
 }


 function validateCity() {
    city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("city-error").innerHTML = "City can't be blank";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}

function validateMini() {
    let mini = document.getElementById("mini").value;
    const namePattern = /^[A-Z]+$/g;

    mini = mini.toUpperCase();
    document.getElementById("mini").value = mini;

    if (!mini.match(namePattern)) {
        document.getElementById("mini-error").innerHTML = 
        "Middle initial must be a single uppercase letter";
        return false;
    } else {
        document.getElementById("mini-error").innerHTML = "";
        return true;
    }
}

function cookiemonster1() {
    let namevalue = document.getElementById('fname').value;
    const date = new Date();
    date.setTime(date.getTime() + (2 * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toString();
    document.cookie = "username=" + encodeURIComponent(namevalue) + "; " + expires + "; path=/; SameSite=Lax";
    window.alert(document.cookie);
}

function cookiemonster2() {;
    var reggie = /username=([^;]*);/
    
    return document.cookie.match(reggie);
}
const cookiename = cookiemonster2()
function cookiemonster3() {
    if (cookiename !== "") {
        document.getElementById('fname').value = cookiename;

    }

}

function cookiemonster4() {

    if (cookiename == null) {
            document.getElementById('cookiecheck').innerHTML = "Welcome new user";
    }
        

    else {
    document.getElementById('cookiecheck').innerHTML = "Welcome back " + cookiename;
    document.getElementById("undo-cookie").style.display = "block"
}
}