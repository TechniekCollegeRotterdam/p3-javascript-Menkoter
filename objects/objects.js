let output = document.querySelector(".output");

const car = {

name = Ferrari,
model = 812,
weight = 1.487,
color = red,
repairs: ["banden", "koppeling" , "riem"],
//methods
start: function(){
    return "ik ben gestart";
},
drive: function(){
    return "ik ga rijden"
},
brake: function(){
    return "ik ga rem"
},
stop: function(){
    return "ik ben gestopt"
},

};

console.log(car.repairs[2]);

car.name= "Ferrari";
console.log(car.name)

output.innerHTML = ` 
<p>De naam van de auto is ${car.name}</p>
`