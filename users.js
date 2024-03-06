let usersUrl = "https://sportskikampovi-8c0e5-default-rtdb.europe-west1.firebasedatabase.app/korisnici.json";
let usersReq = new XMLHttpRequest();
usersReq.onreadystatechange = function() {
    if (this.readyState == 4) {
        if (this.status == 200) {
            let users = JSON.parse(this.responseText);
            console.log(users)
            for (let i in users) {
                let actUser = users[i];
                console.log(i);
                const markup = ` <tr>
            <td>
                <a href="profil.html?id=${i}" class="link-users">
                    <p>${actUser.ime}</p>
                </a>
            </td>
            <td>
                <a href="profil.html?id=${i}" class="link-users">
                    <p>${actUser.prezime}</p>
                </a>
            </td>
            <td>
                <a href="profil.html?id=${i}" class="link-users">
                    <p>${actUser.email}</p>
                </a>
            </td>
            <td>
                <a href="profil.html?id=${i}" class="link-users">
                    <p>${actUser.telefon}</p>
                </a>
            </td>
            <td>
                <a href="profil.html?id=${i}" class="link-users">
                    <p>${actUser.datumRodjenja}</p>
                </a>
            </td>
            <td>
                <a href="profil.html?id=${i}" class="link-users">
                    <p>${actUser.adresa}</p>
                </a>
            </td>
        </tr>`
                let tableUsers = document.getElementById("table-users");
                tableUsers.innerHTML += markup
            }

        }
    }
}
usersReq.open("GET", usersUrl);
usersReq.send();