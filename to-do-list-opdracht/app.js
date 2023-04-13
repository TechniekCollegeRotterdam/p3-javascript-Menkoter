let inputField = document.getElementById("inputField");
let button = document.getElementById("addToDo");
let container = document.getElementById(toDoContainer);

button.addEventListener("click", function(){
    //aanmaken van een p element oftewel paragraaf
    //dit zit opgeslagen in de variabel paragraph
let paragraph = document.createElement("p")
}

//de waarde van je input (dus )
console.log(inputField.value);

//paragraaf wordt toegevoegd aan de container
container.appendChild(paragraph);

inputField.value = "";



