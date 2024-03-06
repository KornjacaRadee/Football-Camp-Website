let usersUrl = "https://sportskikampovi-8c0e5-default-rtdb.europe-west1.firebasedatabase.app/korisnici.json";
let usersReq = new XMLHttpRequest();
usersReq.onreadystatechange = function() {
    if (this.readyState == 4) {
        if (this.status == 200) {
            let users = JSON.parse(this.responseText);

            function getParamValue() {
                const location = decodeURI(window.location.toString());
                const index = location.indexOf("?") + 1;
                const substrings = location.substring(index, location.length);
                const splitedSubstring = substrings.split("=");

                return splitedSubstring[1]
            }

            function capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }
            let idLink = getParamValue();
            for (let i in users) {
                if (i == idLink) {
                    document.getElementById('changeUserB').setAttribute("href", `promenakorisnika.html?id=${i}`)
                    for (let a in users[i]) {
                        let prvo = a;
                        let drugo = users[i][a];
                        console.log(drugo)
                        if (prvo == "datumRodjenja") {
                            prvo = "Datum Rodjenja"
                        } else if (prvo == "korisnickoIme") {
                            prvo = "Korisnicko Ime"
                        }
                        prvo = capitalizeFirstLetter(prvo)
                        let table = document.getElementById("table-user")
                        let template = `<tr>
                        <td class="table-profile">
                            <p class="in">${prvo}</p>
                        </td>
                        <td class="table-profile">
                            <p class="in">${drugo}</p>
                        </td>
                    </tr>`
                        table.innerHTML += template;

                    }
                }
            }
        }
    }
}
usersReq.open("GET", usersUrl);
usersReq.send();