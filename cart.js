async function addToCart(id) {
    async function getall() {
        const a = await fetch("https://sportskikampovi-8c0e5-default-rtdb.europe-west1.firebasedatabase.app/kursevi.json")
        const b = await a.json()
        return b
    }

    async function showObj() {
        let rray = []
        const obj = await getall()

        return obj

    }
    localStorage.setItem("cart", id)
    let courses = await showObj();





    for (let i in courses) {
        if (i == id) {

            actCourse = courses[i]
            console.log(actCourse)
            alert("Uspesno dodato u korpu")
            let parentEl = document.getElementById("cart");
            let template = `<div id="carta${id}" class="basketballcart">
            <div class="left-cart-div">
                <h2>${actCourse.naziv}</h2>
                <p class="name">${actCourse.autor}</p>
            </div>
            <div class="right-cart-div">
                <h2 class="price">$${actCourse.cena}</h2>
                <a class="remove"onclick="removeCartItem(${id})">Remove</a>
            </div>
        </div>`
            parentEl.innerHTML += template;
        }
    }

}
async function removeCartItem(id) {
    async function getall() {
        const a = await fetch("https://sportskikampovi-8c0e5-default-rtdb.europe-west1.firebasedatabase.app/kursevi.json")
        const b = await a.json()
        return b
    }

    async function showObj() {
        let rray = []
        const obj = await getall()

        return obj

    }
    localStorage.setItem("cart", id)
    let courses = await showObj();

    for (let i in courses) {
        if (i == id) {

            actCourse = courses[i]
            console.log(actCourse)
            console.log(`cart$`)
            document.getElementById(`carta${id}`).innerHTML = "";
        }
    }

}
async function removeCartItems() {
    let parentEl = document.getElementById("cart");
    parentEl.innerHTML = ""


}