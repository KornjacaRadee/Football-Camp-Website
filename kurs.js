let coursessUrl = "https://sportskikampovi-8c0e5-default-rtdb.europe-west1.firebasedatabase.app/kursevi.json";
let coursessReq = new XMLHttpRequest();

coursessReq.onreadystatechange = function() {
    if (this.readyState == 4) {
        if (this.status == 200) {
            function getParamValue() {
                const location = decodeURI(window.location.toString());
                const index = location.indexOf("?") + 1;
                const substrings = location.substring(index, location.length);
                const splitedSubstring = substrings.split("=");

                return splitedSubstring[1]
            }
            let idCourse = getParamValue()
            let courses = JSON.parse(this.responseText);
            tableCourse = document.getElementById("table-course");
            for (let i in courses) {
                if (i == idCourse) {

                    actCourse = courses[i];
                    document.title = actCourse.naziv;
                    document.getElementById("button-change").setAttribute("href", `izmenakursa.html?id=${i}`)
                    document.getElementById("addToCartBtn").setAttribute("onclick", `addToCart(${i})`)

                    for (let a in actCourse) {



                        if (a == "opis" || a == "cena" || a == "slika" || a == "naziv") {
                            if (a == "cena") {
                                cenaCourse = document.getElementById("course-price");
                                cenaCourse.innerHTML = "$" + actCourse[a];
                            }
                            if (a == "naziv") {
                                cenaCourse = document.getElementById("naziv-kursa");
                                cenaCourse.innerHTML = actCourse[a];
                            }
                            if (a == "opis") {
                                cenaCourse = document.getElementById("opis-kursa");
                                cenaCourse.innerHTML = actCourse[a];
                            }
                            if (a == "slika") {
                                cenaCourse = document.getElementById("course-image");
                                cenaCourse.setAttribute("src", `${actCourse[a]}`)
                            }
                        } else {
                            let b = ""
                            if (a == "brojKorisnika") {
                                b = "Broj Korisnika"
                            } else if (a == "brojLekcija") {
                                b = "Broj Lekcija"
                            } else if (a == "prosecnaOcena") {
                                b = "Prosecna Ocena"
                            } else {
                                b = a;
                            }
                            const markup = `
                            <tr  class="info-row" >
                                <td class="left-col">
                                    ${b}
                                </td>
                                <td></td>
                                <td>${actCourse[a]}</td>
                             </tr>
                            `;
                            tableCourse.innerHTML += markup;

                        }
                    }
                }
            }
        }


    };
};


coursessReq.open("GET", coursessUrl);
coursessReq.send();