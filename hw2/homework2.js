function validateFname() {
    const Fname = document.getElementById("fname").value;
    if (/^[A-Za-z'-]+$/.test(Fname) == false) {
        document.getElementById("fname-error").innerHTML =
        "name field cannot be left empty and can only contain letters, dashes, and apostrophes";
        return false;
    }
    else {
        document.getElementById("fname-error").innerHTML =
        "";
        return true;
    }
}

function validateLname() {
    const Lname = document.getElementById("Lname").value;
    if (/^[a-zA-Z2-5\- ]+$/.test(Lname) == false) {
        document.getElementById("Lname-error").innerHTML =
        "name field cannot be left empty and can only contain letters, dashes, and the numbers 2-5";
        return false;
    }
    else {
        document.getElementById("Lname-error").innerHTML =
        "";
        return true;
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
    let zip = zipInput.value.replace(/[^\d-]/g, "");


    if (!zip) {
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

        document.getElementById('msg1').innerHTML =
        "Enter at least one lowercase letter";
        return false;
    }
    if (!pword.match(/[A-Z]/)) {

        document.getElementById("msg2").innerHTML = 
        "Ener at least one uppercase letter";
        return false;
    }
    if (!pword.match(/[0-9]/)) {
        
        document.getElementById("msg3").innerHTML = 
        "enter at least one number";
        return false;
    }
    if ((!pword.match(/[!\@#\$%&*\-_\\.+\(\)]/))) {

        document.getElementById("msg4").innerHTML = 
        "enter at least one special character";
        return false;

    }
    if (pword.includes(uid)) {
        document.getElementById("msg5").innerHTML =
        "Password can't contain user ID";
        return false
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