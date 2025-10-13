
let N = 20;

for (let i = 0; i < N; i++) {
    let linea = "";
    for (let j = 0; j < N; j++) {
        if (j <= N - i - 1) {
            linea += " *";
        } else {
            linea += "  "; 
        }
    }
    console.log(linea);
}
