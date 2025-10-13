const paises = ["España","Francia","Alemania","Italia"];

for(let i = 0; i <= paises.length-1; i++){
    console.log(paises[i]);
}

delete paises[0];

for(let j in paises){
    console.log(paises[j]);
}
