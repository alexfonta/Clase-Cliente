const palabras = ['ana','radar','hola'];
let palindromos = [];

for(let palabra of palabras){
    let esPalindromo = true;
    for(let i in palabra){
        if(palabra[i] !== palabra[palabra.length -1 -i]){
            esPalindromo = false;
            break;
        }
    }
    if(esPalindromo) {
        palindromos[palindromos.length] = palabra
    }
}

console.log('Palíndomos: ' + palindromos);
