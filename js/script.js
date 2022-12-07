let showCont = 1;
let cont = document.getElementById("cont");
cont.addEventListener("click", showContact);


function showContact() {
    if (showCont == 1) {
        callMe()
    } else {
        hideContact()
    }
}
//finction callMe show the contact telephone
function callMe() {
    let ul = document.getElementById("insertContact");
    ul.innerHTML = "";
    a = document.createElement("a")
    li = document.createElement("li")
    a.setAttribute("href", 'tel:+79679379376')
    a.innerText = "Tel: +7-967-937-937-6"
    li.appendChild(a)
    ul.appendChild(li)
    showCont = 0
}

function hideContact() {
    let ul = document.getElementById("insertContact");
    ul.innerHTML = "";
    showCont = 1
}

//show a new content