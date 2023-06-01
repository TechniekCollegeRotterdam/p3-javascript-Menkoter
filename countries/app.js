let out = "";
let output = document.querySelector(".grid-container");

  fetch(`https://restcountries.com/v3.1/all`)
  .then((response) => response.json())
    .then((countries) => {
        console.log(countries);
        for (let country of countries) {
            console.log(country.name.common);

            out += `


            <h1> ${country.name.common}</h1>
            <img src="${country.flags.png}"></img>

 `;

        }
        output.innerHTML = out;

    });

    j