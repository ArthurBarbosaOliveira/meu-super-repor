// exercicio 1 -
let a = 5;
let b = 9;

let adicao = a + b;
console.log(adicao);

let subtracao = a - b;
console.log(subtracao);

let multiplicacao = a * b;
console.log(multiplicacao);

let divisao = a / b;
console.log(divisao);

let modulo = a % b;
console.log(modulo);


// exercicio 2 -
 const A = 50;
 const B = 20;
 const C = 30;

 if (A > B){
     console.log(A);
 } else {
     console.log(B);
 }

 //exercicio 3 - usaremos as constantes do ex 2. 

if (A > B && A > C){
    console.log("Maior número é: " + A);
} else if (B > A && B > C){
    console.log("Maior número é: " + B);
} else if (C > A && C > B){
    console.log("Maior número é: " + C);
}

// exercicio 4 - 

const valor = -3; 

if (valor > 0){
    console.log("positive");
} else if (valor < 0){
    console.log("negative")
} else {
    console.log("zero")
}
// exercicio 5 - DUVIDA A TIRAR NA MONITORIA 

let angulo1 = 30;
let angulo2 =60;
let angulo3 =90; 

// exercicio 6 
let pecadexadrez = "RAINHA";
let result = pecadexadrez.toLowerCase()
if (result === "rainha"){
    console.log("Movimento da sua peça são em linhas, colunas, proximidades e em diagonais ");
} else {
    console.log("Peça de Xadrez inválida");
}

// exercicio 7 

let notaemporcertagem = 0;

if (notaemporcertagem >= 90){
    console.log("A");
} else if (notaemporcertagem >= 80){
    console.log("B");
} else if (notaemporcertagem >= 70){
    console.log("C");
} else if (notaemporcertagem >= 60){
    console.log("D");
} else if (notaemporcertagem >= 50) {
    console.log("E");
} else if(notaemporcertagem < 50){
    console.log("F");
} else if(notaemporcertagem === 0 || notaemporcertagem >100){
    console.log("Nota inválida!");
} // por quer não ta aparecendo.

// dar continuidade a partir da 9