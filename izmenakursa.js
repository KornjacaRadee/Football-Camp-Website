let courses1 = "https://sportskikampovi-8c0e5-default-rtdb.europe-west1.firebasedatabase.app/kursevi/"
coursesReq = new XMLHttpRequest();

function getParamValue() {
    const location = decodeURI(window.location.toString());
    const index = location.indexOf("?") + 1;
    const substrings = location.substring(index, location.length);
    const splitedSubstring = substrings.split("=");

    return splitedSubstring[1]
}
let IDpage = getParamValue();
let linkID = courses1 + `${IDpage}.json`
coursesReq.onreadystatechange = function() {
    if (this.readyState == 4) {
        if (this.status == 200) {

            let actCourse = JSON.parse(this.responseText)
            document.querySelector('input[name="id"]').setAttribute("value", `${IDpage}`);
            document.querySelector('input[name="course-name"]').setAttribute("value", `${actCourse.naziv}`);
            document.querySelector('input[name="course-author"]').setAttribute("value", `${actCourse.autor}`);
            document.querySelector('input[name="course-lessons"]').setAttribute("value", `${actCourse.brojLekcija}`);
            document.querySelector('input[name="course-participants"]').setAttribute("value", `${actCourse.brojKorisnika}`);
            document.querySelector('input[name="course-language"]').setAttribute("value", `${actCourse.jezik}`);
            document.querySelector('input[name="course-grade"]').setAttribute("value", `${actCourse.prosecnaOcena}`);
            document.getElementById("course-desc").value = actCourse.opis;
            let option = actCourse.sertifikovan
            let optionY = document.getElementById("yesOp")
            let optionN = document.getElementById("noOp")
            if (option == "Da") {
                optionY.setAttribute("checked", true);
            } else {
                optionN.setAttribute("checked", true)
            }
            let cat = actCourse.sertifikovan
            let catY = document.getElementById("SportOp")
            let catN = document.getElementById("NeodredjenoOp")
            if (cat == "Sport") {
                catY.setAttribute("checked", true);
            } else {
                catN.setAttribute("checked", true)
            }
        }
    }
}
let changeCourseForm = document.getElementById("changeform");
console.log(changeCourseForm)
changeCourseForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let id = document.querySelector('input[name="id"]').value.trim();
    let name = document.querySelector('input[name="course-name"]').value.trim();
    let author = document.querySelector('input[name="course-author"]').value.trim();
    let lessons = document.querySelector('input[name="course-lessons"]').value.trim(); //// duzina
    let participants = document.querySelector('input[name="course-participants"]').value.trim();
    let grade = document.querySelector('input[name="course-grade"]').value.trim();
    let language = document.querySelector('input[name="course-language"]').value.trim();
    let date = document.querySelector('input[name="course-last-change"]').value

    let opis = document.getElementById("course-desc").value.trim();
    let listAll = [id, name, author, lessons, participants, grade, language, opis]
    let listlen = [name, author];
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    console.log(date)
    let datespl = date.split('-')
    let yyyy1 = datespl[0]
    let mm1 = datespl[1]
    let dd1 = datespl[2]
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
        if (listAll == "") {
            alert("Popunite sva polja.")
        } else {
            if (name.lenght > 30 || author.lenght > 30) {
                alert("Netacan unos. Pokusajte ponovo.")
            } else {
                if (participants > 1200 || lessons > 100) {
                    alert("Netacan unos. Pokusajte ponovo.")
                } else {
                    if (opis.lenght > 12000) {
                        alert("Netacan unos. Pokusajte ponovo.")
                    } else {
                        if (confirm("Da li ste sigurni") == true) {
                            alert("Uspesno izmenjen kurs")
                        } else {
                            alert("Kurs nije izmenjen")
                        }
                    }
                }
            }
        }
    } else {
        alert("Neispravan datum")
    }

});
let deleteCoursee = document.getElementById("deleteCoursee")
deleteCoursee.addEventListener("click", function(e) {
    if (confirm("Da li ste sigurni") == true) {
        alert("Uspesno obrisan kurs")
        window.location.href = "index.html";
    } else {
        alert("Kurs nije izbirsan")
    }
});
coursesReq.open("GET", linkID);
coursesReq.send();