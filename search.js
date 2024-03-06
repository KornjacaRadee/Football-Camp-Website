const regexEx = new RegExp('[a-zA-Z0-9 !@#$%^&*()_+="{}]{1}')
let abalo = new XMLHttpRequest();
abalo.onreadystatechange = function(e) {
    if (this.readyState == 4) {
        if (this.status == 200) {
            let courses = JSON.parse(this.responseText)
            let courses1 = Object.values(courses)
            let listaAll = []
            let listID = []
            courses1.forEach(course => {
                let kategorija = course.kategorija;
                let autor = course.autor;
                let ime = course.naziv;
                let id = course.id;

                let molimte = [kategorija, autor, ime];
                listID.push(id)
                listaAll.push(molimte)
            })
            let target = document.getElementById("search-bg")
            console.log(listaAll)
            searchItem = document.getElementById("searchBar")
            let searchWord = ""
            searchItem.addEventListener('keyup', (e) => {

                searchWord = searchItem.value
                console.log(searchWord)

                if (searchWord == "") {

                } else {

                    let foundCourse = []
                    let foundWord = []
                    for (let i in listaAll) {
                        let actList = listaAll[i];
                        for (let a in actList) {
                            let actLista = actList[a]
                            if (actLista.includes(searchWord)) {
                                if (foundCourse.includes(actList)) {

                                } else {
                                    foundCourse.push(listID[listaAll.indexOf(actList)])
                                    foundWord.push(searchWord)

                                }
                            }
                        };
                    };
                    target.innerHTML = ""
                    for (let p in foundCourse) {

                        let foundID = foundCourse[p]
                        let course9 = courses[foundID]
                        template = `<div class="searchResult">
                        <div class="card-search">
                            <a href="kurs.html?id=${course9.id}" class="decorationnone">
                                <h6 id="course-namee decorationnone" class="ime-kursa1" onclick="alert() ">${course9.naziv}</h6>
                            </a>
                            <p class="ime" id="course-authorr" class="autor-kursa1 decorationnone">${course9.autor}</p>
                            <p class="ime" id="course-categoryy" class="autor-kursa1 decorationnone">${course9.kategorija}</p>
                            <p class="pasus" class="course-descriptionn decorationnone">${course9.opis}</p>
                        </div>
                    </div>`
                        target.innerHTML += template
                        let divmark = document.getElementById("search-bg")

                        divmark.innerHTML = divmark.innerHTML.replaceAll(searchWord, `<mark>${searchWord}</mark>`)


                    }
                }




            });
        }
    }
}

function hideDiv() {
    setTimeout(`document.getElementById("search-bg").style.display = "none"`, 100)
}

// function alert() {
//     document.getElementById("searchBar").focus();

//     alert("dasdas")
// }

function showDiv() {
    document.getElementById("search-bg").style.display = "flex";
}
abalo.open("GET", "https://sportskikampovi-8c0e5-default-rtdb.europe-west1.firebasedatabase.app/kursevi.json")
abalo.send();