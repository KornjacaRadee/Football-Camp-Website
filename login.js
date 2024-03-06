let loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let username = document.getElementById("login-name").value.trim();
    let password = document.getElementById("login-password").value.trim();

    if (username == "" || password == "") {
        alert("Molimo popunite sva polja")
    } else {
        let request = new XMLHttpRequest();
        let actionUrl = loginForm.getAttribute("action");
        let actionUrll = actionUrl + ".json"
        request.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    console.log(this.responseText)
                    let users = JSON.parse(this.responseText)
                    let login = false;
                    for (let i in users) {
                        let actUser1 = users[i];
                        let actUsername = actUser1.korisnickoIme;
                        let actPassword = actUser1.lozinka;
                        console.log(actUsername, actPassword)
                        console.log(username, password)
                        if (actUsername == username && actPassword == password) {
                            login = true;
                            break;
                        } else {
                            login = false;
                        }
                    }
                    if (login == true) {
                        alert("Uspesno ste se ulogovali")
                    } else {
                        alert("Pogresan unos. Pokusajte ponovo.")
                    }
                }
            }
        };
        request.open("GET", actionUrll)
        request.send()

    }

});
let registerForm = document.getElementById("register-form");
console.log(registerForm)
registerForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let email = document.getElementById("register-email").value.trim()
    let username = document.getElementById("register-username").value.trim()
    let password = document.getElementById("register-password").value.trim()
    let telephone = document.getElementById("register-telephone").value.trim()
    let date = document.getElementById("register-date").value
    let name = document.getElementById("register-name").value.trim()
    let lastname = document.getElementById("register-lastname").value.trim()
    let address = document.getElementById("register-address").value.trim()
    let emailPat = new RegExp("([a-zA-Z0-9]{1,})+([@])([a-z]{1,})+([.a-z]{1,})")
    list = [email, username, password, telephone, date, name, lastname, address, date]
    listlen = [username, password, name, lastname]
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let datespl = date.split('-')
    let yyyy1 = datespl[0]
    let mm1 = datespl[1]
    let dd1 = datespl[2]
    let lgn = false
    let alerto = true
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
    if (alerto == true) {
        if (emailPat.test(email) == true && telephone > 0) {
            listaa: for (let i in list) {
                b = list[i]
                if (b == "") {
                    lgn = true
                    console.log(b)
                    break listaa
                } else {
                    for (let a in listlen) {
                        c = listlen[a]
                        if (c.length > 40 || c.length < 4) {
                            lgn = true

                            break listaa
                        } else {
                            lgn = false

                        }
                    }
                }
            }
            if (lgn == false) {
                alert("Uspesno ste se registrovali")
            } else if (lgn == true) {
                alert("Registracija neuspesna. Pokusajte opet")
            }
        }
        else {
            alert("Registracija neuspesna. Pokusajte opet")
        }

    } else {
        alert("Neispravan datum")
    }



});