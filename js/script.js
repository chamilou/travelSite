let cont = document.getElementById("cont");
cont.addEventListener("click", callMe);




function callMe() {
    let ul = document.getElementById("insertContact");
    ul.innerHTML = "";
    a = document.createElement("a")
    li = document.createElement("li")
    but = document.createElement("button")
    but.setAttribute('id', 'hideButton')
    but.innerText = "Спрятать";
    but.addEventListener('click', hideContact)
    a.setAttribute("href", 'tel:+79679379376')
    console.log(a)
    a.innerText = "Tel: +7-967-937-937-6"
    li.appendChild(a)
    li.appendChild(but)
    ul.appendChild(li)


}

function hideContact() {
    let ul = document.getElementById("insertContact");
    ul.innerHTML = "";
}