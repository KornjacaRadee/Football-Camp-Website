let firebaseUrl = "https://sportskikampovi-8c0e5-default-rtdb.europe-west1.firebasedatabase.app/"

function closepop() {
    document.getElementById("videopop").style.visibility = "hidden";
    document.body.style.overflow = "visible";
    document.getElementById("videoo").pause();


}

function PlayButton() {
    document.getElementById("videopop").style.visibility = "visible";
    document.body.style.overflow = "hidden";
    document.getElementById("videopop").scrollIntoView();

}

function Cart() {
    var x = document.getElementById("cart");
    if (x.style.visibility === "visible") {
        x.style.visibility = "hidden";
    } else {
        x.style.visibility = "visible";
    }
}

function CloseLogin() {
    var x = document.getElementById("loginbg");
    x.style.visibility = "hidden"
    document.body.style.overflow = "visible";
}

function OpenLogin() {
    var x = document.getElementById("loginbg");
    x.style.visibility = "visible"
    x.scrollIntoView();
    document.body.style.overflow = "hidden";
}

function OpenRegister() {
    var x = document.getElementById("registerbg");
    x.style.visibility = "visible"
    x.scrollIntoView();
    document.body.style.overflow = "hidden";
}

function CloseRegister() {
    var x = document.getElementById("registerbg");
    x.style.visibility = "hidden"
    document.body.style.overflow = "visible";
}

function Profile() {
    window.open("profil.html");

}

function saveChangesCourse() {

}