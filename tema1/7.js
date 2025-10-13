/*var simbolo = "x";
var num = 0;
var espacio = " ";
while(num <= 20){
    espacio += "  ";
    console.log(espacio + simbolo);
    num++;
}*/

for(let i = 0; i <  20; i++){
    let linea = '';
    for(let j = 0; j < i; j++){
    linea += ' ';
} 
    linea += ' x';
    console.log(linea);
}