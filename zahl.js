function Zg() {
    a = Math.random() *  (100-50);
    b = Math.round(a);
    c = b + 5;
}

function pruefe() {
    var pruefe = document.getElementById("eingabe").value;
    if (pruefe < c) {
        alert("Mehr!");     
    } 
    if (pruefe > c) { 
        alert("Weniger!");
    }
    if (pruefe == c) {
        alert("Sehr gut! :-)");
        var EingabeText = document.getElementById("eingabe").value;
        var Liste = document.getElementById("Liste");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(EingabeText + "--Richtig!"));
        li.classList.add("h12");
        Liste.appendChild(li);
        document.getElementById("eingabe").value = "";   
    }
}
function zr2() {
    window.location.href="index.html"
}