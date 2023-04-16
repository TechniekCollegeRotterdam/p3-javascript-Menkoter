let output = document.getElementById("text");

let winkelmand = ["Bananen", "Whiskey", "Chips", "Bonen", "Aardappelen"];

let aantal_producten = winkelmand.length;

output.innerText = "Er zitten " + aantal_producten + " producten in uw winkelmand";
//hier boven staat alles tot opdracht 4


//opdracht 5
function product_toevoegen(){
    winkelmand.push("cola")
    output.innerText = winkelmand;
}

//opdracht 6
if(winkelmand.length >= 1) {
    output.innerText = winkelmand;
}
    else{
        output.innerText = "u heeft niet genoeg producten om te tonen"
    }


//opdracht 7 

if(winkelmand[4]  == "drop") {
    output.innerText = winkelmand
}

else { 
    output.innerText = "U heeft geen drop"
}

//Opdracht 8
output.innerText = winkelmand.join(" ");

//opdracht 9
winkelmand.splice(0.2);
output.innerText = winkelmand;

//opdracht 10
winkelmand.sort();
output.innerText = winkelmand; 

