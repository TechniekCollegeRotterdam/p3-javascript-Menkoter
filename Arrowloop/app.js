const marvels = ['Iron Man', 'Avengers', 'Guardians of the Galaxy', 'Black Panther'];


const addMarvel = () => { 
    marvels.push("Thor");
    
}

addMarvel();
for(let marvel of marvels){
    console.log(marvel)
}

