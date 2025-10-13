let data = [
{name: "Nacho", telephone: "966112233", age: 40},
{name: "Ana", telephone: "911223344", age: 35},
{name: "Mario", phone: "611998877", age: 15},
{name: "Laura", telephone: "633663366", age: 17}
];

let datos;
let menores = datos.filter(function (persona) {
    return persona.edad >= 30;
});
console.log ('Mayores de 30');
console.log(menores);


