 
function wl() {
    var bild = document.getElementById("bild1");

    if (bild.src.endsWith("bild1.jpg")) {
        bild.src = "bild2.jpg";
    } else {
        if (bild.src.endsWith("bild2.jpg")) {
            bild.src = "bild3.jpeg";
        } else {
         if (bild.src.endsWith("bild3.jpeg")) {
            bild.src = "bild4.jpg";

        } else {
            if (bild.src.endsWith("bild4.jpg")) {
            bild.src = "bild5.jpg";
            
        } else {
            if (bild.src.endsWith("bild5.jpg")) {
            bild.src = "bild6.jpg";
            
        } else {
            if (bild.src.endsWith("bild6.jpg")) {
                bild.src = "bild7.jpg"
            } else {
            if (bild.src.endsWith("bild7.jpg")) {
            bild.src="bild1.jpg";
            } 
            
        }
     } 
    }
    }
    }
    }
}

    

function zr3() {
    window.location.href="index.html"
}