function changeColor() {
    let small = document.getElementById("small1");
    if (small.style.background == "") {
        small.style.background = "red";
    }
    else if (small.style.background == "red") {
        small.style.background = "green";
    }
    else if (small.style.background == "green") {
        small.style.background = "blue";

    }
    else if (small.style.background == "blue") {
        small.style.background = "red";
    }
}

function rotateMe() {
    let smalla = document.getElementById("small2");
    smalla.style.transition = "2s";
    smalla.style.transform = "rotate(90deg)"
}

function fadeMe() {
    let smallb = document.getElementById("small3");
    smallb.style.transition = "2s";
    smallb.style.opacity = "0.1"
}

function formVal() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let feedback = document.getElementById("feedback").value;

    if (name == "") {
        alert("Username can't be empty");
        return false;
    }
    else if (name.length < "3") {
        alert("Username can't be less than three characters");
        return false;
    }
    else { };


    if (email == "") {
        alert("Email can't be empty");
        return false;
    }
    else if (email.length <= "10") {
        alert("Email can't be less than 10 characters");
        return false;
    }
    else { };


    if (feedback == ""){
        alert("Feedback can't be empty");
        return false;
    }
    else if (feedback.length <= "100") {
        alert("Feedback can't be less than 100 characters");
        return false;
    }
    else { };
}