let getal = 0; 
let output = document.getElementById("getal");

function verhoogGetal(){
    getal++;
    
    output.innerText = getal;

    if(getal == 10) {
        getal = 0; 
    }
}

