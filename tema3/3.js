const nombres = ["Alex","Dani","Liam","Jordi","Lucas"];
let edades = [10,22,14,20,31];

let mayoresDeEdad = [];

for(let i = 0; i <= nombres.length; i++){
    if(edades[i] >= 18){
        mayoresDeEdad[mayoresDeEdad.length] = nombres[i];
    }
}
console.log(mayoresDeEdad);