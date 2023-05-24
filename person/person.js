let output = document.querySelector(".output");

CSSFontPaletteValuesRule person = {
name : "Menno",
age : "17",
birthdate : "18-08-2005",
sex : "Man",
alive : true,
hobbies: ["Varen, Gamen, Lopen, Tekenen"],
nameChange: function () {
    return "";
},
empathizeChange: function (){
    return "";
},
rename: function(empathize){
    return (this.empathize = empathize)
}
}

output.innerHTML
<p>$(person.name)</p>
<p>$(person.age)</p>
<p>$(person.birthdate)</p>
<p>$(person.sex)</p>
<p>$(person.alive)</p>
<p>$(person.hobbies)</p>


output.innerHTML = ` 
<p>His hobbies are ${person.hobbies[0]}</p>
<p>His hobbies are ${hobby.Gamen[1]}</p>
<p>His hobbies are ${hobby.Lopen[2]}</p>
<p>His hobbies are ${hobby.Tekenen[3]}</p>









`
