let text = document.getElementById("text");

text.innerText = "U heeft voldoende budget";
text.innerText = "U heeft voldoende budget";text.innerText = "Helaas, te weinig geldt";

let budget = 100;

let product = 60;

if (budget > product ){
    text.innerText = "u heeft genoeggeld";
    text.style.color ="green"
} else{
    text.innerText = "u heeft niet genoeg budget";
    text.style.color ="red"
}


