let output = document.querySelector(".person");

let out = "";

fetch("./people.json")
    .then((response) => response.json())
    .then((people) => {
        for (let person of people) {
            out += `

            <h1> ${person.name}</h1>
        <p> ${person.name}</p>
            <p> ${person.age}</p>
            <img src="${person.image}"></img>

 `;

        }
        output.innerHTML = out;

    });
