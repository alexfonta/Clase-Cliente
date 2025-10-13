let p1 = document.getElementById('p1');

let contenidoInner = p1.innerHTML;
let contenidoText = p1.textContent;

let log = document.getElementById('log');
log.textContent = 'Texto InnerHTML: '+contenidoInner+ 'Texto textContent: '+contenidoText;
