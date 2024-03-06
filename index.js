let coursesUrl = "https://sportskikampovi-8c0e5-default-rtdb.europe-west1.firebasedatabase.app/kursevi.json";
let courses1 = "https://sportskikampovi-8c0e5-default-rtdb.europe-west1.firebasedatabase.app/kursevi/"
let coursesReq = new XMLHttpRequest();

coursesReq.onreadystatechange = function() {
    if (this.readyState == 4) {
        if (this.status == 200) {
            let courses = JSON.parse(this.responseText);
            let c = 1
            let target = document.getElementById("camps11")
            for (let i in courses) {
                let actCourse = courses[i];
                let template = ` <div class="camps-flex">
                <div class="course-wrap">
                    <div class="basketball card">
                        <div class="top">
                            <div class="left-top">
                                <h6 id="ime-kursa1" class="ime-kursa1">${actCourse.naziv}</h6>
                                <p class="ime" id="autor-kursa1" class="autor-kursa1">${actCourse.autor}</p>
                            </div>
                            <div class="right-top">
                                <img src="images/pointer.png" alt="pokazivač">
                            </div>
                        </div>
                        <div class="middle">
                            <p class="pasus" id="opis-kursa1" class="opis-kursa1">${actCourse.opis}</p>
                        </div>
                        <div class="bottom2">
                            <a href="kurs.html?id=${i}">
                                <h3 >Pročitajte još</h3>
                            </a>
                            <a id="${i}" href="#" onclick=addToCart(${i})>
                            <h3 class="sketchy-shit1 addcart" >Dodaj u korpu</h3>
                        </a>
                        </div>
                    </div>
    
    
                </div>`
                if (c % 2 == 0) {
                    template = ` <div class="camps-flex">
                    <div class="course-wrap right-card">
                        <div class="basketball card">
                            <div class="top">
                                <div class="left-top">
                                    <h6 id="ime-kursa1" class="ime-kursa1">${actCourse.naziv}</h6>
                                    <p class="ime" id="autor-kursa1" class="autor-kursa1">${actCourse.autor}</p>
                                </div>
                                <div class="right-top">
                                    <img src="images/pointer.png" alt="pokazivač">
                                </div>
                            </div>
                            <div class="middle">
                                <p class="pasus" id="opis-kursa1" class="opis-kursa1">${actCourse.opis}</p>
                            </div>
                            <div class="bottom2">
                                <a href="kurs.html?id=${i}">
                                    <h3 >Pročitajte još</h3>
                                </a>
                                <a id="${i}" href="#" onclick=addToCart(${i})>
                                <h3 class="sketchy-shit1 addcart" >Dodaj u korpu</h3>
                            </a>
                            </div>
                        </div>
        
        
                    </div>`
                }
                target.innerHTML += template;
                c += 1;

            }

        };
    };
};
coursesReq.open("GET", coursesUrl);
coursesReq.send();