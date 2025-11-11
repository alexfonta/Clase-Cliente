let frecuencias = new Map();

for (let i = 1; i <= 10; i++) {
  frecuencias.set(i, 0);
}

for (let i = 0; i < 10000; i++) {
  let num = Math.floor(Math.random()*10)+ 1;
  frecuencias.set(num, frecuencias.get(num) + 1); 
}

for (let [numero, veces] of frecuencias) {
  console.log("Número " + numero + ": " + veces);
}
