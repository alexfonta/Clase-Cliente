let nombreUsuario = prompt("Nombre de Usuario:");

let mensaje = 'Bienvenido/a ' + nombreUsuario;
alert(mensaje);

let num1;
let num2;
let suma;

num1 = parseInt(prompt("Ingrese un número:"));
num2 = parseInt(prompt("Ingrese otro número:"));

suma = num1 + num2;

alert("La suma de " + num1 + " y " + num2 + " es: " + suma);

let edadUsuario = parseInt(prompt("Ingresa tu edad:"));

if(edadUsuario < 18){
    alert("Eres menor de edad.")
}else{
    alert("Eres mayor de edad.")
}

