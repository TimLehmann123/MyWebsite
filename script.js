function Suche() {
    var EingabeText = document.getElementById("Suchfeld").value;
    var Liste = document.getElementById("Liste");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(EingabeText));
    Liste.appendChild(li);
    document.getElementById("Suchfeld").value = "";
    
}
function AE() {
    let Liste = document.getElementById("Liste");
    Liste.innerHTML = "";

}
function hier() {
    window.location.href = "https://de.wikipedia.org/wiki/Wikipedia:Hauptseite"
    
}
function Y() {
    window.location.href = "https://www.yugioh-card.com/eu/de/"
}
function V() {
    window.location.href="v.html"
}
function D() {
    window.location.href ="https://www.bungie.net/7/en/destiny"
}
function MY() {
    window.location.href="S3.html"
}
function zr() {
    window.location.href="index.html"
}
function zs(){
    window.location.href="zahlenspiel.html"

}
function bg() {
    window.location.href="galerie.html"
}
function YGU() {
    window.location.href="S4.html"
}
function YGUcard() {
    window.location.href="S5.html"
}
function zr6() {
    window.location.href="index.html"
}
function v() {
    window.location.href="https://playvalorant.com/de-de/"
}