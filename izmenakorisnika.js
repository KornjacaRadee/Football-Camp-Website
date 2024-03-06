let users1 = "https://sportskikampovi-8c0e5-default-rtdb.europe-west1.firebasedatabase.app/korisnici/"
usersReq = new XMLHttpRequest();

function getParamValue() {
    const location = decodeURI(window.location.toString());
    const index = location.indexOf("?") + 1;
    const substrings = location.substring(index, location.length);
    const splitedSubstring = substrings.split("=");

    return splitedSubstring[1]
}
let IDpage = getParamValue();
let linkID = users1 + `${IDpage}.json`
console.log(linkID)
usersReq.onreadystatechange = function() {
    if (this.readyState == 4) {
        if (this.status == 200) {
            console.log(this.responseText)
            let actUser = JSON.parse(this.responseText)
            console.log(actUser)
            document.querySelector('input[name="id"]').setAttribute("value", `${IDpage}`);
            document.querySelector('input[name="name"]').setAttribute("value", `${actUser.ime}`);
            document.querySelector('input[name="lastname"]').setAttribute("value", `${actUser.prezime}`);
            document.querySelector('input[name="address"]').setAttribute("value", `${actUser.adresa}`);
            document.querySelector('input[name="date"]').setAttribute("value", `${actUser.datumRodjenja}`);
            document.querySelector('input[name="phone"]').setAttribute("value", `${actUser.telefon}`);
            document.querySelector('input[name="username"]').setAttribute("value", `${actUser.korisnickoIme}`);
            document.querySelector('input[name="email"]').setAttribute("value", `${actUser.email}`);
            // document.querySelector('input[name="phone"]').setAttribute("value", `${actUser.prosecnaOcena}`);
            // document.getElementById("course-desc").value = actUser.opis;
            let form = document.getElementById("confirm-user");
            form.addEventListener("submit", function(e) {
                e.preventDefault();
                console.log("aaaaa")
                let id = document.querySelector('input[name="id"]').value.trim()
                let name = document.querySelector('input[name="name"]').value.trim()
                let lname = document.querySelector('input[name="lastname"]').value.trim()
                let address = document.querySelector('input[name="address"]').value.trim()
                let date = document.querySelector('input[name="date"]').value.trim()
                let phone = document.querySelector('input[name="phone"]').value.trim()
                let username = document.querySelector('input[name="username"]').value.trim()
                let email = document.querySelector('input[name="email"]').value.trim()
                let listAll = [name, lname, address, date, phone, username, email];
                let today = new Date();
                let dd = String(today.getDate()).padStart(2, '0');
                let mm = String(today.getMonth() + 1).padStart(2, '0');
                let yyyy = today.getFullYear();
                let datespl = date.split('-')
                let yyyy1 = datespl[0]
                let mm1 = datespl[1]
                let dd1 = datespl[2]
                let alerto = true
                let emailPat = new RegExp("([a-zA-Z0-9]{1,})+([@])([a-z]{1,})+([.a-z]{1,})")
                console.log(datespl)
                if (yyyy > yyyy1) {

                } else if (yyyy1 == yyyy) {

                    if (mm1 < mm) {

                    } else if (mm1 == mm) {

                        if (dd1 < dd) {

                        } else {
                            console.log("dan")
                            alerto = false
                        }
                    } else {
                        console.log("mes")
                        alerto = false
                    }
                } else {
                    console.log("god")
                    alerto = false
                }
                if (alerto == true && emailPat.test(email) == true) {
                    for (let i in listAll) {
                        let a = listAll[i]
                        if (a == "") {
                            alert("Pogresan unos. Pokusajte opet.")
                        } else {
                            if (confirm("Da li ste sigurni") == true) {
                                alert("Uspesno promenjene informacije korisnika")
                                break
                            } else {
                                alert("Informacije korisnika nisu promenjene")
                                break
                            }
                        }
                    }
                } else {
                    alert("Neispravan datum ili email")
                }
            })


        }
    }
}
let deleteUsr = document.getElementById("delete-userr");
deleteUsr.addEventListener("click", function(e) {
    if (confirm("Da li ste sigurni") == true) {
        alert("Uspesno izbrisan korisnik")
        window.location.href = "index.html";
    } else {
        alert("Uspesno izbrisan korisnik")

    }
})
usersReq.open("GET", linkID);
usersReq.send();